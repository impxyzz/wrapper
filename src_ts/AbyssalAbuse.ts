import { EventsSDK, LocalPlayer, Menu, Modifier } from "wrapper/Imports"

const menu = Menu.AddEntry(["Utility", "Abyssal Abuser"]),
	active = menu.AddToggle("Active")

let waiting_to_reassemble = false,
	unlocked_items = 0,
	arModifiers: Map<Modifier, number> = new Map()
EventsSDK.on("ModifierCreated", buff => {
	if (active.value && buff.Name === "modifier_bashed" && buff.Ability?.Owner === LocalPlayer?.Hero) {
		arModifiers.set(buff, buff.DieTime)
		checkAbyss()
	}
})
EventsSDK.on("ModifierRemoved", buff => arModifiers.delete(buff))
function checkAbyss() {
	if (waiting_to_reassemble)
		return
	let myHero = LocalPlayer?.Hero
	if (myHero === undefined)
		return
	const abys = myHero.GetItemByName("item_abyssal_blade")
	if (abys !== undefined && myHero.Inventory.HasFreeSlots(0, 9, 2)) {
		myHero!.DisassembleItem(abys, false)
		waiting_to_reassemble = true
	}
}
const abyss_recipe = ["item_basher", "item_vanguard", "item_recipe_abyssal_blade"]
EventsSDK.on("Tick", () => {
	if (!active.value)
		return
	let myHero = LocalPlayer!.Hero
	if (myHero === undefined || !myHero.IsAlive)
		return
	// loop-optimizer: KEEP
	arModifiers.forEach((time, buff) => {
		if (!time || !buff.DieTime)
			arModifiers.delete(buff)
		else if (buff.DieTime !== time) {
			arModifiers.set(buff, buff.DieTime)
			checkAbyss()
		}
	})
	if (waiting_to_reassemble && unlocked_items >= 3)
		waiting_to_reassemble = myHero.GetItemByName("item_abyssal_blade") === undefined
	if (!waiting_to_reassemble) {
		unlocked_items = 0
		return
	}
	abyss_recipe.forEach(name => {
		let item = myHero!.GetItemByName(name, true)
		if (item === undefined)
			return
		if (item.IsCombineLocked) {
			myHero!.ItemSetCombineLock(item, false)
			unlocked_items++
		}
	})
})
EventsSDK.on("GameEnded", () => {
	waiting_to_reassemble = false
	unlocked_items = 0
})
