import {
	ArrayExtensions,
	Color,
	EventsSDK,
	GameRules,
	GameSleeper,
	Hero,
	LocalPlayer,
	Menu,
	ParticlesSDK,
	PhysicalItem,
	RendererSDK,
	Rune,
	Unit,
	Vector3,
	DOTAGameUIState_t,
	EntityManager,
	GameState,
	Particle,
} from "wrapper/Imports"

enum ESelectedType {
	ALL = 0,
	ONLY_BOUNTY = 1,
	ONLY_POWER = 2,
}

let particleManager = new ParticlesSDK(),
	allRunesParticles = new Map<Rune, Particle[]>(),
	picking_up = new Map<Unit, Rune>(),
	selectedRuneType: ESelectedType = ESelectedType.ALL,
	Sleep = new GameSleeper()
const snatcherMenu = Menu.AddEntry(["Utility", "Snatcher"])

const stateMain = snatcherMenu.AddToggle("State", true)
	.OnValue(() => {
		destroyRuneAllParticles()
	})

// ----- Rune

const runeMenu = snatcherMenu.AddNode("Rune settings")

const stateRune = runeMenu.AddToggle("Snatch Rune", true).OnDeactivate(destroyRuneAllParticles)

const typesSelect = runeMenu.AddSwitcher("Runes for snatch", ["All", "Only Bounty", "Only PowerUps"])
typesSelect.OnValue(self => selectedRuneType = self.selected_id)

runeMenu.AddKeybind("Rune toogle").OnRelease(() => stateRune.value = !stateRune.value)

const runeHoldKey = runeMenu.AddKeybind("Rune hold key").OnRelease(() => !stateRune.value && destroyRuneAllParticles())

// -- Draw particles

const drawParticles = runeMenu.AddNode("Draw indicators (particles)")

const drawParticleTake = drawParticles.AddToggle("Take rune")
	.OnValue(destroyRuneAllParticles)

const drawParticleTake_Color = drawParticles.AddColorPicker("indicators color")
drawParticleTake_Color.R.OnValue(updateRuneAllParticle)
drawParticleTake_Color.G.OnValue(updateRuneAllParticle)
drawParticleTake_Color.B.OnValue(updateRuneAllParticle)
drawParticleTake_Color.A.OnValue(updateRuneAllParticle)

const drawParticleKill = drawParticles.AddToggle("Kill rune")
	.SetTooltip("Color for kill - Red")
	.OnValue(destroyRuneAllParticles)

// ----- Items

const itemsMenu = snatcherMenu.AddNode("Items settings")

const stateItems = itemsMenu.AddToggle("Snatch Items", true)

itemsMenu.AddKeybind("Items toogle").OnRelease(() => stateItems.value = !stateItems.value)

const itemsHoldKey = itemsMenu.AddKeybind("Items hold key").OnRelease(() => !stateItems.value)

const takeRadius = snatcherMenu.AddSlider("Pickup radius", 150, 50, 500, "Default range is 150, that one don't require rotating unit to pickup something")

const listOfItems = itemsMenu.AddImageSelector("Items for snatch", [
	"item_gem",
	"item_cheese",
	"item_rapier",
	"item_aegis",
], new Map<string, boolean>([["item_gem", true], ["item_cheese", true], ["item_rapier", true], ["item_aegis", true]]))

const stateControllables = snatcherMenu.AddToggle("Use other units")

// ----- Draw

const drawMenu = snatcherMenu.AddNode("Draw")
const drawStatus = drawMenu.AddToggle("Draw status"),
	statusPosX = drawMenu.AddSlider("Position X (%)", 0, 0, 100),
	statusPosY = drawMenu.AddSlider("Position Y (%)", 75, 0, 100)

EventsSDK.on("GameEnded", () => {
	Sleep.FullReset()
	picking_up.clear()
})

EventsSDK.on("EntityDestroyed", ent => {
	if (ent instanceof Rune)
		removedIDRune(ent)
	if (ent instanceof Unit)
		picking_up.delete(ent)
})

EventsSDK.on("Tick", () => {
	if (LocalPlayer!.IsSpectator || !stateMain.value)
		return false

	let controllables: Unit[] = stateControllables.value
		? GetControllables()
		: LocalPlayer!.Hero !== undefined ? [LocalPlayer!.Hero] : []

	snatchRunes(controllables)
	snatchItems(controllables)
})

EventsSDK.on("Draw", () => {
	if (!drawStatus.value || !GameRules?.IsInGame || GameState.UIState !== DOTAGameUIState_t.DOTA_GAME_UI_DOTA_INGAME)
		return

	let text = ""

	// rune
	text += `${stateRune.name}: ${(stateRune.value || runeHoldKey.is_pressed) ? "On" : "Off"}`

	text += " | "

	// items
	text += `${stateItems.name}: ${(stateItems.value || itemsHoldKey.is_pressed) ? "On" : "Off"}`

	RendererSDK.Text(text, RendererSDK.WindowSize.DivideScalar(100).MultiplyScalarX(statusPosX.value).MultiplyScalarY(statusPosY.value))
})

