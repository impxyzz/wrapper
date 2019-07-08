import EntityManager from "../../Managers/EntityManager"
import Hero from "../Base/Hero"
import Item from "../Base/Item"
import Player from "../Base/Player"
import Unit from "../Base/Unit"

const MAX_ITEMS = 15

export default class Inventory {
	protected m_Unit: Unit
	readonly m_Inventory: C_DOTA_UnitInventory
	readonly m_hItems: C_DOTA_Item[]

	constructor(ent: Unit) {
		this.m_Unit = ent
		this.m_Inventory = ent.m_pBaseEntity.m_Inventory
		this.m_hItems = this.m_Inventory.m_hItems as C_DOTA_Item[]
	}

	get Items(): Item[] {
		return this.GetItems(0, 5)
	}
	get Backpack(): Item[] {
		return this.GetItems(6, 8)
	}
	get Stash(): Item[] {
		return this.GetItems(9, 14)
	}
	get FreeSlotsInventory(): DOTAScriptInventorySlot_t[] {
		return this.GetFreeSlots(0, 5)
	}
	get FreeSlotsBackpack(): DOTAScriptInventorySlot_t[] {
		return this.GetFreeSlots(6, 8)
	}
	get FreeSlotsStash(): DOTAScriptInventorySlot_t[] {
		return this.GetFreeSlots(9, 14)
	}
	get HasAnyItemInventory(): boolean {
		return this.HasAnyItem(0, 5)
	}
	get HasAnyItemBackpack(): boolean {
		return this.HasAnyItem(6, 8)
	}
	get HasAnyItemStash(): boolean {
		return this.HasAnyItem(9, 14)
	}
	get HasFreeSlotsInventory(): boolean {
		return this.HasFreeSlot(0, 5)
	}
	get HasFreeSlotsBackpack(): boolean {
		return this.HasFreeSlot(6, 8)
	}
	get HasFreeSlotsStash(): boolean {
		return this.HasFreeSlot(9, 14)
	}
	get IsStashEnabled(): boolean {
		return this.m_Inventory.m_bStashEnabled
	}
	get Owner(): Unit {
		return this.m_Unit
	}

	GetItem(slot: DOTAScriptInventorySlot_t): Item {
		if (!this.m_Unit.IsValid || slot > MAX_ITEMS)
			return undefined

		return EntityManager.GetEntityByNative(this.m_hItems[slot]) as Item
	}
	GetItems(start: number, end: number): Item[] {
		start = Math.min(start, MAX_ITEMS)
		end = Math.min(end, MAX_ITEMS)

		let items: Item[] = []
		if (this.m_Unit.IsValid && start <= end)
			for (let i = start; i < end; i++) {
				let item = this.GetItem(i)
				if (item !== undefined)
					items.push(item)
			}

		return items
	}
	GetFreeSlots(start: number, end: number): DOTAScriptInventorySlot_t[] {
		start = Math.min(start, MAX_ITEMS)
		end = Math.min(end, MAX_ITEMS)

		let items: DOTAScriptInventorySlot_t[] = []
		if (this.m_Unit.IsValid && start <= end)
			for (let i = start; i < end; i++)
				if (this.m_hItems[i] !== undefined)
					items.push(i as DOTAScriptInventorySlot_t)
		return items
	}
	HasAnyItem(start: number, end: number): boolean {
		if (this.m_Unit.IsValid && start <= MAX_ITEMS && start <= end) {
			for (let i = end + 1; i-- > start; ) {
				if (i > MAX_ITEMS)
					break

				if (this.m_hItems[i] !== undefined)
					return true
			}
		}
		return false
	}
	HasFreeSlot(start: number, end: number): boolean {
		if (this.m_Unit.IsValid && start <= MAX_ITEMS && start <= end) {
			for (let i = end + 1; i-- > start; ) {
				if (i > MAX_ITEMS)
					break

				if (this.m_hItems[i] === undefined)
					return true
			}
		}
		return false
	}
	HasItemByOtherPlayer(player: Hero): boolean {

		if (this.m_Unit.IsValid) {
			let itemsNative = this.m_hItems,
				playerID = player.PlayerID

			for (let i = 0; i < 14; i++) {

				if (itemsNative[i] !== undefined && (itemsNative[i] as C_DOTA_Item).m_iPlayerOwnerID === playerID)
					return true
			}
		}
		return false
	}
	GetItemByName(name: string | RegExp, includeBackpack: boolean = false): Item {
		if (this.m_Unit.IsValid) {
			let items = this.m_hItems,
				len = Math.min(items.length, includeBackpack ? 9 : 6)

			for (let i = 0; i < len; i++) {
				let item = EntityManager.GetEntityByNative(items[i]) as Item

				if (item !== undefined && (name instanceof RegExp ? name.test(item.Name) : item.Name === name))
					return item
			}
		}
		return undefined
	}
	GetItemByRegexp(regex: RegExp, includeBackpack: boolean = false): Item {
		if (this.m_Unit.IsValid) {

			let items = this.m_hItems,
				len = Math.min(items.length, includeBackpack ? 9 : 6)

			for (let i = 0; i < len; i++) {

				let item = EntityManager.GetEntityByNative(items[i]) as Item

				if (item !== undefined && regex.test(item.AbilityData.Name))
					return item
			}
		}
		return undefined
	}
	GetItemsByNames(names: string[], includeBackpack: boolean = false): Item[] {
		let items: Item[] = []

		if (this.m_Unit.IsValid) {

			// loop-optimizer: FORWARD
			names.forEach(name => {

				let item = this.GetItemByName(name, includeBackpack)

				if (item !== undefined)
					items.push(item)
			})
		}
		return items
	}
	GetItemByNameInBackpack(name: string): Item {
		if (this.m_Unit.IsValid) {

			let items = this.m_hItems,
				len = Math.min(items.length, 9)

			for (let i = 6; i < len; i++) {
				let item = EntityManager.GetEntityByNative(items[i]) as Item

				if (item !== undefined && item.AbilityData.Name === name)
					return item
			}
		}
		return undefined
	}
}