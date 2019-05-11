import { CreateRGBTree, MenuFactory } from "../CrutchesSDK/Wrapper"
import { PickupItem, PickupRune } from "../Orders"
import * as Utils from "../Utils"

let registeredEvents = {
		onEntityCreated: undefined,
		onEntityDestroyed: undefined,
		onTick: undefined,
		onPrepareUnitOrders: undefined,
		onDraw: undefined,
	},
	allRunes: C_DOTA_Item_Rune[] = [],
	allRunesParticles: number[][] = [],
	ground_items: C_DOTA_Item_Physical[] = [],
	npcs: C_DOTA_BaseNPC[] = [],
	picking_up: C_DOTA_Item_Rune[] = []

const snatcherMenu = MenuFactory("Snatcher")

const stateMain = snatcherMenu.AddToggle("State").OnValue(onStateMain)

// ----- Rune

const runeMenu = snatcherMenu.AddTree("Rune settings")

const stateRune = runeMenu.AddToggle("Snatch Rune")
	.OnDeactivate(onDeactivateRune)
	.OnActivate(getAllEntities)

const runeToggle = runeMenu.AddKeybind("Rune toogle")
	.OnRelease(() => stateRune.ChangeReverse())

const runeHoldKey = runeMenu.AddKeybind("Rune hold key")
	.OnRelease(() => {
		if (!stateRune.value)
			onDeactivateRune()
	})

// -- Draw particles

const drawParticles = runeMenu.AddTree("Draw indicators (particles)")

const drawParticleTake = drawParticles.AddToggle("Take rune")
	.OnValue(destroyRuneAllParticles)
	.OnActivate(self =>
		drawParticles.AddControl(drawParticleTake_Color.tree, self.parent.entries.indexOf(self) + 1))
	.OnDeactivate(() =>
		drawParticles.RemoveControl(drawParticleTake_Color.tree))

const drawParticleTake_Color = CreateRGBTree(drawParticleTake.value ? drawParticles : undefined, "indicators color")

drawParticleTake_Color.R.OnValue(updateRuneAllParticle)
drawParticleTake_Color.G.OnValue(updateRuneAllParticle)
drawParticleTake_Color.B.OnValue(updateRuneAllParticle)

const drawParticleKill = drawParticles.AddToggle("Kill rune")
	.SetToolTip("Color for kill - Red")
	.OnValue(destroyRuneAllParticles)

// ----- Items

const itemsMenu = snatcherMenu.AddTree("Items settings")

const stateItems = itemsMenu.AddToggle("Snatch Items")
	.OnDeactivate(onDeactivateItems)
	.OnActivate(getAllEntities)

const itemsToggle = itemsMenu.AddKeybind("Items toogle")
	.OnRelease(() => stateItems.ChangeReverse())

const itemsHoldKey = itemsMenu.AddKeybind("Items hold key")
	.OnRelease(() => {
		if (!stateItems.value)
			onDeactivateItems()
	})

const takeRadius = snatcherMenu.AddSlider("Pickup radius", 150, 50, 500, "Default range is 150, that one don't require rotating unit to pickup something")

const listOfItems = itemsMenu.AddListBox("Items for snatch",
	["item_gem", "item_cheese", "item_rapier", "item_aegis"],
	[true, true, true, true])

const stateControllables = snatcherMenu.AddToggle("Use other units")

// ----- Draw

const drawMenu = snatcherMenu.AddTree("Draw")
const drawStatus = drawMenu.AddToggle("Draw status"),
	statusPosX = drawMenu.AddSlider("Position X (%)", 0, 0, 100),
	statusPosY = drawMenu.AddSlider("Position Y (%)", 75, 0, 100)

function onStateMain(state: boolean = stateMain.value) {
	if (!state) {
		destroyEvents()

		onDeactivateRune()
		onDeactivateItems()
	} else
		registerEvents()
}

function getAllEntities() {
	// loop-optimizer: POSSIBLE_UNDEFINED
	Entities.AllEntities.forEach(onCheckEntity)
}

function onDeactivateRune() {
	destroyRuneAllParticles()
	allRunes = []
}