EventsSDK.on("PrepareUnitOrders", order => !picking_up.has(order.Unit as Unit))

function GetControllables() {
	return EntityManager.GetEntitiesByClass(Unit).filter(npc =>
		(npc instanceof Hero || npc.ClassName === "CDOTA_Unit_SpiritBear")
		&& !npc.IsIllusion
		&& npc.IsControllable
	)
}

// ------- Rune

function snatchRunes(controllables: Unit[]) {
	if (!stateRune.value && !runeHoldKey.is_pressed)
		return

	EntityManager.GetEntitiesByClass(Rune).forEach(rune => {
		if (selectedRuneType === ESelectedType.ONLY_BOUNTY && rune.Type !== DOTA_RUNES.DOTA_RUNE_BOUNTY)
			return
		if (selectedRuneType === ESelectedType.ONLY_POWER && rune.Type === DOTA_RUNES.DOTA_RUNE_BOUNTY)
			return
		let near = ArrayExtensions.orderBy(controllables, unit => unit.Distance(rune)).some(npc => snatchRuneByUnit(npc, rune))
		if (!near && (drawParticleTake.value || drawParticleKill.value))
			destroyRuneParticles(rune)
	})
}

function snatchRuneByUnit(npc: Unit, rune: Rune) {
	if (picking_up.has(npc) && Sleep.Sleeping("PickupRune"))
		return false

	if (!npc.IsStunned && !npc.IsWaitingToSpawn && npc.IsAlive) {
		const Distance = npc.Distance2D(rune)

		if (Distance <= takeRadius.value && !(npc.IsInvulnerable && Distance > 100)) {
			picking_up.set(npc, rune)
			npc.PickupRune(rune)
			Sleep.Sleep(150, "PickupRune")
			return false
		}

		const attackRange = npc.AttackRange

		if (Distance >= Math.max(500, attackRange) * 2)
			return false

		if (drawParticleTake.value || drawParticleKill.value) {
			if (!allRunesParticles.has(rune)) {
				allRunesParticles.set(rune, [])

				if (drawParticleTake.value)
					createRuneParticle(rune, new Color(0, 255), takeRadius.value)

				if (drawParticleKill.value)
					createRuneParticle(rune, new Color(255, 0), attackRange)
			}

		}
	}
	return true
}

function removedIDRune(rune: Rune) {
	for (let [unit, rune_] of picking_up.entries())
		if (rune === rune_) {
			picking_up.delete(unit)
			break
		}
	destroyRuneParticles(rune)
}

function createRuneParticle(ent: Rune, color: Color, radius: number) {
	let ar = allRunesParticles.get(ent)!
	ar.push(particleManager.AddOrUpdate(
		`Rune_${ent.Index}_${ar.length}`,
		"particles/ui_mouseactions/drag_selected_ring.vpcf",
		ParticleAttachment_t.PATTACH_ABSORIGIN,
		ent,
		[1, color],
		[2, new Vector3(radius * 1.1, 255)],
	))
}

function updateRuneAllParticle() {
	// loop-optimizer: KEEP
	allRunesParticles.forEach(partcl => partcl[0].SetControlPoint(1, drawParticleTake_Color.Color))
}

function destroyRuneParticles(rune: Rune) {
	var particles = allRunesParticles.get(rune)
	if (particles === undefined)
		return

	// loop-optimizer: POSSIBLE_UNDEFINED
	particles.forEach(particleID => particleID.Destroy())
	allRunesParticles.delete(rune)
}

function destroyRuneAllParticles() {
	particleManager.DestroyAll()
	allRunesParticles.clear()
}

// ------- Items

function snatchItems(controllables: Unit[]) {
	if ((!stateItems.value && !itemsHoldKey.is_pressed) || listOfItems.IsZeroSelected)
		return

	let free_controllables = controllables
	EntityManager.GetEntitiesByClass(PhysicalItem).forEach(item => {
		let m_hItem = item.Item
		if (m_hItem === undefined || !listOfItems.IsEnabled(m_hItem.Name))
			return

		let itemOwner = m_hItem.OldOwner,
			can_take_backpack = m_hItem.Name === "item_cheese"

		free_controllables.some((npc, index) => {
			if (itemOwner === npc || !npc.IsAlive || !npc.IsInRange(item, takeRadius.value) || !(npc.Inventory.HasFreeSlotsInventory || (can_take_backpack && npc.Inventory.HasFreeSlotsBackpack)))
				return false

			npc.PickupItem(item)
			free_controllables.splice(index, 1)
			return true
		})
	})
}