function onDeactivateItems() {
	ground_items = []
}

function registerEvents() {
	registeredEvents.onEntityCreated = Events.on("onEntityCreated", onCheckEntity)
	registeredEvents.onEntityDestroyed = Events.on("onEntityDestroyed", onEntityDestroyed)
	registeredEvents.onTick = Events.on("onTick", onTick)
	registeredEvents.onPrepareUnitOrders = Events.on("onPrepareUnitOrders", order => picking_up[Entities.GetEntityID(order.unit)] === undefined)
	registeredEvents.onDraw = Events.on("onDraw", onDraw)

	getAllEntities()
}

function destroyEvents() {
	Object.keys(registeredEvents).forEach(name => {
		let listenerID = registeredEvents[name]
		if (listenerID !== undefined) {
			Events.removeListener(name, listenerID)
			registeredEvents[name] = undefined
		}
	})
}

function onCheckEntity(ent: C_BaseEntity) {
	if (ent instanceof C_DOTA_Item_Rune)
		if (!allRunes.includes(ent)) // dafuq?
			allRunes.push(ent)

	if (ent instanceof C_DOTA_Item_Physical)
		if (!ground_items.includes(ent)) {
			let m_hItem = ent.m_hItem
			if (m_hItem !== undefined && listOfItems.IsInSelected(m_hItem.m_pAbilityData.m_pszAbilityName))
				ground_items.push(ent)
		} else // dafuq?
			Utils.arrayRemove(ground_items, ent)
}

Events.on("onNPCCreated", (npc: C_DOTA_BaseNPC) => npcs.push(npc))

function onEntityDestroyed(ent: C_BaseEntity) {
	if (ent instanceof C_DOTA_Item_Rune)
		removedIDRune(ent as C_DOTA_Item_Rune)
	else if (ent instanceof C_DOTA_Item_Physical)
		Utils.arrayRemove(ground_items, ent)
	else if (ent instanceof C_DOTA_BaseNPC)
		Utils.arrayRemove(npcs, ent)
}

function onTick() {
	if (!IsInGame() || GameRules.m_bGamePaused)
		return

	let controllables: C_DOTA_BaseNPC[] = stateControllables.value
		? GetControllables()
		: [LocalDOTAPlayer.m_hAssignedHero as C_DOTA_BaseNPC]
	snatchRunes(controllables)
	snatchItems(controllables)
}

Events.on("onGameEnded", () => picking_up = [])

function onDraw() {
	if (!drawStatus.value || !IsInGame())
		return

	let text = ""

	// rune
	text += `${stateRune.name}: ${(stateRune.value || runeHoldKey.IsPressed) ? "On" : "Off"}`

	text += " | "

	// items
	text += `${stateItems.name}: ${(stateItems.value || itemsHoldKey.IsPressed) ? "On" : "Off"}`

	const wSize = Renderer.WindowSize

	Renderer.Text (
		wSize.x / 100 * statusPosX.value,
		wSize.y / 100 * statusPosY.value,
		text,
	)
}

function GetControllables() {
	return npcs.filter(npc =>
		(npc instanceof C_DOTA_BaseNPC_Hero || npc instanceof C_DOTA_Unit_SpiritBear)
		&& !npc.m_bIsIllusion
		&& !Utils.IsUnitStateFlagSet(npc, modifierstate.MODIFIER_STATE_FAKE_ALLY)
		&& Utils.IsControllableByPlayer(npc, LocalDOTAPlayer.m_iPlayerID),
	)
}

// ------- Rune

function snatchRunes(controllables: C_DOTA_BaseNPC[]) {
	if (!stateRune.value && !runeHoldKey.IsPressed)
		return

	allRunes.forEach(rune => {
		let near = Utils.orderBy(controllables, unit => unit.m_vecNetworkOrigin.Distance(rune.m_vecNetworkOrigin)).some(npc => snatchRuneByUnit(npc, rune))
		if (!near && (drawParticleTake.value || drawParticleKill.value))
			destroyRuneParticles(Entities.GetEntityID(rune))
	})
}

function snatchRuneByUnit(npc: C_DOTA_BaseNPC, rune: C_DOTA_Item_Rune) {
	let npc_id = Entities.GetEntityID(npc)
	if (picking_up[npc_id] !== undefined)
		return false

	if (!Utils.IsUnitStateFlagSet(npc, modifierstate.MODIFIER_STATE_STUNNED) && !npc.m_bIsWaitingToSpawn) {
		const Distance = npc.m_vecNetworkOrigin.Distance2D(rune.m_vecNetworkOrigin)

		if (Distance <= takeRadius.value) {
			picking_up[npc_id] = rune
			PickupRune(npc, rune, false)
			return false
		}

		const attackRange = npc.m_fAttackRange

		if (Distance >= Math.max(500, attackRange) * 2)
			return false

		if (drawParticleTake.value || drawParticleKill.value) {
			const runeID = Entities.GetEntityID(rune)

			if (allRunesParticles[runeID] === undefined) {
				allRunesParticles[runeID] = []

				if (drawParticleTake.value)
					createRuneParticle(rune, new Vector3(0, 255), takeRadius.value)

				if (drawParticleKill.value)
					createRuneParticle(rune, new Vector3(255, 0), attackRange)
			}

		}
	}
	return true
}

function removedIDRune(rune: C_DOTA_Item_Rune) {
	{
		let id = picking_up.indexOf(rune)
		if (id !== -1)
			delete picking_up[id]
	}

	const idRune = allRunes.indexOf(rune)

	if (idRune !== -1) {
		allRunes.splice(idRune, 1)

		destroyRuneParticles(Entities.GetEntityID(rune))
	}
}

function createRuneParticle(ent: C_BaseEntity, color: Vector3, radius: number) {
	const particleID = Particles.Create (
		"particles/ui_mouseactions/drag_selected_ring.vpcf",
		ParticleAttachment_t.PATTACH_ABSORIGIN,
		ent,
	)

	Particles.SetControlPoint(particleID, 1, color)
	Particles.SetControlPoint(particleID, 2, new Vector3(radius * 1.1, 255))

	allRunesParticles[Entities.GetEntityID(ent)].push(particleID)
}

function updateRuneAllParticle() {
	let newColor = new Vector3 (
		drawParticleTake_Color.R.value,
		drawParticleTake_Color.G.value,
		drawParticleTake_Color.B.value,
	)

	// loop-optimizaer: KEEP
	allRunesParticles.forEach(pars => Particles.SetControlPoint(pars[0], 1, newColor))
}

function destroyRuneParticles(runeID: number | string) {
	var particles = allRunesParticles[runeID] as number[]
	if (particles !== undefined) {
		particles.forEach(particleID =>
			Particles.Destroy(particleID, true))

		allRunesParticles[runeID] = undefined
	}
}

function destroyRuneAllParticles() {
	// loop-optimizaer: KEEP
	allRunesParticles.forEach(particles => particles.forEach(particleID => Particles.Destroy(particleID, true)))
	allRunesParticles = []
}

// ------- Items

function snatchItems(controllables: C_DOTA_BaseNPC[]) {
	if ((!stateItems.value && !itemsHoldKey.IsPressed) || listOfItems.IsZeroSelected)
		return

	let free_controllables = controllables
	ground_items.forEach(item => free_controllables.some(npc => {
		if (npc.m_vecNetworkOrigin.Distance2D(item.m_vecNetworkOrigin) > takeRadius.value || !haveFreeSlot(npc, item))
			return false
		PickupItem(npc, item, false)
		free_controllables.splice(free_controllables.indexOf(npc))
		return true
	}))
}

function haveFreeSlot(npc: C_DOTA_BaseNPC, item: C_DOTA_Item_Physical) {
	let nameItem = item.m_hItem.m_pAbilityData.m_pszAbilityName,
		checkSlots = nameItem === "item_cheese" ? 9 : 6

	// change to GetItemByName(npc, nameItem === "item_cheese") !== undefined;
	for (var i = checkSlots; i--; )
		if (Utils.GetItemInSlot(npc, i) === undefined)
			return true
	return false
}

onStateMain()
