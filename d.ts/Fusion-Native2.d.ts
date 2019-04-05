/// ENUMS

declare const enum ArmorType {
	Structure,
	Hero,
	Basic
}

declare const enum AttackDamageType {
	Hero,
	Basic,
	Pierce,
	Siege
}

declare const enum Flow_t {
	IN = 0,
	OUT = 1
}

declare const enum FontFlags_t {
	NONE = 0,
	ITALIC = 1 << 0,
	UNDERLINE = 1 << 1,
	STRIKEOUT = 1 << 2,
	SYMBOL = 1 << 3,
	ANTIALIAS = 1 << 4,
	GAUSSIANBLUR = 1 << 5,
	ROTARY = 1 << 6,
	DROPSHADOW = 1 << 7,
	ADDITIVE = 1 << 8,
	OUTLINE = 1 << 9,
	CUSTOM = 1 << 10, // custom generated font - never fallback to asian compatibility mode
	BITMAP = 1 << 11 // compiled bitmap font - no fallbacks
}

declare const enum dotaunitorder_t {
	DOTA_UNIT_ORDER_NONE = 0,
	DOTA_UNIT_ORDER_MOVE_TO_POSITION = 1,
	DOTA_UNIT_ORDER_MOVE_TO_TARGET = 2,
	DOTA_UNIT_ORDER_ATTACK_MOVE = 3,
	DOTA_UNIT_ORDER_ATTACK_TARGET = 4,
	DOTA_UNIT_ORDER_CAST_POSITION = 5,
	DOTA_UNIT_ORDER_CAST_TARGET = 6,
	DOTA_UNIT_ORDER_CAST_TARGET_TREE = 7,
	DOTA_UNIT_ORDER_CAST_NO_TARGET = 8,
	DOTA_UNIT_ORDER_CAST_TOGGLE = 9,
	DOTA_UNIT_ORDER_HOLD_POSITION = 10,
	DOTA_UNIT_ORDER_TRAIN_ABILITY = 11,
	DOTA_UNIT_ORDER_DROP_ITEM = 12,
	DOTA_UNIT_ORDER_GIVE_ITEM = 13,
	DOTA_UNIT_ORDER_PICKUP_ITEM = 14,
	DOTA_UNIT_ORDER_PICKUP_RUNE = 15,
	DOTA_UNIT_ORDER_PURCHASE_ITEM = 16,
	DOTA_UNIT_ORDER_SELL_ITEM = 17,
	DOTA_UNIT_ORDER_DISASSEMBLE_ITEM = 18,
	DOTA_UNIT_ORDER_MOVE_ITEM = 19,
	DOTA_UNIT_ORDER_CAST_TOGGLE_AUTO = 20,
	DOTA_UNIT_ORDER_STOP = 21,
	DOTA_UNIT_ORDER_TAUNT = 22,
	DOTA_UNIT_ORDER_BUYBACK = 23,
	DOTA_UNIT_ORDER_GLYPH = 24,
	DOTA_UNIT_ORDER_EJECT_ITEM_FROM_STASH = 25,
	DOTA_UNIT_ORDER_CAST_RUNE = 26,
	DOTA_UNIT_ORDER_PING_ABILITY = 27,
	DOTA_UNIT_ORDER_MOVE_TO_DIRECTION = 28,
	DOTA_UNIT_ORDER_PATROL = 29,
	DOTA_UNIT_ORDER_VECTOR_TARGET_POSITION = 30,
	DOTA_UNIT_ORDER_RADAR = 31,
	DOTA_UNIT_ORDER_SET_ITEM_COMBINE_LOCK = 32,
	DOTA_UNIT_ORDER_CONTINUE = 33,
	DOTA_UNIT_ORDER_VECTOR_TARGET_CANCELED = 34,
	DOTA_UNIT_ORDER_CAST_RIVER_PAINT = 35,
	DOTA_UNIT_ORDER_PREGAME_ADJUST_ITEM_ASSIGNMENT = 36
}

declare const enum HeroID_t {
	npc_dota_hero_antimage = 1,
	npc_dota_hero_axe = 2,
	npc_dota_hero_bane = 3,
	npc_dota_hero_bloodseeker = 4,
	npc_dota_hero_crystal_maiden = 5,
	npc_dota_hero_drow_ranger = 6,
	npc_dota_hero_earthshaker = 7,
	npc_dota_hero_juggernaut = 8,
	npc_dota_hero_mirana = 9,
	npc_dota_hero_nevermore = 11,
	npc_dota_hero_morphling = 10,
	npc_dota_hero_phantom_lancer = 12,
	npc_dota_hero_puck = 13,
	npc_dota_hero_pudge = 14,
	npc_dota_hero_razor = 15,
	npc_dota_hero_sand_king = 16,
	npc_dota_hero_storm_spirit = 17,
	npc_dota_hero_sven = 18,
	npc_dota_hero_tiny = 19,
	npc_dota_hero_vengefulspirit = 20,
	npc_dota_hero_windrunner = 21,
	npc_dota_hero_zuus = 22,
	npc_dota_hero_kunkka = 23,
	npc_dota_hero_lina = 25,
	npc_dota_hero_lich = 31,
	npc_dota_hero_lion = 26,
	npc_dota_hero_shadow_shaman = 27,
	npc_dota_hero_slardar = 28,
	npc_dota_hero_tidehunter = 29,
	npc_dota_hero_witch_doctor = 30,
	npc_dota_hero_riki = 32,
	npc_dota_hero_enigma = 33,
	npc_dota_hero_tinker = 34,
	npc_dota_hero_sniper = 35,
	npc_dota_hero_necrolyte = 36,
	npc_dota_hero_warlock = 37,
	npc_dota_hero_beastmaster = 38,
	npc_dota_hero_queenofpain = 39,
	npc_dota_hero_venomancer = 40,
	npc_dota_hero_faceless_void = 41,
	npc_dota_hero_skeleton_king = 42,
	npc_dota_hero_death_prophet = 43,
	npc_dota_hero_phantom_assassin = 44,
	npc_dota_hero_pugna = 45,
	npc_dota_hero_templar_assassin = 46,
	npc_dota_hero_viper = 47,
	npc_dota_hero_luna = 48,
	npc_dota_hero_dragon_knight = 49,
	npc_dota_hero_dazzle = 50,
	npc_dota_hero_rattletrap = 51,
	npc_dota_hero_leshrac = 52,
	npc_dota_hero_furion = 53,
	npc_dota_hero_life_stealer = 54,
	npc_dota_hero_dark_seer = 55,
	npc_dota_hero_clinkz = 56,
	npc_dota_hero_omniknight = 57,
	npc_dota_hero_enchantress = 58,
	npc_dota_hero_huskar = 59,
	npc_dota_hero_night_stalker = 60,
	npc_dota_hero_broodmother = 61,
	npc_dota_hero_bounty_hunter = 62,
	npc_dota_hero_weaver = 63,
	npc_dota_hero_jakiro = 64,
	npc_dota_hero_batrider = 65,
	npc_dota_hero_chen = 66,
	npc_dota_hero_spectre = 67,
	npc_dota_hero_doom_bringer = 69,
	npc_dota_hero_ancient_apparition = 68,
	npc_dota_hero_ursa = 70,
	npc_dota_hero_spirit_breaker = 71,
	npc_dota_hero_gyrocopter = 72,
	npc_dota_hero_alchemist = 73,
	npc_dota_hero_invoker = 74,
	npc_dota_hero_silencer = 75,
	npc_dota_hero_obsidian_destroyer = 76,
	npc_dota_hero_lycan = 77,
	npc_dota_hero_brewmaster = 78,
	npc_dota_hero_shadow_demon = 79,
	npc_dota_hero_lone_druid = 80,
	npc_dota_hero_chaos_knight = 81,
	npc_dota_hero_meepo = 82,
	npc_dota_hero_treant = 83,
	npc_dota_hero_ogre_magi = 84,
	npc_dota_hero_undying = 85,
	npc_dota_hero_rubick = 86,
	npc_dota_hero_disruptor = 87,
	npc_dota_hero_nyx_assassin = 88,
	npc_dota_hero_naga_siren = 89,
	npc_dota_hero_keeper_of_the_light = 90,
	npc_dota_hero_wisp = 91,
	npc_dota_hero_visage = 92,
	npc_dota_hero_slark = 93,
	npc_dota_hero_medusa = 94,
	npc_dota_hero_troll_warlord = 95,
	npc_dota_hero_centaur = 96,
	npc_dota_hero_magnataur = 97,
	npc_dota_hero_shredder = 98,
	npc_dota_hero_bristleback = 99,
	npc_dota_hero_tusk = 100,
	npc_dota_hero_skywrath_mage = 101,
	npc_dota_hero_abaddon = 102,
	npc_dota_hero_elder_titan = 103,
	npc_dota_hero_legion_commander = 104,
	npc_dota_hero_ember_spirit = 106,
	npc_dota_hero_earth_spirit = 107,
	npc_dota_hero_terrorblade = 109,
	npc_dota_hero_phoenix = 110,
	npc_dota_hero_oracle = 111,
	npc_dota_hero_techies = 105,
	npc_dota_hero_target_dummy = 127,
	npc_dota_hero_winter_wyvern = 112,
	npc_dota_hero_arc_warden = 113,
	npc_dota_hero_abyssal_underlord = 108,
	npc_dota_hero_monkey_king = 114,
	npc_dota_hero_pangolier = 120,
	npc_dota_hero_dark_willow = 119,
	npc_dota_hero_grimstroke = 121
}

declare const enum PingType_t {
	NORMAL = 0,
	DANGER = 1,
	HEADING = 2,
	RETREAT = 3,
	ATTACK = 4,
	ENEMY_VISION = 5,
	OWN_VISION = 6
}

/// GLOBAL OBJECTS
declare var LocalDOTAPlayer: C_DOTAPlayer
declare var GameRules: C_DOTAGamerules
declare var PlayerResource: C_DOTA_PlayerResource
declare var global: any

declare var ConVars: ConVars
declare var Entities: Entities
declare var Events: Events
declare var GameEvents: GameEvents
declare var Minimap: Minimap
declare var Projectiles: Projectiles
declare var Particles: Particles
declare var Renderer: Renderer

declare class CUnitOrder {
	readonly order_type: dotaunitorder_t
	readonly queue: boolean
	readonly issuer: PlayerOrderIssuer_t
	readonly position: Vector
	readonly unit: C_DOTA_BaseNPC
	readonly target: C_BaseEntity
	readonly ability: C_DOTABaseAbility
	readonly show_effects: boolean
}

declare class CUserCmd {
	command_number: number
	tick_count: number
	forwardmove: number
	sidemove: number
	upmove: number
	random_seed: number
	mousex: number
	mousey: number
	camerax: number
	cameraz: number
	click_behaviors: number
	scoreboard_opened: boolean
	shopmask: number
	spectator_stats_category_id: number
	spectator_stats_sort_method: number
	buttons: bigint
	impulse: number
	vec_under_cursor: Vector
	viewangles: Vector
	weaponselect: C_BaseEntity
	weaponsubtype: C_BaseEntity
}

declare class LinearProjectile {
	readonly m_flWidth: number
	readonly m_flDistance: number
	readonly m_vecOrigin: Vector
	readonly m_vecPosition: Vector
	readonly m_vecVelocity: Vector
	readonly m_vecAcceleration: Vector
	readonly m_iID: number
	readonly m_bIsValid: boolean
}

declare class TrackingProjectile {
	readonly m_bDodgeable: boolean
	readonly m_bIsAttack: boolean
	readonly m_bIsEvaded: boolean
	readonly m_flExpireTime: number
	readonly m_iSpeed: number
	readonly m_hSource: C_DOTA_BaseNPC
	readonly m_hTarget: C_BaseEntity
	readonly m_vecPosition: Vector
	readonly m_vecTarget: Vector
	readonly m_particle: CNewParticleEffect
	readonly m_iID: number
	readonly m_bIsValid: boolean
}

declare class Color {
	r: number
	g: number
	b: number
	a: number

	/**
	 * Makes copy of col
	 */
	constructor(col: Color)
	/**
	 * equiv to r = g = b = val, a = 255
	 */
	constructor(val: number)
	/**
	 * Default alpha: 255
	 */
	constructor(r?: number, g?: number, b?: number, a?: number)
}

declare interface ConVars {
	Get(convar_name: string): number
	Set(convar_name: string, value:  string | number | boolean): void
}

declare interface Entities {
	GetAllEntities(): C_BaseEntity[]
	GetByID(ent_id: number): C_BaseEntity
}

declare interface Events {
	addListener(name: "onGameStarted", callback: (pl_ent: C_DOTA_BaseNPC_Hero) => void): bigint
	addListener(name: "onGameEnded", callback: () => void): bigint
	/**
	 * Also, this event emitted about ALL entities that have already been created before reload scripts
	 */
	addListener(name: "onEntityCreated", callback: (ent: C_BaseEntity, id: number) => void): bigint
	addListener(name: "onEntityDestroyed", callback: (ent: C_BaseEntity, id: number) => void): bigint
	addListener(name: "onWndProc", callback: (message_type: number, wParam: bigint, lParam: bigint) => boolean): bigint
	addListener(name: "onTick", callback: () => void): bigint
	addListener(name: "onUpdate", callback: () => void): bigint
	addListener(name: "onSendMove", callback: (cmd: CUserCmd) => void): bigint
	addListener(name: "onUnitStateChanged", callback: (npc: C_DOTA_BaseNPC) => void): bigint
	addListener(name: "onTeamVisibilityChanged", callback: (npc: C_DOTA_BaseNPC) => void): bigint
	addListener(name: "onDraw", callback: () => void): bigint
	addListener(name: "onParticleCreated", callback: (id: number, path: string, particleSystemHandle: bigint, attach: ParticleAttachment_t, target?: C_BaseEntity) => void): bigint
	addListener(name: "onParticleUpdated", callback: (id: number, control_point: number, vec: Vector) => void): bigint
	addListener(name: "onPrepareUnitOrders", callback: (order: CUnitOrder) => boolean): bigint
	addListener(name: "onLinearProjectileCreated", callback: (
		proj: LinearProjectile,
		origin: Vector,
		velocity: Vector2D,
		ent: C_BaseEntity,
		path: string,
		particleSystemHandle: bigint,
		acceleration: Vector2D,
		max_speed: number,
		fow_radius: number,
		sticky_fow_reveal: boolean,
		distance: number,
		colorgemcolor: Color
	) => void): bigint
	addListener(name: "onLinearProjectileDestroyed", callback: (proj: LinearProjectile) => void): bigint
	addListener(name: "onTrackingProjectileCreated", callback: (
		proj: TrackingProjectile,
		sourceAttachment: number,
		path: string,
		particleSystemHandle: bigint,
		maximpacttime: number,
		colorgemcolor: Color,
		launch_tick: number
	) => void): bigint
	addListener(name: "onTrackingProjectileUpdated", callback: (
		proj: TrackingProjectile,
		vSourceLoc: Vector,
		path: string,
		particleSystemHandle: bigint,
		colorgemcolor: Color,
		launch_tick: number
	) => void): bigint
	addListener(name: "onTrackingProjectileDestroyed", callback: (proj: TrackingProjectile) => void): bigint
	addListener(name: "onUnitAnimation", callback: (
		npc: C_DOTA_BaseNPC,
		sequenceVariant: number,
		playbackrate: number,
		castpoint: number,
		type: number,
		activity: number
	) => void): bigint
	addListener(name: "onUnitAnimationEnd", callback: (
		npc: C_DOTA_BaseNPC,
		snap: boolean
	) => void): bigint
	addListener(name: "onBuffAdded", listener: (npc: C_DOTA_BaseNPC, buff: CDOTA_Buff) => void): bigint
	addListener(name: "onBuffRemoved", listener: (npc: C_DOTA_BaseNPC, buff: CDOTA_Buff) => void): bigint
	addListener(name: "onBuffStackCountChanged", listener: (buff: CDOTA_Buff) => void): bigint
	addListener(name: "onCustomGameEvent", listener: (event_name: string, obj: any) => void): bigint

	addListener(name: string, listener: Function): bigint
	removeListener(name: string, listener_id: bigint): void
	emit(name: string, ...args: any): void
}

declare interface GameEvents {
	FireEventToClient(name: string, player_id: number, obj: any): void // BROKEN
	FireEventToTeam(name: string, team_num: number, obj: any): void // BROKEN
	FireEventToAllClients(name: string, obj: any): void
	FireEventToServer(name: string, obj: any): void
}

declare interface Minimap {
	SendPing(location?: Vector, type?: PingType_t, direct_ping?: boolean, target?: C_BaseEntity): void
	SendLine(x: number, y: number, initial: boolean): void
}

interface QAngle {
	readonly Length: number
	readonly LengthSqr: number
	readonly IsZero: boolean
	pitch: number
	yaw: number
	roll: number
	
	constructor()
	constructor(angle: QAngle)
	constructor(val: number)
	constructor(pitch: number, yaw: number, roll: number)
}

declare class Vector {
	/**
	 * Those numbers can also be accessed thru vec[0], vec[1], vec[2]
	 */
	x: number
	z: number
	y: number
	/** You can set (affecting on x, z, y) and get this value */
	Angle: number
		/**
	 * @returns length of this vector
	 */
	readonly Length: number
	/**
	 * @returns Math.sqr(this.Length()), but faster
	 */
	readonly LengthSqr: number
	readonly LengthRecipFast: number
	/**
	 * @returns are all components of this vector are 0?
	 */
	readonly IsZero: boolean
	readonly Length2D: number
	readonly Length2DSqr: number

	constructor()
	constructor(vec: Vector)
	constructor(val: number)
	constructor(x: number, z: number)
	constructor(x: number, z: number, y: number)

	/**
	 * @returns is valid this vector? (every value must not be infinity/NaN)
	 */
	IsValid(): boolean
	/**
	 * Invalidates this vector
	 */
	Invalidate(): void
	/**
	 * @returns this vector in representation of Vector2D (equiv to new Vector2D(this.x, this.z))
	 */
	AsVector2D(): Vector2D
	/**
	 * Randomizes this vector within given values
	 */
	Random(minVal: number, maxVal: number): void
	/**
	 * Zeroes this vector
	 */
	Zero(): void
	/**
	 * Negates this vector (equiv to x = -x, z = -z, y = -y)
	 */
	Negate(): void
	NormalizeInPlace(): number
	IsLengthGreaterThan(val: number): boolean
	IsLengthLessThan(val: number): boolean
	WithinAABox(boxmin: Vector, boxmax: Vector): boolean
	/**
	 * Extends vector in the rotation direction
	 * @param rotation for ex. Entity#Forward
	 * @param dist distance to be added
	 * @returns extended vector
	 */
	VectorRotation(rotation: Vector, dist: number): Vector
	/**
	 * @param vec 2nd vector
	 * @returns angle between two vectors
	 */
	AngleBetweenTwoVectors(vec: Vector): number
	/**
	 * @param facing 2nd rotation
	 * @returns angle between two rotations
	 */
	AngleBetweenTwoFaces(facing: Vector): number
	/**
	 * Copies current vector values onto given one
	 */
	CopyTo(vec: Vector): void
	/**
	 * Extends this vector in the direction of 2nd vector for given distance
	 * @param vec 2nd vector
	 * @param dist distance to extend
	 * @returns extended vector
	 */
	ExtendVector(vec: Vector, dist: number): Vector
	/**
	 * @returns all entities in given range of this vector
	 */
	GetEntitiesInRange(range: number): C_BaseEntity[]	
	/**
	 * @param rot_speed must be taken from npc_heroes MovementTurnRate
	 * @returns calculates full time that will be taken to rotate to this rotation
	 */
	RotationTime(rot_speed: number): number
	/**
	 * @param vec 2nd vector
	 * @returns distance between this and 2nd vector
	 */
	DistTo(vec: Vector): number
	MulAdd(a: Vector, b: Vector, scalar: number): void
	Dot(vOther: Vector): number
	Cross(vOther: Vector): Vector
}

declare class Vector2D {
	/**
	 * Those numbers can also be accessed thru vec[0], vec[1]
	 */
	x: number
	z: number

	constructor()
	constructor(vec: Vector)
	constructor(vec: Vector2D)
	constructor(val: number)
	constructor(x: number, z: number)

	/**
	 * Zeroes this vector
	 */
	Zero(): void
	/**
	 * @returns length of this vector
	 */
	Length(): number
	/**
	 * @returns Math.sqr(this.Length()), but faster
	 */
	LengthSqr(): number
	/**
	 * @param vec 2nd vector
	 * @returns distance between this and 2nd vector
	 */
	DistTo(vec: Vector2D): number
	/**
	 * @returns is valid this vector? (every value must not be infinity/NaN)
	 */
	IsValid(): boolean
	/**
	 * Invalidates this vector
	 */
	Invalidate(): void
	/**
	 * Extends vector in the rotation direction
	 * @param rotation for ex. Entity#Forward
	 * @param dist distance to be added
	 * @returns extended vector
	 */
	VectorRotation(rotation: Vector2D, dist: number): Vector2D
	/**
	 * @param vec 2nd vector
	 * @returns angle between two vectors
	 */
	AngleBetweenTwoVectors(vec: Vector2D): number
	/**
	 * Copies current vector values onto given one
	 */
	CopyTo(vec: Vector2D): void
	/**
	 * Extends this vector in the direction of 2nd vector for given distance
	 * @param vec 2nd vector
	 * @param dist distance to extend
	 * @returns extended vector
	 */
	ExtendVector(vec: Vector2D, dist: number): Vector2D
	/**
	 * @returns this vector in representation of Vector (equiv to new Vector(this.x, this.z))
	 */
	TransformToVector(): Vector
}

declare interface Projectiles {
	FirstTracking(): TrackingProjectile
	NextTracking(prev: TrackingProjectile): TrackingProjectile
	GetAllTracking(): TrackingProjectile[]
	TrackingByID(id: number): TrackingProjectile
	
	FirstLinear(): LinearProjectile
	NextLinear(prev: LinearProjectile): LinearProjectile
	GetAllLinear(): LinearProjectile[]
	LinearByID(id: number): LinearProjectile
}

declare interface Particles {
	Create(path: string, attach: ParticleAttachment_t, ent?: C_BaseEntity): number
	Destroy(particle_id: number, immediate: boolean): void
	SetControlPoint(particle_id: number, control_point: number, vec: Vector): void
}

// must be called only in onDraw!
declare interface Renderer {
	readonly WindowSize: Vector2D
	
	/**
	 * Allowed non-passable element groups:
	 * [r, g, b]
	 * [a]
	 * NodeJS-like decl:
	 * FilledCircle(x: number, y: number, radius: number[, r?: number, g?: number, b?: number][, a?: number]): void
	 */
	FilledCircle(x: number, y: number, radius: number, r?: number, g?: number, b?: number, a?: number): void
	/**
	 * Allowed non-passable element groups:
	 * [r, g, b]
	 * [a]
	 * NodeJS-like decl:
	 * OutlinedCircle(x: number, y: number, radius: number[, r?: number, g?: number, b?: number][, a?: number]): void
	 */
	OutlinedCircle(x: number, y: number, radius: number, r?: number, g?: number, b?: number, a?: number): void
	/**
	 * Allowed non-passable element groups:
	 * [r, g, b]
	 * [a]
	 * NodeJS-like decl:
	 * Line(baseX: number, baseY: number, baseW: number, baseH: number[, r?: number, g?: number, b?: number][, a?: number]): void
	 */
	Line(baseX: number, baseY: number, baseW: number, baseH: number, r?: number, g?: number, b?: number, a?: number): void
	/**
	 * Allowed non-passable element groups:
	 * [r, g, b]
	 * [a]
	 * NodeJS-like decl:
	 * FilledRect(baseX: number, baseY: number, baseW: number, baseH: number[, r?: number, g?: number, b?: number][, a?: number]): void
	 */
	FilledRect(baseX: number, baseY: number, baseW: number, baseH: number, r?: number, g?: number, b?: number, a?: number): void
	/**
	 * Allowed non-passable element groups:
	 * [r, g, b]
	 * [a]
	 * NodeJS-like decl:
	 * OutlinedRect(baseX: number, baseY: number, baseW: number, baseH: number[, r?: number, g?: number, b?: number][, a?: number]): void
	 */
	OutlinedRect(baseX: number, baseY: number, baseW: number, baseH: number, r?: number, g?: number, b?: number, a?: number): void
	/**
	 * @param path start it with "~/" (without double-quotes) to load image from "%loader_path%/scripts_files/path"
	 * @param path also must end with "_c" (without double-quotes), if that's vtex_c
	 * VPK isn't supported yet.
	 * Allowed non-passable element groups:
	 * [baseW, baseH] (or you can use -1 as one/both of those values to leave them auto)
	 * [r, g, b]
	 * [a]
	 * NodeJS-like decl:
	 * Image(path: string, baseX: number, baseY: number[, baseW?: number, baseH?: number][, r?: number, g?: number, b?: number][, a?: number]): void
	 */
	Image(path: string, baseX: number, baseY: number, baseW?: number, baseH?: number, r?: number, g?: number, b?: number, a?: number): void
	/**
	 * @param font_name default: "Calibri"
	 * @param font_size default: 12
	 * @param font_weight default: 150
	 * @param flags see FontFlags_t. You can use it like (FontFlags_t.OUTLINE | FontFlags_t.BOLD)
	 * @param flags default: FontFlags_t.OUTLINE
	 * Allowed non-passable element groups:
	 * [r, g, b]
	 * [a]
	 * [font_name, font_size]
	 * [font_weight]
	 * [flags]
	 * NodeJS-like decl:
	 * Text(x: number, y: number, text: string[, r?: number, g?: number, b?: number][, a?: number][, font_name?: string, uint8_t font_size][, uint16_t font_weight][, int flags]): void
	 */
	Text(x: number, y: number, text: string, r?: number, g?: number, b?: number, a?: number, font_name?: string, font_size?: number, font_weight?: number, flags?: number): void
	/**
	 * @param pos world position that needs to be turned to screen position
	 * @returns screen position, or invalid Vector2D (WorldToScreen(...).IsValid() === false)
	 */
	WorldToScreen(pos: Vector): Vector2D
}

/// GLOBAL FUNCTIONS

declare function SendToConsole(command: string): void
declare function readFile(path: string): string
declare function sleep(ms: number): void
declare function IsInGame(): boolean
declare function IsPaused(): boolean
declare function GetLevelName(): string
declare function GetLevelNameShort(): string
declare function PrepareUnitOrders(obj: {
	OrderType: dotaunitorder_t,
	Target?: C_BaseEntity,
	Position?: Vector,
	Ability?: C_BaseEntity,
	Unit?: C_BaseEntity,
	Queue?: boolean,
	ShowEffects?: boolean
}): void
declare function SelectUnit(ent: C_BaseEntity, bAddToGroup: boolean): boolean
declare function GetLatency(flow: Flow_t): number
declare function GetAvgLatency(flow: Flow_t): number
/**
 * @param time in milliseconds
 * @returns timeout ID that can be used in clearTimeout
 */
declare function setTimeout(time: number, func: (id: BigInt) => void): BigInt
/**
 * @param timeout_id that were returned by setTimeout
 */
declare function clearTimeout(timeout_id: BigInt): void
/**
 * @param time in milliseconds
 * @returns interval ID that can be used in clearInterval
 */
declare function setInterval(time: number, func: (id: BigInt) => void): BigInt
/**
 * @param interval_id that were returned by setInterval
 */
declare function clearInterval(timeout_id: BigInt): void

/// AUTOMATICALLY GENERATED

declare class CParticleFloatInput {
	m_nType: ParticleFloatType_t
	m_nMapType: ParticleFloatMapType_t
	m_flLiteralValue: number
	m_nControlPoint: number
	m_nVectorComponent: number
	m_flRandomMin: number
	m_flRandomMax: number
	m_nRandomMode: ParticleFloatRandomMode_t
	m_flMultFactor: number
	m_flInput0: number
	m_flInput1: number
	m_flOutput0: number
	m_flOutput1: number
	m_nBiasType: ParticleFloatBiasType_t
	m_flBiasParameter: number
	readonly m_Curve: CPiecewiseCurveSchemaWrapper
}

declare class CPiecewiseCurveSchemaWrapper {}

declare class CParticleCollectionFloatInput extends CParticleFloatInput {}

declare class CParticleFunction {
	m_flOpStartFadeInTime: number
	m_flOpEndFadeInTime: number
	m_flOpStartFadeOutTime: number
	m_flOpEndFadeOutTime: number
	m_flOpFadeOscillatePeriod: number
	m_bNormalizeToStopTime: boolean
	m_flOpTimeOffsetMin: number
	m_flOpTimeOffsetMax: number
	m_nOpTimeOffsetSeed: number
	m_nOpTimeScaleSeed: number
	m_flOpTimeScaleMin: number
	m_flOpTimeScaleMax: number
	m_bDisableOperator: boolean
	m_nOpEndCapState: number
	readonly m_flOpStrength: CParticleCollectionFloatInput
	readonly m_Notes: string
}

declare class CDOTA_BuffParticle {
	m_iIndex: number
	m_iPriority: number
	m_bDestroyImmediatly: boolean
	m_bStatusEffect: boolean
	m_bHeroEffect: boolean
	m_bOverheadEffectOffset: boolean
}

declare class CDOTA_PlayerChallengeInfo {
	nType: number
	nQuestID: number
	nQuestChallengeID: number
	nTier: number
	nParam0: number
	nParam1: number
	nSlotID: number
	nProgress: number
	nCompletionThreshold: number
	nPlayerID: number
	nQueryIndex: number
	nEventID: number
	nSequenceID: number
	nCompleted: number
	nRank: number
}

declare class CBaseAchievement {
	readonly m_pszName: string
	m_iAchievementID: number
	m_iFlags: number
	m_iGoal: number
	m_iProgressMsgIncrement: number
	m_iProgressMsgMinimum: number
	m_iPointValue: number
	m_bHideUntilAchieved: boolean
	m_bStoreProgressInSteam: boolean
	readonly m_pInflictorClassNameFilter: string
	readonly m_pInflictorEntityNameFilter: string
	readonly m_pVictimClassNameFilter: string
	readonly m_pAttackerClassNameFilter: string
	readonly m_pMapNameFilter: string
	readonly m_pGameDirFilter: string
	readonly m_pszComponentNames: string
	readonly m_pszComponentDisplayNames: string
	m_iNumComponents: number
	readonly m_pszComponentPrefix: string
	m_iComponentPrefixLen: number
	m_bAchieved: boolean
	m_iCount: number
	m_iProgressShown: number
	m_iComponentBits: bigint
	m_nUserSlot: number
	m_iDisplayOrder: number
	m_bShowOnHUD: boolean
	m_iAssetAwardID: number
}

declare class fogparams_t {
	readonly dirPrimary: Vector
	readonly colorPrimary: Color
	readonly colorSecondary: Color
	readonly colorPrimaryLerpTo: Color
	readonly colorSecondaryLerpTo: Color
	start: number
	end: number
	farz: number
	maxdensity: number
	exponent: number
	HDRColorScale: number
	skyboxFogFactor: number
	skyboxFogFactorLerpTo: number
	startLerpTo: number
	endLerpTo: number
	maxdensityLerpTo: number
	lerptime: number
	duration: number
	enable: boolean
	blend: boolean
	m_bNoReflectionFog: boolean
	m_bPadding: boolean
}

declare class CParticleFunctionOperator extends CParticleFunction {}

declare class CSpinUpdateBase extends CParticleFunctionOperator {}

declare class CBaseAnimMotor {
	readonly m_name: string
	m_bDefault: boolean
}

declare class ParticleControlPointDriver_t {
	m_iControlPoint: number
	m_iAttachType: ParticleAttachment_t
	readonly m_attachmentName: string
	readonly m_vecOffset: Vector
	readonly m_angOffset: QAngle
	readonly m_entityName: string
}

declare class C_OP_PlaneCull extends CParticleFunctionOperator {
	m_nPlaneControlPoint: number
	readonly m_vecPlaneDirection: Vector
	m_flPlaneOffset: number
}

declare class SceneViewId_t {
	m_nViewId: bigint
	m_nFrameCount: bigint
}

declare class CAnimStateConditionBase {
	m_comparisonOp: number
}

declare class CRenderSkeleton {
	readonly m_bones: RenderSkeletonBone_t[]
	readonly m_boneParents: number[]
	m_nBoneWeightCount: number
}

declare class RenderSkeletonBone_t {
	readonly m_boneName: string
	readonly m_parentName: string
	readonly m_bbox: SkeletonBoneBounds_t
	m_flSphereRadius: number
}

declare class SkeletonBoneBounds_t {
	readonly m_vecCenter: Vector
	readonly m_vecSize: Vector
}

declare class CPhysSurfacePropertiesSoundNames {
	readonly m_impactSoft: string
	readonly m_impactHard: string
	readonly m_scrapeSmooth: string
	readonly m_scrapeRough: string
	readonly m_bulletImpact: string
	readonly m_rolling: string
	readonly m_break: string
	readonly m_strain: string
}

declare class PhysFeModelDesc_t {
	m_nStaticNodeFlags: number
	m_nDynamicNodeFlags: number
	m_flLocalForce: number
	m_flLocalRotation: number
	m_nNodeCount: number
	m_nStaticNodes: number
	m_nRotLockStaticNodes: number
	m_nSimdTriCount1: number
	m_nSimdTriCount2: number
	m_nSimdQuadCount1: number
	m_nSimdQuadCount2: number
	m_nQuadCount1: number
	m_nQuadCount2: number
	m_nCollisionSphereInclusiveCount: number
	m_nTreeDepth: number
	m_nFitMatrixCount1: number
	m_nFitMatrixCount2: number
	m_nSimdFitMatrixCount1: number
	m_nSimdFitMatrixCount2: number
	m_nRopeCount: number
	m_nTriCount1: number
	m_nTriCount2: number
	m_nReservedUint8: number
	m_nExtraPressureIterations: number
	m_nExtraGoalIterations: number
	m_nExtraIterations: number
	readonly m_nReserved: number[]
	m_flInternalPressure: number
	m_flWindage: number
	m_flWindDrag: number
	m_flDefaultSurfaceStretch: number
	m_flDefaultThreadStretch: number
	m_flDefaultGravityScale: number
	m_flDefaultVelAirDrag: number
	m_flDefaultExpAirDrag: number
	m_flDefaultVelQuadAirDrag: number
	m_flDefaultExpQuadAirDrag: number
	m_flDefaultVelRodAirDrag: number
	m_flDefaultExpRodAirDrag: number
	m_flRodVelocitySmoothRate: number
	m_flQuadVelocitySmoothRate: number
	m_flAddWorldCollisionRadius: number
	m_flDefaultVolumetricSolveAmount: number
	m_nRodVelocitySmoothIterations: number
	m_nQuadVelocitySmoothIterations: number
}

declare class RnCapsule_t {
	readonly m_vCenter: Vector[]
	m_flRadius: number
}

declare class PostProcessParameters_t {
	readonly m_flParameters: number[]
}

declare class C_OP_MovementLoopInsideSphere extends CParticleFunctionOperator {
	m_nCP: number
	m_flDistance: number
	readonly m_vecScale: Vector
}

declare class CParticleFunctionInitializer extends CParticleFunction {}

declare class C_OP_RemapCPVisibilityToScalar extends CParticleFunctionOperator {
	m_bScaleInitialRange: boolean
	m_nControlPoint: number
	m_flInputMin: number
	m_flInputMax: number
	m_flOutputMin: number
	m_flOutputMax: number
	m_flRadius: number
}

declare class LightDesc_t {
	m_Type: LightType_t
	readonly m_Color: Vector
	readonly m_BounceColor: Vector
	m_Range: number
	m_Falloff: number
	m_Attenuation0: number
	m_Attenuation1: number
	m_Attenuation2: number
	m_Theta: number
	m_Phi: number
	m_bCastShadows: boolean
	m_nShadowWidth: number
	m_nShadowHeight: number
	m_nShadowCascadeCount: number
	readonly m_flShadowCascadeDistance: number[]
	readonly m_nShadowCascadeResolution: number[]
	m_nBakeLightIndex: number
	m_flBakeLightIndexScale: number
	m_bRenderDiffuse: boolean
	m_bRenderSpecular: boolean
	m_nPriority: number
	m_Shape: LightSourceShape_t
	m_flLightSourceDim0: number
	m_flLightSourceDim1: number
	m_flLightSourceSize0: number
	m_flLightSourceSize1: number
	m_flPrecomputedMaxRange: number
	m_flFogContributionStength: number
	readonly m_vecUp: Vector
	m_nFogLightingMode: number
	m_bUsesIndexedBakedLighting: boolean
}

declare class CPerParticleFloatInput extends CParticleFloatInput {}

declare class RnFace_t {
	m_nEdge: number
}

declare class EngineLoopState_t {
	m_nPlatWindowWidth: number
	m_nPlatWindowHeight: number
	m_nRenderWidth: number
	m_nRenderHeight: number
}

declare class ChangeAccessorFieldPathIndex_t {
	m_Value: number
}

declare class CEconItemAttribute {
	m_iAttributeDefinitionIndex: number
	m_flValue: number
}

declare class CFingerBone {
	readonly m_boneName: string
	readonly m_hingeAxis: Vector
	m_flMinAngle: number
	m_flMaxAngle: number
}

declare class EventSimulate_t {
	readonly m_LoopState: EngineLoopState_t
	m_bFirstTick: boolean
	m_bLastTick: boolean
}

declare class C_INIT_RandomNamedModelElement extends CParticleFunctionInitializer {
	readonly m_names: string[]
	m_bShuffle: boolean
	m_bLinear: boolean
	m_bModelFromRenderer: boolean
}

declare class SeqResourceIKLock_t {
	m_nLocalBone: number
	m_flPosWeight: number
	m_flAngleWeight: number
}

declare class AnimResourceAnimDesc_t_Flag_t {
	m_bLooping: boolean
	m_bAllZeros: boolean
	m_bHidden: boolean
	m_bDelta: boolean
	m_bLegacyWorldspace: boolean
}

declare class PermModelInfo_t {
	m_nFlags: number
	readonly m_vHullMin: Vector
	readonly m_vHullMax: Vector
	readonly m_vViewMin: Vector
	readonly m_vViewMax: Vector
	m_flMass: number
	readonly m_vEyePosition: Vector
	m_flMaxEyeDeflection: number
}

declare class EventModInitialized_t {}

declare class C_INIT_VelocityFromCP extends CParticleFunctionInitializer {
	m_nControlPoint: number
	m_nControlPointCompare: number
	m_nControlPointLocal: number
	m_flVelocityScale: number
	m_bDirectionOnly: boolean
}

declare class CAnimMotorList {
}

declare class MaterialGroup_t {
}

declare class IContextualQuery {}

declare class CAI_Expresser {
	m_flStopTalkTime: number
	m_flStopTalkTimeWithoutDelay: number
	m_flBlockedTalkTime: number
	m_voicePitch: number
	m_flLastTimeAcceptedSpeak: number
}

declare class CParticleVisibilityInputs {
	m_flCameraBias: number
	m_flInputMin: number
	m_flInputMax: number
	m_flAlphaScaleMin: number
	m_flAlphaScaleMax: number
	m_flRadiusScaleMin: number
	m_flRadiusScaleMax: number
	m_flRadiusScaleFOVBase: number
	m_flProxyRadius: number
	m_flDistanceInputMin: number
	m_flDistanceInputMax: number
	m_flDotInputMin: number
	m_flDotInputMax: number
	m_bDotCPAngles: boolean
	m_bDotCameraAngles: boolean
	m_flNoPixelVisibilityFallback: number
	m_nCPin: number
	m_bRightEye: boolean
}

declare class VPhysXConstraintParams_t {
	m_nType: number
	m_nTranslateMotion: number
	m_nRotateMotion: number
	m_nFlags: number
	readonly m_anchor: Vector[]
	m_maxForce: number
	m_maxTorque: number
	m_linearLimitValue: number
	m_linearLimitRestitution: number
	m_linearLimitSpring: number
	m_linearLimitDamping: number
	m_twistLowLimitValue: number
	m_twistLowLimitRestitution: number
	m_twistLowLimitSpring: number
	m_twistLowLimitDamping: number
	m_twistHighLimitValue: number
	m_twistHighLimitRestitution: number
	m_twistHighLimitSpring: number
	m_twistHighLimitDamping: number
	m_swing1LimitValue: number
	m_swing1LimitRestitution: number
	m_swing1LimitSpring: number
	m_swing1LimitDamping: number
	m_swing2LimitValue: number
	m_swing2LimitRestitution: number
	m_swing2LimitSpring: number
	m_swing2LimitDamping: number
	readonly m_goalPosition: Vector
	readonly m_goalAngularVelocity: Vector
	m_driveSpringX: number
	m_driveSpringY: number
	m_driveSpringZ: number
	m_driveDampingX: number
	m_driveDampingY: number
	m_driveDampingZ: number
	m_driveSpringTwist: number
	m_driveSpringSwing: number
	m_driveSpringSlerp: number
	m_driveDampingTwist: number
	m_driveDampingSwing: number
	m_driveDampingSlerp: number
	m_solverIterationCount: number
	m_projectionLinearTolerance: number
	m_projectionAngularTolerance: number
}

declare class EventServerPollNetworking_t extends EventSimulate_t {}

declare class C_OP_DecayMaintainCount extends CParticleFunctionOperator {
	m_nParticlesToMaintain: number
	m_nScaleControlPoint: number
	m_nScaleControlPointField: number
	m_flDecayDelay: number
}

declare class C_INIT_RemapInitialCPDirectionToRotation extends CParticleFunctionInitializer {
	m_nCP: number
	m_flOffsetRot: number
	m_nComponent: number
}

declare class InfoForResourceTypeIParticleSnapshot {}

declare class CParticleFunctionPreEmission extends CParticleFunctionOperator {}

declare class C_OP_PercentageBetweenCPsVector extends CParticleFunctionOperator {
	m_flInputMin: number
	m_flInputMax: number
	readonly m_vecOutputMin: Vector
	readonly m_vecOutputMax: Vector
	m_nStartCP: number
	m_nEndCP: number
	m_bScaleInitialRange: boolean
	m_bScaleCurrent: boolean
	m_bActiveRange: boolean
	m_bRadialCheck: boolean
}

declare class FeKelagerBend2_t {
	readonly flWeight: number[]
	flHeight0: number
	readonly nNode: number[]
	nReserved: number
}

declare class InfoForResourceTypeCVMixListResource {}

declare class constraint_axislimit_t {
	flMinRotation: number
	flMaxRotation: number
	flMotorTargetAngSpeed: number
	flMotorMaxTorque: number
}

declare class C_OP_VectorNoise extends CParticleFunctionOperator {
	readonly m_vecOutputMin: Vector
	readonly m_vecOutputMax: Vector
	m_bAdditive: boolean
	m_bOffset: boolean
	m_flNoiseAnimationTimeScale: number
}

declare class C_INIT_InitialSequenceFromModel extends CParticleFunctionInitializer {
	m_nControlPointNumber: number
	m_flInputMin: number
	m_flInputMax: number
	m_flOutputMin: number
	m_flOutputMax: number
	m_bScaleInitialRange: boolean
}

declare class AnimNodeID {
	m_id: number
}

declare class C_OP_Orient2DRelToCP extends CParticleFunctionOperator {
	m_flRotOffset: number
	m_flSpinStrength: number
	m_nCP: number
}

declare class C_OP_InheritFromParentParticles extends CParticleFunctionOperator {
	m_flScale: number
	m_nIncrement: number
	m_bRandomDistribution: boolean
}

declare class CGeneralSpin extends CParticleFunctionOperator {
	m_nSpinRateDegrees: number
	m_nSpinRateMinDegrees: number
	m_fSpinRateStopTime: number
}

declare class CAnimNodeBase {
	readonly m_sName: string
	readonly m_vecPosition: Vector2D
	readonly m_nNodeID: AnimNodeID
	m_networkMode: AnimNodeNetworkMode
}

declare class CFeJiggleBone {
	m_nFlags: number
	m_flLength: number
	m_flTipMass: number
	m_flYawStiffness: number
	m_flYawDamping: number
	m_flPitchStiffness: number
	m_flPitchDamping: number
	m_flAlongStiffness: number
	m_flAlongDamping: number
	m_flAngleLimit: number
	m_flMinYaw: number
	m_flMaxYaw: number
	m_flYawFriction: number
	m_flYawBounce: number
	m_flMinPitch: number
	m_flMaxPitch: number
	m_flPitchFriction: number
	m_flPitchBounce: number
	m_flBaseMass: number
	m_flBaseStiffness: number
	m_flBaseDamping: number
	m_flBaseMinLeft: number
	m_flBaseMaxLeft: number
	m_flBaseLeftFriction: number
	m_flBaseMinUp: number
	m_flBaseMaxUp: number
	m_flBaseUpFriction: number
	m_flBaseMinForward: number
	m_flBaseMaxForward: number
	m_flBaseForwardFriction: number
	m_flRadius0: number
	m_flRadius1: number
	readonly m_vPoint0: Vector
	readonly m_vPoint1: Vector
}

declare class CGlowSprite {
	readonly m_vColor: Vector
	m_flHorzSize: number
	m_flVertSize: number
}

declare class CNavVolume {}

declare class CNetworkVarChainer {
	readonly m_PathIndex: ChangeAccessorFieldPathIndex_t
}

declare class C_OP_MoveToHitbox extends CParticleFunctionOperator {
	m_nControlPointNumber: number
	m_flLifeTimeLerpStart: number
	m_flLifeTimeLerpEnd: number
	m_flPrevPosScale: number
	readonly m_HitboxSetName: number[]
	m_bUseBones: boolean
}

declare class EventProfileStorageAvailable_t {
	m_nSplitScreenSlot: number
}

declare class C_OP_RemapCPVelocityToVector extends CParticleFunctionOperator {
	m_nControlPoint: number
	m_flScale: number
	m_bNormalize: boolean
}

declare class CAnimTagManager {
}

declare class CGameSceneNodeHandle {
	readonly m_hOwner: C_BaseEntity
}

declare class CountdownTimer {
	m_duration: number
	m_timestamp: number
	m_bUseGlobalsTime: boolean
}

declare class PurchasedItem_t {
	nItemID: number
	flPurchaseTime: number
}

declare class CParticleFunctionRenderer extends CParticleFunction {
	readonly VisibilityInputs: CParticleVisibilityInputs
	m_bCannotBeRefracted: boolean
}

declare class C_OP_SetControlPointPositionToTimeOfDayValue extends CParticleFunctionPreEmission {
	m_nControlPointNumber: number
	readonly m_pszTimeOfDayParameter: number[]
	readonly m_vecDefaultValue: Vector
}

declare class C_OP_SetChildControlPoints extends CParticleFunctionOperator {
	m_nChildGroupID: number
	m_nFirstControlPoint: number
	m_nNumControlPoints: number
	readonly m_nFirstSourcePoint: CParticleCollectionFloatInput
	m_bSetOrientation: boolean
}

declare class C_INIT_InheritFromParentParticles extends CParticleFunctionInitializer {
	m_flScale: number
	m_nIncrement: number
	m_bRandomDistribution: boolean
	m_nRandomSeed: number
}

declare class CLookHeadingCondition extends CAnimStateConditionBase {
	m_comparisonValue: number
}

declare class CSequenceTransitioner {
	readonly m_animationQueue: CAnimationLayer[]
	m_bIsInSimulation: boolean
	m_flSimOrRenderTime: number
	m_flInterpolatedTime: number
}

declare class CAnimationLayer {
	readonly m_op: CNetworkedSequenceOperation
	m_nOrder: number
	m_bLooping: boolean
	m_nNewSequenceParity: number
	m_nFlags: number
	m_bSequenceFinished: boolean
	m_flKillRate: number
	m_flKillDelay: number
	m_flLayerAnimtime: number
	m_flLayerFadeOuttime: number
	m_nActivity: number
	m_nPriority: number
	m_flLastEventCycle: number
	m_flLastAccess: number
}

declare class CNetworkedSequenceOperation {
	m_flPrevCycle: number
	m_flCycle: number
	m_bSequenceChangeNetworked: boolean
	m_bDiscontinuity: boolean
	m_flPrevCycleFromDiscontinuity: number
	m_flPrevCycleForAnimEventDetection: number
}

declare class CObstructionObject {
	m_nObstructionProperties: number
}

declare class CNetworkOriginCellCoordQuantizedVector {
	m_cellX: number
	m_cellY: number
	m_cellZ: number
	m_nOutsideWorld: number
}

declare class C_INIT_CreateFromParentParticles extends CParticleFunctionInitializer {
	m_flVelocityScale: number
	m_flIncrement: number
	m_bRandomDistribution: boolean
	m_nRandomSeed: number
	m_bSubFrame: boolean
}

declare class FeSimdRodConstraint_t {
	readonly nNode: number[]
}

declare class C_OP_RenderStatusEffect extends CParticleFunctionRenderer {
}

declare class C_INIT_InitFromCPSnapshot extends CParticleFunctionInitializer {
	m_nControlPointNumber: number
	m_nLocalSpaceCP: number
	m_bRandom: boolean
	m_bReverse: boolean
	m_nRandomSeed: number
}

declare class C_INIT_PositionOffsetToCP extends CParticleFunctionInitializer {
	m_nControlPointNumberStart: number
	m_nControlPointNumberEnd: number
	m_bLocalCoords: boolean
}

declare class CSSDSMsg_EndFrame {
	readonly m_Views: CSSDSEndFrameViewInfo[]
}

declare class CSSDSEndFrameViewInfo {
	m_nViewId: bigint
	readonly m_ViewName: string
}

declare class AnimParamID {
	m_id: number
}

declare class InfoForResourceTypeCVirtualVolumeTexture {}

declare class CConstantForceController {
	readonly m_linear: Vector
	readonly m_angular: Vector
	readonly m_linearSave: Vector
	readonly m_angularSave: Vector
}

declare class INextBotEventResponder {}

declare class CBoneConstraintBase {}

declare class EventAdvanceTick_t extends EventSimulate_t {
	m_nCurrentTick: number
	m_nTotalTicksThisFrame: number
	m_nTotalTicks: number
}

declare class C_OP_RemapControlPointOrientationToRotation extends CParticleFunctionOperator {
	m_nCP: number
	m_flOffsetRot: number
	m_nComponent: number
}

declare class C_OP_Cull extends CParticleFunctionOperator {
	m_flCullPerc: number
	m_flCullStart: number
	m_flCullEnd: number
	m_flCullExp: number
}

declare class C_INIT_AgeNoise extends CParticleFunctionInitializer {
	m_bAbsVal: boolean
	m_bAbsValInv: boolean
	m_flOffset: number
	m_flAgeMin: number
	m_flAgeMax: number
	m_flNoiseScale: number
	m_flNoiseScaleLoc: number
	readonly m_vecOffsetLoc: Vector
}

declare class SeqResourceSeqDesc_t_Flag_t {
	m_bLooping: boolean
	m_bSnap: boolean
	m_bAutoplay: boolean
	m_bPost: boolean
	m_bHidden: boolean
	m_bMulti: boolean
	m_bLegacyDelta: boolean
	m_bLegacyWorldspace: boolean
	m_bLegacyCyclepose: boolean
	m_bLegacyRealtime: boolean
}

declare class CEntityClass {
	readonly m_pInputs: EntInput_t
	m_nInputCount: number
	readonly m_pOutputs: EntOutput_t
	m_nOutputCount: number
	readonly m_pComponentOverrides: EntClassComponentOverride_t
	readonly m_pClassInfo: CEntityClassInfo
	readonly m_pBaseClassInfo: CEntityClassInfo
	readonly m_designerName: string
	m_flags: number
	m_nAllHelpersFlags: number
	readonly m_requiredEHandle: C_BaseEntity
	readonly m_pNextClass: CEntityClass
}

declare class EntInput_t {}

declare class EntOutput_t {}

declare class EntClassComponentOverride_t {
	readonly pszBaseComponent: string
	readonly pszOverrideComponent: string
}

declare class CEntityClassInfo {
	readonly m_pszClassname: string
	readonly m_pszCPPClassname: string
	readonly m_pszDescription: string
	readonly m_pClass: CEntityClass
	readonly m_pBaseClassInfo: CEntityClassInfo
}

declare class MorphData_t {
}

declare class CVPhysXSurfacePropertiesList {
	readonly m_surfacePropertiesList: CPhysSurfaceProperties[]
}

declare class CPhysSurfaceProperties {
	readonly m_name: string
	m_nameHash: number
	m_baseNameHash: number
	m_bHidden: boolean
	readonly m_description: string
	readonly m_physics: CPhysSurfacePropertiesPhysics
	readonly m_audioSounds: CPhysSurfacePropertiesSoundNames
	readonly m_audioParams: CPhysSurfacePropertiesAudio
}

declare class CPhysSurfacePropertiesPhysics {
	m_friction: number
	m_elasticity: number
	m_density: number
	m_thickness: number
	m_dampening: number
}

declare class CPhysSurfacePropertiesAudio {
	m_reflectivity: number
	m_hardnessFactor: number
	m_roughnessFactor: number
	m_roughThreshold: number
	m_hardThreshold: number
	m_hardVelocityThreshold: number
}

declare class CParticleFunctionEmitter extends CParticleFunction {}

declare class CParticleFunctionConstraint extends CParticleFunction {}

declare class MorphSetData_t {
	m_nWidth: number
	m_nHeight: number
}

declare class C_OP_BasicMovement extends CParticleFunctionOperator {
	readonly m_Gravity: Vector
	m_fDrag: number
	m_nMaxConstraintPasses: number
	m_bLockULCorner: boolean
	m_bLockURCorner: boolean
	m_bLockLLCorner: boolean
	m_bLockLRCorner: boolean
}

declare class FlexDesc_t {
}

declare class C_VerticalMotionController {}

declare class DOTA_AssassinMinigameNetworkState {
	nAssassinState: number
	nVictimHeroID: number
}

declare class thinkfunc_t {
	m_nNextThinkTick: number
	m_nLastThinkTick: number
}

declare class FileWeaponInfo_t {
	m_bParsedScript: boolean
	m_bLoadedHudElements: boolean
	readonly m_szClassName: string
	readonly m_szPrintName: string
	readonly m_szViewModel: string
	readonly m_szWorldModel: string
	readonly m_szAnimationPrefix: string
	readonly m_szMuzzleFlashParticle: string
	readonly m_szTracerParticle: string
	m_iSlot: number
	m_iPosition: number
	m_iMaxClip1: number
	m_iMaxClip2: number
	m_iDefaultClip1: number
	m_iDefaultClip2: number
	m_iWeight: number
	m_iRumbleEffect: number
	m_bAutoSwitchTo: boolean
	m_bAutoSwitchFrom: boolean
	m_iFlags: number
	readonly m_szAmmo1: string
	readonly m_szAmmo2: string
	readonly m_szAIAddOn: string
	m_bMeleeWeapon: boolean
	m_bBuiltRightHanded: boolean
	m_bAllowFlipping: boolean
	m_iAmmoType: number
	m_iAmmo2Type: number
	readonly m_aTextureData: WeaponTextureData_t[]
	readonly m_aShootSounds: WeaponSoundData_t[]
}

declare class WeaponTextureData_t {
	readonly m_Name: string
	readonly m_Sprite: string
	readonly m_Font: string
	m_x: number
	m_y: number
	m_width: number
	m_height: number
	m_FontCharacter: number
}

declare class WeaponSoundData_t {
	m_Type: WeaponSound_t
	readonly m_Sound: string
}

declare class C_OP_RenderProjected extends CParticleFunctionRenderer {
	m_bProjectCharacter: boolean
	m_bProjectWorld: boolean
	m_bProjectWater: boolean
	m_bFlipHorizontal: boolean
	m_bEnableProjectedDepthControls: boolean
	m_flMinProjectionDepth: number
	m_flMaxProjectionDepth: number
	m_flAnimationTimeScale: number
}

declare class C_OP_OscillateScalarSimple extends CParticleFunctionOperator {
	m_Rate: number
	m_Frequency: number
	m_flOscMult: number
	m_flOscAdd: number
}

declare class C_INIT_InitFloat extends CParticleFunctionInitializer {
	readonly m_InputValue: CPerParticleFloatInput
}

declare class C_INIT_InitSkinnedPositionFromCPSnapshot extends CParticleFunctionInitializer {
	m_nSnapshotControlPointNumber: number
	m_nControlPointNumber: number
	m_bRandom: boolean
	m_nRandomSeed: number
	m_bRigid: boolean
	m_bSetNormal: boolean
	m_bIgnoreDt: boolean
	m_flMinNormalVelocity: number
	m_flMaxNormalVelocity: number
	m_flIncrement: number
	m_nFullLoopIncrement: number
	m_nSnapShotStartPoint: number
	m_flBoneVelocity: number
	m_flBoneVelocityMax: number
}

declare class C_OP_SpringConstraint extends CParticleFunctionConstraint {
	m_flRestLengthU: number
	m_flRestLengthV: number
	m_flMinDistance: number
	m_flMaxDistance: number
	m_flAdjustmentScale: number
}

declare class RnShapeDesc_t {
	m_nCollisionAttributeIndex: number
	m_nSurfacePropertyIndex: number
}

declare class CAnimParameterBase {
	readonly m_name: string
	readonly m_id: AnimParamID
	m_previewButton: AnimParamButton_t
	m_bNetwork: boolean
	m_bUseMostRecentValue: boolean
	m_bAutoReset: boolean
}

declare class VPhysXAggregateData_t {
	m_nFlags: number
	m_nRefCounter: number
}

declare class C_INIT_ModelCull extends CParticleFunctionInitializer {
	m_nControlPointNumber: number
	m_bBoundBox: boolean
	m_bCullOutside: boolean
	m_bUseBones: boolean
	readonly m_HitboxSetName: number[]
}

declare class CAnimInputDamping {
	m_speedFunction: DampingSpeedFunction
	m_fSpeedScale: number
	m_fMinSpeed: number
	m_fMaxTension: number
}

declare class fogplayerparams_t {
	readonly m_hCtrl: C_BaseEntity
	m_flTransitionTime: number
	readonly m_OldColor: Color
	m_flOldStart: number
	m_flOldEnd: number
	m_flOldMaxDensity: number
	m_flOldHDRColorScale: number
	m_flOldFarZ: number
	readonly m_NewColor: Color
	m_flNewStart: number
	m_flNewEnd: number
	m_flNewMaxDensity: number
	m_flNewHDRColorScale: number
	m_flNewFarZ: number
}

declare class C_OP_DistanceBetweenCPsToCP extends CParticleFunctionPreEmission {
	m_nStartCP: number
	m_nEndCP: number
	m_nOutputCP: number
	m_nOutputCPField: number
	m_flInputMin: number
	m_flInputMax: number
	m_flOutputMin: number
	m_flOutputMax: number
	m_flMaxTraceLength: number
	m_flLOSScale: number
	m_bLOS: boolean
	readonly m_CollisionGroupName: number[]
}

declare class C_OP_SetFloat extends CParticleFunctionOperator {
	readonly m_InputValue: CPerParticleFloatInput
	m_bScaleInitialValue: boolean
}

declare class CBlend2DItem {
	readonly m_sequenceName: string
	readonly m_blendValue: Vector2D
}

declare class C_OP_ContinuousEmitter extends CParticleFunctionEmitter {
	m_flEmissionDuration: number
	m_flStartTime: number
	m_flEmitRate: number
	m_flEmissionScale: number
	m_nScaleControlPoint: number
	m_nScaleControlPointField: number
	m_bScalePerParticle: boolean
	m_flScalePerParentParticle: number
	m_bInitFromKilledParentParticles: boolean
}

declare class C_INIT_RandomAlpha extends CParticleFunctionInitializer {
	m_nAlphaMin: number
	m_nAlphaMax: number
	m_flAlphaRandExponent: number
}

declare class CEffectData {
	readonly m_vOrigin: Vector
	readonly m_vStart: Vector
	readonly m_vNormal: Vector
	readonly m_vAngles: QAngle
	readonly m_hEntity: C_BaseEntity
	readonly m_hOtherEntity: C_BaseEntity
	m_flScale: number
	m_flMagnitude: number
	m_flRadius: number
	m_nDamageType: number
	m_nMaterial: number
	m_nHitBox: number
	m_nColor: number
	m_fFlags: number
	m_nAttachmentIndex: number
	m_iEffectName: number
}

declare class CDOTA_AbilityDraftAbilityState {
	m_nAbilityID: number
	m_unPlayerID: number
	m_unAbilityPlayerSlot: number
}

declare class CSubtractAnimNode extends CAnimNodeBase {
	readonly m_baseChildID: AnimNodeID
	readonly m_subtractChildID: AnimNodeID
	m_timingBehavior: BinaryNodeTiming
	m_flTimingBlend: number
	m_bResetBase: boolean
	m_bResetSubtract: boolean
	m_bApplyChannelsSeparately: boolean
}

declare class HitBoxSet_t {
}

declare class InfoForResourceTypeCPhysAggregateData {}

declare class C_OP_NoiseEmitter extends CParticleFunctionEmitter {
	m_flEmissionDuration: number
	m_flStartTime: number
	m_flEmissionScale: number
	m_nScaleControlPoint: number
	m_nScaleControlPointField: number
	m_nWorldNoisePoint: number
	m_bAbsVal: boolean
	m_bAbsValInv: boolean
	m_flOffset: number
	m_flOutputMin: number
	m_flOutputMax: number
	m_flNoiseScale: number
	m_flWorldNoiseScale: number
	readonly m_vecOffsetLoc: Vector
	m_flWorldTimeScale: number
}

declare class AnimTagID {
	m_id: number
}

declare class sky3dparams_t {
	scale: number
	readonly origin: Vector
	bClip3DSkyBoxNearToWorldFar: boolean
	flClip3DSkyBoxNearToWorldFarOffset: number
	readonly fog: fogparams_t
}

declare class JiggleData {
	bone: number
	id: number
	lastUpdate: number
	readonly basePos: Vector
	readonly baseLastPos: Vector
	readonly baseVel: Vector
	readonly baseAccel: Vector
	readonly tipPos: Vector
	readonly tipVel: Vector
	readonly tipAccel: Vector
}

declare class RnSphere_t {
	readonly m_vCenter: Vector
	m_flRadius: number
}

declare class PhysSoftbodyDesc_t {
}

declare class CDOTA_Buff {
	readonly m_name: string
	readonly m_class: string
	readonly m_szModifierAura: string
	m_iSerialNumber: number
	m_iStringIndex: number
	m_iIndex: number
	m_flCreationTime: number
	m_iCreationFrame: number
	m_flLastAppliedTime: number
	m_flDuration: number
	m_flDieTime: number
	readonly m_hCaster: C_BaseEntity
	readonly m_hAbility: C_BaseEntity
	readonly m_hParent: C_BaseEntity
	m_iStackCount: number
	m_iAuraSearchTeam: number
	m_iAuraSearchType: number
	m_iAuraSearchFlags: number
	m_iAuraRadius: number
	m_iTeam: number
	m_iAttributes: number
	m_iPaddingToMakeSchemaHappy2: number
	readonly m_bIsAura: boolean
	readonly m_bIsAuraActiveOnDeath: boolean
	readonly m_bMarkedForDeletion: boolean
	readonly m_bAuraIsHeal: boolean
	readonly m_bProvidedByAura: boolean
	m_bPurgedDestroy: boolean
	m_flPreviousTick: number
	m_flThinkInterval: number
	m_flThinkTimeAccumulator: number
	readonly m_iParticles: CDOTA_BuffParticle[]
	readonly m_hAuraUnits: C_BaseEntity[]
}

declare class C_OP_RemapNamedModelElementOnceTimed extends CParticleFunctionOperator {
	readonly m_inNames: string[]
	readonly m_outNames: string[]
	readonly m_fallbackNames: string[]
	m_bModelFromRenderer: boolean
	m_bProportional: boolean
	m_flRemapTime: number
}

declare class C_INIT_RemapParticleCountToScalar extends CParticleFunctionInitializer {
	m_nInputMin: number
	m_nInputMax: number
	m_nScaleControlPoint: number
	m_nScaleControlPointField: number
	m_flOutputMin: number
	m_flOutputMax: number
	m_bScaleInitialRange: boolean
	m_bActiveRange: boolean
	m_bInvert: boolean
	m_bWrap: boolean
	m_flRemapBias: number
}

declare class VMapResourceData_t {}

declare class FeCtrlSoftOffset_t {
	nCtrlParent: number
	nCtrlChild: number
	readonly vOffset: Vector
	flAlpha: number
}

declare class IBotController {}

declare class vehicle_controlparams_t {
	throttle: number
	steering: number
	brake: number
	boost: number
	handbrake: boolean
	handbrakeLeft: boolean
	handbrakeRight: boolean
	brakepedal: boolean
	bHasBrakePedal: boolean
	bAnalogSteering: boolean
}

declare class C_OP_SetControlPointToHand extends CParticleFunctionPreEmission {
	m_nCP1: number
	m_nHand: number
	readonly m_vecCP1Pos: Vector
	m_bOrientToHand: boolean
}

declare class VSoundEventScript_t {
}

declare class MorphRectData_t {
	m_nXLeftDst: number
	m_nYTopDst: number
	m_flUWidthSrc: number
	m_flVHeightSrc: number
}

declare class InfoForResourceTypeProcessingGraph_t {}

declare class DamageShareEvent_t {
	m_flOriginalDamage: number
	m_flTakenDamage: number
	m_nPlayerID: number
}

declare class CSimpleSimTimer {
	m_next: number
}

declare class C_INIT_RandomYawFlip extends CParticleFunctionInitializer {
	m_flPercent: number
}

declare class C_OP_RenderCables extends CParticleFunctionRenderer {
	m_flTextureSize: number
	m_nMinTesselation: number
	m_nMaxTesselation: number
	m_flTessScale: number
	m_flTextureScrollRate: number
	m_flNormalMapScrollRate: number
}

declare class C_INIT_Orient2DRelToCP extends CParticleFunctionInitializer {
	m_nCP: number
	m_flRotOffset: number
}

declare class InfoForResourceTypeCLightTree {}

declare class C_GameRules {}

declare class EventClientPostSimulate_t extends EventSimulate_t {}

declare class InfoForResourceTypeCVSoundEventScriptList {}

declare class InfoForResourceTypeCTextureBase {}

declare class PostProcessingTonemapParameters_t {
	m_flExposureBias: number
	m_flShoulderStrength: number
	m_flLinearStrength: number
	m_flLinearAngle: number
	m_flToeStrength: number
	m_flToeNum: number
	m_flToeDenom: number
	m_flWhitePoint: number
}

declare class FlexController_t {
	localToGlobal: number
	min: number
	max: number
}

declare class ModelBoneFlexDriverControl_t {
	m_nBoneComponent: ModelBoneFlexComponent_t
	m_flexControllerToken: number
	m_flMin: number
	m_flMax: number
}

declare class FeNodeBase_t {
	nNode: number
	readonly nDummy: number[]
	nNodeX0: number
	nNodeX1: number
	nNodeY0: number
	nNodeY1: number
}

declare class IRagdoll {}

declare class C_OP_CycleScalar extends CParticleFunctionOperator {
	m_flStartValue: number
	m_flEndValue: number
	m_flCycleTime: number
	m_bDoNotRepeatCycle: boolean
	m_bSynchronizeParticles: boolean
	m_nCPScale: number
	m_nCPFieldMin: number
	m_nCPFieldMax: number
}

declare class C_OP_SetCPOrientationToGroundNormal extends CParticleFunctionOperator {
	m_flInterpRate: number
	m_flMaxTraceLength: number
	m_flTolerance: number
	m_flTraceOffset: number
	readonly m_CollisionGroupName: number[]
	m_nInputCP: number
	m_nOutputCP: number
	m_bIncludeWater: boolean
}

declare class C_OP_SequenceFromModel extends CParticleFunctionOperator {
	m_nControlPointNumber: number
	m_flInputMin: number
	m_flInputMax: number
	m_flOutputMin: number
	m_flOutputMax: number
	m_bScaleInitialRange: boolean
	m_bScaleCurrent: boolean
}

declare class CBasePathAnimMotor extends CBaseAnimMotor {
	m_bLockToPath: boolean
}

declare class CResponseCriteriaSet {
	m_nNumPrefixedContexts: number
	m_bOverrideOnAppend: boolean
}

declare class IParticleEffect {}

declare class C_OP_RemapCPVisibilityToVector extends CParticleFunctionOperator {
	m_bScaleInitialRange: boolean
	m_nControlPoint: number
	m_flInputMin: number
	m_flInputMax: number
	readonly m_vecOutputMin: Vector
	readonly m_vecOutputMax: Vector
	m_flRadius: number
}

declare class C_OP_RemapCPOrientationToYaw extends CParticleFunctionOperator {
	m_nCP: number
	m_flRotOffset: number
	m_flSpinStrength: number
}

declare class C_INIT_RemapParticleCountToNamedModelElementScalar extends C_INIT_RemapParticleCountToScalar {
	readonly m_outputMinName: string
	readonly m_outputMaxName: string
	m_bModelFromRenderer: boolean
}

declare class CCycleControlAnimNode extends CAnimNodeBase {
	readonly m_childID: AnimNodeID
	m_valueSource: AnimValueSource
	readonly m_param: AnimParamID
}

declare class C_DOTA_Modifier_Lua extends CDOTA_Buff {}

declare class sAcquireHistory {
	m_nAbilityID: number
	m_nLevel: number
	m_nGold: number
	m_nNetWorth: number
	m_bCombinedItem: number
	m_fGameTime: number
	readonly m_vecItemList: number[]
	readonly m_vecTalentSkilledList: number[]
}

declare class sBounceInfo {
	iAttackIndex: number
	iBounceCount: number
	readonly hAlreadyHitList: C_BaseEntity[]
}

declare class AnimStateID {
	m_id: number
}

declare class VBitmapFontDiskData_t {
}

declare class FeAxialEdgeBend_t {
	te: number
	tv: number
	flDist: number
	readonly flWeight: number[]
	readonly nNode: number[]
}

declare class CProjectedTextureBase {
	readonly m_hTargetEntity: C_BaseEntity
	m_bState: boolean
	m_bAlwaysUpdate: boolean
	m_flLightFOV: number
	m_bEnableShadows: boolean
	m_bSimpleProjection: boolean
	m_bLightOnlyTarget: boolean
	m_bLightWorld: boolean
	m_bCameraSpace: boolean
	m_flBrightnessScale: number
	readonly m_LightColor: Color
	m_flIntensity: number
	m_flLinearAttenuation: number
	m_flQuadraticAttenuation: number
	m_bVolumetric: boolean
	m_flVolumetricIntensity: number
	m_flNoiseStrength: number
	m_flFlashlightTime: number
	m_nNumPlanes: number
	m_flPlaneOffset: number
	m_flColorTransitionTime: number
	m_flAmbient: number
	readonly m_SpotlightTextureName: number[]
	m_nSpotlightTextureFrame: number
	m_nShadowQuality: number
	m_flNearZ: number
	m_flFarZ: number
	m_flProjectionSize: number
	m_flRotation: number
	m_bFlipHorizontal: boolean
}

declare class C_OP_RemapCPtoCP extends CParticleFunctionPreEmission {
	m_nInputControlPoint: number
	m_nOutputControlPoint: number
	m_nInputField: number
	m_nOutputField: number
	m_flInputMin: number
	m_flInputMax: number
	m_flOutputMin: number
	m_flOutputMax: number
}

declare class C_OP_LerpScalar extends CParticleFunctionOperator {
	m_flOutput: number
	m_flStartTime: number
	m_flEndTime: number
}

declare class AnimResourceAnimEvent_t {
	m_nFrame: number
	m_flCycle: number
}

declare class FlexRule_t {
	m_nFlex: number
}

declare class FourQuaternions {
}

declare class VSoundStackScript_t {
}

declare class CBlendCurve {
	readonly m_vControlPoint1: Vector2D
	readonly m_vControlPoint2: Vector2D
}

declare class CSkeletalInputAnimNode extends CAnimNodeBase {
	m_motionRange: AnimVRHandMotionRange_t
}

declare class SkeletonBoneBbox_t {
	readonly m_vecCenter: Vector
	m_pad0: number
	readonly m_vecSize: Vector
	m_pad1: number
}

declare class RenderInputLayoutField_t {
	readonly m_pSemanticName: number[]
	m_nSemanticIndex: number
	m_Format: number
	m_nOffset: number
	m_nSlot: number
	m_nSlotType: RenderSlotType_t
	m_nInstanceStepRate: number
}

declare class CAttributeManager {
	readonly m_Providers: C_BaseEntity[]
	readonly m_Receivers: C_BaseEntity[]
	m_iReapplyProvisionParity: number
	readonly m_hOuter: C_BaseEntity
	m_bPreventLoopback: boolean
	m_ProviderType: attributeprovidertypes_t
}

declare class Extent {
	readonly lo: Vector
	readonly hi: Vector
}

declare class InfoForResourceTypeMorphSetData_t {}

declare class sControlGroupElem {
	readonly m_UnitName: number[]
	readonly m_UnitLabel: number[]
	m_unUnitLabelIndex: number
	readonly m_hEntity: C_BaseEntity
	m_bIsIllusion: boolean
	readonly m_IllusionLabel: number[]
}

declare class C_INIT_GlobalScale extends CParticleFunctionInitializer {
	m_flScale: number
	m_nScaleControlPointNumber: number
	m_nControlPointNumber: number
	m_bScaleRadius: boolean
	m_bScalePosition: boolean
	m_bScaleVelocity: boolean
}

declare class AABB_t {
	readonly m_vMinBounds: Vector
	readonly m_vMaxBounds: Vector
}

declare class CDOTA_ItemStockInfo {
	iTeamNumber: number
	nItemAbilityID: number
	fStockDuration: number
	fStockTime: number
	iStockCount: number
	iMaxCount: number
	fInitialStockDuration: number
	iPlayerNumber: number
}

declare class C_INIT_RandomVector extends CParticleFunctionInitializer {
	readonly m_vecMin: Vector
	readonly m_vecMax: Vector
}

declare class AnimationDecodeDebugDumpElement_t {
	m_nEntityIndex: number
	readonly m_modelName: string
	readonly m_poseParams: string[]
	readonly m_decodeOps: string[]
	readonly m_internalOps: string[]
	readonly m_decodedAnims: string[]
}

declare class C_OP_MovementPlaceOnGround extends CParticleFunctionOperator {
	m_flOffset: number
	m_flMaxTraceLength: number
	m_flTolerance: number
	m_flTraceOffset: number
	m_flLerpRate: number
	readonly m_CollisionGroupName: number[]
	m_nRefCP1: number
	m_nRefCP2: number
	m_nLerpCP: number
	m_bKill: boolean
	m_bIncludeWater: boolean
	m_bSetNormal: boolean
	m_bScaleOffset: boolean
}

declare class CSSDSMsg_LayerBase {
	readonly m_viewId: SceneViewId_t
	readonly m_ViewName: string
	m_nLayerIndex: number
	m_nLayerId: bigint
	readonly m_LayerName: string
	readonly m_displayText: string
}

declare class CSosGroupActionSchema {
	readonly m_name: string
	m_actionType: ActionType_t
	m_actionInstanceType: ActionType_t
}

declare class MaterialResourceData_t {
}

declare class C_OP_ConstrainDistance extends CParticleFunctionConstraint {
	m_fMinDistance: number
	m_fMaxDistance: number
	m_nControlPointNumber: number
	m_nScaleCP: number
	readonly m_CenterOffset: Vector
	m_bGlobalCenter: boolean
}

declare class BaseSceneObjectOverride_t {
	m_nSceneObjectIndex: number
}

declare class TextureDesc_t {
	m_nWidth: number
	m_nHeight: number
	m_nDepth: number
	m_nImageFormat: number
	m_nNumMipLevels: number
	m_nPicmip0Res: number
}

declare class CDOTAGameManager {
	readonly __m_pChainEntity: CNetworkVarChainer
	m_bCustomGame: boolean
	m_bEventGame: boolean
	readonly m_szAddOnGame: number[]
	readonly m_szAddOnMap: number[]
	m_nNumLoadingPlayers: number
	m_iDefeatedParticle: number
	readonly m_StableHeroAvailable: boolean[]
	readonly m_CurrentHeroAvailable: boolean[]
	readonly m_CulledHeroes: boolean[]
	readonly m_BonusHeroes: boolean[]
}

declare class C_OP_Noise extends CParticleFunctionOperator {
	m_flOutputMin: number
	m_flOutputMax: number
	m_bAdditive: boolean
	m_flNoiseAnimationTimeScale: number
}

declare class C_INIT_NormalOffset extends CParticleFunctionInitializer {
	readonly m_OffsetMin: Vector
	readonly m_OffsetMax: Vector
	m_nControlPointNumber: number
	m_bLocalCoords: boolean
	m_bNormalize: boolean
}

declare class CSosGroupActionLimitSchema extends CSosGroupActionSchema {
	m_nMaxCount: number
	m_nStopType: SosActionStopType_t
	m_nSortType: SosActionSortType_t
}

declare class FeWeightedNode_t {
	nNode: number
	nWeight: number
}

declare class CNetworkTransmitComponent {
	m_nTransmitStateOwnedCounter: number
}

declare class C_OP_MovementRigidAttachToCP extends CParticleFunctionOperator {
	m_nControlPointNumber: number
	m_nScaleControlPoint: number
	m_nScaleCPField: number
	m_bOffsetLocal: boolean
}

declare class LightTreeResourceData_t {
}

declare class RnTriangle_t {
	readonly m_nIndex: number[]
}

declare class C_OP_RemapScalarOnceTimed extends CParticleFunctionOperator {
	m_bProportional: boolean
	m_flInputMin: number
	m_flInputMax: number
	m_flOutputMin: number
	m_flOutputMax: number
	m_flRemapTime: number
}

declare class C_OP_InstantaneousEmitter extends CParticleFunctionEmitter {
	m_nParticlesToEmit: number
	m_nMinParticlesToEmit: number
	m_flStartTime: number
	m_flStartTimeMax: number
	m_flInitFromKilledParentParticles: number
	m_nMaxEmittedPerFrame: number
	m_nScaleControlPoint: number
	m_nScaleControlPointField: number
	m_nSnapshotControlPoint: number
}

declare class C_INIT_MakeShapes extends CParticleFunctionInitializer {
	m_flMinSize: number
	m_flMaxSize: number
}

declare class PerInstanceBakedLightingParamsOverride_t extends BaseSceneObjectOverride_t {
	m_nSubSceneObject: number
	m_nDrawCallIndex: number
	m_bHasBakedLightingFromVertexStream: boolean
	m_bHasBakedLightingFromLightmap: boolean
	m_bHasBakedLightingBasisInVertex: boolean
	m_bHasPerInstanceBakedLightingData: boolean
	m_nPerVertexLightingOffsetInVertices: number
}

declare class CIntAnimParameter extends CAnimParameterBase {
	m_defaultValue: number
	m_minValue: number
	m_maxValue: number
}

declare class C_OP_RadiusDecay extends CParticleFunctionOperator {
	m_flMinRadius: number
}

declare class C_INIT_RemapNamedModelElementToScalar extends CParticleFunctionInitializer {
	readonly m_names: string[]
	readonly m_values: number[]
	m_bScaleInitialRange: boolean
	m_bModelFromRenderer: boolean
}

declare class CDirectPlaybackAnimNode extends CAnimNodeBase {
	readonly m_childID: AnimNodeID
	m_bFinishEarly: boolean
	m_bResetOnFinish: boolean
}

declare class FeAnimStrayRadius_t {
	readonly nNode: number[]
	flMaxDist: number
	flRelaxationFactor: number
}

declare class C_MultiplayRules extends C_GameRules {}

declare class ModelReference_t {
	m_flRelativeProbabilityOfSpawn: number
}

declare class C_OP_LockToPointList extends CParticleFunctionOperator {
	m_bPlaceAlongPath: boolean
	m_bClosedLoop: boolean
	m_nNumPointsAlongPath: number
}

declare class RnCapsuleDesc_t extends RnShapeDesc_t {
	readonly m_Capsule: RnCapsule_t
}

declare class CAnimGraphDebugReplay {
	readonly m_pAnimGraph: CAnimationGraph
	m_startIndex: number
	m_writeIndex: number
	m_frameCount: number
}

declare class CAnimationGraph {
	readonly m_motorList: CAnimMotorList
	readonly m_rootNodeID: AnimNodeID
}

declare class InfoForResourceTypeWorldEnvironmentMaps_t {}

declare class C_fogplayerparams_t {
	readonly m_hCtrl: C_BaseEntity
	m_flTransitionTime: number
	readonly m_OldColor: Color
	m_flOldStart: number
	m_flOldEnd: number
	m_flOldMaxDensity: number
	m_flOldHDRColorScale: number
	m_flOldFarZ: number
	readonly m_NewColor: Color
	m_flNewStart: number
	m_flNewEnd: number
	m_flNewMaxDensity: number
	m_flNewHDRColorScale: number
	m_flNewFarZ: number
}

declare class CreatureStateData_t {
	readonly pszName: string
	flAggression: number
	flAvoidance: number
	flSupport: number
	flRoamDistance: number
}

declare class CAnimTagBase {
	readonly m_name: string
	readonly m_tagID: AnimTagID
}

declare class InfoForResourceTypeCDOTAPatchNotesList {}

declare class C_OP_SetRandomControlPointPosition extends CParticleFunctionPreEmission {
	m_bUseWorldLocation: boolean
	m_bOrient: boolean
	m_nCP1: number
	m_nHeadLocation: number
	m_flReRandomRate: number
	readonly m_vecCPMinPos: Vector
	readonly m_vecCPMaxPos: Vector
}

declare class ParticlePreviewBodyGroup_t {
	readonly m_bodyGroupName: string
	m_nValue: number
}

declare class C_OP_RenderSound extends CParticleFunctionRenderer {
	m_flDurationScale: number
	m_flSndLvlScale: number
	m_flPitchScale: number
	m_flVolumeScale: number
	m_nChannel: number
	m_nCPReference: number
	readonly m_pszSoundName: number[]
}

declare class C_OP_RemapCPtoVector extends CParticleFunctionOperator {
	m_nCPInput: number
	m_nLocalSpaceCP: number
	readonly m_vInputMin: Vector
	readonly m_vInputMax: Vector
	readonly m_vOutputMin: Vector
	readonly m_vOutputMax: Vector
	m_flStartTime: number
	m_flEndTime: number
	m_flInterpRate: number
	m_bScaleInitialRange: boolean
	m_bScaleCurrent: boolean
	m_bOffset: boolean
	m_bAccelerate: boolean
}

declare class C_OP_RemapScalarEndCap extends CParticleFunctionOperator {
	m_flInputMin: number
	m_flInputMax: number
	m_flOutputMin: number
	m_flOutputMax: number
}

declare class C_INIT_RtEnvCull extends CParticleFunctionInitializer {
	readonly m_vecTestDir: Vector
	readonly m_vecTestNormal: Vector
	m_bUseVelocity: boolean
	m_bCullOnMiss: boolean
	m_bLifeAdjust: boolean
	readonly m_RtEnvName: number[]
}

declare class FeWorldCollisionParams_t {
	flWorldFriction: number
	flGroundFriction: number
	nListBegin: number
	nListEnd: number
}

declare class CBaseRendererSource2 extends CParticleFunctionRenderer {
	m_flAnimationRate: number
	m_bFitCycleToLifetime: boolean
	m_bAnimateInFPS: boolean
	m_bPerVertexLighting: boolean
	m_flSelfIllumAmount: number
	m_flDiffuseAmount: number
	m_flSourceAlphaValueToMapToZero: number
	m_flSourceAlphaValueToMapToOne: number
	m_bGammaCorrectVertexColors: boolean
	m_bSaturateColorPreAlphaBlend: boolean
	m_nSequenceCombineMode: SequenceCombineMode_t
	m_flAnimationRate2: number
	m_flSequence0RGBWeight: number
	m_flSequence0AlphaWeight: number
	m_flSequence1RGBWeight: number
	m_flSequence1AlphaWeight: number
	m_flAddSelfAmount: number
	m_bAdditive: boolean
	m_bAdditiveAlpha: boolean
	m_bMod2X: boolean
	m_bLightenMode: boolean
	m_bMaxLuminanceBlendingSequence0: boolean
	m_bMaxLuminanceBlendingSequence1: boolean
	m_bRefract: boolean
	m_flRefractAmount: number
	m_nRefractBlurRadius: number
	m_nRefractBlurType: BlurFilterType_t
	readonly m_stencilTestID: number[]
	readonly m_stencilWriteID: number[]
	m_bWriteStencilOnDepthPass: boolean
	m_bWriteStencilOnDepthFail: boolean
	m_bReverseZBuffering: boolean
	m_bDisableZBuffering: boolean
	m_nFeatheringMode: ParticleDepthFeatheringMode_t
	m_flFeatheringMinDist: number
	m_flFeatheringMaxDist: number
	m_flOverbrightFactor: number
	m_bTintByFOW: boolean
	m_bFogParticles: boolean
	m_bTintByGlobalLight: boolean
	m_bMotionVectors: boolean
	m_bBlendFramesSeq0: boolean
	m_nFirstSequenceOffsetForRightEye: number
	m_nHSVShiftControlPoint: number
}

declare class EventClientAdvanceTick_t extends EventAdvanceTick_t {}

declare class FeBandBendLimit_t {
	flDistMin: number
	flDistMax: number
	readonly nNode: number[]
}

declare class C_OP_SpinYaw extends CGeneralSpin {}

declare class MaterialOverride_t extends BaseSceneObjectOverride_t {
	m_nSubSceneObject: number
	m_nDrawCallIndex: number
}

declare class SheetFrameImage_t {
	readonly uvCropped: Vector2D[]
	readonly uvUncropped: Vector2D[]
}

declare class MaterialParam_t {
}

declare class OnDiskBufferData_t {
	m_nElementCount: number
	m_nElementSizeInBytes: number
}

declare class InfoForResourceTypeCResourceManifestInternal {}

declare class C_OP_ClothMovement extends CParticleFunctionOperator {
	readonly m_Gravity: Vector
	m_fDrag: number
	m_bTriangulate: boolean
	m_bConstraints: boolean
	m_flAddCurvature: number
	m_flAddSlack: number
	m_flAddNoise: number
	m_nMaxConstraintPasses: number
	m_bLockULCorner: boolean
	m_bLockURCorner: boolean
	m_bLockLLCorner: boolean
	m_bLockLRCorner: boolean
	m_bLockURow: boolean
	m_bLockLRow: boolean
	m_bLockLColumn: boolean
	m_bLockRColumn: boolean
	m_nIterations: number
}

declare class C_OP_RemapVectortoCP extends CParticleFunctionOperator {
	m_nOutControlPointNumber: number
	m_nParticleNumber: number
}

declare class C_OP_RemapVisibilityScalar extends CParticleFunctionOperator {
	m_flInputMin: number
	m_flInputMax: number
	m_flOutputMin: number
	m_flOutputMax: number
	m_flRadiusScale: number
}

declare class WorldEnvironmentMaps_t {
}

declare class Sheet_t {
}

declare class C_OP_OscillateVector extends CParticleFunctionOperator {
	readonly m_RateMin: Vector
	readonly m_RateMax: Vector
	readonly m_FrequencyMin: Vector
	readonly m_FrequencyMax: Vector
	m_bProportional: boolean
	m_bProportionalOp: boolean
	m_bOffset: boolean
	m_flStartTime_min: number
	m_flStartTime_max: number
	m_flEndTime_min: number
	m_flEndTime_max: number
	m_flOscMult: number
	m_flOscAdd: number
}

declare class CViewAngleKeyFrame {
	readonly m_vecAngles: QAngle
	m_flTime: number
	m_iFlags: number
}

declare class CDOTA_Modifier_Lua extends CDOTA_Buff {}

declare class C_OP_EndCapTimedDecay extends CParticleFunctionOperator {
	m_flDecayTime: number
}

declare class CFollowAttachmentAnimNode extends CAnimNodeBase {
	readonly m_childID: AnimNodeID
	readonly m_boneName: string
	readonly m_attachmentName: string
	m_bMatchTranslation: boolean
	m_bMatchRotation: boolean
}

declare class CRootAnimNode extends CAnimNodeBase {
	readonly m_childID: AnimNodeID
}

declare class C_TeamplayRules extends C_MultiplayRules {}

declare class C_OP_RenderScreenShake extends CParticleFunctionRenderer {
	m_flDurationScale: number
	m_flRadiusScale: number
	m_flFrequencyScale: number
	m_flAmplitudeScale: number
	m_nFilterCP: number
}

declare class C_DOTASpectatorGraphManager {
	readonly __m_pChainEntity: CNetworkVarChainer
	m_nPlayerDataCount: number
	readonly m_SendTeamStatsTimer: CountdownTimer
	m_bTrackingTeamStats: boolean
	m_flStartTime: number
	m_nNextUpdatePlayer: number
	readonly m_rgPlayerGraphData: C_BaseEntity[]
	readonly m_rgRadiantTotalEarnedGold: number[]
	readonly m_rgDireTotalEarnedGold: number[]
	readonly m_rgRadiantTotalEarnedXP: number[]
	readonly m_rgDireTotalEarnedXP: number[]
	readonly m_rgRadiantNetWorth: number[]
	readonly m_rgDireNetWorth: number[]
	m_flTotalEarnedGoldStartTime: number
	m_flTotalEarnedGoldEndTime: number
	m_nGoldGraphVersion: number
	readonly m_rgRadiantWinChance: number[]
	readonly m_TeamStatsUpdateTimer: CountdownTimer
	readonly m_HeroInventorySnapshotTimer: CountdownTimer
	readonly m_vecPlayerSnapshots: sPlayerSnapshot[][]
	m_unDataChangedCount: number
}

declare class magnetted_objects_t {
	readonly hEntity: C_BaseEntity
}

declare class CHorizontalMotionController {}

declare class SeqResourceBoneMaskList_t {
}

declare class PostProcessingVignetteParameters_t {
	m_flVignetteStrength: number
	readonly m_vCenter: Vector2D
	m_flRadius: number
	m_flRoundness: number
	m_flFeather: number
	readonly m_vColorTint: Vector
}

declare class CDOTAMusicProbabilityEntry {
	readonly m_flProbabilityElements: number[]
	m_flProbability: number
}

declare class CNetworkVelocityVector {
}

declare class C_OP_DifferencePreviousParticle extends CParticleFunctionOperator {
	m_flInputMin: number
	m_flInputMax: number
	m_flOutputMin: number
	m_flOutputMax: number
	m_bScaleInitialRange: boolean
	m_bActiveRange: boolean
	m_bSetPreviousParticle: boolean
}

declare class CPathStatusCondition extends CAnimStateConditionBase {
	m_optionToCheck: PathStatusOptions
	m_bComparisonValue: boolean
}

declare class CBaseConstraint extends CBoneConstraintBase {
	readonly m_name: string
	readonly m_vUpVector: Vector
	readonly m_slaves: CConstraintSlave[]
	readonly m_targets: CConstraintTarget[]
}

declare class CConstraintSlave {
	m_nBoneHash: number
	m_flWeight: number
	readonly m_vBasePosition: Vector
	readonly m_sName: string
}

declare class CConstraintTarget {
	m_nBoneHash: number
	m_flWeight: number
	readonly m_vOffset: Vector
	m_bIsAttachment: boolean
	readonly m_sName: string
}

declare class BaseConstraint_t {
	m_nConstraintType: number
	readonly m_vUpVector: Vector
	m_nTargetUpBoneHash: number
	m_nUpType: number
	m_bInverse: boolean
}

declare class CNavVolumeVector extends CNavVolume {
	m_bHasBeenPreFiltered: boolean
}

declare class DOTAAbilityData_t {
	readonly m_pszAbilityName: string
	readonly m_pszTextureName: string
	readonly m_pszSharedCooldownName: string
	readonly m_pszKeyOverride: string
	readonly m_pszItemRecipeName: string
	readonly m_pszLinkedAbility: string
	m_castActivity: number
	m_castActivityGestureSlot: DotaGestureSlot_t
	m_iAbilityID: number
	m_iAbilityType: number
	m_iAbilityBehavior: bigint
	m_iAbilityTargetTeam: number
	m_iAbilityTargetType: number
	m_iAbilityTargetFlags: number
	m_iAbilityDamageType: number
	m_iAbilityImmunityType: number
	m_iAbilityDispellableType: number
	m_iFightRecapLevel: number
	m_iAssociatedEventID: number
	m_iMaxLevel: number
	m_iItemBaseLevel: number
	m_iItemCost: number
	m_iItemInitialCharges: number
	m_iItemStockMax: number
	m_fItemStockTime: number
	m_nRecipeResultAbilityID: number
	readonly m_vecItemCombinesInto: number[]
	readonly m_vecRecipeComponents: number[][]
	m_ItemQuality: ItemQuality_t
	m_flModifierValue: number
	m_flModifierValueBonus: number
	readonly m_InvalidHeroes: string[]
	m_bHasScepterUpgrade: boolean
	m_nCastRangeBuffer: number
	m_nSpecialAbilities: number
	readonly m_pSpecialAbilities: DOTASpecialAbility_t
	readonly m_pModelName: string
	readonly m_pModelAlternateName: string
	readonly m_pEffectName: string
	readonly m_pPingOverrideText: string
	readonly m_pszRequiredCustomShopName: string
	m_iLevelsBetweenUpgrades: number
	m_iRequiredLevel: number
	m_fAnimationPlaybackRate: number
	readonly m_bIsItem: boolean
	readonly m_bItemIsRecipe: boolean
	readonly m_bItemIsRecipeGenerated: boolean
	readonly m_bItemAvailableAtSecretShop: boolean
	readonly m_bItemAvailableAtGlobalShop: boolean
	readonly m_bItemAvailableAtSideShop: boolean
	readonly m_bItemAvailableAtCustomShop: boolean
	readonly m_bItemIsPureSupport: boolean
	readonly m_bItemIsPurchasable: boolean
	readonly m_bItemStackable: boolean
	readonly m_bDisplayAdditionalHeroes: boolean
	readonly m_bItemContributesToNetWorthWhenDropped: boolean
	readonly m_bOnCastbar: boolean
	readonly m_bOnLearnbar: boolean
	readonly m_bIsGrantedByScepter: boolean
	readonly m_bIsCastableWhileHidden: boolean
	readonly m_bAnimationIgnoresModelScale: boolean
	readonly m_bIsPlayerSpecificCooldown: boolean
	readonly m_bIsAllowedInBackpack: boolean
	readonly m_bIsObsolete: boolean
	readonly m_bItemRequiresCustomShop: boolean
	readonly m_bShouldBeSuggested: boolean
	readonly m_bShouldBeInitiallySuggested: boolean
	readonly m_bHasCastAnimation: boolean
}

declare class DOTASpecialAbility_t {
	readonly m_pszName: string
	readonly m_pszValue: string
	readonly m_pszLevelKey: string
	readonly m_pszSpecialBonusAbility: string
	readonly m_pszSpecialBonusField: string
	m_FieldType: fieldtype_t
	m_nCount: number
	m_bSpellDamageField: boolean
	m_eSpecialBonusOperation: EDOTASpecialBonusOperation
}

declare class CSpeechBubbleInfo {
	readonly m_LocalizationStr: number[]
	readonly m_hNPC: C_BaseEntity
	m_flDuration: number
	m_unOffsetX: number
	m_unOffsetY: number
	m_unCount: number
}

declare class C_OP_ModelCull extends CParticleFunctionOperator {
	m_nControlPointNumber: number
	m_bBoundBox: boolean
	m_bCullOutside: boolean
	m_bUseBones: boolean
	readonly m_HitboxSetName: number[]
}

declare class CPathParameters {
	m_nStartControlPointNumber: number
	m_nEndControlPointNumber: number
	m_nBulgeControl: number
	m_flBulge: number
	m_flMidPoint: number
	readonly m_vStartPointOffset: Vector
	readonly m_vMidPointOffset: Vector
	readonly m_vEndOffset: Vector
}

declare class CEmptyEntityInstance {}

declare class CAttachment {
	readonly m_name: string
	readonly m_influenceNames: string[]
	readonly m_vInfluenceOffsets: Vector[]
	readonly m_influenceWeights: number[]
	readonly m_bInfluenceRootTransform: boolean[]
	m_nInfluences: number
}

declare class CNavVolumeSphere extends CNavVolume {
	readonly m_vCenter: Vector
	m_flRadius: number
}

declare class ResponseParams {
	odds: number
	flags: number
	soundlevel: number
	readonly m_pFollowup: ResponseFollowup
}

declare class ResponseFollowup {
	readonly followup_concept: string
	readonly followup_contexts: string
	followup_delay: number
	readonly followup_target: string
	readonly followup_entityiotarget: string
	readonly followup_entityioinput: string
	followup_entityiodelay: number
	bFired: boolean
}

declare class C_OP_SetControlPointFieldToWater extends CParticleFunctionPreEmission {
	m_nSourceCP: number
	m_nDestCP: number
	m_nCPField: number
}

declare class C_INIT_PositionOffset extends CParticleFunctionInitializer {
	readonly m_OffsetMin: Vector
	readonly m_OffsetMax: Vector
	m_nControlPointNumber: number
	m_bLocalCoords: boolean
	m_bProportional: boolean
}

declare class EventClientPostOutput_t {
	readonly m_LoopState: EngineLoopState_t
	m_flRenderTime: number
	m_flRenderFrameTime: number
	m_flRenderFrameTimeUnbounded: number
}

declare class NianDamageTaken_t {
	nDamage: number
	nPlayerID: number
	readonly vPos: Vector
}

declare class C_INIT_CreateSpiralSphere extends CParticleFunctionInitializer {
	m_nControlPointNumber: number
	m_nOverrideCP: number
	m_nDensity: number
	m_flInitialRadius: number
	m_flInitialSpeedMin: number
	m_flInitialSpeedMax: number
	m_bUseParticleCount: boolean
}

declare class RnMesh_t {
	readonly m_vMin: Vector
	readonly m_vMax: Vector
	readonly m_vOrthographicAreas: Vector
}

declare class CAimConstraint extends CBaseConstraint {
	m_nUpType: number
}

declare class FeNodeIntegrator_t {
	flPointDamping: number
	flAnimationForceAttraction: number
	flAnimationVertexAttraction: number
	flGravity: number
}

declare class InGamePredictionData_t {
	m_nID: number
	m_nValue: number
	m_nRawValue: number
	m_nValueState: number
	m_bValueIsMask: boolean
}

declare class sGlaiveInfo {
	iAttackIndex: number
	iBounceCount: number
	readonly hAlreadyHitList: C_BaseEntity[]
}

declare class CParticleFunctionForce extends CParticleFunction {}

declare class C_INIT_InitialVelocityNoise extends CParticleFunctionInitializer {
	readonly m_vecAbsVal: Vector
	readonly m_vecAbsValInv: Vector
	readonly m_vecOffsetLoc: Vector
	m_flOffset: number
	readonly m_vecOutputMin: Vector
	readonly m_vecOutputMax: Vector
	m_flNoiseScale: number
	m_flNoiseScaleLoc: number
	m_nControlPointNumber: number
	m_bLocalSpace: boolean
	m_bIgnoreDt: boolean
}

declare class FlexOp_t {
	m_OpCode: number
	m_Data: number
}

declare class IntervalTimer {
	m_timestamp: number
}

declare class ControlPointReference_t {
	m_controlPointNameString: number
	readonly m_vOffsetFromControlPoint: Vector
	m_bOffsetInLocalSpace: boolean
}

declare class C_OP_RestartAfterDuration extends CParticleFunctionOperator {
	m_flDurationMin: number
	m_flDurationMax: number
	m_nCP: number
	m_nCPField: number
	m_nChildGroupID: number
	m_bOnlyChildren: boolean
}

declare class C_OP_SpinUpdate extends CSpinUpdateBase {}

declare class CAnimStateTransition {
	m_blendDuration: number
	readonly m_destState: AnimStateID
	m_bReset: boolean
	m_resetCycleOption: ResetCycleOption
	m_flFixedCycleValue: number
	readonly m_blendCurve: CBlendCurve
}

declare class CovMatrix3 {
	readonly m_vDiag: Vector
	m_flXY: number
	m_flXZ: number
	m_flYZ: number
}

declare class FeFollowNode_t {
	nParentNode: number
	nChildNode: number
	flWeight: number
}

declare class HandInfo_t {
	readonly m_vPosition: Vector
	readonly m_Angles: QAngle
	readonly m_vVelocity: Vector
	m_flSampleTime: number
	readonly m_vFilteredPosition: Vector
	readonly m_FilteredAngles: QAngle
	readonly m_vFilteredVelocity: Vector
	readonly m_FilteredAngularVel: Vector
	m_flTriggerAnalogValue: number
	m_flGripAnalogValue: number
	m_flFinger0: number
	m_flFinger1: number
	m_flFinger2: number
	m_flFinger3: number
	m_flFinger4: number
	m_flFingerSplay0: number
	m_flFingerSplay1: number
	m_flFingerSplay2: number
	m_flFingerSplay3: number
	m_flTrackpadAnalogValueX: number
	m_flTrackpadAnalogValueY: number
	m_flJoystickAnalogValueX: number
	m_flJoystickAnalogValueY: number
}

declare class INextBotComponent extends INextBotEventResponder {
	m_lastUpdateTime: number
	m_curInterval: number
}

declare class IPlayerInfo {}

declare class CreatureAbilityData_t {
	readonly hAbility: C_BaseEntity
	bIsDamage: boolean
	bIsDebuff: boolean
	bIsStun: boolean
	bIsAOE: boolean
	bIsLinear: boolean
	bUseOnCreeps: boolean
	bIsHeal: boolean
	bIsBuff: boolean
	bUseSelfishly: boolean
	bCanHelpOthersEscape: boolean
	bUseOnTrees: boolean
	bUseOnStrongestAlly: boolean
	nUseAtHealthPercent: number
	nRadius: number
	nMinimumTargets: number
	nMinimumHP: number
	nMinimumRange: number
	nAbilityType: CreatureAbilityType
}

declare class RnSoftbodyCapsule_t {
	readonly m_vCenter: Vector[]
	m_flRadius: number
	readonly m_nParticle: number[]
}

declare class AnimResourceIKRule_t {
	index: number
	type: number
	chain: number
	bone: number
	slot: number
	height: number
	radius: number
	floor: number
	readonly pos: Vector
	iStart: number
	start: number
	peak: number
	tail: number
	end: number
	contact: number
	drop: number
	top: number
}

declare class IEconItemInterface {}

declare class CAttributeList {
	readonly m_Attributes: CEconItemAttribute[]
	readonly m_pManager: CAttributeManager
}

declare class C_OP_Callback extends CParticleFunctionRenderer {}

declare class C_INIT_RandomSecondSequence extends CParticleFunctionInitializer {
	m_nSequenceMin: number
	m_nSequenceMax: number
}

declare class C_INIT_RandomSequence extends CParticleFunctionInitializer {
	m_nSequenceMin: number
	m_nSequenceMax: number
	m_bShuffle: boolean
	m_bLinear: boolean
}

declare class CGeneralRandomRotation extends CParticleFunctionInitializer {
	m_flDegreesMin: number
	m_flDegreesMax: number
	m_flDegrees: number
	m_flRotationRandExponent: number
	m_bRandomlyFlipDirection: boolean
}

declare class RnPlane_t {
	readonly m_vNormal: Vector
	m_flOffset: number
}

declare class InfoForResourceTypeCWorldNode {}

declare class CSkeletonAnimationController {
	readonly m_pSkeletonInstance: CSkeletonInstance
}

declare class CSkeletonInstance extends CGameSceneNode {
	readonly m_modelState: CModelState
	m_bIsRenderingEnabled: boolean
	m_bIsAnimationEnabled: boolean
	readonly m_bDisableSolidCollisionsForHierarchy: boolean
	readonly m_bDirtyMotionType: boolean
	readonly m_bIsGeneratingLatchedParentSpaceState: boolean
	m_nHitboxSet: number
	m_bEnableIK: boolean
	m_flIkMasterBlendValueCache: number
	readonly m_NetworkedIKContext: CNetworkedIKContext
}

declare class CGameSceneNode {
	readonly m_pOwner: CEntityInstance
	readonly m_pParent: CGameSceneNode
	readonly m_pChild: CGameSceneNode
	readonly m_pNextSibling: CGameSceneNode
	readonly m_hParent: CGameSceneNodeHandle
	readonly m_vecOrigin: CNetworkOriginCellCoordQuantizedVector
	readonly m_angRotation: QAngle
	m_flScale: number
	readonly m_vecAbsOrigin: Vector
	readonly m_angAbsRotation: QAngle
	m_flAbsScale: number
	m_nParentAttachmentOrBone: number
	m_bDormant: boolean
	m_bForceParentToBeNetworked: boolean
	readonly m_bDirtyHierarchy: boolean
	readonly m_bDirtyBoneMergeInfo: boolean
	readonly m_bNetworkedPositionChanged: boolean
	readonly m_bNetworkedAnglesChanged: boolean
	readonly m_bNetworkedScaleChanged: boolean
	readonly m_bWillBeCallingPostDataUpdate: boolean
	readonly m_bNotifyBoneTransformsChanged: boolean
	readonly m_nLatchAbsOrigin: number
	readonly m_bDirtyBoneMergeBoneToRoot: boolean
	m_nHierarchicalDepth: number
	m_nHierarchyType: number
	m_nDoNotSetAnimTimeInInvalidatePhysicsCount: number
	m_flZOffset: number
	readonly m_vRenderOrigin: Vector
}

declare class CEntityInstance extends IHandleEntity {
	readonly m_iszPrivateVScripts: string
	readonly m_pEntity: CEntityIdentity
	readonly m_CScriptComponent: CScriptComponent
}

declare class IHandleEntity {}

declare class CEntityIdentity {
	readonly m_pEntity: C_BaseEntity
	
	m_nameStringableIndex: number
	readonly m_name: string
	readonly m_designerName: string
	m_flags: number
	m_fDataObjectTypes: number
	readonly m_PathIndex: ChangeAccessorFieldPathIndex_t
	readonly m_pPrev: CEntityIdentity
	readonly m_pNext: CEntityIdentity
	readonly m_pPrevByClass: CEntityIdentity
	readonly m_pNextByClass: CEntityIdentity
}

declare class CScriptComponent extends CEntityComponent {
	readonly m_scriptClassName: string
}

declare class CEntityComponent {}

declare class CModelState {
	readonly m_ModelName: string
	m_MeshGroupMask: bigint
	m_nIdealMotionType: number
	m_nForceLOD: number
	m_bIsJiggleBonesEnabled: boolean
	m_nClothUpdateFlags: number
}

declare class CNetworkedIKContext {
	readonly m_ProceduralTargetContexts: CNetworkedIKProceduralTargetContext[]
}

declare class CNetworkedIKProceduralTargetContext {
	m_nChainIndex: number
	m_nRuleIndex: number
	readonly m_vTargetPosition: Vector
	m_flWeight: number
	m_bIsValid: boolean
}

declare class C_OP_RenderFlattenGrass extends CParticleFunctionRenderer {
	m_flFlattenStrength: number
	m_flRadiusScale: number
}

declare class C_INIT_RandomScalar extends CParticleFunctionInitializer {
	m_flMin: number
	m_flMax: number
	m_flExponent: number
}

declare class C_INIT_SetRigidAttachment extends CParticleFunctionInitializer {
	m_nControlPointNumber: number
	m_bLocalSpace: boolean
}

declare class CMorphConstraint extends CBaseConstraint {
	m_bCacheAttempted: boolean
	m_bCacheOk: boolean
	readonly m_sTargetMorph: string
	m_nSlaveChannel: number
	m_flMin: number
	m_flMax: number
}

declare class C_OP_RampScalarSpline extends CParticleFunctionOperator {
	m_RateMin: number
	m_RateMax: number
	m_flStartTime_min: number
	m_flStartTime_max: number
	m_flEndTime_min: number
	m_flEndTime_max: number
	m_flBias: number
	m_bProportionalOp: boolean
	m_bEaseOut: boolean
}

declare class C_OP_ReinitializeScalarEndCap extends CParticleFunctionOperator {
	m_flOutputMin: number
	m_flOutputMax: number
}

declare class Dop26_t {
	readonly m_flSupport: number[]
}

declare class CGameRules {
	readonly m_szQuestName: number[]
	m_nQuestPhase: number
}

declare class C_OP_CalculateNormalsForGrid extends CParticleFunctionOperator {}

declare class cache_ragdoll_t {
	solidCount: number
	constraintCount: number
}

declare class dynpitchvol_base_t {
	preset: number
	pitchrun: number
	pitchstart: number
	spinup: number
	spindown: number
	volrun: number
	volstart: number
	fadein: number
	fadeout: number
	lfotype: number
	lforate: number
	lfomodpitch: number
	lfomodvol: number
	cspinup: number
	cspincount: number
	pitch: number
	spinupsav: number
	spindownsav: number
	pitchfrac: number
	vol: number
	fadeinsav: number
	fadeoutsav: number
	volfrac: number
	lfofrac: number
	lfomult: number
}

declare class C_OP_FadeOut extends CParticleFunctionOperator {
	m_flFadeOutTimeMin: number
	m_flFadeOutTimeMax: number
	m_flFadeOutTimeExp: number
	m_flFadeBias: number
	m_bProportional: boolean
	m_bEaseInAndOut: boolean
}

declare class C_PlayerState {
	deadflag: boolean
	hltv: boolean
	readonly v_angle: QAngle
}

declare class C_INIT_RemapScalarToVector extends CParticleFunctionInitializer {
	m_flInputMin: number
	m_flInputMax: number
	readonly m_vecOutputMin: Vector
	readonly m_vecOutputMax: Vector
	m_flStartTime: number
	m_flEndTime: number
	m_bScaleInitialRange: boolean
	m_nControlPointNumber: number
	m_bLocalCoords: boolean
	m_flRemapBias: number
}

declare class C_OP_ConstrainDistanceToUserSpecifiedPath extends CParticleFunctionConstraint {
	m_fMinDistance: number
	m_flMaxDistance: number
	m_flTimeScale: number
	m_bLoopedPath: boolean
}

declare class VPhysXDiskShapeHeader_t {
	m_nType: number
	m_nCollisionAttribute: number
}

declare class FourCovMatrices3 {
	// readonly m_vDiag: FourVectors
}

declare class C_OP_RepeatedTriggerChildGroup extends CParticleFunctionPreEmission {
	m_nChildGroupID: number
	readonly m_flClusterRefireTime: CParticleCollectionFloatInput
	readonly m_flClusterSize: CParticleCollectionFloatInput
	readonly m_flClusterCooldown: CParticleCollectionFloatInput
}

declare class C_OP_RemapNamedModelElementEndCap extends CParticleFunctionOperator {
	readonly m_inNames: string[]
	readonly m_outNames: string[]
	readonly m_fallbackNames: string[]
	m_bModelFromRenderer: boolean
}

declare class FeFitMatrix_t {
	readonly vCenter: Vector
	nEnd: number
	nNode: number
	nCtrl: number
	nBeginDynamic: number
}

declare class C_OP_RenderDeferredLight extends CParticleFunctionRenderer {
	m_bUseAlphaTestWindow: boolean
	m_bUseTexture: boolean
	m_flRadiusScale: number
	m_flAlphaScale: number
	m_flLightDistance: number
	m_flStartFalloff: number
	m_flDistanceFalloff: number
	m_flSpotFoV: number
	readonly m_ColorScale: Color
}

declare class CDeferredLightBase {
	readonly m_LightColor: Color
	m_flIntensity: number
	m_flLightSize: number
	m_flSpotFoV: number
	readonly m_vLightDirection: QAngle
	m_flStartFalloff: number
	m_flDistanceFalloff: number
	m_nFlags: number
	readonly m_ProjectedTextureName: number[]
}

declare class C_OP_SetControlPointToHMD extends CParticleFunctionPreEmission {
	m_nCP1: number
	readonly m_vecCP1Pos: Vector
	m_bOrientToHMD: boolean
}

declare class C_OP_LerpEndCapScalar extends CParticleFunctionOperator {
	m_flOutput: number
	m_flLerpTime: number
}

declare class C_OP_SpringForce extends CParticleFunctionForce {
	m_flRestLengthU: number
	m_flRestLengthV: number
	m_flSpringConstant: number
	m_flDampingConstant: number
	m_bStiff: boolean
}

declare class C_OP_ForceBasedOnDistanceToPlane extends CParticleFunctionForce {
	m_flMinDist: number
	readonly m_vecForceAtMinDist: Vector
	m_flMaxDist: number
	readonly m_vecForceAtMaxDist: Vector
	readonly m_vecPlaneNormal: Vector
	m_nControlPointNumber: number
	m_flExponent: number
}

declare class CPathAnimMotor extends CBasePathAnimMotor {}

declare class CPassengerSeat {
	readonly m_strSeatName: string
	m_nAttachmentID: number
	readonly m_EntryTransitions: CPassengerSeatTransition[]
	readonly m_ExitTransitions: CPassengerSeatTransition[]
}

declare class CPassengerSeatTransition {
	readonly m_strAnimationName: string
	m_nPriority: number
}

declare class C_OP_RemapNamedModelSequenceOnceTimed extends C_OP_RemapNamedModelElementOnceTimed {}

declare class C_OP_ExternalGenericForce extends CParticleFunctionForce {
	m_flStrength: number
	m_flCurlStrength: number
	m_flLinearStrength: number
	m_flRadialStrength: number
	m_flRotationStrength: number
}

declare class C_INIT_RandomLifeTime extends CParticleFunctionInitializer {
	m_fLifetimeMin: number
	m_fLifetimeMax: number
	m_fLifetimeRandExponent: number
}

declare class C_INIT_SetHitboxToModel extends CParticleFunctionInitializer {
	m_nControlPointNumber: number
	m_nForceInModel: number
	m_nDesiredHitbox: number
	m_flHitBoxScale: number
	readonly m_vecDirectionBias: Vector
	m_bMaintainHitbox: boolean
	m_bUseBones: boolean
	readonly m_HitboxSetName: number[]
}

declare class HeroDeathRecord_t {
	nKillerPlayerID: number
	nVictimPlayerID: number
	fTime: number
	fTimeRespawn: number
}

declare class C_INIT_OffsetVectorToVector extends CParticleFunctionInitializer {
	readonly m_vecOutputMin: Vector
	readonly m_vecOutputMax: Vector
}

declare class C_INIT_PositionWarp extends CParticleFunctionInitializer {
	readonly m_vecWarpMin: Vector
	readonly m_vecWarpMax: Vector
	m_nScaleControlPointNumber: number
	m_nControlPointNumber: number
	m_nRadiusComponent: number
	m_flWarpTime: number
	m_flWarpStartTime: number
	m_flPrevPosScale: number
	m_bInvertWarp: boolean
	m_bUseCount: boolean
}

declare class CLeanMatrixAnimNode extends CAnimNodeBase {
	readonly m_sequenceName: string
	m_flMaxValue: number
	m_blendSource: AnimVectorSource
	readonly m_param: AnimParamID
	readonly m_verticalAxisDirection: Vector
	readonly m_horizontalAxisDirection: Vector
	readonly m_damping: CAnimInputDamping
}

declare class CAnimStateList {
	readonly m_states: CAnimState[]
}

declare class CAnimState {
	readonly m_tags: AnimTagID[]
	readonly m_tagBehaviors: number[]
	readonly m_name: string
	readonly m_childNodeID: AnimNodeID
	readonly m_stateID: AnimStateID
	readonly m_position: Vector2D
	m_bIsStartState: boolean
	m_bIsEndtState: boolean
	m_bIsPassthrough: boolean
	m_bIsRootMotionExclusive: boolean
}

declare class IRecipientFilter {}

declare class C_INIT_CreateSequentialPath extends CParticleFunctionInitializer {
	m_fMaxDistance: number
	m_flNumToAssign: number
	m_bLoop: boolean
	m_bCPPairs: boolean
	m_bSaveOffset: boolean
	readonly m_PathParams: CPathParameters
}

declare class PermEntityLumpData_t {
	m_flags: EntityLumpFlags_t
}

declare class C_OP_StopAfterCPDuration extends CParticleFunctionPreEmission {
	m_flDuration: number
	m_nCP: number
	m_nCPField: number
	m_bDestroyImmediately: boolean
	m_bPlayEndCap: boolean
}

declare class C_OP_ConnectParentParticleToNearest extends CParticleFunctionOperator {
	m_nFirstControlPoint: number
	m_nSecondControlPoint: number
}

declare class CParameterValue {
	readonly m_id: AnimParamID
}

declare class CParentConstraint extends CBaseConstraint {}

declare class CGlowOverlay {
	readonly m_vPos: Vector
	m_bDirectional: boolean
	readonly m_vDirection: Vector
	m_bInSky: boolean
	m_skyObstructionScale: number
	readonly m_Sprites: CGlowSprite[]
	m_nSprites: number
	m_flProxyRadius: number
	m_flHDRColorScale: number
	m_flGlowObstructionScale: number
	m_bCacheGlowObstruction: boolean
	m_bCacheSkyObstruction: boolean
	m_bActivated: number
	m_ListIndex: number
	m_queryHandle: number
}

declare class CDOTA_TeamCommander {
	m_nLastUnitsCollectTick: number
	readonly m_LaneFrontUpdate: CountdownTimer
	m_ulBotScriptUGC: bigint
	m_rtBotScriptUpdated: number
	readonly m_AvoidanceGridTimer: CountdownTimer
	readonly m_EnemyVisibilityGridTimer: CountdownTimer
	readonly m_LaneStatusTimer: CountdownTimer
	readonly m_ChatThrottleTimer: CountdownTimer
	m_eTeam: DOTATeam_t
	m_bLateGame: boolean
	readonly m_LaneLengths: number[]
	readonly m_LaneFrontCreepsAmounts: number[]
	readonly m_LaneFrontTowersAmounts: number[]
	readonly m_AvoidanceGrid: number[]
	readonly m_fNextPotentialLocationTick: number[]
	readonly m_iPotentialLocationBuffer: number[]
	readonly m_PotentialLocationGrid: number[][]
	readonly m_hRoamingUnit: C_BaseEntity
	m_RoamTargetLane: DOTA_LANE
	readonly m_fRuneDibsDesire: number[]
	readonly m_iRuneTypes: number[]
	readonly m_fLastSeenRuneTime: number[]
	readonly m_Buildings: C_BaseEntity[]
	readonly m_LaneNodes: C_BaseEntity[]
	readonly m_fPushLaneDesire: number[]
	readonly m_fPushLaneRawDesire: number[]
	readonly m_fPushLaneConvenienceDesire: number[]
	readonly m_fDefendLaneDesire: number[]
	readonly m_fDefendLaneUrgencyDesire: number[]
	readonly m_fDefendLanePowerDesire: number[]
	readonly m_fFarmLaneDesire: number[]
	m_iLastSeenRoshanHealth: number
	m_fRoshanDesire: number
	readonly m_hProposedPushUnits: C_BaseEntity[][]
	readonly m_hProposedDefendUnits: C_BaseEntity[][]
	readonly m_hProposedRoamUnits: C_BaseEntity[]
	readonly m_hProposedRoshanUnits: C_BaseEntity[]
	m_fRoamDesire: number
	m_fRoamOffensivePowerFactor: number
	m_fRoamDistanceFactor: number
	m_fRoamPositionFactor: number
	readonly m_hRoamTarget: C_BaseEntity
	readonly m_vRoamTargetLoc: Vector
	readonly m_fHeroSelectionTimes: number[]
	readonly m_vBaseLocation: Vector
	readonly m_AllUnits: C_BaseEntity[]
	readonly m_AllAlliedUnits: C_BaseEntity[]
	readonly m_AllAlliedHeroes: C_BaseEntity[]
	readonly m_AllAlliedCreeps: C_BaseEntity[]
	readonly m_AllAlliedWards: C_BaseEntity[]
	readonly m_AllAlliedBuildings: C_BaseEntity[]
	readonly m_AllAlliedOther: C_BaseEntity[]
	readonly m_AllEnemyUnits: C_BaseEntity[]
	readonly m_AllEnemyHeroes: C_BaseEntity[]
	readonly m_AllEnemyCreeps: C_BaseEntity[]
	readonly m_AllEnemyWards: C_BaseEntity[]
	readonly m_AllEnemyBuildings: C_BaseEntity[]
	readonly m_AllEnemyOther: C_BaseEntity[]
	readonly m_AllNeutralCreeps: C_BaseEntity[]
	readonly m_ThinkerUnits: C_BaseEntity[]
	readonly m_AllUnitsIncludingDead: C_BaseEntity[]
	readonly m_hCouriers: C_BaseEntity[]
	readonly m_hDisabledBots: C_BaseEntity[]
	m_bCreatedLobbyBots: boolean
	m_fGoodLuckFlavorTextTime: number
	m_fTeamfightFlavorTextTime: number
	m_fCongratulateHeroFlavorTextTime: number
	m_fLastAliveHeroHistorySnapshotTime: number
	m_iAliveHeroHistoryIndex: number
	readonly m_iAliveHeroHistory: number[]
	readonly m_sScriptDirectory: string
	m_nScriptPathAvoidanceUpdateTick: number
	readonly m_fExecutionTime: number[]
	m_iCurExecutionTime: number
}

declare class ClientQuickBuyItemState {
	nItemType: number
	bPurchasable: boolean
}

declare class C_OP_RampScalarLinearSimple extends CParticleFunctionOperator {
	m_Rate: number
	m_flStartTime: number
	m_flEndTime: number
}

declare class C_OP_LerpEndCapVector extends CParticleFunctionOperator {
	readonly m_vecOutput: Vector
	m_flLerpTime: number
}

declare class CSoundEnvelope {
	m_current: number
	m_target: number
	m_rate: number
	m_forceupdate: boolean
}

declare class CNetworkOriginQuantizedVector {
}

declare class C_INIT_InitialVelocityFromHitbox extends CParticleFunctionInitializer {
	m_flVelocityMin: number
	m_flVelocityMax: number
	m_nControlPointNumber: number
	readonly m_HitboxSetName: number[]
	m_bUseBones: boolean
}

declare class RnNode_t {
	readonly m_vMin: Vector
	m_nChildren: number
	readonly m_vMax: Vector
	m_nTriangleOffset: number
}

declare class CVariantDefaultAllocator {}

declare class TextureHeader_t extends TextureDesc_t {
	m_nMultisampleType: number
	m_nFlags: number
	m_nSheetSize: number
	readonly m_fallbackTextureBits: number[]
	m_nPicmip0Res: number
}

declare class FeEdgeDesc_t {
	readonly nEdge: number[]
	readonly nSide: number[]
	readonly nVirtElem: number[]
}

declare class InfoForResourceTypeWorldLighting_t {}

declare class C_INIT_RemapScalar extends CParticleFunctionInitializer {
	m_flInputMin: number
	m_flInputMax: number
	m_flOutputMin: number
	m_flOutputMax: number
	m_flStartTime: number
	m_flEndTime: number
	m_bScaleInitialRange: boolean
	m_bActiveRange: boolean
	m_flRemapBias: number
}

declare class CStateMachineAnimNode extends CAnimNodeBase {
}

declare class MaterialParamInt_t extends MaterialParam_t {
	m_nValue: number
}

declare class TransitioningLayer_t {
	readonly m_op: CNetworkedSequenceOperation
	m_flStartAnimTime: number
	m_flStartWeight: number
	m_flAnimTime: number
	m_nOrder: number
	m_flPlaybackRate: number
	m_flFadeOutDuration: number
}

declare class C_OP_RemapDistanceToLineSegmentBase extends CParticleFunctionOperator {
	m_nCP0: number
	m_nCP1: number
	m_flMinInputValue: number
	m_flMaxInputValue: number
	m_bInfiniteLine: boolean
}

declare class C_OP_RotateVector extends CParticleFunctionOperator {
	readonly m_vecRotAxisMin: Vector
	readonly m_vecRotAxisMax: Vector
	m_flRotRateMin: number
	m_flRotRateMax: number
	m_bNormalize: boolean
}

declare class ModelSkeletonData_t {
}

declare class handposepair_t {
	readonly m_vExtentOrigin: Vector[]
	readonly m_flHandPoseParams: number[]
	readonly m_poseSequenceName: string
	m_nUseRange: number
	m_bHasExtent: boolean
}

declare class CAI_MoveMonitor {
	readonly m_vMark: Vector
	m_flMarkTolerance: number
}

declare class C_INIT_InitFromParentKilled extends CParticleFunctionInitializer {
}

declare class AnimResourceUser_t {
	m_nType: number
}

declare class AnimResourceMovement_t {
	endframe: number
	motionflags: number
	v0: number
	v1: number
	angle: number
	readonly vector: Vector
	readonly position: Vector
}

declare class FeCtrlOffset_t {
	nCtrlParent: number
	nCtrlChild: number
	readonly vOffset: Vector
}

declare class FeTri_t {
	readonly nNode: number[]
	w1: number
	w2: number
	v1x: number
	readonly v2: Vector2D
}

declare class CBaseTrailRenderer extends CBaseRendererSource2 {
	m_nOrientationType: number
	m_nOrientationControlPoint: number
	m_flMinSize: number
	m_flMaxSize: number
	m_flStartFadeSize: number
	m_flEndFadeSize: number
	m_flDepthBias: number
	m_flRadiusScale: number
	m_bClampV: boolean
	m_flFinalTextureScaleU: number
	m_flFinalTextureScaleV: number
	m_flFinalTextureOffsetU: number
	m_flFinalTextureOffsetV: number
}

declare class C_OP_UpdateLightSource extends CParticleFunctionOperator {
	readonly m_vColorTint: Color
	m_flBrightnessScale: number
	m_flRadiusScale: number
	m_flMinimumLightingRadius: number
	m_flMaximumLightingRadius: number
	m_flPositionDampingConstant: number
}

declare class C_OP_InheritFromPeerSystem extends CParticleFunctionOperator {
	m_nIncrement: number
	m_nGroupID: number
}

declare class C_INIT_LifespanFromVelocity extends CParticleFunctionInitializer {
	readonly m_vecComponentScale: Vector
	m_flTraceOffset: number
	m_flMaxTraceLength: number
	m_flTraceTolerance: number
	m_nMaxPlanes: number
	readonly m_CollisionGroupName: number[]
	m_bIncludeWater: boolean
}

declare class CSSDSMsg_ViewRender {
	readonly m_viewId: SceneViewId_t
	readonly m_ViewName: string
}

declare class CDOTA_ReconnectInfo {
	m_playerSteamId: bigint
	m_iTeam: number
	readonly m_iUnitControlled: C_BaseEntity
	m_bWantsRandomHero: boolean
}

declare class CLocalNPCObstructionsCache {
	m_nLastUpdatedTick: number
	m_flRadius: number
	readonly m_hCachedNPCs: C_BaseEntity[]
}

declare class IDamageHandler {}

declare class FeFitWeight_t {
	flWeight: number
	nNode: number
	nDummy: number
}

declare class C_DOTAGamerules extends C_TeamplayRules {
	readonly __m_pChainEntity: CNetworkVarChainer
	m_iMiscHeroPickCounter: number
	readonly m_hEndGameCinematicEntity: C_BaseEntity
	readonly m_hOverlayHealthBarUnit: C_BaseEntity
	m_nOverlayHealthBarType: number
	m_bIsInCinematicMode: boolean
	m_bIsInClientSideCinematicMode: boolean
	m_bFreeCourierMode: boolean
	m_nStartingGold: number
	m_nGoldPerTick: number
	m_flGoldTickTime: number
	m_bItemWhiteListChanged: boolean
	m_unFanfareGoodGuys: number
	m_unFanfareBadGuys: number
	m_iMapType: number
	m_nServerGameState: number
	m_nServerHeroPickState: DOTA_HeroPickState
	m_nGameState: number
	m_nHeroPickState: DOTA_HeroPickState
	m_flStateTransitionTime: number
	m_flOverride_dota_hero_selection_time: number
	m_flOverride_dota_pregame_time: number
	m_flOverride_dota_postgame_time: number
	m_flOverride_dota_strategy_time: number
	m_flOverride_dota_team_showcase_duration: number
	m_flOverride_dota_rune_spawn_time: number
	m_iGameMode: number
	readonly m_hGameModeEntity: C_BaseEntity
	readonly m_hCustomHeroPickRulesEntity: C_BaseEntity
	m_flHeroPickStateTransitionTime: number
	m_iPlayerIDsInControl: bigint
	m_bSameHeroSelectionEnabled: boolean
	m_bUseCustomHeroXPValue: boolean
	m_bUseBaseGoldBountyOnHeroes: boolean
	m_bUseUniversalShopMode: boolean
	m_bHideKillMessageHeaders: boolean
	m_flHeroMinimapIconScale: number
	m_flCreepMinimapIconScale: number
	m_bCreepSpawningEnabled: boolean
	m_flRuneMinimapIconScale: number
	readonly m_CustomVictoryMessage: number[]
	m_flCustomGameEndDelay: number
	m_flCustomGameSetupAutoLaunchDelay: number
	m_flCustomGameSetupTimeout: number
	m_flCustomVictoryMessageDuration: number
	m_flHeroSelectPenaltyTime: number
	m_bCustomGameSetupAutoLaunchEnabled: boolean
	m_bCustomGameTeamSelectionLocked: boolean
	m_bCustomGameEnablePickRules: boolean
	m_bCustomGameAllowHeroPickMusic: boolean
	m_bCustomGameAllowMusicAtGameStart: boolean
	m_bCustomGameAllowBattleMusic: boolean
	m_bCustomGameDisableIK: boolean
	m_iCMModePickBanOrder: number
	m_iCDModePickBanOrder: number
	m_iPauseTeam: number
	m_nGGTeam: number
	m_flGGEndsAtTime: number
	m_bWhiteListEnabled: boolean
	readonly m_bItemWhiteList: bigint[]
	m_nLastHitUIMode: number
	m_bHUDTimerTutorialMode: boolean
	readonly m_HeroPickMiscTimer: CountdownTimer
	readonly m_ExtraTimeTimer: CountdownTimer
	readonly m_fExtraTimeRemaining: number[]
	m_bRDFirstThink: boolean
	readonly m_RDMessageSent: boolean[]
	m_bHeroRespawnEnabled: boolean
	m_bIsRandomingEnabled: boolean
	readonly m_iCaptainPlayerIDs: number[]
	readonly m_BannedHeroes: number[]
	readonly m_SelectedHeroes: number[]
	m_iActiveTeam: number
	m_iStartingTeam: number
	m_iPenaltyLevelRadiant: number
	m_iPenaltyLevelDire: number
	m_bTier3TowerDestroyed: boolean
	m_nSeriesType: number
	m_nRadiantSeriesWins: number
	m_nDireSeriesWins: number
	readonly m_vecAvailableHerosPerPlayerID: CHeroesPerPlayer[]
	readonly m_vecLockedHerosByPlayerID: CHeroesPerPlayer[]
	readonly m_vecDisabledRandomHerosByPlayerID: CHeroesPerPlayer[]
	readonly m_CustomGameForceSelectHero: number[]
	m_flGoldTime: number
	m_flXPTime: number
	m_flCreepSpawntime: number
	m_flAnnounceStartTime: number
	m_iGoodTomeCount: number
	m_iBadTomeCount: number
	m_flPreGameStartTime: number
	m_flGameStartTime: number
	m_flGameEndTime: number
	m_flGameLoadTime: number
	readonly m_iCustomGameScore: number[]
	m_nCustomGameDifficulty: number
	m_bEnemyModifiersEnabled: boolean
	m_iWaves: number
	m_iCreepUpgradeState: number
	m_fGoodGlyphCooldown: number
	m_fBadGlyphCooldown: number
	readonly m_flGlyphCooldowns: number[]
	m_fGoodRadarCooldown: number
	m_fBadRadarCooldown: number
	readonly m_flRadarCooldowns: number[]
	m_bIsNightstalkerNight: boolean
	m_bIsTemporaryNight: boolean
	m_bIsTemporaryDay: boolean
	m_nRiverType: number
	m_flGoldRedistributeTime: number
	readonly m_nGoldToRedistribute: number[]
	m_flNextPreGameThink: number
	m_flNextAllDraftGoldThink: number
	m_flTimeEnteredState: number
	m_unRiverAccountID: number
	m_ulRiverItemID: bigint
	readonly m_vecItemStockInfo: CDOTA_ItemStockInfo[]
	readonly m_AssassinMiniGameNetData: DOTA_AssassinMinigameNetworkState
	m_nGameWinner: number
	m_unMatchID64: bigint
	m_bMatchSignoutComplete: boolean
	readonly m_hSideShop1: C_BaseEntity
	readonly m_hSideShop2: C_BaseEntity
	readonly m_hSecretShop1: C_BaseEntity
	readonly m_hSecretShop2: C_BaseEntity
	readonly m_hTeamFountains: C_BaseEntity[]
	readonly m_hTeamForts: C_BaseEntity[]
	readonly m_hTeamShops: C_BaseEntity[]
	readonly m_hAnnouncerGood: C_BaseEntity
	readonly m_hAnnouncerBad: C_BaseEntity
	readonly m_hAnnouncerSpectator: C_BaseEntity
	readonly m_hAnnouncerGood_KillingSpree: C_BaseEntity
	readonly m_hAnnouncerBad_KillingSpree: C_BaseEntity
	readonly m_hAnnouncerSpectator_KillingSpree: C_BaseEntity
	m_fGameTime: number
	m_fTimeOfDay: number
	m_iNetTimeOfDay: number
	m_nLoadedPlayers: number
	m_nExpectedPlayers: number
	m_iMinimapDebugGridState: number
	m_iFoWFrameNumber: number
	m_bIsStableMode: boolean
	m_bGamePaused: boolean
	m_fPauseRawTime: number
	m_fPauseCurTime: number
	m_fUnpauseRawTime: number
	m_fUnpauseCurTime: number
	readonly m_vWeatherWindDirection: Vector
	m_nCustomGameFowTeamCount: number
	m_bUseAlternateABRules: boolean
	m_bLobbyIsAssociatedWithGame: boolean
	readonly m_BotDebugTimer: CountdownTimer
	readonly m_BotDebugPushLane: number[]
	readonly m_BotDebugDefendLane: number[]
	readonly m_BotDebugFarmLane: number[]
	readonly m_BotDebugRoam: number[]
	readonly m_hBotDebugRoamTarget: C_BaseEntity[]
	readonly m_BotDebugRoshan: number[]
	m_nRoshanRespawnPhase: ERoshanSpawnPhase
	m_flRoshanRespawnPhaseEndTime: number
	readonly m_AbilityDraftAbilities: CDOTA_AbilityDraftAbilityState[]
	m_bAbilityDraftCurrentPlayerHasPicked: boolean
	m_nAbilityDraftPlayerTracker: number
	m_nAbilityDraftRoundNumber: number
	m_nAbilityDraftAdvanceSteps: number
	m_nAbilityDraftPhase: number
	readonly m_nAbilityDraftHeroesChosen: number[]
	m_nARDMHeroesPrecached: number
	m_fLastARDMPrecache: number
	m_nAllDraftPhase: number
	m_bAllDraftRadiantFirst: boolean
	m_bAllowOverrideVPK: boolean
	readonly m_nARDMHeroesRemaining: number[]
	m_BAbilityDraftHeroesChosenChanged: boolean
	m_bUpdateHeroStatues: boolean
	readonly m_vecPlayerMMR: number[]
	m_lobbyType: number
	m_lobbyLeagueID: number
	readonly m_lobbyGameName: number[]
	readonly m_vecHeroStatueLiked: CHeroStatueLiked[]
	readonly m_CustomGameTeamMaxPlayers: number[]
	readonly m_iMutations: number[]
	readonly m_vecIngameEvents: C_BaseEntity[]
	m_nPrimaryIngameEventIndex: number
	readonly m_hObsoleteIngameEvent: C_BaseEntity
	readonly m_NeutralSpawnBoxes: AABB_t[]
}

declare class CHeroesPerPlayer {
	readonly m_vecHeroIDs: number[]
}

declare class CHeroStatueLiked {
	m_iPlayerIDLiker: number
	m_iPlayerIDLiked: number
}

declare class CEntityIOOutput {
}

declare class CPlayerInfo extends IBotController/*, IPlayerInfo*/ {
}

declare class ViewLockData_t {
	flLockInterval: number
	bLocked: boolean
	flUnlockTime: number
	flUnlockBlendInterval: number
}

declare class C_INIT_CreateWithinSphere extends CParticleFunctionInitializer {
	m_fRadiusMin: number
	m_fRadiusMax: number
	readonly m_vecDistanceBias: Vector
	readonly m_vecDistanceBiasAbs: Vector
	m_nControlPointNumber: number
	m_nScaleCP: number
	m_fSpeedMin: number
	m_fSpeedMax: number
	m_fSpeedRandExp: number
	m_bLocalCoords: boolean
	m_bUseHighestEndCP: boolean
	m_flEndCPGrowthTime: number
	readonly m_LocalCoordinateSystemSpeedMin: Vector
	readonly m_LocalCoordinateSystemSpeedMax: Vector
}

declare class CPointConstraint extends CBaseConstraint {}

declare class PlayerResourceBroadcasterData_t {
	readonly m_iszBroadcasterChannelDescription: string
	readonly m_iszBroadcasterChannelCountryCode: string
	readonly m_iszBroadcasterChannelLanguageCode: string
}

declare class CInteractionManager {
	m_nActiveInteraction: interactions_t
	readonly m_hSelf: C_BaseEntity
	readonly m_hPlayer: C_BaseEntity
	readonly m_hInteractionTarget: C_BaseEntity
	m_flInteractionLerp: number
	readonly m_bSelfInteractionRequirementMet: boolean[]
	readonly m_bInteractionsDisabled: boolean[]
	m_bAllInteractionsDisabled: boolean
	readonly m_vecPreventionEntities: prevent_interaction_t[]
}

declare class prevent_interaction_t {
	readonly m_hEntity: C_BaseEntity
	m_flUntilTime: number
}

declare class C_INIT_SequenceFromCP extends CParticleFunctionInitializer {
	m_bKillUnused: boolean
	m_bRadiusScale: boolean
	m_nCP: number
	readonly m_vecOffset: Vector
}

declare class CBoneMaskAnimNode extends CAnimNodeBase {
	readonly m_weightListName: string
	readonly m_child1ID: AnimNodeID
	readonly m_child2ID: AnimNodeID
	m_blendSpace: BoneMaskBlendSpace
	m_bUseBlendScale: boolean
	m_blendValueSource: AnimValueSource
	readonly m_blendParameter: AnimParamID
	m_timingBehavior: BinaryNodeTiming
	m_flTimingBlend: number
	m_flRootMotionBlend: number
	m_bResetChild1: boolean
	m_bResetChild2: boolean
}

declare class AnimResourceIKRuleStallFrame_t {
	chain: number
	slot: number
	start: number
	peak: number
	tail: number
	end: number
}

declare class EventServerAdvanceTick_t extends EventAdvanceTick_t {}

declare class EventSimpleLoopFrameUpdate_t {
	readonly m_LoopState: EngineLoopState_t
	m_flRealTime: number
	m_flFrameTime: number
}

declare class FeBoxRigid_t {
	nNode: number
	nCollisionMask: number
	readonly vSize: Vector
	flStickiness: number
	readonly flReserved: number[]
}

declare class TimedEvent {
	m_TimeBetweenEvents: number
	m_fNextEvent: number
}

declare class C_INIT_RandomNamedModelMeshGroup extends C_INIT_RandomNamedModelElement {}

declare class FeSimdNodeBase_t {
	readonly nNode: number[]
	readonly nNodeX0: number[]
	readonly nNodeX1: number[]
	readonly nNodeY0: number[]
	readonly nNodeY1: number[]
	readonly nDummy: number[]
	readonly qAdjust: FourQuaternions
}

declare class VelocitySampler {
	readonly m_prevSample: Vector
	m_fPrevSampleTime: number
	m_fIdealSampleRate: number
}

declare class CNavVolumeCalculatedVector extends CNavVolume {}

declare class C_OP_RemapNamedModelBodyPartOnceTimed extends C_OP_RemapNamedModelElementOnceTimed {}

declare class AnimationResourceData_t {
	m_nMaxUniqueFrameIndex: number
}

declare class PermModelExtPart_t {
	m_nParent: number
}

declare class SeqResourceTransition_t {
	m_flFadeInTime: number
	m_flFadeOutTime: number
}

declare class SheetSequence_t {
	m_nId: number
	m_bClamp: boolean
	m_bAlphaCrop: boolean
	m_bNoColor: boolean
	m_bNoAlpha: boolean
	m_flTotalTime: number
}

declare class SequenceFloatParam_t {
	m_value: number
}

declare class CHeadLookParams {
	m_flLookDuration: number
	readonly m_pReplyWhenAimed: INextBotReply
	readonly m_pReasonStr: string
	m_bWaitForSteady: boolean
	m_flEaseInTime: number
}

declare class INextBotReply {}

declare class CFlashlightEffect {
	m_bIsOn: boolean
	m_bMuzzleFlashEnabled: boolean
	m_flMuzzleFlashBrightness: number
	readonly m_vecMuzzleFlashOrigin: Vector
	m_flDT: number
	m_flFov: number
	m_flFarZ: number
	m_flLinearAtten: number
	m_bCastsShadows: boolean
	m_flCurrentPullBackDist: number
	readonly m_textureName: number[]
}

declare class CLookAtAnimNode extends CAnimNodeBase {
	readonly m_childID: AnimNodeID
	m_target: AnimVectorSource
	readonly m_param: AnimParamID
	readonly m_weightParam: AnimParamID
	readonly m_lookatChainName: string
	readonly m_attachmentName: string
	m_flYawLimit: number
	m_flPitchLimit: number
	m_bResetBase: boolean
	m_bLockWhenWaning: boolean
	m_bUseHysteresis: boolean
	m_flHysteresisInnerAngle: number
	m_flHysteresisOuterAngle: number
	readonly m_damping: CAnimInputDamping
}

declare class EventSetTime_t {
	readonly m_LoopState: EngineLoopState_t
	m_nClientOutputFrames: number
	m_flRealTime: number
	m_flRenderTime: number
	m_flRenderFrameTime: number
	m_flRenderFrameTimeUnbounded: number
	m_flRenderFrameTimeUnscaled: number
	m_flTickRemainder: number
}

declare class FeSphereRigid_t {
	nNode: number
	nCollisionMask: number
	readonly vCenter: Vector
	flRadius: number
	flStickiness: number
}

declare class InfoForResourceTypeCVPhysXSurfacePropertiesList {}

declare class SeqResourceSynthAnimDesc_t {
	readonly m_flags: SeqResourceSeqDesc_t_Flag_t
	readonly m_transition: SeqResourceTransition_t
	m_nLocalBaseReference: number
	m_nLocalBoneMask: number
}

declare class OldFeEdge_t {
	readonly m_flK: number[]
	invA: number
	t: number
	flThetaRelaxed: number
	flThetaFactor: number
	c01: number
	c02: number
	c03: number
	c04: number
	flAxialModelDist: number
	readonly flAxialModelWeights: number[]
	readonly m_nNode: number[]
}

declare class constraint_breakableparams_t {
	strength: number
	forceLimit: number
	torqueLimit: number
	readonly bodyMassScale: number[]
	isActive: boolean
}

declare class IIntention extends INextBotComponent/*, IContextualQuery*/ {}

declare class C_OP_MaxVelocity extends CParticleFunctionOperator {
	m_flMaxVelocity: number
	m_nOverrideCP: number
	m_nOverrideCPField: number
}

declare class C_OP_OscillateVectorSimple extends CParticleFunctionOperator {
	readonly m_Rate: Vector
	readonly m_Frequency: Vector
	m_flOscMult: number
	m_flOscAdd: number
	m_bOffset: boolean
}

declare class CLookPitchCondition extends CAnimStateConditionBase {
	m_comparisonValue: number
}

declare class EventSplitScreenStateChanged_t {}

declare class CPhysicsComponent {}

declare class MaterialParamBuffer_t extends MaterialParam_t {
}

declare class EventPostDataUpdate_t {
	m_nCount: number
}

declare class CTakeDamageInfo {
	readonly m_vecDamageForce: Vector
	readonly m_vecDamagePosition: Vector
	readonly m_vecReportedPosition: Vector
	readonly m_vecDamageDirection: Vector
	readonly m_hInflictor: C_BaseEntity
	readonly m_hAttacker: C_BaseEntity
	readonly m_hWeapon: C_BaseEntity
	m_flDamage: number
	m_flMaxDamage: number
	m_flBaseDamage: number
	m_bitsDamageType: number
	m_iDamageCustom: number
	m_iAmmoType: number
	m_flRadius: number
	m_bCanHeadshot: boolean
	m_flOriginalDamage: number
	m_nDamageTaken: number
	m_iRecord: number
	m_flStabilityDamage: number
	m_bitsDotaDamageType: number
	m_nDotaDamageCategory: number
	m_bAllowFriendlyFire: boolean
	m_bCanBeBlocked: boolean
}

declare class C_OP_VelocityMatchingForce extends CParticleFunctionOperator {
	m_flDirScale: number
	m_flSpdScale: number
	m_nCPBroadcast: number
}

declare class CSSDSMsg_ViewTargetList {
	readonly m_viewId: SceneViewId_t
	readonly m_ViewName: string
	readonly m_Targets: CSSDSMsg_ViewTarget[]
}

declare class CSSDSMsg_ViewTarget {
	readonly m_Name: string
	m_TextureId: bigint
	m_nWidth: number
	m_nHeight: number
	m_nRequestedWidth: number
	m_nRequestedHeight: number
	m_nNumMipLevels: number
	m_nDepth: number
	m_nMultisampleNumSamples: number
	m_nFormat: number
}

declare class FeSimdAnimStrayRadius_t {
	readonly nNode: number[]
}

declare class C_OP_RenderBlobs extends CParticleFunctionRenderer {
	m_cubeWidth: number
	m_cutoffRadius: number
	m_renderRadius: number
	m_nScaleCP: number
}

declare class C_INIT_CreateOnGrid extends CParticleFunctionInitializer {
	readonly m_nXCount: CParticleCollectionFloatInput
	readonly m_nYCount: CParticleCollectionFloatInput
	readonly m_nZCount: CParticleCollectionFloatInput
	readonly m_nXSpacing: CParticleCollectionFloatInput
	readonly m_nYSpacing: CParticleCollectionFloatInput
	readonly m_nZSpacing: CParticleCollectionFloatInput
	m_nControlPointNumber: number
	m_bLocalSpace: boolean
	m_bCenter: boolean
	m_bHollow: boolean
}

declare class AnimationDecodeDebugDump_t {
	m_processingType: AnimationProcessingType_t
	readonly m_elems: AnimationDecodeDebugDumpElement_t[]
}

declare class FeSpringIntegrator_t {
	readonly nNode: number[]
	flSpringRestLength: number
	flSpringConstant: number
	flSpringDamping: number
	flNodeWeight0: number
}

declare class CDotaEntityFilterFlags {
	m_bInvertFilter: boolean
	m_bEveryUnit: boolean
	m_nTeamNumber: number
	readonly m_UnitName: string
	m_bIsAncient: boolean
	m_bIsNeutralUnitType: boolean
	m_bIsSummoned: boolean
	m_bIsHero: boolean
	m_bIsRealHero: boolean
	m_bIsTower: boolean
	m_bIsPhantom: boolean
	m_bIsIllusion: boolean
	m_bIsCreep: boolean
	m_bIsLaneCreep: boolean
}

declare class C_OP_ControlpointLight extends CParticleFunctionOperator {
	m_flScale: number
	m_nControlPoint1: number
	m_nControlPoint2: number
	m_nControlPoint3: number
	m_nControlPoint4: number
	readonly m_vecCPOffset1: Vector
	readonly m_vecCPOffset2: Vector
	readonly m_vecCPOffset3: Vector
	readonly m_vecCPOffset4: Vector
	m_LightFiftyDist1: number
	m_LightZeroDist1: number
	m_LightFiftyDist2: number
	m_LightZeroDist2: number
	m_LightFiftyDist3: number
	m_LightZeroDist3: number
	m_LightFiftyDist4: number
	m_LightZeroDist4: number
	readonly m_LightColor1: Color
	readonly m_LightColor2: Color
	readonly m_LightColor3: Color
	readonly m_LightColor4: Color
	m_bLightType1: boolean
	m_bLightType2: boolean
	m_bLightType3: boolean
	m_bLightType4: boolean
	m_bLightDynamic1: boolean
	m_bLightDynamic2: boolean
	m_bLightDynamic3: boolean
	m_bLightDynamic4: boolean
	m_bUseNormal: boolean
	m_bUseHLambert: boolean
	m_bClampLowerRange: boolean
	m_bClampUpperRange: boolean
}

declare class CEntityComponentHelper {
	m_flags: number
	readonly m_pInfo: EntComponentInfo_t
	m_nPriority: number
	readonly m_pNext: CEntityComponentHelper
}

declare class EntComponentInfo_t {
	readonly m_pName: string
	readonly m_pCPPClassname: string
	readonly m_pNetworkDataReferencedDescription: string
	readonly m_pNetworkDataReferencedPtrPropDescription: string
	m_nRuntimeIndex: number
	m_nFlags: number
	readonly m_pBaseClassComponentHelper: CEntityComponentHelper
}

declare class FeCollisionPlane_t {
	nCtrlParent: number
	nChildNode: number
	readonly m_Plane: RnPlane_t
	flStickiness: number
}

declare class C_TeamplayRoundBasedRules extends C_TeamplayRules {
	readonly __m_pChainEntity: CNetworkVarChainer
	m_flLastRoundStateChangeTime: number
	m_bOldInWaitingForPlayers: boolean
	m_bOldInOvertime: boolean
	m_bOldInSetup: boolean
	m_iRoundState: gamerules_roundstate_t
	m_bInOvertime: boolean
	m_bInSetup: boolean
	m_bSwitchedTeamsThisRound: boolean
	m_iWinningTeam: number
	m_iWinReason: number
	m_bInWaitingForPlayers: boolean
	m_bAwaitingReadyRestart: boolean
	m_flRestartRoundTime: number
	m_flMapResetTime: number
	readonly m_flNextRespawnWave: number[]
	readonly m_bTeamReady: boolean[]
	m_bStopWatch: boolean
	readonly m_TeamRespawnWaveTimes: number[]
	m_flStartBalancingTeamsAt: number
	m_flNextBalanceTeamsTime: number
	m_bPrintedUnbalanceWarning: boolean
	m_flFoundUnbalancedTeamsTime: number
	m_flStopWatchTotalTime: number
	m_iLastCapPointChanged: number
}

declare class CEconItemView extends IEconItemInterface {
	m_iEntityQuality: number
	m_iEntityLevel: number
	m_iAccountID: number
	m_iInventoryPosition: number
	m_bInitialized: boolean
	m_bIsStoreItem: boolean
	m_bIsTradeItem: boolean
	m_bHasComputedAttachedParticles: boolean
	m_bHasAttachedParticles: boolean
	m_iEntityQuantity: number
	m_unClientFlags: number
	m_unOverrideOrigin: eEconItemOrigin
	readonly m_pszGrayedOutReason: string
	readonly m_AttributeList: CAttributeList
}

declare class CVerticalMotionController {}

declare class CMultiplayRules extends CGameRules {
	m_flIntermissionEndTime: number
}

declare class AnimationRetargetElementData_t {
	m_nElementType: number
	m_nGroupType: number
	m_nChainType: number
	m_nChainIndex: number
	m_nChainInvIndex: number
	m_nBoneIndex: number
	m_flDistance: number
	readonly m_vecMin: Vector
	readonly m_vecMax: Vector
	m_flMass: number
}

declare class CFourWheelVehiclePhysics {
	readonly m_pOuter: C_BaseEntity
	readonly m_pOuterServerVehicle: CFourWheelServerVehicle
	readonly m_controls: vehicle_controlparams_t
	m_nSpeed: number
	m_nLastSpeed: number
	m_nRPM: number
	m_fLastBoost: number
	m_nBoostTimeLeft: number
	m_bHasBoost: boolean
	m_maxThrottle: number
	m_flMaxRevThrottle: number
	m_flMaxSpeed: number
	m_actionSpeed: number
	m_wheelCount: number
	readonly m_wheelPosition: Vector[]
	readonly m_wheelRotation: QAngle[]
	readonly m_wheelBaseHeight: number[]
	readonly m_wheelTotalHeight: number[]
	readonly m_poseParameters: number[]
	m_actionValue: number
	m_actionScale: number
	m_debugRadius: number
	m_throttleRate: number
	m_throttleStartTime: number
	m_throttleActiveTime: number
	m_turboTimer: number
	m_flVehicleVolume: number
	m_bIsOn: boolean
	m_bLastThrottle: boolean
	m_bLastBoost: boolean
	m_bLastSkid: boolean
}

declare class CFourWheelServerVehicle extends CBaseServerVehicle {
	readonly m_ViewSmoothing: ViewSmoothingData_t
}

declare class CBaseServerVehicle extends IServerVehicle {
	readonly m_PassengerInfo: CPassengerInfo[]
	readonly m_PassengerRoles: CPassengerRole[]
	m_nNPCButtons: number
	m_nPrevNPCButtons: number
	m_flTurnDegrees: number
	m_bParsedAnimations: boolean
	m_bUseLegacyExitChecks: boolean
	m_iCurrentExitAnim: number
	readonly m_vecCurrentExitEndPoint: Vector
	readonly m_savedViewOffset: Vector
	readonly m_hExitBlocker: C_BaseEntity
	m_chPreviousTextureType: number
	readonly m_vehicleSounds: vehiclesounds_t
	m_flVehicleVolume: number
	m_iSoundGear: number
	m_flSpeedPercentage: number
	m_soundState: sound_states
	m_soundStateStartTime: number
	m_lastSpeed: number
}

declare class IServerVehicle extends IVehicle {}

declare class IVehicle {}

declare class CPassengerInfo {
	m_nRole: number
	m_nSeat: number
	readonly m_strRoleName: string
	readonly m_strSeatName: string
	readonly m_hPassenger: C_BaseEntity
}

declare class CPassengerRole {
	readonly m_strName: string
	readonly m_PassengerSeats: CPassengerSeat[]
}

declare class vehiclesounds_t {
	readonly pGears: vehicle_gear_t[]
	readonly crashSounds: vehicle_crashsound_t[]
	readonly iszSound: string[]
	readonly iszStateSounds: string[]
	readonly minStateTime: number[]
}

declare class vehicle_gear_t {
	flMinSpeed: number
	flMaxSpeed: number
	flSpeedApproachFactor: number
}

declare class vehicle_crashsound_t {
	flMinSpeed: number
	flMinDeltaSpeed: number
	gearLimit: number
	readonly iszCrashSound: string
}

declare class ViewSmoothingData_t {
	bClampEyeAngles: boolean
	flPitchCurveZero: number
	flPitchCurveLinear: number
	flRollCurveZero: number
	flRollCurveLinear: number
	flFOV: number
	readonly pitchLockData: ViewLockData_t
	readonly rollLockData: ViewLockData_t
	bDampenEyePosition: boolean
	bRunningEnterExit: boolean
	bWasRunningAnim: boolean
	flEnterExitStartTime: number
	flEnterExitDuration: number
	readonly vecAnglesSaved: QAngle
	readonly vecOriginSaved: Vector
	readonly vecAngleDiffSaved: QAngle
	readonly vecAngleDiffMin: QAngle
}

declare class C_OP_SetControlPointToPlayer extends CParticleFunctionPreEmission {
	m_nCP1: number
	readonly m_vecCP1Pos: Vector
	m_bOrientToEyes: boolean
}

declare class C_OP_RampScalarLinear extends CParticleFunctionOperator {
	m_RateMin: number
	m_RateMax: number
	m_flStartTime_min: number
	m_flStartTime_max: number
	m_flEndTime_min: number
	m_flEndTime_max: number
	m_bProportionalOp: boolean
}

declare class C_OP_FadeAndKillForTracers extends CParticleFunctionOperator {
	m_flStartFadeInTime: number
	m_flEndFadeInTime: number
	m_flStartFadeOutTime: number
	m_flEndFadeOutTime: number
	m_flStartAlpha: number
	m_flEndAlpha: number
}

declare class C_OP_CodeDrivenEmitter extends CParticleFunctionEmitter {}

declare class C_INIT_RemapNamedModelSequenceToScalar extends C_INIT_RemapNamedModelElementToScalar {}

declare class C_INIT_RemapQAnglesToRotation extends CParticleFunctionInitializer {
	m_nCP: number
}

declare class C_INIT_ChaoticAttractor extends CParticleFunctionInitializer {
	m_flAParm: number
	m_flBParm: number
	m_flCParm: number
	m_flDParm: number
	m_flScale: number
	m_flSpeedMin: number
	m_flSpeedMax: number
	m_nBaseCP: number
	m_bUniformSpeed: boolean
}

declare class EventClientPreSimulate_t extends EventSimulate_t {}

declare class EventClientSceneSystemThreadStateChange_t {
	m_bThreadsActive: boolean
}

declare class CJiggleBones {}

declare class AnimationKeyResourceData_t {
	m_nChannelElements: number
}

declare class CBlend2DAnimNode extends CAnimNodeBase {
	readonly m_items: CBlend2DItem[]
	m_blendSourceX: AnimValueSource
	readonly m_paramX: AnimParamID
	m_blendSourceY: AnimValueSource
	readonly m_paramY: AnimParamID
	m_eBlendNode: Blend2DMode
	m_bLoop: boolean
	m_bLockBlendOnReset: boolean
	m_playbackSpeed: number
	readonly m_damping: CAnimInputDamping
}

declare class IClientAlphaProperty {}

declare class C_INIT_DistanceToCPInit extends CParticleFunctionInitializer {
	m_flInputMin: number
	m_flInputMax: number
	m_flOutputMin: number
	m_flOutputMax: number
	m_nStartCP: number
	m_bLOS: boolean
	readonly m_CollisionGroupName: number[]
	m_flMaxTraceLength: number
	m_flLOSScale: number
	m_bScaleInitialRange: boolean
	m_bActiveRange: boolean
	readonly m_vecDistanceScale: Vector
	m_flRemapBias: number
}

declare class C_OP_RenderTreeShake extends CParticleFunctionRenderer {
	m_flPeakStrength: number
	m_flRadius: number
	m_flShakeDuration: number
	m_flTransitionTime: number
	m_flTwistAmount: number
	m_flRadialAmount: number
	m_flControlPointOrientationAmount: number
	m_nControlPointForLinearDirection: number
}

declare class C_OP_RemapVelocityToVector extends CParticleFunctionOperator {
	m_flScale: number
	m_bNormalize: boolean
}

declare class MaterialParamFloat_t extends MaterialParam_t {
	m_flValue: number
}

declare class PermModelData_t {
	// m_modelInfo: PermModelInfo_t__FlagEnum
	m_nDefaultMeshGroupMask: bigint
	// m_modelSkeleton: ModelSkeletonData_t__BoneFlags_t
}

declare class EventServerSimulate_t extends EventSimulate_t {}

declare class C_EconItemView extends IEconItemInterface {
	m_iEntityQuality: number
	m_iEntityLevel: number
	m_iAccountID: number
	m_iInventoryPosition: number
	m_bInitialized: boolean
	m_bIsStoreItem: boolean
	m_bIsTradeItem: boolean
	m_bHasComputedAttachedParticles: boolean
	m_bHasAttachedParticles: boolean
	m_iEntityQuantity: number
	m_unClientFlags: number
	m_unOverrideOrigin: eEconItemOrigin
	readonly m_pszGrayedOutReason: string
	readonly m_AttributeList: CAttributeList
}

declare class VSoundStack_t {
}

declare class CVrSkeletalInputSettings {
	readonly m_wristBones: CWristBone[]
	readonly m_fingers: CFingerChain[]
	readonly m_name: string
	m_eHand: AnimVRHand_t
}

declare class CWristBone {
	readonly m_name: string
	readonly m_vForwardLS: Vector
	readonly m_vUpLS: Vector
	readonly m_vOffset: Vector
}

declare class CFingerChain {
	readonly m_targets: CFingerSource[]
	readonly m_bones: CFingerBone[]
	readonly m_name: string
	readonly m_tipParentBoneName: string
	readonly m_vTipOffset: Vector
	readonly m_metacarpalBoneName: string
	readonly m_vSplayHingeAxis: Vector
	m_flSplayMinAngle: number
	m_flSplayMaxAngle: number
	m_flFingerScaleRatio: number
}

declare class CFingerSource {
	m_nFingerIndex: AnimVRFinger_t
	m_flFingerWeight: number
}

declare class InfoForResourceTypeCPanoramaStyle {}

declare class C_OP_OrientTo2dDirection extends CParticleFunctionOperator {
	m_flRotOffset: number
	m_flSpinStrength: number
}

declare class C_OP_DistanceToCP extends CParticleFunctionOperator {
	m_flInputMin: number
	m_flInputMax: number
	m_flOutputMin: number
	m_flOutputMax: number
	m_nStartCP: number
	m_bLOS: boolean
	readonly m_CollisionGroupName: number[]
	m_flMaxTraceLength: number
	m_flLOSScale: number
	m_bScaleInitialRange: boolean
	m_bScaleCurrent: boolean
	m_bActiveRange: boolean
	m_bAdditive: boolean
}

declare class C_OP_PercentageBetweenCPLerpCPs extends CParticleFunctionOperator {
	m_flInputMin: number
	m_flInputMax: number
	m_nStartCP: number
	m_nEndCP: number
	m_nOutputStartCP: number
	m_nOutputStartField: number
	m_nOutputEndCP: number
	m_nOutputEndField: number
	m_bScaleInitialRange: boolean
	m_bScaleCurrent: boolean
	m_bActiveRange: boolean
	m_bRadialCheck: boolean
}

declare class AnimResourceLocalHierarchy_t {
	m_nStartFrame: number
	m_nPeakFrame: number
	m_nTailFrame: number
	m_nEndFrame: number
}

declare class SceneObjectData_t {
	readonly m_vMinBounds: Vector
	readonly m_vMaxBounds: Vector
	m_translucencyType: MeshTranslucencyType_t
}

declare class C_OP_MovementMaintainOffset extends CParticleFunctionOperator {
	readonly m_vecOffset: Vector
	m_nCP: number
	m_bRadiusScale: boolean
}

declare class C_OP_SnapshotRigidSkinToBones extends CParticleFunctionOperator {
	m_bTransformNormals: boolean
	m_nControlPointNumber: number
}

declare class C_OP_BoxConstraint extends CParticleFunctionConstraint {
	readonly m_vecMin: Vector
	readonly m_vecMax: Vector
	m_nCP: number
}

declare class AnimResourceSequenceParams_t {
	m_flFadeInTime: number
	m_flFadeOutTime: number
}

declare class AnimResourceDecoder_t {
	m_nVersion: number
	m_nType: number
}

declare class InfoForResourceTypeCPanoramaDynamicImages {}

declare class sPlayerSnapshot {
	readonly m_nItemAbilityID: number[]
	m_fGameTime: number
	unKills: number
	unDeaths: number
	unAssists: number
	unLevel: number
}

declare class TimedHeroStats_t {
	m_nTime: number
	m_nKills: number
	m_nDeaths: number
	m_nAssists: number
	m_nNetWorth: number
	m_nLastHits: number
	m_nDenies: number
}

declare class audioparams_t {
	readonly localSound: Vector[]
	soundscapeIndex: number
	localBits: number
	soundscapeEntityListIndex: number
}

declare class C_OP_SetControlPointFromObjectScale extends CParticleFunctionPreEmission {
	m_nCPInput: number
	m_nCPOutput: number
}

declare class AnimResourceFrameSegment_t {
	m_nUniqueFrameIndex: number
	m_nLocalElementMasks: number
	m_nLocalChannel: number
}

declare class WorldBuilderParams_t {
	m_nSizeBytesPerVoxel: number
	m_flMinDrawVolumeSize: number
	m_flMinDistToCamera: number
	m_flMinAtlasDist: number
	m_flMinSimplifiedDist: number
	m_flHorzFOV: number
	m_flHalfScreenWidth: number
	m_nAtlasTextureSizeX: number
	m_nAtlasTextureSizeY: number
	m_nUniqueTextureSizeX: number
	m_nUniqueTextureSizeY: number
	m_nCompressedAtlasSize: number
	m_flGutterSize: number
	m_flUVMapThreshold: number
	readonly m_vWorldUnitsPerTile: Vector
	m_nMaxTexScaleSlots: number
	m_bWrapInAtlas: boolean
	m_bBuildBakedLighting: boolean
	readonly m_padding: number[]
}

declare class VPhysXDiskMesh2_t extends VPhysXDiskShapeHeader_t {
	m_flSkinWidth: number
	m_flMaxVelocity: number
	readonly m_nReserved2: number[]
}

declare class C_OP_RemapNamedModelMeshGroupOnceTimed extends C_OP_RemapNamedModelElementOnceTimed {}

declare class C_OP_FadeIn extends CParticleFunctionOperator {
	m_flFadeInTimeMin: number
	m_flFadeInTimeMax: number
	m_flFadeInTimeExp: number
	m_bProportional: boolean
}

declare class AnimResourceBoneDifference_t {
	readonly m_posError: Vector
	m_bHasRotation: boolean
	m_bHasMovement: boolean
}

declare class COrientConstraint extends CBaseConstraint {}

declare class FourVectors2D {
}

declare class InfoForResourceTypeCChoreoSceneFileData {}

declare class FeRodConstraint_t {
	readonly nNode: number[]
	flMaxDist: number
	flMinDist: number
	flWeight0: number
	flRelaxationFactor: number
}

declare class InfoForResourceTypeAnimationGroupResourceData_t {}

declare class C_OP_RemapAverageScalarValuetoCP extends CParticleFunctionPreEmission {
	m_nOutControlPointNumber: number
	m_nOutVectorField: number
	m_flInputMin: number
	m_flInputMax: number
	m_flOutputMin: number
	m_flOutputMax: number
}

declare class C_INIT_AddVectorToVector extends CParticleFunctionInitializer {
	readonly m_vecScale: Vector
	readonly m_vOffsetMin: Vector
	readonly m_vOffsetMax: Vector
}

declare class CSosGroupBranchPattern {
	m_bMatchEventName: boolean
	m_bMatchEventSubString: boolean
	m_bMatchEntIndex: boolean
	m_bMatchOpvar: boolean
}

declare class C_OP_RemapSpeed extends CParticleFunctionOperator {
	m_flInputMin: number
	m_flInputMax: number
	m_flOutputMin: number
	m_flOutputMax: number
	m_bScaleInitialRange: boolean
	m_bScaleCurrent: boolean
	m_bIgnoreDelta: boolean
}

declare class CTaskStatusAnimTag extends CAnimTagBase {
	readonly m_identifierString: string
}

declare class CRR_Response {
	m_Type: number
	readonly m_szResponseName: number[]
	readonly m_szMatchingRule: number[]
	readonly m_Params: ResponseParams
	m_fMatchScore: number
	readonly m_szSpeakerContext: string
	readonly m_szWorldContext: string
	readonly m_Followup: ResponseFollowup
	readonly m_pchCriteriaValues: string[]
}

declare class AnimationSnapshotBase_t {
	m_flRealTime: number
	m_bBonesInWorldSpace: boolean
	readonly m_boneSetupMask: number[]
	readonly m_flexControllers: number[]
	m_SnapshotType: AnimationSnapshotType_t
	m_bHasDecodeDump: boolean
	readonly m_DecodeDump: AnimationDecodeDebugDumpElement_t
}

declare class MaterialParamTexture_t extends MaterialParam_t {
}

declare class CTiltTwistConstraint extends CBaseConstraint {
	m_nTargetAxis: number
	m_nSlaveAxis: number
}

declare class InfoForResourceTypeCPanoramaScript {}

declare class CGlobalLightBase {
	m_bSpotLight: boolean
	readonly m_SpotLightOrigin: Vector
	readonly m_SpotLightAngles: QAngle
	readonly m_ShadowDirection: Vector
	readonly m_AmbientDirection: Vector
	readonly m_SpecularDirection: Vector
	readonly m_InspectorSpecularDirection: Vector
	m_flSpecularPower: number
	m_flSpecularIndependence: number
	readonly m_SpecularColor: Color
	m_bStartDisabled: boolean
	m_bEnabled: boolean
	readonly m_LightColor: Color
	readonly m_AmbientColor1: Color
	readonly m_AmbientColor2: Color
	readonly m_AmbientColor3: Color
	m_flSunDistance: number
	m_flFOV: number
	m_flNearZ: number
	m_flFarZ: number
	m_bEnableShadows: boolean
	m_bOldEnableShadows: boolean
	m_bBackgroundClearNotRequired: boolean
	m_flCloudScale: number
	m_flCloud1Speed: number
	m_flCloud1Direction: number
	m_flCloud2Speed: number
	m_flCloud2Direction: number
	m_flAmbientScale1: number
	m_flAmbientScale2: number
	m_flGroundScale: number
	m_flLightScale: number
	m_flFoWDarkness: number
	m_bEnableSeparateSkyboxFog: boolean
	readonly m_vFowColor: Vector
	readonly m_ViewOrigin: Vector
	readonly m_ViewAngles: QAngle
	m_flViewFoV: number
	readonly m_WorldPoints: Vector[]
	readonly m_vFogOffsetLayer0: Vector2D
	readonly m_vFogOffsetLayer1: Vector2D
	readonly m_hEnvWind: C_BaseEntity
	readonly m_hEnvSky: C_BaseEntity
	m_fSmoothedAmount: number
	m_fSlowSmoothedAmount: number
}

declare class AIHullFlags_t {
	m_bHull_Human: boolean
	m_bHull_SmallCentered: boolean
	m_bHull_WideHuman: boolean
	m_bHull_Tiny: boolean
	m_bHull_Medium: boolean
	m_bHull_TinyCentered: boolean
	m_bHull_Large: boolean
	m_bHull_LargeCentered: boolean
	m_bHull_MediumTall: boolean
}

declare class C_INIT_RemapSpeedToScalar extends CParticleFunctionInitializer {
	m_nControlPointNumber: number
	m_flStartTime: number
	m_flEndTime: number
	m_flInputMin: number
	m_flInputMax: number
	m_flOutputMin: number
	m_flOutputMax: number
	m_bScaleInitialRange: boolean
	m_bPerParticle: boolean
}

declare class ParticleChildrenInfo_t {
	m_flDelay: number
	m_bEndCap: boolean
	m_bDisableChild: boolean
}

declare class C_OP_HSVShiftToCP extends CParticleFunctionPreEmission {
	m_nColorCP: number
	m_nColorGemEnableCP: number
	m_nOutputCP: number
	readonly m_DefaultHSVColor: Color
}

declare class C_OP_SetCPOrientationToDirection extends CParticleFunctionOperator {
	m_nInputControlPoint: number
	m_nOutputControlPoint: number
}

declare class CSceneObjectExtraData_t {
	readonly m_flExtraShaderData: number[]
	m_nCurrentMeshGroupMask: bigint
	readonly m_vLightingOrigin: Vector
	m_flDepthSortBias: number
	readonly m_nVisibleToPlayer: number[]
	m_nAlphaFade: number
	m_nViewProducerIndex: number
	m_nCurrentLOD: number
	m_nCubeMapPrecomputedHandshake: number
	m_nLightProbeVolumePrecomputedHandshake: number
}

declare class CActivityValueList {
}

declare class CClientAlphaProperty extends IClientAlphaProperty {
	m_nRenderFX: number
	m_nRenderMode: number
	readonly m_bAlphaOverride: boolean
	readonly m_bShadowAlphaOverride: boolean
	readonly m_nDistanceFadeMode: boolean
	readonly m_nReserved: number
	m_nAlpha: number
	m_nDesyncOffset: number
	m_nReserved2: number
	m_nDistFadeStart: number
	m_nDistFadeEnd: number
	m_flFadeScale: number
	m_flRenderFxStartTime: number
	m_flRenderFxDuration: number
}

declare class C_OP_SetControlPointsToModelParticles extends CParticleFunctionOperator {
	readonly m_HitboxSetName: number[]
	readonly m_AttachmentName: number[]
	m_nFirstControlPoint: number
	m_nNumControlPoints: number
	m_nFirstSourcePoint: number
	m_bSkin: boolean
	m_bAttachment: boolean
}

declare class C_OP_GlobalLight extends CParticleFunctionOperator {
	m_flScale: number
	m_bClampLowerRange: boolean
	m_bClampUpperRange: boolean
}

declare class CSceneObject {
	readonly m_pRefData: CSceneObjectReference_t
	m_flStartFadeDistanceSquared: number
	m_flFarCullDistanceSquared: number
	m_nObjectTypeFlags: number
	m_nGameRenderCounter: number
	m_nMeshGroupMaskSmall: number
	readonly m_nDebugLevel: number
	readonly m_nSizeCullBloat: number
	readonly m_nBoundsType: boolean
	m_nID: number
	m_nNumTransformBlocks: number
	m_nObjectClass: number
	readonly m_pPVSData: CPVSData
	m_nOriginalRenderableFlags: bigint
	m_nRenderableFlags: bigint
}

declare class CSceneObjectReference_t {
	m_nRenderableFlags: bigint
	readonly m_pObject: CSceneObject
}

declare class CPVSData {
	readonly m_pNext: CPVSData
	m_nPVSMasks: number
	m_nPVSFlags: number
}

declare class C_DOTAGameManager {
	readonly __m_pChainEntity: CNetworkVarChainer
	m_bCustomGame: boolean
	m_bEventGame: boolean
	readonly m_szAddOnGame: number[]
	readonly m_szAddOnMap: number[]
	m_nNumLoadingPlayers: number
	m_iDefeatedParticle: number
	readonly m_bLoadedPortraits: boolean[]
	readonly m_StableHeroAvailable: boolean[]
	readonly m_CurrentHeroAvailable: boolean[]
	readonly m_CulledHeroes: boolean[]
	readonly m_BonusHeroes: boolean[]
}

declare class ResponseContext_t {
	readonly m_iszName: string
	readonly m_iszValue: string
	m_fExpirationTime: number
}

declare class C_OP_SetPerChildControlPointFromAttribute extends CParticleFunctionOperator {
	m_nChildGroupID: number
	m_nFirstControlPoint: number
	m_nNumControlPoints: number
	m_nParticleIncrement: number
	m_nFirstSourcePoint: number
	m_bNumBasedOnParticleCount: boolean
	m_nCPField: number
}

declare class C_OP_RemapScalar extends CParticleFunctionOperator {
	m_flInputMin: number
	m_flInputMax: number
	m_flOutputMin: number
	m_flOutputMax: number
}

declare class C_INIT_RemapParticleCountToNamedModelMeshGroupScalar extends C_INIT_RemapParticleCountToNamedModelElementScalar {}

declare class CHitReactAnimNode extends CAnimNodeBase {
	readonly m_childID: AnimNodeID
	readonly m_triggerParam: AnimParamID
	readonly m_hitBoneParam: AnimParamID
	readonly m_hitOffsetParam: AnimParamID
	readonly m_hitDirectionParam: AnimParamID
	readonly m_hitStrengthParam: AnimParamID
	readonly m_weightListName: string
	readonly m_hipBoneName: string
	m_flHipBoneTranslationScale: number
	m_nEffectedBoneCount: number
	m_flMaxImpactForce: number
	m_flMinImpactForce: number
	m_flWhipImpactScale: number
	m_flCounterRotationScale: number
	m_flDistanceFadeScale: number
	m_flPropagationScale: number
	m_flWhipDelay: number
	m_flSpringStrength: number
	m_flWhipSpringStrength: number
	m_flHipDipSpringStrength: number
	m_flHipDipImpactScale: number
	m_flHipDipDelay: number
	m_bResetBase: boolean
}

declare class TonemapParameters_t {
	m_flAutoExposureMin: number
	m_flAutoExposureMax: number
	m_flExposureCompensationScalar: number
	m_flTonemapPercentTarget: number
	m_flTonemapPercentBrightPixels: number
	m_flTonemapMinAvgLum: number
	m_flBloomScale: number
	m_flBloomStartValue: number
	m_flRate: number
	m_flAccelerateExposureDown: number
}

declare class C_OP_SetParentControlPointsToChildCP extends CParticleFunctionPreEmission {
	m_nChildGroupID: number
	m_nChildControlPoint: number
	m_nNumControlPoints: number
	m_nFirstSourcePoint: number
	m_bSetOrientation: boolean
}

declare class AnimationRetargetData_t {
	m_bEnableRetarget: number
	m_nRetargetStyle: number
}

declare class EventClientPollNetworking_t {
	m_nTickCount: number
}

declare class C_OP_LagCompensation extends CParticleFunctionOperator {
	m_nDesiredVelocityCP: number
	m_nLatencyCP: number
	m_nLatencyCPField: number
	m_nDesiredVelocityCPField: number
}

declare class C_OP_ReadFromNeighboringParticle extends CParticleFunctionOperator {
	m_nIncrement: number
	readonly m_DistanceCheck: CPerParticleFloatInput
	readonly m_flInterpolation: CPerParticleFloatInput
}

declare class CMoveHeadingCondition extends CAnimStateConditionBase {
	m_comparisonValue: number
}

declare class C_OP_SetToCP extends CParticleFunctionOperator {
	m_nControlPointNumber: number
	readonly m_vecOffset: Vector
	m_bOffsetLocal: boolean
}

declare class C_OP_SetControlPointOrientation extends CParticleFunctionPreEmission {
	m_bUseWorldLocation: boolean
	m_bRandomize: boolean
	m_bSetOnce: boolean
	m_nCP: number
	m_nHeadLocation: number
	readonly m_vecRotation: QAngle
	readonly m_vecRotationB: QAngle
}

declare class C_OP_NormalizeVector extends CParticleFunctionOperator {
	m_flScale: number
}

declare class CDampedPathAnimMotor extends CBasePathAnimMotor {
	m_flAnticipationTime: number
	readonly m_anticipationPosParam: AnimParamID
	readonly m_anticipationHeadingParam: AnimParamID
	m_flSpringConstant: number
	m_flMinSpringTension: number
	m_flMaxSpringTension: number
}

declare class AnimResourceDataChannel_t {
	m_nFlags: number
	m_nType: number
}

declare class C_INIT_InitialRepulsionVelocity extends CParticleFunctionInitializer {
	readonly m_CollisionGroupName: number[]
	readonly m_vecOutputMin: Vector
	readonly m_vecOutputMax: Vector
	m_nControlPointNumber: number
	m_bPerParticle: boolean
	m_bTranslate: boolean
	m_bProportional: boolean
	m_flTraceLength: number
	m_bPerParticleTR: boolean
	m_bInherit: boolean
	m_nChildCP: number
	m_nChildGroupID: number
}

declare class SeqResourceMultiFetch_t_Flag_t {
	m_bRealtime: boolean
	m_bCylepose: boolean
	m_b0D: boolean
	m_b1D: boolean
	m_b2D: boolean
	m_b2D_TRI: boolean
}

declare class EventClientPauseSimulate_t extends EventSimulate_t {}

declare class CFireOverlay extends CGlowOverlay {
	readonly m_pOwner: C_FireSmoke
	readonly m_vBaseColors: Vector[]
	m_flScale: number
	m_nGUID: number
}

declare class C_FireSmoke extends C_BaseFire {
	m_nFlameModelIndex: number
	m_nFlameFromAboveModelIndex: number
	m_flScaleRegister: number
	m_flScaleStart: number
	m_flScaleEnd: number
	m_flScaleTimeStart: number
	m_flScaleTimeEnd: number
	m_flChildFlameSpread: number
	m_flClipPerc: number
	m_bClipTested: boolean
	m_bFadingOut: boolean
	readonly m_tParticleSpawn: TimedEvent
	readonly m_pFireOverlay: CFireOverlay
}

declare class C_BaseFire extends C_BaseEntity {
	m_flScale: number
	m_flStartScale: number
	m_flScaleTime: number
	m_nFlags: number
}

declare class C_BaseEntity extends C_GameEntity {
	IsInRange(ent: C_BaseEntity, range: number): boolean
	IsEnemy(ent: C_BaseEntity): boolean
	DistTo(ent: C_BaseEntity): number
	InFront(dist: number): Vector
	FindRotationAngle(vec: Vector): number
	
	readonly m_bIsValid: boolean
	readonly m_bIsVisible: boolean
	readonly m_bIsAlive: boolean
	readonly m_iID: number
	readonly m_vecForward: Vector
	
	readonly m_CBodyComponent: CBodyComponent
	readonly m_NetworkTransmitComponent: CNetworkTransmitComponent
	readonly m_pDummyPhysicsComponent: CPhysicsComponent
	touchStamp: number
	m_nLastThinkTick: number
	readonly m_pGameSceneNode: CGameSceneNode
	readonly m_pCollision: CCollisionProperty
	m_iMaxHealth: number
	m_iHealth: number
	m_lifeState: number
	m_takedamage: DamageOptions_t
	m_ubInterpolationFrame: number
	readonly m_hSceneObjectController: C_BaseEntity
	m_nNoInterpolationTick: number
	m_flProxyRandomValue: number
	m_iEFlags: number
	m_nWaterType: number
	m_bInterpolateEvenWithNoModel: boolean
	m_bPredictionEligible: boolean
	readonly m_vecNetworkOrigin: Vector
	readonly m_angNetworkAngles: QAngle
	m_nSimulationTick: number
	m_iCurrentThinkContext: number
	readonly m_aThinkFunctions: thinkfunc_t[]
	m_flAnimTime: number
	m_flSimulationTime: number
	m_nSceneObjectOverrideFlags: number
	m_bHasSuccessfullyInterpolated: boolean
	m_bHasAddedVarsToInterpolation: boolean
	m_bRenderEvenWhenNotSuccessfullyInterpolated: boolean
	readonly m_nInterpolationLatchDirtyFlags: number[]
	readonly m_ListEntry: number[]
	m_flCreateTime: number
	m_flSpeed: number
	m_EntClientFlags: number
	m_bClientSideRagdoll: boolean
	m_iTeamNum: number
	m_spawnflags: number
	m_nNextThinkTick: number
	m_fFlags: number
	readonly m_vecAbsVelocity: Vector
	readonly m_vecVelocity: CNetworkVelocityVector
	readonly m_vecBaseVelocity: Vector
	readonly m_hEffectEntity: C_BaseEntity
	readonly m_hOwnerEntity: C_BaseEntity
	m_MoveCollide: MoveCollide_t
	m_MoveType: MoveType_t
	m_Gender: gender_t
	m_nWaterLevel: number
	m_fEffects: number
	readonly m_hGroundEntity: C_BaseEntity
	m_flFriction: number
	m_flElasticity: number
	m_bSimulatedEveryTick: boolean
	m_bAnimatedEveryTick: boolean
	m_nMinCPULevel: number
	m_nMaxCPULevel: number
	m_nMinGPULevel: number
	m_nMaxGPULevel: number
	m_flNavIgnoreUntilTime: number
	m_iTextureFrameIndex: number
	readonly m_ShadowBits: number[]
	m_flFirstReceivedTime: number
	m_flLastMessageTime: number
	m_hThink: number
	m_fBBoxVisFlags: number
	m_bIsValidIKAttachment: boolean
	m_bPredictable: boolean
	m_bRenderWithViewModels: boolean
	m_nSplitUserPlayerPredictionSlot: number
	readonly m_hOldMoveParent: C_BaseEntity
	readonly m_Particles: CParticleProperty
	readonly m_vecPredictedScriptFloats: number[]
	readonly m_vecPredictedScriptFloatIDs: number[]
	m_nNextScriptVarRecordID: number
	readonly m_vecAngVelocity: QAngle
	m_flGroundChangeTime: number
	m_flGravity: number
	m_DataChangeEventRef: number
	m_nCreationTick: number
	m_bIsDOTANPC: boolean
	m_bIsNPC: boolean
	m_bAnimTimeChanged: boolean
	m_bSimulationTimeChanged: boolean
	m_bIsBlurred: boolean
}

declare class C_GameEntity extends CEntityInstance {}

declare class CBodyComponent extends CEntityComponent {
	readonly m_pSceneNode: CGameSceneNode
	readonly __m_pChainEntity: CNetworkVarChainer
}

declare class CCollisionProperty {
	readonly m_collisionAttribute: VPhysicsCollisionAttribute_t
	readonly m_vecMins: Vector
	readonly m_vecMaxs: Vector
	m_usSolidFlags: number
	m_nSolidType: SolidType_t
	m_triggerBloat: number
	m_nSurroundType: SurroundingBoundsType_t
	m_CollisionGroup: number
	m_bHitboxEnabled: boolean
	m_flRadius: number
	readonly m_vecSpecifiedSurroundingMins: Vector
	readonly m_vecSpecifiedSurroundingMaxs: Vector
	readonly m_vecSurroundingMaxs: Vector
	readonly m_vecSurroundingMins: Vector
	readonly m_vCapsuleCenter1: Vector
	readonly m_vCapsuleCenter2: Vector
	m_flCapsuleRadius: number
}

declare class VPhysicsCollisionAttribute_t {
	m_nInteractsAs: bigint
	m_nInteractsWith: bigint
	m_nInteractsExclude: bigint
	m_nEntityId: number
	m_nHierarchyId: number
	m_nCollisionGroup: number
	m_nCollisionFunctionMask: number
}

declare class CParticleProperty {}

declare class CThrustController {
	readonly m_thrustVector: Vector
	readonly m_torqueVector: Vector
	m_thrust: number
}

declare class C_OP_RemapControlPointDirectionToVector extends CParticleFunctionOperator {
	m_flScale: number
	m_nControlPointNumber: number
}

declare class C_INIT_RemapInitialDirectionToCPToVector extends CParticleFunctionInitializer {
	m_nCP: number
	m_flScale: number
	m_flOffsetRot: number
	readonly m_vecOffsetAxis: Vector
	m_bNormalize: boolean
}

declare class FeTaperedCapsuleRigid_t {
	nNode: number
	nCollisionMask: number
	readonly vCenter: Vector[]
	readonly flRadius: number[]
	flStickiness: number
}

declare class CDOTA_Modifier_Lua_Vertical_Motion extends CDOTA_Modifier_Lua/*, CVerticalMotionController*/ {}

declare class CTurnHelperAnimNode extends CAnimNodeBase {
	readonly m_childID: AnimNodeID
	m_facingTarget: AnimValueSource
	m_turnStartTime: number
	m_turnDuration: number
	m_bMatchChildDuration: boolean
	m_bClampDurationToChild: boolean
	m_bUseManualTurnOffset: boolean
	m_manualTurnOffset: number
}

declare class CActivityValues {
	readonly m_activityName: string
}

declare class PermRenderMeshData_t {
}

declare class ConstraintSlave_t {
	m_nBoneHash: number
	m_flWeight: number
	readonly m_vBasePosition: Vector
}

declare class C_OP_SetCPtoVector extends CParticleFunctionOperator {
	m_nCPInput: number
}

declare class C_OP_MovementRotateParticleAroundAxis extends CParticleFunctionOperator {
	readonly m_vecRotAxis: Vector
	m_flRotRate: number
	m_nCP: number
	m_bLocalSpace: boolean
}

declare class C_INIT_CreateOnModel extends CParticleFunctionInitializer {
	m_nControlPointNumber: number
	m_nForceInModel: number
	m_nDesiredHitbox: number
	m_nHitboxValueFromControlPointIndex: number
	m_flHitBoxScale: number
	m_flBoneVelocity: number
	m_flMaxBoneVelocity: number
	readonly m_vecDirectionBias: Vector
	readonly m_HitboxSetName: number[]
	m_bLocalCoords: boolean
	m_bUseBones: boolean
}

declare class CSolveIKChainAnimNode extends CAnimNodeBase {
	readonly m_childID: AnimNodeID
	readonly m_IkChains: string[]
}

declare class AnimationRetargetChainData_t {
	m_nGroupType: number
	m_nChainType: number
}

declare class CHitBox {
	readonly m_name: string
	readonly m_sSurfaceProperty: string
	readonly m_sBoneName: string
	m_nBoneNameHash: number
	m_nGroupId: number
	readonly m_cRenderColor: Color
	m_nHitBoxIndex: number
	readonly m_vMinBounds: Vector
	readonly m_vMaxBounds: Vector
	m_bTranslationOnly: boolean
	m_bVisible: boolean
	m_bSelected: boolean
}

declare class CRecipientFilter extends IRecipientFilter {
	m_nBufType: NetChannelBufType_t
	m_bInitMessage: boolean
	readonly m_Recipients: C_BaseEntity[]
	m_bUsingPredictionRules: boolean
	m_bIgnorePredictionCull: boolean
}

declare class InfoForResourceTypeAnimationResourceData_t {}

declare class ClusteredDistributionParams_t {
	m_flClusterCoverageFraction: number
	m_flClusterArea: number
}

declare class C_OP_RampScalarSplineSimple extends CParticleFunctionOperator {
	m_Rate: number
	m_flStartTime: number
	m_flEndTime: number
	m_bEaseOut: boolean
}

declare class C_EconItemAttribute {
	m_iAttributeDefinitionIndex: number
	m_flValue: number
}

declare class C_CHintMessageQueue {
	m_tmMessageEnd: number
	readonly m_messages: CHintMessage[]
	readonly m_pPlayer: C_BasePlayer
}

declare class CHintMessage {
	readonly m_hintString: string
	readonly m_args: string[]
	m_duration: number
}

declare class C_BasePlayer extends C_BaseCombatCharacter {
	readonly m_vecFlashlightOrigin: Vector
	readonly m_vecFlashlightForward: Vector
	readonly m_vecFlashlightUp: Vector
	readonly m_vecFlashlightRight: Vector
	m_currentSCLPacked: number
	m_bBehindLocalPlayer: boolean
	m_nBehindLocalPlayerFrame: number
	readonly m_CurrentFog: fogparams_t
	readonly m_hOldFogController: C_BaseEntity
	readonly m_bOverrideFogColor: boolean[]
	readonly m_OverrideFogColor: Color[]
	readonly m_bOverrideFogStartEnd: boolean[]
	readonly m_fOverrideFogStart: number[]
	readonly m_fOverrideFogEnd: number[]
	m_StuckLast: number
	readonly m_Local: C_PlayerLocalData
	readonly m_hTonemapController: C_BaseEntity
	readonly m_pl: C_PlayerState
	m_iFOV: number
	m_iFOVStart: number
	m_afButtonLast: bigint
	m_afButtonPressed: bigint
	m_afButtonReleased: bigint
	m_nButtons: bigint
	m_nImpulse: number
	m_flPhysics: number
	m_flFOVTime: number
	m_flWaterJumpTime: number
	m_flSwimSoundTime: number
	m_flStepSoundTime: number
	m_surfaceFriction: number
	readonly m_vecLadderNormal: Vector
	readonly m_szAnimExtension: number[]
	m_nOldTickBase: number
	m_iBonusProgress: number
	m_iBonusChallenge: number
	m_flMaxspeed: number
	readonly m_hZoomOwner: C_BaseEntity
	readonly m_hVehicle: C_BaseEntity
	readonly m_hLastWeapon: C_BaseEntity
	readonly m_hViewModel: C_BaseEntity[]
	readonly m_hPropHMDAvatar: C_BaseEntity
	readonly m_hPointHMDAnchor: C_BaseEntity
	m_VRControllerType: number
	m_fOnTarget: boolean
	m_iDefaultFOV: number
	m_afButtonDisabled: bigint
	m_afButtonForced: bigint
	readonly m_hViewEntity: C_BaseEntity
	readonly m_hConstraintEntity: C_BaseEntity
	readonly m_vecConstraintCenter: Vector
	m_flConstraintRadius: number
	m_flConstraintWidth: number
	m_flConstraintSpeedFactor: number
	m_bConstraintPastRadius: boolean
	m_iObserverMode: number
	readonly m_hObserverTarget: C_BaseEntity
	m_flObserverChaseDistance: number
	readonly m_vecFreezeFrameStart: Vector
	m_flFreezeFrameStartTime: number
	m_flFreezeFrameDistance: number
	m_bStartedFreezeFraming: boolean
	m_bFinishedFreezeFraming: boolean
	m_flDeathTime: number
	readonly m_hOldVehicle: C_BaseEntity
	readonly m_hUseEntity: C_BaseEntity
	readonly m_hHeldEntity: C_BaseEntity
	readonly m_vecWaterJumpVel: Vector
	readonly m_vecOldViewAngles: QAngle
	m_bWasFrozen: boolean
	m_nTickBase: number
	m_nFinalPredictedTick: number
	readonly m_bFlashlightEnabled: boolean[]
	m_flOldPlayerZ: number
	m_flOldPlayerViewOffsetZ: number
	readonly m_vecVehicleViewOrigin: Vector
	readonly m_vecVehicleViewAngles: QAngle
	m_flVehicleViewFOV: number
	m_nVehicleViewSavedFrame: number
	readonly m_CommandContext: C_CommandContext
	m_flWaterSurfaceZ: number
	m_bResampleWaterSurface: boolean
	readonly m_tWaterParticleTimer: TimedEvent
	m_bPlayerUnderwater: boolean
	m_ArmorValue: number
	m_flNextAvoidanceTime: number
	m_flAvoidanceRight: number
	m_flAvoidanceForward: number
	m_flAvoidanceDotForward: number
	m_flAvoidanceDotRight: number
	m_flLaggedMovementValue: number
	readonly m_vecPredictionError: Vector
	m_flPredictionErrorTime: number
	readonly m_vecPreviouslyPredictedOrigin: Vector
	readonly m_szLastPlaceName: number[]
	m_chTextureType: number
	m_bSentFreezeFrame: boolean
	m_flFreezeZOffset: number
	readonly m_hSplitScreenPlayers: C_BaseEntity[]
	m_nSplitScreenSlot: number
	readonly m_hSplitOwner: C_BaseEntity
	m_bIsLocalPlayer: boolean
	readonly m_movementCollisionNormal: Vector
	readonly m_groundNormal: Vector
	readonly m_vOldOrigin: Vector
	m_flOldSimulationTime: number
	readonly m_stuckCharacter: C_BaseEntity
	readonly m_hPostProcessCtrl: C_BaseEntity
	readonly m_hColorCorrectionCtrl: C_BaseEntity
	readonly m_PlayerFog: C_fogplayerparams_t
	readonly m_vecElevatorFixup: Vector
	m_nUnHoldableButtons: bigint
}

declare class C_BaseCombatCharacter extends C_BaseFlex {
	m_flNextAttack: number
	readonly m_iAmmo: number[]
	readonly m_hMyWeapons: C_BaseEntity[]
	readonly m_hActiveWeapon: C_BaseEntity
	readonly m_hMyWearables: C_BaseEntity[]
	m_bloodColor: number
	m_leftFootAttachment: number
	m_rightFootAttachment: number
	m_flWaterWorldZ: number
	m_flWaterNextTraceTime: number
	m_flFieldOfView: number
	readonly m_footstepTimer: CountdownTimer
}

declare class C_BaseFlex extends C_BaseAnimatingOverlay {
	readonly m_viewtarget: Vector
	readonly m_flexWeight: number[]
	m_blinktoggle: boolean
	m_nLastFlexUpdateFrameCount: number
	readonly m_CachedViewTarget: Vector
	m_iBlink: number
	m_iMouthAttachment: number
	m_iEyeAttachment: number
	m_blinktime: number
	m_bResetFlexWeightsOnModelChange: boolean
	m_prevblinktoggle: boolean
	m_iEyeLidUpDownPP: number
	m_iEyeLidLeftRightPP: number
	m_flMinEyeUpDown: number
	m_flMaxEyeUpDown: number
	m_flMinEyeLeftRight: number
	m_flMaxEyeLeftRight: number
}

declare class C_BaseAnimatingOverlay extends C_BaseAnimating {}

declare class C_BaseAnimating extends C_BaseModelEntity {
	readonly m_CHitboxComponent: CHitboxComponent
	readonly m_vecForce: Vector
	m_nForceBone: number
	m_bShouldAnimateDuringGameplayPause: boolean
	m_bDontSimulateClientAnimGraph: boolean
	m_nMuzzleFlashParity: number
	readonly m_pClientsideRagdoll: C_BaseAnimating
	m_bInitModelEffects: boolean
	m_builtRagdoll: boolean
	m_bIsStaticProp: boolean
	m_nOldMuzzleFlashParity: number
	m_iEjectBrassAttachment: number
	m_bSuppressAnimEventSounds: boolean
}

declare class C_BaseModelEntity extends C_BaseEntity {
	OnColorChanged(): void

	readonly m_CRenderComponent: CRenderComponent
	m_iViewerID: number
	m_iTeamVisibilityBitmask: number
	m_nLastAddDecal: number
	m_nRenderMode: RenderMode_t
	m_bVisibilityDirtyFlag: boolean
	m_nRenderFX: RenderFx_t
	m_bAllowFadeInView: boolean
	readonly m_clrRender: Color
	readonly m_Collision: CCollisionProperty
	readonly m_Glow: CGlowProperty
	m_flGlowBackfaceMult: number
	m_fadeMinDist: number
	m_fadeMaxDist: number
	m_flFadeScale: number
	m_flShadowStrength: number
	m_bHadOverrideEnabledBeforeShadowFade: boolean
	m_nAddDecal: number
	readonly m_vDecalPosition: Vector
	readonly m_vDecalForwardAxis: Vector
	m_flDecalRadius: number
	readonly m_vecViewOffset: CNetworkViewOffsetVector
	readonly m_pClientAlphaProperty: CClientAlphaProperty
	readonly m_ClientOverrideTint: Color
	m_bUseClientOverrideTint: boolean
}

declare class CRenderComponent extends CEntityComponent {
	readonly __m_pChainEntity: CNetworkVarChainer
	m_bIsRenderingWithViewModels: boolean
	m_nSplitscreenFlags: number
	m_bEnableRendering: boolean
	m_bInterpolationReadyToDraw: boolean
}

declare class CGlowProperty {
	readonly m_fGlowColor: Vector
	m_iGlowTeam: number
	m_iGlowType: number
	m_nGlowRange: number
	m_nGlowRangeMin: number
	readonly m_glowColorOverride: Color
	m_bFlashing: boolean
	m_bGlowing: boolean
}

declare class CNetworkViewOffsetVector {
}

declare class CHitboxComponent extends CEntityComponent {}

declare class C_PlayerLocalData {
	readonly m_NetworkVar_PathIndex: ChangeAccessorFieldPathIndex_t
	readonly m_chAreaBits: number[]
	readonly m_chAreaPortalBits: number[]
	m_nStepside: number
	m_nOldButtons: number
	m_flFOVRate: number
	m_iHideHUD: number
	m_nDuckTimeMsecs: number
	m_nDuckJumpTimeMsecs: number
	m_nJumpTimeMsecs: number
	m_flFallVelocity: number
	m_flStepSize: number
	m_bDucked: boolean
	m_bDucking: boolean
	m_bInDuckJump: boolean
	m_bDrawViewmodel: boolean
	m_bWearingSuit: boolean
	m_bPoisoned: boolean
	m_bAllowAutoMovement: boolean
	m_bSlowMovement: boolean
	m_bAutoAimTarget: boolean
	readonly m_skybox3d: sky3dparams_t
	readonly m_audio: audioparams_t
	m_bInLanding: boolean
	m_flLandingTime: number
	readonly m_vecClientBaseVelocity: Vector
}

declare class C_CommandContext {
	needsprocessing: boolean
	command_number: number
}

declare class CTeamplayRules extends CMultiplayRules {
	m_DisableDeathMessages: boolean
	m_DisableDeathPenalty: boolean
	m_teamLimit: boolean
	readonly m_szTeamList: number[]
	m_bSwitchTeams: boolean
	m_bScrambleTeams: boolean
}

declare class AnimResourceFrameBlockAnim_t {
	m_nStartFrame: number
	m_nEndFrame: number
}

declare class RenderSkeletonData_t {
	m_nBoneCount: number
	m_nBoneWeightCount: number
	m_nFlags: number
}

declare class FeQuad_t {
	readonly nNode: number[]
	flSlack: number
}

declare class dota_minimap_boundary extends CEmptyEntityInstance {}

declare class C_INIT_VelocityFromNormal extends CParticleFunctionInitializer {
	m_fSpeedMin: number
	m_fSpeedMax: number
	m_bIgnoreDt: boolean
}

declare class CSosGroupMatchPattern extends CSosGroupBranchPattern {
	readonly m_matchSoundEventName: string
	readonly m_matchSoundEventSubString: string
	m_flEntIndex: number
	m_flOpvar: number
}

declare class InfoForResourceTypeCDotaItemDefinitionResource {}

declare class C_OP_SetControlPointsToParticle extends CParticleFunctionOperator {
	m_nChildGroupID: number
	m_nFirstControlPoint: number
	m_nNumControlPoints: number
	m_nFirstSourcePoint: number
	m_bSetOrientation: boolean
}

declare class CSound {
	readonly m_hOwner: C_BaseEntity
	readonly m_hTarget: C_BaseEntity
	m_iVolume: number
	m_flOcclusionScale: number
	m_iType: number
	m_iNextAudible: number
	m_flExpireTime: number
	m_iNext: number
	m_bNoExpirationTime: boolean
	m_ownerChannelIndex: number
	readonly m_vecOrigin: Vector
	m_bHasOwner: boolean
}

declare class CSoundParameters {
	channel: number
	volume: number
	pitch: number
	pitchlow: number
	pitchhigh: number
	soundlevel: soundlevel_t
	play_to_owner_only: boolean
	m_nSpecialWaveFlags: number
	count: number
	readonly soundname: string
	delay_msec: number
	m_nRandomSeed: number
}

declare class C_OP_NormalLock extends CParticleFunctionOperator {
	m_nControlPointNumber: number
}

declare class CDOTA_Modifier_Lua_Horizontal_Motion extends CDOTA_Modifier_Lua/*, CHorizontalMotionController*/ {}

declare class CTimeline extends IntervalTimer {
	readonly m_flValues: number[]
	readonly m_nValueCounts: number[]
	m_nBucketCount: number
	m_flInterval: number
	m_flFinalValue: number
	m_nCompressionType: TimelineCompression_t
	m_bStopped: boolean
}

declare class C_OP_RenderTonemapController extends CParticleFunctionRenderer {
	m_flTonemapLevel: number
	m_flTonemapWeight: number
}

declare class C_OP_TurbulenceForce extends CParticleFunctionForce {
	m_flNoiseCoordScale0: number
	m_flNoiseCoordScale1: number
	m_flNoiseCoordScale2: number
	m_flNoiseCoordScale3: number
	readonly m_vecNoiseAmount0: Vector
	readonly m_vecNoiseAmount1: Vector
	readonly m_vecNoiseAmount2: Vector
	readonly m_vecNoiseAmount3: Vector
}

declare class InfoForResourceTypeVSound_t {}

declare class CLightInfoBase {
	readonly m_origin2D: Vector2D
	readonly m_Color: Color[]
	readonly m_LightScale: number[]
	readonly m_AmbientColor: Color[]
	readonly m_AmbientScale: number[]
	readonly m_ShadowColor: Color[]
	readonly m_ShadowSecondaryColor: Color[]
	readonly m_ShadowScale: number[]
	readonly m_ShadowGroundScale: number[]
	readonly m_SpecularColor: Color[]
	readonly m_flSpecularPower: number[]
	readonly m_flSpecularIndependence: number[]
	readonly m_SpecularDirection: Vector[]
	readonly m_InspectorSpecularDirection: Vector[]
	readonly m_LightDirection: Vector[]
	readonly m_AmbientDirection: Vector[]
	readonly m_FogColor: Color[]
	readonly m_FogStart: number[]
	readonly m_FogEnd: number[]
	readonly m_HeightFogValue: number[]
	readonly m_HeightFogColor: Color[]
	readonly m_FoWDarkness: number[]
	readonly m_FoWColorR: number[]
	readonly m_FoWColorG: number[]
	readonly m_FoWColorB: number[]
	readonly m_InspectorViewFogColor: Color[]
	readonly m_windAngle: QAngle
	readonly m_flWindAmount: number[]
	m_flMinWind: number
	m_flMaxWind: number
	m_flMinGust: number
	m_flMaxGust: number
	m_flMinGustDelay: number
	m_flMaxGustDelay: number
	m_flGustDuration: number
	m_flGustDirChange: number
	readonly m_skyboxAngle: QAngle[]
	readonly m_vSkyboxTintColor: Color[]
	m_nSkyboxFogType: number
	m_flSkyboxAngularFogMaxEnd: number
	m_flSkyboxAngularFogMaxStart: number
	m_flSkyboxAngularFogMinStart: number
	m_flSkyboxAngularFogMinEnd: number
	readonly m_vHeightFogColor: Color[]
	m_flFogMaxZ: number
	readonly m_flFogDensity: number[]
	m_flFogFalloff: number
	m_flFogLayer0Rotation: number
	m_flFogLayer0Scale: number
	readonly m_flFoglayer0ScrollU: number[]
	readonly m_flFoglayer0ScrollV: number[]
	m_flFogLayer1Rotation: number
	m_flFogLayer1Scale: number
	readonly m_flFoglayer1ScrollU: number[]
	readonly m_flFoglayer1ScrollV: number[]
	m_flFogExclusionInnerRadius: number
	m_flFogExclusionHeightBias: number
	m_flCausticSpeedScale: number
	m_flCausticAmplitudeScale: number
	m_flColorWarpBlendToFull: number
	m_fInnerRadius: number
	m_fOuterRadius: number
	m_flLightning_specular_pow_scale_min: number
	m_flLightning_specular_pow_scale_max: number
	readonly m_lightningColor: Color
	m_flLightningIntensityMin: number
	m_flLightningIntensityMax: number
	m_flLightningElevation: number
	m_flLightningSpecularIntensity: number
	m_flFarZOverride: number
	m_flAmbientShadowAmount: number
	m_nWeatherType: number
	readonly m_WeatherEffect: string
	m_flLightning_period_min: number
	m_flLightning_period_max: number
	m_flLightning_duration_min: number
	m_flLightning_duration_max: number
	m_flLightning_fluctuation_min: number
	m_flLightning_fluctuation_max: number
	readonly m_pszLightningSound: number[]
	m_flNextLightningStartTime: number
	m_flNextLightningEndTime: number
	m_flLightningFluctuationTimeStart: number
	m_flLightningFluctuationTimeEnd: number
	m_flLightningNumFluctuations: number
	m_flNextLightningSoundTime: number
	m_bPlayLightingSound: boolean
	m_flLightningEventMagnitude: number
	m_flLightningScale: number
	m_flLightningFluctuation: number
	m_flLightningAngle: number
	m_flLightningEventPercentage: number
}

declare class HeroPickRecord_t {
	eType: HeroPickType
	nHeroID: number
	nTeam: number
}

declare class IParticleSystemDefinition {}

declare class C_OP_RenderPoints extends CParticleFunctionRenderer {
}

declare class C_OP_ScreenForceFromPlayerView extends CParticleFunctionForce {
	m_flAccel: number
}

declare class RnHull_t {
	readonly m_vCentroid: Vector
	m_flMaxAngularRadius: number
	readonly m_vOrthographicAreas: Vector
	m_flVolume: number
	m_flMaxMotionRadius: number
	m_flMinMotionThickness: number
	readonly m_Bounds: AABB_t
	m_nFlags: number
}

declare class EventClientFrameSimulate_t {
	readonly m_LoopState: EngineLoopState_t
	m_flRealTime: number
	m_flFrameTime: number
}

declare class CModifierParams {
	readonly ability: C_BaseEntity
	fDamage: number
	fOriginalDamage: number
	nActivity: number
	bTooltip: boolean
	nTooltipParam: number
	bIgnoreInvis: boolean
	bNoCooldown: boolean
	bIgnoreArmor: boolean
	bReincarnate: boolean
	bDoNotConsume: boolean
	fDistance: number
	fGain: number
	fAttackTimeRemaining: number
	m_nIssuerPlayerIndex: number
	readonly inflictor: C_BaseEntity
	nDamageType: number
	nDamageflags: number
	nDamageCategory: number
	iFailType: number
	iRecord: number
	readonly pOrb: CDOTA_Orb
	readonly pOrb2: CDOTA_Orb
	nCost: number
	nOrdertype: number
	readonly vOldLoc: Vector
	readonly vNewLoc: Vector
	bCraniumBasherTested: boolean
	bMKBTested: boolean
	bHeartRegenApplied: boolean
	bDiffusalApplied: boolean
	bChainLightningConsidered: boolean
	bSuppressDamage: boolean
	bRangedAttack: boolean
	bProcessProcs: boolean
	bProjectileIsFromIllusion: boolean
	nPlayerids_stick: number
	readonly hattacker: C_BaseEntity
	readonly htarget: C_BaseEntity
	readonly hunit: C_BaseEntity
	readonly pAddedBuff: CDOTA_Buff
}

declare class CDOTA_Orb {
	readonly m_hCaster: C_BaseEntity
	readonly m_hAbility: C_BaseEntity
}

declare class CDOTASubChallengeInfo {
	nType: number
	nTier: number
	nSlotID: number
	nProgress: number
	nCompletionThreshold: number
	nPlayerID: number
	nQueryIndex: number
	nEventID: number
	nSequenceID: number
	nRequiredHero: number
	nCompleted: number
}

declare class C_INIT_MoveBetweenPoints extends CParticleFunctionInitializer {
	m_flSpeedMin: number
	m_flSpeedMax: number
	m_flEndSpread: number
	m_flStartOffset: number
	m_flEndOffset: number
	m_nEndControlPointNumber: number
	m_bTrailBias: boolean
}

declare class AnimResourceAnimDesc_t {
	readonly m_flags: AnimResourceAnimDesc_t_Flag_t
	fps: number
	framestalltime: number
	readonly m_vecRootMin: Vector
	readonly m_vecRootMax: Vector
	readonly m_sequenceParams: AnimResourceSequenceParams_t
}

declare class ConstraintTarget_t {
	m_nBoneHash: number
	m_flWeight: number
	readonly m_vOffset: Vector
	m_bIsAttachment: boolean
}

declare class dynpitchvol_t extends dynpitchvol_base_t {}

declare class C_OP_CurlNoiseForce extends CParticleFunctionForce {
	m_useCurl: boolean
	readonly m_vecNoiseFreq: Vector
	readonly m_vecNoiseScale: Vector
	readonly m_vecOffsetRate: Vector
}

declare class C_INIT_RandomColor extends CParticleFunctionInitializer {
	readonly m_ColorMin: Color
	readonly m_ColorMax: Color
	readonly m_TintMin: Color
	readonly m_TintMax: Color
	m_flTintPerc: number
	m_flUpdateThreshold: number
	m_nTintCP: number
	m_nTintBlendMode: ParticleColorBlendMode_t
	m_flLightAmplification: number
}

declare class CAnimParameterList {
}

declare class C_DOTA_CombatLogQueryProgress {
	m_nPlayerID: number
	m_nQueryID: number
	m_nQueryRank: number
	m_nMultiQueryID: number
	readonly m_szRankIdentifier: number[]
}

declare class CStopwatchBase extends CSimpleSimTimer {
	m_fIsRunning: boolean
}

declare class IBody extends INextBotComponent {}

declare class CAnimGraphNetworkedVariables {
	readonly m_BoolVariables: boolean[]
	readonly m_ByteVariables: number[]
	readonly m_IntVariables: number[]
	readonly m_FloatVariables: number[]
	readonly m_VectorVariables: Vector[]
}

declare class C_OP_RemapDistanceToLineSegmentToVector extends C_OP_RemapDistanceToLineSegmentBase {
	readonly m_vMinOutputValue: Vector
	readonly m_vMaxOutputValue: Vector
}

declare class C_OP_RemapParticleCountToScalar extends CParticleFunctionOperator {
	readonly m_nInputMin: CParticleCollectionFloatInput
	readonly m_nInputMax: CParticleCollectionFloatInput
	readonly m_flOutputMin: CParticleCollectionFloatInput
	readonly m_flOutputMax: CParticleCollectionFloatInput
	m_bActiveRange: boolean
	m_bScaleInitialRange: boolean
	m_bScaleCurrent: boolean
}

declare class CParticleAnimTag extends CAnimTagBase {
	readonly m_particleSystemName: string
	readonly m_configName: string
	m_bStopWhenTagEnds: boolean
	m_bTagEndStopIsInstant: boolean
}

declare class CCompressorGroup {
	m_nTotalElementCount: number
	readonly m_szChannelClass: string[]
	readonly m_szVariableName: string[]
	readonly m_nType: fieldtype_t[]
	readonly m_nFlags: number[]
	readonly m_szGrouping: string[]
	readonly m_nCompressorIndex: number[]
	readonly m_szElementNames: string[][]
	readonly m_nElementUniqueID: number[][]
	readonly m_nElementMask: number[]
}

declare class CRenderBufferBinding {
	m_hBuffer: bigint
	m_nBindOffsetBytes: number
}

declare class CBasePortraitData {
	m_bHasSetupView: boolean
	m_flRotation: number
}

declare class C_OP_AlphaDecay extends CParticleFunctionOperator {
	m_flMinAlpha: number
}

declare class C_OP_ExternalWindForce extends CParticleFunctionForce {
	m_nCP: number
	readonly m_vecScale: Vector
}

declare class CAnimReplayFrame {
	readonly m_waypoints: CAnimReplayWayPoint[]
	m_timeStamp: number
}

declare class CAnimReplayWayPoint {
	readonly m_vPosition: Vector
	m_flFacing: number
}

declare class CChoreoAnimNode extends CAnimNodeBase {
	readonly m_childID: AnimNodeID
}

declare class CCopyRecipientFilter extends IRecipientFilter {
	m_Flags: number
	readonly m_Recipients: C_BaseEntity[]
}

declare class CRandSimTimer extends CSimpleSimTimer {
	m_minInterval: number
	m_maxInterval: number
}

declare class C_OP_RenderText extends CParticleFunctionRenderer {
	readonly m_OutlineColor: Color
	readonly m_DefaultText: string
}

declare class CChoiceNodeChild {
	readonly m_nodeID: AnimNodeID
	readonly m_name: string
	m_weight: number
}

declare class sSharedCooldownInfo {
	readonly cooldownName: string
	cooldownLength: number
	cooldownTime: number
}

declare class C_INIT_InheritVelocity extends CParticleFunctionInitializer {
	m_nControlPointNumber: number
	m_flVelocityScale: number
}

declare class CSosSoundEventGroupSchema {
	readonly m_name: string
	m_nType: SosGroupType_t
	m_bIsBlocking: boolean
	m_nBlockMaxCount: number
	m_bInvertMatch: boolean
	readonly m_matchPattern: CSosGroupMatchPattern
	readonly m_branchPattern: CSosGroupBranchPattern
	readonly m_vActions: CSosGroupActionSchema[]
}

declare class BundleData_t {
	m_flULeftSrc: number
	m_flVTopSrc: number
}

declare class C_OP_ClampScalar extends CParticleFunctionOperator {
	m_flOutputMin: number
	m_flOutputMax: number
}

declare class C_OP_TwistAroundAxis extends CParticleFunctionForce {
	m_fForceAmount: number
	readonly m_TwistAxis: Vector
	m_bLocalSpace: boolean
	m_nControlPointNumber: number
}

declare class VSoundEvent_t {
}

declare class RnHalfEdge_t {
	m_nNext: number
	m_nTwin: number
	m_nOrigin: number
	m_nFace: number
}

declare class CVRHandAttachmentInput {
	m_nButtons: bigint
	m_afButtonPressed: bigint
	m_afButtonReleased: bigint
	m_flTriggerAnalogValue: number
	m_flGripAnalogValue: number
	m_flFinger0: number
	m_flFinger1: number
	m_flFinger2: number
	m_flFinger3: number
	m_flFinger4: number
	m_flTrackpadAnalogValueX: number
	m_flTrackpadAnalogValueY: number
	m_flJoystickAnalogValueX: number
	m_flJoystickAnalogValueY: number
}

declare class CPlayerLocalData {
	readonly m_NetworkVar_PathIndex: ChangeAccessorFieldPathIndex_t
	readonly m_chAreaBits: number[]
	readonly m_chAreaPortalBits: number[]
	m_nStepside: number
	m_nOldButtons: number
	m_iHideHUD: number
	m_flFOVRate: number
	readonly m_vecOverViewpoint: Vector
	m_bDucked: boolean
	m_bDucking: boolean
	m_bInDuckJump: boolean
	m_nDuckTimeMsecs: number
	m_nDuckJumpTimeMsecs: number
	m_nJumpTimeMsecs: number
	m_flFallVelocity: number
	m_bDrawViewmodel: boolean
	m_bWearingSuit: boolean
	m_bPoisoned: boolean
	m_flStepSize: number
	m_bAllowAutoMovement: boolean
	m_bSlowMovement: boolean
	m_bAutoAimTarget: boolean
	readonly m_skybox3d: sky3dparams_t
	readonly m_audio: audioparams_t
	readonly m_fog: fogparams_t
}

declare class CSceneEventInfo {
	m_bStarted: boolean
	m_iLayer: number
	m_iPriority: number
	m_bIsGesture: boolean
	m_flWeight: number
	readonly m_hTarget: C_BaseEntity
	m_bIsMoving: boolean
	m_bHasArrived: boolean
	m_flInitialYaw: number
	m_flTargetYaw: number
	m_flFacingYaw: number
	m_nType: number
	m_flNext: number
	m_bClientSide: boolean
	m_bShouldRemove: boolean
}

declare class C_OP_LerpToOtherAttribute extends CParticleFunctionOperator {
	readonly m_flInterpolation: CPerParticleFloatInput
}

declare class C_OP_ClampVector extends CParticleFunctionOperator {
	readonly m_vecOutputMin: Vector
	readonly m_vecOutputMax: Vector
}

declare class EventClientProcessNetworking_t {}

declare class PlayerSeatAssignment_t {
	unAccountID: number
	unSeat: number
	unReversedSeat: number
	unTeamID: number
}

declare class InfoForResourceTypeCPanoramaLayout {}

declare class C_OP_LockToSavedSequentialPath extends CParticleFunctionOperator {
	m_flFadeStart: number
	m_flFadeEnd: number
	m_bCPPairs: boolean
	readonly m_PathParams: CPathParameters
}

declare class C_INIT_RemapInitialVisibilityScalar extends CParticleFunctionInitializer {
	m_flInputMin: number
	m_flInputMax: number
	m_flOutputMin: number
	m_flOutputMax: number
}

declare class TimedKillEvent_t {
	m_nKillTime: number
	m_flKillValue: number
	m_nPlayerID: number
}

declare class CPhysicsShake {
	readonly m_force: Vector
}

declare class C_OP_RenderLights extends C_OP_RenderPoints {
	m_flAnimationRate: number
	m_bFitCycleToLifetime: boolean
	m_bAnimateInFPS: boolean
	m_flMinSize: number
	m_flMaxSize: number
	m_flStartFadeSize: number
	m_flEndFadeSize: number
}

declare class CTimeCondition extends CAnimStateConditionBase {
	m_comparisonValue: number
}

declare class C_OP_RemapNamedModelSequenceEndCap extends C_OP_RemapNamedModelElementEndCap {}

declare class EventClientProcessGameInput_t {
	readonly m_LoopState: EngineLoopState_t
	m_flRealTime: number
	m_flFrameTime: number
}

declare class VsInputSignatureElement_t {
	readonly m_pName: number[]
	readonly m_pSemantic: number[]
	readonly m_pD3DSemanticName: number[]
	m_nD3DSemanticIndex: number
}

declare class CDOTA_Modifier_Lua_Motion_Both extends CDOTA_Modifier_Lua {}

declare class C_OP_EnableChildrenFromParentParticleCount extends CParticleFunctionPreEmission {
	m_nChildGroupID: number
	m_nFirstChild: number
	m_nNumChildrenToEnable: number
}

declare class C_INIT_RandomRotationSpeed extends CGeneralRandomRotation {}

declare class VertexPositionColor_t {
	readonly m_vPosition: Vector
}

declare class CFailableAchievement extends CBaseAchievement {
	m_bActivated: boolean
	m_bFailed: boolean
}

declare class C_OP_CalculateVectorAttribute extends CParticleFunctionOperator {
	readonly m_vStartValue: Vector
	m_flInputScale1: number
	m_flInputScale2: number
	readonly m_nControlPointInput1: ControlPointReference_t
	m_flControlPointScale1: number
	readonly m_nControlPointInput2: ControlPointReference_t
	m_flControlPointScale2: number
	readonly m_vFinalOutputScale: Vector
}

declare class C_OP_SetCPOrientationToPointAtCP extends CParticleFunctionPreEmission {
	m_nInputCP: number
	m_nOutputCP: number
}

declare class SceneObject_t {
	m_nObjectID: number
	m_flFadeStartDistance: number
	m_flFadeEndDistance: number
	m_nObjectTypeFlags: ObjectTypeFlags_t
	readonly m_vLightingOrigin: Vector
	m_nLightGroup: number
	m_nOverlayRenderOrder: number
	m_nCubeMapPrecomputedHandshake: number
	m_nLightProbeVolumePrecomputedHandshake: number
}

declare class PostProcessingBloomParameters_t {
	m_blendMode: BloomBlendMode_t
	m_flBloomStrength: number
	m_flScreenBloomStrength: number
	m_flBlurBloomStrength: number
	m_flBloomThreshold: number
	m_flBloomThresholdWidth: number
	m_flSkyboxBloomStrength: number
	m_flBloomStartValue: number
	readonly m_flBlurWeight: number[]
	readonly m_vBlurTint: Vector[]
}

declare class HitBox_t {
	m_nGroupId: number
	m_nBoneNameHash: number
	readonly m_cRenderColor: number[]
	m_nHitBoxIndex: number
	readonly m_vMinBounds: Vector
	readonly m_vMaxBounds: Vector
	m_bVisible: boolean
}

declare class CDOTA_Bot {
	m_iLifesteal: number
	m_iBlock: number
	m_bForceIdle: boolean
	m_bForceCreepAttack: boolean
	readonly m_fExecutionTime: number[]
	m_iCurExecutionTime: number
	m_iPlayerID: number
	readonly m_hUnit: C_BaseEntity
	readonly m_pTeamCommander: CDOTA_TeamCommander
	m_iUnitType: number
	m_fAggressionFactor: number
	m_bHuman: boolean
	m_bLiquidate: boolean
	m_bDoNotPurchase: boolean
	m_iDifficulty: number
	m_bIsFullScriptTakeover: boolean
	m_CurrentLane: DOTA_LANE
	m_MostRecentLane: DOTA_LANE
	m_AssignedLane: DOTA_LANE
	m_TargetLane: DOTA_LANE
	m_ForcedLane: DOTA_LANE
	m_fCurrentLaneAmount: number
	m_fEstimatedUnitDamage: number
	m_fEstimatedMaxUnitDamage: number
	m_fEstimatedBuildingDamage: number
	m_bWantsToCast: boolean
	m_iWantsToCastFrame: number
	m_bWantsToAttack: boolean
	m_iWantsToAttackFrame: number
	readonly m_UpdateCurrentLaneTimer: CountdownTimer
	readonly m_UpdateModeTimer: CountdownTimer
	readonly m_ModeThinkTimer: CountdownTimer
	readonly m_InteralRatingsTimer: CountdownTimer
	readonly m_BuybackDelayTimer: CountdownTimer
	readonly m_CourierUsageTimer: CountdownTimer
	readonly m_AbilityMutedTimer: CountdownTimer
	readonly m_AbilityMutedCheckTimer: CountdownTimer
	m_HitByTowerTime: number
	readonly m_HitByHeroTime: number[]
	m_HitByCreepTime: number
	m_nEstimatedDamageUpdatedTick: number
	m_nNearbyUnitsUpdatedTick: number
	readonly m_NearbyTrees: number[]
	m_nNearbyEnemyCreeps: number
	m_nAttackingCreeps: number
	m_nAttackingTowers: number
	m_nAttackingHeroes: number
	m_fLastSeen: number
	m_nFailedPaths: number
	readonly m_hTarget: C_BaseEntity
	readonly m_vTargetLoc: Vector
	m_fTargetLastSeen: number
	readonly m_hTargetLastHitCreep: C_BaseEntity
	m_bWasInvisible: boolean
	m_bKnownInvisible: boolean
	readonly m_vLastSeenLoc: Vector
	readonly m_vRequestedBlinkLoc: Vector
	m_fRequestedBlinkStart: number
	m_fRequestedBlinkExpire: number
	readonly m_hMinions: C_BaseEntity[]
	readonly m_fModeDesires: number[]
	m_iPreviousBotModeType: number
	m_fPendingActionExecuteTime: number
	m_bPendingActionBypass: boolean
	m_nForceAbility: number
}

declare class C_OP_EndCapDecay extends CParticleFunctionOperator {}

declare class VirtualVolumeTexData_t {
	readonly m_vBoundsMin: Vector
	readonly m_vBoundsMax: Vector
	readonly m_vPlaneEndDistancesXYZ: Vector
	m_nVirtualResX: number
	m_nVirtualResY: number
	m_nVirtualResZ: number
	m_nPageDataTotalSize: bigint
}

declare class RnSphereDesc_t extends RnShapeDesc_t {
	readonly m_Sphere: RnSphere_t
}

declare class CBoneConstraintPoseSpaceMorph extends CBoneConstraintBase {
	readonly m_sBoneName: string
	readonly m_sAttachmentName: string
	readonly m_outputMorph: string[]
}

declare class InfoForResourceTypeIAnimationGraph {}

declare class C_INIT_RemapCPtoScalar extends CParticleFunctionInitializer {
	m_nCPInput: number
	m_nField: number
	m_flInputMin: number
	m_flInputMax: number
	m_flOutputMin: number
	m_flOutputMax: number
	m_flStartTime: number
	m_flEndTime: number
	m_bScaleInitialRange: boolean
	m_flRemapBias: number
}

declare class CSSDSMsg_PreLayer extends CSSDSMsg_LayerBase {}

declare class RnSoftbodyParticle_t {
	m_flMassInv: number
}

declare class CEffectScriptElement {
	readonly m_szEffectName: number[]
	m_bTrailActive: boolean
	readonly m_pSprite: C_BaseEntity
	m_iType: number
	m_iRenderType: number
	m_iR: number
	m_iG: number
	m_iB: number
	m_iA: number
	readonly m_szAttachment: number[]
	readonly m_szMaterial: number[]
	m_flScale: number
	m_flFadeTime: number
	m_flTextureRes: number
	m_bStopFollowOnKill: boolean
	m_bActive: boolean
}

declare class EventFrameBoundary_t {
	m_flFrameTime: number
}

declare class InfoForResourceTypeCRenderMesh {}

declare class CSimTimer extends CSimpleSimTimer {
	m_interval: number
}

declare class C_INIT_RemapParticleCountToNamedModelBodyPartScalar extends C_INIT_RemapParticleCountToNamedModelElementScalar {}

declare class BakedLightingInfo_t {
	m_nPerVertexLightingDataPlainRGBMWidth: number
	m_nPerVertexLightingDataPlainRGBMHeight: number
	m_nPerVertexLightingDataPlainRGBMDepth: number
	m_nLightmapVersionNumber: number
	m_bHasLightmaps: boolean
}

declare class BoneOverride_t extends BaseSceneObjectOverride_t {
}

declare class WeightedSuggestion_t {
	nSuggestion: number
	fWeight: number
}

declare class CAI_ExpresserWithFollowup extends CAI_Expresser {
	readonly m_pPostponedFollowup: ResponseFollowup
}

declare class EventPostAdvanceTick_t extends EventSimulate_t {
	m_nCurrentTick: number
	m_nTotalTicksThisFrame: number
	m_nTotalTicks: number
}

declare class IPhysicsPlayerController {}

declare class C_OP_RemapSpeedtoCP extends CParticleFunctionPreEmission {
	m_nInControlPointNumber: number
	m_nOutControlPointNumber: number
	m_nField: number
	m_flInputMin: number
	m_flInputMax: number
	m_flOutputMin: number
	m_flOutputMax: number
	m_bUseDeltaV: boolean
}

declare class C_OP_WindForce extends CParticleFunctionForce {
	readonly m_vForce: Vector
}

declare class AnimationGroupResourceData_t {
	m_nFlags: number
	readonly m_decodeKey: AnimationKeyResourceData_t
	readonly m_retarget: AnimationRetargetData_t
}

declare class EventServerPostAdvanceTick_t extends EventPostAdvanceTick_t {}

declare class EventClientPreOutput_t {
	readonly m_LoopState: EngineLoopState_t
	m_flRenderTime: number
	m_flRenderFrameTime: number
	m_flRenderFrameTimeUnbounded: number
}

declare class C_OP_DampenToCP extends CParticleFunctionOperator {
	m_nControlPointNumber: number
	m_flRange: number
	m_flScale: number
}

declare class C_OP_PositionLock extends CParticleFunctionOperator {
	m_nControlPointNumber: number
	m_flStartTime_min: number
	m_flStartTime_max: number
	m_flStartTime_exp: number
	m_flEndTime_min: number
	m_flEndTime_max: number
	m_flEndTime_exp: number
	m_flRange: number
	m_flJumpThreshold: number
	m_flPrevPosScale: number
	m_bLockRot: boolean
}

declare class RnSoftbodySpring_t {
	readonly m_nParticle: number[]
	m_flLength: number
}

declare class RnHullDesc_t extends RnShapeDesc_t {
	readonly m_Hull: RnHull_t
}

declare class SeqResourceAutoLayerFlag_t {
	m_bPost: boolean
	m_bSpline: boolean
	m_bXFade: boolean
	m_bNoBlend: boolean
	m_bLocal: boolean
	m_bPose: boolean
	m_bFetchFrame: boolean
	m_bSubtract: boolean
}

declare class FeNodeReverseOffset_t {
	nBoneCtrl: number
	nTargetNode: number
	readonly vOffset: Vector
}

declare class C_OP_RemapCPtoScalar extends CParticleFunctionOperator {
	m_nCPInput: number
	m_nField: number
	m_flInputMin: number
	m_flInputMax: number
	m_flOutputMin: number
	m_flOutputMax: number
	m_flStartTime: number
	m_flEndTime: number
	m_flInterpRate: number
	m_bScaleInitialRange: boolean
	m_bScaleCurrent: boolean
}

declare class C_OP_Spin extends CGeneralSpin {}

declare class EventClientSendInput_t {}

declare class C_SpeechBubbleInfo {
	readonly m_LocalizationStr: number[]
	readonly m_hNPC: C_BaseEntity
	m_flDuration: number
	m_unOffsetX: number
	m_unOffsetY: number
	m_unCount: number
}

declare class CDOTA_CreepKillInfo {
	m_flTimeOfDeath: number
	m_flDeathFlightDuration: number
	readonly m_vWsKillDirection: Vector
	readonly m_vWsKillOrigin: Vector
}

declare class C_INIT_CreateFromCPs extends CParticleFunctionInitializer {
	m_nIncrement: number
	m_nMinCP: number
	m_nMaxCP: number
}

declare class FeCollisionSphere_t {
	nCtrlParent: number
	nChildNode: number
	m_flRFactor: number
	readonly m_vOrigin: Vector
	flStickiness: number
}

declare class CSequenceTransitioner2 {
	readonly m_currentOp: CNetworkedSequenceOperation
	m_flCurrentPlaybackRate: number
	m_flCurrentAnimTime: number
	readonly m_transitioningLayers: TransitioningLayer_t[]
	readonly m_pOwner: CBaseAnimatingController
}

declare class CBaseAnimatingController extends CSkeletonAnimationController {
	readonly m_baseLayer: CNetworkedSequenceOperation
	readonly m_animGraphNetworkedVars: CAnimGraphNetworkedVariables
	m_bSequenceFinished: boolean
	m_flGroundSpeed: number
	m_flLastEventCycle: number
	m_flLastEventAnimTime: number
	m_flPrevAnimTime: number
	readonly m_flPoseParameter: number[]
	m_bClientSideAnimation: boolean
	m_bNetworkedAnimationInputsChanged: boolean
	m_nNewSequenceParity: number
	m_nResetEventsParity: number
	m_flIKGroundContactTime: number
	m_flIKGroundMinHeight: number
	m_flIKGroundMaxHeight: number
	m_flIkZAdjustAmount: number
	readonly m_SequenceTransitioner: CSequenceTransitioner2
}

declare class RenderBufferBinding_t {
	m_hBuffer: bigint
	m_nBindOffsetBytes: number
}

declare class EntityIOConnectionData_t {
	m_targetType: number
	m_flDelay: number
	m_nTimesToFire: number
}

declare class C_HorizontalMotionController {}

declare class C_OP_RemapDistanceToLineSegmentToScalar extends C_OP_RemapDistanceToLineSegmentBase {
	m_flMinOutputValue: number
	m_flMaxOutputValue: number
}

declare class InfoForResourceTypeSequenceGroupResourceData_t {}

declare class hudtextparms_t {
	readonly color1: Color
	readonly color2: Color
	effect: number
	channel: number
	x: number
	y: number
	fadeinTime: number
	fadeoutTime: number
	holdTime: number
	fxTime: number
}

declare class C_OP_SetControlPointToCenter extends CParticleFunctionPreEmission {
	m_nCP1: number
	readonly m_vecCP1Pos: Vector
}

declare class C_INIT_CreationNoise extends CParticleFunctionInitializer {
	m_bAbsVal: boolean
	m_bAbsValInv: boolean
	m_flOffset: number
	m_flOutputMin: number
	m_flOutputMax: number
	m_flNoiseScale: number
	m_flNoiseScaleLoc: number
	readonly m_vecOffsetLoc: Vector
	m_flWorldTimeScale: number
}

declare class CAddAnimNode extends CAnimNodeBase {
	readonly m_baseChildID: AnimNodeID
	readonly m_additiveChildID: AnimNodeID
	m_timingBehavior: BinaryNodeTiming
	m_flTimingBlend: number
	m_bResetBase: boolean
	m_bResetAdditive: boolean
	m_bApplyChannelsSeparately: boolean
}

declare class C_DotaTree {
	m_nOccluderIndex: number
}

declare class GameFileWeaponInfo_t extends FileWeaponInfo_t {}

declare class ParticlePreviewState_t {
	readonly m_previewModel: string
	m_nModSpecificData: number
	m_groundType: PetGroundType_t
	readonly m_sequenceName: string
	m_nFireParticleOnSequenceFrame: number
	readonly m_hitboxSetName: string
	readonly m_materialGroupName: string
	readonly m_vecBodyGroups: ParticlePreviewBodyGroup_t[]
	readonly m_stencilWriteName: string
	m_flPlaybackSpeed: number
	m_flParticleSimulationRate: number
	m_bShouldDrawHitboxes: boolean
	m_bShouldDrawAttachments: boolean
	m_bShouldDrawAttachmentNames: boolean
	m_bShouldDrawControlPointAxes: boolean
	m_bAnimationNonLooping: boolean
}

declare class C_OP_SetControlPointPositions extends CParticleFunctionPreEmission {
	m_bUseWorldLocation: boolean
	m_bOrient: boolean
	m_bSetOnce: boolean
	m_nCP1: number
	m_nCP2: number
	m_nCP3: number
	m_nCP4: number
	readonly m_vecCP1Pos: Vector
	readonly m_vecCP2Pos: Vector
	readonly m_vecCP3Pos: Vector
	readonly m_vecCP4Pos: Vector
	m_nHeadLocation: number
}

declare class CWayPointHelperAnimNode extends CAnimNodeBase {
	readonly m_childID: AnimNodeID
	m_flStartCycle: number
	m_flEndCycle: number
	m_bOnlyGoals: boolean
	m_bPreventOvershoot: boolean
	m_bPreventUndershoot: boolean
}

declare class SeqResourceMultiFetch_t {
	readonly m_flags: SeqResourceMultiFetch_t_Flag_t
	readonly m_nGroupSize: number[]
	readonly m_nLocalPose: number[]
	m_nLocalCyclePoseParameter: number
	m_bCalculatePoseParameters: boolean
}

declare class CDOTASpectatorGraphManager {
	readonly __m_pChainEntity: CNetworkVarChainer
	m_nPlayerDataCount: number
	readonly m_SendTeamStatsTimer: CountdownTimer
	m_bTrackingTeamStats: boolean
	m_flStartTime: number
	m_nNextUpdatePlayer: number
	readonly m_rgPlayerGraphData: C_BaseEntity[]
	readonly m_rgRadiantTotalEarnedGold: number[]
	readonly m_rgDireTotalEarnedGold: number[]
	readonly m_rgRadiantTotalEarnedXP: number[]
	readonly m_rgDireTotalEarnedXP: number[]
	readonly m_rgRadiantNetWorth: number[]
	readonly m_rgDireNetWorth: number[]
	m_flTotalEarnedGoldStartTime: number
	m_flTotalEarnedGoldEndTime: number
	m_nGoldGraphVersion: number
	readonly m_rgRadiantWinChance: number[]
	readonly m_TeamStatsUpdateTimer: CountdownTimer
	readonly m_HeroInventorySnapshotTimer: CountdownTimer
	readonly m_vecPlayerSnapshots: sPlayerSnapshot[][]
	m_event_dota_player_killed: number
	m_event_server_pre_shutdown: number
	m_event_dota_player_pick_hero: number
}

declare class C_OP_LerpToInitialPosition extends CParticleFunctionOperator {
	m_nControlPointNumber: number
	readonly m_flInterpolation: CPerParticleFloatInput
}

declare class C_OP_DistanceCull extends CParticleFunctionOperator {
	m_nControlPoint: number
	readonly m_vecPointOffset: Vector
	m_flDistance: number
	m_bCullInside: boolean
}

declare class C_INIT_VelocityRadialRandom extends CParticleFunctionInitializer {
	m_nControlPointNumber: number
	m_fSpeedMin: number
	m_fSpeedMax: number
	readonly m_vecLocalCoordinateSystemSpeedScale: Vector
	m_bIgnoreDelta: boolean
}

declare class CSelectorAnimNode extends CAnimNodeBase {
	readonly m_children: AnimNodeID[]
	readonly m_tags: AnimTagID[]
	m_selectionSource: SelectionSource_t
	readonly m_boolParamID: AnimParamID
	readonly m_enumParamID: AnimParamID
	m_blendDuration: number
	m_tagBehavior: SelectorTagBehaior_t
	m_bResetOnChange: boolean
	m_bSyncCyclesOnChange: boolean
	readonly m_blendCurve: CBlendCurve
}

declare class FeCtrlOsOffset_t {
	nCtrlParent: number
	nCtrlChild: number
}

declare class C_CSequenceTransitioner2 {
	readonly m_currentOp: CNetworkedSequenceOperation
	m_flCurrentPlaybackRate: number
	m_flCurrentAnimTime: number
	readonly m_transitioningLayers: TransitioningLayer_t[]
	readonly m_pOwner: C_BaseAnimatingController
}

declare class C_BaseAnimatingController extends CSkeletonAnimationController {
	readonly m_baseLayer: CNetworkedSequenceOperation
	readonly m_animGraphNetworkedVars: CAnimGraphNetworkedVariables
	m_bSequenceFinished: boolean
	m_flGroundSpeed: number
	m_flLastEventCycle: number
	m_flLastEventAnimTime: number
	m_flPrevAnimTime: number
	readonly m_flPoseParameter: number[]
	m_bClientSideAnimation: boolean
	m_bNetworkedAnimationInputsChanged: boolean
	m_nPrevNewSequenceParity: number
	m_nPrevResetEventsParity: number
	m_nNewSequenceParity: number
	m_nResetEventsParity: number
	m_flIKGroundContactTime: number
	m_flIKGroundMinHeight: number
	m_flIKGroundMaxHeight: number
	m_flIkZAdjustAmount: number
	readonly m_SequenceTransitioner: C_CSequenceTransitioner2
	m_ClientSideAnimationListHandle: number
}

declare class ModelBoneFlexDriver_t {
	m_boneNameToken: number
}

declare class EventAppShutdown_t {
	m_nDummy0: number
}

declare class FeSimdSpringIntegrator_t {
	readonly nNode: number[]
}

declare class C_ViewSmoothingData_t {
	readonly pVehicle: C_BaseAnimating
	bClampEyeAngles: boolean
	flPitchCurveZero: number
	flPitchCurveLinear: number
	flRollCurveZero: number
	flRollCurveLinear: number
	flFOV: number
	readonly pitchLockData: ViewLockData_t
	readonly rollLockData: ViewLockData_t
	bDampenEyePosition: boolean
	bRunningEnterExit: boolean
	bWasRunningAnim: boolean
	flEnterExitStartTime: number
	flEnterExitDuration: number
	readonly vecAnglesSaved: QAngle
	readonly vecOriginSaved: Vector
	readonly vecAngleDiffSaved: QAngle
	readonly vecAngleDiffMin: QAngle
}

declare class C_OP_LocalAccelerationForce extends CParticleFunctionForce {
	m_nCP: number
	m_nScaleCP: number
	readonly m_vecAccel: Vector
}

declare class SeqResourceS1SeqDesc_t {
	readonly m_flags: SeqResourceSeqDesc_t_Flag_t
	readonly m_fetch: SeqResourceMultiFetch_t
	m_nLocalWeightlist: number
	readonly m_transition: SeqResourceTransition_t
}

declare class CRCMD_SetProfileMode {
	m_bEnableProfiling: boolean
}

declare class CUnitOrders {
	readonly m_nUnits: C_BaseEntity[]
	readonly m_vPosition: Vector
	m_nIssuerPlayerIndex: number
	m_nOrderSequenceNumber: number
	m_nOrderType: number
	readonly m_nTargetIndex: C_BaseEntity
	readonly m_nAbilityIndex: C_BaseEntity
	m_bQueue: boolean
}

declare class InfoForResourceTypeVMapResourceData_t {}

declare class SimpleConstraintSoundProfile {
	readonly m_keyPoints: number[]
	readonly m_reversalSoundThresholds: number[]
}

declare class CNavVolumeAll extends CNavVolumeVector {}

declare class C_INIT_RemapNamedModelBodyPartToScalar extends C_INIT_RemapNamedModelElementToScalar {}

declare class CEnumAnimParameter extends CAnimParameterBase {
	m_defaultValue: number
	readonly m_enumOptions: string[]
}

declare class ragdollelement_t {
	readonly originParentSpace: Vector
	parentIndex: number
	m_flRadius: number
}

declare class C_OP_RampCPLinearRandom extends CParticleFunctionPreEmission {
	m_nOutControlPointNumber: number
	readonly m_vecRateMin: Vector
	readonly m_vecRateMax: Vector
}

declare class CClothSettingsAnimTag extends CAnimTagBase {
	m_flStiffness: number
	m_flEaseIn: number
	m_flEaseOut: number
	readonly m_nVertexSet: string
}

declare class SeqResourceAutoLayer_t {
	m_nLocalReference: number
	m_nLocalPose: number
	readonly m_flags: SeqResourceAutoLayerFlag_t
	m_start: number
	m_peak: number
	m_tail: number
	m_end: number
}

declare class AnimationSnapshot_t extends AnimationSnapshotBase_t {
	m_nEntIndex: number
	readonly m_modelName: string
}

declare class VPhysXCollisionAttributes_t {
	m_CollisionGroup: number
}

declare class C_OP_OscillateScalar extends CParticleFunctionOperator {
	m_RateMin: number
	m_RateMax: number
	m_FrequencyMin: number
	m_FrequencyMax: number
	m_bProportional: boolean
	m_bProportionalOp: boolean
	m_flStartTime_min: number
	m_flStartTime_max: number
	m_flEndTime_min: number
	m_flEndTime_max: number
	m_flOscMult: number
	m_flOscAdd: number
}

declare class CMultiplayer_Expresser extends CAI_ExpresserWithFollowup {
	m_bAllowMultipleScenes: boolean
}

declare class VPhysXShapeCompoundHeader2_t extends VPhysXDiskShapeHeader_t {
}

declare class SheetSequenceFrame_t {
	m_flDisplayTime: number
}

declare class InfoForResourceTypeIParticleSystemDefinition {}

declare class C_OP_LockToSavedSequentialPathV2 extends CParticleFunctionOperator {
	m_flFadeStart: number
	m_flFadeEnd: number
	m_bCPPairs: boolean
	readonly m_PathParams: CPathParameters
}

declare class C_INIT_PointList extends CParticleFunctionInitializer {
	m_bPlaceAlongPath: boolean
	m_bClosedLoop: boolean
	m_nNumPointsAlongPath: number
}

declare class C_SunGlowOverlay extends CGlowOverlay {
	m_bModulateByDot: boolean
}

declare class ragdoll_t {
	readonly list: ragdollelement_t[]
	readonly boneIndex: number[]
	allowStretch: boolean
	unused: boolean
}

declare class C_OP_AttractToControlPoint extends CParticleFunctionForce {
	readonly m_vecComponentScale: Vector
	readonly m_fForceAmount: CPerParticleFloatInput
	m_fFalloffPower: number
	m_nControlPointNumber: number
	m_bScaleLocal: boolean
	readonly m_fForceAmountMin: CPerParticleFloatInput
	m_bApplyMinForce: boolean
}

declare class C_INIT_CreateInEpitrochoid extends CParticleFunctionInitializer {
	m_nComponent1: number
	m_nComponent2: number
	m_nControlPointNumber: number
	m_nScaleCP: number
	m_flParticleDensity: number
	m_flOffset: number
	m_flRadius1: number
	m_flRadius2: number
	m_bUseCount: boolean
	m_bUseLocalCoords: boolean
	m_bOffsetExistingPos: boolean
}

declare class CCycleCondition extends CAnimStateConditionBase {
	m_comparisonValue: number
}

declare class CBoneConstraintPoseSpaceBone extends CBaseConstraint {
}

declare class EventServerPostSimulate_t extends EventSimulate_t {}

declare class C_INIT_RemapParticleCountToNamedModelSequenceScalar extends C_INIT_RemapParticleCountToNamedModelElementScalar {}

declare class C_OP_PlanarConstraint extends CParticleFunctionConstraint {
	readonly m_PointOnPlane: Vector
	readonly m_PlaneNormal: Vector
	m_nControlPointNumber: number
	m_bGlobalOrigin: boolean
	m_bGlobalNormal: boolean
}

declare class C_OP_FadeAndKill extends CParticleFunctionOperator {
	m_flStartFadeInTime: number
	m_flEndFadeInTime: number
	m_flStartFadeOutTime: number
	m_flEndFadeOutTime: number
	m_flStartAlpha: number
	m_flEndAlpha: number
	m_bForcePreserveParticleOrder: boolean
}

declare class CMoverAnimNode extends CAnimNodeBase {
	readonly m_childID: AnimNodeID
	m_bApplyMovement: boolean
	m_bOrientMovement: boolean
	m_bAdditive: boolean
	m_bTurnToFace: boolean
	m_flTurnToFaceOffset: number
	m_facingTarget: AnimValueSource
	readonly m_damping: CAnimInputDamping
}

declare class CSceneObjectData {
	readonly m_vMinBounds: Vector
	readonly m_vMaxBounds: Vector
	readonly m_drawCalls: CMaterialDrawDescriptor[]
}

declare class CMaterialDrawDescriptor {
	m_nPrimitiveType: RenderPrimitiveType_t
	m_nBaseVertex: number
	m_nVertexCount: number
	m_nStartIndex: number
	m_nIndexCount: number
	m_nStartInstance: number
	m_nInstanceCount: number
	m_flUvDensity: number
	readonly m_vTintColor: Vector
	readonly m_indexBuffer: CRenderBufferBinding
}

declare class FeTreeChildren_t {
	readonly nChild: number[]
}

declare class CNavVolumeSphericalShell extends CNavVolumeSphere {
	m_flRadiusInner: number
}

declare class C_INIT_PositionWarpScalar extends CParticleFunctionInitializer {
	readonly m_vecWarpMin: Vector
	readonly m_vecWarpMax: Vector
	readonly m_InputValue: CPerParticleFloatInput
	m_flPrevPosScale: number
	m_nScaleControlPointNumber: number
	m_nControlPointNumber: number
}

declare class C_INIT_RandomRadius extends CParticleFunctionInitializer {
	m_flRadiusMin: number
	m_flRadiusMax: number
	m_flRadiusRandExponent: number
}

declare class C_INIT_RandomVectorComponent extends CParticleFunctionInitializer {
	m_flMin: number
	m_flMax: number
	m_nComponent: number
}

declare class CPostGraphIKTag extends CAnimTagBase {
	m_flBlendAmount: number
}

declare class CGroundIKSolveAnimNode extends CAnimNodeBase {
	readonly m_childID: AnimNodeID
	readonly m_IkChains: string[]
	m_TiltSource: GroundIKTiltSource_t
	m_bApplyLocks: boolean
	m_bEnabled: boolean
	readonly m_TargetBlendParameter: AnimParamID
	m_bDebugDrawBefore: boolean
	readonly m_DebugDrawBeforeColor: Color
	m_bDebugDrawAfter: boolean
	readonly m_DebugDrawAfterColor: Color
}

declare class CBlendAnimNode extends CAnimNodeBase {
	readonly m_children: CBlendNodeChild[]
	m_blendValueSource: AnimValueSource
	readonly m_param: AnimParamID
	m_blendKeyType: BlendKeyType
	m_bLockBlendOnReset: boolean
	m_bSyncCycles: boolean
	m_bLoop: boolean
	m_bLockWhenWaning: boolean
	readonly m_damping: CAnimInputDamping
}

declare class CBlendNodeChild {
	readonly m_nodeID: AnimNodeID
	readonly m_name: string
	m_blendValue: number
}

declare class AnimResourceIKChain_t {
}

declare class SlideMaterialList_t {
	readonly szSlideKeyword: number[]
	readonly iSlideIndex: number[]
}

declare class C_OP_RemapNamedModelBodyPartEndCap extends C_OP_RemapNamedModelElementEndCap {}

declare class C_INIT_RandomAlphaWindowThreshold extends CParticleFunctionInitializer {
	m_flMin: number
	m_flMax: number
	m_flExponent: number
}

declare class C_INIT_VelocityRandom extends CParticleFunctionInitializer {
	m_nControlPointNumber: number
	m_fSpeedMin: number
	m_fSpeedMax: number
	readonly m_LocalCoordinateSystemSpeedMin: Vector
	readonly m_LocalCoordinateSystemSpeedMax: Vector
	m_bIgnoreDT: boolean
}

declare class AnimResourceIKTargetInfo_t {
	m_nType: number
	m_nPosChannel: number
	m_nPosElement: number
	m_nQuatChannel: number
	m_nQuatElement: number
}

declare class CHintMessageQueue {
	m_tmMessageEnd: number
	readonly m_messages: CHintMessage[]
}

declare class CSoundPatch {
	readonly m_pitch: CSoundEnvelope
	readonly m_volume: CSoundEnvelope
	m_shutdownTime: number
	m_flLastTime: number
	readonly m_iszSoundScriptName: string
	readonly m_hEnt: C_BaseEntity
	m_entityChannel: number
	readonly m_soundEntityIndex: C_BaseEntity
	readonly m_soundOrigin: Vector
	m_flags: number
	m_baseFlags: number
	m_isPlaying: number
	readonly m_Filter: CCopyRecipientFilter
	m_flCloseCaptionDuration: number
	readonly m_iszClassName: string
}

declare class CParameterAnimCondition extends CAnimStateConditionBase {
	readonly m_paramID: AnimParamID
}

declare class CChoiceAnimNode extends CAnimNodeBase {
	readonly m_children: CChoiceNodeChild[]
	m_seed: number
	m_choiceMethod: ChoiceMethod
	m_choiceChangeMethod: ChoiceChangeMethod
	m_blendTime: number
	m_bResetChosen: boolean
}

declare class C_OP_RemapNamedModelMeshGroupEndCap extends C_OP_RemapNamedModelElementEndCap {}

declare class C_INIT_NormalAlignToCP extends CParticleFunctionInitializer {
	m_nControlPointNumber: number
}

declare class WorldLighting_t {
	m_globalIlluminationMethod: GlobalIlluminationMethod_t
}

declare class CFootFallAnimTag extends CAnimTagBase {
	m_foot: FootFallTagFoot_t
}

declare class EventClientOutput_t {
	readonly m_LoopState: EngineLoopState_t
	m_flRenderTime: number
	m_flRealTime: number
}

declare class FeSoftParent_t {
	nParent: number
	flAlpha: number
}

declare class MaterialVariable_t {
	readonly m_strVariable: string
	m_flScale: number
}

declare class C_OP_RemapBoundingVolumetoCP extends CParticleFunctionPreEmission {
	m_nOutControlPointNumber: number
	m_flInputMin: number
	m_flInputMax: number
	m_flOutputMin: number
	m_flOutputMax: number
}

declare class C_OP_SnapshotSkinToBones extends CParticleFunctionOperator {
	m_bTransformNormals: boolean
	m_nControlPointNumber: number
	m_flLifeTimeFadeStart: number
	m_flLifeTimeFadeEnd: number
	m_flJumpThreshold: number
	m_flPrevPosScale: number
}

declare class C_INIT_RandomNamedModelBodyPart extends C_INIT_RandomNamedModelElement {}

declare class EventClientProcessInput_t {
	readonly m_LoopState: EngineLoopState_t
	m_flRealTime: number
	m_flFrameTime: number
}

declare class CFeNamedJiggleBone {
	readonly m_strParentBone: string
	m_nJiggleParent: number
	readonly m_jiggleBone: CFeJiggleBone
}

declare class InfoForResourceTypePRTMatrixData_t {}

declare class PlayerResourcePlayerData_t {
	m_bIsValid: boolean
	readonly m_iszPlayerName: string
	m_iPlayerTeam: number
	m_bFullyJoinedServer: boolean
	m_bFakeClient: boolean
	m_bIsBroadcaster: boolean
	m_iBroadcasterChannel: number
	m_iBroadcasterChannelSlot: number
	m_bIsBroadcasterChannelCameraman: boolean
	m_iConnectionState: number
	m_iPlayerSteamID: bigint
	m_eCoachTeam: DOTATeam_t
	m_eLiveSpectatorTeam: DOTATeam_t
	m_bIsPlusSubscriber: boolean
}

declare class C_OP_RenderRopes extends CBaseRendererSource2 {
	m_bEnableFadingAndClamping: boolean
	m_flMinSize: number
	m_flMaxSize: number
	m_flStartFadeSize: number
	m_flEndFadeSize: number
	m_flRadiusTaper: number
	m_nMinTesselation: number
	m_nMaxTesselation: number
	m_flTessScale: number
	m_flTextureVWorldSize: number
	m_flTextureVScrollRate: number
	m_flTextureVOffset: number
	m_nTextureVParamsCP: number
	m_flFinalTextureScaleU: number
	m_flFinalTextureScaleV: number
	m_flFinalTextureOffsetU: number
	m_flFinalTextureOffsetV: number
	m_bClampV: boolean
	m_nScaleCP1: number
	m_nScaleCP2: number
	m_flScaleVSizeByControlPointDistance: number
	m_flScaleVScrollByControlPointDistance: number
	m_flScaleVOffsetByControlPointDistance: number
	m_bUseScalarForTextureCoordinate: boolean
	m_flScalarAttributeTextureCoordScale: number
	m_nOrientationType: number
	m_bDrawAsOpaque: boolean
	m_bGenerateNormals: boolean
	m_bReverseOrder: boolean
	m_flRadiusScale: number
	m_bClosedLoop: boolean
	m_flDepthBias: number
}

declare class C_INIT_RadiusFromCPObject extends CParticleFunctionInitializer {
	m_nControlPoint: number
}

declare class C_INIT_SequenceLifeTime extends CParticleFunctionInitializer {
	m_flFramerate: number
}

declare class CSequenceFinishedAnimTag extends CAnimTagBase {
	readonly m_sequenceName: string
}

declare class CEnvWindShared {
	m_flStartTime: number
	m_iWindSeed: number
	m_iMinWind: number
	m_iMaxWind: number
	m_windRadius: number
	m_iMinGust: number
	m_iMaxGust: number
	m_flMinGustDelay: number
	m_flMaxGustDelay: number
	m_flGustDuration: number
	m_iGustDirChange: number
	readonly m_location: Vector
	m_iszGustSound: number
	m_iWindDir: number
	m_flWindSpeed: number
	readonly m_currentWindVector: Vector
	readonly m_CurrentSwayVector: Vector
	readonly m_PrevSwayVector: Vector
	m_iInitialWindDir: number
	m_flInitialWindSpeed: number
	readonly m_OnGustStart: CEntityIOOutput
	readonly m_OnGustEnd: CEntityIOOutput
	m_flVariationTime: number
	m_flSwayTime: number
	m_flSimTime: number
	m_flSwitchTime: number
	m_flAveWindSpeed: number
	m_bGusting: boolean
	m_flWindAngleVariation: number
	m_flWindSpeedVariation: number
	readonly m_iEntIndex: C_BaseEntity
}

declare class C_OP_RenderAsModels extends CParticleFunctionRenderer {
	readonly m_ModelList: ModelReference_t[]
	m_flModelScale: number
	m_bFitToModelSize: boolean
	m_bNonUniformScaling: boolean
	m_nSizeCullBloat: number
}

declare class C_OP_InterpolateRadius extends CParticleFunctionOperator {
	m_flStartTime: number
	m_flEndTime: number
	m_flStartScale: number
	m_flEndScale: number
	m_bEaseInAndOut: boolean
	m_flBias: number
}

declare class C_INIT_PositionPlaceOnGround extends CParticleFunctionInitializer {
	m_flOffset: number
	m_flMaxTraceLength: number
	readonly m_CollisionGroupName: number[]
	m_bKill: boolean
	m_bIncludeWater: boolean
	m_bSetNormal: boolean
	m_bSetPXYZOnly: boolean
	m_bTraceAlongNormal: boolean
	m_flOffsetByRadiusFactor: number
}

declare class AnimResourceIKLink_t {
	bone: number
	readonly kneeDir: Vector
}

declare class AnimResourceActivity_t {
	m_nActivity: number
	m_nFlags: number
	m_nWeight: number
}

declare class AnimResourceUserDifference_t {
	m_nType: number
}

declare class CAnnouncerDescriptor {
	readonly m_Replacement: string
	m_bUseDefaultAnnouncer: boolean
	readonly m_pAnnouncerItem: CEconItemView
	m_bItemOwnedByLocalPlayer: boolean
}

declare class C_OP_RenderClothForce extends CParticleFunctionRenderer {}

declare class C_OP_RenderSprites extends CBaseRendererSource2 {
	m_nSequenceOverride: number
	m_nOrientationType: number
	m_nOrientationControlPoint: number
	m_flMinSize: number
	m_flMaxSize: number
	m_flAlphaAdjustWithSizeAdjust: number
	m_flStartFadeSize: number
	m_flEndFadeSize: number
	m_flStartFadeDot: number
	m_flEndFadeDot: number
	m_flDepthBias: number
	m_flFinalTextureScaleU: number
	m_flFinalTextureScaleV: number
	m_flFinalTextureOffsetU: number
	m_flFinalTextureOffsetV: number
	m_flCenterXOffset: number
	m_flCenterYOffset: number
	m_flZoomAmount0: number
	m_flZoomAmount1: number
	m_bDistanceAlpha: boolean
	m_bSoftEdges: boolean
	m_flEdgeSoftnessStart: number
	m_flEdgeSoftnessEnd: number
	m_bOutline: boolean
	readonly m_OutlineColor: Color
	m_nOutlineAlpha: number
	m_flOutlineStart0: number
	m_flOutlineStart1: number
	m_flOutlineEnd0: number
	m_flOutlineEnd1: number
	m_bUseYawWithNormalAligned: boolean
	m_bNormalMap: boolean
	m_flBumpStrength: number
	m_flRadiusScale: number
}

declare class C_OP_TimeVaryingForce extends CParticleFunctionForce {
	m_flStartLerpTime: number
	readonly m_StartingForce: Vector
	m_flEndLerpTime: number
	readonly m_EndingForce: Vector
}

declare class ConceptHistory_t {
	timeSpoken: number
	// m_response: CRR_Response::ResponseEnum_t
}

declare class C_OP_RemapModelVolumetoCP extends CParticleFunctionPreEmission {
	m_nInControlPointNumber: number
	m_nOutControlPointNumber: number
	m_flInputMin: number
	m_flInputMax: number
	m_flOutputMin: number
	m_flOutputMax: number
}

declare class C_OP_RemapDirectionToCPToVector extends CParticleFunctionOperator {
	m_nCP: number
	m_flScale: number
	m_flOffsetRot: number
	readonly m_vecOffsetAxis: Vector
	m_bNormalize: boolean
}

declare class VPhysics2ShapeDef_t {
}

declare class CResponseQueue {
	readonly m_ExpresserTargets: CAI_Expresser[]
}

declare class TempViewerInfo_t {
	m_nGridX: number
	m_nGridY: number
	m_nRadius: number
	m_nViewerType: number
	m_bObstructedVision: boolean
	m_bValid: boolean
	m_bDirty: boolean
	flEndTime: number
	nFoWID: number
	readonly hOwner: C_BaseEntity
}

declare class C_OP_WorldCollideConstraint extends CParticleFunctionConstraint {}

declare class InfoForResourceTypeCVSoundStackScriptList {}

declare class C_OP_RemapDotProductToCP extends CParticleFunctionPreEmission {
	m_nInputCP1: number
	m_nInputCP2: number
	m_nOutputCP: number
	m_nOutVectorField: number
	readonly m_flInputMin: CParticleCollectionFloatInput
	readonly m_flInputMax: CParticleCollectionFloatInput
	readonly m_flOutputMin: CParticleCollectionFloatInput
	readonly m_flOutputMax: CParticleCollectionFloatInput
}

declare class C_OP_ColorInterpolate extends CParticleFunctionOperator {
	readonly m_ColorFade: Color
	m_flFadeStartTime: number
	m_flFadeEndTime: number
	m_bEaseInOut: boolean
}

declare class WorldNode_t {
	readonly m_nodeLightingInfo: BakedLightingInfo_t
}

declare class CNeuralNetAnimNode extends CAnimNodeBase {
	readonly m_weightsFile: string
	readonly m_testInputFile: string
	readonly m_boneMapFile: string
	readonly m_sensorRangeFile: string
}

declare class ItemDropData_t {
	readonly sItemNames: string[]
	flChance: number
	nReqLevel: number
	bMustBeChampion: boolean
}

declare class IParticleCollection {}

declare class C_INIT_CodeDriven extends CParticleFunctionInitializer {
	m_bPosition: boolean
	m_bPrevPosition: boolean
	m_bRadius: boolean
	m_bRotation: boolean
	m_bColor: boolean
	m_bAlpha: boolean
	m_bSequence: boolean
	m_bSequence1: boolean
}

declare class InfoForResourceTypeWorld_t {}

declare class InfoForResourceTypeCEntityLump {}

declare class VertexPositionNormal_t {
	readonly m_vPosition: Vector
	readonly m_vNormal: Vector
}

declare class CTwoBoneIKAnimNode extends CAnimNodeBase {
	readonly m_childID: AnimNodeID
	readonly m_ikChainName: string
	readonly m_attachmentName: string
	m_bMatchTargetOrientation: boolean
}

declare class MaterialParamVector_t extends MaterialParam_t {
}

declare class C_OP_RenderFogSprites extends C_OP_RenderSprites {
}

declare class C_OP_SetSingleControlPointPosition extends CParticleFunctionPreEmission {
	m_bUseWorldLocation: boolean
	m_bSetOnce: boolean
	m_nCP1: number
	readonly m_vecCP1Pos: Vector
	m_nHeadLocation: number
}

declare class CMoveSpeedCondition extends CAnimStateConditionBase {
	m_comparisonValue: number
}

declare class C_CEnvWindShared {
	m_flStartTime: number
	m_iWindSeed: number
	m_iMinWind: number
	m_iMaxWind: number
	m_windRadius: number
	m_iMinGust: number
	m_iMaxGust: number
	m_flMinGustDelay: number
	m_flMaxGustDelay: number
	m_flGustDuration: number
	m_iGustDirChange: number
	readonly m_location: Vector
	m_iszGustSound: number
	m_iWindDir: number
	m_flWindSpeed: number
	readonly m_currentWindVector: Vector
	readonly m_CurrentSwayVector: Vector
	readonly m_PrevSwayVector: Vector
	m_iInitialWindDir: number
	m_flInitialWindSpeed: number
	m_flVariationTime: number
	m_flSwayTime: number
	m_flSimTime: number
	m_flSwitchTime: number
	m_flAveWindSpeed: number
	m_bGusting: boolean
	m_flWindAngleVariation: number
	m_flWindSpeedVariation: number
	readonly m_iEntIndex: C_BaseEntity
}

declare class CCommentarySystem {
	m_afPlayersLastButtons: number
	m_iCommentaryNodeCount: number
	m_bCommentaryConvarsChanging: boolean
	m_iClearPressedButtons: number
	m_bCommentaryEnabledMidGame: boolean
	m_flNextTeleportTime: number
	m_iTeleportStage: number
	m_bCheatState: boolean
	m_bIsFirstSpawnGroupToLoad: boolean
	readonly m_hSpawnedEntities: C_BaseEntity[]
	readonly m_hCurrentNode: C_BaseEntity
	readonly m_hActiveCommentaryNode: C_BaseEntity
	readonly m_hLastCommentaryNode: C_BaseEntity
}

declare class CPlayerState {
	deadflag: boolean
	hltv: boolean
	readonly v_angle: QAngle
	readonly netname: string
	fixangle: number
	readonly anglechange: QAngle
	frags: number
	deaths: number
}

declare class C_OP_VelocityDecay extends CParticleFunctionOperator {
	m_flMinVelocity: number
}

declare class C_OP_LerpVector extends CParticleFunctionOperator {
	readonly m_vecOutput: Vector
	m_flStartTime: number
	m_flEndTime: number
	m_bScaleInitialRange: boolean
}

declare class C_INIT_RemapCPOrientationToRotations extends CParticleFunctionInitializer {
	m_nCP: number
	readonly m_vecRotation: Vector
	m_bUseQuat: boolean
	m_bWriteNormal: boolean
}

declare class VPhysXRange_t {
	m_flMin: number
	m_flMax: number
}

declare class CSchemaSystemInternalRegistration {
	readonly m_Vector2D: Vector2D
	readonly m_Vector: Vector
	readonly m_QAngle: QAngle
	readonly m_Color: Color
	readonly m_CUtlString: string
}

declare class sPendingTreeRemoval {
	nTeam: number
	nIndex: number
	fTimestamp: number
}

declare class CollisionGroupContext_t {
	m_nCollisionGroupNumber: number
}

declare class AnimResourceEncodeDifference_t {
}

declare class InfoForResourceTypeCVoxelVisibility {}

declare class CRandStopwatch extends CStopwatchBase {
	m_minInterval: number
	m_maxInterval: number
}

declare class C_OP_RenderModels extends CParticleFunctionRenderer {
	readonly m_ActivityName: number[]
	readonly m_EconSlotName: number[]
	readonly m_ModelList: ModelReference_t[]
	m_bIgnoreNormal: boolean
	m_bOrientZ: boolean
	m_bScaleAnimationRate: boolean
	m_bResetAnimOnStop: boolean
	m_bManualAnimFrame: boolean
	m_nSkin: number
	m_nLOD: number
	m_bOverrideTranslucentMaterials: boolean
	m_nSkinCP: number
	m_nModelCP: number
	m_nModelScaleCP: number
	m_flAnimationRate: number
	m_bAnimated: boolean
	m_bForceLoopingAnimation: boolean
	m_bForceDrawInterlevedWithSiblings: boolean
	m_bOriginalModel: boolean
	m_bSuppressTint: boolean
	m_bUseRawMeshGroup: boolean
	m_bDisableShadows: boolean
	readonly m_szRenderAttribute: number[]
	readonly m_MaterialVars: MaterialVariable_t[]
}

declare class SosEditItemInfo_t {
	itemType: SosEditItemType_t
	readonly itemName: string
	readonly itemTypeName: string
	readonly itemKVString: string
	readonly itemPos: Vector2D
}

declare class CFacingHeadingCondition extends CAnimStateConditionBase {
	m_comparisonValue: number
}

declare class CAnimNodeList {
	readonly m_nodes: CAnimNodeBase[]
}

declare class EventClientPollInput_t {
	readonly m_LoopState: EngineLoopState_t
	m_flRealTime: number
}

declare class FeFitInfluence_t {
	nVertexNode: number
	flWeight: number
	nMatrixNode: number
}

declare class C_OP_ConstantForce extends CParticleFunctionForce {
	m_nMinCol: number
	m_nMaxCol: number
	m_nMinRow: number
	m_nMaxRow: number
	readonly m_vForce: Vector
	m_flBlendValue: number
}

declare class C_INIT_CreateSequentialPathV2 extends CParticleFunctionInitializer {
	m_fMaxDistance: number
	m_flNumToAssign: number
	m_bLoop: boolean
	m_bCPPairs: boolean
	m_bSaveOffset: boolean
	readonly m_PathParams: CPathParameters
}

declare class C_INIT_RandomYaw extends CGeneralRandomRotation {}

declare class FeSimdQuad_t {
	readonly nNode: number[]
	// readonly vShape: FourVectors[]
}

declare class C_SingleplayRules extends C_GameRules {}

declare class EventClientPostAdvanceTick_t extends EventPostAdvanceTick_t {}

declare class GameChatLogEntry_t {
	m_nTeam: number
	m_nPlayerID: number
	readonly m_sText: string
	m_unGameTime: number
}

declare class CStopwatch extends CStopwatchBase {
	m_interval: number
}

declare class C_OP_WorldTraceConstraint extends CParticleFunctionConstraint {
	readonly m_vecCpOffset: Vector
	m_nCollisionMode: number
	m_flBounceAmount: number
	m_flSlideAmount: number
	m_flRadiusScale: number
	m_flRandomDirScale: number
	m_flCpMovementTolerance: number
	m_flTraceTolerance: number
	m_flMinSpeed: number
	m_bDecayBounce: boolean
	m_bKillonContact: boolean
	m_bConfirmCollision: boolean
	m_bSetNormal: boolean
	readonly m_CollisionGroupName: number[]
	m_bBrushOnly: boolean
}

declare class VPhysXBodyPart_t {
	m_nFlags: number
	m_flMass: number
	readonly m_rnShape: VPhysics2ShapeDef_t
	m_nCollisionAttributeIndex: number
	m_nReserved: number
	m_flInertiaScale: number
	m_flLinearDamping: number
	m_flAngularDamping: number
	m_bOverrideMassCenter: boolean
	readonly m_vMassCenterOverride: Vector
}

declare class CDecalInfo {
	m_flSpecExp: number
	m_flAnimationScale: number
	m_flAnimationLifeSpan: number
	m_flPlaceTime: number
	m_flFadeStartTime: number
	m_flFadeDuration: number
	m_nVBSlot: number
	m_nBoneIndex: number
	readonly m_pNext: CDecalInfo
	readonly m_pPrev: CDecalInfo
	m_nDecalMaterialIndex: number
}

declare class CPortraitData extends CBasePortraitData {
	readonly m_RenderList: C_BaseEntity[]
	readonly m_hHero: C_BaseEntity
}

declare class ParticleControlPointConfiguration_t {
	readonly m_name: string
	readonly m_drivers: ParticleControlPointDriver_t[]
	readonly m_previewState: ParticlePreviewState_t
}

declare class C_INIT_CreateFromPlaneCache extends CParticleFunctionInitializer {
	readonly m_vecOffsetMin: Vector
	readonly m_vecOffsetMax: Vector
	m_bUseNormal: boolean
}

declare class SequenceGroupResourceData_t {
	m_nFlags: number
}

declare class SeqResourcePoseParamDesc_t {
	m_flStart: number
	m_flEnd: number
	m_flLoop: number
	m_bLooping: boolean
}

declare class InfoForResourceTypeCModel {}

declare class PointDefinition_t {
	m_nControlPoint: number
	m_bLocalCoords: boolean
	readonly m_vOffset: Vector
}

declare class C_OP_ConstrainLineLength extends CParticleFunctionConstraint {
	m_flMinDistance: number
	m_flMaxDistance: number
}

declare class CRenderablePortraitData extends CBasePortraitData {
	m_nCurrentHeroID: number
	readonly m_hCallbackHandler: C_BaseEntity
	m_bHasHero: boolean
	m_bRotateBackgroundWithHero: boolean
	m_bTransparentBG: boolean
	m_bUseModelForParticles: boolean
	readonly m_hPortraitHero: C_BaseEntity
}

declare class C_OP_DriveCPFromGlobalSoundFloat extends CParticleFunctionPreEmission {
	m_nOutputControlPoint: number
	m_nOutputField: number
	m_flInputMin: number
	m_flInputMax: number
	m_flOutputMin: number
	m_flOutputMax: number
	readonly m_StackName: string
	readonly m_OperatorName: string
	readonly m_FieldName: string
}

declare class ConstraintSoundInfo {
	readonly m_vSampler: VelocitySampler
	// m_soundProfile: SimpleConstraintSoundProfile::SimpleConstraintsSoundProfileKeypoints_t
	readonly m_forwardAxis: Vector
	readonly m_iszTravelSoundFwd: string
	readonly m_iszTravelSoundBack: string
	readonly m_iszReversalSounds: string[]
	m_bPlayTravelSound: boolean
	m_bPlayReversalSound: boolean
}

declare class IHasAttributes {}

declare class C_OP_ForceControlPointStub extends CParticleFunctionPreEmission {
	m_ControlPoint: number
}

declare class CFinishedCondition extends CAnimStateConditionBase {
	m_bIsFinished: boolean
}

declare class RemnantData_t {
	readonly m_hRemnant: C_BaseEntity
	m_nProjectileHandle: number
}

declare class CParticleSystemDefinition extends IParticleSystemDefinition {
	m_nBehaviorVersion: number
	readonly m_PreEmissionOperators: CParticleFunctionPreEmission[]
	readonly m_Emitters: CParticleFunctionEmitter[]
	readonly m_Initializers: CParticleFunctionInitializer[]
	readonly m_Operators: CParticleFunctionOperator[]
	readonly m_ForceGenerators: CParticleFunctionForce[]
	readonly m_Constraints: CParticleFunctionConstraint[]
	readonly m_Renderers: CParticleFunctionRenderer[]
	readonly m_Children: ParticleChildrenInfo_t[]
	m_nFirstMultipleOverride_BackwardCompat: number
	m_nInitialParticles: number
	m_nMaxParticles: number
	readonly m_BoundingBoxMin: Vector
	readonly m_BoundingBoxMax: Vector
	m_nSnapshotControlPoint: number
	readonly m_pszTargetLayerID: string
	m_nTopology: ParticleTopology_t
	readonly m_pszCullReplacementName: string
	m_flCullRadius: number
	m_flCullFillCost: number
	m_nCullControlPoint: number
	m_nFallbackMaxCount: number
	readonly m_ConstantColor: Color
	readonly m_ConstantNormal: Vector
	m_flConstantRadius: number
	m_flConstantRotation: number
	m_flConstantRotationSpeed: number
	m_flConstantLifespan: number
	m_nConstantSequenceNumber: number
	m_nConstantSequenceNumber1: number
	m_nGroupID: number
	m_flMaximumTimeStep: number
	m_flMaximumSimTime: number
	m_flMinimumSimTime: number
	m_flMinimumTimeStep: number
	m_nMinimumFrames: number
	m_nMinCPULevel: number
	m_nMinGPULevel: number
	m_bViewModelEffect: boolean
	m_bScreenSpaceEffect: boolean
	readonly m_controlPointConfigurations: ParticleControlPointConfiguration_t[]
	m_flNoDrawTimeToGoToSleep: number
	m_flMaxDrawDistance: number
	m_flStartFadeDistance: number
	m_nSkipRenderControlPoint: number
	m_nAllowRenderControlPoint: number
	m_nAggregationMinAvailableParticles: number
	m_flAggregateRadius: number
	m_flStopSimulationAfterTime: number
	m_bShouldSort: boolean
	m_bShouldBatch: boolean
	m_flDepthSortBias: number
	m_bShouldHitboxesFallbackToRenderBounds: boolean
}

declare class C_OP_LockToBone extends CParticleFunctionOperator {
	m_nControlPointNumber: number
	m_flLifeTimeFadeStart: number
	m_flLifeTimeFadeEnd: number
	m_flJumpThreshold: number
	m_flPrevPosScale: number
	readonly m_HitboxSetName: number[]
	m_bRigid: boolean
	m_bUseBones: boolean
}

declare class EventClientSimulate_t extends EventSimulate_t {}

declare class WorldEnvironmentMap_t {
	m_bSkyRelight: boolean
	m_flInfluenceRadius: number
	readonly m_BoxProjection: AABB_t
}

declare class CDOTA_AttackRecord {
	readonly m_hSource: C_BaseEntity
	readonly m_hInflictor: C_BaseEntity
	readonly m_hTarget: C_BaseEntity
	readonly m_hProjectileSource: C_BaseEntity
	m_flDamage: number
	m_flOriginalDamage: number
	m_flDamagePhysical: number
	m_flDamagePhysical_IllusionDisplay: number
	m_flDamageMagical: number
	m_flDamageComposite: number
	m_flDamagePure: number
	m_iRecord: number
	m_iDamageCategory: number
	m_iFailType: number
	m_iDamageType: number
	m_iFlags: number
	m_animation: number
	readonly m_pOrb: CDOTA_Orb
	readonly m_pOrb2: CDOTA_Orb
	readonly m_bAttack: boolean
	readonly m_bRangedAttack: boolean
	readonly m_bDirectionalRangedAttack: boolean
	readonly m_bFakeAttack: boolean
	readonly m_bNeverMiss: boolean
	readonly m_bLethalAttack: boolean
	readonly m_bTriggeredAttack: boolean
	readonly m_bNoCooldown: boolean
	readonly m_bProcessProcs: boolean
	readonly m_bUseProjectile: boolean
	readonly m_bUseCastAttackOrb: boolean
	readonly m_bAutoCastAttack: boolean
	readonly m_bIgnoreArmor: boolean
	readonly m_bIgnoreObstructions: boolean
	m_nBashSource: number
	m_flAttackHeight: number
	m_flCriticalBonus: number
	m_flCriticalDamage: number
	m_flCriticalDisplay: number
	m_iProjectileSpeed: number
	readonly m_vForceDirectionOverride: Vector
	readonly m_vTargetLoc: Vector
	readonly m_vBlockLoc: Vector
	readonly m_iszAutoAttackRangedParticle: string
	m_iCustomFXIndex: number
}

declare class PointDefinitionWithTimeValues_t extends PointDefinition_t {
	m_flTimeDuration: number
}

declare class CTwistConstraint extends CBaseConstraint {
	m_bInverse: boolean
}

declare class sSpiritDef {
	nSpiritFXIndex: number
	nSpiritState: number
}

declare class C_DOTA_BaseNPC extends C_NextBotCombatCharacter {
	GetAbilityByName(abil_name: string): C_DOTABaseAbility
	GetAbility(abil_slot: number): C_DOTABaseAbility
	GetItemByName(item_name: string): C_DOTA_Item
	GetItemByNameInBackpack(item_name: string): C_DOTA_Item
	GetItemInSlot(item_slot: number): C_DOTA_Item
	GetBuffByName(buff_name: string): CDOTA_Buff
	AbsorbedDamage(damage: number, damage_type: DAMAGE_TYPES, from?: C_DOTA_BaseNPC): number
	WillIgnore(damage_type: DAMAGE_TYPES): boolean
	CalculateDamage(damage: number, damage_type: DAMAGE_TYPES, from?: C_DOTA_BaseNPC): number
	CalculateDamageByHand(from: C_DOTA_BaseNPC): number
	IsControllableByPlayer(player_id: number): boolean
	HasAttackCapability(attack_capatability: DOTAUnitAttackCapability_t): boolean
	HasMoveCapability(move_capatability: DOTAUnitMoveCapability_t): boolean
	IsUnitStateFlagSet(flag: number): boolean
	GetHealthAfter(time_seconds: number): number
	
	readonly m_bIsHero: boolean
	readonly m_bIsTower: boolean
	readonly m_bIsConsideredHero: boolean
	readonly m_bIsBuilding: boolean
	readonly m_bIsFort: boolean
	readonly m_bIsBarracks: boolean
	readonly m_bIsCreep: boolean
	readonly m_bIsCourier: boolean
	readonly m_bIsShop: boolean
	readonly m_bIsLaneCreep: boolean
	readonly m_bIsShrine: boolean
	readonly m_bIsWard: boolean
	readonly m_bIsStunned: boolean
	readonly m_bIsInvisible: boolean
	readonly m_bIsInvulnerable: boolean
	readonly m_bIsAttackImmune: boolean
	readonly m_bIsMagicImmune: boolean
	readonly m_bIsInFadeTime: boolean
	readonly m_bIsDeniable: boolean
	readonly m_bIsVisibleForEnemies: boolean
	readonly m_bIsTrueSightedForEnemies: boolean
	readonly m_bIsControllableByAnyPlayer: boolean
	readonly m_bHasAttackCapability: boolean
	readonly m_bHasMoveCapability: boolean
	readonly m_bIsRangedAttacker: boolean
	readonly m_bHasScepter: boolean
	readonly m_fAttackSpeed: number
	readonly m_fIncreasedAttackSpeed: number
	readonly m_fAttacksPerSecond: number
	readonly m_fIdealSpeed: number
	readonly m_fAttackRange: number
	readonly m_fEffectiveInvisibilityLevel: number
	
	m_bIsPhantom: boolean
	m_iUnitType: number
	m_bSelectionRingVisible: boolean
	m_iCurrentLevel: number
	m_bIsAncient: boolean
	m_bStolenScepter: boolean
	m_bIsNeutralUnitType: boolean
	m_bSelectOnSpawn: boolean
	m_bIgnoreAddSummonedToSelection: boolean
	m_bConsideredHero: boolean
	m_bUsesConstantGesture: boolean
	m_bUseHeroAbilityNumbers: boolean
	m_bHasSharedAbilities: boolean
	m_bIsSummoned: boolean
	m_bCanBeDominated: boolean
	m_bHasUpgradeableAbilities: boolean
	m_flHealthThinkRegen: number
	m_iIsControllableByPlayer64: bigint
	m_nHealthBarOffsetOverride: number
	m_bCanRespawn: boolean
	m_iAttackRange: number
	m_iCombatClass: number
	m_iCombatClassAttack: number
	m_iCombatClassDefend: number
	readonly m_colorGemColor: Color
	m_bHasColorGem: boolean
	m_iMoveSpeed: number
	m_flBaseAttackTime: number
	m_iUnitNameIndex: number
	m_iHealthBarOffset: number
	readonly m_iHealthBarHighlightColor: Color
	m_flMana: number
	m_flMaxMana: number
	m_flManaThinkRegen: number
	m_iBKBChargesUsed: number
	m_iBotDebugData: number
	m_bIsIllusion: boolean
	m_bHasClientSeenIllusionModifier: boolean
	readonly m_hAbilities: C_BaseEntity[]
	m_flInvisibilityLevel: number
	m_flHullRadius: number
	m_flCollisionPadding: number
	m_flRingRadius: number
	m_flProjectileCollisionSize: number
	readonly m_iszUnitName: string
	readonly m_iszParticleFolder: string
	readonly m_iszSoundSet: string
	readonly m_iszSelectionGroup: string
	readonly m_iszVoiceFile: string
	readonly m_iszGameSoundsFile: string
	readonly m_iszVoiceBackgroundSound: string
	readonly m_iszIdleSoundLoop: string
	readonly m_szUnitLabel: string
	m_nUnitLabelIndex: number
	readonly m_strAnimationModifier: string
	readonly m_TerrainSpecificFootstepEffect: string
	m_bUseCustomTerrainWeatherEffect: boolean
	m_bResourcesLoaded: boolean
	m_flTauntCooldown: number
	m_iCurShop: DOTA_SHOP_TYPE
	readonly m_szCurShopEntName: string
	m_iDayTimeVisionRange: number
	m_iNightTimeVisionRange: number
	m_iDamageMin: number
	m_iDamageMax: number
	m_iDamageBonus: number
	m_iTaggedAsVisibleByTeam: number
	readonly m_ModifierManager: CDOTA_ModifierManager
	readonly m_Inventory: C_DOTA_UnitInventory
	m_nUnitState64: bigint
	m_nUnitDebuffState: bigint
	m_bHasInventory: boolean
	m_iAcquisitionRange: number
	m_FoWViewID: number
	m_iPrevHealthPct: number
	m_iPrevLifeState: number
	m_iPrevTeam: number
	m_bPrevProvidesVision: boolean
	m_nPrevControllableMask: bigint
	readonly m_TagTime: CountdownTimer
	readonly m_ClickedTime: CountdownTimer
	readonly m_IdleRunTransitionTimer: CountdownTimer
	m_bAnimationTransitionActive: boolean
	readonly m_nAnimationTransitionPoseParameters: number[]
	m_flTimeSinceLastAbilityNag: number
	m_iAttackCapabilities: number
	m_iSpecialAbility: number
	m_iMoveCapabilities: number
	m_nPlayerOwnerID: number
	readonly m_iszMinimapIcon: string
	m_flMinimapIconSize: number
	m_bMinimapDisableTint: boolean
	m_bMinimapDisableRotation: boolean
	readonly m_colorHeroGlow: Color
	m_iNearShopMask: number
	m_nPoseParameterTurn: number
	m_flLean: number
	m_anglediff: number
	m_bInfoKeyActive: boolean
	m_bNewUpdateAssetModifiersNetworked: boolean
	m_bSuppressGlow: boolean
	m_bWasSinking: boolean
	m_flRangeDisplayDist: number
	readonly m_szDefaultIdle: string
	readonly m_damagetimer: CountdownTimer
	readonly m_vRenderOrigin: Vector
	m_fZDelta: number
	m_flDeathTime: number
	m_bBaseStatsChanged: boolean
	m_bNeedsSoundEmitterRefresh: boolean
	m_flPhysicalArmorValue: number
	m_flMagicalResistanceValue: number
	m_nPrevSequenceParity: number
	m_flPrevInvisLevel: number
	m_iPrevSequence: number
	readonly m_pLastWeatherEffectName: string
	readonly m_VoiceBackgroundSoundTimer: CountdownTimer
	m_bIsWaitingToSpawn: boolean
	m_nTotalDamageTaken: bigint
	m_flManaRegen: number
	m_flHealthRegen: number
	m_bIsMoving: boolean
	m_fRevealRadius: number
	m_bCombinerMaterialOverrideListChanged: boolean
	m_nBaseModelMeshCount: number
	m_nArcanaLevel: number
	m_nDefaultArcanaLevel: number
	readonly m_defaultColorGemColor: Color
	m_bHasBuiltWearableSpawnList: boolean
	m_NetworkActivity: number
	m_PrevNetworkActivity: number
	m_NetworkSequenceIndex: number
	m_bShouldDoFlyHeightVisual: boolean
	m_flStartSequenceCycle: number
	readonly m_hBackgroundSceneEnt: C_BaseEntity
	readonly m_hSpeakingSceneEnt: C_BaseEntity
	readonly m_hOldWearables: C_BaseEntity[]
	readonly m_CustomHealthLabel: number[]
	readonly m_CustomHealthLabelColor: Color
	readonly m_gibTintColor: Color
	m_bForceMaterialCombine: boolean
	m_bShouldDrawParticlesWhileHidden: boolean
	m_bIsClientThinkPending: boolean
	m_bActivityModifiersDirty: boolean
}

declare class C_NextBotCombatCharacter extends C_BaseCombatCharacter {
	readonly m_shadowTimer: CountdownTimer
	m_shadowType: ShadowType_t
	m_forcedShadowType: ShadowType_t
	m_bForceShadowType: boolean
	m_bInFrustum: boolean
	m_nInFrustumFrame: number
	m_flFrustumDistanceSqr: number
	m_nLod: number
}

declare class CDOTA_ModifierManager {
	readonly m_vecBuffs: CDOTA_Buff[]
	
	readonly m_hModifierParent: C_BaseEntity
	m_nHasTruesightForTeam: number
	m_nHasTruesightForTeamValid: number
	m_nProvidesFOWPositionForTeam: number
	m_nProvidesFOWPositionForTeamValid: number
	m_iBuffIndex: number
	m_iLockRefCount: number
}

declare class C_DOTA_UnitInventory {
	readonly m_SharedCooldownList: sSharedCooldownInfo[]
	readonly m_hItems: C_BaseEntity[]
	readonly m_bItemQueried: boolean[]
	m_iParity: number
	readonly m_hInventoryParent: C_BaseEntity
	m_bIsActive: boolean
	m_bStashEnabled: boolean
	readonly m_hTransientCastItem: C_BaseEntity
	m_bSendChangedMsg: boolean
}

declare class CNewParticleEffect extends IParticleEffect {
	readonly m_pNext: CNewParticleEffect
	readonly m_pPrev: CNewParticleEffect
	readonly m_pParticles: IParticleCollection
	readonly m_pDebugName: string
	readonly m_bDontRemove: boolean
	readonly m_bRemove: boolean
	readonly m_bNeedsBBoxUpdate: boolean
	readonly m_bIsFirstFrame: boolean
	readonly m_bAutoUpdateBBox: boolean
	readonly m_bAllocated: boolean
	readonly m_bSimulate: boolean
	readonly m_bShouldPerformCullCheck: boolean
	readonly m_bForceNoDraw: boolean
	readonly m_bDisableAggregation: boolean
	readonly m_bShouldSimulateDuringGamePaused: boolean
	readonly m_bShouldCheckFoW: boolean
	readonly m_vSortOrigin: Vector
	readonly m_pOwningParticleProperty: CParticleProperty
	readonly m_LastMin: Vector
	readonly m_LastMax: Vector
	m_nSplitScreenUser: number
	readonly m_vecAggregationCenter: Vector
	m_RefCount: number
}

declare class C_INIT_RandomRotation extends CGeneralRandomRotation {}

declare class CAnimTagSpan {
	readonly m_id: AnimTagID
	m_fStartCycle: number
	m_fDuration: number
}

declare class CFloatAnimParameter extends CAnimParameterBase {
	m_fDefaultValue: number
	m_fMinValue: number
	m_fMaxValue: number
	m_bInterpolate: boolean
}

declare class CFeIndexedJiggleBone {
	m_nNode: number
	m_nJiggleParent: number
	readonly m_jiggleBone: CFeJiggleBone
}

declare class RnBlendVertex_t {
	m_nWeight0: number
	m_nIndex0: number
	m_nWeight1: number
	m_nIndex1: number
	m_nWeight2: number
	m_nIndex2: number
	m_nFlags: number
	m_nTargetIndex: number
}

declare class CDirectionalBlendAnimNode extends CAnimNodeBase {
	readonly m_animNamePrefix: string
	m_blendValueSource: AnimValueSource
	readonly m_param: AnimParamID
	m_bLoop: boolean
	m_bLockBlendOnReset: boolean
	m_playbackSpeed: number
	readonly m_damping: CAnimInputDamping
}

declare class CBoolAnimParameter extends CAnimParameterBase {
	m_bDefaultValue: boolean
}

declare class SeqResourceCmdSeqDesc_t {
	readonly m_flags: SeqResourceSeqDesc_t_Flag_t
	readonly m_transition: SeqResourceTransition_t
	m_nFrameRangeSequence: number
	m_nFrameCount: number
	m_flFPS: number
	m_nSubCycles: number
	m_numLocalResults: number
}

declare class MaterialParamString_t extends MaterialParam_t {
}

declare class CHitBoxSetList {
	readonly m_HitBoxSets: CHitBoxSet[]
}

declare class CHitBoxSet {
	readonly m_name: string
	m_nNameHash: number
	readonly m_HitBoxes: CHitBox[]
	readonly m_SourceFilename: string
}

declare class VsInputSignature_t {
	readonly m_elems: VsInputSignatureElement_t[]
}

declare class InfoForResourceTypeCPostProcessingResource {}

declare class C_OP_FadeInSimple extends CParticleFunctionOperator {
	m_flFadeInTime: number
}

declare class C_INIT_CreateWithinBox extends CParticleFunctionInitializer {
	readonly m_vecMin: Vector
	readonly m_vecMax: Vector
	m_nControlPointNumber: number
	m_bLocalSpace: boolean
}

declare class InfoOverlayData_t {
	m_flWidth: number
	m_flHeight: number
	m_flDepth: number
	readonly m_vUVStart: Vector2D
	readonly m_vUVEnd: Vector2D
	m_nRenderOrder: number
	m_nSequenceOverride: number
}

declare class C_OP_RenderScreenVelocityRotate extends CParticleFunctionRenderer {
	m_flRotateRateDegrees: number
	m_flForwardDegrees: number
}

declare class C_INIT_RandomNamedModelSequence extends C_INIT_RandomNamedModelElement {}

declare class C_INIT_RemapCPtoVector extends CParticleFunctionInitializer {
	m_nCPInput: number
	readonly m_vInputMin: Vector
	readonly m_vInputMax: Vector
	readonly m_vOutputMin: Vector
	readonly m_vOutputMax: Vector
	m_flStartTime: number
	m_flEndTime: number
	m_bScaleInitialRange: boolean
	m_bOffset: boolean
	m_bAccelerate: boolean
	m_nLocalSpaceCP: number
	m_flRemapBias: number
}

declare class C_INIT_RandomModelSequence extends CParticleFunctionInitializer {
	readonly m_ActivityName: number[]
}

declare class CVoxelVisibility {
	readonly m_blockOffset: number[]
	readonly m_clusters: voxel_vis_cluster_t[]
	readonly m_vMinBounds: Vector
	readonly m_vMaxBounds: Vector
	m_flGridSize: number
	m_nNodeCount: number
	m_nRegionCount: number
	m_nPVSCompression: voxel_vis_compression_t
	m_nTreeSize: number
	m_nPVSSizeCompressed: number
}

declare class voxel_vis_cluster_t {
	m_nBlockIndex: number
	m_nOffsetIntoBlock: number
}

declare class SelectedEditItemInfo_t {
	readonly m_EditItems: SosEditItemInfo_t[]
}

declare class C_LightGlowOverlay extends CGlowOverlay {
	readonly m_vecOrigin: Vector
	readonly m_vecDirection: Vector
	m_nMinDist: number
	m_nMaxDist: number
	m_nOuterMaxDist: number
	m_bOneSided: boolean
	m_bModulateByDot: boolean
}

declare class sPendingTreeModelChange {
	nTeam: number
	nIndex: number
	readonly strModel: string
	nChangeToken: number
}

declare class IControlPointEditorData {}

declare class CSSDSMsg_PostLayer extends CSSDSMsg_LayerBase {}

declare class CSequenceAnimNode extends CAnimNodeBase {
	readonly m_sequenceName: string
	m_playbackSpeed: number
	m_bLoop: boolean
}

declare class VPhysXConstraint2_t {
	m_nFlags: number
	m_nParent: number
	m_nChild: number
	// m_params: VPhysXConstraintParams_t::EnumFlags0_t
}

declare class CAttributeContainer extends CAttributeManager {
	readonly m_Item: CEconItemView
}

declare class C_OP_LockPoints extends CParticleFunctionOperator {
	m_nMinCol: number
	m_nMaxCol: number
	m_nMinRow: number
	m_nMaxRow: number
	m_nControlPoint: number
	m_flBlendValue: number
}

declare class C_OP_RemapCPtoVelocity extends CParticleFunctionOperator {
	m_nCPInput: number
	m_bScaleCurrent: boolean
}

declare class IrradVolume_t {
	m_flFadeMinDist: number
	m_flFadeMaxDist: number
	readonly m_vMinBounds: Vector
	readonly m_vMaxBounds: Vector
	m_nFlags: IrradVolumeFlags_t
	m_nSortKey: number
	m_nPlanes: number
}

declare class EventPreDataUpdate_t {
	m_nEntityIndex: number
}

declare class Relationship_t {
	readonly entity: C_BaseEntity
	classType: Class_T
	faction: number
	disposition: Disposition_t
	priority: number
}

declare class C_OP_RenderTrails extends CBaseTrailRenderer {
	m_bEnableFadingAndClamping: boolean
	m_flMaxLength: number
	m_flMinLength: number
	m_bIgnoreDT: boolean
	m_flConstrainRadiusToLengthRatio: number
	m_flLengthScale: number
	m_flRadiusTaper: number
	m_flLengthFadeInTime: number
	m_flForwardShift: number
	m_bFlipUVBasedOnPitchYaw: boolean
	m_bUseTopology: boolean
}

declare class C_OP_SetFromCPSnapshot extends CParticleFunctionOperator {
	m_nControlPointNumber: number
	m_nLocalSpaceCP: number
	m_bRandom: boolean
	m_bReverse: boolean
	m_nRandomSeed: number
}

declare class World_t {
	readonly m_builderParams: WorldBuilderParams_t
	readonly m_worldLightingInfo: BakedLightingInfo_t
}

declare class CVectorAnimParameter extends CAnimParameterBase {
	readonly m_defaultValue: Vector
	m_bInterpolate: boolean
}

declare class InfoForResourceTypeVBitmapFontRuntimeData_t {}

declare class TimedBalanceRecord_t {
	m_nNetWorthDelta: number
	m_nExperienceDelta: number
	m_flBalanceMetric: number
	m_nBonusGoldRadiant: number
	m_nBonusGoldDire: number
}

declare class C_OP_DistanceBetweenCPs extends CParticleFunctionOperator {
	m_nStartCP: number
	m_nEndCP: number
	m_flInputMin: number
	m_flInputMax: number
	m_flOutputMin: number
	m_flOutputMax: number
	m_flMaxTraceLength: number
	m_flLOSScale: number
	readonly m_CollisionGroupName: number[]
	m_bLOS: boolean
	m_bScaleInitialRange: boolean
	m_bScaleCurrent: boolean
}

declare class AnimResourceBone_t {
	m_parent: number
	readonly m_pos: Vector
	m_flags: number
}

declare class C_INIT_StatusEffect extends CParticleFunctionInitializer {
	m_nDetail2Combo: Detail2Combo_t
	m_flDetail2Rotation: number
	m_flDetail2Scale: number
	m_flDetail2BlendFactor: number
	m_flColorWarpIntensity: number
	m_flDiffuseWarpBlendToFull: number
	m_flEnvMapIntensity: number
	m_flAmbientScale: number
	readonly m_specularColor: Color
	m_flSpecularScale: number
	m_flSpecularExponent: number
	m_flSpecularExponentBlendToFull: number
	m_flSpecularBlendToFull: number
	readonly m_rimLightColor: Color
	m_flRimLightScale: number
	m_flReflectionsTintByBaseBlendToNone: number
	m_flMetalnessBlendToFull: number
	m_flSelfIllumBlendToFull: number
}

declare class CControlValueCondition extends CAnimStateConditionBase {
	m_sourceControlValue: ControlValue
	m_comparisonValueType: number
	m_comparisonFixedValue: number
	m_comparisonControlValue: ControlValue
	readonly m_comparisonParamID: AnimParamID
}

declare class PostProcessingResource_t {
	m_bHasTonemapParams: boolean
	readonly m_toneMapParams: PostProcessingTonemapParameters_t
	m_bHasBloomParams: boolean
	readonly m_bloomParams: PostProcessingBloomParameters_t
	m_bHasVignetteParams: boolean
	readonly m_vignetteParams: PostProcessingVignetteParameters_t
	m_nColorCorrectionVolumeDim: number
}

declare class FeSimdTri_t {
	readonly nNode: number[]
	readonly v2: FourVectors2D
}

declare class CHeadlightEffect extends CFlashlightEffect {}

declare class CDOTA_CombatLogQueryProgress {
	m_nPlayerID: number
	m_nQueryID: number
	m_nQueryRank: number
	m_nMultiQueryID: number
	readonly m_szRankIdentifier: number[]
}

declare class sSpiritInfo {
	readonly vTargetLoc: Vector
	readonly hTarget: C_BaseEntity
	bHit: boolean
	iHealAmount: number
	nFXAmbientIndex: number
}

declare class C_OP_SetControlPointRotation extends CParticleFunctionPreEmission {
	readonly m_vecRotAxis: Vector
	m_flRotRate: number
	m_nCP: number
	m_nLocalCP: number
}

declare class AttachmentData_t {
	readonly m_vInfluenceOffsets: Vector[]
	readonly m_influenceWeights: number[]
	readonly m_nFlags: number[]
	m_nInfluences: number
}

declare class PRTMatrixData_t {
	m_nTransmitters: number
	m_nReceivers: number
	m_nTextureWidth: number
	m_nTextureHeight: number
	m_nTextureDepth: number
	m_nPrimaryRelightDataOffset: bigint
	m_nPrimaryRelightDataSize: bigint
	m_nPrimaryRelightDataSizeUncompressed: bigint
	m_nSecondaryRelightDataOffset: bigint
	m_nSecondaryRelightDataSize: bigint
	m_nSecondaryRelightDataSizeUncompressed: bigint
	m_nPrimarySkyRelightDataOffset: bigint
	m_nPrimarySkyRelightDataSize: bigint
	m_nPrimarySkyRelightDataSizeUncompressed: bigint
	m_nSecondarySkyRelightDataOffset: bigint
	m_nSecondarySkyRelightDataSize: bigint
	m_nSecondarySkyRelightDataSizeUncompressed: bigint
	m_nTransmitterPositionsOffset: bigint
	m_nTransmitterPositionsSize: bigint
	m_nTransmitterPositionsSizeUncompressed: bigint
	m_nReceiverPositionsOffset: bigint
	m_nReceiverPositionsSize: bigint
	m_nReceiverPositionsSizeUncompressed: bigint
	m_nTransmitterMaterialsOffset: bigint
	m_nTransmitterMaterialsSize: bigint
	m_nTransmitterMaterialsSizeUncompressed: bigint
	m_nReceiverIndicesOffset: bigint
	m_nReceiverIndicesSize: bigint
	m_nReceiverIndicesSizeUncompressed: bigint
}

declare class CSingleplayRules extends CGameRules {}

declare class C_OP_PercentageBetweenCPs extends CParticleFunctionOperator {
	m_flInputMin: number
	m_flInputMax: number
	m_flOutputMin: number
	m_flOutputMax: number
	m_nStartCP: number
	m_nEndCP: number
	m_bScaleInitialRange: boolean
	m_bScaleCurrent: boolean
	m_bActiveRange: boolean
	m_bRadialCheck: boolean
}

declare class NodeData_t {
	m_Flags: number
	m_nParent: number
	readonly m_vOrigin: Vector
	readonly m_vMinBounds: Vector
	readonly m_vMaxBounds: Vector
	m_flMinimumDistance: number
}

declare class CSpeedScaleAnimNode extends CAnimNodeBase {
	readonly m_childID: AnimNodeID
	readonly m_param: AnimParamID
}

declare class CStringAnimTag extends CAnimTagBase {}

declare class ExtraVertexStreamOverride_t extends BaseSceneObjectOverride_t {
	m_nSubSceneObject: number
	m_nDrawCallIndex: number
	m_nAdditionalMeshDrawPrimitiveFlags: MeshDrawPrimitiveFlags_t
	readonly m_extraBufferBinding: RenderBufferBinding_t
}

declare class EventServerProcessNetworking_t extends EventSimulate_t {}

declare class CInterpolatedValue {
	m_flStartTime: number
	m_flEndTime: number
	m_flStartValue: number
	m_flEndValue: number
	m_nInterpType: number
}

declare class CMotorController {
	m_speed: number
	m_maxTorque: number
	readonly m_axis: Vector
	m_inertiaFactor: number
}

declare class CPathHelperAnimNode extends CAnimNodeBase {
	readonly m_childID: AnimNodeID
	m_flStoppingRadius: number
	m_flStoppingSpeedScale: number
}

declare class CLocomotionBase extends INextBotComponent {}

declare class C_OP_RemapParticleCountOnScalarEndCap extends CParticleFunctionOperator {
	m_nInputMin: number
	m_nInputMax: number
	m_flOutputMin: number
	m_flOutputMax: number
	m_bBackwards: boolean
	m_bScaleInitialRange: boolean
	m_bScaleCurrent: boolean
}

declare class NextBotGroundLocomotion extends CLocomotionBase {
	readonly m_vVelocity: Vector
	readonly m_vPriorPos: Vector
	readonly m_vLastValidPos: Vector
	readonly m_vAcceleration: Vector
	m_flDesiredSpeed: number
	m_flActualSpeed: number
	m_flMaxRunSpeed: number
	m_flForwardLean: number
	m_flSideLean: number
	readonly m_desiredLean: QAngle
	m_bIsJumping: boolean
	m_bIsJumpingAcrossGap: boolean
	readonly m_hGround: C_BaseEntity
	readonly m_vGroundNormal: Vector
	readonly m_vGroundSampleLastPos: Vector
	m_bIsClimbingUpToLedge: boolean
	readonly m_vLedgeJumpGoalPos: Vector
	m_bIsUsingFullFeetTrace: boolean
	readonly m_inhibitObstacleAvoidanceTimer: CountdownTimer
	readonly m_vMoveVector: Vector
	m_flMoveYaw: number
	readonly m_vAccumApproachVectors: Vector
	m_flAccumApproachWeights: number
	m_bRecomputePostureOnCollision: boolean
	readonly m_ignorePhysicsPropTimer: CountdownTimer
	readonly m_hIgnorePhysicsProp: C_BaseEntity
	m_actJump: number
	m_actJumpAcrossGap: number
}

declare class CNavVolumeMarkupVolume extends CNavVolume {}

declare class C_OP_RandomForce extends CParticleFunctionForce {
	readonly m_MinForce: Vector
	readonly m_MaxForce: Vector
}

declare class EntityKeyValueData_t {
}

declare class C_OP_SetControlPointToImpactPoint extends CParticleFunctionPreEmission {
	m_nCPOut: number
	m_nCPIn: number
	m_flUpdateRate: number
	m_flTraceLength: number
	m_flOffset: number
	readonly m_vecTraceDir: Vector
	readonly m_CollisionGroupName: number[]
	m_bSetToEndpoint: boolean
}

declare class CPostGraphIKChainBlendTag extends CAnimTagBase {
	readonly m_ChainName: string
	m_flBlendAmountOnEnter: number
	m_flBlendAmountOnExit: number
}

declare class CTagCondition extends CAnimStateConditionBase {
	readonly m_tagID: AnimTagID
	m_comparisonValue: boolean
}

declare class VPhysXDiskCapsule_t extends VPhysXDiskShapeHeader_t {
	readonly m_vEnds: Vector[]
	m_flRadius: number
}

declare class FeTaperedCapsuleStretch_t {
	readonly nNode: number[]
	nCollisionMask: number
	nDummy: number
	readonly flRadius: number[]
	flStickiness: number
}

declare class CDOTAGamerules extends CTeamplayRules {
	readonly __m_pChainEntity: CNetworkVarChainer
	m_iMiscHeroPickCounter: number
	readonly m_hEndGameCinematicEntity: C_BaseEntity
	readonly m_EndGameCinematicTimer: CountdownTimer
	readonly m_hOverlayHealthBarUnit: C_BaseEntity
	m_nOverlayHealthBarType: number
	m_bIsInCinematicMode: boolean
	m_bIsInClientSideCinematicMode: boolean
	m_bFreeCourierMode: boolean
	m_nStartingGold: number
	m_nGoldPerTick: number
	m_flGoldTickTime: number
	m_unFanfareGoodGuys: number
	m_unFanfareBadGuys: number
	m_flFanfareTime: number
	m_iFOWDefeatedTempViewer: number
	m_nGameState: number
	m_nHeroPickState: DOTA_HeroPickState
	m_flStateTransitionTime: number
	m_flOverride_dota_hero_selection_time: number
	m_flOverride_dota_pregame_time: number
	m_flOverride_dota_postgame_time: number
	m_flOverride_dota_strategy_time: number
	m_flOverride_dota_team_showcase_duration: number
	m_flOverride_dota_rune_spawn_time: number
	m_flOverride_dota_tree_regrow_time: number
	m_iGameMode: number
	readonly m_hGameModeEntity: C_BaseEntity
	readonly m_hCustomHeroPickRulesEntity: C_BaseEntity
	m_flHeroPickStateTransitionTime: number
	m_iPlayerIDsInControl: bigint
	m_bSameHeroSelectionEnabled: boolean
	m_bUseCustomHeroXPValue: boolean
	m_bUseBaseGoldBountyOnHeroes: boolean
	m_bUseUniversalShopMode: boolean
	m_bHideKillMessageHeaders: boolean
	m_flHeroMinimapIconScale: number
	m_flCreepMinimapIconScale: number
	m_bCreepSpawningEnabled: boolean
	m_flRuneMinimapIconScale: number
	readonly m_CustomVictoryMessage: number[]
	m_flCustomGameEndDelay: number
	m_flCustomGameSetupAutoLaunchDelay: number
	m_flCustomGameSetupTimeout: number
	m_flCustomVictoryMessageDuration: number
	m_flHeroSelectPenaltyTime: number
	m_bCustomGameSetupAutoLaunchEnabled: boolean
	m_bCustomGameTeamSelectionLocked: boolean
	m_bCustomGameEnablePickRules: boolean
	m_bCustomGameAllowHeroPickMusic: boolean
	m_bCustomGameAllowMusicAtGameStart: boolean
	m_bCustomGameAllowBattleMusic: boolean
	m_bCustomGameDisableIK: boolean
	m_iCMModePickBanOrder: number
	m_iCDModePickBanOrder: number
	m_iPauseTeam: number
	m_nGGTeam: number
	m_flGGEndsAtTime: number
	m_bWhiteListEnabled: boolean
	readonly m_bItemWhiteList: bigint[]
	m_nLastHitUIMode: number
	m_bHUDTimerTutorialMode: boolean
	readonly m_HeroPickMiscTimer: CountdownTimer
	readonly m_ExtraTimeTimer: CountdownTimer
	readonly m_fExtraTimeRemaining: number[]
	m_bRDFirstThink: boolean
	readonly m_RDMessageSent: boolean[]
	m_bHeroRespawnEnabled: boolean
	m_bIsRandomingEnabled: boolean
	readonly m_HeroPickPhaseBitfield: number[]
	readonly m_bHasSwapped: boolean[]
	readonly m_iCaptainPlayerIDs: number[]
	readonly m_BannedHeroes: number[]
	readonly m_SelectedHeroes: number[]
	m_iActiveTeam: number
	m_iStartingTeam: number
	m_iPenaltyLevelRadiant: number
	m_iPenaltyLevelDire: number
	m_bTier3TowerDestroyed: boolean
	m_nSeriesType: number
	m_nRadiantSeriesWins: number
	m_nDireSeriesWins: number
	readonly m_vecAvailableHerosPerPlayerID: CHeroesPerPlayer[]
	readonly m_vecLockedHerosByPlayerID: CHeroesPerPlayer[]
	readonly m_vecDisabledRandomHerosByPlayerID: CHeroesPerPlayer[]
	readonly m_CustomGameForceSelectHero: number[]
	m_flGoldTime: number
	m_flXPTime: number
	m_flCreepSpawntime: number
	m_flAnnounceStartTime: number
	m_iGoodTomeCount: number
	m_iBadTomeCount: number
	m_flPreGameStartTime: number
	m_flGameStartTime: number
	m_flGameEndTime: number
	m_flGameLoadTime: number
	readonly m_iCustomGameScore: number[]
	m_nCustomGameDifficulty: number
	m_bEnemyModifiersEnabled: boolean
	m_iWaves: number
	m_iCreepUpgradeState: number
	m_fGoodGlyphCooldown: number
	m_fBadGlyphCooldown: number
	readonly m_flGlyphCooldowns: number[]
	m_fGoodRadarCooldown: number
	m_fBadRadarCooldown: number
	readonly m_flRadarCooldowns: number[]
	m_bIsNightstalkerNight: boolean
	m_bIsTemporaryNight: boolean
	m_bIsTemporaryDay: boolean
	m_nRiverType: number
	m_flGoldRedistributeTime: number
	readonly m_nGoldToRedistribute: number[]
	m_flNextPreGameThink: number
	m_flNextAllDraftGoldThink: number
	m_flTimeEnteredState: number
	m_unRiverAccountID: number
	m_ulRiverItemID: bigint
	readonly m_vecItemStockInfo: CDOTA_ItemStockInfo[]
	readonly m_AssassinMiniGameNetData: DOTA_AssassinMinigameNetworkState
	m_nGameWinner: number
	m_unMatchID64: bigint
	m_bMatchSignoutComplete: boolean
	readonly m_hSideShop1: C_BaseEntity
	readonly m_hSideShop2: C_BaseEntity
	readonly m_hSecretShop1: C_BaseEntity
	readonly m_hSecretShop2: C_BaseEntity
	readonly m_hTeamFountains: C_BaseEntity[]
	readonly m_hTeamForts: C_BaseEntity[]
	readonly m_hTeamShops: C_BaseEntity[]
	readonly m_hAnnouncerGood: C_BaseEntity
	readonly m_hAnnouncerBad: C_BaseEntity
	readonly m_hAnnouncerSpectator: C_BaseEntity
	readonly m_hAnnouncerGood_KillingSpree: C_BaseEntity
	readonly m_hAnnouncerBad_KillingSpree: C_BaseEntity
	readonly m_hAnnouncerSpectator_KillingSpree: C_BaseEntity
	m_fGameTime: number
	m_fTimeOfDay: number
	m_iNetTimeOfDay: number
	m_nLoadedPlayers: number
	m_nExpectedPlayers: number
	m_iMinimapDebugGridState: number
	m_iFoWFrameNumber: number
	m_bIsStableMode: boolean
	m_bGamePaused: boolean
	m_fPauseRawTime: number
	m_fPauseCurTime: number
	m_fUnpauseRawTime: number
	m_fUnpauseCurTime: number
	readonly m_vWeatherWindDirection: Vector
	m_bGameTimeFrozen: boolean
	m_nCustomGameFowTeamCount: number
	m_bUseAlternateABRules: boolean
	m_bLobbyIsAssociatedWithGame: boolean
	readonly m_BotDebugTimer: CountdownTimer
	readonly m_BotDebugPushLane: number[]
	readonly m_BotDebugDefendLane: number[]
	readonly m_BotDebugFarmLane: number[]
	readonly m_BotDebugRoam: number[]
	readonly m_hBotDebugRoamTarget: C_BaseEntity[]
	readonly m_BotDebugRoshan: number[]
	m_nRoshanRespawnPhase: ERoshanSpawnPhase
	m_flRoshanRespawnPhaseEndTime: number
	readonly m_AbilityDraftAbilities: CDOTA_AbilityDraftAbilityState[]
	m_bAbilityDraftCurrentPlayerHasPicked: boolean
	m_nAbilityDraftPlayerTracker: number
	m_nAbilityDraftRoundNumber: number
	m_nAbilityDraftAdvanceSteps: number
	m_nAbilityDraftPhase: number
	readonly m_nAbilityDraftHeroesChosen: number[]
	m_nARDMHeroesPrecached: number
	m_fLastARDMPrecache: number
	m_nAllDraftPhase: number
	m_bAllDraftRadiantFirst: boolean
	m_bAllowOverrideVPK: boolean
	readonly m_nARDMHeroesRemaining: number[]
	readonly m_hGlobalPetList: C_BaseEntity[]
	readonly m_vecHeroPickRecord: HeroPickRecord_t[]
	readonly m_vecHeroDeathRecord: HeroDeathRecord_t[]
	readonly m_BadResultPositionTriggers: C_BaseEntity[]
	readonly m_RoshanPositionTriggers: C_BaseEntity[]
	readonly m_hRuneSpawners: C_BaseEntity[]
	readonly m_hBountyRuneSpawners: C_BaseEntity[]
	readonly m_hNeutralSpawners: C_BaseEntity[][]
	readonly m_hAncientSpawners: C_BaseEntity[][]
	m_iPreviousRune1: number
	m_iPreviousRune2: number
	m_iAllStarMatchReady: number
	m_fNextPowerupRuneSpawnTime: number
	m_fNextBountyRuneSpawnTime: number
	m_fNextBountyRunePrepTime: number
	m_bFirstPowerupRune: boolean
	m_bFirstBountyRune: boolean
	m_bBountyRuneLocation_1: boolean
	m_bBountyRuneLocation_2: boolean
	m_bBountyRuneLocation_3: boolean
	m_bBountyRuneLocation_4: boolean
	m_fNextSnapshotTime: number
	readonly m_hRoshanSpawner: C_BaseEntity
	m_iPreviousSpectators: number
	m_bTeammateEvaluationMatch: boolean
	readonly m_rgAssignedPlayerID: number[]
	m_nMaxSpectators: number
	readonly m_hDroppedItems: C_BaseEntity[]
	readonly m_hWards: C_BaseEntity[]
	readonly m_hGameEvents: C_BaseEntity
	readonly m_Towers: C_BaseEntity[]
	readonly m_TeamTowers: C_BaseEntity[][]
	readonly m_TeamTowerPositions: Vector[][]
	readonly m_TeamTowerLevels: number[][]
	readonly m_TeamTowerLanes: number[][]
	readonly m_TeamBarracks: C_BaseEntity[][]
	readonly m_TeamShrines: C_BaseEntity[][]
	readonly m_TempDayTimer: CountdownTimer
	readonly m_TempNightTimer: CountdownTimer
	readonly m_NightstalkerNightTimer: CountdownTimer
	readonly m_TempRiverTimer: CountdownTimer
	readonly m_bUseLenientAFK: boolean[]
	m_bFirstBlood: boolean
	m_nFirstBloodTime: number
	readonly m_CheckIdleTimer: CountdownTimer
	m_nAnnounceHeroPickRadiantPlayerID: number
	m_nAnnounceHeroPickDirePlayerID: number
	m_nRecordBalanceTime: number
	readonly m_pszLastUsedAbility: string[]
	readonly m_reconnectinfos: CDOTA_ReconnectInfo[]
	readonly m_hEnemyCreepsInBase: C_BaseEntity[][]
	readonly m_bTeamHasAbandonedPlayer: boolean[]
	m_bLobbyHasLeaverDetected: boolean
	m_bGameIsForcedSafeToLeave: boolean
	m_bLobbyHasDicardMatchResults: boolean
	readonly m_nTeamRoshanKills: number[]
	m_iGameEndReason: number
	m_flPauseTime: number
	m_pausingPlayerId: number
	m_unpausingPlayerId: number
	readonly m_nPausesRemaining: number[]
	readonly m_nLastPauseTime: number[]
	readonly m_bNotifiedPlayerLeaverStatus: boolean[]
	m_bUploadedReplay: boolean
	m_flLobbyWaitTime: number
	m_bGameWasLoaded: boolean
	m_nLoadPauseFrameCount: number
	m_flStateFallbackTransitionTime: number
	readonly m_timerFinishReplay: CountdownTimer
	readonly m_vecChatLog: GameChatLogEntry_t[]
	m_bFatalErrorAbortGame: boolean
	m_bFillEmptySlotsWithBots: boolean
	m_dotaMapSpawnGroup: number
	m_lobbyType: number
	m_lobbyLeagueID: number
	readonly m_lobbyGameName: number[]
	readonly m_vecHeroStatueLiked: CHeroStatueLiked[]
	readonly m_CustomGameTeamMaxPlayers: number[]
	readonly m_iMutations: number[]
	readonly m_vecIngameEvents: C_BaseEntity[]
	m_nPrimaryIngameEventIndex: number
	readonly m_NeutralSpawnBoxes: AABB_t[]
	readonly m_flLastItemSuggestionRequestTime: number[]
}

declare class C_OP_RenderGrid extends CParticleFunctionRenderer {
}

declare class C_INIT_RandomTrailLength extends CParticleFunctionInitializer {
	m_flMinLength: number
	m_flMaxLength: number
	m_flLengthRandExponent: number
}

declare class C_OP_ConstrainDistanceToPath extends CParticleFunctionConstraint {
	m_fMinDistance: number
	m_flMaxDistance0: number
	m_flMaxDistanceMid: number
	m_flMaxDistance1: number
	readonly m_PathParameters: CPathParameters
	m_flTravelTime: number
}

declare class sLoadoutItem {
	readonly name: string
	iFlags: number
	bPurchased: boolean
}

declare class CRagdoll extends IRagdoll {
	readonly m_ragdoll: ragdoll_t
	readonly m_mins: Vector
	readonly m_maxs: Vector
	readonly m_origin: Vector
	m_lastUpdate: number
	m_allAsleep: boolean
	readonly m_vecLastOrigin: Vector
	m_flLastOriginChangeTime: number
	m_flAwakeTime: number
}

declare class C_INIT_CreateAlongPath extends CParticleFunctionInitializer {
	m_fMaxDistance: number
	readonly m_PathParams: CPathParameters
	m_bUseRandomCPs: boolean
	readonly m_vEndOffset: Vector
	m_bSaveOffset: boolean
}

declare class C_OP_PlayEndCapWhenFinished extends CParticleFunctionPreEmission {
	m_bFireOnEmissionEnd: boolean
	m_bIncludeChildren: boolean
}

declare class CAudioAnimTag extends CAnimTagBase {
	readonly m_clipName: string
}

declare class CRenderMesh {
	readonly m_constraints: CBaseConstraint[]
	readonly m_skeleton: CRenderSkeleton
}

declare class constraint_hingeparams_t {
	readonly worldPosition: Vector
	readonly worldAxisDirection: Vector
	readonly hingeAxis: constraint_axislimit_t
	readonly constraint: constraint_breakableparams_t
}

declare class MaterialDrawDescriptor_t {
	m_nBaseVertex: number
	m_nVertexCount: number
	m_nStartIndex: number
	m_nIndexCount: number
	m_nStartInstance: number
	m_nInstanceCount: number
	m_flUvDensity: number
	m_nPrimitiveType: number
	m_bAlphaBlendedMaterial: number
	m_nFlags: number
	m_padding: number
	readonly m_hInputLayoutHandle: number[]
	readonly m_indexBuffer: RenderBufferBinding_t
}

declare class C_BaseAnimatingOverlayController extends C_BaseAnimatingController {
	readonly m_AnimOverlay: CAnimationLayer[]
}

declare class C_OP_RenderStandardLight extends CParticleFunctionRenderer {
	m_nLightType: number
	readonly m_Color: Color
	m_flIntensity: number
	m_bCastShadows: boolean
	m_flTheta: number
	m_flPhi: number
	m_flRadiusMultiplier: number
	m_flFalloffLinearity: number
	m_bRenderDiffuse: boolean
	m_bRenderSpecular: boolean
	readonly m_lightCookie: string
}

declare class C_OP_CPOffsetToPercentageBetweenCPs extends CParticleFunctionOperator {
	m_flInputMin: number
	m_flInputMax: number
	m_flInputBias: number
	m_nStartCP: number
	m_nEndCP: number
	m_nOffsetCP: number
	m_nOuputCP: number
	m_nInputCP: number
	m_bRadialCheck: boolean
	m_bScaleOffset: boolean
	readonly m_vecOffset: Vector
}

declare class C_OP_ColorInterpolateRandom extends CParticleFunctionOperator {
	readonly m_ColorFadeMin: Color
	readonly m_ColorFadeMax: Color
	m_flFadeStartTime: number
	m_flFadeEndTime: number
	m_bEaseInOut: boolean
}

declare class C_OP_ParentVortices extends CParticleFunctionForce {
	m_flForceScale: number
	readonly m_vecTwistAxis: Vector
	m_bFlipBasedOnYaw: boolean
}

declare class C_OP_MaintainEmitter extends CParticleFunctionEmitter {
	m_nParticlesToMaintain: number
	m_flStartTime: number
	m_nScaleControlPoint: number
	m_nScaleControlPointField: number
	m_flEmissionRate: number
	m_nSnapshotControlPoint: number
	m_bEmitInstantaneously: boolean
}

declare class SeqResourceCmdLayer_t {
	m_cmd: number
	m_nLocalReference: number
	m_nLocalBonemask: number
	m_nDstResult: number
	m_nSrcResult: number
	m_bSpline: boolean
	m_flVar1: number
	m_flVar2: number
	m_nLineNumber: number
}

declare class C_OP_RemapCPOrientationToRotations extends CParticleFunctionOperator {
	m_nCP: number
	readonly m_vecRotation: Vector
	m_bUseQuat: boolean
	m_bWriteNormal: boolean
}

declare class CSosSoundEventGroupListSchema {
	readonly m_groupList: CSosSoundEventGroupSchema[]
}

declare class SeqResourcePoseSetting_t {
	m_flValue: number
	m_bX: boolean
	m_bY: boolean
	m_bZ: boolean
	m_eType: number
}

declare class InfoForResourceTypeIMaterial2 {}

declare class c_vehicleview_t {
	bClampEyeAngles: boolean
	flPitchCurveZero: number
	flPitchCurveLinear: number
	flRollCurveZero: number
	flRollCurveLinear: number
	flFOV: number
	flYawMin: number
	flYawMax: number
	flPitchMin: number
	flPitchMax: number
}

declare class C_INIT_CreateGrid extends CParticleFunctionInitializer {
	m_nControlPoint00: number
	readonly m_vLocalOffset00: Vector
	m_nControlPoint01: number
	readonly m_vLocalOffset01: Vector
	m_nControlPoint10: number
	readonly m_vLocalOffset10: Vector
	m_nControlPoint11: number
	readonly m_vLocalOffset11: Vector
	m_nNumCols: number
	m_nNumRows: number
	m_bHorizontalInterleaved: boolean
}

declare class AnimResourceMorphDifference_t {
}

declare class FeSimdFitMatrices_t {
	// readonly vCenter: FourVectors
	readonly nEnd: number[]
	readonly nCtrl: number[]
	readonly AqqInv: FourCovMatrices3
}

declare class CNavVolumeBreadthFirstSearch extends CNavVolumeCalculatedVector {
	readonly m_vStartPos: Vector
	m_flSearchDist: number
}

declare class C_OP_RemapDotProductToScalar extends CParticleFunctionOperator {
	m_nInputCP1: number
	m_nInputCP2: number
	m_flInputMin: number
	m_flInputMax: number
	m_flOutputMin: number
	m_flOutputMax: number
	m_bUseParticleVelocity: boolean
	m_bScaleInitialRange: boolean
	m_bScaleCurrent: boolean
	m_bActiveRange: boolean
	m_bUseParticleNormal: boolean
}

declare class C_OP_SetPerChildControlPoint extends CParticleFunctionOperator {
	m_nChildGroupID: number
	m_nFirstControlPoint: number
	m_nNumControlPoints: number
	m_nParticleIncrement: number
	m_nFirstSourcePoint: number
	m_bSetOrientation: boolean
	m_bNumBasedOnParticleCount: boolean
}

declare class CDOTA_ActionRunner {
	readonly m_pEventContext: CModifierParams
}

declare class C_OP_MaintainSequentialPath extends CParticleFunctionOperator {
	m_fMaxDistance: number
	m_flNumToAssign: number
	m_flCohesionStrength: number
	m_flTolerance: number
	m_bLoop: boolean
	m_bUseParticleCount: boolean
	readonly m_PathParams: CPathParameters
}

declare class C_OP_RemapVectorComponentToScalar extends CParticleFunctionOperator {
	m_nComponent: number
}

declare class CAimMatrixAnimNode extends CAnimNodeBase {
	readonly m_childID: AnimNodeID
	readonly m_sequenceName: string
	m_fAngleIncrement: number
	m_target: AnimVectorSource
	readonly m_param: AnimParamID
	readonly m_attachmentName: string
	m_blendMode: AimMatrixBlendMode
	readonly m_boneMaskName: string
	m_bResetBase: boolean
	m_bLockWhenWaning: boolean
	readonly m_damping: CAnimInputDamping
}

declare class InfoForResourceTypeProcessingGraphInstance_t {}

declare class C_CSequenceTransitioner {
	readonly m_animationQueue: CAnimationLayer[]
	m_bIsInSimulation: boolean
	m_flSimOrRenderTime: number
	m_flInterpolatedTime: number
}

declare class C_OP_Decay extends CParticleFunctionOperator {}

declare class CSpotlightTraceCacheEntry {
	readonly m_origin: Vector
	m_radius: number
}

declare class PlayerResourcePlayerEventData_t {
	m_iEventID: number
	m_iEventPoints: number
	m_iEventPremiumPoints: number
	m_iEventWagerTokensRemaining: number
	m_iEventWagerTokensMax: number
	m_iEventEffectsMask: number
	m_iEventRanks: number
	m_iRankWagersAvailable: number
	m_iRankWagersMax: number
	m_bIsEventOwned: boolean
	m_iFavoriteTeam: number
	m_iFavoriteTeamQuality: number
	m_iEventPointAdjustmentsRemaining: number
}

declare class locksound_t {
	readonly sLockedSound: string
	readonly sLockedSentence: string
	readonly sUnlockedSound: string
	readonly sUnlockedSentence: string
	iLockedSentence: number
	iUnlockedSentence: number
	flwaitSound: number
	flwaitSentence: number
	bEOFLocked: number
	bEOFUnlocked: number
}

declare class C_INIT_ColorLitPerParticle extends CParticleFunctionInitializer {
	readonly m_ColorMin: Color
	readonly m_ColorMax: Color
	readonly m_TintMin: Color
	readonly m_TintMax: Color
	m_flTintPerc: number
	m_nTintBlendMode: ParticleColorBlendMode_t
	m_flLightAmplification: number
}

declare class C_INIT_CreatePhyllotaxis extends CParticleFunctionInitializer {
	m_nControlPointNumber: number
	m_nScaleCP: number
	m_nComponent: number
	m_fRadCentCore: number
	m_fRadPerPoint: number
	m_fRadPerPointTo: number
	m_fpointAngle: number
	m_fsizeOverall: number
	m_fRadBias: number
	m_fMinRad: number
	m_fDistBias: number
	m_bUseLocalCoords: boolean
	m_bUseWithContEmit: boolean
	m_bUseOrigRadius: boolean
}

declare class AnimResourceEncodedFrames_t {
	m_nFrames: number
	m_nFramesPerBlock: number
	readonly m_usageDifferences: AnimResourceEncodeDifference_t
}

declare class C_OP_TeleportBeam extends CParticleFunctionOperator {
	m_nCPPosition: number
	m_nCPVelocity: number
	m_nCPMisc: number
	m_nCPColor: number
	m_nCPInvalidColor: number
	m_nCPExtraArcData: number
	readonly m_vGravity: Vector
	m_flArcMaxDuration: number
	m_flSegmentBreak: number
	m_flArcSpeed: number
	m_flAlpha: number
}

declare class C_OP_FadeOutSimple extends CParticleFunctionOperator {
	m_flFadeOutTime: number
}

declare class C_INIT_SetHitboxToClosest extends CParticleFunctionInitializer {
	m_nControlPointNumber: number
	m_nDesiredHitbox: number
	m_flHitBoxScale: number
	readonly m_HitboxSetName: number[]
	m_bUseBones: boolean
}

declare class C_INIT_CreateOnModelAtHeight extends CParticleFunctionInitializer {
	m_bUseBones: boolean
	m_bForceZ: boolean
	m_nControlPointNumber: number
	m_nHeightCP: number
	m_bUseWaterHeight: boolean
	m_flDesiredHeight: number
	m_flHitBoxScale: number
	readonly m_HitboxSetName: number[]
}

declare class C_INIT_RingWave extends CParticleFunctionInitializer {
	m_nControlPointNumber: number
	m_nOverrideCP: number
	m_nOverrideCP2: number
	m_flParticlesPerOrbit: number
	m_flInitialRadius: number
	m_flThickness: number
	m_flInitialSpeedMin: number
	m_flInitialSpeedMax: number
	m_flRoll: number
	m_flPitch: number
	m_flYaw: number
	m_bEvenDistribution: boolean
	m_bXYVelocityOnly: boolean
}

declare class VPhysXJoint_t {
	m_nType: number
	m_nBody1: number
	m_nBody2: number
	m_nFlags: number
	m_bEnableCollision: boolean
	m_bEnableLinearLimit: boolean
	readonly m_LinearLimit: VPhysXRange_t
	m_bEnableLinearMotor: boolean
	readonly m_vLinearTargetVelocity: Vector
	m_flMaxForce: number
	m_bEnableSwingLimit: boolean
	readonly m_SwingLimit: VPhysXRange_t
	m_bEnableTwistLimit: boolean
	readonly m_TwistLimit: VPhysXRange_t
	m_bEnableAngularMotor: boolean
	readonly m_vAngularTargetVelocity: Vector
	m_flMaxTorque: number
	m_flLinearFrequency: number
	m_flLinearDampingRatio: number
	m_flAngularFrequency: number
	m_flAngularDampingRatio: number
}

declare class CDOTA_Tree extends CObstructionObject {
	m_bStanding: boolean
	m_bSpecialConsume: boolean
	m_bSpecialPathing: boolean
	m_nOccluderIndex: number
}

declare class C_INIT_RemapNamedModelMeshGroupToScalar extends C_INIT_RemapNamedModelElementToScalar {}

declare class RnMeshDesc_t extends RnShapeDesc_t {
	readonly m_Mesh: RnMesh_t
}

declare class C_DOTABaseAbility extends C_BaseEntity {
	GetSpecialValue(special_name: string, level?: number): number
	IsManaEnough(owner: C_DOTA_BaseNPC): boolean
	
	readonly m_pAbilityData: DOTAAbilityData_t
	readonly m_fCastPoint: number
	readonly m_fChannelTime: number
	readonly m_iAbilityDamage: number
	readonly m_bIsHidden: boolean
	
	m_bAltCastState: boolean
	m_iEnemyLevel: number
	m_iMaxLevel: number
	m_bCanLearn: boolean
	m_flUpgradeBlend: number
	m_bRefCountsModifiers: boolean
	m_bHidden: boolean
	m_bOldHidden: boolean
	m_bActivated: boolean
	m_bOldActivated: boolean
	m_iDirtyButtons: number
	m_bPerformDirtyParity: boolean
	m_iLevel: number
	m_bAbilityLevelDirty: boolean
	m_bToggleState: boolean
	m_bInAbilityPhase: boolean
	m_fCooldown: number
	m_iCastRange: number
	m_flCooldownLength: number
	m_iManaCost: number
	m_bAutoCastState: boolean
	m_flChannelStartTime: number
	m_flCastStartTime: number
	m_bInIndefiniteCooldown: boolean
	m_bFrozenCooldown: boolean
	m_flOverrideCastPoint: number
	m_bStolen: boolean
	m_bReplicated: boolean
	m_nAbilityCurrentCharges: number
	m_flLastCastClickTime: number
}

declare class C_DOTA_Ability_Special_Bonus_Unique_Ember_Spirit_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Item extends C_DOTABaseAbility {
	m_bCombinable: boolean
	m_bPermanent: boolean
	m_bStackable: boolean
	m_bRecipe: boolean
	m_iSharability: number
	m_bDroppable: boolean
	m_bPurchasable: boolean
	m_bSellable: boolean
	m_bInitiallySellable: boolean
	m_bForceUnsellable: boolean
	m_bRequiresCharges: boolean
	m_bDisplayCharges: boolean
	m_bHideCharges: boolean
	m_bKillable: boolean
	m_bDisassemblable: boolean
	m_bAlertable: boolean
	m_iInitialCharges: number
	m_bCastOnPickup: boolean
	m_iCurrentCharges: number
	m_iSecondaryCharges: number
	m_bCombineLocked: boolean
	m_flPurchaseTime: number
	m_flAssembledTime: number
	m_bPurchasedWhileDead: boolean
	m_bCanBeUsedOutOfInventory: boolean
	m_bItemEnabled: boolean
	m_flEnableTime: number
	m_bDisplayOwnership: boolean
	readonly m_hOldOwnerEntity: C_BaseEntity
	m_iOldCharges: number
	m_iPlayerOwnerID: number
	readonly m_vecPreGameTransferPlayerIDs: number[]
}

declare class C_DOTA_Ability_Riki_BlinkStrike extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Mirana_Arrow extends C_DOTABaseAbility {
	readonly m_vStartPos: Vector
	m_nFXIndex: number
	readonly hAlreadyHitList: C_BaseEntity[]
}

declare class CDOTA_Ability_Frostivus2018_Centaur_Stampede extends C_DOTABaseAbility {
	duration: number
	base_damage: number
	strength_damage: number
	slow_duration: number
	readonly m_hHitEntities: C_BaseEntity[]
	armor_amount: number
	armor_duration: number
	max_armor_stacks: number
}

declare class C_DOTA_Ability_Special_Bonus_Unique_Witch_Doctor_1 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Juggernaut_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Lion extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Gyrocopter_6 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Attack_Range_250 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Intelligence_14 extends C_DOTABaseAbility {}

declare class CDOTA_Item_RefresherOrb_Shard extends C_DOTA_Item {}

declare class C_DOTA_Item_Reaver extends C_DOTA_Item {}

declare class C_DOTA_Ability_TemplarAssassin_SelfTrap extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Frostivus2018_Huskar_Inner_Fire extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Lina_1 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Terrorblade_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Agility_14 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Cleave_130 extends C_DOTABaseAbility {}

declare class CDOTA_Item_Recipe_Octarine_Core extends C_DOTA_Item {}

declare class C_DOTA_Item_Quarterstaff extends C_DOTA_Item {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Leshrac_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Spectre extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Cast_Range_250 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_LoneDruid_SpiritBear_Defender extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_PhantomAssassin_Blur extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Lich_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Enchantress_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Bristleback extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Slardar_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Attack_Speed_80 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_HP_700 extends C_DOTABaseAbility {}

declare class C_Guts extends C_BaseAnimating {}

declare class C_DOTA_Ability_MonkeyKing_Spring_Early extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Invoker_Empty1 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Life_Stealer_Open_Wounds extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Dazzle_Shallow_Grave extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Nian_Leap extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_ShadowShaman_MassSerpentWard extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Pangolier_6 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Crystal_Maiden_1 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Templar_Assassin extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Arc_Warden_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Corruption_4 extends C_DOTABaseAbility {}

declare class CBodyComponentSkeletonInstance extends CBodyComponent {
	readonly m_skeletonInstance: CSkeletonInstance
	readonly __m_pChainEntity: CNetworkVarChainer
}

declare class C_DOTA_Item_RingOfHealth extends C_DOTA_Item {}

declare class C_DOTA_Ability_Phoenix_Supernova extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Phoenix_SunRayStop extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_EarthSpirit_BoulderSmash extends C_DOTABaseAbility {
	speed: number
	rock_damage: number
	radius: number
	rock_search_aoe: number
	unit_distance: number
	rock_distance: number
	m_nProjectileID: number
	readonly m_hCursorTarget: C_BaseEntity
	m_bUsedStone: boolean
	readonly m_hTarget: C_BaseEntity
	m_bTargetStone: boolean
}

declare class C_DOTA_Ability_Huskar_Inner_Vitality extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Necrolyte_Sadist_Stop extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Centaur_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Drow_Ranger_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Axe_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Undying_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Lifestealer extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Techies_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_MP_250 extends C_DOTABaseAbility {}

declare class C_DOTA_Item_CraniumBasher extends C_DOTA_Item {}

declare class C_DOTA_Ability_Animation_Attack extends C_DOTABaseAbility {
	animation_time: number
}

declare class C_DOTA_Ability_Windrunner_Shackleshot extends C_DOTABaseAbility {
	shackle_count: number
	readonly m_vArrowStartPos: Vector
	readonly m_hTarget: C_BaseEntity
}

declare class C_DOTA_Ability_Frostivus2018_TrollWarlord_BattleTrance extends C_DOTABaseAbility {
	trance_duration: number
}

declare class C_DOTA_Ability_Special_Bonus_Unique_Kunkka_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_All_Stats_10 extends C_DOTABaseAbility {}

declare class C_DOTA_Item_Recipe_NullTalisman extends C_DOTA_Item {}

declare class C_DOTA_Ability_Bloodseeker_Rupture extends C_DOTABaseAbility {
	max_charges_scepter: number
	charge_restore_time_scepter: number
}

declare class C_DOTA_Ability_Axe_BerserkersCall extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Creature_Ice_Breath extends C_DOTABaseAbility {
	speed: number
	projectile_count: number
	rotation_angle: number
	damage: number
	radius: number
	slow_duration: number
	readonly ctTimer: CountdownTimer
	readonly m_vecStartRot: Vector
	readonly m_vecEndRot: Vector
}

declare class C_DOTA_Ability_Corspselord_Revive extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Abaddon_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_MP_1000 extends C_DOTABaseAbility {}

declare class C_DOTA_Item_DemonEdge extends C_DOTA_Item {}

declare class C_DOTA_Item_Recipe_PhaseBoots extends C_DOTA_Item {}

declare class C_DOTA_Ability_Phoenix_SunRayToggleMoveEmpty extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Seasonal_Summon_Snowman extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Timbersaw extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Drow_Ranger_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Batrider_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Attack_Speed_140 extends C_DOTABaseAbility {}

declare class C_DOTA_LightInfo extends C_BaseEntity/*, CLightInfoBase*/ {
	// Low-priority parent definition [CLightInfoBase]
	readonly m_origin2D: Vector2D
	readonly m_Color: Color[]
	readonly m_LightScale: number[]
	readonly m_AmbientColor: Color[]
	readonly m_AmbientScale: number[]
	readonly m_ShadowColor: Color[]
	readonly m_ShadowSecondaryColor: Color[]
	readonly m_ShadowScale: number[]
	readonly m_ShadowGroundScale: number[]
	readonly m_SpecularColor: Color[]
	readonly m_flSpecularPower: number[]
	readonly m_flSpecularIndependence: number[]
	readonly m_SpecularDirection: Vector[]
	readonly m_InspectorSpecularDirection: Vector[]
	readonly m_LightDirection: Vector[]
	readonly m_AmbientDirection: Vector[]
	readonly m_FogColor: Color[]
	readonly m_FogStart: number[]
	readonly m_FogEnd: number[]
	readonly m_HeightFogValue: number[]
	readonly m_HeightFogColor: Color[]
	readonly m_FoWDarkness: number[]
	readonly m_FoWColorR: number[]
	readonly m_FoWColorG: number[]
	readonly m_FoWColorB: number[]
	readonly m_InspectorViewFogColor: Color[]
	readonly m_windAngle: QAngle
	readonly m_flWindAmount: number[]
	m_flMinWind: number
	m_flMaxWind: number
	m_flMinGust: number
	m_flMaxGust: number
	m_flMinGustDelay: number
	m_flMaxGustDelay: number
	m_flGustDuration: number
	m_flGustDirChange: number
	readonly m_skyboxAngle: QAngle[]
	readonly m_vSkyboxTintColor: Color[]
	m_nSkyboxFogType: number
	m_flSkyboxAngularFogMaxEnd: number
	m_flSkyboxAngularFogMaxStart: number
	m_flSkyboxAngularFogMinStart: number
	m_flSkyboxAngularFogMinEnd: number
	readonly m_vHeightFogColor: Color[]
	m_flFogMaxZ: number
	readonly m_flFogDensity: number[]
	m_flFogFalloff: number
	m_flFogLayer0Rotation: number
	m_flFogLayer0Scale: number
	readonly m_flFoglayer0ScrollU: number[]
	readonly m_flFoglayer0ScrollV: number[]
	m_flFogLayer1Rotation: number
	m_flFogLayer1Scale: number
	readonly m_flFoglayer1ScrollU: number[]
	readonly m_flFoglayer1ScrollV: number[]
	m_flFogExclusionInnerRadius: number
	m_flFogExclusionHeightBias: number
	m_flCausticSpeedScale: number
	m_flCausticAmplitudeScale: number
	m_flColorWarpBlendToFull: number
	m_fInnerRadius: number
	m_fOuterRadius: number
	m_flLightning_specular_pow_scale_min: number
	m_flLightning_specular_pow_scale_max: number
	readonly m_lightningColor: Color
	m_flLightningIntensityMin: number
	m_flLightningIntensityMax: number
	m_flLightningElevation: number
	m_flLightningSpecularIntensity: number
	m_flFarZOverride: number
	m_flAmbientShadowAmount: number
	m_nWeatherType: number
	readonly m_WeatherEffect: string
	m_flLightning_period_min: number
	m_flLightning_period_max: number
	m_flLightning_duration_min: number
	m_flLightning_duration_max: number
	m_flLightning_fluctuation_min: number
	m_flLightning_fluctuation_max: number
	readonly m_pszLightningSound: number[]
	m_flNextLightningStartTime: number
	m_flNextLightningEndTime: number
	m_flLightningFluctuationTimeStart: number
	m_flLightningFluctuationTimeEnd: number
	m_flLightningNumFluctuations: number
	m_flNextLightningSoundTime: number
	m_bPlayLightingSound: boolean
	m_flLightningEventMagnitude: number
	m_flLightningScale: number
	m_flLightningFluctuation: number
	m_flLightningAngle: number
	m_flLightningEventPercentage: number
}

declare class C_BaseClientUIEntity extends C_BaseModelEntity {
	m_bEnabled: boolean
	readonly m_DialogXMLName: string
	readonly m_PanelClassName: string
	readonly m_PanelID: string
}

declare class C_DOTA_Item_Ethereal_Blade extends C_DOTA_Item {}

declare class C_DOTA_Ability_Skywrath_Mage_Ancient_Seal extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Seasonal_Decorate_Tree extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Warlock_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Alchemist extends C_DOTABaseAbility {}

declare class C_SpotlightEnd extends C_BaseModelEntity {
	m_flLightScale: number
	m_Radius: number
}

declare class C_DOTA_Item_Infused_Raindrop extends C_DOTA_Item {}

declare class C_DOTA_Item_Recipe_Ethereal_Blade extends C_DOTA_Item {}

declare class C_DOTA_Item_Recipe_OblivionStaff extends C_DOTA_Item {}

declare class C_DOTA_Ability_Frostivus2018_Weaver_GeminateAttack extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Death_Prophet_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Cooldown_Reduction_40 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Attack_Damage_150 extends C_DOTABaseAbility {}

declare class C_PointCamera extends C_BaseEntity {
	m_FOV: number
	m_Resolution: number
	m_bFogEnable: boolean
	readonly m_FogColor: Color
	m_flFogStart: number
	m_flFogEnd: number
	m_flFogMaxDensity: number
	m_bActive: boolean
	m_bUseScreenAspectRatio: boolean
	m_flAspectRatio: number
	m_bNoSky: boolean
	m_fBrightness: number
	m_flZFar: number
	m_flZNear: number
	m_flOverrideShadowFarZ: number
	m_TargetFOV: number
	m_DegreesPerSecond: number
	m_bIsOn: boolean
	readonly m_pNext: C_PointCamera
}

declare class C_DOTA_Item_Recipe_AeonDisk extends C_DOTA_Item {}

declare class C_DOTA_Item_Recipe_CraniumBasher extends C_DOTA_Item {}

declare class C_DOTA_Ability_Rubick_Hidden2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Ogre_Magi_Fireblast extends C_DOTABaseAbility {
	m_nMostRecentMulticastCount: number
}

declare class C_DOTA_Ability_Necrolyte_Heartstopper_Aura extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Axe extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Invoker_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Exp_Boost_60 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_MP_Regen_14 extends C_DOTABaseAbility {}

declare class C_FoWRevealerEntity extends C_BaseEntity {
	m_unViewerTeam: number
	m_nVisionRange: number
}

declare class C_FlexCycler extends C_BaseFlex {
	m_flextime: number
	readonly m_flextarget: number[]
	m_blinktime: number
	m_looktime: number
	readonly m_lookTarget: Vector
	m_speaktime: number
	m_istalking: number
	m_phoneme: number
	readonly m_iszSentence: string
	m_sentence: number
}

declare class C_LightEntity extends C_BaseModelEntity {
	readonly m_CLightComponent: CLightComponent
}

declare class CLightComponent extends CEntityComponent {
	readonly __m_pChainEntity: CNetworkVarChainer
	readonly m_Color: Color
	m_flBrightness: number
	m_flBrightnessMult: number
	m_flRange: number
	m_flFalloff: number
	m_flAttenuation0: number
	m_flAttenuation1: number
	m_flAttenuation2: number
	m_flTheta: number
	m_flPhi: number
	m_nCascades: number
	m_nCastShadows: number
	m_nShadowWidth: number
	m_nShadowHeight: number
	m_bRenderDiffuse: boolean
	m_nRenderSpecular: number
	m_flOrthoLightWidth: number
	m_flOrthoLightHeight: number
	m_nStyle: number
	readonly m_Pattern: string
	m_flShadowCascadeDistance0: number
	m_flShadowCascadeDistance1: number
	m_flShadowCascadeDistance2: number
	m_flShadowCascadeDistance3: number
	m_nShadowCascadeResolution0: number
	m_nShadowCascadeResolution1: number
	m_nShadowCascadeResolution2: number
	m_nShadowCascadeResolution3: number
	m_nBakeLightIndex: number
	m_flBakeLightIndexScale: number
	m_bUsesIndexedBakedLighting: boolean
	m_bRenderToCubemaps: boolean
	m_nDirectLight: number
	m_nIndirectLight: number
	m_flFadeMinDist: number
	m_flFadeMaxDist: number
	m_flShadowFadeMinDist: number
	m_flShadowFadeMaxDist: number
	m_bEnabled: boolean
	m_bFlicker: boolean
	readonly m_vPrecomputedBoundsMins: Vector
	readonly m_vPrecomputedBoundsMaxs: Vector
	m_flPrecomputedMaxRange: number
	readonly m_vPrecomputePosition: Vector
	readonly m_vPrecomputeDirection: Vector
	readonly m_vPrecomputeUp: Vector
	m_nFogLightingMode: number
	m_flFogContributionStength: number
	readonly m_SkyColor: Color
	m_flSkyIntensity: number
	m_bLowerHemisphereIsBlack: boolean
	readonly m_SkyAmbientBounce: Color
	m_bUnlitShadows: boolean
}

declare class C_DOTA_Item_Recipe_SangeAndYasha extends C_DOTA_Item {}

declare class C_DOTA_Item_Recipe_Radiance extends C_DOTA_Item {}

declare class C_DOTA_Item_Recipe_Bracer extends C_DOTA_Item {}

declare class C_DOTA_Ability_MonkeyKing_QuadrupleTap extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Axe_BattleHunger extends C_DOTABaseAbility {
	damage_per_second: number
}

declare class C_DOTA_Ability_Lua extends C_DOTABaseAbility {}

declare class C_DOTA_Item_GreaterClarity extends C_DOTA_Item {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Dazzle_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Drow_Ranger_1 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Medusa_5 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_HP_300 extends C_DOTABaseAbility {}

declare class C_EnvWind extends C_BaseEntity {
	readonly m_EnvWindShared: C_CEnvWindShared
}

declare class C_DOTA_Item_VitalityBooster extends C_DOTA_Item {}

declare class C_DOTA_Item_BladesOfAttack extends C_DOTA_Item {}

declare class C_DOTA_Ability_ArcWarden_TempestDouble extends C_DOTABaseAbility {
	readonly m_hDoubles: C_BaseEntity
}

declare class C_DOTA_Ability_Invoker_AttributeBonus extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Gyrocopter_Homing_Missile extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_QueenOfPain_Blink extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Razor_StaticLink extends C_DOTABaseAbility {
	m_iLinkIndex: number
	readonly m_ViewerTimer: CountdownTimer
	vision_radius: number
	vision_duration: number
}

declare class C_DOTA_Item_DataDriven extends C_DOTA_Item {
	m_bProcsMagicStick: boolean
	m_bIsSharedWithTeammates: boolean
	m_bCastFilterRejectCaster: boolean
	m_fAnimationPlaybackRate: number
	m_fAOERadius: number
	m_CastAnimation: number
}

declare class C_DOTA_Ability_Special_Bonus_Unique_Underlord_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Ursa_6 extends C_DOTABaseAbility {}

declare class C_DOTAGameManagerProxy extends C_BaseEntity {
	readonly m_pGameManager: C_DOTAGameManager
}

declare class C_GameRulesProxy extends C_BaseEntity {}

declare class C_DOTA_Item_Diffusal_Blade extends C_DOTA_Item {}

declare class C_DOTA_Item_Crimson_Guard extends C_DOTA_Item {}

declare class C_DOTA_Ability_KeeperOfTheLight_BlindingLight extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Agility_10 extends C_DOTABaseAbility {}

declare class C_DOTA_Item_Tome_Of_Knowledge extends C_DOTA_Item {}

declare class CDOTA_Ability_Techies_RemoteMines extends C_DOTABaseAbility {
	m_nFXIndex: number
	readonly m_hRMine: C_BaseEntity
}

declare class C_DOTA_Ability_LoneDruid_SpiritBear_Demolish extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Spectre_Haunt extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Leshrac_Diabolic_Edict extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Nevermore_Shadowraze extends C_DOTABaseAbility {
	m_nFXIndex: number
	m_nFXIndexB: number
}

declare class C_DOTA_Ability_Special_Bonus_Unique_Lycan_5 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Lifesteal_20 extends C_DOTABaseAbility {}

declare class C_GenericFlexCycler extends C_FlexCycler {
	m_nTestMode: number
	m_nTestIndex: number
	readonly m_poseParameterName: string
	m_bDoClientSideAnimation: boolean
	readonly m_layerSequence: string[]
	readonly m_nLayerIndex: number[]
	m_nBoneOverrideIndex: number
	m_flLastSimTime: number
}

declare class C_DOTA_BaseNPC_Additive extends C_DOTA_BaseNPC {}

declare class CDOTA_Item_Recipe_MeteorHammer extends C_DOTA_Item {}

declare class C_DOTA_Item_Recipe_Dagon extends C_DOTA_Item {}

declare class C_DOTA_Item_RobeOfMagi extends C_DOTA_Item {}

declare class CDOTA_Ability_Special_Bonus_Unique_Grimstroke_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Elder_Titan_NaturalOrder_Spirit extends C_DOTABaseAbility {}

declare class C_DOTA_BaseNPC_Hero extends C_DOTA_BaseNPC_Additive {
	readonly m_bIsIllusion: boolean
	readonly m_fSpellAmplification: number
	
	m_iCurrentXP: number
	m_iAbilityPoints: number
	m_flRespawnTime: number
	m_flRespawnTimePenalty: number
	m_flStrength: number
	m_flAgility: number
	m_flIntellect: number
	m_flStrengthTotal: number
	m_flAgilityTotal: number
	m_flIntellectTotal: number
	m_iRecentDamage: number
	m_fPainFactor: number
	m_fTargetPainFactor: number
	m_bLifeState: boolean
	m_nFXStunIndex: number
	m_nFXSilenceIndex: number
	m_nFXDeathIndex: number
	m_iPlayerID: number
	readonly m_hReplicatingOtherHeroModel: C_BaseEntity
	m_bReincarnating: boolean
	m_bCustomKillEffect: boolean
	m_flSpawnedAt: number
	m_iPrimaryAttribute: number
	m_nLastDrawnHealth: number
	m_flHurtAmount: number
	m_flLastHurtTime: number
	m_flHurtDecayRate: number
	m_flLastHealTime: number
	m_flLastTreeShakeTime: number
	readonly m_CenterOnHeroCooldownTimer: CountdownTimer
	m_nCurrentCombinedModelIndex: number
	m_nPendingCombinedModelIndex: number
	m_iHeroID: number
	m_flCheckLegacyItemsAt: number
	m_bDisplayAdditionalHeroes: boolean
	readonly m_vecAttachedParticleIndeces: number[]
	readonly m_hPets: C_BaseEntity[]
	readonly m_bBuybackDisabled: boolean
	readonly m_bWasFrozen: boolean
	readonly m_bUpdateClientsideWearables: boolean
	readonly m_bForceBuildCombinedModel: boolean
	readonly m_bRecombineForMaterialsOnly: boolean
	readonly m_bBuildingCombinedModel: boolean
	readonly m_bInReloadEvent: boolean
	readonly m_bStoreOldVisibility: boolean
	readonly m_bResetVisibility: boolean
	readonly m_bStoredVisibility: boolean
}

declare class C_DOTA_Ability_Undying_Tombstone extends C_DOTABaseAbility {
	readonly m_vZombies: C_BaseEntity[]
	readonly hTombstone: C_BaseEntity
	radius: number
	duration: number
}

declare class C_DOTA_Ability_Meepo_Geostrike extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Obsidian_Destroyer_SanityEclipse extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Nian_Roar extends C_DOTABaseAbility {
	base_projectiles: number
	max_projectiles: number
	projectile_step: number
	base_speed: number
	speed_step: number
	initial_radius: number
	end_radius: number
	damage: number
	base_interval: number
	interval_step: number
	m_nCastCount: number
	m_nProjectiles: number
	m_nWaveCount: number
	readonly m_ctTimer: CountdownTimer
	m_flTiming: number
	m_bScriptRoar: boolean
}

declare class C_DOTA_Ability_Special_Bonus_Unique_Templar_Assassin_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Juggernaut extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Gold_Income_70 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Night_Vision_600 extends C_DOTABaseAbility {}

declare class C_PointEntity extends C_BaseEntity {}

declare class C_DOTA_Item_DustofAppearance extends C_DOTA_Item {}

declare class C_DOTA_Unit_Hero_Legion_Commander extends C_DOTA_BaseNPC_Hero {
	m_unDuelsWon: number
}

declare class C_DOTA_Ability_TemplarAssassin_Refraction extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Holdout_ScourgeWard extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_WitchDoctor_DeathWard extends C_DOTABaseAbility {
	m_iDamage: number
	m_iBounceRadius: number
	m_iBounces: number
	m_iProjectileSpeed: number
	readonly m_hWard: C_BaseEntity
	m_fWardExpireTime: number
	m_nFXIndex: number
	m_iAttackIndex: number
	readonly m_BounceInfo: sBounceInfo[]
}

declare class C_DOTA_Ability_Razor_PlasmaField extends C_DOTABaseAbility {}

declare class CDOTA_Ability_AncientApparition_ColdFeet extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Nyx_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Attack_Range_150 extends C_DOTABaseAbility {}

declare class C_RopeKeyframe extends C_BaseModelEntity {
	readonly m_LinksTouchingSomething: number[]
	m_nLinksTouchingSomething: number
	m_bApplyWind: boolean
	m_fPrevLockedPoints: number
	m_iForcePointMoveCounter: number
	readonly m_bPrevEndPointPos: boolean[]
	readonly m_vPrevEndPointPos: Vector[]
	m_flCurScroll: number
	m_flScrollSpeed: number
	m_RopeFlags: number
	readonly m_LightValues: Vector[]
	m_nSegments: number
	readonly m_hStartPoint: C_BaseEntity
	readonly m_hEndPoint: C_BaseEntity
	m_iStartAttachment: number
	m_iEndAttachment: number
	m_Subdiv: number
	m_RopeLength: number
	m_Slack: number
	m_TextureScale: number
	m_fLockedPoints: number
	m_nChangeCount: number
	m_Width: number
	m_TextureHeight: number
	readonly m_vecImpulse: Vector
	readonly m_vecPreviousImpulse: Vector
	m_flCurrentGustTimer: number
	m_flCurrentGustLifetime: number
	m_flTimeToNextGust: number
	readonly m_vWindDir: Vector
	readonly m_vColorMod: Vector
	readonly m_vCachedEndPointAttachmentPos: Vector[]
	readonly m_vCachedEndPointAttachmentAngle: QAngle[]
	m_bConstrainBetweenEndpoints: boolean
	readonly m_bEndPointAttachmentPositionsDirty: boolean
	readonly m_bEndPointAttachmentAnglesDirty: boolean
	readonly m_bNewDataThisFrame: boolean
	readonly m_bPhysicsInitted: boolean
}

declare class C_FuncBrush extends C_BaseModelEntity {}

declare class C_DOTA_Item_Veil_Of_Discord extends C_DOTA_Item {}

declare class C_DOTA_Ability_Tiny_TossTree extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Tinker_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Lone_Druid_7 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Magic_Resistance_100 extends C_DOTABaseAbility {}

declare class C_BodyComponentBaseAnimating extends CBodyComponentSkeletonInstance {
	readonly m_animationController: C_BaseAnimatingController
	readonly __m_pChainEntity: CNetworkVarChainer
}

declare class C_DOTA_Ability_Oracle_FortunesEnd extends C_DOTABaseAbility {
	damage: number
	radius: number
	bolt_speed: number
	maximum_purge_duration: number
	minimum_purge_duration: number
	m_flStartTime: number
	m_flDuration: number
	m_bAbsorbed: boolean
	readonly m_hTarget: C_BaseEntity
	m_nFXIndex: number
}

declare class C_DOTA_Ability_Enchantress_Impetus extends C_DOTABaseAbility {}

declare class C_DOTA_Unit_TargetDummy extends C_DOTA_BaseNPC_Hero {
	m_flDamageTaken: number
	m_flLastHit: number
	m_flStartDamageTime: number
	m_flLastDamageTime: number
	m_bIsMoving: boolean
}

declare class C_DOTA_Ability_Tornado_Tempest extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_CentaurKhan_EnduranceAura extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Winter_Wyvern_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Silencer_5 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Cast_Range_400 extends C_DOTABaseAbility {}

declare class C_DOTA_Item_Recipe_Kaya extends C_DOTA_Item {}

declare class C_DOTA_Item_ShadowAmulet extends C_DOTA_Item {}

declare class CDOTA_NPC_Observer_Ward extends C_DOTA_BaseNPC_Additive {
	m_iDuration: number
	readonly m_pVisionRangeFX: CNewParticleEffect
	m_nPreviewViewer: number
}

declare class C_DOTA_Item_EnergyBooster extends C_DOTA_Item {}

declare class C_DOTA_Ability_Oracle_PurifyingFlames extends C_DOTABaseAbility {
	m_bTargetIsAlly: boolean
}

declare class C_DOTA_Unit_Hero_Visage extends C_DOTA_BaseNPC_Hero {}

declare class C_DOTA_Ability_Rubick_FadeBolt extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Lich_FrostArmor extends C_DOTABaseAbility {}

declare class C_DOTA_Unit_Hero_Sven extends C_DOTA_BaseNPC_Hero {}

declare class C_DOTA_Ability_Juggernaut_BladeFury extends C_DOTABaseAbility {
	blade_fury_damage: number
}

declare class C_DOTA_Ability_Juggernaut_HealingWard extends C_DOTABaseAbility {}

declare class C_IngameEvent_Base extends C_BaseEntity {
	m_bInitialized: boolean
	readonly m_CompendiumChallengeEventID: number[]
	readonly m_CompendiumChallengeSequenceID: number[]
	readonly m_CompendiumChallengeCoinReward: number[]
	readonly m_CompendiumChallengeCoinSplash: number[]
	readonly m_CompendiumChallengePointReward: number[]
	readonly m_CompendiumChallengeCompleted: boolean[]
	readonly m_CompendiumChallengeFailed: boolean[]
	readonly m_CompendiumChallengeProgress: number[]
	readonly m_QueryIDForProgress: number[]
	readonly m_SubChallenges: CDOTASubChallengeInfo[]
	readonly m_CompendiumCoinWager: number[]
	readonly m_CompendiumTokenWagerAmount: number[]
	readonly m_CompendiumCoinWagerResults: number[]
	readonly m_CompendiumRankWagers: number[]
	m_flWagerTimer: number
	m_flWagerEndTime: number
	readonly m_CompendiumChallengeInfo: CDOTA_PlayerChallengeInfo[]
	readonly m_PlayerQueryIDs: C_DOTA_CombatLogQueryProgress[]
	readonly m_ProgressForQueryID: number[]
	readonly m_GoalForQueryID: number[]
	readonly m_PlayerQuestRankPreviouslyCompleted: number[]
	readonly m_PlayerQuestRankCompleted: number[]
	readonly m_QueryIndexForProgress: number[]
}

declare class C_DOTA_Ability_Healing_Campfire extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Death_Prophet_4 extends C_DOTABaseAbility {}

declare class C_DOTABaseGameMode extends C_BaseEntity {
	m_nCustomGameForceHeroSelectionId: number
	m_bAlwaysShowPlayerInventory: boolean
	m_bGoldSoundDisabled: boolean
	m_bRecommendedItemsDisabled: boolean
	m_bStickyItemDisabled: boolean
	m_bStashPurchasingDisabled: boolean
	m_bFogOfWarDisabled: boolean
	m_bUseUnseenFOW: boolean
	m_bUseCustomBuybackCost: boolean
	m_bUseCustomBuybackCooldown: boolean
	m_bBuybackEnabled: boolean
	m_flCameraDistanceOverride: number
	m_nCameraSmoothCountOverride: number
	readonly m_hOverrideSelectionEntity: C_BaseEntity
	m_bTopBarTeamValuesOverride: boolean
	m_bTopBarTeamValuesVisible: boolean
	m_nTeamGoodGuysTopBarValue: number
	m_nTeamBadGuysTopBarValue: number
	m_bAlwaysShowPlayerNames: boolean
	m_bUseCustomHeroLevels: boolean
	readonly m_nCustomXPRequiredToReachNextLevel: number[]
	m_bTowerBackdoorProtectionEnabled: boolean
	m_bBotThinkingEnabled: boolean
	m_bAnnouncerDisabled: boolean
	m_bKillingSpreeAnnouncerDisabled: boolean
	m_flFixedRespawnTime: number
	m_flBuybackCostScale: number
	m_flRespawnTimeScale: number
	m_bLoseGoldOnDeath: boolean
	m_bKillableTombstones: boolean
	m_nHUDVisibilityBits: number
	m_flMinimumAttackSpeed: number
	m_flMaximumAttackSpeed: number
	m_bIsDaynightCycleDisabled: boolean
	m_bAreWeatherEffectsDisabled: boolean
	m_bDisableHudFlip: boolean
	m_bEnableFriendlyBuildingMoveTo: boolean
	m_bIsDeathOverlayDisabled: boolean
	m_bIsHudCombatEventsDisabled: boolean
	readonly m_sCustomTerrainWeatherEffect: string
	m_flStrengthDamage: number
	m_flStrengthHP: number
	m_flStrengthHPRegen: number
	m_flAgilityDamage: number
	m_flAgilityArmor: number
	m_flAgilityAttackSpeed: number
	m_flAgilityMovementSpeedPercent: number
	m_flIntelligenceDamage: number
	m_flIntelligenceMana: number
	m_flIntelligenceManaRegen: number
	m_flIntelligenceSpellAmpPercent: number
	m_flStrengthMagicResistancePercent: number
	m_flDraftingHeroPickSelectTimeOverride: number
	m_flDraftingBanningTimeOverride: number
	m_bPauseEnabled: boolean
	m_flCustomScanCooldown: number
	m_bDefaultRuneSpawnLogic: boolean
	m_nHUDVisibilityBitsPrevious: number
}

declare class C_PortraitCallbackHandler extends C_BaseEntity {
	readonly m_pOwner: CRenderablePortraitData
}

declare class C_LightGlow extends C_BaseModelEntity {
	m_nHorizontalSize: number
	m_nVerticalSize: number
	m_nMinDist: number
	m_nMaxDist: number
	m_nOuterMaxDist: number
	m_flGlowProxySize: number
	m_flHDRColorScale: number
	// readonly m_Glow: C_LightGlowOverlay // actually it's this, as C++ allows us replacing types, but .d.ts doesn't
}

declare class CDOTA_Item_Recipe_DragonLance extends C_DOTA_Item {}

declare class C_DOTA_Unit_Hero_NightStalker extends C_DOTA_BaseNPC_Hero {}

declare class C_DOTA_Ability_Ursa_Overpower extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Morphling_MorphReplicate extends C_DOTABaseAbility {
	m_flOldHealthPct: number
	m_flOldManaPct: number
}

declare class C_DOTA_Ability_Special_Bonus_Unique_Templar_Assassin_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Timbersaw_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Meepo_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Exp_Boost_40 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Respawn_Reduction_60 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_MP_600 extends C_DOTABaseAbility {}

declare class C_DOTA_BaseNPC_Creep extends C_DOTA_BaseNPC_Additive {
	m_flAim: number
}

declare class C_DOTA_Item_SangeAndYasha extends C_DOTA_Item {}

declare class C_DOTA_Item_UltimateOrb extends C_DOTA_Item {}

declare class C_DOTA_Ability_Nyx_Assassin_Impale extends C_DOTABaseAbility {
	width: number
	duration: number
	length: number
	speed: number
}

declare class C_DOTA_Unit_Hero_Furion extends C_DOTA_BaseNPC_Hero {}

declare class C_DOTA_Ability_Nian_Tail_Swipe extends C_DOTA_Ability_Animation_Attack {}

declare class C_DotaSubquestBase extends C_BaseEntity {
	readonly m_pszSubquestText: number[]
	m_bHidden: boolean
	m_bCompleted: boolean
	m_bShowProgressBar: boolean
	m_nProgressBarHueShift: number
	readonly m_pnTextReplaceValuesCDotaSubquestBase: number[]
	readonly m_pszTextReplaceString: number[]
	m_nTextReplaceValueVersion: number
	m_bWasCompleted: boolean
}

declare class C_DOTA_Ability_Special_Bonus_Magic_Resistance_20 extends C_DOTABaseAbility {}

declare class C_GlobalLight extends C_BaseEntity/*, CGlobalLightBase*/ {
	m_WindClothForceHandle: number

	// Low-priority parent definition [CGlobalLightBase]
	m_bSpotLight: boolean
	readonly m_SpotLightOrigin: Vector
	readonly m_SpotLightAngles: QAngle
	readonly m_ShadowDirection: Vector
	readonly m_AmbientDirection: Vector
	readonly m_SpecularDirection: Vector
	readonly m_InspectorSpecularDirection: Vector
	m_flSpecularPower: number
	m_flSpecularIndependence: number
	readonly m_SpecularColor: Color
	m_bStartDisabled: boolean
	m_bEnabled: boolean
	readonly m_LightColor: Color
	readonly m_AmbientColor1: Color
	readonly m_AmbientColor2: Color
	readonly m_AmbientColor3: Color
	m_flSunDistance: number
	m_flFOV: number
	m_flNearZ: number
	m_flFarZ: number
	m_bEnableShadows: boolean
	m_bOldEnableShadows: boolean
	m_bBackgroundClearNotRequired: boolean
	m_flCloudScale: number
	m_flCloud1Speed: number
	m_flCloud1Direction: number
	m_flCloud2Speed: number
	m_flCloud2Direction: number
	m_flAmbientScale1: number
	m_flAmbientScale2: number
	m_flGroundScale: number
	m_flLightScale: number
	m_flFoWDarkness: number
	m_bEnableSeparateSkyboxFog: boolean
	readonly m_vFowColor: Vector
	readonly m_ViewOrigin: Vector
	readonly m_ViewAngles: QAngle
	m_flViewFoV: number
	readonly m_WorldPoints: Vector[]
	readonly m_vFogOffsetLayer0: Vector2D
	readonly m_vFogOffsetLayer1: Vector2D
	readonly m_hEnvWind: C_BaseEntity
	readonly m_hEnvSky: C_BaseEntity
	m_fSmoothedAmount: number
	m_fSlowSmoothedAmount: number
}

declare class C_ClientRagdoll extends C_BaseAnimating {
	m_bFadeOut: boolean
	m_bImportant: boolean
	m_flEffectTime: number
	m_gibDespawnTime: number
	m_iCurrentFriction: number
	m_iMinFriction: number
	m_iMaxFriction: number
	m_iFrictionAnimState: number
	m_bReleaseRagdoll: boolean
	m_iEyeAttachment: number
	m_bFadingOut: boolean
	readonly m_flScaleEnd: number[]
	readonly m_flScaleTimeStart: number[]
	readonly m_flScaleTimeEnd: number[]
	m_bForceShadowCastType: boolean
	m_forcedShadowCastType: ShadowType_t
}

declare class C_DOTA_Item_Recipe_Mekansm extends C_DOTA_Item {}

declare class C_DOTA_Ability_Lycan_Howl extends C_DOTABaseAbility {
	howl_duration: number
}

declare class C_DOTA_Ability_SpiritBreaker_GreaterBash extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Mirana_MoonlightShadow extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_KoboldTaskmaster_SpeedAura extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Viper_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Attack_Damage_10 extends C_DOTABaseAbility {}

declare class C_DOTA_BaseNPC_Creature extends C_DOTA_BaseNPC_Creep {
	m_bIsCurrentlyChanneling: boolean
	m_flChannelCycle: number
}

declare class C_DOTA_Item_Recipe_Buckler extends C_DOTA_Item {}

declare class C_DOTA_Item_Tango_Single extends C_DOTA_Item {}

declare class C_DOTA_Ability_DarkWillow_Terrorize extends C_DOTABaseAbility {
	m_nFXIndex: number
}

declare class C_DOTA_Ability_Legion_Commander_OverwhelmingOdds extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Invoker_Wex extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Kunkka_Tidebringer extends C_DOTABaseAbility {}

declare class C_DOTA_BaseNPC_Frostivus2018_Snowman extends C_DOTA_BaseNPC_Additive {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Windranger extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Exp_Boost_30 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Cast_Range_100 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_MP_125 extends C_DOTABaseAbility {}

declare class C_EconEntity extends C_BaseFlex/*, IHasAttributes*/ {
	m_flFlexDelayTime: number
	readonly m_AttributeManager: CAttributeContainer
	m_bClientside: boolean
	m_nDisableMode: EconEntityParticleDisableMode_t
	m_bParticleSystemsCreated: boolean
	m_bForceDestroyAttachedParticlesImmediately: boolean
	readonly m_hViewmodelAttachment: C_BaseEntity
	m_iOldTeam: number
	m_bAttachmentDirty: boolean
	m_nUnloadedModelIndex: number
	m_iNumOwnerValidationRetries: number
	readonly m_hOldProvidee: C_BaseEntity
}

declare class C_DOTA_Item_Courier extends C_DOTA_Item {}

declare class C_DOTA_Item_Desolator extends C_DOTA_Item {}

declare class CDOTA_Ability_Special_Bonus_Unique_Grimstroke_2 extends C_DOTABaseAbility {}

declare class C_IngameEvent_TI8 extends C_IngameEvent_Base {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Windranger_5 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Pugna_6 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Spell_Immunity extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Mana_Break_25 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Corruption_5 extends C_DOTABaseAbility {}

declare class CBodyComponentPoint extends CBodyComponent {
	readonly m_sceneNode: CGameSceneNode
	readonly __m_pChainEntity: CNetworkVarChainer
}

declare class C_DOTA_Item_Iron_Talon extends C_DOTA_Item {}

declare class C_DOTA_Item_MysticStaff extends C_DOTA_Item {}

declare class C_DOTA_Ability_LoneDruid_TrueForm_Druid extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Enchantress_Untouchable extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_FacelessVoid_Chronosphere extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Lycan_1 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Magnus_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Cooldown_Reduction_15 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Intelligence_16 extends C_DOTABaseAbility {}

declare class C_DOTA_Item_Ancient_Janggo extends C_DOTA_Item {
	radius: number
}

declare class CDOTA_Item_SentryWard extends C_DOTA_Item {}

declare class C_DOTA_Item_TranquilBoots extends C_DOTA_Item {
	break_count: number
	readonly m_DamageList: number[]
}

declare class CDOTA_Ability_Nyx_Assassin_Unburrow extends C_DOTABaseAbility {}

declare class CDOTA_Ability_Treant_EyesInTheForest extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_LoneDruid_SavageRoar extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Chen_TestOfFaith extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Earthshaker_EchoSlam extends C_DOTABaseAbility {
	echo_slam_damage_range: number
	echo_slam_echo_search_range: number
	echo_slam_echo_range: number
	echo_slam_echo_damage: number
	echo_slam_initial_damage: number
}

declare class CDOTA_Ability_BigThunderLizard_Wardrums extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Earthshaker extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Furion_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Ogre_Magi_2 extends C_DOTABaseAbility {}

declare class C_DOTA_BaseNPC_Building extends C_DOTA_BaseNPC {
	m_nAmbientFXIndex: number
	m_nTPFXIndex: number
	m_nStatusFXIndex: number
	readonly m_angInitialAngles: QAngle
	m_fHeroStatueCycle: number
	m_iHeroStatueStatusEffectIndex: number
	m_bHeroStatue: boolean
	m_bBattleCup: boolean
	readonly m_HeroStatueInscription: number[]
	m_iHeroStatueOwnerPlayerID: number
	readonly m_ParticleTintColor: Color
}

declare class C_DOTA_Item_Recipe_Yasha_And_Kaya extends C_DOTA_Item {}

declare class C_DOTA_Item_Recipe_OrchidMalevolence extends C_DOTA_Item {}

declare class C_DOTA_Ability_Slark_DarkPact extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Visage_Stone_Form_Self_Cast extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Jakiro_IcePath extends C_DOTABaseAbility {}

declare class C_DOTA_Unit_Hero_Huskar extends C_DOTA_BaseNPC_Hero {}

declare class C_DOTA_Ability_Venomancer_PlagueWard extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Morphling_Waveform extends C_DOTABaseAbility/*, C_HorizontalMotionController*/ {}

declare class C_DOTA_Ability_Earthshaker_EnchantTotem extends C_DOTABaseAbility {}

declare class CDOTA_Item_Battlefury extends C_DOTA_Item {}

declare class C_DOTA_Unit_Hero_KeeperOfTheLight extends C_DOTA_BaseNPC_Hero {}

declare class CDOTA_Ability_Invoker_InvokedBase extends C_DOTABaseAbility {
	m_nQuasLevel: number
	m_nWexLevel: number
	m_nExortLevel: number
}

declare class C_DOTA_Ability_Venomancer_VenomousGale extends C_DOTABaseAbility {
	duration: number
}

declare class C_DOTA_Ability_Special_Bonus_Unique_Visage_5 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Outworld_Devourer extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Windranger_6 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Holdout_GladiatorsUnite extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Winter_Wyvern_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Pugna_5 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Pugna_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Techies_4 extends C_DOTABaseAbility {}

declare class C_Team extends C_BaseEntity {
	readonly m_aPlayers: C_BaseEntity[]
	m_iScore: number
	m_iRoundsWon: number
	readonly m_szTeamname: number[]
	m_iDeaths: number
	m_iPing: number
	m_iPacketloss: number
}

declare class C_DOTA_BaseNPC_Warlock_Golem extends C_DOTA_BaseNPC_Creep {}

declare class C_DOTA_Ability_Courier_Burst extends C_DOTABaseAbility {}

declare class CDOTA_Ability_MudGolem_HurlBoulder extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Sven_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Alchemist_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Cooldown_Reduction_25 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Magic_Resistance_12 extends C_DOTABaseAbility {}

declare class C_BaseToggle extends C_BaseModelEntity {}

declare class C_DOTA_Item_MonkeyKingBar extends C_DOTA_Item {}

declare class C_DOTA_Ability_MonkeyKing_Spring extends C_DOTABaseAbility {
	readonly m_vPos: Vector
	m_fStartChannelTime: number
	readonly m_hThinker: C_BaseEntity
	m_nFxIndex: number
	m_nRefCount: number
}

declare class C_DOTA_Ability_EarthSpirit_Magnetize extends C_DOTABaseAbility {
	cast_radius: number
	rock_explosion_radius: number
	damage_duration: number
}

declare class C_DOTA_Unit_Hero_Shredder extends C_DOTA_BaseNPC_Hero {}

declare class C_DOTA_Ability_Venomancer_PoisonNova extends C_DOTABaseAbility {}

declare class C_DOTA_Unit_Hero_Venomancer extends C_DOTA_BaseNPC_Hero {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Morphling_5 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Morphling_1 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Wraith_King_5 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Terrorblade_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Sniper_5 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Broodmother_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_All_Stats_6 extends C_DOTABaseAbility {}

declare class C_DOTA_Item_Arcane_Ring extends C_DOTA_Item {}

declare class C_DOTA_Unit_Hero_Slark extends C_DOTA_BaseNPC_Hero {}

declare class C_DOTA_Ability_KeeperOfTheLight_Recall extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Zuus_ThundergodsWrath extends C_DOTABaseAbility {
	m_nFXIndex: number
}

declare class C_DOTA_Ability_Special_Bonus_Evasion_30 extends C_DOTABaseAbility {}

declare class C_InfoPlayerStartDota extends C_PointEntity {
	m_bDisabled: boolean
}

declare class CDOTA_Item_GlimmerCape extends C_DOTA_Item {}

declare class C_DOTA_Item_EmptyBottle extends C_DOTA_Item {
	m_iStoredRuneType: number
	m_fStoredRuneTime: number
}

declare class C_DOTA_Unit_Hero_MonkeyKing extends C_DOTA_BaseNPC_Hero {
	mb_MonkeyHasArcana: boolean
	m_nTreeDisguise: number
	m_nPerchedTree: number
	readonly m_hTreeDisguiseEnt: C_BaseEntity
}

declare class CDOTA_Ability_AbyssalUnderlord_Cancel_DarkRift extends C_DOTABaseAbility {}

declare class C_DOTA_Unit_Hero_Rubick extends C_DOTA_BaseNPC_Hero {
	readonly m_stolenAbilityColorHSV1: Vector
	readonly m_stolenAbilityColorHSV2: Vector
	readonly m_stolenAbilityFXColorHSV: Vector
	m_bHasInitializedAbilityColors: boolean
	readonly m_startAbilityColorHSV1: Vector
	readonly m_startAbilityColorHSV2: Vector
	readonly m_startAbilityFXColorHSV: Vector
	readonly m_currAbilityColorHSV1: Vector
	readonly m_currAbilityColorHSV2: Vector
	readonly m_currAbilityFXColorHSV: Vector
	m_flStartTime: number
}

declare class CDOTA_Ability_Life_Stealer_Empty3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Lion_Impale extends C_DOTABaseAbility {
	width: number
	duration: number
	speed: number
	length_buffer: number
	range: number
}

declare class C_DOTA_Ability_Tidehunter_Ravage extends C_DOTABaseAbility {
	readonly m_hEntsHit: C_BaseEntity[]
	m_bAwardedKillEater: boolean
	duration: number
}

declare class C_DOTA_Ability_ForestTrollHighPriest_Heal extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Neutral_SpellImmunity extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Huskar_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Phoenix_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Weaver_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Spirit_Breaker_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Monkey_King_6 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Meepo_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Attack_Range_200 extends C_DOTABaseAbility {}

declare class CDOTA_Item_Kaya_And_Sange extends C_DOTA_Item {}

declare class C_DOTA_Ability_Batrider_Firefly extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Rattletrap_PowerCogs extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_TemplarAssassin_Trap extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Riki_Permanent_Invisibility extends C_DOTABaseAbility {}

declare class CDOTA_Ability_GraniteGolem_Bash extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Slark extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Respawn_Reduction_20 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Intelligence_30 extends C_DOTABaseAbility {}

declare class C_DOTA_Item_DivineRapier extends C_DOTA_Item {}

declare class C_DOTA_Ability_ArcWarden_MagneticField extends C_DOTABaseAbility {}

declare class C_DOTA_NPC_Treant_EyesInTheForest extends C_DOTA_BaseNPC_Additive {}

declare class C_DOTA_Unit_Hero_DragonKnight extends C_DOTA_BaseNPC_Hero {}

declare class C_DOTA_Ability_CrystalMaiden_CrystalNova extends C_DOTABaseAbility {
	nova_damage: number
}

declare class C_DOTA_Ability_Special_Bonus_Movement_Speed_25 extends C_DOTABaseAbility {}

declare class C_DOTA_Item_Recipe_RefresherOrb extends C_DOTA_Item {}

declare class CDOTA_Unit_Hero_ArcWarden extends C_DOTA_BaseNPC_Hero {
	m_nTalkFXIndex: number
	m_nFXDeath: number
	m_nTempestFX: number
}

declare class C_DOTA_Ability_Rattletrap_BatteryAssault extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Dazzle_Poison_Touch extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Firework_Mine extends C_DOTA_Item {}

declare class CDOTA_BaseNPC_Frostivus2018_Clinkz_Skeleton_Army extends C_DOTA_BaseNPC {}

declare class C_DOTA_Ability_BlueDragonspawnSorcerer_Evasion extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Puck_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Movement_Speed_40 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_MP_800 extends C_DOTABaseAbility {}

declare class C_DOTA_Item_RuneSpawner extends C_BaseAnimating {
	m_nRuneType: DOTA_RUNES
	m_flLastSpawnTime: number
}

declare class C_BaseButton extends C_BaseToggle {
	readonly m_glowEntity: C_BaseEntity
	m_usable: boolean
	readonly m_szDisplayText: string
}

declare class C_DOTA_Item_Recipe_Blade_Mail extends C_DOTA_Item {}

declare class C_DOTA_Item_MantaStyle extends C_DOTA_Item {}

declare class C_DOTA_Ability_Lion_ManaDrain extends C_DOTABaseAbility {
	readonly m_Victims: C_BaseEntity[]
}

declare class C_DOTA_Ability_Tiny_Grow extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Zuus_LightningBolt extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Undying_2 extends C_DOTABaseAbility {}

declare class CDOTA_Ability_Courier_AutoDeliver extends C_DOTABaseAbility {}

declare class CInfoParticleTarget extends C_PointEntity {}

declare class C_DOTA_Item_RiverPainter extends C_DOTA_Item {
	m_iRiverPaintColor: number
}

declare class C_DOTA_Ability_Pangolier_Swashbuckle extends C_DOTABaseAbility/*, C_HorizontalMotionController*/ {
	m_bIsBasePointSet: boolean
	m_bIsMidQuickcast: boolean
	readonly m_vBasePoint: Vector
	m_nFXTarget: number
	dash_speed: number
	start_radius: number
	end_radius: number
	range: number
	damage: number
}

declare class C_DOTA_Ability_Skywrath_Mage_Mystic_Flare extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Lina_LagunaBlade extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Greevil_Miniboss_White_Purification extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Sven extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Warlock_6 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Zeus_2 extends C_DOTABaseAbility {}

declare class C_PointClientUIWorldPanel extends C_BaseClientUIEntity {
	m_bForceRecreateNextUpdate: boolean
	m_bMoveViewToPlayerNextThink: boolean
	m_bCheckCSSClasses: boolean
	readonly m_pOffScreenIndicator: CPointOffScreenIndicatorUi
	m_bIgnoreInput: boolean
	m_bFollowPlayerAcrossTeleport: boolean
	m_flWidth: number
	m_flHeight: number
	m_flDPI: number
	m_flInteractDistance: number
	m_flDepthOffset: number
	m_unOwnerContext: number
	m_unHorizontalAlign: number
	m_unVerticalAlign: number
	m_unOrientation: number
	m_bAllowInteractionFromAllSceneWorlds: boolean
	readonly m_vecCSSClasses: string[]
	m_bOpaque: boolean
	m_bNoDepth: boolean
	m_bRenderBackface: boolean
	m_bUseOffScreenIndicator: boolean
	m_bExcludeFromSaveGames: boolean
	m_bGrabbable: boolean
	m_bOnlyRenderToTexture: boolean
}

declare class CPointOffScreenIndicatorUi extends C_PointClientUIWorldPanel {
	m_bBeenEnabled: boolean
	m_bHide: boolean
	m_flSeenTargetTime: number
	readonly m_pTargetPanel: C_PointClientUIWorldPanel
}

declare class C_DOTA_Item_Crown extends C_DOTA_Item {}

declare class C_DOTA_Item_Recipe_Spirit_Vessel extends C_DOTA_Item {}

declare class C_DOTA_Item_Recipe_Vanguard extends C_DOTA_Item {}

declare class CDOTA_Ability_Centaur_Return extends C_DOTABaseAbility {}

declare class CDOTA_Ability_Life_Stealer_Assimilate extends C_DOTABaseAbility {
	readonly m_hLastAssimilation: C_BaseEntity
}

declare class CDOTA_Ability_Frostivus2018_Luna_LucentBeam extends C_DOTABaseAbility {
	radius: number
}

declare class C_DOTA_Ability_Special_Bonus_Unique_Clinkz_1 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Invoker_6 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Cleave_25 extends C_DOTABaseAbility {}

declare class C_DOTA_BaseNPC_Shop extends C_DOTA_BaseNPC_Building {
	m_ShopType: DOTA_SHOP_TYPE
	m_nShopFX: number
	readonly m_vShopFXOrigin: Vector
	m_flLastSpeech: number
}

declare class C_Breakable extends C_BaseModelEntity {}

declare class C_DOTA_Ability_Necronomicon_Archer_AoE extends C_DOTABaseAbility {}

declare class C_DOTA_Item_LesserCritical extends C_DOTA_Item {}

declare class C_DOTA_Ability_Bristleback_Warpath extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_EnragedWildkin_ToughnessAura extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Drow_Ranger_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Invoker_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Spell_Lifesteal_15 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Evasion_10 extends C_DOTABaseAbility {}

declare class C_BaseTeamObjectiveResource extends C_BaseEntity {
	m_iTimerToShowInHUD: number
	m_iStopWatchTimer: number
	m_iNumControlPoints: number
	m_iPrevNumControlPoints: number
	m_bPlayingMiniRounds: boolean
	m_bControlPointsReset: boolean
	m_bOldControlPointsReset: boolean
	m_iUpdateCapHudParity: number
	m_iOldUpdateCapHudParity: number
	readonly m_vCPPositions: Vector[]
	readonly m_bCPIsVisible: boolean[]
	readonly m_flLazyCapPerc: number[]
	readonly m_flOldLazyCapPerc: number[]
	readonly m_iTeamIcons: number[]
	readonly m_iTeamOverlays: number[]
	readonly m_iTeamReqCappers: number[]
	readonly m_flTeamCapTime: number[]
	readonly m_iPreviousPoints: number[]
	readonly m_bTeamCanCap: boolean[]
	readonly m_iTeamBaseIcons: number[]
	readonly m_iBaseControlPoints: number[]
	readonly m_bInMiniRound: boolean[]
	readonly m_iWarnOnCap: number[]
	readonly m_iszWarnSound: string[]
	readonly m_flPathDistance: number[]
	readonly m_iNumTeamMembers: number[]
	readonly m_iCappingTeam: number[]
	readonly m_iTeamInZone: number[]
	readonly m_bBlocked: boolean[]
	readonly m_iOwner: number[]
	readonly m_pszCapLayoutInHUD: number[]
	readonly m_flCapTimeLeft: number[]
	readonly m_flCapLastThinkTime: number[]
	readonly m_bWarnedOnFinalCap: boolean[]
	readonly m_flLastCapWarningTime: number[]
}

declare class C_DOTATeam extends C_Team {
	m_iHeroKills: number
	m_iTowerKills: number
	m_iBarracksKills: number
	m_unTournamentTeamID: number
	m_ulTeamLogo: bigint
	m_ulTeamBaseLogo: bigint
	m_ulTeamBannerLogo: bigint
	m_bTeamComplete: boolean
	m_bTeamIsHomeTeam: boolean
	readonly m_CustomHealthbarColor: Color
	readonly m_szTag: number[]
}

declare class C_ButtonTimed extends C_BaseButton {
	readonly m_sUseString: string
	readonly m_sUseSubString: string
}

declare class C_DOTA_Unit_Hero_Viper extends C_DOTA_BaseNPC_Hero {}

declare class CDOTA_Item_Recipe_Guardian_Greaves extends C_DOTA_Item {}

declare class CDOTA_Item_Recipe_Ward_Dispenser extends C_DOTA_Item {}

declare class C_DOTA_Ability_Invoker_ChaosMeteor extends CDOTA_Ability_Invoker_InvokedBase {
	area_of_effect: number
	damage_interval: number
	vision_distance: number
	end_vision_duration: number
	main_damage: number
	burn_duration: number
	burn_dps: number
}

declare class C_DOTA_Ability_PhantomLancer_Juxtapose extends C_DOTABaseAbility {}

declare class C_IngameEvent_DotaPlus extends C_IngameEvent_Base {}

declare class CDOTA_BaseNPC_Seasonal_CNY_Balloon extends C_DOTA_BaseNPC_Additive {}

declare class C_DOTASpectatorGraphManagerProxy extends C_BaseEntity {
	readonly m_pGraphManager: C_DOTASpectatorGraphManager
}

declare class C_DOTA_Ability_Special_Bonus_Unique_Lina_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Spell_Lifesteal_30 extends C_DOTABaseAbility {}

declare class C_DOTA_Unit_Hero_Nyx_Assassin extends C_DOTA_BaseNPC_Hero {}

declare class C_DOTA_Unit_Brewmaster_PrimalEarth extends C_DOTA_BaseNPC_Creep {
	m_nFXEarthAmbient1: number
	m_nFXEarthAmbient2: number
}

declare class C_DOTA_Ability_Luna_LucentBeam extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Sniper_Shrapnel extends C_DOTABaseAbility {
	charge_restore_time: number
	max_charges: number
}

declare class C_DOTA_Item_Lua extends C_DOTA_Item {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Terrorblade extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Phantom_Assassin extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Magic_Resistance_8 extends C_DOTABaseAbility {}

declare class CDOTA_Item_Moonshard extends C_DOTA_Item {}

declare class C_DOTA_Item_Soul_Booster extends C_DOTA_Item {}

declare class C_DOTA_Item_Recipe_SheepStick extends C_DOTA_Item {}

declare class C_DOTA_Ability_Wisp_Spirits extends C_DOTABaseAbility {
	readonly m_SpiritDefs: sSpiritDef[]
	m_nWispDirection: number
}

declare class C_DOTA_Ability_Invoker_Tornado extends CDOTA_Ability_Invoker_InvokedBase {
	vision_distance: number
	end_vision_duration: number
	lift_duration: number
	base_damage: number
	quas_damage: number
	wex_damage: number
}

declare class C_DOTA_Ability_NightStalker_Void extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_AlphaWolf_CriticalStrike extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Gold_Income_20 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Strength_5 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Movement_Speed_20 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Cleave_15 extends C_DOTABaseAbility {}

declare class C_DOTA_DisplacementVisibility extends C_BaseEntity {
	m_HiddenDisplacement: number
}

declare class C_DOTA_Unit_Hero_Meepo extends C_DOTA_BaseNPC_Hero {
	readonly m_bIsClone: boolean
	
	m_nWhichMeepo: number
}

declare class C_DOTA_Ability_Special_Bonus_Unique_Luna_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Gyrocopter_4 extends C_DOTABaseAbility {}

declare class C_LightOrthoEntity extends C_LightEntity {}

declare class C_DOTA_Item_StaffOfWizardry extends C_DOTA_Item {}

declare class C_DOTA_Item_RingOfProtection extends C_DOTA_Item {}

declare class CDOTA_Ability_Techies_LandMines extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_KeeperOfTheLight_IlluminateEnd extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Undying_Decay extends C_DOTABaseAbility {
	decay_damage: number
	radius: number
	decay_duration: number
	str_steal: number
	str_steal_scepter: number
}

declare class C_DOTA_Ability_Special_Bonus_Unique_Doom_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Night_Stalker_2 extends C_DOTABaseAbility {}

declare class C_DOTA_BaseNPC_Trap_Ward extends C_DOTA_BaseNPC_Creature {}

declare class C_DOTA_BaseNPC_Barracks extends C_DOTA_BaseNPC_Building {}

declare class C_ModelPointEntity extends C_BaseModelEntity {}

declare class C_BeamSpotLight extends C_BaseModelEntity {
	m_bSpotlightOn: boolean
	m_bHasDynamicLight: boolean
	m_bNoFog: boolean
	m_flSpotlightMaxLength: number
	m_flSpotlightGoalWidth: number
	m_flHDRColorScale: number
	m_flRotationSpeed: number
	m_nRotationAxis: number
	readonly m_vSpotlightTargetPos: Vector
	readonly m_vSpotlightCurrentPos: Vector
	readonly m_vSpotlightAngles: QAngle
	m_flSpotlightCurLength: number
	m_flLightScale: number
	m_lastTime: number
}

declare class C_TonemapController2 extends C_BaseEntity {
	m_flAutoExposureMin: number
	m_flAutoExposureMax: number
	m_flTonemapPercentTarget: number
	m_flTonemapPercentBrightPixels: number
	m_flTonemapMinAvgLum: number
	m_flRate: number
	m_flAccelerateExposureDown: number
	m_flBloomStrength: number
	m_flBloomStartValue: number
}

declare class CDOTA_Item_Recipe_ForceStaff extends C_DOTA_Item {}

declare class C_DOTA_Ability_Wisp_Spirits_Out extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Viper_ViperStrike extends C_DOTABaseAbility {
	m_nFXIndex: number
}

declare class C_DOTA_Unit_Hero_Earthshaker extends C_DOTA_BaseNPC_Hero {}

declare class C_DOTA_Unit_Hero_Nevermore extends C_DOTA_BaseNPC_Hero {
	m_nFXDeath: number
}

declare class C_DOTA_Ability_Special_Bonus_Unique_Razor_2 extends C_DOTABaseAbility {}

declare class CDOTA_Unit_Hero_Abaddon extends C_DOTA_BaseNPC_Hero {}

declare class C_DOTA_Ability_Shredder_Chakram extends C_DOTABaseAbility {
	radius: number
	speed: number
	pass_slow_duration: number
	pass_damage: number
	readonly m_vEndLocation: Vector
	m_fZCoord: number
	m_bIsReturning: boolean
	m_nFXIndex: number
	m_nFXIndexB: number
	m_nFXIndexC: number
	m_nProjectileIndex: number
	readonly m_hThinker: C_BaseEntity
	readonly m_hReturnHits: C_BaseEntity[]
}

declare class C_DOTA_Ability_Invoker_SunStrike extends CDOTA_Ability_Invoker_InvokedBase {}

declare class C_DOTA_Ability_DoomBringer_Empty2 extends C_DOTABaseAbility {}

declare class C_DOTA_Unit_Hero_Pudge extends C_DOTA_BaseNPC_Hero {}

declare class C_DOTA_Ability_Special_Bonus_Cast_Range_60 extends C_DOTABaseAbility {}

declare class C_DOTA_Item_Spirit_Vessel extends C_DOTA_Item {}

declare class C_DOTA_Item_HelmOfTheDominator extends C_DOTA_Item {}

declare class C_DOTA_Ability_MonkeyKing_Transform extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Treant_Overgrowth extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Necrophos_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Dazzle_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Item_Recipe_Mjollnir extends C_DOTA_Item {}

declare class C_DOTA_Item_Radiance extends C_DOTA_Item {}

declare class C_DOTA_Ability_Shredder_WhirlingDeath extends C_DOTABaseAbility {
	whirling_radius: number
	whirling_damage: number
	whirling_tick: number
	duration: number
	tree_damage_scale: number
}

declare class C_DOTA_Ability_Medusa_ManaShield extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Lion_FingerOfDeath extends C_DOTABaseAbility {
	m_nFXIndex: number
}

declare class C_DOTA_Ability_Greevil_Miniboss_Green_Overgrowth extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Riki_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Armor_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Attack_Speed_60 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Razor_EyeOfTheStorm extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Respawn_Reduction_40 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_All_Stats_14 extends C_DOTABaseAbility {}

declare class C_EnvLightProbeVolume extends C_BaseEntity {
	readonly m_vBoxMins: Vector
	readonly m_vBoxMaxs: Vector
	readonly m_LightGroups: string
	m_bStatic: boolean
	m_nHandshake: number
	m_nIndoorOutdoorLevel: number
	m_bStartDisabled: boolean
	m_bEnabled: boolean
}

declare class C_DOTA_Item_Blade_Mail extends C_DOTA_Item {}

declare class C_DOTA_Item_Recipe_AbyssalBlade extends C_DOTA_Item {}

declare class C_DOTA_Ability_MonkeyKing_FurArmy extends C_DOTABaseAbility {
	readonly m_hThinker: C_BaseEntity
	m_nFXIndex: number
	num_first_soldiers: number
	num_second_soldiers: number
	m_bCreateMonkeys: boolean
	m_flNextCreationTime: number
	readonly m_vecSoldiers: C_BaseEntity[]
}

declare class C_DOTA_Ability_Medusa_MysticSnake extends C_DOTABaseAbility {
	radius: number
	snake_jumps: number
	snake_damage: number
	snake_mana_steal: number
	snake_scale: number
	initial_speed: number
	return_speed: number
	jump_delay: number
	m_iCurJumpCount: number
	m_iTotalMana: number
	m_flDamage: number
	m_flMana: number
	readonly m_hHitEntities: C_BaseEntity[]
}

declare class C_DOTA_Ability_Nyx_Assassin_SpikedCarapace extends C_DOTABaseAbility {}

declare class CDOTA_Unit_Hero_Alchemist extends C_DOTA_BaseNPC_Hero {}

declare class C_DOTA_Ability_Sven_GreatCleave extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Doom_6 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Dragon_Knight_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Slardar extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Invoker_7 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Armor_7 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Brewmaster_PrimalSplit extends C_DOTABaseAbility {
	readonly m_hPrimary: C_BaseEntity
	readonly m_hSecondary: C_BaseEntity
	readonly m_hTertiary: C_BaseEntity
}

declare class C_DOTA_Ability_Necronomicon_Warrior_Sight extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Necronomicon_Warrior_ManaBurn extends C_DOTABaseAbility {}

declare class C_DOTA_Unit_Hero_Tusk extends C_DOTA_BaseNPC_Hero {}

declare class CDOTA_Ability_Alchemist_AcidSpray extends C_DOTABaseAbility {}

declare class C_DOTA_Unit_Hero_FacelessVoid extends C_DOTA_BaseNPC_Hero {}

declare class C_DOTA_Ability_Morphling_AdaptiveStrike_Agi extends C_DOTABaseAbility {}

declare class CDOTA_Ability_Frostivus2018_FacelessVoid_TimeWalk extends C_DOTABaseAbility/*, C_HorizontalMotionController*/ {
	speed: number
	range: number
	radius: number
	damage: number
}

declare class C_DOTA_Item_RingOfTarrasque extends C_DOTA_Item {}

declare class C_DOTA_BaseNPC_Tusk_Sigil extends C_DOTA_BaseNPC_Additive {
	readonly m_angInitialAngles: QAngle
}

declare class C_IngameEvent_WM2017 extends C_IngameEvent_Base {}

declare class C_DOTA_Ability_Special_Bonus_Cast_Range_350 extends C_DOTABaseAbility {}

declare class C_DOTA_DataNonSpectator extends C_BaseEntity {
	readonly m_vecDataTeam: DataTeamPlayer_t[]
	readonly m_bWorldTreeState: bigint[]
	readonly m_vecWorldTreeModelReplacements: TreeModelReplacement_t[]
	readonly m_vDesiredWardPlacement: Vector2D[]
	readonly m_nEnemyStartingPosition: number[]
	m_nTotalEventPoints: number
	m_nCaptainInspectedHeroID: number
	readonly m_flSuggestedWardWeights: number[]
	readonly m_nSuggestedWardIndexes: number[]
	readonly m_iSuggestedLanes: number[]
	readonly m_iSuggestedLaneWeights: number[]
	readonly m_bSuggestedLaneRoam: boolean[]
	readonly m_bSuggestedLaneJungle: boolean[]
}

declare class DataTeamPlayer_t {
	m_iReliableGold: number
	m_iUnreliableGold: number
	m_iStartingPosition: number
	m_iTotalEarnedGold: number
	m_iTotalEarnedXP: number
	m_iSharedGold: number
	m_iHeroKillGold: number
	m_iCreepKillGold: number
	m_iIncomeGold: number
	m_iNetWorth: number
	m_iDenyCount: number
	m_iLastHitCount: number
	m_iLastHitStreak: number
	m_iLastHitMultikill: number
	m_iNearbyCreepDeathCount: number
	m_iClaimedDenyCount: number
	m_iClaimedMissCount: number
	m_iMissCount: number
	m_nPossibleHeroSelection: number
	m_iMetaLevel: number
	m_iMetaExperience: number
	m_iMetaExperienceAwarded: number
	m_flBuybackCooldownTime: number
	m_flBuybackGoldLimitTime: number
	m_flBuybackCostTime: number
	m_flCustomBuybackCooldown: number
	m_fStuns: number
	m_fHealing: number
	m_iTowerKills: number
	m_iRoshanKills: number
	readonly m_hCameraTarget: C_BaseEntity
	readonly m_hOverrideSelectionEntity: C_BaseEntity
	m_iObserverWardsPlaced: number
	m_iSentryWardsPlaced: number
	m_iCreepsStacked: number
	m_iCampsStacked: number
	m_iRunePickups: number
	m_iGoldSpentOnSupport: number
	m_iHeroDamage: number
	m_iWardsPurchased: number
	m_iWardsDestroyed: number
	readonly m_PreGameInventory: C_DOTA_UnitInventory
	readonly m_nKillsPerOpposingTeamMember: number[]
	readonly m_iSuggestedAbilities: number[]
	readonly m_fSuggestedAbilityWeights: number[]
	readonly m_iSuggestedPregameItems: number[]
	readonly m_iSuggestedItemSequences: number[]
	readonly m_iSuggestedWeightedItems: WeightedSuggestion_t[]
	readonly m_iSuggestedHeroes: number[]
	readonly m_flSuggestedHeroesWeights: number[]
	m_iCommandsIssued: number
	m_iGoldSpentOnConsumables: number
	m_iGoldSpentOnItems: number
	m_iGoldSpentOnBuybacks: number
	m_iGoldLostToDeath: number
}

declare class TreeModelReplacement_t {
	m_nBinaryObjectID: number
	readonly m_szModel: number[]
}

declare class C_TeamRoundTimer extends C_BaseEntity {
	m_bTimerPaused: boolean
	m_flTimeRemaining: number
	m_flTimerEndTime: number
	m_bIsDisabled: boolean
	m_bShowInHUD: boolean
	m_nTimerLength: number
	m_nTimerInitialLength: number
	m_nTimerMaxLength: number
	m_bAutoCountdown: boolean
	m_nSetupTimeLength: number
	m_nState: number
	m_bStartPaused: boolean
	m_bInCaptureWatchState: boolean
	m_flTotalTime: number
	m_bStopWatchTimer: boolean
	m_bFireFinished: boolean
	m_bFire5MinRemain: boolean
	m_bFire4MinRemain: boolean
	m_bFire3MinRemain: boolean
	m_bFire2MinRemain: boolean
	m_bFire1MinRemain: boolean
	m_bFire30SecRemain: boolean
	m_bFire10SecRemain: boolean
	m_bFire5SecRemain: boolean
	m_bFire4SecRemain: boolean
	m_bFire3SecRemain: boolean
	m_bFire2SecRemain: boolean
	m_bFire1SecRemain: boolean
	m_nOldTimerLength: number
	m_nOldTimerState: number
}

declare class C_DOTA_Item_Cyclone extends C_DOTA_Item {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Naga_Siren_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Exp_Boost_20 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Respawn_Reduction_50 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Movement_Speed_90 extends C_DOTABaseAbility {}

declare class C_DOTA_Item_Recipe_Diffusal_Blade extends C_DOTA_Item {}

declare class C_DOTA_Item_VoidStone extends C_DOTA_Item {}

declare class C_DOTA_Ability_DarkWillow_LeyConduit extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_SkeletonKing_HellfireBlast extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Oracle extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Spectre_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_HP_225 extends C_DOTABaseAbility {}

declare class C_FoWBlockerEntity extends C_BaseEntity {}

declare class C_DOTA_Item_Vanguard extends C_DOTA_Item {}

declare class C_DOTA_Ability_AntiMage_Blink extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Clockwerk_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Bane_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Medusa_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Attack_Range_300 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_HP_Regen_4 extends C_DOTABaseAbility {}

declare class CDOTA_Ability_FillerAbility extends C_DOTABaseAbility {}

declare class C_EnvProjectedTexture extends C_ModelPointEntity/*, CProjectedTextureBase*/ {
	// Low-priority parent definition [CProjectedTextureBase]
	readonly m_hTargetEntity: C_BaseEntity
	m_bState: boolean
	m_bAlwaysUpdate: boolean
	m_flLightFOV: number
	m_bEnableShadows: boolean
	m_bSimpleProjection: boolean
	m_bLightOnlyTarget: boolean
	m_bLightWorld: boolean
	m_bCameraSpace: boolean
	m_flBrightnessScale: number
	readonly m_LightColor: Color
	m_flIntensity: number
	m_flLinearAttenuation: number
	m_flQuadraticAttenuation: number
	m_bVolumetric: boolean
	m_flVolumetricIntensity: number
	m_flNoiseStrength: number
	m_flFlashlightTime: number
	m_nNumPlanes: number
	m_flPlaneOffset: number
	m_flColorTransitionTime: number
	m_flAmbient: number
	readonly m_SpotlightTextureName: number[]
	m_nSpotlightTextureFrame: number
	m_nShadowQuality: number
	m_flNearZ: number
	m_flFarZ: number
	m_flProjectionSize: number
	m_flRotation: number
	m_bFlipHorizontal: boolean
}

declare class C_DOTA_Ability_Visage_SummonFamiliars extends C_DOTABaseAbility {
	readonly szUnitName: number[]
	readonly m_hExistingUnits: C_BaseEntity[]
}

declare class C_DOTA_PhantomAssassin_Gravestone extends C_DOTA_BaseNPC_Additive {
	m_nVictimPlayerID: number
}

declare class C_DOTA_Unit_Hero_CrystalMaiden extends C_DOTA_BaseNPC_Hero {
	m_iParticleMouthIndex: number
	m_iParticleHandRIndex: number
}

declare class C_DOTA_Ability_Frostivus2018_DarkWillow_Bedlam extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Treant_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Underlord_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Warlock_5 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Ember_Spirit_3 extends C_DOTABaseAbility {}

declare class CBodyComponentBaseModelEntity extends CBodyComponentSkeletonInstance {
	readonly __m_pChainEntity: CNetworkVarChainer
}

declare class C_DOTA_Ability_TrollWarlord_Whirling_Axes_Melee extends C_DOTABaseAbility {
	readonly m_hAxes: C_BaseEntity[]
	m_nAxeIdx: number
}

declare class C_DOTA_Ability_DrowRanger_FrostArrows extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Holdout_Omnislash extends C_DOTABaseAbility {
	image_travel_speed: number
	image_radius: number
	jugg_travel_speed: number
	juggcounter: number
	range: number
	m_bFirstProjectileFinished: boolean
	readonly m_vCastDir: Vector
	readonly m_vPos: Vector
	readonly m_vJuggStartLocation: Vector
	m_flRange: number
	readonly m_hEntities: C_BaseEntity[]
}

declare class C_DOTA_Ability_Special_Bonus_Unique_Storm_Spirit_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Elder_Titan_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Legion_Commander extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_HP_Regen_40 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_HP_275 extends C_DOTABaseAbility {}

declare class C_DOTA_BaseNPC_RotatableBuilding extends C_DOTA_BaseNPC {
	m_nAmbientFXIndex: number
	m_nTPFXIndex: number
	m_nStatusFXIndex: number
	readonly m_angInitialAngles: QAngle
	m_fHeroStatueCycle: number
	m_iHeroStatueStatusEffectIndex: number
	m_bHeroStatue: boolean
	m_bBattleCup: boolean
	readonly m_HeroStatueInscription: number[]
	m_iHeroStatueOwnerPlayerID: number
	readonly m_ParticleTintColor: Color
}

declare class C_BaseAttributableItem extends C_EconEntity {}

declare class C_SkyCamera extends C_BaseEntity {
	readonly m_skyboxData: sky3dparams_t
	m_bUseAngles: boolean
	readonly m_pNext: C_SkyCamera
}

declare class C_EnvClock extends C_BaseEntity {
	readonly m_hHourHand: C_BaseEntity
	readonly m_hMinuteHand: C_BaseEntity
	readonly m_hSecondHand: C_BaseEntity
	m_flStartGameTime: number
	m_flStartClockSeconds: number
}

declare class C_DOTA_Item_Recipe_Satanic extends C_DOTA_Item {}

declare class C_DOTA_Unit_Hero_ChaosKnight extends C_DOTA_BaseNPC_Hero {}

declare class C_DOTA_Ability_DarkSeer_WallOfReplica extends C_DOTABaseAbility {
	m_bIsBasePointSet: boolean
	m_bIsMidQuickcast: boolean
	readonly m_vBasePoint: Vector
	m_nFXTarget: number
	width: number
}

declare class C_DOTA_Ability_GnollAssassin_EnvenomedWeapon extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Sniper_1 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Cooldown_Reduction_30 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Armor_30 extends C_DOTABaseAbility {}

declare class C_DOTA_Unit_Fountain extends C_DOTA_BaseNPC_Building {}

declare class C_EntityDissolve extends C_BaseModelEntity {
	m_flStartTime: number
	m_flFadeInStart: number
	m_flFadeInLength: number
	m_flFadeOutModelStart: number
	m_flFadeOutModelLength: number
	m_flFadeOutStart: number
	m_flFadeOutLength: number
	m_flNextSparkTime: number
	m_nDissolveType: EntityDisolveType_t
	readonly m_vDissolverOrigin: Vector
	m_nMagnitude: number
	m_bCoreExplode: boolean
	m_bLinkedToServerEnt: boolean
}

declare class C_World extends C_BaseModelEntity {
}

declare class C_DOTA_Ability_Legion_Commander_Duel extends C_DOTABaseAbility {}

declare class C_DOTA_Unit_Hero_Omniknight extends C_DOTA_BaseNPC_Hero {}

declare class C_DOTA_Ability_StormSpirit_Overload extends C_DOTABaseAbility {}

declare class C_IngameEvent_FM2016 extends C_IngameEvent_Base {}

declare class C_DOTA_Ability_BigThunderLizard_Slam extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Centaur_1 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Lifesteal_25 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Spell_Amplify_15 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Attack_Damage_35 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_All_Stats_12 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_MP_300 extends C_DOTABaseAbility {}

declare class C_DOTA_PlayerResource extends C_BaseEntity {
	m_bWasDataUpdateCreated: boolean
	readonly m_vecPlayerTeamData: PlayerResourcePlayerTeamData_t[]
	readonly m_vecPlayerData: PlayerResourcePlayerData_t[]
	readonly m_vecBrodcasterData: PlayerResourceBroadcasterData_t[]
	readonly m_vecEventsForDisplay: number[]
	m_nPrimaryEventIndex: number
	readonly m_iEstimatedMatchDurationRadiant: number[]
	readonly m_iEstimatedMatchDurationDire: number[]
	m_nObsoleteEventIDAssociatedWithEventData: number
	readonly m_playerIDToPlayer: C_BaseEntity[]
	readonly m_iszName: string[]
	readonly m_iszHTMLSafeName: string[]
	readonly m_iszFilteredHTMLSafeName: string[]
	m_bDirtySuggestedItems: boolean
	m_bDirtyEstimatedMatchDuration: boolean
	m_bDirtySelection: boolean
	m_bHasWorldTreesChanged: boolean
	m_bWorldTreeModelsChanged: boolean
	readonly m_bSwapWillingness: boolean[]
	readonly m_hTeamCouriers: C_BaseEntity[][]
	readonly m_hPlayerCouriers: C_BaseEntity[][]
	readonly m_vecOnstageHomeTeams: number[]
	readonly m_pPlayerIDToOnstageSlot: PlayerSeatAssignment_t[]
	readonly m_vecOnstagePlayerSeats: PlayerSeatAssignment_t[]
	m_nEventNPCReplaced: number
	m_nEventPlayerInfo: number
}

declare class PlayerResourcePlayerTeamData_t {
	m_nSelectedHeroID: number
	m_iKills: number
	m_iAssists: number
	m_iDeaths: number
	m_iStreak: number
	m_iLevel: number
	m_iRespawnSeconds: number
	m_iLastBuybackTime: number
	readonly m_hSelectedHero: C_BaseEntity
	m_bAFK: boolean
	readonly m_nSuggestedHeroes: number[]
	readonly m_bBanSuggestedHeroes: boolean[]
	m_bVoiceChatBanned: boolean
	m_iTimedRewardDrops: number
	m_iTimedRewardDropOrigins: number
	m_iTimedRewardCrates: number
	m_iTimedRewardEvents: number
	m_unCompendiumLevel: number
	m_bCanRepick: boolean
	m_bCanEarnRewards: boolean
	m_bHasRandomed: boolean
	m_nRandomedHeroID: number
	m_bBattleBonusActive: boolean
	m_iBattleBonusRate: number
	m_iCustomBuybackCost: number
	readonly m_CustomPlayerColor: Color
	m_bQualifiesForPAContractReward: boolean
	m_bHasPredictedVictory: boolean
	m_UnitShareMasks: number
	m_iTeamSlot: number
	m_iBattleCupWinStreak: number
	m_iBattleCupWinDate: bigint
	m_iBattleCupSkillLevel: number
	m_iBattleCupTeamID: number
	m_iBattleCupTournamentID: number
	m_iBattleCupDivision: number
	m_flTeamFightParticipation: number
	m_iFirstBloodClaimed: number
	m_iFirstBloodGiven: number
	m_unPickOrder: number
	m_iAvailableSalutes: number
	m_flTimeOfLastSaluteSent: number
	readonly m_vecPlayerEventData: PlayerResourcePlayerEventData_t[]
	m_unSelectedHeroBadgeXP: number
	m_iObsoleteEventPoints: number
	m_iObsoleteEventPremiumPoints: number
	m_iObsoleteEventWagerTokensRemaining: number
	m_iObsoleteEventWagerTokensMax: number
	m_iObsoleteEventEffectsMask: number
	m_iObsoleteEventRanks: number
	m_bObsoleteIsEventOwned: boolean
	m_iObsoleteRankWagersAvailable: number
	m_iObsoleteRankWagersMax: number
	m_iObsoleteEventPointAdjustmentsRemaining: number
}

declare class C_DOTA_Item_Physical extends C_BaseAnimating {
	readonly m_hItem: C_BaseEntity
	readonly m_hOldItem: C_BaseEntity
	m_bShowingTooltip: boolean
}

declare class CDOTA_Ability_Grimstroke_DarkArtistry extends C_DOTABaseAbility {
	readonly m_vCastDir: Vector
	m_fStartTime: number
	m_fTotalTime: number
	m_nProjectileID: number
	readonly m_vProjectileDir: Vector
	m_nFXIndex: number
	m_nFXIndexB: number
	m_nTargetsHit: number
	m_nHeroesHit: number
	m_nVisibleHeroesHit: number
	m_fDmgMultiplierTalent: number
	slow_duration: number
	start_radius: number
	end_radius: number
	damage: number
	bonus_damage_per_target: number
	vision_duration: number
}

declare class CDOTA_Ability_Winter_Wyvern_Splinter_Blast extends C_DOTABaseAbility {}

declare class CDOTA_Ability_Techies_StasisTrap extends C_DOTABaseAbility {
	m_nFXIndex: number
	readonly m_hTrap: C_BaseEntity
}

declare class C_DOTA_Ability_Huskar_Life_Break extends C_DOTABaseAbility/*, C_HorizontalMotionController*/ {
	readonly m_vProjectileLocation: Vector
	readonly m_hTarget: C_BaseEntity
	m_bInterrupted: boolean
}

declare class C_DOTA_Ability_DragonKnight_DragonBlood extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Courier_ReturnStashItems extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Necrolyte_Death_Pulse extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Wisp extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_MP_Regen_10 extends C_DOTABaseAbility {}

declare class C_DOTA_Item_RuneSpawner_Bounty extends C_BaseAnimating {
	m_nRuneType: DOTA_RUNES
	m_flLastSpawnTime: number
}

declare class C_BaseTrigger extends C_BaseToggle {
	m_bClientSidePredicted: boolean
}

declare class C_DOTA_Item_Necronomicon extends C_DOTA_Item {
	readonly m_hWarrior: C_BaseEntity
	readonly m_hArcher: C_BaseEntity
}

declare class C_DOTA_Item_QuellingBlade extends C_DOTA_Item {}

declare class CDOTA_Ability_Grimstroke_SpiritWalk extends C_DOTABaseAbility {
	buff_duration: number
}

declare class C_DOTA_Ability_Gyrocopter_Flak_Cannon extends C_DOTABaseAbility {}

declare class CDOTA_Ability_Morphling_Hybrid extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Earthshaker_Aftershock extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_AntiMage_ManaVoid extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Omniknight_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Earthshaker_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Invoker_9 extends C_DOTABaseAbility {}

declare class C_DOTA_Unit_Hero_ShadowShaman extends C_DOTA_BaseNPC_Hero {}

declare class CServerOnlyModelEntity extends C_BaseModelEntity {}

declare class C_DOTA_Ability_Lycan_SummonWolves_CriticalStrike extends C_DOTABaseAbility {}

declare class CDOTA_Ability_Gyrocopter_Call_Down extends C_DOTABaseAbility {
	range_scepter: number
}

declare class C_DOTA_Ability_DeathProphet_Silence extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Roshan_Devotion extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Courier_TransferItems_ToOtherPlayer extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Bloodseeker_Thirst extends C_DOTABaseAbility {}

declare class C_DOTA_Unit_Hero_SandKing extends C_DOTA_BaseNPC_Hero {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Lone_Druid_6 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Attack_Range_175 extends C_DOTABaseAbility {}

declare class CDOTA_VR_TrackedController extends C_BaseAnimating {
	m_nControllerIndex: number
	m_bAimingTeleport: boolean
	m_nTeleportBeamFXIndex: number
	m_bSwitchedScale: boolean
	m_nInteractBeamFXIndex: number
	m_bVirtualMouseDown: boolean
	m_bDraggingTerrain: boolean
	readonly m_vDragControllerStart: Vector
	readonly m_vDragAnchorStart: Vector
	m_bMenuButtonPressed: boolean
	m_bScaleButtonPressed: boolean
	m_nFXMenuButtonIndex: number
	m_nFXTeamBannerIndex: number
	m_nFXteleporterButtonIndex: number
}

declare class C_DOTA_BaseNPC_Tower extends C_DOTA_BaseNPC_Building {
	m_iRangeFX: number
	readonly m_hTowerAttackTarget: C_BaseEntity
}

declare class C_FuncRotating extends C_BaseModelEntity {}

declare class C_DOTA_Item_Recipe_RingOfAquila extends C_DOTA_Item {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Spirit_Breaker_1 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_HP_100 extends C_DOTABaseAbility {}

declare class C_DOTA_Item_Recipe_Shivas_Guard extends C_DOTA_Item {}

declare class C_DOTA_Item_Recipe_WraithBand extends C_DOTA_Item {}

declare class C_DOTA_Ability_Ogre_Magi_Ignite extends C_DOTABaseAbility {
	m_nFXIndex: number
	m_nMostRecentMulticastCount: number
}

declare class C_DOTA_Ability_Furion_Teleportation extends C_DOTABaseAbility {
	m_nFXIndexStart: number
	m_nFXIndexEnd: number
	m_nFXIndexEndTeam: number
}

declare class C_DOTA_Ability_NianCharge extends C_DOTABaseAbility/*, C_HorizontalMotionController*/ {}

declare class C_DOTA_Unit_Hero_Juggernaut extends C_DOTA_BaseNPC_Hero {
	m_unOmniKills: number
}

declare class C_DOTA_Ability_Bane_NightmareEnd extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Greevil_Miniboss_Sight extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Tidehunter_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Phantom_Lancer_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Attack_Speed_45 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_MP_200 extends C_DOTABaseAbility {}

declare class C_WaterBullet extends C_BaseAnimating {}

declare class C_DOTA_Item_Yasha extends C_DOTA_Item {}

declare class C_DOTA_Item_Recipe_GreaterCritical extends C_DOTA_Item {}

declare class C_DOTA_Ability_Techies_Suicide extends C_DOTABaseAbility {
	m_unSuicideKills: number
}

declare class C_DOTA_Ability_Silencer_GlaivesOfWisdom extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Rattletrap_Hookshot extends C_DOTABaseAbility {
	m_nFXIndex: number
	readonly m_vProjectileVelocity: Vector
	m_bRetract: boolean
}

declare class C_DOTA_Ability_Frostivus2018_Throw_Snowball extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Morphling_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Ursa_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_HP_Regen_30 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_HP_Regen_25 extends C_DOTABaseAbility {}

declare class C_DOTA_NeutralSpawner extends C_PointEntity {
	m_Type: number
}

declare class C_DOTA_Item_MeteorHammer extends C_DOTA_Item {
	m_nFXIndex: number
	m_nFXIndexB: number
}

declare class CDOTA_Ability_Necronomicon_Archer_Purge extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Alchemist_UnstableConcoction extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Greevil_Miniboss_Blue_ColdFeet extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_AncientGolem_Rockslide extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Bane_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Spell_Lifesteal_10 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_BackdoorProtectionInBase extends C_DOTABaseAbility {}

declare class CDOTA_Item_ObserverWard extends C_DOTA_Item {}

declare class C_DOTA_NPC_Techies_Minefield_Sign extends C_DOTA_BaseNPC_Additive {}

declare class CDOTA_Ability_Techies_RemoteMines_SelfDetonate extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Ogre_Magi_Multicast extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_ChaosKnight_Reality_Rift extends C_DOTABaseAbility {
	m_flPercentage: number
	readonly m_FXIndex: number[]
}

declare class C_DOTA_Unit_LoopingSound extends C_DOTA_BaseNPC_Additive {
	m_nPrevLoopingSoundParity: number
	readonly m_pszNetworkedSoundLoop: number[]
	m_nLoopingSoundParity: number
}

declare class C_DOTA_Ability_TemplarAssassin_PsiBlades extends C_DOTABaseAbility {}

declare class C_DOTA_Unit_Hero_Puck extends C_DOTA_BaseNPC_Hero {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Vengeful_Spirit_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Outworld_Devourer_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Brewmaster_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Cooldown_Reduction_50 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Spell_Amplify_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Attack_Damage_30 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Agility_8 extends C_DOTABaseAbility {}

declare class C_DOTA_Item_Flying_Courier extends C_DOTA_Item {
	m_fNextThinkTime: number
}

declare class C_DOTA_Item_BlinkDagger extends C_DOTA_Item {}

declare class C_DOTA_Unit_Hero_BountyHunter extends C_DOTA_BaseNPC_Hero {}

declare class C_DOTA_Ability_Windrunner_Windrun extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Templar_Assassin_6 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Lycan_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Attack_Speed_35 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_HP_125 extends C_DOTABaseAbility {}

declare class C_SceneEntity extends C_PointEntity {
	m_bIsPlayingBack: boolean
	m_bPaused: boolean
	m_bMultiplayer: boolean
	m_bAutogenerated: boolean
	m_flForceClientTime: number
	m_nSceneStringIndex: number
	m_bClientOnly: boolean
	readonly m_hOwner: C_BaseEntity
	readonly m_hActorList: C_BaseEntity[]
	m_bWasPlaying: boolean
	m_flCurrentTime: number
}

declare class CDOTA_Item_RiverPainter5 extends C_DOTA_Item_RiverPainter {}

declare class C_DOTA_Item_EchoSabre extends C_DOTA_Item {}

declare class C_DOTA_Ability_SpiritBreaker_EmpoweringHaste extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Weaver_TimeLapse extends C_DOTABaseAbility {
	m_nNPCSpawnedID: number
}

declare class C_DOTA_Unit_Hero_Life_Stealer extends C_DOTA_BaseNPC_Hero {
	m_bHadScepter: boolean
}

declare class CDOTA_Unit_Announcer extends C_DOTA_BaseNPC {
	readonly m_currentAnnouncer: CAnnouncerDescriptor
}

declare class C_DOTA_Ability_Special_Bonus_Unique_Shadow_Demon_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Alchemist_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Storm_Spirit_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Item_Bloodstone extends C_DOTA_Item {}

declare class C_DOTA_Item_UltimateScepter extends C_DOTA_Item {}

declare class C_DOTA_Ability_Phoenix_SunRayToggleMove extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Wraith_King_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Winter_Wyvern_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Phantom_Lancer_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_TrueStrike extends C_DOTABaseAbility {}

declare class C_DOTA_Unit_Hero_Clinkz extends C_DOTA_BaseNPC_Hero {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Batrider_1 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Phantom_Assassin_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Attack_Damage_100 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Magic_Resistance_40 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Armor_10 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Intelligence_8 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Attack_Speed_100 extends C_DOTABaseAbility {}

declare class C_DOTA_Item_BladeOfAlacrity extends C_DOTA_Item {}

declare class C_DOTA_Ability_Brewmaster_WindWalk extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Pugna_Decrepify extends C_DOTABaseAbility {}

declare class C_DOTA_BaseNPC_Creep_Talking extends C_DOTA_BaseNPC_Creep {}

declare class C_DOTA_Item_Recipe_Soul_Booster extends C_DOTA_Item {}

declare class C_DOTA_Ability_ArcWarden_Flux extends C_DOTABaseAbility {}

declare class C_DOTA_Unit_Hero_Techies extends C_DOTA_BaseNPC_Hero {
	m_bLastDeathFromSuicide: boolean
}

declare class C_DOTA_Ability_Dazzle_Weave extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Zuus_ThundergodsVengeance extends C_DOTA_Ability_Zuus_ThundergodsWrath {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Wraith_King_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Lifesteal_30 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Spell_Amplify_25 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Agility_6 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_HP_175 extends C_DOTABaseAbility {}

declare class C_DOTA_Item_Slippers extends C_DOTA_Item {}

declare class C_DOTA_Ability_Terrorblade_Metamorphosis extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Magnataur_ReversePolarity extends C_DOTABaseAbility {
	m_nFXIndex: number
	readonly m_vPullLocation: Vector
}

declare class C_DOTA_Ability_Brewmaster_Cyclone extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Courier_TakeStashItems extends C_DOTABaseAbility {}

declare class C_DOTA_Unit_Hero_Necrolyte extends C_DOTA_BaseNPC_Hero {}

declare class CDOTA_Ability_Frostivus2018_Clinkz_Strafe extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_SatyrTrickster_Purge extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Razor extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Visage_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Respawn_Reduction_25 extends C_DOTABaseAbility {}

declare class C_DOTA_Item_Recipe_Assault_Cuirass extends C_DOTA_Item {}

declare class C_DOTA_Item_Hyperstone extends C_DOTA_Item {}

declare class C_DOTA_Ability_NagaSiren_RipTide extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Omniknight_Purification extends C_DOTABaseAbility {}

declare class C_DOTA_Unit_Roshan extends C_DOTA_BaseNPC_Additive {
	m_iLastHealthPercent: number
	m_nFXIndex: number
	readonly m_hAttackingHeroes: C_BaseEntity[]
	m_bGoldenRoshan: boolean
}

declare class C_DOTA_Ability_WitchDoctor_Maledict extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Kunkka_Torrent extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Greevil_Miniboss_Blue_IceVortex extends C_DOTABaseAbility {
	vision_aoe: number
}

declare class C_DOTA_Ability_Special_Bonus_Unique_Dragon_Knight extends C_DOTABaseAbility {}

declare class C_FuncCombineBarrier extends C_FuncBrush {
	m_nAmbientEffect: number
	readonly m_EffectName: string
	m_eBarriersize: number
	m_eBarrierState: number
}

declare class C_DOTA_Item_Buckler extends C_DOTA_Item {}

declare class C_DOTA_Ability_Medusa_SplitShot extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_DoomBringer_ScorchedEarth extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_WitchDoctor_VoodooRestoration extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Morphling_Morph_Str extends C_DOTABaseAbility {}

declare class C_DOTA_TempTree extends C_BaseAnimating {
	m_fExpireTime: number
	readonly m_vecTreeCircleCenter: Vector
}

declare class C_DOTA_Ability_Special_Bonus_Unique_Skywrath_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Magnus_5 extends C_DOTABaseAbility {}

declare class C_DOTA_BinaryObject extends C_BaseAnimating {
	m_bActive: boolean
	m_nBinaryID: number
}

declare class C_Fish extends C_BaseAnimating {
	readonly m_pos: Vector
	readonly m_vel: Vector
	readonly m_angles: QAngle
	m_localLifeState: number
	m_deathDepth: number
	m_deathAngle: number
	m_buoyancy: number
	readonly m_wiggleTimer: CountdownTimer
	m_wigglePhase: number
	m_wiggleRate: number
	readonly m_actualPos: Vector
	readonly m_actualAngles: QAngle
	readonly m_poolOrigin: Vector
	m_waterLevel: number
	m_gotUpdate: boolean
	m_x: number
	m_y: number
	m_z: number
	m_angle: number
	readonly m_errorHistory: number[]
	m_errorHistoryIndex: number
	m_errorHistoryCount: number
	m_averageError: number
}

declare class C_DOTA_Unit_Hero_DarkWillow extends C_DOTA_BaseNPC_Hero {}

declare class CDOTA_Ability_Frostivus2018_Spectre_ActiveDispersion extends C_DOTABaseAbility {
	m_nPreviewFX: number
	duration: number
}

declare class C_DOTA_Ability_Special_Bonus_Unique_Nyx_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Techies_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Cast_Range_275 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_AttributeBonus extends C_DOTABaseAbility {}

declare class C_CaptureCallbackHandler extends C_BaseEntity {}

declare class C_TestTraceline extends C_BaseModelEntity {}

declare class C_DOTA_Item_Recipe_Necronomicon extends C_DOTA_Item {}

declare class C_DOTA_Unit_Hero_Pangolier extends C_DOTA_BaseNPC_Hero {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Elder_Titan_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Gyrocopter_3 extends C_DOTABaseAbility {}

declare class CBaseAnimatingOverlayController extends CBaseAnimatingController {
	readonly m_AnimOverlay: CAnimationLayer[]
}

declare class CLogicalEntity extends C_BaseEntity {}

declare class CDOTA_Item_Recipe_Kaya_And_Sange extends C_DOTA_Item {}

declare class C_DOTA_Item_Black_King_Bar extends C_DOTA_Item {}

declare class C_DOTA_Ability_DarkSeer_Surge extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Kunkka_GhostShip extends C_DOTABaseAbility {
	buff_duration: number
	stun_duration: number
	ghostship_width: number
	ghostship_width_scepter: number
	readonly m_vFinalDestination: Vector
	readonly m_vStartingPoint: Vector
}

declare class CDOTA_Ability_Frostivus2018_Luna_Eclipse extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_DarkWillow_1 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Lich_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Lich_1 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Vengeful_Spirit_6 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Kunkka extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Windranger_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_All_Stats_15 extends C_DOTABaseAbility {}

declare class CBaseProp extends C_BaseAnimating {
	readonly m_HandPoses: handposepair_t[]
}

declare class C_DOTA_Unit_Undying_Tombstone extends C_DOTA_BaseNPC_Additive {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Wraith_King_1 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Furion extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Lone_Druid_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Magic_Resistance_30 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Cleave_40 extends C_DOTABaseAbility {}

declare class C_DOTA_Item_Flask extends C_DOTA_Item {}

declare class C_DOTA_Unit_Hero_Ogre_Magi extends C_DOTA_BaseNPC_Hero {}

declare class C_DOTA_Ability_LoneDruid_SpiritBear extends C_DOTABaseAbility {
	m_bLevelChanged: boolean
	readonly m_hBear: C_BaseEntity
	readonly m_hPreBear: C_BaseEntity
}

declare class C_DOTA_Ability_PhantomAssassin_Stifling_Dagger extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Sniper_Headshot extends C_DOTABaseAbility {}

declare class CDOTA_Ability_ShootFirework extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Treant_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Shadow_Shaman_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Abaddon_5 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_50_Crit_40 extends C_DOTABaseAbility {}

declare class C_DOTA_Item_Recipe_Ring_Of_Basilius extends C_DOTA_Item {}

declare class C_DOTA_Ability_Brewmaster_DispelMagic extends C_DOTABaseAbility {}

declare class CDOTA_Ability_Life_Stealer_AssimilateEject extends C_DOTABaseAbility {}

declare class C_DOTA_Unit_Hero_DrowRanger extends C_DOTA_BaseNPC_Hero {}

declare class C_IngameEvent_DotaPrime extends C_IngameEvent_Base {}

declare class C_BreakableProp extends CBaseProp {
	readonly m_OnBreak: CEntityIOOutput
	readonly m_OnTakeDamage: CEntityIOOutput
	m_impactEnergyScale: number
	m_iMinHealthDmg: number
	m_iPhysicsMode: number
	m_flPressureDelay: number
	readonly m_hBreaker: C_BaseEntity
	m_PerformanceMode: PerformanceMode_t
	m_flDmgModBullet: number
	m_flDmgModClub: number
	m_flDmgModExplosive: number
	m_flDmgModFire: number
	readonly m_iszPhysicsDamageTableName: string
	readonly m_iszBreakableModel: string
	m_iBreakableSkin: number
	m_iBreakableCount: number
	m_iMaxBreakableSize: number
	readonly m_iszBasePropData: string
	m_iInteractions: number
	m_explodeDamage: number
	m_explodeRadius: number
	m_nCarryTypeOverride: number
	m_flPreventDamageBeforeTime: number
	m_iNumBreakableChunks: number
	readonly m_hPhysicsAttacker: C_BaseEntity
	m_flLastPhysicsInfluenceTime: number
	m_bBlockLOSSetByPropData: boolean
	m_bIsWalkableSetByPropData: boolean
	m_flDefaultFadeScale: number
	m_explosionType: explosion_t
	m_explosionDelay: number
	readonly m_explosionBuildupSound: string
	readonly m_hLastAttacker: C_BaseEntity
	readonly m_hFlareEnt: C_BaseEntity
	m_noGhostCollision: boolean
	m_flClothScale: number
}

declare class C_DOTA_Ability_Special_Bonus_Attack_Speed_120 extends C_DOTABaseAbility {}

declare class C_DOTA_BaseNPC_HoldoutTower extends C_DOTA_BaseNPC_Tower {
	m_iTowerType: DOTA_HOLDOUT_TOWER_TYPE
}

declare class C_DOTA_Item_Recipe_Arcane_Ring extends C_DOTA_Item {}

declare class CDOTA_Ability_Winter_Wyvern_Arctic_Burn extends C_DOTABaseAbility {
	readonly m_BurnedTargets: C_BaseEntity[]
}

declare class C_DOTA_Unit_Hero_LoneDruid extends C_DOTA_BaseNPC_Hero {}

declare class C_DOTA_Ability_Shadow_Demon_Demonic_Purge extends C_DOTABaseAbility {
	max_charges: number
	charge_restore_time: number
}

declare class C_DOTA_Ability_Brewmaster_PermanentImmolation extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Broodmother_IncapacitatingBite extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_VengefulSpirit_Magic_Missile extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Phoenix_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Furion_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Phantom_Assassin_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Armor_20 extends C_DOTABaseAbility {}

declare class C_DOTA_Item_HandOfMidas extends C_DOTA_Item {}

declare class C_DOTA_Unit_Hero_Windrunner extends C_DOTA_BaseNPC_Hero {
	m_nTargetAngle: number
	m_iPoseParameterAim: number
}

declare class C_DOTA_Ability_Tiny_Avalanche extends C_DOTABaseAbility {
	readonly m_vTargetLoc: Vector
}

declare class C_DOTA_Ability_Zuus_Cloud extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Greevil_Miniboss_Yellow_Surge extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Ogre_Magi_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Spell_Amplify_10 extends C_DOTABaseAbility {}

declare class C_DOTA_Item_Tombstone extends C_DOTA_Item {
	m_flTimer: number
	m_nFXIndex: number
	m_nFXIndex2: number
}

declare class C_PortraitWorldUnit extends C_DOTA_BaseNPC {
	m_bSuppressIntroEffects: boolean
	m_bIsAlternateLoadout: boolean
	m_bSpawnBackgroundModels: boolean
	m_bDeferredPortrait: boolean
	m_bShowParticleAssetModifiers: boolean
	m_bIgnorePortraitInfo: boolean
	m_bFlyingCourier: boolean
	m_nEffigyStatusEffect: number
	readonly m_effigySequenceName: string
	m_flStartingAnimationCycle: number
	m_flRareLoadoutAnimChance: number
	readonly m_activityModifier: string
	m_environment: DOTAPortraitEnvironmentType_t
	m_nStartupBehavior: StartupBehavior_t
	readonly m_cameraName: string
	m_nPortraitParticle: number
	m_nCourierType: number
}

declare class C_DOTA_BaseNPC_Creep_Lane extends C_DOTA_BaseNPC_Creep {}

declare class C_DOTA_BaseNPC_Healer extends C_DOTA_BaseNPC_Building {
	m_iRangeFX: number
}

declare class C_EconWearable extends C_EconEntity {}

declare class CDOTA_Ability_Tusk_IceShards_Stop extends C_DOTABaseAbility {}

declare class C_DOTA_DeathProphet_Exorcism_Spirit extends C_BaseAnimating {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Weaver_5 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Skywrath_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Sniper_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Disruptor extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Lone_Druid_5 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Spell_Lifesteal_6 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Gold_Income_40 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_MP_Regen_150 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_HP_Regen_20 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_HP_150 extends C_DOTABaseAbility {}

declare class C_DOTABaseCustomHeroPickRules extends C_BaseEntity {}

declare class C_TriggerCamera extends C_BaseEntity {}

declare class C_PostProcessingVolume extends C_BaseTrigger {
	m_flFadeDuration: number
	m_flMinLogExposure: number
	m_flMaxLogExposure: number
	m_flMinExposure: number
	m_flMaxExposure: number
	m_flExposureCompensation: number
	m_flExposureFadeSpeedUp: number
	m_flExposureFadeSpeedDown: number
	m_bMaster: boolean
	m_bExposureControl: boolean
}

declare class C_DOTA_Ability_EarthSpirit_StoneCaller extends C_DOTABaseAbility {
	max_charges: number
	charge_restore_time: number
}

declare class C_DOTA_Unit_Hero_Bristleback extends C_DOTA_BaseNPC_Hero {}

declare class C_DOTA_Ability_Silencer_GlobalSilence extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Invoker_IceWall extends CDOTA_Ability_Invoker_InvokedBase {}

declare class C_DOTA_Ability_Tidehunter_AnchorSmash extends C_DOTABaseAbility {}

declare class CDOTA_Ability_MudGolem_CloakAura extends C_DOTABaseAbility {}

declare class CDOTA_Ability_BlackDragon_DragonhideAura extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Pudge_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_DeathProphet_Exorcism extends C_DOTABaseAbility {
	readonly m_SpiritInfos: sSpiritInfo[]
}

declare class C_DOTA_PortraitEntity extends C_DOTA_BaseNPC {
	m_iPortraitParticle: number
	m_PortraitActivity: number
	m_nMouthFX: number
	m_nMouthControlPoint: number
	m_bIsSimulationActive: boolean
	m_bNeedsModelInit: boolean
	m_bNeedsPortraitRefresh: boolean
	readonly m_hAppearanceFromNPC: C_BaseEntity
	readonly m_PetIdleTimer: CountdownTimer
}

declare class C_DOTA_Item_Recipe_Black_King_Bar extends C_DOTA_Item {}

declare class C_DOTA_Item_Recipe_BootsOfTravel extends C_DOTA_Item {}

declare class C_DOTA_DarkWillow_Creature extends C_DOTA_BaseNPC {}

declare class C_DOTA_Unit_Hero_EarthSpirit extends C_DOTA_BaseNPC_Hero {}

declare class C_DOTA_Ability_Wisp_Spirits_In extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_NagaSiren_SongOfTheSiren_Cancel extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Omniknight_Degen_Aura extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_DragonKnight_ElderDragonForm extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Nian_Dive extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Frostivus2018_Puck_DreamCoil extends C_DOTABaseAbility {
	readonly m_hThinker: C_BaseEntity
}

declare class C_DOTA_Ability_Special_Bonus_Unique_Shadow_Demon_7 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Silencer_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Techies extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Attack_Range_100 extends C_DOTABaseAbility {}

declare class C_EnvDeferredLight extends C_ModelPointEntity/*, CDeferredLightBase*/ {
	// Low-priority parent definition [CDeferredLightBase]
	readonly m_LightColor: Color
	m_flIntensity: number
	m_flLightSize: number
	m_flSpotFoV: number
	readonly m_vLightDirection: QAngle
	m_flStartFalloff: number
	m_flDistanceFalloff: number
	m_nFlags: number
	readonly m_ProjectedTextureName: number[]
}

declare class C_DynamicProp extends C_BreakableProp {
	readonly m_pOutputAnimBegun: CEntityIOOutput
	readonly m_pOutputAnimOver: CEntityIOOutput
	readonly m_pOutputAnimLoopCycleOver: CEntityIOOutput
	readonly m_iszDefaultAnim: string
	m_iTransitionDirection: number
	m_bAnimateOnServer: boolean
	m_bRandomizeCycle: boolean
	m_bHoldAnimation: boolean
	m_bRandomAnimator: boolean
	m_flNextRandAnim: number
	m_flMinRandAnimDuration: number
	m_flMaxRandAnimDuration: number
	m_bStartDisabled: boolean
	m_bUpdateAttachedChildren: boolean
	m_bScriptedMovement: boolean
	m_bUseHitboxesForRenderBox: boolean
	m_bCreateNonSolid: boolean
	m_bIsOverrideProp: boolean
	m_iInitialGlowState: number
	m_nGlowRange: number
	m_nGlowRangeMin: number
	readonly m_glowColor: Color
	m_iCachedFrameCount: number
	readonly m_vecCachedRenderMins: Vector
	readonly m_vecCachedRenderMaxs: Vector
}

declare class C_DOTA_Item_RiverPainter2 extends C_DOTA_Item_RiverPainter {}

declare class C_DOTA_Ability_Ogre_Magi_Bloodlust extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_LoneDruid_Rabid extends C_DOTABaseAbility {
	rabid_duration: number
}

declare class C_DOTA_Ability_Invoker_EMP extends CDOTA_Ability_Invoker_InvokedBase {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Visage_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Nevermore_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Faceless_Void_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Monkey_King_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Gyrocopter_1 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_MP_Regen_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Attack_Speed_250 extends C_DOTABaseAbility {}

declare class C_DOTA_Item_MaskOfMadness extends C_DOTA_Item {}

declare class C_DOTA_Item_RingOfRegeneration extends C_DOTA_Item {}

declare class C_DOTA_Item_Claymore extends C_DOTA_Item {}

declare class CDOTA_Ability_Special_Bonus_Unique_Grimstroke_4 extends C_DOTABaseAbility {}

declare class CDOTA_Ability_Tusk_Tag_Team extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Ogre_Magi_Unrefined_Fireblast extends C_DOTA_Ability_Ogre_Magi_Fireblast {
	m_nMostRecentMulticastCount: number
}

declare class C_DOTA_Ability_Greevil_Miniboss_Green_LivingArmor extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Invoker_5 extends C_DOTABaseAbility {}

declare class C_DOTA_MapTree extends C_DOTA_BinaryObject {
	m_bInitialized: boolean
}

declare class C_Sprite extends C_BaseModelEntity {
	readonly m_hAttachedToEntity: C_BaseEntity
	m_nAttachment: number
	m_flSpriteFramerate: number
	m_flFrame: number
	m_flDieTime: number
	m_nBrightness: number
	m_flBrightnessDuration: number
	m_flSpriteScale: number
	m_flScaleDuration: number
	m_bWorldSpaceScale: boolean
	m_flGlowProxySize: number
	m_flHDRColorScale: number
	m_flLastTime: number
	m_flMaxFrame: number
	m_flStartScale: number
	m_flDestScale: number
	m_flScaleTimeStart: number
	m_nStartBrightness: number
	m_nDestBrightness: number
	m_flBrightnessTimeStart: number
	m_nSpriteWidth: number
	m_nSpriteHeight: number
}

declare class C_EnvCombinedLightProbeVolume extends C_BaseEntity {
	readonly m_Color: Color
	m_flBrightness: number
	m_bCustomCubemapTexture: boolean
	readonly m_vBoxMins: Vector
	readonly m_vBoxMaxs: Vector
	readonly m_LightGroups: string
	m_bStatic: boolean
	m_nHandshake: number
	m_nIndoorOutdoorLevel: number
	m_nGgxCubemapBlurAccumulationPassCount: number
	m_bStartDisabled: boolean
	m_bEnabled: boolean
}

declare class C_DOTA_Item_Recipe_Dagon4 extends C_DOTA_Item_Recipe_Dagon {}

declare class C_DOTA_Ability_Tusk_WalrusPunch extends C_DOTABaseAbility {}

declare class C_DOTA_Unit_Hero_Disruptor extends C_DOTA_BaseNPC_Hero {}

declare class C_DOTA_Ability_Invoker_Exort extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Bounty_Hunter extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Warlock_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Templar_Assassin_7 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Leshrac_1 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Phoenix_1 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Medusa_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Ancient_Apparition_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Spell_Amplify_8 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_MP_100 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_HP_350 extends C_DOTABaseAbility {}

declare class C_DOTA_BaseNPC_Creep_Neutral extends C_DOTA_BaseNPC_Creep {}

declare class C_DOTA_Unit_Hero_SpiritBreaker extends C_DOTA_BaseNPC_Hero {}

declare class C_PlayerResource extends C_BaseEntity {
	readonly m_szName: string[]
	readonly m_Colors: Color[]
	readonly m_iPing: number[]
	readonly m_iScore: number[]
	readonly m_iDeaths: number[]
	readonly m_bConnected: boolean[]
	readonly m_iTeam: number[]
	readonly m_bAlive: boolean[]
	// readonly m_iHealth: number[] // actually it's this, as C++ allows us replacing types, but .d.ts doesn't
	readonly m_bIsFakePlayer: boolean[]
	m_nEventPlayerInfo: number
}

declare class C_DOTA_Item_Recipe_Hood_Of_Defiance extends C_DOTA_Item {}

declare class C_DOTA_Ability_Slark_ShadowDance extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Chen_HandOfGod extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Faceless_Void extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Luna_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Riki_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Lone_Druid_1 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Cast_Range_125 extends C_DOTABaseAbility {}

declare class C_GenericFlexCyclerAlias_cycler extends C_GenericFlexCycler {}

declare class CDOTA_Ability_AbyssalUnderlord_Firestorm extends C_DOTABaseAbility {
	m_nFXIndex: number
}

declare class C_DOTA_Ability_Disruptor_KineticField extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Nevermore_Shadowraze2 extends C_DOTA_Ability_Nevermore_Shadowraze {}

declare class C_DOTA_Ability_Frostivus2018_Huskar_Burning_Spear extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Wraith_King_8 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Arc_Warden extends C_DOTABaseAbility {}

declare class C_DOTA_DataRadiant extends C_DOTA_DataNonSpectator {}

declare class C_BaseCombatWeapon extends C_BaseAnimating {
	readonly m_hOwner: C_BaseEntity
	m_nViewModelIndex: number
	m_flNextPrimaryAttack: number
	m_flNextSecondaryAttack: number
	m_nQueuedAttack: number
	m_flTimeAttackQueued: number
	m_iState: WeaponState_t
	m_iPrimaryAmmoType: number
	m_iSecondaryAmmoType: number
	m_iClip1: number
	m_iClip2: number
	m_bOnlyPump: boolean
	m_flTimeWeaponIdle: number
	m_flNextEmptySoundTime: number
	m_fMinRange1: number
	m_fMinRange2: number
	m_fMaxRange1: number
	m_fMaxRange2: number
	m_fFireDuration: number
	m_fMinAdvanceToRange1: number
	m_Activity: number
	m_iPrimaryAmmoCount: number
	m_iSecondaryAmmoCount: number
	readonly m_iszName: string
	m_bRemoveable: boolean
	m_bInReload: boolean
	m_bFireOnEmpty: boolean
	m_bFiresUnderwater: boolean
	m_bAltFiresUnderwater: boolean
	m_bReloadsSingly: boolean
	m_IdealActivity: number
	m_iSubType: number
	m_flUnlockTime: number
	readonly m_hLocker: C_BaseEntity
	m_nTracerAttachmentIndex: number
	m_iAltFireHudHintCount: number
	m_iReloadHudHintCount: number
	m_bAltFireHudHintDisplayed: boolean
	m_bReloadHudHintDisplayed: boolean
	m_flHudHintPollTime: number
	m_flHudHintMinDisplayTime: number
	m_bJustRestored: boolean
	m_nLastNetworkedModelIndex: number
	m_nPreDataChangedModelIndex: number
	readonly m_pWorldModelClone: C_CombatWeaponClone
	m_iOldState: WeaponState_t
}

declare class C_CombatWeaponClone extends C_BaseAnimating {
	readonly m_hWeaponParent: C_BaseEntity
	m_nLastUpdatedWorldModelClone: number
}

declare class C_DynamicPropAlias_dynamic_prop extends C_DynamicProp {}

declare class CDOTA_Item_Recipe_Diffusal_Blade2 extends C_DOTA_Item_Recipe_Diffusal_Blade {}

declare class C_DOTA_Unit_Hero_Spectre extends C_DOTA_BaseNPC_Hero {}

declare class C_DOTA_Unit_Hero_Weaver extends C_DOTA_BaseNPC_Hero {}

declare class C_DOTA_Ability_Omniknight_Pacify extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_ShadowShaman_Shackles extends C_DOTABaseAbility {
	readonly m_hShackleTarget: C_BaseEntity
	nShackleFXIndex: number
}

declare class C_DOTA_Ability_Lich_Sinister_Gaze extends C_DOTABaseAbility {
	readonly m_hShackleTarget: C_BaseEntity
}

declare class C_DOTA_Ability_Morphling_Morph_Agi extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Morphling_Morph extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Bloodseeker_Bloodrage extends C_DOTABaseAbility {
	max_charges: number
	charge_restore_time: number
}

declare class C_DotaSubquestEntityDeath extends C_DotaSubquestBase {}

declare class C_DOTA_Ability_BlueDragonspawnOverseer_Evasion extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Earth_Spirit extends C_DOTABaseAbility {}

declare class CLogicRelay extends CLogicalEntity {
	readonly m_OnTrigger: CEntityIOOutput
	readonly m_OnSpawn: CEntityIOOutput
	m_bDisabled: boolean
	m_bWaitForRefire: boolean
	m_bTriggerOnce: boolean
	m_bFastRetrigger: boolean
	m_bPassthoughCaller: boolean
}

declare class C_DOTA_Item_AeonDisk extends C_DOTA_Item {}

declare class CDOTA_Item_Recipe_Hurricane_Pike extends C_DOTA_Item {}

declare class C_DOTA_Item_Aegis extends C_DOTA_Item {}

declare class C_DOTA_Ability_ChaosKnight_Chaos_Bolt extends C_DOTABaseAbility {}

declare class C_DOTA_Unit_Hero_Batrider extends C_DOTA_BaseNPC_Hero {}

declare class CDOTA_Ability_Frostivus2018_Clinkz_SearingArrows extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Jakiro_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Magic_Resistance_25 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Pangolier_HeartPiercer extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Wisp_Overcharge extends C_DOTABaseAbility {}

declare class CDOTA_Ability_Alchemist_ChemicalRage extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_VengefulSpirit_WaveOfTerror extends C_DOTABaseAbility {
	wave_width: number
	wave_speed: number
	m_iProjectile: number
	vision_aoe: number
	vision_duration: number
	m_nNumHeroesHit: number
	readonly m_ViewerTimer: CountdownTimer
}

declare class C_DOTA_Ability_Special_Bonus_Unique_Antimage_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Jakiro_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Ursa_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_HP_Regen_35 extends C_DOTABaseAbility {}

declare class C_TonemapController2Alias_env_tonemap_controller2 extends C_TonemapController2 {}

declare class CDOTA_Item_Recipe_Crimson_Guard extends C_DOTA_Item {}

declare class C_DOTA_Item_Recipe_RodOfAtos extends C_DOTA_Item {}

declare class C_CDOTA_Ability_Treant_LeechSeed extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Meepo_DividedWeStand extends C_DOTABaseAbility {
	m_nWhichDividedWeStand: number
	m_nNumDividedWeStand: number
	readonly m_entPrimeDividedWeStand: C_BaseEntity
	readonly m_entNextDividedWeStand: C_BaseEntity
}

declare class CDOTA_Ability_Pudge_Dismember extends C_DOTABaseAbility {
	readonly m_hVictim: C_BaseEntity
}

declare class C_DOTA_Ability_Special_Bonus_Unique_Witch_Doctor_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Armor_9 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Intelligence_25 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_All_Stats_5 extends C_DOTABaseAbility {}

declare class C_DOTA_BaseNPC_HoldoutTower_ReduceSpeed extends C_DOTA_BaseNPC_HoldoutTower {}

declare class C_PropVehicleDriveable extends C_BaseAnimating {
	readonly m_hPlayer: C_BaseEntity
	m_nSpeed: number
	m_nRPM: number
	m_flThrottle: number
	m_nBoostTimeLeft: number
	m_bHasBoost: boolean
	m_nScannerDisabledWeapons: boolean
	m_nScannerDisabledVehicle: boolean
	m_iFlashTimer: number
	m_bLockedDim: boolean
	m_bLockedIcon: boolean
	m_iScannerWepFlashTimer: number
	m_bScannerWepDim: boolean
	m_bScannerWepIcon: boolean
	m_iScannerVehicleFlashTimer: number
	m_bScannerVehicleDim: boolean
	m_bScannerVehicleIcon: boolean
	m_flSequenceChangeTime: number
	m_bEnterAnimOn: boolean
	m_bExitAnimOn: boolean
	m_flFOV: number
	readonly m_vecGunCrosshair: Vector
	readonly m_vecEyeExitEndpoint: Vector
	m_bHasGun: boolean
	m_bUnableToFire: boolean
	readonly m_hPrevPlayer: C_BaseEntity
	readonly m_ViewSmoothingData: C_ViewSmoothingData_t
}

declare class CDOTA_Item_Recipe_Nullifier extends C_DOTA_Item {}

declare class C_DOTA_Ability_Beastmaster_CallOfTheWild_Hawk extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_BlackDragon_SplashAttack extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Crystal_Maiden_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Bloodseeker_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Wisp_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Cast_Range_75 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Cleave_20 extends C_DOTABaseAbility {}

declare class CDOTA_Item_Recipe_Solar_Crest extends C_DOTA_Item {}

declare class C_DOTA_Ability_Terrorblade_Reflection extends C_DOTABaseAbility {
	m_nFXIndex: number
}

declare class CDOTA_Ability_Tusk_WalrusKick extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Visage_SummonFamiliars_StoneForm extends C_DOTABaseAbility {}

declare class C_DOTA_Unit_Hero_Naga_Siren extends C_DOTA_BaseNPC_Hero {}

declare class C_DOTA_Unit_Hero_Bane extends C_DOTA_BaseNPC_Hero {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Pangolier_7 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Vengeful_Spirit_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Cast_Range_200 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Magic_Resistance_15 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_HP_Regen_8 extends C_DOTABaseAbility {}

declare class C_TFWearableItem extends C_EconWearable {}

declare class C_DOTA_Item_DragonLance extends C_DOTA_Item {}

declare class C_DOTA_Ability_BountyHunter_Track extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Clinkz_DeathPact extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Life_Stealer_Infest extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Rubick_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Venomancer extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Dragon_Knight_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Naga_Siren_3 extends C_DOTABaseAbility {}

declare class CDOTA_Item_Recipe_Lotus_Orb extends C_DOTA_Item {}

declare class C_DOTA_Item_PointBooster extends C_DOTA_Item {}

declare class C_DOTA_Ability_EmberSpirit_Activate_FireRemnant extends C_DOTABaseAbility/*, C_HorizontalMotionController*/ {
	m_nProjectileID: number
	readonly m_vStartLocation: Vector
	readonly m_vProjectileLocation: Vector
	readonly m_ProjectileAngles: QAngle
	readonly m_hRemnantToKill: C_BaseEntity
	m_bProjectileStarted: boolean
	readonly hAlreadyHitList: C_BaseEntity[]
}

declare class C_DOTA_Ability_Bristleback_ViscousNasalGoo extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Rubick_Telekinesis extends C_DOTABaseAbility {
	readonly m_vStartLocation: Vector
	readonly m_vLandLocation: Vector
	m_flStartTime: number
	readonly m_pTarget: C_DOTA_BaseNPC
}

declare class C_DOTA_Ability_Special_Bonus_Unique_Dragon_Knight_6 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Bristleback_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Disruptor_5 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_30_Crit_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Unit_Courier extends C_DOTA_BaseNPC_Additive {
	m_bUnitRespawned: boolean
	m_bPreUpdateFlyingCourier: boolean
	m_nSoleControllingPlayer: number
	m_bFlyingCourier: boolean
	m_flRespawnTime: number
	m_nCourierState: CourierState_t
	readonly m_hCourierStateEntity: C_BaseEntity
}

declare class C_DOTA_Ability_Tiny_CraggyExterior extends C_DOTABaseAbility {
	readonly m_hStolenTree: C_BaseEntity
}

declare class C_DOTA_Ability_Frostivus2018_DarkWillow_ShadowRealm extends C_DOTABaseAbility {}

declare class CDOTA_Ability_Seasonal_Summon_CNY_Tree extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Chen_1 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Exp_Boost_10 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_MP_150 extends C_DOTABaseAbility {}

declare class C_ParticleSystem extends C_BaseModelEntity {
	readonly m_szSnapshotFileName: number[]
	m_bActive: boolean
	m_nStopType: number
	m_flStartTime: number
	readonly m_vServerControlPoints: Vector[]
	readonly m_iServerControlPointAssignments: number[]
	readonly m_hControlPointEnts: C_BaseEntity[]
	m_bNoSave: boolean
	m_bStartActive: boolean
	readonly m_iszEffectName: string
	readonly m_iszControlPointNames: string[]
	m_bOldActive: boolean
}

declare class C_DOTA_Item_Clarity extends C_DOTA_Item {}

declare class C_DOTA_Item_Tango extends C_DOTA_Item {}

declare class C_DOTA_Ability_Broodmother_SpawnSpiderlings extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Pudge_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Cooldown_Reduction_65 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Strength_40 extends C_DOTABaseAbility {}

declare class C_MaterialModifyControl extends C_BaseEntity {
	readonly m_szMaterialName: number[]
	readonly m_szMaterialVar: number[]
	readonly m_szMaterialVarValue: number[]
	m_bHasNewAnimationCommands: boolean
	m_iFrameStart: number
	m_iFrameEnd: number
	m_bWrap: boolean
	m_flFramerate: number
	m_bNewAnimCommandsSemaphore: boolean
	m_bOldAnimCommandsSemaphore: boolean
	m_flFloatLerpStartValue: number
	m_flFloatLerpEndValue: number
	m_flFloatLerpTransitionTime: number
	m_flAnimationStartTime: number
	m_nModifyMode: MaterialModifyMode_t
}

declare class C_EnvScreenEffect extends C_PointEntity {
	m_flDuration: number
	m_nType: ScreenEffectType_t
}

declare class C_DOTA_Item_Recipe_UltimateScepter extends C_DOTA_Item {}

declare class CDOTA_Ability_Abaddon_Frostmourne extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_ChaosKnight_Chaos_Strike extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Pudge_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Timbersaw_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_HP_Regen_50 extends C_DOTABaseAbility {}

declare class C_DevtestHierarchy extends C_DynamicProp {
	readonly m_vRotationAxis: Vector
	m_flRotationSpeed: number
	m_nTestMode: number
	readonly m_hChild: C_BaseEntity
	readonly m_vDynamicAttachOffset: Vector
	m_nDynamicResetCount: number
	m_nDynamicDetachCount: number
	m_bChildIsDynamic: boolean
	m_bCreateChildSideChild: boolean
	readonly m_hAlternateParent: C_BaseEntity
	m_flEntityStartTime: number
	m_nTestIndex: number
	m_nCurrType: HierarchyType_t
	m_nCurrentModel: number
}

declare class C_DOTA_Ability_ArcWarden_SparkWraith extends C_DOTABaseAbility {
	duration: number
	activation_delay: number
	wraith_vision_duration: number
	wraith_vision_radius: number
	spark_damage: number
}

declare class CDOTA_Ability_Winter_Wyvern_Cold_Embrace extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_SkeletonKing_Reincarnation extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Dark_Seer_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Undying_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Tiny_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Monkey_King_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Item_Recipe_Ancient_Janggo extends C_DOTA_Item {}

declare class C_DOTA_Ability_Necronomicon_Warrior_LastWill extends C_DOTABaseAbility {}

declare class C_DOTA_Unit_Hero_Undying extends C_DOTA_BaseNPC_Hero {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Doom_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Tidehunter_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_HP_Regen_7 extends C_DOTABaseAbility {}

declare class C_DOTAReflectionSkybox extends C_BaseEntity {
	readonly m_pSkySceneObject: CSceneObject
}

declare class C_DevtestHierarchy2 extends C_BaseAnimating {}

declare class C_DOTA_Ability_Tusk_IceShards extends C_DOTABaseAbility {
	m_iProjectile: number
	shard_width: number
	shard_damage: number
	shard_count: number
	shard_speed: number
	shard_duration: number
	shard_angle_step: number
	shard_distance: number
	readonly m_vSpawnOrigin: Vector
	readonly m_vDirection: Vector
}

declare class C_DOTA_Unit_Hero_Treant extends C_DOTA_BaseNPC_Hero {}

declare class C_DOTA_Ability_Lycan_SummonWolves_PermanentInvisibility extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Chen_HolyPersuasion extends C_DOTABaseAbility {
	readonly m_hDominatedUnits: C_BaseEntity[]
}

declare class C_DOTA_Ability_Lich_ChainFrost extends C_DOTABaseAbility {
	jump_range: number
	jumps: number
	slow_duration: number
	vision_radius: number
	projectile_speed: number
}

declare class C_DOTA_Ability_Special_Bonus_Unique_Shadow_Shaman_1 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Night_Stalker extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Luna_1 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Phantom_Lancer_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Riki_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Chen_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Legion_Commander_PressTheAttack extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Magnataur_Shockwave extends C_DOTABaseAbility {
	m_nFXIndex: number
	readonly hAlreadyHitList: C_BaseEntity[]
}

declare class C_DOTA_Unit_Hero_Jakiro extends C_DOTA_BaseNPC_Hero {}

declare class C_DOTA_Ability_Enchantress_Enchant extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Templar_Assassin_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Lion_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Monkey_King extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Exp_Boost_5 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Cast_Range_50 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Attack_Damage_12 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Movement_Speed_30 extends C_DOTABaseAbility {}

declare class C_DOTA_Item_PocketTower extends C_DOTA_Item {}

declare class C_DOTA_Item_Blight_Stone extends C_DOTA_Item {}

declare class C_DOTA_Ability_Invoker_Empty2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Spectre_Desolate extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_ShadowShaman_EtherShock extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Lina_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Enchantress_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Puck extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Attack_Damage_45 extends C_DOTABaseAbility {}

declare class C_DOTAWorldParticleSystem extends C_BaseModelEntity {
	m_nType: number
	m_iClientEffectIndex: number
	readonly m_szEffectName: string
	readonly m_szTargetName: string
	readonly m_szControlPoint: string
	readonly m_vModelScale: Vector
	m_bDayTime: boolean
	m_bNightTime: boolean
	m_bShowInFow: boolean
}

declare class CDOTA_Ability_Abaddon_BorrowedTime extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Medusa_StoneGaze extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Slark_EssenceShift extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Kunkka_XMarksTheSpot extends C_DOTABaseAbility {
	readonly m_hThinker: C_BaseEntity
}

declare class C_ColorCorrection extends C_BaseEntity {
	readonly m_vecOrigin: Vector
	m_MinFalloff: number
	m_MaxFalloff: number
	m_flFadeInDuration: number
	m_flFadeOutDuration: number
	m_flMaxWeight: number
	m_flCurWeight: number
	readonly m_netlookupFilename: number[]
	m_bEnabled: boolean
	m_bMaster: boolean
	m_bClientSide: boolean
	m_bExclusive: boolean
	readonly m_bEnabledOnClient: boolean[]
	readonly m_flCurWeightOnClient: number[]
	readonly m_bFadingIn: boolean[]
	readonly m_flFadeStartWeight: number[]
	readonly m_flFadeStartTime: number[]
	readonly m_flFadeDuration: number[]
}

declare class C_DOTA_Ability_Gyrocopter_Rocket_Barrage extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_QueenOfPain_ScreamOfPain extends C_DOTABaseAbility {}

declare class C_DOTA_Item_JumpBoots extends C_DOTA_Item {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Bane_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Morphling_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Beastmaster extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Attack_Damage_250 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Strength_7 extends C_DOTABaseAbility {}

declare class CDOTA_Ability_Generic_Hidden extends C_DOTABaseAbility {}

declare class C_AI_BaseNPC extends C_BaseCombatCharacter {
	m_flTempRagdollTransitionTime: number
	m_NPCState: NPC_STATE
	m_flTimePingEffect: number
	m_iDeathFrame: number
	m_iSpeedModRadius: number
	m_iSpeedModSpeed: number
	m_bPerformAvoidance: boolean
	m_bIsMoving: boolean
	m_flStunUntilTime: number
	m_bFadeCorpse: boolean
	m_bSpeedModActive: boolean
	m_bImportantRagdoll: boolean
	readonly m_hServerRagdoll: C_BaseEntity
	m_nFootstepType: number
}

declare class C_DOTA_Item_Yasha_And_Kaya extends C_DOTA_Item {}

declare class C_DOTA_Ability_ChaosKnight_Phantasm extends C_DOTABaseAbility {
	readonly m_hIllusions: C_BaseEntity[]
}

declare class C_DOTA_Ability_Spectre_SpectralDagger extends C_DOTABaseAbility {
	dagger_path_duration: number
	hero_path_duration: number
	m_fCreateInterval: number
	m_fLastCreate: number
	m_bIsTrackingProjectile: boolean
	readonly m_hTrackingProjectileHits: C_BaseEntity[]
	readonly m_hTrackingTarget: C_BaseEntity
}

declare class CDOTA_Ability_Life_Stealer_Control extends C_DOTABaseAbility {}

declare class C_DOTA_Item_Vermillion_Robe extends C_DOTA_Item {}

declare class C_DOTA_Ability_Lina_FierySoul extends C_DOTABaseAbility {}

declare class C_IngameEvent_FV2018 extends C_IngameEvent_Base {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Queen_Of_Pain extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Armor_15 extends C_DOTABaseAbility {}

declare class C_DynamicPropClientFadeOut extends C_DynamicProp {
	m_nFadeOutMode: number
	m_ShouldBeVisible: boolean
	m_flAlpha: number
	m_flLastUpdateTime: number
	m_flFadeTime: number
	m_flFadeRadius: number
	m_flFadeRadiusEnd: number
	m_bVisibleAtDay: boolean
	m_bVisibleAtNight: boolean
	m_bHiddenInShowcaseView: boolean
	m_bClothSimDisabled: boolean
	readonly m_vFadeOrigin: Vector
	readonly m_vFadeOriginOffset: Vector
}

declare class C_PropVRTrackedObject extends C_BaseAnimating {
	readonly m_vClientScale: Vector
	m_bIsTracking: boolean
	readonly m_vTrackedPosition: Vector
	readonly m_qTrackedAngles: QAngle
	readonly m_vPhysicallyConstrainedPosition: Vector
	readonly m_qPhysicallyConstrainedAngles: QAngle
	m_bClientIsAuthoritativeForTransform: boolean
	m_bIsInContact: boolean
}

declare class C_DOTA_Item_Pipe extends C_DOTA_Item {}

declare class C_DOTA_Ability_Shredder_ReturnChakram extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_DoomBringer_Empty1 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Batrider_FlamingLasso extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Huskar_Inner_Fire extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Omniknight_Repel extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Nevermore_Requiem extends C_DOTABaseAbility {
	requiem_line_width_start: number
	requiem_line_width_end: number
	m_nCachedSouls: number
	m_nFXIndex: number
	m_nKilleater_nLines: number
	readonly m_vecHeroesReqd: C_BaseEntity[]
}

declare class CDOTA_Unit_Hero_AncientApparition extends C_DOTA_BaseNPC_Hero {}

declare class CDOTA_BaseNPC_Seasonal_Dragon extends C_DOTA_BaseNPC_Additive {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Batrider_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Elder_Titan_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Lone_Druid_9 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Attack_Damage_120 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Magic_Resistance_6 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Movement_Speed_60 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_HP_Regen_10 extends C_DOTABaseAbility {}

declare class C_DOTA_Item_NullTalisman extends C_DOTA_Item {}

declare class CDOTA_Item_RiverPainter4 extends C_DOTA_Item_RiverPainter {}

declare class C_DOTA_Ability_Rubick_Hidden1 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_NightStalker_HunterInTheNight extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_TemplarAssassin_Refraction_Holdout extends C_DOTABaseAbility {}

declare class CDOTA_Item_Recipe_Vermillion_Robe extends C_DOTA_Item {}

declare class CDOTA_Ability_Seasonal_Firecrackers extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Witch_Doctor_5 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Doom_5 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Jakiro_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Unit_Hero_Shadow_Demon extends C_DOTA_BaseNPC_Hero {}

declare class C_DOTA_Ability_Courier_GoToSideShop extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Axe_CullingBlade extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Juggernaut_Omnislash extends C_DOTABaseAbility {}

declare class C_DOTA_NPC_DataDriven extends C_DOTA_BaseNPC_Additive {}

declare class CDOTA_Ability_Consumable_Hidden extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_PolarFurbolgUrsaWarrior_ThunderClap extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Spawnlord_Master_Freeze extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Puck_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Keeper_of_the_Light_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Queen_Of_Pain_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Corruption_3 extends C_DOTABaseAbility {}

declare class C_ParticlePerformanceMonitor extends C_PointEntity {
	m_bDisplayPerf: boolean
	m_bMeasurePerf: boolean
}

declare class C_DOTA_Item_Recipe_Necronomicon_3 extends C_DOTA_Item_Recipe_Necronomicon {}

declare class C_DOTA_Item_Recipe_HandOfMidas extends C_DOTA_Item {}

declare class C_DOTA_Item_Bracer extends C_DOTA_Item {}

declare class C_DOTA_Ability_DarkWillow_ShadowRealm extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Leshrac_Pulse_Nova extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Puck_DreamCoil extends C_DOTABaseAbility {
	readonly m_hThinker: C_BaseEntity
}

declare class C_DOTA_Ability_Special_Bonus_Unique_Dazzle_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Sniper_2 extends C_DOTABaseAbility {}

declare class C_InfoOverlayAccessor extends C_BaseEntity {
	m_iOverlayID: number
}

declare class C_DOTA_Unit_Hero_Lion extends C_DOTA_BaseNPC_Hero {
	m_unFingerPrestigeKills: number
}

declare class C_DOTA_Ability_Tusk_Launch_Snowball extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_LoneDruid_SpiritLink extends C_DOTABaseAbility {
	duration: number
}

declare class C_DOTA_Ability_Lycan_Shapeshift extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Viper_CorrosiveSkin extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Earthshaker_Fissure extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Abaddon_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Agility_25 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Haste extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Cleave_60 extends C_DOTABaseAbility {}

declare class C_DOTA_BaseNPC_Effigy_Statue extends C_DOTA_BaseNPC_Building {}

declare class C_PointClientUIDialog extends C_BaseClientUIEntity {
	readonly m_hActivator: C_BaseEntity
	m_bStartEnabled: boolean
}

declare class C_BaseDoor extends C_BaseToggle {
	m_bIsUsable: boolean
}

declare class C_DOTA_Item_BootsOfTravel extends C_DOTA_Item {
	m_nFXOrigin: number
	m_nFXDestination: number
	readonly m_hTeleportTarget: C_BaseEntity
	readonly m_vTeleportLoc: Vector
	m_bTeleportTargetIsBuilding: boolean
}

declare class CDOTA_Item_Recipe_BootsOfTravel_2 extends C_DOTA_Item_Recipe_BootsOfTravel {}

declare class C_DOTA_Ability_Tusk_FrozenSigil extends C_DOTABaseAbility {}

declare class CDOTA_Ability_Beastmaster_PrimalRoar extends C_DOTABaseAbility {
	duration: number
	slow_duration: number
	side_damage: number
	damage_radius: number
	path_width: number
	push_duration: number
	push_distance: number
	damage: number
	movement_speed_duration: number
}

declare class C_DOTA_Ability_BigThunderLizard_Frenzy extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Lina_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Tusk_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Pugna_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Gold_Income_5 extends C_DOTABaseAbility {}

declare class C_InfoLadderDismount extends C_BaseEntity {}

declare class CDOTA_Ability_AbyssalUnderlord_DarkRift extends C_DOTABaseAbility {
	teleport_delay: number
	readonly m_hTeleportTarget: C_BaseEntity
}

declare class C_DOTA_Unit_Broodmother_Spiderling extends C_DOTA_BaseNPC_Creep_Talking {}

declare class C_DOTA_Unit_Hero_Pugna extends C_DOTA_BaseNPC_Hero {}

declare class CDOTA_Ability_CallOfTheWild_Boar_Poison extends C_DOTABaseAbility {}

declare class C_DOTA_Item_BagOfGold extends C_DOTA_Item {
	readonly m_hThinker: C_BaseEntity
}

declare class C_DOTA_Ability_EnragedWildkin_Tornado extends C_DOTABaseAbility {
	readonly m_hTornado: C_BaseEntity
	m_nFXIndex: number
}

declare class C_DOTA_Ability_Special_Bonus_Unique_Alchemist_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Disruptor_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Item_Recipe_Veil_Of_Discord extends C_DOTA_Item {}

declare class C_DOTA_Unit_Hero_Invoker extends C_DOTA_BaseNPC_Hero {}

declare class C_DOTA_Ability_Sven_GodsStrength extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Storm_Spirit extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Skywrath extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Arc_Warden_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Armor_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Item_SacredRelic extends C_DOTA_Item {}

declare class C_DOTA_Ability_Brewmaster_HurlBoulder extends C_DOTABaseAbility {}

declare class CDOTA_Ability_Alchemist_UnstableConcoctionThrow extends C_DOTABaseAbility {
	m_fCookTime: number
	readonly m_vProjectileLoc: Vector
}

declare class C_DOTA_Ability_NightStalker_Darkness extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Witch_Doctor_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Chaos_Knight extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Viper_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Death_Prophet_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Legion_Commander_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Agility_30 extends C_DOTABaseAbility {}

declare class C_DOTA_BaseNPC_Filler extends C_DOTA_BaseNPC_Building {}

declare class CDOTA_Item_Recipe_Medallion_Of_Courage extends C_DOTA_Item {}

declare class C_DOTA_Item_Urn_Of_Shadows extends C_DOTA_Item {}

declare class C_DOTA_Item_Recipe_Dagon3 extends C_DOTA_Item_Recipe_Dagon {}

declare class C_DOTA_Item_PowerTreads extends C_DOTA_Item {
	m_iStat: number
}

declare class C_DOTA_Ability_Shadow_Demon_Soul_Catcher extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Weaver_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Broodmother_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_MP_Regen_4 extends C_DOTABaseAbility {}

declare class C_EnvWindClientside extends C_BaseEntity {
	readonly m_EnvWindShared: C_CEnvWindShared
}

declare class C_HandleTest extends C_BaseEntity {
	readonly m_Handle: C_BaseEntity
	m_bSendHandle: boolean
}

declare class C_DOTA_Unit_Hero_Oracle extends C_DOTA_BaseNPC_Hero {
	m_nFXDeath: number
}

declare class C_DOTA_Ability_Obsidian_Destroyer_ArcaneOrb extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Lich_DarkSorcery extends C_DOTABaseAbility {}

declare class C_DOTAWearableItem extends C_EconWearable {
	readonly m_hAdditionalWearable: C_BaseEntity
	m_bOwnerModelChanged: boolean
	m_bIsGeneratingEconItem: boolean
	m_bIsItemVisibleOnGeneratedEntity: boolean
	readonly m_hDrawWearable: C_BaseEntity
	m_bHiddenByCombiner: boolean
	m_bIsPortrait: boolean
	m_fZDelta: number
	m_bCombinerMaterialOverrideListChanged: boolean
	m_bRubickFollower: boolean
}

declare class C_DOTA_Ability_Slithereen_Riptide extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Rubick_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Broodmother_1 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Attack_Range_400 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Night_Vision_500 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_MP_175 extends C_DOTABaseAbility {}

declare class C_DOTA_Item_Mantle extends C_DOTA_Item {}

declare class C_DOTA_Ability_Skywrath_Mage_Concussive_Shot extends C_DOTABaseAbility {
	speed: number
	slow_radius: number
	damage: number
	shot_vision: number
	slow_duration: number
	vision_duration: number
}

declare class C_DOTA_Ability_Spectre_Dispersion extends C_DOTABaseAbility {}

declare class C_DOTA_Unit_Hero_Beastmaster extends C_DOTA_BaseNPC_Hero {}

declare class C_DOTA_Ability_Enigma_Malefice extends C_DOTABaseAbility {}

declare class C_DOTA_Unit_Hero_Lich extends C_DOTA_BaseNPC_Hero {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Wraith_King_7 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Troll_Warlord_2 extends C_DOTABaseAbility {}

declare class C_PointClientUIWorldTextPanel extends C_PointClientUIWorldPanel {
	readonly m_messageText: number[]
}

declare class C_DOTA_Ability_Invoker_ColdSnap extends CDOTA_Ability_Invoker_InvokedBase {}

declare class C_DOTA_Unit_Hero_Luna extends C_DOTA_BaseNPC_Hero {}

declare class C_DOTA_Ability_PhantomAssassin_PhantomStrike extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Pugna_NetherBlast extends C_DOTABaseAbility {}

declare class C_DOTA_Unit_Hero_Slardar extends C_DOTA_BaseNPC_Hero {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Dragon_Knight_5 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Kunkka_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Lycan_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Chaos_Knight_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Disruptor_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Exp_Boost_15 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Evasion_12 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Gold_Income_30 extends C_DOTABaseAbility {}

declare class CDOTA_Item_Ward_Dispenser extends C_DOTA_Item {}

declare class C_DOTA_Ability_Bear_Empty2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Warlock_Fatal_Bonds extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Witch_Doctor_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Rubick extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Venomancer_6 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Tusk_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Armor_8 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Attack_Speed_70 extends C_DOTABaseAbility {}

declare class CAmbientCreatures extends C_DOTAWorldParticleSystem {
	readonly m_szAnimationName: string
}

declare class C_DynamicPropClientside extends C_DynamicProp {
	m_bSetupMaterialProxy: boolean
	m_bNoInterpolate: boolean
}

declare class C_DOTA_Item_ChainMail extends C_DOTA_Item {}

declare class C_DOTA_Ability_Meepo_Earthbind extends C_DOTABaseAbility {
	m_nFXIndex: number
}

declare class C_DOTA_Ability_Brewmaster_SpellImmunity extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Clockwerk extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Enchantress_5 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Tidehunter extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Gyrocopter_5 extends C_DOTABaseAbility {}

declare class C_DOTA_Item_Mjollnir extends C_DOTA_Item {}

declare class CDOTA_Ability_Alchemist_GoblinsGreed extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Dazzle_ShadowWave extends C_DOTABaseAbility {
	m_iCurJumpCount: number
	readonly m_vCurTargetLoc: Vector
	readonly m_hHitEntities: C_BaseEntity[]
	bounce_radius: number
	damage_radius: number
	damage: number
	max_targets: number
}

declare class C_DOTA_Ability_Warlock_Shadow_Word extends C_DOTABaseAbility {}

declare class CDOTA_Ability_Tusk_SnowballMeteor extends C_DOTABaseAbility {
	area_of_effect: number
	damage_interval: number
	vision_distance: number
	end_vision_duration: number
	main_damage: number
	burn_duration: number
	burn_dps: number
}

declare class C_DOTA_Ability_Special_Bonus_Unique_Centaur_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Silencer extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Cooldown_Reduction_20 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_HP_Regen_12 extends C_DOTABaseAbility {}

declare class C_DOTA_Item_Ring_Of_Basilius extends C_DOTA_Item {}

declare class CDOTA_Ability_AbyssalUnderlord_AtrophyAura extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_EarthSpirit_GeomagneticGrip extends C_DOTABaseAbility {
	readonly m_hTarget: C_BaseEntity
}

declare class C_DOTA_Ability_Leshrac_Lightning_Storm extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Venomancer_PoisonSting extends C_DOTABaseAbility {
	radius: number
}

declare class C_DOTA_Item_Nian_Flag_Trap extends C_DOTA_Item {}

declare class C_DOTA_Ability_Frostivus2018_Clinkz_WindWalk extends C_DOTABaseAbility {}

declare class C_DOTA_BaseNPC_Seasonal_Snowman extends C_DOTA_BaseNPC_Additive {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Alchemist_5 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Ancient_Apparition_1 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Lone_Druid_8 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Mana_Break_35 extends C_DOTABaseAbility {}

declare class C_DOTA_Item_Mekansm extends C_DOTA_Item {}

declare class C_DOTA_Item_Recipe_LesserCritical extends C_DOTA_Item {}

declare class C_DOTA_Ability_Rubick_Empty1 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Enchantress_NaturesAttendants extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Animation_RightClawSwipe extends C_DOTA_Ability_Animation_Attack {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Shadow_Shaman_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Ursa_5 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Spectre_5 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Slark_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Magic_Resistance_10 extends C_DOTABaseAbility {}

declare class C_DOTA_Item_PoorMansShield extends C_DOTA_Item {}

declare class C_DOTA_Ability_EmberSpirit_SearingChains extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Rubick_SpellSteal extends C_DOTABaseAbility {
	readonly m_ActivityModifier: number[]
	m_fStolenCastPoint: number
	readonly m_hStealTarget: C_BaseEntity
	readonly m_hStealAbility: C_BaseEntity
	m_nFXIndex: number
}

declare class C_DOTA_Unit_Broodmother_Web extends C_DOTA_BaseNPC_Additive {
	m_nFXIndex: number
	readonly m_vecOrigin: Vector
}

declare class C_DOTA_Ability_Life_Stealer_Consume extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Slardar_Bash extends C_DOTABaseAbility {}

declare class C_DOTA_Unit_Hero_PhantomLancer extends C_DOTA_BaseNPC_Hero {}

declare class C_DOTA_Ability_SkeletonKing_MortalStrike extends C_DOTABaseAbility {}

declare class CDOTA_Ability_AncientApparition_IceVortex extends C_DOTABaseAbility {
	vision_aoe: number
}

declare class C_DOTA_Item_Arcane_Boots extends C_DOTA_Item {}

declare class C_DOTA_Ability_Wisp_Tether extends C_DOTABaseAbility/*, C_HorizontalMotionController*/ {
	readonly m_hTarget: C_BaseEntity
	readonly m_vProjectileLocation: Vector
	m_bProjectileActive: boolean
	latch_distance: number
	m_iProjectileIndex: number
}

declare class C_DOTA_Ability_Enigma_MidnightPulse extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Sven_Warcry extends C_DOTABaseAbility {}

declare class C_DOTAFogOfWarTempViewers extends C_BaseEntity {
	m_FoWTempViewerVersion: number
	readonly m_TempViewerInfo: TempViewerInfo_t[]
	m_dota_spectator_fog_of_war_last: number
}

declare class CDOTA_Ability_Spawnlord_Master_Stomp extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Brewmaster_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Evasion_15 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Respawn_Reduction_45 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Armor_6 extends C_DOTABaseAbility {}

declare class CDOTA_Item_Recipe_Silver_Edge extends C_DOTA_Item {}

declare class C_DOTA_Item_Skadi extends C_DOTA_Item {}

declare class C_DOTA_Item_Dagon extends C_DOTA_Item {}

declare class C_DOTA_Item_GhostScepter extends C_DOTA_Item {}

declare class C_DOTA_Unit_Hero_Phoenix extends C_DOTA_BaseNPC_Hero {}

declare class C_DOTA_Ability_Tidehunter_Gush extends C_DOTABaseAbility {
	gush_damage: number
}

declare class C_DotaQuestBase extends C_BaseEntity {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Leshrac_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Sand_King_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Arc_Warden_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_HP_Regen_15 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Disruptor_StaticStorm extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Jakiro_DualBreath extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Omniknight_GuardianAngel extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_DarkSeer_Vacuum extends C_DOTABaseAbility {
	readonly m_vPullLocation: Vector
}

declare class C_DOTA_Ability_FacelessVoid_Backtrack extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Roshan_Bash extends C_DOTABaseAbility {}

declare class C_DOTA_Unit_Hero_Enigma extends C_DOTA_BaseNPC_Hero {}

declare class C_DOTA_Ability_Lich_FrostNova extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Holdout_CullingBlade extends C_DOTA_Ability_Axe_CullingBlade {}

declare class CDOTA_Ability_AncientApparition_ChillingTouch extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Crystal_Maiden_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Outworld_Devourer_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Attack_Range_75 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Strength_25 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_MP_Regen_1 extends C_DOTABaseAbility {}

declare class C_Sun extends C_BaseModelEntity {
	readonly m_Overlay: C_SunGlowOverlay
	readonly m_GlowOverlay: C_SunGlowOverlay
	readonly m_vDirection: Vector
	readonly m_clrOverlay: Color
	m_bOn: boolean
	m_nSize: number
	m_nOverlaySize: number
	m_flHDRColorScale: number
}

declare class C_FuncOccluder extends C_BaseModelEntity {}

declare class CDOTA_Item_Recipe_Iron_Talon extends C_DOTA_Item {}

declare class CDOTA_Ability_Special_Bonus_Unique_Grimstroke_1 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Bristleback_QuillSpray extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Slark_Pounce extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Disruptor_Glimpse extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Zuus_ArcLightning extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_StormSpirit_BallLightning extends C_DOTABaseAbility/*, C_HorizontalMotionController*/ {
	m_bHasAutoRemnantTalent: boolean
	m_fAutoRemnantInterval: number
	ball_lightning_initial_mana_base: number
	ball_lightning_initial_mana_percentage: number
	ball_lightning_travel_cost_base: number
	ball_lightning_travel_cost_percent: number
	m_iProjectileID: number
	readonly m_vStartLocation: Vector
	readonly m_vProjectileLocation: Vector
	m_fDistanceAccumulator: number
	m_fTalentDistanceAccumulator: number
	scepter_remnant_interval: number
}

declare class C_DOTA_Ability_Greevil_Miniboss_Red_Overpower extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Ghost_FrostAttack extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_CentaurKhan_WarStomp extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Invoker_8 extends C_DOTABaseAbility {}

declare class C_Gib extends C_BaseAnimating {
	m_flTouchDelta: number
}

declare class C_DOTA_Ability_DoomBringer_InfernalBlade extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Spectre_Reality extends C_DOTABaseAbility {}

declare class C_DOTA_Unit_Hero_VengefulSpirit extends C_DOTA_BaseNPC_Hero {}

declare class C_DOTA_Ability_Greevil_Miniboss_Black_BrainSap extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Huskar_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Kunkka_3 extends C_DOTABaseAbility {}

declare class C_PrecipitationBlocker extends C_BaseModelEntity {}

declare class C_PropHMDAvatar extends C_PropVRTrackedObject {
	readonly m_hLiteralControllerSlots: number[]
	readonly m_hLogicalControllerSlots: number[]
	readonly m_hVRControllers: C_BaseEntity[]
	readonly m_hCloseCaption: C_BaseEntity
	m_bLocalHMDPoseValid: boolean
}

declare class C_ColorCorrectionVolume extends C_BaseTrigger {
	m_LastEnterWeight: number
	m_LastEnterTime: number
	m_LastExitWeight: number
	m_LastExitTime: number
	m_bEnabled: boolean
	m_MaxWeight: number
	m_FadeDuration: number
	m_Weight: number
	readonly m_lookupFilename: number[]
}

declare class C_DOTA_Ability_Courier_GoToSecretShop extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Lina_DragonSlave extends C_DOTABaseAbility {
	dragon_slave_distance: number
}

declare class C_DOTA_Ability_Razor_UnstableCurrent extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Frostivus2018_Magnataur_Skewer extends C_DOTABaseAbility {
	skewer_radius: number
	skewer_speed: number
	range: number
	tree_radius: number
	m_nTargetsHit: number
}

declare class C_DOTA_Ability_Special_Bonus_Unique_Mirana_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Chaos_Knight_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Ancient_Apparition_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Item_Vladmir extends C_DOTA_Item {}

declare class C_DOTA_Item_MithrilHammer extends C_DOTA_Item {}

declare class C_DOTA_Ability_Batrider_StickyNapalm extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Ogre_Magi extends C_DOTABaseAbility {}

declare class CDOTA_Ability_Special_Bonus_Attack_Base_Damage_30 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_HP_400 extends C_DOTABaseAbility {}

declare class CDOTA_Item_BootsOfTravel_2 extends C_DOTA_Item_BootsOfTravel {}

declare class C_DOTA_Ability_BountyHunter_Jinada extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Pugna_LifeDrain extends C_DOTABaseAbility {
	readonly m_hTarget: C_BaseEntity
}

declare class C_DOTA_Ability_Frostivus2018_Festive_Firework extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Skywrath_5 extends C_DOTABaseAbility {}

declare class C_InfoPlayerStartGoodGuys extends C_InfoPlayerStartDota {}

declare class CDOTA_Unit_Hero_Centaur extends C_DOTA_BaseNPC_Hero {}

declare class C_DOTA_Ability_Wisp_Relocate extends C_DOTABaseAbility {
	m_nFXIndexEndTeam: number
	m_nFXIndexChannel: number
	cast_delay: number
	return_time: number
}

declare class C_DOTA_Ability_Roshan_SpellBlock extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Throw_Coal extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Mirana_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Tiny_5 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Gold_Income_15 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Attack_Damage_15 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Agility_20 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_HP_200 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Undefined extends C_DOTABaseAbility {}

declare class C_DOTATurboGameMode extends C_DOTABaseGameMode {}

declare class C_DotaSubquestBuyItems extends C_DotaSubquestBase {}

declare class C_DOTA_Ability_Frostivus2018_Decorate_Tree extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Seasonal_Throw_Snowball extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Nevermore_5 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Troll_Warlord_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Storm_Spirit_6 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Silencer_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Mana_Break_20 extends C_DOTABaseAbility {}

declare class CDOTA_VR_BodyPart extends C_BaseAnimating {
	m_nBodyPart: number
	m_unAccountID: number
	m_nHatID: number
	m_nSceneID: number
	m_nAvatarMap: number
	m_flLastThinkTime: number
}

declare class CDOTA_Item_Lotus_Orb extends C_DOTA_Item {}

declare class C_DOTA_Ability_Rubick_TelekinesisLand extends C_DOTABaseAbility {}

declare class C_DOTA_Unit_Hero_Brewmaster extends C_DOTA_BaseNPC_Hero {}

declare class C_DOTA_Ability_SpiritBreaker_ChargeOfDarkness extends C_DOTABaseAbility/*, C_HorizontalMotionController*/ {
	readonly m_vChargeStartPos: Vector
}

declare class C_DOTA_BaseNPC_Venomancer_PlagueWard extends C_DOTA_BaseNPC_Additive {
	readonly m_angle: QAngle
	m_iPoseParameterAim: number
}

declare class C_DOTA_Ability_Creature_Fire_Breath extends C_DOTABaseAbility {
	speed: number
	projectile_count: number
	rotation_angle: number
	damage: number
	radius: number
	readonly ctTimer: CountdownTimer
	readonly m_vecStartRot: Vector
	readonly m_vecEndRot: Vector
}

declare class C_DOTA_Ability_Special_Bonus_Unique_Spectre_4 extends C_DOTABaseAbility {}

declare class C_DOTA_BaseNPC_HallofFame extends C_DOTA_BaseNPC_Building {
	m_HallofFame: number
}

declare class C_DOTA_BaseNPC_Effigy_BattleCup extends C_DOTA_BaseNPC_Building {}

declare class C_DOTA_Item_Kaya extends C_DOTA_Item {}

declare class CDOTA_Item_Recipe_GlimmerCape extends C_DOTA_Item {}

declare class C_DOTA_Item_Recipe_HeavensHalberd extends C_DOTA_Item {}

declare class C_DOTA_Item_OblivionStaff extends C_DOTA_Item {}

declare class C_DOTA_Item_IronwoodBranch extends C_DOTA_Item {}

declare class C_DOTA_Ability_Brewmaster_ThunderClap extends C_DOTABaseAbility {}

declare class CDOTA_Ability_Life_Stealer_Empty2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Juggernaut_BladeDance extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Viper_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Storm_Spirit_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Attack_Range_50 extends C_DOTABaseAbility {}

declare class C_DOTA_Item_Recipe_Urn_Of_Shadows extends C_DOTA_Item {}

declare class C_DOTA_Item_AbyssalBlade extends C_DOTA_Item {}

declare class C_DOTA_Ability_EmberSpirit_FireRemnant extends C_DOTABaseAbility {
	readonly m_vRemnantData: RemnantData_t[]
	max_charges: number
}

declare class C_DOTA_Ability_Disruptor_Thunder_Strike extends C_DOTABaseAbility {}

declare class CDOTA_Ability_Broodmother_SpinWeb_Destroy extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Furion_Sprout extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Nian_Frenzy extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Brewmaster_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Evasion_20 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Respawn_Reduction_35 extends C_DOTABaseAbility {}

declare class C_Func_Dust extends C_BaseModelEntity {
	readonly m_Color: Color
	m_SpawnRate: number
	m_SpeedMax: number
	m_flSizeMin: number
	m_flSizeMax: number
	m_DistMax: number
	m_LifetimeMin: number
	m_LifetimeMax: number
	m_FallSpeed: number
	m_DustFlags: number
}

declare class C_DOTA_Ability_Phoenix_IcarusDive extends C_DOTABaseAbility {
	hp_cost_perc: number
}

declare class C_DOTA_Ability_Phoenix_SunRay extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_EarthSpirit_RollingBoulder extends C_DOTABaseAbility/*, C_HorizontalMotionController*/ {
	radius: number
	speed: number
	rock_speed: number
	damage: number
	distance: number
	rock_distance: number
	slow_duration: number
	m_nFXIndex: number
	m_boulderSetposBool: boolean
	m_nProjectileID: number
	readonly m_vStartingLocation: Vector
	readonly m_vProjectileLocation: Vector
	readonly m_vDir: Vector
	readonly m_vVel: Vector
	m_bUsedStone: boolean
}

declare class C_DOTA_Ability_Visage_GraveChill extends C_DOTABaseAbility {}

declare class C_DOTA_Unit_SpiritBear extends C_DOTA_BaseNPC_Additive {
	m_bShouldRespawn: boolean
	m_bStolen: boolean
}

declare class C_DOTA_Unit_Hero_Lycan extends C_DOTA_BaseNPC_Hero {}

declare class C_DOTA_Ability_Riki_TricksOfTheTrade extends C_DOTABaseAbility {}

declare class CDOTA_Ability_MudGolem_RockDestroy extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Antimage_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Venomancer_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Luna_5 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Puck_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Spell_Amplify_6 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Attack_Speed_15 extends C_DOTABaseAbility {}

declare class C_PropVRHand extends C_PropVRTrackedObject {
	readonly m_hActiveHandAttachment: C_BaseEntity
	readonly m_hHMDAvatar: C_BaseEntity
	m_bVrSkeletonActive: boolean
	m_nVrBoneCount: number
	m_unVrCompressedBoneTransformsSize: number
	readonly m_vrCompressedBoneTransforms: number[]
	readonly m_hAttachments: C_BaseEntity[]
	m_bInitialized: boolean
	m_bIsInView: boolean
	m_nHandID: number
	m_flTriggerAnalogValue: number
	m_flGripAnalogValue: number
	m_flFinger0: number
	m_flFinger1: number
	m_flFinger2: number
	m_flFinger3: number
	m_flFinger4: number
	m_flFingerSplay0: number
	m_flFingerSplay1: number
	m_flFingerSplay2: number
	m_flFingerSplay3: number
	m_flTrackpadAnalogValueX: number
	m_flTrackpadAnalogValueY: number
	m_flJoystickAnalogValueX: number
	m_flJoystickAnalogValueY: number
	m_bCanPerformUse: boolean
	m_bTipTransformInitialized: boolean
	readonly m_localTipOrigin: Vector
	readonly m_localTipAngles: QAngle
	m_flHapticPulseTime: number
	m_nHapticPulseInterval: number
	readonly m_InteractionMgr: CInteractionManager
	m_nAttachUseIndex: number
	m_nAttachHoldIndex: number
	m_LiteralHandType: eLiteralHandType
}

declare class CDOTA_Ability_Pudge_MeatHook extends C_DOTABaseAbility/*, C_HorizontalMotionController*/ {
	m_nConsecutiveHits: number
}

declare class C_DOTA_Ability_Special_Bonus_Exp_Boost_25 extends C_DOTABaseAbility {}

declare class C_DOTA_Item_Recipe_Soul_Ring extends C_DOTA_Item {}

declare class C_DOTA_Unit_Earth_Spirit_Stone extends C_DOTA_BaseNPC {}

declare class C_DOTA_Ability_Lycan_SummonWolves extends C_DOTABaseAbility {
	readonly szUnitName: number[]
	wolf_index: number
	wolf_duration: number
	readonly m_hExistingUnits: C_BaseEntity[]
}

declare class C_DOTA_Ability_Tinker_Rearm extends C_DOTABaseAbility {
	readonly m_vProjectileLocation: Vector
}

declare class C_DOTA_Ability_Special_Bonus_Unique_Venomancer_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Bane_1 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Magnus_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Lone_Druid_10 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Gold_Income_50 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Cast_Range_175 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Attack_Damage_55 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_MP_Regen_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_MP_225 extends C_DOTABaseAbility {}

declare class C_DOTA_Unit_Hero_Beastmaster_Beasts extends C_DOTA_BaseNPC_Creep_Talking {}

declare class CDamageComponent extends CEntityComponent {}

declare class C_DOTA_Unit_Hero_EmberSpirit extends C_DOTA_BaseNPC_Hero {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Nevermore_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Tiny extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Keeper_of_the_Light_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_All_Stats_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Item_StoutShield extends C_DOTA_Item {}

declare class C_DOTA_Ability_Phoenix_FireSpirits extends C_DOTABaseAbility {
	hp_cost_perc: number
}

declare class C_DOTA_Ability_Luna_Eclipse extends C_DOTABaseAbility {}

declare class C_DOTA_Unit_Hero_PhantomAssassin extends C_DOTA_BaseNPC_Hero {
	m_nFXDeath: number
	m_nArcanaLevel: number
}

declare class C_DOTA_Ability_Warlock_Golem_Flaming_Fists extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Courier_ReturnToBase extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Riki_1 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_20_Crit_15 extends C_DOTABaseAbility {}

declare class CDOTA_Item_SuperBlinkDagger extends C_DOTA_Item_BlinkDagger {}

declare class CDOTA_Ability_Techies_Minefield_Sign extends C_DOTABaseAbility {
	m_nFXIndex: number
	aura_radius: number
}

declare class C_DOTA_BaseNPC_Clinkz_Skeleton_Army extends C_DOTA_BaseNPC {}

declare class C_DOTA_Unit_Hero_QueenOfPain extends C_DOTA_BaseNPC_Hero {}

declare class C_DOTA_Unit_Hero_Kunkka extends C_DOTA_BaseNPC_Hero {
	m_nFXIndex: number
}

declare class C_DOTA_Ability_Special_Bonus_Unique_Treant_5 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Razor_3 extends C_DOTABaseAbility {}

declare class C_Func_LOD extends C_BaseModelEntity {
	m_nDisappearMinDist: number
	m_nDisappearMaxDist: number
}

declare class CDOTA_Ability_AbyssalUnderlord_PitOfMalice extends C_DOTABaseAbility {
	m_nFXIndex: number
}

declare class C_DOTA_Unit_Hero_Chen extends C_DOTA_BaseNPC_Hero {}

declare class C_DOTA_Ability_Frostivus2018_Rubick_GhostShip extends C_DOTABaseAbility {
	buff_duration: number
	stun_duration: number
	ghostship_width: number
	ghostship_speed: number
	ghostship_distance: number
	readonly m_vFinalDestination: Vector
	readonly m_vStartingPoint: Vector
}

declare class C_DOTA_Ability_Special_Bonus_Unique_Visage_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Rubick_5 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Legion_Commander_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Lone_Druid_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Vision_200 extends C_DOTABaseAbility {}

declare class C_DOTA_Item_HeavensHalberd extends C_DOTA_Item {}

declare class C_DOTA_Ability_Wisp_Empty1 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Axe_CounterHelix extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Clockwerk_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Morphling_4 extends C_DOTABaseAbility {}

declare class C_DotaTutorialNetworker extends C_BaseEntity {
	m_nTutorialState: number
	m_nTaskProgress: number
	m_nTaskSteps: number
	m_nTaskSecondsRemianing: number
	m_nUIState: number
	m_nShopState: number
	readonly m_TargetLocation: Vector
	readonly m_TargetEntity: C_BaseEntity
	readonly m_SpeechBubbles: C_SpeechBubbleInfo[]
	m_nLocationID: number
	readonly m_GuideStr: number[]
	readonly m_QuickBuyStr: number[]
	m_nPreTutorialState: number
	m_nPreUIState: number
	m_nPreShopState: number
	readonly m_vecPrevTargetLocation: Vector
	readonly m_hPrevTargetEntity: C_BaseEntity
}

declare class C_DOTA_Item_Smoke_Of_Deceit extends C_DOTA_Item {}

declare class C_DOTA_Ability_Shadow_Demon_Shadow_Poison_Release extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Jakiro_Liquid_Fire extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Weaver_Shukuchi extends C_DOTABaseAbility {
	duration: number
	radius: number
	damage: number
	fade_time: number
}

declare class C_DOTA_Ability_Broodmother_PoisonSting extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Tinker_MarchOfTheMachines extends C_DOTABaseAbility {
	splash_radius: number
}

declare class C_DOTA_Ability_Frostivus2018_Pangolier_ShieldCrash extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Greevil_Miniboss_Purple_PlagueWard extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Oracle_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Lifestealer_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Attack_Speed_30 extends C_DOTABaseAbility {}

declare class C_FuncLadder extends C_BaseModelEntity {
	readonly m_vecLadderDir: Vector
	readonly m_Dismounts: C_BaseEntity[]
	readonly m_vecLocalTop: Vector
	readonly m_vecPlayerMountPositionTop: Vector
	readonly m_vecPlayerMountPositionBottom: Vector
	m_flAutoRideSpeed: number
	m_bDisabled: boolean
	m_bFakeLadder: boolean
	m_bHasSlack: boolean
}

declare class C_DOTA_BaseNPC_Invoker_Forged_Spirit extends C_DOTA_BaseNPC_Creep {}

declare class C_DOTA_Ability_DrowRanger_WaveOfSilence extends C_DOTABaseAbility {
	wave_width: number
	wave_speed: number
	m_iProjectile: number
	silence_duration: number
	knockback_distance_max: number
	m_nHeroesHit: number
}

declare class C_DOTA_Ability_Special_Bonus_Unique_Juggernaut_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Item_Recipe_Holy_Locket extends C_DOTA_Item {}

declare class CDOTA_Item_Hurricane_Pike extends C_DOTA_Item {}

declare class C_DOTA_Ability_Tusk_Snowball extends C_DOTABaseAbility/*, C_HorizontalMotionController*/ {
	snowball_windup_radius: number
	snowball_radius: number
	snowball_grow_rate: number
	snowball_damage: number
	snowball_damage_bonus: number
	stun_duration: number
	bonus_damage: number
	bonus_stun: number
	snowball_speed: number
	snowball_duration: number
	readonly m_vProjectileLocation: Vector
	readonly m_hSnowballedUnits: C_BaseEntity[]
	m_nFXIndex: number
	readonly ctSnowball: CountdownTimer
	m_bSpeakAlly: boolean
	m_bIsExpired: boolean
	m_bInWindup: boolean
	readonly m_hPrimaryTarget: C_BaseEntity
	m_nContainedValidUnits: number
	m_bEndingSnowball: boolean
}

declare class C_DOTA_Ability_Invoker_DeafeningBlast extends CDOTA_Ability_Invoker_InvokedBase {
	end_vision_duration: number
	damage: number
	knockback_duration: number
	disarm_duration: number
}

declare class C_DOTA_Ability_FacelessVoid_TimeDilation extends C_DOTABaseAbility {}

declare class C_IngameEvent_TI7 extends C_IngameEvent_Base {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Centaur_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Legion_Commander_5 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Magic_Resistance_5 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Necronomicon_Archer_ManaBurn extends C_DOTABaseAbility {}

declare class C_DOTA_Item_TeleportScroll extends C_DOTA_Item {
	m_nFXOrigin: number
	m_nFXDestination: number
	readonly m_vDestination: Vector
	m_iMinDistance: number
	m_flExtraTeleportTime: number
}

declare class C_DOTA_Item_Broadsword extends C_DOTA_Item {}

declare class C_DOTA_Item_BootsOfElven extends C_DOTA_Item {}

declare class CDOTA_Ability_Viper_Nethertoxin extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Slardar_Slithereen_Crush extends C_DOTABaseAbility {}

declare class C_DOTA_Unit_Hero_Lina extends C_DOTA_BaseNPC_Hero {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Doom_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Lifesteal_10 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Agility_12 extends C_DOTABaseAbility {}

declare class C_PortraitHero extends C_DOTA_BaseNPC {
	m_nHeroID: number
	m_actQueuedActivity: number
	readonly m_szQueuedActivityModifier: number[]
}

declare class C_DOTA_Item_Headdress extends C_DOTA_Item {}

declare class C_EnvVolumetricFogController extends C_BaseEntity {
	m_flScattering: number
	m_flAnisotropy: number
	m_flFadeSpeed: number
	m_flDrawDistance: number
	m_flIndirectStrength: number
	m_nIndirectTextureDimX: number
	m_nIndirectTextureDimY: number
	m_nIndirectTextureDimZ: number
	readonly m_vBoxMins: Vector
	readonly m_vBoxMaxs: Vector
	m_bActive: boolean
	m_flStartAnisoTime: number
	m_flStartScatterTime: number
	m_flStartDrawDistanceTime: number
	m_flStartAnisotropy: number
	m_flStartScattering: number
	m_flStartDrawDistance: number
	m_flDefaultAnisotropy: number
	m_flDefaultScattering: number
	m_flDefaultDrawDistance: number
	m_bStartDisabled: boolean
	m_bEnableIndirect: boolean
	m_nNoiseType: number
	readonly m_vNoiseMovementDirectionA: Vector
	readonly m_vNoiseMovementDirectionB: Vector
	m_flNoiseScale: number
	m_flNoiseMovementSpeedA: number
	m_flNoiseMovementSpeedB: number
	m_flNoiseStrength: number
	m_flNoiseContrast: number
	m_bIsMaster: boolean
	m_nForceRefreshCount: number
	m_bFirstTime: boolean
}

declare class C_DOTA_Item_Orb_of_Venom extends C_DOTA_Item {}

declare class C_DOTA_Item_Eaglehorn extends C_DOTA_Item {}

declare class C_DOTA_Ability_Shadow_Demon_Disruption extends C_DOTABaseAbility {
	readonly m_hDisruptedUnit: C_BaseEntity
}

declare class C_DOTA_Ability_Special_Bonus_Unique_Jakiro extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Morphling_7 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Shadow_Demon_5 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Luna_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Ember_Spirit_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Tusk_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Item_Recipe_Necronomicon_2 extends C_DOTA_Item_Recipe_Necronomicon {}

declare class C_DOTA_Item_Recipe_TranquilBoots extends C_DOTA_Item {}

declare class C_DOTA_Unit_Hero_WitchDoctor extends C_DOTA_BaseNPC_Hero {}

declare class C_DOTA_Ability_CrystalMaiden_FreezingField extends C_DOTABaseAbility {}

declare class CDOTA_Ability_AncientApparition_IceBlast_Release extends C_DOTABaseAbility {}

declare class C_DOTA_Item_UpgradedBarricade extends C_DOTA_Item {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Bounty_Hunter_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Slark_2 extends C_DOTABaseAbility {}

declare class C_SlideshowDisplay extends C_BaseEntity {
	m_bEnabled: boolean
	readonly m_szDisplayText: number[]
	readonly m_szSlideshowDirectory: string
	m_fMinSlideTime: number
	m_fMaxSlideTime: number
	m_iCycleType: number
	m_bNoListRepeats: boolean
	readonly m_chCurrentSlideLists: number[]
	readonly m_SlideMaterialLists: SlideMaterialList_t[]
	m_iCurrentSlideIndex: number
	m_NextSlideTime: number
	m_iCurrentSlideList: number
	m_iCurrentSlide: number
}

declare class CDOTA_Item_RiverPainter3 extends C_DOTA_Item_RiverPainter {}

declare class C_DOTA_Unit_VisageFamiliar extends C_DOTA_BaseNPC_Creep {
	m_nFXAmbient: number
}

declare class C_DOTA_Ability_Sniper_Assassinate extends C_DOTABaseAbility {
	readonly m_hTarget: C_BaseEntity
	m_iIndex: number
	scepter_radius: number
}

declare class C_DOTA_Ability_PhantomLancer_SpiritLance extends C_DOTABaseAbility {
	readonly m_hHitEntities: C_BaseEntity[]
}

declare class C_DOTA_Ability_ForestTrollHighPriest_ManaAura extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Treant extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Bounty_Hunter_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Pugna_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Invoker_10 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_KeeperOfTheLight_ManaLeak extends C_DOTABaseAbility {}

declare class C_DOTA_Unit_Hero_Obsidian_Destroyer extends C_DOTA_BaseNPC_Hero {
	m_nFXDeath: number
}

declare class C_DOTA_Ability_Frostivus2018_Omniknight_Repel extends C_DOTABaseAbility {}

declare class C_DOTASpecGraphPlayerData extends C_BaseEntity {
	readonly m_rgGoldPerMinute: number[]
	readonly m_rgXPPerMinute: number[]
	m_nCreatedByPlayerID: number
}

declare class C_DOTA_Ability_Special_Bonus_Unique_Omniknight_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Crystal_Maiden_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_20_Bash_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_All_Stats_7 extends C_DOTABaseAbility {}

declare class C_DOTAMinimapBoundary extends C_BaseEntity {}

declare class C_DOTA_Item_Dagon_Upgraded extends C_DOTA_Item_Dagon {}

declare class C_DOTA_Ability_Warlock_Upheaval extends C_DOTABaseAbility {
	readonly m_vPosition: Vector
	aoe: number
	slow_rate: number
	slow_rate_duration: number
	duration: number
	max_slow: number
	m_flCurrentSlow: number
	m_nFXIndex: number
	readonly m_SlowTimer: CountdownTimer
	readonly m_timer: CountdownTimer
}

declare class C_DOTA_NPC_WitchDoctor_Ward extends C_DOTA_BaseNPC_Additive {
	m_nFXSkullIndex: number
	m_nTargetType: number
	m_nTargetFlags: number
}

declare class C_DOTA_Ability_CrystalMaiden_Frostbite extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Earthshaker_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Death_Prophet extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Agility_13 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Shredder_TimberChain extends C_DOTABaseAbility {
	chain_radius: number
	m_nFXIndex: number
	readonly m_vProjectileVelocity: Vector
	m_bRetract: boolean
}

declare class C_DOTA_Wisp_Spirit extends C_DOTA_BaseNPC {}

declare class CDOTA_Ability_Nyx_Assassin_Burrow extends C_DOTABaseAbility {
	m_nSpellStartFXIndex: number
	m_nPhaseStartFXIndex: number
}

declare class C_DOTA_Unit_Hero_Tiny extends C_DOTA_BaseNPC_Hero {
	readonly m_hTreeWearable: C_BaseEntity
	m_nFXIndexScepterAmbient: number
	readonly m_hIllusionOwner: C_BaseEntity
}

declare class C_DOTA_Unit_Hero_SkeletonKing extends C_DOTA_BaseNPC_Hero {
	m_nSkeletonWarriors: number
}

declare class C_DOTA_Ability_Special_Bonus_Unique_Outworld_Devourer_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Shadow_Demon_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Chen_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Attack_Damage_25 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_MP_Regen_175 extends C_DOTABaseAbility {}

declare class C_PointHintUIHighlightModel extends C_BaseAnimating {
	m_nTrackedDeviceIndex: number
}

declare class C_DOTA_Item_Soul_Ring extends C_DOTA_Item {}

declare class C_DOTA_Item_RodOfAtos extends C_DOTA_Item {}

declare class C_DOTA_Unit_Hero_Terrorblade extends C_DOTA_BaseNPC_Hero {
	m_nFXDeath: number
	readonly m_szResponseCriteria: string
	m_nArcanaColor: number
}

declare class C_DOTA_Ability_Meepo_Ransack extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_VengefulSpirit_Nether_Swap extends C_DOTABaseAbility {
	m_nFXIndex: number
}

declare class C_DOTA_Unit_Hero_AntiMage extends C_DOTA_BaseNPC_Hero {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Rubick_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Item_Recipe_MaskOfMadness extends C_DOTA_Item {}

declare class C_DOTA_Ability_Shredder_Reactive_Armor extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_BlackDragon_Fireball extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Spell_Amplify_12 extends C_DOTABaseAbility {}

declare class C_FireSprite extends C_Sprite {
	readonly m_vecMoveDir: Vector
	m_bFadeFromAbove: boolean
}

declare class C_DOTA_Ability_LoneDruid_SpiritBear_Entangle extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Nian_Apocalypse extends C_DOTABaseAbility {
	area_of_effect: number
	m_nfxIndex_roar: number
	fire_interval: number
	delay: number
	target_range: number
	readonly m_ctTimer: CountdownTimer
	m_flTiming: number
}

declare class C_DOTA_Ability_Special_Bonus_Unique_Clinkz_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Cast_Range_300 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Night_Vision_400 extends C_DOTABaseAbility {}

declare class C_FuncDistanceOccluder extends C_FuncOccluder {
	m_flFadeStartDist: number
	m_flFadeEndDist: number
	m_flTranslucencyLimit: number
	readonly m_hAttachedOccluder: C_BaseEntity
}

declare class C_DOTA_Item_WraithBand extends C_DOTA_Item {}

declare class C_DOTA_Unit_Hero_Magnataur extends C_DOTA_BaseNPC_Hero {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Tinker extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Wisp_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Spell_Lifesteal_13 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Attack_Damage_65 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Strength_30 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Shredder_ReturnChakramAlias_shredder_return_chakram_2 extends C_DOTA_Ability_Shredder_ReturnChakram {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Vengeful_Spirit_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Slardar_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Respawn_Reduction_30 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Attack_Damage_50 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_MP_400 extends C_DOTABaseAbility {}

declare class C_TriggerPlayerMovement extends C_BaseTrigger {
	readonly m_pNext: C_TriggerPlayerMovement
}

declare class C_DOTA_Ability_Special_Bonus_Unique_Pudge_1 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Clockwerk_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Wisp_5 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Spell_Amplify_4 extends C_DOTABaseAbility {}

declare class C_DOTA_BaseNPC_SDKTower extends C_DOTA_BaseNPC_HoldoutTower {}

declare class CDOTA_Item_RiverPainter7 extends C_DOTA_Item_RiverPainter {}

declare class C_DOTA_Item_TalismanOfEvasion extends C_DOTA_Item {}

declare class C_DOTA_Ability_Obsidian_Destroyer_EssenceAura extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_WitchDoctor_ParalyzingCask extends C_DOTABaseAbility {
	m_iBounces: number
	bounces: number
}

declare class C_DOTA_Ability_Mirana_Leap extends C_DOTABaseAbility {
	charge_restore_time: number
	max_charges: number
}

declare class C_DOTA_Ability_Special_Bonus_Unique_Zeus extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_HP_Regen_5 extends C_DOTABaseAbility {}

declare class C_DOTAAbilityDraftGameMode extends C_DOTATurboGameMode {}

declare class C_DOTA_PortraitBuilding extends C_BaseAnimating {
	m_nAmbientFXIndex: number
	readonly m_ParticleTintColor: Color
}

declare class CDOTA_Item_Recipe_EchoSabre extends C_DOTA_Item {}

declare class C_DOTA_Item_Recipe_Bloodstone extends C_DOTA_Item {}

declare class C_DOTA_Ability_TrollWarlord_BerserkersRage extends C_DOTABaseAbility {
	m_iOriginalAttackCapabilities: number
}

declare class C_DOTA_Item_ForceBoots extends C_DOTA_Item {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Shadow_Shaman_5 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Huskar extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Invoker_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_MP_700 extends C_DOTABaseAbility {}

declare class C_PointClientUIHUD extends C_BaseClientUIEntity {
	m_bCheckCSSClasses: boolean
	m_bIgnoreInput: boolean
	m_flWidth: number
	m_flHeight: number
	m_flDPI: number
	m_flInteractDistance: number
	m_flDepthOffset: number
	m_unOwnerContext: number
	m_unHorizontalAlign: number
	m_unVerticalAlign: number
	m_unOrientation: number
	m_bAllowInteractionFromAllSceneWorlds: boolean
	readonly m_vecCSSClasses: string[]
}

declare class C_TeamplayRoundBasedRulesProxy extends C_GameRulesProxy {
	readonly m_pTeamplayRoundBasedRules: C_TeamplayRoundBasedRules
}

declare class C_FuncTrackTrain extends C_BaseModelEntity {
	m_nLongAxis: number
	m_flRadius: number
	m_flLineLength: number
}

declare class C_DOTA_Item_OrchidMalevolence extends C_DOTA_Item {}

declare class CDOTA_Ability_Nyx_Assassin_ManaBurn extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Silencer_LastWord extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Holdout_Multishot extends C_DOTABaseAbility {
	readonly m_vStartPos: Vector
	m_iArrowProjectile: number
	m_nFXIndex: number
	arrow_width: number
	arrow_speed: number
	arrow_range: number
	arrow_spread: number
	arrow_count: number
	m_bShouldReduceDamage: boolean
	readonly m_vHitTargets: C_BaseEntity[]
}

declare class C_DOTA_Ability_Special_Bonus_Unique_Juggernaut_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Gold_Income_25 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Strength_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Pudge_FleshHeap extends C_DOTABaseAbility {
	m_iKills: number
}

declare class C_DOTA_Item_Bloodthorn extends C_DOTA_Item {}

declare class C_DOTA_Ability_Invoker_Alacrity extends CDOTA_Ability_Invoker_InvokedBase {}

declare class C_DOTA_Ability_Furion_ForceOfNature extends C_DOTABaseAbility {}

declare class C_DOTA_RoshanSpawner extends C_PointEntity {}

declare class C_DOTA_Ability_Pudge_Rot extends C_DOTABaseAbility {
	rot_damage: number
	m_flLastRotTime: number
}

declare class C_DOTA_Ability_Special_Bonus_Unique_Huskar_5 extends C_DOTABaseAbility {}

declare class CDOTA_Item_Tombstone_Drop extends C_DOTA_Item_Physical {}

declare class C_PostProcessController extends C_BaseEntity {
	m_fLocalContrastStrength: number
	m_fLocalContrastEdgeStrength: number
	m_fVignetteStart: number
	m_fVignetteEnd: number
	m_fVignetteBlurStrength: number
	m_fFadeToBlackStrength: number
	m_fGrainStrength: number
	m_fTopVignetteStrength: number
	m_fFadeTime: number
	m_bMaster: boolean
}

declare class C_DevtestHierarchyChild extends C_DynamicProp {}

declare class C_DOTA_Item_Recipe_Sange extends C_DOTA_Item {}

declare class C_DOTA_Item_Recipe_Perseverance extends C_DOTA_Item {}

declare class C_DOTA_Ability_Brewmaster_CinderBrew extends C_DOTABaseAbility {}

declare class C_DOTA_Unit_Brewmaster_PrimalFire extends C_DOTA_BaseNPC_Creep {
	m_nFXAmbient: number
}

declare class C_DOTA_Ability_Furion_WrathOfNature extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Attack_Damage_400 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Armor_3 extends C_DOTABaseAbility {}

declare class C_ServerRagdoll extends C_BaseAnimating {
	readonly m_ragPos: Vector[]
	readonly m_ragAngles: QAngle[]
	m_flBlendWeight: number
	readonly m_hRagdollSource: C_BaseEntity
	m_iEyeAttachment: number
	m_flBlendWeightCurrent: number
	readonly m_parentPhysicsBoneIndices: number[]
	readonly m_worldSpaceBoneComputationOrder: number[]
}

declare class C_DOTA_Item_Recipe_Pipe extends C_DOTA_Item {}

declare class C_DOTA_Ability_Techies_FocusedDetonate extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Undying_Tombstone_Zombie_DeathStrike extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_LoneDruid_TrueForm extends C_DOTABaseAbility {}

declare class CDOTA_Ability_CallOfTheWild_Hawk_Invisibility extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Necrolyte_ReapersScythe extends C_DOTABaseAbility {}

declare class C_DOTA_Item_BeltOfStrength extends C_DOTA_Item {}

declare class C_DOTA_Ability_DeathProphet_Witchcraft extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_DrowRanger_Marksmanship extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Holdout_GodsStrength extends C_DOTA_Ability_Sven_GodsStrength {}

declare class C_DOTA_Ability_AntiMage_SpellShield extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Throw_Snowball extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Lycan_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Brewmaster extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Windranger_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Intelligence_13 extends C_DOTABaseAbility {}

declare class C_DOTA_Item_Perseverance extends C_DOTA_Item {}

declare class C_DOTA_Ability_Ursa_Fury_Swipes extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Windrunner_FocusFire extends C_DOTABaseAbility {}

declare class C_DOTA_Unit_Hero_StormSpirit extends C_DOTA_BaseNPC_Hero {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Beastmaster_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Monkey_King_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_HP_250 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Treant_LivingArmor extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Animation_LeftClawSwipe extends C_DOTA_Ability_Animation_Attack {}

declare class C_DOTA_Ability_Sniper_TakeAim extends C_DOTABaseAbility {}

declare class CDOTA_Ability_Frostivus2018_Centaur_DoubleEdge extends C_DOTABaseAbility {}

declare class CDOTA_Ability_Spawnlord_Master_Bash extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Antimage_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Nyx extends C_DOTABaseAbility {}

declare class CInfoDynamicShadowHint extends C_PointEntity {
	m_bDisabled: boolean
	m_flRange: number
	m_nImportance: number
	readonly m_hLight: C_BaseEntity
}

declare class CDOTA_Ability_Centaur_Stampede extends C_DOTABaseAbility {
	duration: number
	base_damage: number
	strength_damage: number
	slow_duration: number
	readonly m_hHitEntities: C_BaseEntity[]
}

declare class C_DOTA_Ability_NightStalker_CripplingFear extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Tinker_Laser extends C_DOTABaseAbility {
	readonly m_vProjectileLocation: Vector
	bBlocked: boolean
	readonly m_hHitEntities: C_BaseEntity[]
}

declare class C_DOTA_Unit_Hero_Bloodseeker extends C_DOTA_BaseNPC_Hero {}

declare class C_DOTA_Ability_Nevermore_Shadowraze3 extends C_DOTA_Ability_Nevermore_Shadowraze {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Necrophos extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Tusk extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_HP_Regen_80 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Legion_Commander_MomentOfCourage extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Elder_Titan_NaturalOrder extends C_DOTABaseAbility {}

declare class C_DOTA_Unit_Undying_Zombie extends C_DOTA_BaseNPC_Creep {
	readonly m_ctRespawn: CountdownTimer
	readonly m_pTombstone: C_DOTA_BaseNPC
}

declare class C_DOTA_Unit_Hero_DoomBringer extends C_DOTA_BaseNPC_Hero {}

declare class C_DOTA_Unit_Hero_Ursa extends C_DOTA_BaseNPC_Hero {}

declare class C_DOTA_Ability_Windrunner_Powershot extends C_DOTABaseAbility {
	m_fStartTime: number
	m_fPower: number
	m_iProjectile: number
	damage_reduction: number
	arrow_width: number
	powershot_damage: number
	tree_width: number
	m_bAwardedKillEater: boolean
	m_nHeroesHit: number
	m_nFXIndex: number
}

declare class C_DOTA_Ability_Special_Bonus_Unique_Bloodseeker extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Broodmother_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Agility_16 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Movement_Speed_45 extends C_DOTABaseAbility {}

declare class C_DOTA_Item_MagicStick extends C_DOTA_Item {}

declare class C_DOTA_Item_HelmOfIronWill extends C_DOTA_Item {}

declare class C_DOTA_Ability_Oracle_FatesEdict extends C_DOTABaseAbility {
	m_bTargetIsAlly: boolean
}

declare class C_DOTA_Unit_Hero_DeathProphet extends C_DOTA_BaseNPC_Hero {}

declare class C_DOTA_Ability_Riki_SmokeScreen extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_AlphaWolf_CommandAura extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Day_Vision_400 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Magic_Resistance_80 extends C_DOTABaseAbility {}

declare class C_LightDirectionalEntity extends C_LightEntity {}

declare class C_EnvCubemap extends C_BaseEntity {
	m_bCustomCubemapTexture: boolean
	m_flInfluenceRadius: number
	readonly m_vBoxProjectMins: Vector
	readonly m_vBoxProjectMaxs: Vector
	readonly m_LightGroups: string
	m_bStatic: boolean
	m_nHandshake: number
	m_nIndoorOutdoorLevel: number
	m_nGgxCubemapBlurAccumulationPassCount: number
	m_bStartDisabled: boolean
	m_bEnabled: boolean
}

declare class C_DOTA_Item_Recipe_Cyclone extends C_DOTA_Item {}

declare class CDOTA_Item_Recipe_Battlefury extends C_DOTA_Item {}

declare class C_DOTA_Item_Javelin extends C_DOTA_Item {}

declare class CDOTA_Ability_Abaddon_AphoticShield extends C_DOTABaseAbility {}

declare class CDOTA_Unit_Hero_Gyrocopter extends C_DOTA_BaseNPC_Hero {}

declare class CDOTA_Ability_Bloodseeker_Bloodbath extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Nevermore_Presence extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Mana_Break_40 extends C_DOTABaseAbility {}

declare class CDOTA_Item_Octarine_Core extends C_DOTA_Item {}

declare class C_DOTA_Item_Maelstrom extends C_DOTA_Item {}

declare class C_DOTA_Item_Shivas_Guard extends C_DOTA_Item {}

declare class C_DOTA_Ability_Invoker_Quas extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_QueenOfPain_SonicWave extends C_DOTABaseAbility {
	m_fStartTime: number
	m_fTotalTime: number
	starting_aoe: number
	final_aoe: number
}

declare class C_DOTA_Ability_Special_Bonus_Unique_Weaver_1 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Attack_Damage_75 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Movement_Speed_35 extends C_DOTABaseAbility {}

declare class C_PortraitWorldPet extends C_DynamicProp {}

declare class CDOTA_Item_Medallion_Of_Courage extends C_DOTA_Item {}

declare class CDOTA_Ability_Grimstroke_SoulChain extends C_DOTABaseAbility {
	chain_duration: number
	chain_latch_radius: number
	creep_duration_pct: number
}

declare class C_DOTA_Ability_Viper_PoisonAttack extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Pugna_NetherWard extends C_DOTABaseAbility {}

declare class CDOTA_Ability_Frostivus2018_Centaur_Return extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Nevermore_1 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Troll_Warlord_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Storm_Spirit_5 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Attack_Damage_40 extends C_DOTABaseAbility {}

declare class C_DOTACameraBounds extends C_BaseEntity {
	readonly m_vecBoundsMin: Vector
	readonly m_vecBoundsMax: Vector
}

declare class C_EnvDOFController extends C_PointEntity {
	m_bDOFEnabled: boolean
	m_flNearBlurDepth: number
	m_flNearFocusDepth: number
	m_flFarFocusDepth: number
	m_flFarBlurDepth: number
	m_flNearBlurRadius: number
	m_flFarBlurRadius: number
}

declare class C_DOTA_Ability_Brewmaster_DrunkenHaze extends C_DOTABaseAbility {}

declare class C_DOTA_Unit_Hero_Rattletrap extends C_DOTA_BaseNPC_Hero {}

declare class C_DOTA_Ability_Nian_Whirlpool extends C_DOTABaseAbility {
	pool_count: number
	min_distance: number
	max_distance: number
	pull_radius: number
	fire_interval: number
	readonly m_ctTimer: CountdownTimer
	m_flTiming: number
}

declare class C_DOTA_Ability_Lion_Voodoo extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Lina_LightStrikeArray extends C_DOTABaseAbility {}

declare class C_DOTA_Unit_ZeusCloud extends C_DOTA_BaseNPC_Additive {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Antimage extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_All_Stats_20 extends C_DOTABaseAbility {}

declare class C_PointValueRemapper extends C_BaseEntity {
	m_bDisabled: boolean
	m_bDisabledOld: boolean
	m_bUpdateOnClient: boolean
	m_nInputType: ValueRemapperInputType_t
	readonly m_hRemapLineStart: C_BaseEntity
	readonly m_hRemapLineEnd: C_BaseEntity
	m_flMaximumChangePerSecond: number
	m_flDisengageDistance: number
	m_flEngageDistance: number
	m_bRequiresUseKey: boolean
	m_nOutputType: ValueRemapperOutputType_t
	readonly m_hOutputEntities: C_BaseEntity[]
	m_nHapticsType: ValueRemapperHapticsType_t
	m_nMomentumType: ValueRemapperMomentumType_t
	m_flMomentumModifier: number
	m_flSnapValue: number
	m_flCurrentMomentum: number
	m_nRatchetType: ValueRemapperRatchetType_t
	m_flRatchetOffset: number
	m_flInputOffset: number
	m_bEngaged: boolean
	m_bFirstUpdate: boolean
	m_flPreviousValue: number
	m_flPreviousUpdateTickTime: number
}

declare class CDOTA_Item_Guardian_Greaves extends C_DOTA_Item {}

declare class C_DOTA_Ability_ShadowShamanVoodoo extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Bloodseeker_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Chen_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Evasion_25 extends C_DOTABaseAbility {}

declare class C_EnvCubemapBox extends C_EnvCubemap {}

declare class C_DOTA_Ability_Clinkz_WindWalk extends C_DOTABaseAbility {}

declare class C_DOTA_Item_Sphere extends C_DOTA_Item {}

declare class C_DOTA_Item_Recipe_InvisibilityEdge extends C_DOTA_Item {}

declare class C_DOTA_Item_Butterfly extends C_DOTA_Item {}

declare class C_DOTA_Ability_Dazzle_Bad_Juju extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Magnus extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Night_Vision_1000 extends C_DOTABaseAbility {}

declare class CDOTA_Item_Recipe_TranquilBoots2 extends C_DOTA_Item {}

declare class CDOTA_Unit_Hero_Grimstroke extends C_DOTA_BaseNPC_Hero {
	m_nFXDeath: number
}

declare class C_DOTA_Ability_NagaSiren_Ensnare extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_CrystalMaiden_BrillianceAura extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Treant_6 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Undying extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Ancient_Apparition_6 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Attack_Damage_251 extends C_DOTABaseAbility {}

declare class C_PhysBox extends C_Breakable {}

declare class C_DOTA_Item_Recipe_Armlet extends C_DOTA_Item {}

declare class C_DOTA_Ability_SkeletonKing_VampiricAura extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Mirana_1 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Lifesteal_15 extends C_DOTABaseAbility {}

declare class C_PointHMDAnchor extends C_BaseEntity {
	m_bDisabled: boolean
	m_flEnableTime: number
	m_nPlayerIndex: number
}

declare class C_DOTA_Item_SheepStick extends C_DOTA_Item {}

declare class C_DOTA_Ability_TrollWarlord_BattleTrance extends C_DOTABaseAbility {
	trance_duration: number
}

declare class C_DOTA_Ability_KeeperOfTheLight_ChakraMagic extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_DoomBringer_Devour extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Ursa_Enrage extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Skywrath_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Movement_Speed_100 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Attack_Speed_160 extends C_DOTABaseAbility {}

declare class C_DOTA_Item_BootsOfSpeed extends C_DOTA_Item {}

declare class CDOTA_Ability_Elder_Titan_EchoStomp extends C_DOTABaseAbility {
	m_nFXIndexTitan: number
	m_nFXIndexSpirit: number
	m_nFXIndexTitanB: number
	m_nFXIndexSpiritB: number
	radius: number
	stomp_damage: number
	sleep_duration: number
	cast_time: number
	readonly m_vecStompedHeroes: C_BaseEntity[]
	m_bStompedInvisibleHero: boolean
}

declare class C_DOTA_Ability_NagaSiren_MirrorImage extends C_DOTABaseAbility {
	readonly m_hIllusions: C_BaseEntity[]
}

declare class C_DOTA_Unit_Hero_Silencer extends C_DOTA_BaseNPC_Hero {}

declare class C_DOTA_Ability_Weaver_TheSwarm extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_BountyHunter_ShurikenToss extends C_DOTABaseAbility {
	readonly m_hHitEntities: C_BaseEntity[]
	readonly m_hHitEntitiesScepter: C_BaseEntity[]
}

declare class C_DOTA_Unit_Hero_DarkSeer extends C_DOTA_BaseNPC_Hero {}

declare class C_DOTA_Ability_Nian_Waterball extends C_DOTABaseAbility {
	readonly m_ctTimer: CountdownTimer
	readonly m_hEntities: C_BaseEntity[]
}

declare class C_DOTA_Ability_OgreMagi_FrostArmor extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Spell_Lifesteal_8 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Magnataur_Skewer extends C_DOTABaseAbility {
	skewer_radius: number
	skewer_speed: number
	range: number
	tree_radius: number
	m_nTargetsHit: number
}

declare class C_DOTA_Ability_Wisp_Empty2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_KeeperOfTheLight_Illuminate extends C_DOTABaseAbility {
	m_fStartTime: number
	m_fPower: number
	m_iProjectile: number
	m_nFXIndex: number
	m_nFXIndexB: number
	readonly m_vPos: Vector
	damage_per_second: number
	m_bStarted: boolean
}

declare class C_DOTA_Ability_DeathProphet_CarrionSwarm extends C_DOTABaseAbility {
	start_radius: number
	end_radius: number
	m_fStartTime: number
	m_fTotalTime: number
	m_nProjectileHandle: number
	m_nFXIndex: number
}

declare class C_DOTA_Ability_Morphling_Replicate extends C_DOTABaseAbility {
	readonly m_hTarget: C_BaseEntity
}

declare class C_DOTA_Ability_PhantomLancer_PhantomEdge extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Phoenix_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Spectre_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Respawn_Reduction_15 extends C_DOTABaseAbility {}

declare class C_DOTA_Item_Dagon_Upgraded5 extends C_DOTA_Item_Dagon_Upgraded {}

declare class C_DOTA_Ability_Pangolier_GyroshellStop extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Broodmother_SpinWeb extends C_DOTABaseAbility {
	readonly m_hWebs: C_BaseEntity[]
	charge_restore_time: number
	max_charges: number
}

declare class C_DOTA_Ability_Warlock_Golem_Permanent_Immolation extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Puck_WaningRift extends C_DOTABaseAbility {}

declare class C_DOTA_Unit_Hero_Morphling extends C_DOTA_BaseNPC_Hero {}

declare class C_DOTA_Ability_Nevermore_Shadowraze1 extends C_DOTA_Ability_Nevermore_Shadowraze {}

declare class C_DOTA_Ability_Frostivus2018_Summon_Snowman extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Zombie_Berserk extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Underlord extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Abaddon_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Faceless_Void_5 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Armor_5 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_MP_Regen_6 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_HP_Regen_14 extends C_DOTABaseAbility {}

declare class C_DOTA_Item_Hood_Of_Defiance extends C_DOTA_Item {}

declare class C_DOTA_Ability_DarkWillow_BrambleMaze extends C_DOTABaseAbility {}

declare class CDOTA_Unit_Elder_Titan_AncestralSpirit extends C_DOTA_BaseNPC_Additive {}

declare class C_DOTA_Ability_Luna_MoonGlaive extends C_DOTABaseAbility {
	m_iAttackIndex: number
	readonly m_GlaiveInfo: sGlaiveInfo[]
}

declare class C_DOTA_Ability_GiantWolf_CriticalStrike extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Spell_Amplify_5 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Attack_Damage_20 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Strength_15 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Movement_Speed_15 extends C_DOTABaseAbility {}

declare class CAdditionalWearable extends C_DynamicProp {}

declare class C_PropVehicleChoreoGeneric extends C_DynamicProp {
	readonly m_hPlayer: C_BaseEntity
	readonly m_hPrevPlayer: C_BaseEntity
	m_bEnterAnimOn: boolean
	m_bExitAnimOn: boolean
	readonly m_vecEyeExitEndpoint: Vector
	m_flFOV: number
	readonly m_ViewSmoothingData: C_ViewSmoothingData_t
	readonly m_vehicleView: c_vehicleview_t
}

declare class C_DOTA_Ability_Terrorblade_ConjureImage extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Gold_Income_10 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Movement_Speed_75 extends C_DOTABaseAbility {}

declare class C_DOTATurboHeroPickRules extends C_DOTABaseCustomHeroPickRules {
	m_Phase: DOTACustomHeroPickRulesPhase_t
}

declare class C_EnvCubemapFog extends C_BaseEntity {
	m_flEndDistance: number
	m_flStartDistance: number
	m_flFogFalloffExponent: number
	m_flLODBias: number
	m_bActive: boolean
	m_bStartDisabled: boolean
	m_bFirstTime: boolean
}

declare class C_DOTA_Item_Recipe_Sphere extends C_DOTA_Item {}

declare class C_DOTA_Unit_Hero_Skywrath_Mage extends C_DOTA_BaseNPC_Hero {}

declare class C_DOTA_Ability_Treant_NaturesGuise extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_BountyHunter_WindWalk extends C_DOTABaseAbility {}

declare class C_DOTA_Unit_Hero_Beastmaster_Boar extends C_DOTA_Unit_Hero_Beastmaster_Beasts {}

declare class C_DOTA_Ability_Enigma_BlackHole extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Holdout_BladeFury extends C_DOTA_Ability_Juggernaut_BladeFury {}

declare class C_DOTA_Ability_Greevil_Miniboss_Yellow_IonShell extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Pangolier_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Dark_Seer extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Bloodseeker_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Wraith_King_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Beastmaster_3 extends C_DOTABaseAbility {}

declare class C_DOTA_DataDire extends C_DOTA_DataNonSpectator {}

declare class C_DOTA_Item_Recipe_Desolator extends C_DOTA_Item {}

declare class C_DOTA_Item_Recipe_Dagon2 extends C_DOTA_Item_Recipe_Dagon {}

declare class CDOTA_NPC_Observer_Ward_TrueSight extends CDOTA_NPC_Observer_Ward {
	m_iTrueSight: number
	readonly m_hCasterEntity: C_BaseEntity
	readonly m_hAbilityEntity: C_BaseEntity
}

declare class C_DOTA_Ability_Shredder_ChakramAlias_shredder_chakram_2 extends C_DOTA_Ability_Shredder_Chakram {}

declare class C_DOTA_Ability_DragonKnight_DragonTail extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Undying_5 extends C_DOTABaseAbility {}

declare class C_DOTA_Item_RingOfAquila extends C_DOTA_Item {}

declare class CDOTA_Ability_DeathProphet_SpiritSiphon extends C_DOTABaseAbility {
	readonly m_vStartPos: Vector
	m_iArrowProjectile: number
	m_nFXIndex: number
	charge_restore_time: number
	max_charges: number
}

declare class C_DOTA_Ability_Slardar_Amplify_Damage extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Frostivus2018_Huskar_Life_Break extends C_DOTABaseAbility/*, C_HorizontalMotionController*/ {
	readonly m_vProjectileLocation: Vector
	readonly m_hTarget: C_BaseEntity
	m_bInterrupted: boolean
	max_damage: number
}

declare class C_DOTA_Ability_Greevil_Miniboss_Orange_DragonSlave extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Oracle_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Naga_Siren_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Clinkz_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Reincarnation_200 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Attack_Speed_10 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_HP_325 extends C_DOTABaseAbility {}

declare class C_SpeechBubbleManager extends C_BaseEntity {
	readonly m_SpeechBubbles: C_SpeechBubbleInfo[]
	readonly m_nLastCountInQueue: number[]
}

declare class C_DOTA_Unit_Hero_Winter_Wyvern extends C_DOTA_BaseNPC_Hero {
	m_nFXDeath: number
}

declare class CDOTA_Ability_Elder_Titan_AncestralSpirit extends C_DOTABaseAbility {
	speed: number
	radius: number
	buff_duration: number
	spirit_duration: number
	m_nCreepsHit: number
	m_nHeroesHit: number
	m_bIsReturning: boolean
	readonly m_hAncestralSpirit: C_BaseEntity
	m_nReturnFXIndex: number
}

declare class C_DOTA_Ability_Tiny_Toss extends C_DOTABaseAbility {}

declare class C_DOTA_Item_UpgradedMortar extends C_DOTA_Item {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Venomancer_5 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Spirit_Breaker_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Medusa_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Exp_Boost_35 extends C_DOTABaseAbility {}

declare class C_DOTA_Unit_Brewmaster_PrimalStorm extends C_DOTA_BaseNPC_Creep {
	m_nFXStormAmbient1: number
	m_nFXStormAmbient2: number
}

declare class C_DOTA_Ability_Chen_DivineFavor extends C_DOTABaseAbility {}

declare class C_DOTA_Unit_Hero_Warlock extends C_DOTA_BaseNPC_Hero {}

declare class C_DOTA_Ability_StormSpirit_ElectricVortex extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_AntiMage_ManaBreak extends C_DOTABaseAbility {}

declare class C_DotaSubquestAbilityCastCount extends C_DotaSubquestBase {}

declare class C_DOTA_Ability_SatyrHellcaller_UnholyAura extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_DarkWillow_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Enigma extends C_DOTABaseAbility {}

declare class C_DOTA_BaseNPC_HoldoutTower_HeavySlow extends C_DOTA_BaseNPC_HoldoutTower {}

declare class C_DOTA_Ability_MonkeyKing_Boundless_Strike extends C_DOTABaseAbility {
	strike_cast_range: number
	strike_radius: number
	m_nFXIndex: number
}

declare class C_DOTA_Ability_Skywrath_Mage_Arcane_Bolt extends C_DOTABaseAbility {
	bolt_vision: number
	vision_duration: number
	m_flDamage: number
	m_nFXIndex: number
}

declare class C_DOTA_Ability_Shadow_Demon_Shadow_Poison extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Necrolyte_Sadist extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Pangolier_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Shadow_Demon_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Naga_Siren extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_HP_500 extends C_DOTABaseAbility {}

declare class C_DOTAMutationGameMode extends C_DOTABaseGameMode {}

declare class C_DOTA_BaseNPC_Promo extends C_DOTA_BaseNPC_Building {}

declare class C_DOTA_Item_Recipe_Skadi extends C_DOTA_Item {}

declare class C_DOTA_Ability_LoneDruid_SpiritBear_Return extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Weaver_GeminateAttack extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Clinkz_Burning_Army extends C_DOTABaseAbility {
	m_bIsBasePointSet: boolean
	m_bIsMidQuickcast: boolean
	readonly m_vBasePoint: Vector
	m_nFXTarget: number
	range: number
}

declare class C_DOTA_Ability_Special_Bonus_Unique_Monkey_King_7 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Cleave_150 extends C_DOTABaseAbility {}

declare class CClient_Precipitation extends C_BaseModelEntity {
	m_nPrecipType: PrecipitationType_t
	m_minSpeed: number
	m_maxSpeed: number
	readonly m_Color: number[]
	m_Lifetime: number
	m_InitialRamp: number
	m_Speed: number
	m_Width: number
	m_Remainder: number
	m_flHalfScreenWidth: number
	m_flDensity: number
	m_flParticleInnerDist: number
	readonly m_pParticleInnerNearDef: string
	readonly m_pParticleInnerFarDef: string
	readonly m_pParticleOuterDef: string
	readonly m_tParticlePrecipTraceTimer: TimedEvent[]
	readonly m_bActiveParticlePrecipEmitter: boolean[]
	m_bParticlePrecipInitialized: boolean
	m_bHasSimulatedSinceLastSceneObjectUpdate: boolean
	m_nAvailableSheetSequencesMaxIndex: number
}

declare class C_LightSpotEntity extends C_LightEntity {}

declare class C_DOTA_Item_Recipe_Butterfly extends C_DOTA_Item {}

declare class C_DOTA_Ability_DarkWillow_Bedlam extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Puck_PhaseShift extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Zuus_StaticField extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Seasonal_Festive_Firework extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Greevil_Miniboss_Purple_VenomousGale extends C_DOTABaseAbility {
	duration: number
}

declare class C_DOTA_Ability_Special_Bonus_Unique_Ancient_Apparition_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Agility_100 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_MP_350 extends C_DOTABaseAbility {}

declare class C_DOTA_PortraitBaseModel extends C_BaseAnimating {}

declare class C_DOTA_PortraitTree extends C_BaseAnimating {}

declare class C_PropZipline extends C_BaseAnimating {
	readonly m_hPrevZipline: C_BaseEntity
	readonly m_hNextZipline: C_BaseEntity
	m_flMaxSpeed: number
}

declare class C_DOTA_Item_Nullifier extends C_DOTA_Item {}

declare class C_DOTA_Ability_SpiritBreaker_Bulldoze extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_DoomBringer_Doom extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Courier_GoToSideShop2 extends C_DOTABaseAbility {}

declare class C_DOTA_Unit_Hero_Tidehunter extends C_DOTA_BaseNPC_Hero {}

declare class C_IngameEvent_FM2015 extends C_IngameEvent_Base {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Visage_6 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Strength_10 extends C_DOTABaseAbility {}

declare class C_DOTA_Item_PocketRoshan extends C_DOTA_Item {}

declare class C_DOTA_Ability_Visage_SoulAssumption extends C_DOTABaseAbility {
	m_fDamage: number
	m_nFXIndex: number
	m_iForcedStacks: number
}

declare class C_DOTA_Ability_Morphling_AdaptiveStrike_Str extends C_DOTABaseAbility {}

declare class C_IngameEvent_WM2016 extends C_IngameEvent_Base {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Enigma_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Movement_Speed_50 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Attack_Speed_200 extends C_DOTABaseAbility {}

declare class C_DOTA_Item_Recipe_Maelstrom extends C_DOTA_Item {}

declare class C_DOTA_Item_Dagon_Upgraded2 extends C_DOTA_Item_Dagon_Upgraded {}

declare class C_DOTA_Item_SobiMask extends C_DOTA_Item {}

declare class C_DOTA_Unit_Hero_Beastmaster_Hawk extends C_DOTA_Unit_Hero_Beastmaster_Beasts {}

declare class C_DOTA_Ability_Enigma_DemonicConversion extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Abaddon extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Tusk_5 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Meepo_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Spell_Block_15 extends C_DOTABaseAbility {}

declare class C_RagdollManager extends C_BaseEntity {
	m_iCurrentMaxRagdollCount: number
}

declare class C_DOTAPlayer extends C_BasePlayer {
	m_iMinimapMove: number
	m_nRareLineClickCount: number
	m_nRareLinesPlayed: number
	m_flCenterTime: number
	m_iConfirmationIndex: number
	m_bCenterOnHero: boolean
	m_bHeroAssigned: boolean
	m_nKeyBindHeroID: number
	m_bUsingCameraMan: boolean
	m_bUsingAssistedCameraOperator: boolean
	m_nPlayerAssistFlags: number
	readonly m_vLatestEvent: Vector
	readonly m_vecStartingPosition: Vector
	readonly m_hAssignedHero: C_BaseEntity
	readonly m_hLastAssignedHero: C_BaseEntity
	readonly m_hKillCamUnit: C_BaseEntity
	readonly m_hPreviousKillCamUnit: C_BaseEntity
	m_flKillCamUnitReceivedTime: number
	m_bTeleportRequiresHalt: boolean
	m_bChannelRequiresHalt: boolean
	m_bAutoPurchaseItems: boolean
	m_bDisableHUDErrorMessages: boolean
	m_iMouseDragStartX: number
	m_iMouseDragStartY: number
	m_nWeatherType: number
	m_nSelectedControlGroup: number
	m_iPlayerID: number
	m_nCachedCoachedTeam: number
	readonly m_hActiveAbility: C_BaseEntity
	readonly m_unitorders: CUnitOrders[]
	m_nOutgoingOrderSequenceNumber: number
	m_nServerOrderSequenceNumber: number
	readonly m_nSelectedUnits: C_BaseEntity[]
	readonly m_nWaypoints: number[]
	m_iActions: number
	readonly m_hQueryUnit: C_BaseEntity
	m_bInQuery: boolean
	m_bSelectionChangedInDataUpdate: boolean
	m_flQueryInhibitingActionTime: number
	m_flQueryInhibitDuration: number
	readonly m_RingedEntities: C_BaseEntity[]
	readonly m_ActiveRingOwners: C_BaseEntity[]
	m_bOverridingQuery: boolean
	m_flLastAutoRepeatTime: number
	m_flConsumeDoubleclickTime: number
	readonly m_LightInfoWeatherEffect: string
	m_bPreviousWasLightInfoWeather: boolean
	readonly m_MapDefaultWeatherEffect: string
	m_iTotalEarnedGold: number
	m_iTotalEarnedXP: number
	readonly m_vecCreepSpawnBoxEffects: number[]
	readonly m_vecSuggestedWardLocationEffects: number[]
	readonly m_pSmartCastNPC: C_DOTA_BaseNPC
	m_nTeamSprayParticleIndex: number
	readonly m_iCursor: number[]
	m_iSpectatorClickBehavior: number
	m_flAspectRatio: number
	readonly m_hSpectatorQueryUnit: C_BaseEntity
	m_iStatsPanel: number
	m_iShopPanel: number
	m_iShopViewMode: ShopItemViewMode_t
	m_iStatsDropdownCategory: number
	m_iStatsDropdownSort: number
	readonly m_szShopString: number[]
	readonly m_vecClientQuickBuyState: ClientQuickBuyItemState[]
	m_bInShowCaseMode: boolean
	m_flCameraZoomAmount: number
	m_iHighPriorityScore: number
	readonly m_quickBuyItems: number[]
	readonly m_quickBuyIsPurchasable: boolean[]
	readonly m_iPrevCursor: number[]
	m_iPositionHistoryTail: number
	m_iMusicStatus: number
	m_iPreviousMusicStatus: number
	m_bRequestedInventory: boolean
	readonly m_flMusicOperatorVals: number[]
	readonly m_iMusicOperatorVals: number[]
	readonly m_ControlGroups: sControlGroupElem[][]
}

declare class C_DOTA_Ability_TemplarAssassin_PsionicTrap extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_SandKing_SandStorm extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_DarkTrollWarlord_RaiseDead extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Medusa extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Arc_Warden_5 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Intelligence_35 extends C_DOTABaseAbility {}

declare class C_EnvSky extends C_BaseModelEntity {
	m_bStartDisabled: boolean
	readonly m_vTintColor: Color
	m_nFogType: number
	m_flFogMinStart: number
	m_flFogMinEnd: number
	m_flFogMaxStart: number
	m_flFogMaxEnd: number
	m_bEnabled: boolean
}

declare class C_DOTA_Ability_Obsidian_Destroyer_AstralImprisonment extends C_DOTABaseAbility {
	readonly m_hImprisonedUnit: C_BaseEntity
	max_charges_scepter: number
	charge_restore_time_scepter: number
}

declare class C_DOTA_Ability_Clinkz_Strafe extends C_DOTABaseAbility {}

declare class CDOTA_Ability_GraniteGolem_HPAura extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Sven_3 extends C_DOTABaseAbility {}

declare class CInfoTarget extends C_PointEntity {}

declare class CDOTA_Item_Solar_Crest extends C_DOTA_Item {}

declare class C_DOTA_Item_Diffusal_Blade_Level2 extends C_DOTA_Item_Diffusal_Blade {}

declare class C_DOTA_Ability_Rubick_Empty2 extends C_DOTABaseAbility {}

declare class CDOTA_Ability_Meepo_Poof extends C_DOTABaseAbility {
	m_nFXIndex: number
}

declare class CDOTA_Ability_Life_Stealer_Empty1 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_QueenOfPain_ShadowStrike extends C_DOTABaseAbility {
	readonly projectile_speed: Vector
}

declare class C_DOTA_Ability_Special_Bonus_Unique_Kunkka_5 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Legion_Commander_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Invoker_1 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_HP_Regen_6 extends C_DOTABaseAbility {}

declare class C_DOTA_Item_Assault_Cuirass extends C_DOTA_Item {}

declare class CIngameEvent_NewBloom2019 extends C_IngameEvent_Base {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Mirana_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Lone_Druid_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Attack_Damage_60 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Intelligence_10 extends C_DOTABaseAbility {}

declare class C_SpriteOriented extends C_Sprite {}

declare class C_PlayerCosmeticPropClientside extends C_DynamicPropClientside {
	m_iPlayerNum: number
	m_iCosmeticType: number
	readonly m_szProxyTextureName: number[]
	m_bGeneratedShowcaseProps: boolean
	readonly m_vecShowcaseProps: C_PlayerCosmeticPropClientside[]
	readonly m_pShowcaseItem: C_EconItemView
}

declare class C_DOTA_Item_Circlet extends C_DOTA_Item {}

declare class C_DOTA_Ability_Roshan_Slam extends C_DOTABaseAbility {}

declare class CDOTA_Ability_Frostivus2018_Clinkz_Burning_Army extends C_DOTABaseAbility {
	m_bIsBasePointSet: boolean
	m_bIsMidQuickcast: boolean
	readonly m_vBasePoint: Vector
	m_nFXTarget: number
	range: number
}

declare class C_DOTA_Ability_Special_Bonus_Unique_Warlock_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Phantom_Lancer extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Strength_8 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_MP_500 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_LoneDruid_SavageRoar_Bear extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Invoker_Invoke extends C_DOTABaseAbility {
	max_invoked_spells: number
}

declare class C_DOTA_Ability_Life_Stealer_Feast extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Intelligence_20 extends C_DOTABaseAbility {}

declare class C_DOTA_BaseNPC_HoldoutTower_LightFast extends C_DOTA_BaseNPC_HoldoutTower {}

declare class C_DOTA_Item_Necronomicon_Level2 extends C_DOTA_Item_Necronomicon {}

declare class C_DOTA_Item_Recipe_DivineRapier extends C_DOTA_Item {}

declare class C_DOTA_Item_Recipe_PowerTreads extends C_DOTA_Item {}

declare class C_DOTA_Ability_Pangolier_LuckyShot extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Undying_SoulRip extends C_DOTABaseAbility {
	damage_per_unit: number
	radius: number
	max_units: number
	tombstone_heal: number
}

declare class C_DOTA_Ability_FacelessVoid_TimeLock extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Bane_BrainSap extends C_DOTABaseAbility {
	brain_sap_damage: number
}

declare class C_DOTA_Ability_Special_Bonus_Unique_Necrophos_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Phoenix_5 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Disruptor_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Ancient_Apparition_5 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Movement_Speed_65 extends C_DOTABaseAbility {}

declare class C_DOTA_Item_GemOfTrueSight extends C_DOTA_Item {
	m_iTempViewer: number
	m_iTeam: number
	m_nFXIndex: number
}

declare class C_DOTA_Item_Gauntlets extends C_DOTA_Item {}

declare class C_DOTA_Unit_Hero_Medusa extends C_DOTA_BaseNPC_Hero {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Treant_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Attack_Base_Damage_45 extends C_DOTABaseAbility {}

declare class C_DOTA_Item_RuneSpawner_Powerup extends C_BaseAnimating {
	m_nRuneType: DOTA_RUNES
	m_flLastSpawnTime: number
}

declare class C_DOTA_Ability_Abaddon_DeathCoil extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_TemplarAssassin_Meld extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Nian_Sigils extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Nevermore_Necromastery extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Underlord_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Shadow_Shaman_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Earth_Spirit_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Axe_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Faceless_Void_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Ember_Spirit_5 extends C_DOTABaseAbility {}

declare class C_DOTA_Item_Recipe_Arcane_Boots extends C_DOTA_Item {}

declare class CDOTA_Ability_Winter_Wyvern_Winters_Curse extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Holdout_FriendlySkewer extends C_DOTABaseAbility {
	skewer_radius: number
	skewer_speed: number
	max_targets: number
	range: number
	tree_radius: number
	affects_creeps: number
	m_nTargetsHit: number
}

declare class C_DOTA_Ability_DarkSeer_IonShell extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Bane_Enfeeble extends C_DOTABaseAbility {}

declare class C_DOTA_Item_DeathGoldDropped extends C_BaseAnimating {}

declare class C_LocalTempEntity extends C_BaseAnimating {
	flags: number
	die: number
	m_flFrameMax: number
	x: number
	y: number
	fadeSpeed: number
	bounceFactor: number
	hitSound: number
	priority: number
	readonly tentOffset: Vector
	readonly m_vecTempEntAngVelocity: QAngle
	tempent_renderamt: number
	readonly m_vecNormal: Vector
	m_flSpriteScale: number
	m_nFlickerFrame: number
	m_flFrameRate: number
	m_flFrame: number
	readonly m_pszImpactEffect: string
	readonly m_pszParticleEffect: string
	m_bParticleCollision: boolean
	m_iLastCollisionFrame: number
	readonly m_vLastCollisionOrigin: Vector
	readonly m_vecTempEntVelocity: Vector
	readonly m_vecPrevAbsOrigin: Vector
	readonly m_vecTempEntAcceleration: Vector
}

declare class C_DOTA_Item_Armlet extends C_DOTA_Item {
	toggle_cooldown: number
}

declare class C_DOTA_Ability_Courier_Shield extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_DrowRanger_Silence extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Nevermore_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Strength_14 extends C_DOTABaseAbility {}

declare class C_LightEnvironmentEntity extends C_LightDirectionalEntity {}

declare class C_DOTA_Item_WindLace extends C_DOTA_Item {}

declare class CDOTA_Ability_EarthSpirit_Petrify extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_EmberSpirit_SleightOfFist extends C_DOTABaseAbility {
	readonly m_vCastLoc: Vector
	m_nHeroesKilled: number
	readonly m_hAttackEntities: C_BaseEntity[]
	m_nFXMarkerIndex: number
}

declare class C_DOTA_Ability_Special_Bonus_Unique_Lion_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Sniper_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Evasion_50 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Spell_Amplify_20 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_MP_Regen_5 extends C_DOTABaseAbility {}

declare class C_DynamicLight extends C_BaseModelEntity {
	m_Flags: number
	m_LightStyle: number
	m_Radius: number
	m_Exponent: number
	m_InnerAngle: number
	m_OuterAngle: number
	m_SpotRadius: number
}

declare class C_DOTA_Item_Satanic extends C_DOTA_Item {}

declare class CDOTA_Unit_Grimstroke_InkCreature extends C_DOTA_BaseNPC_Hero {}

declare class C_DOTA_Ability_MonkeyKing_UnTransform extends C_DOTABaseAbility {}

declare class CDOTA_Ability_Elder_Titan_EarthSplitter extends C_DOTABaseAbility {
	crack_width: number
	crack_distance: number
	speed: number
	vision_width: number
	crack_time: number
}

declare class C_DOTA_Ability_Undying_FleshGolem extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Frostivus2018_Omniknight_Degen_Aura extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Pangolier_5 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Venomancer_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Wraith_King_6 extends C_DOTABaseAbility {}

declare class C_PropJeep extends C_PropVehicleDriveable {
	readonly m_vecLastEyePos: Vector
	readonly m_vecLastEyeTarget: Vector
	readonly m_vecEyeSpeed: Vector
	readonly m_vecTargetSpeed: Vector
	m_flViewAngleDeltaTime: number
	m_flJeepFOV: number
	readonly m_pHeadlight: CHeadlightEffect
	m_bHeadlightIsOn: boolean
}

declare class C_DOTA_Item_Heart extends C_DOTA_Item {}

declare class C_DOTA_Ability_Pangolier_ShieldCrash extends C_DOTABaseAbility {}

declare class C_DOTA_NPC_TechiesMines extends C_DOTA_BaseNPC_Additive {
	m_iRangeFX: number
}

declare class C_DOTA_Ability_SandKing_CausticFinale extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_SatyrHellcaller_Shockwave extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Agility_15 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_HP_Regen_16 extends C_DOTABaseAbility {}

declare class C_DOTA_Unit_Hero_Broodmother extends C_DOTA_BaseNPC_Hero {}

declare class C_DOTA_Item_Recipe_HelmOfTheDominator extends C_DOTA_Item {}

declare class C_DOTA_Item_RefresherOrb extends C_DOTA_Item {}

declare class C_DOTA_Ability_Silencer_CurseOfTheSilent extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Chen_Penitence extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Slardar_Sprint extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_PhantomLancer_Doppelwalk extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Intelligence_6 extends C_DOTABaseAbility {}

declare class C_EnvDetailController extends C_BaseEntity {
	m_flFadeStartDist: number
	m_flFadeEndDist: number
}

declare class CViewAngleAnimation extends C_BaseEntity {
	m_flAnimStartTime: number
	m_bFinished: boolean
	readonly m_KeyFrames: CViewAngleKeyFrame[]
	readonly m_vecBaseAngles: QAngle
	m_iFlags: number
}

declare class C_DOTA_Ability_SpiritBreaker_NetherStrike extends C_DOTABaseAbility {
	cooldown_scepter: number
	cast_range_scepter: number
}

declare class C_DOTA_Unit_Hero_Enchantress extends C_DOTA_BaseNPC_Hero {}

declare class C_DOTA_Ability_Nian_Hurricane extends C_DOTABaseAbility {
	min_distance: number
	max_distance: number
	torrent_count: number
	fire_interval: number
	pull_switch_interval: number
	game_time_wind_activation: number
	readonly m_ctPullTimer: CountdownTimer
	readonly m_ctTimer: CountdownTimer
	m_flTiming: number
	m_bForward: boolean
	m_bUseWind: boolean
	m_nFXIndex: number
	m_nfxIndex_roar: number
}

declare class C_DOTA_Ability_Puck_IllusoryOrb extends C_DOTABaseAbility {
	m_iProjectile: number
	readonly m_ViewerTimer: CountdownTimer
	orb_vision: number
	vision_duration: number
}

declare class C_DOTA_Ability_Special_Bonus_Unique_Doom_1 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Bristleback_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Cleave_100 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Rubick_NullField extends C_DOTABaseAbility {}

declare class CDOTA_Ability_Clinkz_SearingArrows extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Razor_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Lich_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Keeper_of_the_Light extends C_DOTABaseAbility {}

declare class CPointHintUi extends C_PointClientUIWorldPanel {
	m_attachType: WorldTextAttachmentType_t
	readonly m_hIconTarget: C_BaseEntity
	readonly m_szTargetAttachmentName: string
	readonly m_vOffset: Vector
	m_bAlwaysVisible: boolean
	readonly m_vecWorldPosition: Vector
	m_bUsesCustomLayout: boolean
	m_nHighlightTargetParticleIdx: number
	readonly m_hHighlightModel: C_BaseEntity
	m_nHighlightPointParticleIdx: number
	readonly m_vecLocalHighlightPoint: Vector
	readonly m_hHighlightOtherEntity: C_BaseEntity
	m_flFadeInEndTime: number
	m_flFadeOutEndTime: number
}

declare class C_PhysicsProp extends C_BreakableProp {
	m_bAwake: boolean
	m_spawnflags: number
}

declare class C_DOTAPropCustomTexture extends C_DynamicProp {
	m_unTeamID: number
	m_bSetupMaterialProxy: boolean
}

declare class C_DOTA_Ability_TrollWarlord_WhirlingAxes_Ranged extends C_DOTABaseAbility {
	readonly m_vStartPos: Vector
	m_iArrowProjectile: number
	axe_width: number
	axe_speed: number
	axe_range: number
	axe_spread: number
	axe_count: number
	readonly m_hHitUnits: C_BaseEntity[]
}

declare class C_DotaSubquestTutorialEvent extends C_DotaSubquestBase {}

declare class C_DOTA_Ability_Greevil_Miniboss_White_Degen_Aura extends C_DOTABaseAbility {}

declare class CDOTA_Ability_Spawnlord_Aura extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Riki_5 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_HP_800 extends C_DOTABaseAbility {}

declare class C_Beam extends C_BaseModelEntity {
	m_flFrameRate: number
	m_flHDRColorScale: number
	m_flFireTime: number
	m_flDamage: number
	m_nNumBeamEnts: number
	m_queryHandleHalo: number
	m_nBeamType: BeamType_t
	m_nBeamFlags: number
	readonly m_hAttachEntity: C_BaseEntity[]
	readonly m_nAttachIndex: number[]
	m_fWidth: number
	m_fEndWidth: number
	m_fFadeLength: number
	m_fHaloScale: number
	m_fAmplitude: number
	m_fStartFrame: number
	m_fSpeed: number
	m_flFrame: number
	m_nClipStyle: BeamClipStyle_t
	m_bTurnedOff: boolean
	readonly m_vecEndPos: Vector
	readonly m_hEndEntity: C_BaseEntity
}

declare class C_ShadowControl extends C_BaseEntity {
	readonly m_shadowDirection: Vector
	readonly m_shadowColor: Color
	m_flShadowMaxDist: number
	m_bDisableShadows: boolean
	m_bEnableLocalLightShadows: boolean
}

declare class C_FuncMoveLinear extends C_BaseToggle {}

declare class C_DOTA_Item_Recipe_Heart extends C_DOTA_Item {}

declare class C_DOTA_Item_PlateMail extends C_DOTA_Item {}

declare class C_DOTA_Ability_Wisp_Tether_Break extends C_DOTABaseAbility {}

declare class CDOTA_Ability_Beastmaster_InnerBeast extends C_DOTABaseAbility {}

declare class CDOTA_Ability_Lich_FrostAura extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Omniknight_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Magnus_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Strength_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Item_Rune extends C_BaseAnimating {
	m_iRuneType: number
	m_iOldRuneType: number
	m_bShowingTooltip: boolean
}

declare class C_DOTAAmbientCreatureParticleZone extends C_FuncBrush {
	readonly m_szModelName: number[]
	readonly m_szAreaName: number[]
}

declare class C_DOTA_Hero_Recorder extends C_BaseEntity {
	m_bStartRecording: boolean
	readonly m_hHero: C_BaseEntity
	readonly m_hPlayer: C_BaseEntity
	m_bRecording: boolean
	m_bLastStartRecording: boolean
	m_flLastCycle: number
	m_nCompletedCycles: number
	m_nFramesThisCycle: number
	m_nRecordedFrames: number
	m_flHeroAdvanceTime: number
	m_flStartTime: number
	readonly m_flCycles: number[]
}

declare class C_DOTA_Item_Aether_Lens extends C_DOTA_Item {}

declare class C_DOTA_Item_Necronomicon_Level3 extends C_DOTA_Item_Necronomicon {}

declare class C_DOTA_Item_Sange extends C_DOTA_Item {}

declare class CDOTA_Ability_Grimstroke_InkCreature extends C_DOTABaseAbility {
	spawn_time: number
}

declare class C_DOTA_Ability_Broodmother_InsatiableHunger extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Ursa_Earthshock extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Bane_FiendsGrip extends C_DOTABaseAbility {
	readonly m_hGripTarget: C_BaseEntity
	fiend_grip_damage: number
}

declare class C_DOTA_Ability_Greevil_Miniboss_Red_Earthshock extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Shadow_Demon_1 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Tinker_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_HP_600 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_PhantomAssassin_CoupdeGrace extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Spell_Lifesteal_20 extends C_DOTABaseAbility {}

declare class C_DOTAGamerulesProxy extends C_GameRulesProxy {
	readonly m_pGameRules: C_DOTAGamerules
}

declare class C_DOTA_BaseNPC_Creep_Siege extends C_DOTA_BaseNPC_Creep_Lane {}

declare class CDOTA_Item_Enchanted_Mango extends C_DOTA_Item {}

declare class C_DOTA_Ability_Phoenix_IcarusDiveStop extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Enchantress_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Winter_Wyvern_1 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Wisp_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Spell_Lifesteal_60 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Cooldown_Reduction_10 extends C_DOTABaseAbility {}

declare class C_EnvScreenOverlay extends C_PointEntity {
	readonly m_iszOverlayNames: string[]
	readonly m_flOverlayTimes: number[]
	m_flStartTime: number
	m_iDesiredOverlay: number
	m_bIsActive: boolean
	m_bWasActive: boolean
	m_iCachedDesiredOverlay: number
	m_iCurrentOverlay: number
	m_flCurrentOverlayTime: number
}

declare class C_DynamicPropAlias_prop_dynamic_override extends C_DynamicProp {}

declare class C_DOTA_Ability_Rubick_Arcane_Supremacy extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Life_Stealer_Rage extends C_DOTABaseAbility {}

declare class C_DOTA_Unit_Hero_TemplarAssassin extends C_DOTA_BaseNPC_Hero {}

declare class C_DOTA_Ability_Lich_FrostShield extends C_DOTABaseAbility {}

declare class CDOTA_Ability_Frostivus2018_FacelessVoid_TimeLock extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Omniknight_1 extends C_DOTABaseAbility {}

declare class C_PointWorldText extends C_ModelPointEntity {
	m_bForceRecreateNextUpdate: boolean
	readonly m_messageText: number[]
	readonly m_FontName: number[]
	m_bEnabled: boolean
	m_bFullbright: boolean
	m_flWorldUnitsPerPx: number
	m_flFontSize: number
	m_flDepthOffset: number
	readonly m_Color: Color
	m_nJustifyHorizontal: PointWorldTextJustifyHorizontal_t
	m_nJustifyVertical: PointWorldTextJustifyVertical_t
	m_nReorientMode: PointWorldTextReorientMode_t
}

declare class C_BodyComponentBaseAnimatingOverlay extends CBodyComponentSkeletonInstance {
	readonly m_animationController: C_BaseAnimatingOverlayController
	readonly __m_pChainEntity: CNetworkVarChainer
}

declare class C_DOTA_Unit_Hero_Dazzle extends C_DOTA_BaseNPC_Hero {}

declare class C_DOTA_Ability_Kunkka_Return extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_DrowRanger_Trueshot extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Beastmaster_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_All_Stats_8 extends C_DOTABaseAbility {}

declare class C_DOTA_Unit_Hero_Wisp extends C_DOTA_BaseNPC_Hero {
	m_nAmbientFXIndex: number
	m_nStunnedFXIndex: number
	m_nTalkFXIndex: number
	m_nIllusionFXIndex: number
	m_bParticleHexed: boolean
	m_bParticleStunned: boolean
	m_bDetermineAmbientEffect: boolean
	m_flPrevHealth: number
}

declare class C_DOTA_Item_Faerie_Fire extends C_DOTA_Item {}

declare class C_DOTA_Item_MaskOfDeath extends C_DOTA_Item {}

declare class C_DOTA_Ability_Pangolier_Gyroshell extends C_DOTABaseAbility {
	m_nFxIndex: number
}

declare class C_DOTA_Ability_Bristleback_Bristleback extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Luna_LunarBlessing extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Animation_TailSpin extends C_DOTABaseAbility {
	animation_time: number
}

declare class C_DOTA_Ability_Special_Bonus_Unique_Earth_Spirit_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Lifestealer_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Item_Cheese extends C_DOTA_Item {}

declare class CDOTA_Item_ForceStaff extends C_DOTA_Item {}

declare class C_DOTA_Item_GlovesOfHaste extends C_DOTA_Item {}

declare class C_DOTA_Ability_NagaSiren_SongOfTheSiren extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_FacelessVoid_TimeWalk extends C_DOTABaseAbility/*, C_HorizontalMotionController*/ {
	speed: number
	range: number
	radius: number
}

declare class C_DOTA_BaseNPC_ShadowShaman_SerpentWard extends C_DOTA_BaseNPC_Additive {
	readonly m_angle: QAngle
	m_iPoseParameterAim: number
}

declare class C_DOTA_Ability_AntiMage_Counterspell extends C_DOTABaseAbility {}

declare class C_IngameEvent_TI6 extends C_IngameEvent_Base {}

declare class C_DOTA_Ability_Greevil_Miniboss_Orange_LightStrikeArray extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Pangolier_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Vengeful_Spirit_5 extends C_DOTABaseAbility {}

declare class C_DOTA_Item_Recipe_MagicWand extends C_DOTA_Item {}

declare class C_DOTA_Item_TranquilBoots2 extends C_DOTA_Item {
	break_count: number
	readonly m_DamageList: number[]
}

declare class C_DOTA_Ability_MonkeyKing_TreeDance extends C_DOTABaseAbility {
	perched_jump_distance: number
	ground_jump_distance: number
}

declare class C_DOTA_Ability_Visage_GravekeepersCloak extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Brewmaster_Pulverize extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Sven_StormBolt extends C_DOTABaseAbility {
	vision_radius: number
}

declare class C_DOTA_Ability_HarpyStorm_ChainLightning extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Troll_Warlord extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Wisp_6 extends C_DOTABaseAbility {}

declare class C_DOTACustomGameHeroPickRules extends C_DOTABaseCustomHeroPickRules {
	m_Phase: DOTACustomHeroPickRulesPhase_t
	m_nNumBansPerTeam: number
	m_flEnterTime: number
	m_nNumHeroesPicked: number
}

declare class C_PointEntityAlias_info_target_portrait_root extends C_PointEntity {}

declare class C_BasePropDoor extends C_DynamicProp {
	m_eDoorState: DoorState_t
	m_modelChanged: boolean
	m_bLocked: boolean
	m_isRescueDoor: boolean
	readonly m_hMaster: C_BaseEntity
}

declare class C_DOTA_Unit_IngisFatuus extends C_DOTA_BaseNPC_Additive {}

declare class C_DOTA_Ability_Tidehunter_KrakenShell extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_SandKing_Epicenter extends C_DOTABaseAbility {
	m_nFXEpicenterIndex: number
}

declare class C_DotaSubquestPlayerStat extends C_DotaSubquestBase {}

declare class C_DotaQuest extends C_BaseEntity {
	readonly m_pszQuestTitle: number[]
	readonly m_pszQuestText: number[]
	m_nQuestType: number
	readonly m_hSubquests: C_BaseEntity[]
	m_bHidden: boolean
	m_bCompleted: boolean
	m_bWinIfCompleted: boolean
	m_bLoseIfCompleted: boolean
	readonly m_pszGameEndText: number[]
	readonly m_pnTextReplaceValuesCDotaQuest: number[]
	readonly m_pszTextReplaceString: number[]
	m_nTextReplaceValueVersion: number
	m_bWasCompleted: boolean
}

declare class C_DOTA_Ability_Frostivus2018_DarkWillow_BrambleMaze extends C_DOTABaseAbility {}

declare class CDOTA_Unit_SpectralTusk_Tombstone extends C_DOTA_BaseNPC_Additive {}

declare class CDOTA_Ability_Seasonal_Summon_CNY_Balloon extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Morphling_6 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Ursa_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Spell_Lifesteal_70 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Strength_20 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Strength_6 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Attack_Speed_50 extends C_DOTABaseAbility {}

declare class C_ServerRagdollAttached extends C_ServerRagdoll {
	m_boneIndexAttached: number
	m_ragdollAttachedObjectIndex: number
	readonly m_attachmentPointBoneSpace: Vector
	readonly m_attachmentPointRagdollSpace: Vector
	readonly m_vecOffset: Vector
	m_parentTime: number
	m_bHasParent: boolean
}

declare class C_DOTA_Ability_EmberSpirit_FlameGuard extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Dazzle_1 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Strength_12 extends C_DOTABaseAbility {}

declare class C_DOTA_PortraitEntity_FullBody extends C_DOTA_PortraitEntity {}

declare class C_DOTA_Tiny_ScepterTree extends C_DOTAWearableItem {}

declare class C_PhysPropClientside extends C_BreakableProp {
	m_iPhysicsMode: number
	m_flTouchDelta: number
	m_fDeathTime: number
	m_impactEnergyScale: number
	m_spawnflags: number
	m_inertiaScale: number
	m_flDmgModBullet: number
	m_flDmgModClub: number
	m_flDmgModExplosive: number
	m_flDmgModFire: number
	readonly m_iszPhysicsDamageTableName: string
	readonly m_iszBreakableModel: string
	m_iBreakableSkin: number
	m_iBreakableCount: number
	m_iMaxBreakableSize: number
	readonly m_iszBasePropData: string
	m_iInteractions: number
	m_iNumBreakableChunks: number
	m_explodeDamage: number
	m_explodeRadius: number
	m_bBlockLOSSetByPropData: boolean
	m_bIsWalkableSetByPropData: boolean
	m_nCarryTypeOverride: number
}

declare class C_DOTA_Ability_Bear_Empty1 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Chen_TestOfFaithTeleport extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Courier_TransferItems extends C_DOTABaseAbility {}

declare class C_DOTA_Unit_Hero_Zuus extends C_DOTA_BaseNPC_Hero {}

declare class C_DOTA_Ability_Greevil_Miniboss_Black_Nightmare extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Ursa extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Ember_Spirit_1 extends C_DOTABaseAbility {}

declare class C_FogController extends C_BaseEntity {
	readonly m_fog: fogparams_t
	m_bUseAngles: boolean
	m_iChangedVariables: number
}

declare class C_DOTA_Item_Recipe_Yasha extends C_DOTA_Item {}

declare class C_DOTA_Ability_Jakiro_Macropyre extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Pugna_1 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_MP_Regen_8 extends C_DOTABaseAbility {}

declare class C_DOTA_Unit_Hero_TrollWarlord extends C_DOTA_BaseNPC_Hero {}

declare class C_DOTA_Item_Recipe_Headdress extends C_DOTA_Item {}

declare class C_DOTA_Ability_Terrorblade_Sunder extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Lycan_FeralImpulse extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Obsidian_Destroyer_Equilibrium extends C_DOTABaseAbility {
	m_iProjectile: number
}

declare class C_DOTA_Unit_Nian extends C_DOTA_BaseNPC_Creature {}

declare class C_DOTA_Ability_DataDriven extends C_DOTABaseAbility {
	m_bProcsMagicStick: boolean
	m_bIsSharedWithTeammates: boolean
	m_bCastFilterRejectCaster: boolean
	m_fAOERadius: number
	m_CastAnimation: number
}

declare class C_DOTA_Ability_Frostivus2018_Omniknight_Purification extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Enchantress_1 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Faceless_Void_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Lion_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Meepo extends C_DOTABaseAbility {}

declare class C_DOTA_BaseNPC_Fort extends C_DOTA_BaseNPC_Building {}

declare class CDOTA_Ability_Elder_Titan_ReturnSpirit extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Centaur_HoofStomp extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Batrider_Flamebreak extends C_DOTABaseAbility {
	m_iProjectile: number
}

declare class C_DOTA_Ability_Rattletrap_RocketFlare extends C_DOTABaseAbility {
	readonly m_vecEnemyHeroesInFog: C_BaseEntity[]
}

declare class C_DOTA_Ability_Frostivus2018_Windrunner_Shackleshot extends C_DOTABaseAbility {
	shackle_count: number
	readonly m_vArrowStartPos: Vector
	readonly m_hTarget: C_BaseEntity
	readonly m_hEntitiesAffected: C_BaseEntity[]
}

declare class C_DOTA_Ability_Special_Bonus_Unique_Visage_1 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Dark_Seer_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Dark_Seer_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Sven_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Weaver_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Elder_Titan extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Attack_Damage_90 extends C_DOTABaseAbility {}

declare class CDOTA_Ability_Special_Bonus_Intelligence_7 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Attack_Speed_25 extends C_DOTABaseAbility {}

declare class C_FuncMonitor extends C_FuncBrush {
	readonly m_targetCamera: string
	m_nResolutionEnum: number
	m_bRenderShadows: boolean
	m_bUseUniqueColorTarget: boolean
	readonly m_brushModelName: string
	readonly m_hTargetCamera: C_BaseEntity
	m_bEnabled: boolean
}

declare class CInfoWorldLayer extends C_BaseEntity {
	readonly m_pOutputOnEntitiesSpawned: CEntityIOOutput
	readonly m_worldName: string
	readonly m_layerName: string
	m_bWorldLayerVisible: boolean
	m_bEntitiesSpawned: boolean
	m_bCreateAsChildSpawnGroup: boolean
	m_hLayerSpawnGroup: number
	m_bWorldLayerActuallyVisible: boolean
}

declare class C_DOTA_Ability_Nyx_Assassin_Vendetta extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Rubick_Hidden3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Tiny_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Armor_12 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Strength_9 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Movement_Speed_10 extends C_DOTABaseAbility {}

declare class C_PoseController extends C_BaseEntity {
	m_bPoseValueParity: boolean
	m_fPoseValue: number
	m_fInterpolationDuration: number
	m_bInterpolationWrap: boolean
	m_fCycleFrequency: number
	m_nFModType: PoseController_FModType_t
	m_fFModTimeOffset: number
	m_fFModRate: number
	m_fFModAmplitude: number
	readonly m_hProps: C_BaseEntity[]
	readonly m_chPoseIndex: number[]
	m_bOldPoseValueParity: boolean
	m_fCurrentPoseValue: number
	m_fCurrentFMod: number
	readonly m_PoseTransitionValue: CInterpolatedValue
}

declare class C_PointHMDAnchorOverride extends C_PointHMDAnchor {}

declare class C_NetTestBaseCombatCharacter extends C_BaseCombatCharacter {}

declare class C_DOTA_Item_PhaseBoots extends C_DOTA_Item {}

declare class CDOTA_Unit_Hero_AbyssalUnderlord extends C_DOTA_BaseNPC_Hero {}

declare class CDOTA_Unit_Hero_Elder_Titan extends C_DOTA_BaseNPC_Hero {}

declare class CDOTA_Ability_Beastmaster_WildAxes extends C_DOTABaseAbility {
	axe_damage: number
}

declare class C_DOTA_Ability_Bane_Nightmare extends C_DOTABaseAbility {}

declare class C_ViewmodelWeapon extends C_BaseAnimating {
	readonly m_worldModel: string
}

declare class C_PhysMagnet extends C_BaseAnimating {
	readonly m_aAttachedObjectsFromServer: number[]
	readonly m_aAttachedObjects: C_BaseEntity[]
}

declare class C_FuncConveyor extends C_BaseModelEntity {
	m_flConveyorSpeed: number
}

declare class C_EnvDeferredLightClientOnly extends C_EnvDeferredLight {}

declare class C_DOTA_Item_OgreAxe extends C_DOTA_Item {}

declare class CDOTA_Ability_Beastmaster_CallOfTheWild_Boar extends C_DOTABaseAbility {}

declare class CDOTAInGamePredictionState extends C_BaseEntity {
	m_bVotingClosed: boolean
	m_bAllPredictionsFinished: boolean
	readonly m_vecPredictions: InGamePredictionData_t[]
	m_nLeagueID: number
	readonly m_vecPrevPredictions: InGamePredictionData_t[]
}

declare class C_DOTA_Ability_Special_Bonus_Unique_Silencer_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Item_InvisibilityEdge extends C_DOTA_Item {}

declare class C_DOTA_Item_Recipe_MonkeyKingBar extends C_DOTA_Item {}

declare class C_DOTA_Ability_ForgedSpirit_MeltingStrike extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Warlock_RainOfChaos extends C_DOTABaseAbility {}

declare class C_DOTA_Unit_Hero_Riki extends C_DOTA_BaseNPC_Hero {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Necrophos_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Morphling_8 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Dragon_Knight_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Tiny_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Magic_Resistance_50 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Magic_Resistance_35 extends C_DOTABaseAbility {}

declare class C_PortraitWorldCallbackHandler extends C_BaseEntity {}

declare class C_InfoPlayerStartBadGuys extends C_InfoPlayerStartDota {}

declare class C_BaseViewModel extends C_BaseAnimatingOverlay {
	readonly m_vecLastFacing: Vector
	m_nViewModelIndex: number
	m_nAnimationParity: number
	m_nLayer: number
	m_flAnimationStartTime: number
	readonly m_hWeapon: C_BaseEntity
	readonly m_hOwner: C_BaseEntity
	m_Activity: number
	readonly m_sVMName: string
	readonly m_sAnimationPrefix: string
	readonly m_hWeaponModel: C_BaseEntity
	m_iCameraAttachment: number
	readonly m_vecLastCameraAngles: QAngle
	m_previousElapsedDuration: number
	m_previousCycle: number
	m_nOldAnimationParity: number
	m_oldLayer: number
	m_oldLayerStartTime: number
}

declare class CDOTA_Item_Silver_Edge extends C_DOTA_Item {}

declare class C_DOTA_Item_Recipe_MantaStyle extends C_DOTA_Item {}

declare class C_DOTA_Ability_Nian_Eruption extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Puck_EtherealJaunt extends C_DOTABaseAbility {}

declare class C_DOTA_Unit_Hero_Mirana extends C_DOTA_BaseNPC_Hero {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Templar_Assassin_5 extends C_DOTABaseAbility {}

declare class CDOTA_VR_AvatarManagerCallbackHandler extends C_BaseEntity {}

declare class C_DOTA_DataSpectator extends C_DOTA_DataNonSpectator {
	readonly m_hPowerupRune_1: C_BaseEntity
	readonly m_hPowerupRune_2: C_BaseEntity
	readonly m_hBountyRune_1: C_BaseEntity
	readonly m_hBountyRune_2: C_BaseEntity
	readonly m_hBountyRune_3: C_BaseEntity
	readonly m_hBountyRune_4: C_BaseEntity
	readonly m_iNetWorth: number[]
	m_fRadiantWinProbability: number
	readonly m_iGoldSpentOnSupport: number[]
	readonly m_iHeroDamage: number[]
	readonly m_nWardsPurchased: number[]
	readonly m_nWardsPlaced: number[]
	readonly m_nWardsDestroyed: number[]
	readonly m_nRunesActivated: number[]
	readonly m_nCampsStacked: number[]
}

declare class C_FuncAreaPortalWindow extends C_BaseModelEntity {
	m_flFadeStartDist: number
	m_flFadeDist: number
	m_flTranslucencyLimit: number
}

declare class CDOTA_Item_Recipe_Aether_Lens extends C_DOTA_Item {}

declare class CDOTA_Ability_Centaur_DoubleEdge extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Broodmother_SpawnSpiderite extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Holdout_FierySoul extends C_DOTABaseAbility {}

declare class C_DOTA_Unit_Hero_Razor extends C_DOTA_BaseNPC_Hero {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Treant_7 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Oracle_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Attack_Speed_20 extends C_DOTABaseAbility {}

declare class C_DOTA_DataCustomTeam extends C_DOTA_DataNonSpectator {}

declare class C_DOTA_Item_Recipe_Bloodthorn extends C_DOTA_Item {}

declare class C_DOTA_Item_Dagon_Upgraded4 extends C_DOTA_Item_Dagon_Upgraded {}

declare class C_DOTA_Ability_Invoker_ForgeSpirit extends CDOTA_Ability_Invoker_InvokedBase {}

declare class CDOTA_Ability_CallOfTheWild_Boar_PoisonGreater extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Roshan_InherentBuffs extends C_DOTABaseAbility {}

declare class CDOTA_Unit_Announcer_Killing_Spree extends CDOTA_Unit_Announcer {}

declare class C_DOTA_Ability_Tinker_HeatSeekingMissile extends C_DOTABaseAbility {
	m_nTargetsKilled: number
}

declare class C_DOTA_Unit_Hero_Tinker extends C_DOTA_BaseNPC_Hero {}

declare class C_DOTA_Item_Holy_Locket extends C_DOTA_Item {}

declare class C_DOTA_Item_Recipe_PoorMansShield extends C_DOTA_Item {}

declare class C_DOTA_Ability_Oracle_FalsePromise extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Magnataur_Empower extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Courier_TakeStashAndTransferItems extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_SandKing_BurrowStrike extends C_DOTABaseAbility {
	burrow_width: number
	burrow_speed: number
	burrow_speed_scepter: number
	burrow_duration: number
	burrow_anim_time: number
}

declare class C_DOTA_Ability_Special_Bonus_Unique_Sand_King_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Sand_King extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Viper_1 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Monkey_King_5 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Lifesteal_100 extends C_DOTABaseAbility {}

declare class C_BaseVRHandAttachment extends C_BaseAnimating {
	readonly m_hOldAttachedHand: C_BaseEntity
	readonly m_OnAttachedToHand: CEntityIOOutput
	readonly m_OnDetachedFromHand: CEntityIOOutput
	readonly m_hAttachedHand: C_BaseEntity
	m_bIsAttached: boolean
}

declare class C_DOTA_Ability_Frostivus2018_TrollWarlord_Fervor extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Shadow_Demon_6 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Huskar_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Cast_Range_150 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Attack_Range_125 extends C_DOTABaseAbility {}

declare class C_EntityFlame extends C_BaseEntity {
	readonly m_hEntAttached: C_BaseEntity
	readonly m_hOldAttached: C_BaseEntity
	m_bCheapEffect: boolean
}

declare class C_DOTA_Unit_Hero_Leshrac extends C_DOTA_BaseNPC_Hero {}

declare class C_DOTA_Ability_DragonKnight_BreatheFire extends C_DOTABaseAbility {
	start_radius: number
	end_radius: number
	readonly m_vStartPos: Vector
	m_fStartTime: number
	m_fTotalTime: number
}

declare class C_DOTA_Ability_Special_Bonus_Unique_Vengeful_Spirit_1 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Keeper_of_the_Light_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Gyrocopter_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Cooldown_Reduction_8 extends C_DOTABaseAbility {}

declare class C_TintController extends C_BaseEntity {}

declare class C_PhysBoxMultiplayer extends C_PhysBox {
	m_iPhysicsMode: number
	m_fMass: number
}

declare class C_DOTA_Ability_LoneDruid_TrueForm_BattleCry extends C_DOTABaseAbility {
	cry_duration: number
}

declare class C_DOTA_Ability_Brewmaster_DrunkenBrawler extends C_DOTABaseAbility {
	m_iBrawlActive: number
	m_bUpdateIcons: boolean
}

declare class C_DOTA_Ability_Leshrac_Split_Earth extends C_DOTABaseAbility {}

declare class CDOTA_Ability_Courier_Morph extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_SatyrSoulstealer_ManaBurn extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Warlock_1 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Windranger_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Cooldown_Reduction_12 extends C_DOTABaseAbility {}

declare class C_DOTA_SimpleObstruction extends C_BaseEntity {
	m_bEnabled: boolean
	m_bBlockFoW: boolean
	m_nOccluderIndex: number
	m_bBlockingGridNav: boolean
	m_bPrevEnabled: boolean
}

declare class CDOTA_Item_Recipe_Moonshard extends C_DOTA_Item {}

declare class C_DOTA_Ability_Phoenix_LaunchFireSpirit extends C_DOTABaseAbility {
	spirit_speed: number
	duration: number
	radius: number
	hp_cost_perc: number
	m_nFXIndex: number
}

declare class CDOTA_Ability_Elder_Titan_EchoStomp_Spirit extends C_DOTABaseAbility {}

declare class C_DOTA_Unit_Hero_Sniper extends C_DOTA_BaseNPC_Hero {}

declare class C_DOTA_Ability_VengefulSpirit_Command_Aura extends C_DOTABaseAbility {
	readonly m_hScepterIllusion: C_BaseEntity
}

declare class C_DOTA_Ability_Special_Bonus_Unique_Enigma_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Sand_King_4 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Agility_40 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Intelligence_15 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Cleave_30 extends C_DOTABaseAbility {}

declare class C_DOTASceneEntity extends C_SceneEntity {
	m_nCustomStackIndex: number
	m_flVolume: number
}

declare class C_DOTA_Ability_BackdoorProtection extends C_DOTABaseAbility {}

declare class C_FireFromAboveSprite extends C_Sprite {}

declare class CDOTA_Item_RiverPainter6 extends C_DOTA_Item_RiverPainter {}

declare class C_DOTA_Ability_KeeperOfTheLight_Will_O_Wisp extends C_DOTABaseAbility {}

declare class C_DOTA_Beastmaster_Axe extends C_BaseAnimating {}

declare class C_DOTA_Ability_Courier_GoToEnemySecretShop extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_StormSpirit_StaticRemnant extends C_DOTABaseAbility {
	readonly m_vecCastPos: Vector
}

declare class C_DOTA_Ability_Mirana_Starfall extends C_DOTABaseAbility {}

declare class CDOTA_Ability_AncientApparition_IceBlast extends C_DOTABaseAbility {
	readonly m_PathTimer: CountdownTimer
	readonly m_vTarget: Vector
	readonly m_vStartPos: Vector
	readonly m_vLastTempViewer: Vector
	m_iTrackerProjectile: number
	path_radius: number
	radius_min: number
	radius_max: number
	radius_grow: number
	frostbite_duration: number
	frostbite_duration_scepter: number
	target_sight_radius: number
	readonly m_hFrostbittenEntities: C_BaseEntity[]
}

declare class C_DOTA_Ability_Lesser_NightCrawler_Pounce extends C_DOTABaseAbility {}

declare class CDOTA_Ability_Seasonal_Summon_Dragon extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Tidehunter_2 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Reincarnation_250 extends C_DOTABaseAbility {}

declare class C_VRHandModelOverride extends C_BaseVRHandAttachment {}

declare class C_DOTA_Item_GreaterCritical extends C_DOTA_Item {}

declare class C_DOTA_Ability_TrollWarlord_Fervor extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Huskar_Burning_Spear extends C_DOTABaseAbility {}

declare class C_DOTA_Unit_Hero_Axe extends C_DOTA_BaseNPC_Hero {}

declare class C_DOTA_Ability_DarkTrollWarlord_Ensnare extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Furion_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Zeus_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Slark_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Spell_Block_20 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Attack_Speed_40 extends C_DOTABaseAbility {}

declare class C_DOTA_Item_Recipe_Vladmir extends C_DOTA_Item {}

declare class C_DOTA_Item_Dagon_Upgraded3 extends C_DOTA_Item_Dagon_Upgraded {}

declare class C_DOTA_Item_Recipe_Dagon5 extends C_DOTA_Item_Recipe_Dagon {}

declare class C_DOTA_Item_MagicWand extends C_DOTA_Item {}

declare class C_DOTA_Item_PlaneswalkersCloak extends C_DOTA_Item {}

declare class C_DOTA_Ability_Invoker_GhostWalk extends CDOTA_Ability_Invoker_InvokedBase {}

declare class C_DOTA_Ability_Huskar_Berserkers_Blood extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Nian_GreaterBash extends C_DOTABaseAbility {}

declare class CDOTA_Ability_Frostivus2018_Tusk_WalrusKick extends C_DOTABaseAbility {
	m_nFXKickIndex: number
}

declare class C_DOTA_Ability_BlueDragonspawnOverseer_DevotionAura extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Antimage_5 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Unique_Leshrac_3 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Evasion_75 extends C_DOTABaseAbility {}

declare class C_DOTA_Ability_Special_Bonus_Intelligence_12 extends C_DOTABaseAbility {}

declare const enum Hull_t {
	HULL_HUMAN = 0,
	HULL_SMALL_CENTERED = 1,
	HULL_WIDE_HUMAN = 2,
	HULL_TINY = 3,
	HULL_MEDIUM = 4,
	HULL_TINY_CENTERED = 5,
	HULL_LARGE = 6,
	HULL_LARGE_CENTERED = 7,
	HULL_MEDIUM_TALL = 8,
	NUM_HULLS = 9,
	HULL_NONE = 10
}

declare const enum AnimationProcessingType_t {
	ANIMATION_PROCESSING_SERVER_SIMULATION = 0,
	ANIMATION_PROCESSING_CLIENT_SIMULATION = 1,
	ANIMATION_PROCESSING_CLIENT_PREDICTION = 2,
	ANIMATION_PROCESSING_CLIENT_INTERPOLATION = 3,
	ANIMATION_PROCESSING_CLIENT_RENDER = 4,
	ANIMATION_PROCESSING_MAX = 5
}

declare const enum RenderPrimitiveType_t {
	RENDER_PRIM_POINTS = 0,
	RENDER_PRIM_LINES = 1,
	RENDER_PRIM_LINES_WITH_ADJACENCY = 2,
	RENDER_PRIM_LINE_STRIP = 3,
	RENDER_PRIM_LINE_STRIP_WITH_ADJACENCY = 4,
	RENDER_PRIM_TRIANGLES = 5,
	RENDER_PRIM_TRIANGLES_WITH_ADJACENCY = 6,
	RENDER_PRIM_TRIANGLE_STRIP = 7,
	RENDER_PRIM_TRIANGLE_STRIP_WITH_ADJACENCY = 8,
	RENDER_PRIM_INSTANCED_QUADS = 9,
	RENDER_PRIM_HETEROGENOUS = 10,
	RENDER_PRIM_1_CONTROL_POINT_PATCHLIST = 11,
	RENDER_PRIM_2_CONTROL_POINT_PATCHLIST = 12,
	RENDER_PRIM_3_CONTROL_POINT_PATCHLIST = 13,
	RENDER_PRIM_4_CONTROL_POINT_PATCHLIST = 14,
	RENDER_PRIM_5_CONTROL_POINT_PATCHLIST = 15,
	RENDER_PRIM_6_CONTROL_POINT_PATCHLIST = 16,
	RENDER_PRIM_7_CONTROL_POINT_PATCHLIST = 17,
	RENDER_PRIM_8_CONTROL_POINT_PATCHLIST = 18,
	RENDER_PRIM_9_CONTROL_POINT_PATCHLIST = 19,
	RENDER_PRIM_10_CONTROL_POINT_PATCHLIST = 20,
	RENDER_PRIM_11_CONTROL_POINT_PATCHLIST = 21,
	RENDER_PRIM_12_CONTROL_POINT_PATCHLIST = 22,
	RENDER_PRIM_13_CONTROL_POINT_PATCHLIST = 23,
	RENDER_PRIM_14_CONTROL_POINT_PATCHLIST = 24,
	RENDER_PRIM_15_CONTROL_POINT_PATCHLIST = 25,
	RENDER_PRIM_16_CONTROL_POINT_PATCHLIST = 26,
	RENDER_PRIM_17_CONTROL_POINT_PATCHLIST = 27,
	RENDER_PRIM_18_CONTROL_POINT_PATCHLIST = 28,
	RENDER_PRIM_19_CONTROL_POINT_PATCHLIST = 29,
	RENDER_PRIM_20_CONTROL_POINT_PATCHLIST = 30,
	RENDER_PRIM_21_CONTROL_POINT_PATCHLIST = 31,
	RENDER_PRIM_22_CONTROL_POINT_PATCHLIST = 32,
	RENDER_PRIM_23_CONTROL_POINT_PATCHLIST = 33,
	RENDER_PRIM_24_CONTROL_POINT_PATCHLIST = 34,
	RENDER_PRIM_25_CONTROL_POINT_PATCHLIST = 35,
	RENDER_PRIM_26_CONTROL_POINT_PATCHLIST = 36,
	RENDER_PRIM_27_CONTROL_POINT_PATCHLIST = 37,
	RENDER_PRIM_28_CONTROL_POINT_PATCHLIST = 38,
	RENDER_PRIM_29_CONTROL_POINT_PATCHLIST = 39,
	RENDER_PRIM_30_CONTROL_POINT_PATCHLIST = 40,
	RENDER_PRIM_31_CONTROL_POINT_PATCHLIST = 41,
	RENDER_PRIM_32_CONTROL_POINT_PATCHLIST = 42,
	RENDER_PRIM_COMPUTE_SHADER = 43,
	RENDER_PRIM_TYPE_COUNT = 44
}

declare const enum LuaModifierType {
	LUA_MODIFIER_MOTION_NONE = 0,
	LUA_MODIFIER_MOTION_HORIZONTAL = 1,
	LUA_MODIFIER_MOTION_VERTICAL = 2,
	LUA_MODIFIER_MOTION_BOTH = 3,
	LUA_MODIFIER_INVALID = 4
}

declare const enum ObjectTypeFlags_t {
	OBJECT_TYPE_IMAGE_LOD = 1,
	OBJECT_TYPE_GEOMETRY_LOD = 2,
	OBJECT_TYPE_DECAL = 4,
	OBJECT_TYPE_MODEL = 8,
	OBJECT_TYPE_BLOCK_LIGHT = 16,
	OBJECT_TYPE_NO_SHADOWS = 32,
	OBJECT_TYPE_WORLDSPACE_TEXURE_BLEND = 64,
	OBJECT_TYPE_DISABLED_IN_LOW_QUALITY = 128,
	OBJECT_TYPE_NO_SUN_SHADOWS = 256,
	OBJECT_TYPE_EXCLUDE_FROM_IMPOSTORS = 512
}

declare const enum DOTAMusicStatus_t {
	DOTA_MUSIC_STATUS_NONE = 0,
	DOTA_MUSIC_STATUS_EXPLORATION = 1,
	DOTA_MUSIC_STATUS_BATTLE = 2,
	DOTA_MUSIC_STATUS_PRE_GAME_EXPLORATION = 3,
	DOTA_MUSIC_STATUS_DEAD = 4,
	DOTA_MUSIC_STATUS_LAST = 5
}

declare const enum DOTA_RUNES {
	DOTA_RUNE_INVALID = -1,
	DOTA_RUNE_DOUBLEDAMAGE = 0,
	DOTA_RUNE_HASTE = 1,
	DOTA_RUNE_ILLUSION = 2,
	DOTA_RUNE_INVISIBILITY = 3,
	DOTA_RUNE_REGENERATION = 4,
	DOTA_RUNE_BOUNTY = 5,
	DOTA_RUNE_ARCANE = 6,
	DOTA_RUNE_COUNT = 7
}

declare const enum MoveCollide_t {
	MOVECOLLIDE_DEFAULT = 0,
	MOVECOLLIDE_FLY_BOUNCE = 1,
	MOVECOLLIDE_FLY_CUSTOM = 2,
	MOVECOLLIDE_FLY_SLIDE = 3,
	MOVECOLLIDE_COUNT = 4,
	MOVECOLLIDE_MAX_BITS = 3
}

declare const enum Blend2DMode {
	Blend2DMode_General = 0,
	Blend2DMode_Directional = 1
}

declare const enum ItemQuality_t {
	DOTA_ITEM_QUALITY_CONSUMABLE = 0,
	DOTA_ITEM_QUALITY_PLAIN = 1,
	DOTA_ITEM_QUALITY_COMMON = 2,
	DOTA_ITEM_QUALITY_RARE = 3,
	DOTA_ITEM_QUALITY_EPIC = 4,
	DOTA_ITEM_QUALITY_ARTIFACT = 5,
	DOTA_ITEM_QUALITY_SECRET_SHOP = 6,
	NUM_ITEM_QUALITY_LEVELS = 7
}

declare const enum SteamUGCQuery {
	RankedByVote = 0,
	RankedByPublicationDate = 1,
	AcceptedForGameRankedByAcceptanceDate = 2,
	RankedByTrend = 3,
	FavoritedByFriendsRankedByPublicationDate = 4,
	CreatedByFriendsRankedByPublicationDate = 5,
	RankedByNumTimesReported = 6,
	CreatedByFollowedUsersRankedByPublicationDate = 7,
	NotYetRated = 8,
	RankedByTotalVotesAsc = 9,
	RankedByVotesUp = 10,
	RankedByTextSearch = 11,
	RankedByTotalUniqueSubscriptions = 12,
	RankedByPlaytimeTrend = 13,
	RankedByTotalPlaytime = 14,
	RankedByAveragePlaytimeTrend = 15,
	RankedByLifetimeAveragePlaytime = 16,
	RankedByPlaytimeSessionsTrend = 17,
	RankedByLifetimePlaytimeSessions = 18
}

declare const enum PlayerConnectedState {
	PlayerConnected = 0,
	PlayerDisconnecting = 1,
	PlayerDisconnected = 2
}

declare const enum JointMotion_t {
	JOINT_MOTION_FREE = 0,
	JOINT_MOTION_LOCKED = 1,
	JOINT_MOTION_COUNT = 2
}

declare const enum OrderQueueBehavior_t {
	DOTA_ORDER_QUEUE_DEFAULT = 0,
	DOTA_ORDER_QUEUE_NEVER = 1,
	DOTA_ORDER_QUEUE_ALWAYS = 2
}

declare const enum DotaGestureSlot_t {
	GESTURE_SLOT_NONE = -1,
	GESTURE_SLOT_ATTACK = 0,
	GESTURE_SLOT_ABILITY = 1,
	GESTURE_SLOT_OVERRIDE = 2,
	GESTURE_SLOT_CUSTOM = 3,
	GESTURE_SLOT_CUSTOM2 = 4,
	GESTURE_SLOT_CUSTOM3 = 5,
	GESTURE_SLOT_CONSTANT = 6,
	GESTURE_SLOT_TAUNT = 7,
	GESTURE_SLOT_ABSOLUTE = 8,
	GESTURE_SLOT_COUNT = 9,
	GESTURE_SLOT_STOLEN_ABILITY_BIT = 128
}

declare const enum RenderFx_t {
	kRenderFxNone = 0,
	kRenderFxPulseSlow = 1,
	kRenderFxPulseFast = 2,
	kRenderFxPulseSlowWide = 3,
	kRenderFxPulseFastWide = 4,
	kRenderFxFadeSlow = 5,
	kRenderFxFadeFast = 6,
	kRenderFxSolidSlow = 7,
	kRenderFxSolidFast = 8,
	kRenderFxStrobeSlow = 9,
	kRenderFxStrobeFast = 10,
	kRenderFxStrobeFaster = 11,
	kRenderFxFlickerSlow = 12,
	kRenderFxFlickerFast = 13,
	kRenderFxNoDissipation = 14,
	kRenderFxFadeOut = 15,
	kRenderFxFadeIn = 16,
	kRenderFxPulseFastWider = 17,
	kRenderFxGlowShell = 18,
	kRenderFxMax = 19
}

declare const enum GameActivity_t {
	ACT_DOTA_IDLE = 1500,
	ACT_DOTA_IDLE_RARE = 1501,
	ACT_DOTA_RUN = 1502,
	ACT_DOTA_ATTACK = 1503,
	ACT_DOTA_ATTACK2 = 1504,
	ACT_DOTA_ATTACK_EVENT = 1505,
	ACT_DOTA_DIE = 1506,
	ACT_DOTA_FLINCH = 1507,
	ACT_DOTA_FLAIL = 1508,
	ACT_DOTA_DISABLED = 1509,
	ACT_DOTA_CAST_ABILITY_1 = 1510,
	ACT_DOTA_CAST_ABILITY_2 = 1511,
	ACT_DOTA_CAST_ABILITY_3 = 1512,
	ACT_DOTA_CAST_ABILITY_4 = 1513,
	ACT_DOTA_CAST_ABILITY_5 = 1514,
	ACT_DOTA_CAST_ABILITY_6 = 1515,
	ACT_DOTA_OVERRIDE_ABILITY_1 = 1516,
	ACT_DOTA_OVERRIDE_ABILITY_2 = 1517,
	ACT_DOTA_OVERRIDE_ABILITY_3 = 1518,
	ACT_DOTA_OVERRIDE_ABILITY_4 = 1519,
	ACT_DOTA_CHANNEL_ABILITY_1 = 1520,
	ACT_DOTA_CHANNEL_ABILITY_2 = 1521,
	ACT_DOTA_CHANNEL_ABILITY_3 = 1522,
	ACT_DOTA_CHANNEL_ABILITY_4 = 1523,
	ACT_DOTA_CHANNEL_ABILITY_5 = 1524,
	ACT_DOTA_CHANNEL_ABILITY_6 = 1525,
	ACT_DOTA_CHANNEL_END_ABILITY_1 = 1526,
	ACT_DOTA_CHANNEL_END_ABILITY_2 = 1527,
	ACT_DOTA_CHANNEL_END_ABILITY_3 = 1528,
	ACT_DOTA_CHANNEL_END_ABILITY_4 = 1529,
	ACT_DOTA_CHANNEL_END_ABILITY_5 = 1530,
	ACT_DOTA_CHANNEL_END_ABILITY_6 = 1531,
	ACT_DOTA_CONSTANT_LAYER = 1532,
	ACT_DOTA_CAPTURE = 1533,
	ACT_DOTA_SPAWN = 1534,
	ACT_DOTA_KILLTAUNT = 1535,
	ACT_DOTA_TAUNT = 1536,
	ACT_DOTA_THIRST = 1537,
	ACT_DOTA_CAST_DRAGONBREATH = 1538,
	ACT_DOTA_ECHO_SLAM = 1539,
	ACT_DOTA_CAST_ABILITY_1_END = 1540,
	ACT_DOTA_CAST_ABILITY_2_END = 1541,
	ACT_DOTA_CAST_ABILITY_3_END = 1542,
	ACT_DOTA_CAST_ABILITY_4_END = 1543,
	ACT_MIRANA_LEAP_END = 1544,
	ACT_WAVEFORM_START = 1545,
	ACT_WAVEFORM_END = 1546,
	ACT_DOTA_CAST_ABILITY_ROT = 1547,
	ACT_DOTA_DIE_SPECIAL = 1548,
	ACT_DOTA_RATTLETRAP_BATTERYASSAULT = 1549,
	ACT_DOTA_RATTLETRAP_POWERCOGS = 1550,
	ACT_DOTA_RATTLETRAP_HOOKSHOT_START = 1551,
	ACT_DOTA_RATTLETRAP_HOOKSHOT_LOOP = 1552,
	ACT_DOTA_RATTLETRAP_HOOKSHOT_END = 1553,
	ACT_STORM_SPIRIT_OVERLOAD_RUN_OVERRIDE = 1554,
	ACT_DOTA_TINKER_REARM1 = 1555,
	ACT_DOTA_TINKER_REARM2 = 1556,
	ACT_DOTA_TINKER_REARM3 = 1557,
	ACT_TINY_AVALANCHE = 1558,
	ACT_TINY_TOSS = 1559,
	ACT_TINY_GROWL = 1560,
	ACT_DOTA_WEAVERBUG_ATTACH = 1561,
	ACT_DOTA_CAST_WILD_AXES_END = 1562,
	ACT_DOTA_CAST_LIFE_BREAK_START = 1563,
	ACT_DOTA_CAST_LIFE_BREAK_END = 1564,
	ACT_DOTA_NIGHTSTALKER_TRANSITION = 1565,
	ACT_DOTA_LIFESTEALER_RAGE = 1566,
	ACT_DOTA_LIFESTEALER_OPEN_WOUNDS = 1567,
	ACT_DOTA_SAND_KING_BURROW_IN = 1568,
	ACT_DOTA_SAND_KING_BURROW_OUT = 1569,
	ACT_DOTA_EARTHSHAKER_TOTEM_ATTACK = 1570,
	ACT_DOTA_WHEEL_LAYER = 1571,
	ACT_DOTA_ALCHEMIST_CHEMICAL_RAGE_START = 1572,
	ACT_DOTA_ALCHEMIST_CONCOCTION = 1573,
	ACT_DOTA_JAKIRO_LIQUIDFIRE_START = 1574,
	ACT_DOTA_JAKIRO_LIQUIDFIRE_LOOP = 1575,
	ACT_DOTA_LIFESTEALER_INFEST = 1576,
	ACT_DOTA_LIFESTEALER_INFEST_END = 1577,
	ACT_DOTA_LASSO_LOOP = 1578,
	ACT_DOTA_ALCHEMIST_CONCOCTION_THROW = 1579,
	ACT_DOTA_ALCHEMIST_CHEMICAL_RAGE_END = 1580,
	ACT_DOTA_CAST_COLD_SNAP = 1581,
	ACT_DOTA_CAST_GHOST_WALK = 1582,
	ACT_DOTA_CAST_TORNADO = 1583,
	ACT_DOTA_CAST_EMP = 1584,
	ACT_DOTA_CAST_ALACRITY = 1585,
	ACT_DOTA_CAST_CHAOS_METEOR = 1586,
	ACT_DOTA_CAST_SUN_STRIKE = 1587,
	ACT_DOTA_CAST_FORGE_SPIRIT = 1588,
	ACT_DOTA_CAST_ICE_WALL = 1589,
	ACT_DOTA_CAST_DEAFENING_BLAST = 1590,
	ACT_DOTA_VICTORY = 1591,
	ACT_DOTA_DEFEAT = 1592,
	ACT_DOTA_SPIRIT_BREAKER_CHARGE_POSE = 1593,
	ACT_DOTA_SPIRIT_BREAKER_CHARGE_END = 1594,
	ACT_DOTA_TELEPORT = 1595,
	ACT_DOTA_TELEPORT_END = 1596,
	ACT_DOTA_CAST_REFRACTION = 1597,
	ACT_DOTA_CAST_ABILITY_7 = 1598,
	ACT_DOTA_CANCEL_SIREN_SONG = 1599,
	ACT_DOTA_CHANNEL_ABILITY_7 = 1600,
	ACT_DOTA_LOADOUT = 1601,
	ACT_DOTA_FORCESTAFF_END = 1602,
	ACT_DOTA_POOF_END = 1603,
	ACT_DOTA_SLARK_POUNCE = 1604,
	ACT_DOTA_MAGNUS_SKEWER_START = 1605,
	ACT_DOTA_MAGNUS_SKEWER_END = 1606,
	ACT_DOTA_MEDUSA_STONE_GAZE = 1607,
	ACT_DOTA_RELAX_START = 1608,
	ACT_DOTA_RELAX_LOOP = 1609,
	ACT_DOTA_RELAX_END = 1610,
	ACT_DOTA_CENTAUR_STAMPEDE = 1611,
	ACT_DOTA_BELLYACHE_START = 1612,
	ACT_DOTA_BELLYACHE_LOOP = 1613,
	ACT_DOTA_BELLYACHE_END = 1614,
	ACT_DOTA_ROQUELAIRE_LAND = 1615,
	ACT_DOTA_ROQUELAIRE_LAND_IDLE = 1616,
	ACT_DOTA_GREEVIL_CAST = 1617,
	ACT_DOTA_GREEVIL_OVERRIDE_ABILITY = 1618,
	ACT_DOTA_GREEVIL_HOOK_START = 1619,
	ACT_DOTA_GREEVIL_HOOK_END = 1620,
	ACT_DOTA_GREEVIL_BLINK_BONE = 1621,
	ACT_DOTA_IDLE_SLEEPING = 1622,
	ACT_DOTA_INTRO = 1623,
	ACT_DOTA_GESTURE_POINT = 1624,
	ACT_DOTA_GESTURE_ACCENT = 1625,
	ACT_DOTA_SLEEPING_END = 1626,
	ACT_DOTA_AMBUSH = 1627,
	ACT_DOTA_ITEM_LOOK = 1628,
	ACT_DOTA_STARTLE = 1629,
	ACT_DOTA_FRUSTRATION = 1630,
	ACT_DOTA_TELEPORT_REACT = 1631,
	ACT_DOTA_TELEPORT_END_REACT = 1632,
	ACT_DOTA_SHRUG = 1633,
	ACT_DOTA_RELAX_LOOP_END = 1634,
	ACT_DOTA_PRESENT_ITEM = 1635,
	ACT_DOTA_IDLE_IMPATIENT = 1636,
	ACT_DOTA_SHARPEN_WEAPON = 1637,
	ACT_DOTA_SHARPEN_WEAPON_OUT = 1638,
	ACT_DOTA_IDLE_SLEEPING_END = 1639,
	ACT_DOTA_BRIDGE_DESTROY = 1640,
	ACT_DOTA_TAUNT_SNIPER = 1641,
	ACT_DOTA_DEATH_BY_SNIPER = 1642,
	ACT_DOTA_LOOK_AROUND = 1643,
	ACT_DOTA_CAGED_CREEP_RAGE = 1644,
	ACT_DOTA_CAGED_CREEP_RAGE_OUT = 1645,
	ACT_DOTA_CAGED_CREEP_SMASH = 1646,
	ACT_DOTA_CAGED_CREEP_SMASH_OUT = 1647,
	ACT_DOTA_IDLE_IMPATIENT_SWORD_TAP = 1648,
	ACT_DOTA_INTRO_LOOP = 1649,
	ACT_DOTA_BRIDGE_THREAT = 1650,
	ACT_DOTA_DAGON = 1651,
	ACT_DOTA_CAST_ABILITY_2_ES_ROLL_START = 1652,
	ACT_DOTA_CAST_ABILITY_2_ES_ROLL = 1653,
	ACT_DOTA_CAST_ABILITY_2_ES_ROLL_END = 1654,
	ACT_DOTA_NIAN_PIN_START = 1655,
	ACT_DOTA_NIAN_PIN_LOOP = 1656,
	ACT_DOTA_NIAN_PIN_END = 1657,
	ACT_DOTA_LEAP_STUN = 1658,
	ACT_DOTA_LEAP_SWIPE = 1659,
	ACT_DOTA_NIAN_INTRO_LEAP = 1660,
	ACT_DOTA_AREA_DENY = 1661,
	ACT_DOTA_NIAN_PIN_TO_STUN = 1662,
	ACT_DOTA_RAZE_1 = 1663,
	ACT_DOTA_RAZE_2 = 1664,
	ACT_DOTA_RAZE_3 = 1665,
	ACT_DOTA_UNDYING_DECAY = 1666,
	ACT_DOTA_UNDYING_SOUL_RIP = 1667,
	ACT_DOTA_UNDYING_TOMBSTONE = 1668,
	ACT_DOTA_WHIRLING_AXES_RANGED = 1669,
	ACT_DOTA_SHALLOW_GRAVE = 1670,
	ACT_DOTA_COLD_FEET = 1671,
	ACT_DOTA_ICE_VORTEX = 1672,
	ACT_DOTA_CHILLING_TOUCH = 1673,
	ACT_DOTA_ENFEEBLE = 1674,
	ACT_DOTA_FATAL_BONDS = 1675,
	ACT_DOTA_MIDNIGHT_PULSE = 1676,
	ACT_DOTA_ANCESTRAL_SPIRIT = 1677,
	ACT_DOTA_THUNDER_STRIKE = 1678,
	ACT_DOTA_KINETIC_FIELD = 1679,
	ACT_DOTA_STATIC_STORM = 1680,
	ACT_DOTA_MINI_TAUNT = 1681,
	ACT_DOTA_ARCTIC_BURN_END = 1682,
	ACT_DOTA_LOADOUT_RARE = 1683,
	ACT_DOTA_SWIM = 1684,
	ACT_DOTA_FLEE = 1685,
	ACT_DOTA_TROT = 1686,
	ACT_DOTA_SHAKE = 1687,
	ACT_DOTA_SWIM_IDLE = 1688,
	ACT_DOTA_WAIT_IDLE = 1689,
	ACT_DOTA_GREET = 1690,
	ACT_DOTA_TELEPORT_COOP_START = 1691,
	ACT_DOTA_TELEPORT_COOP_WAIT = 1692,
	ACT_DOTA_TELEPORT_COOP_END = 1693,
	ACT_DOTA_TELEPORT_COOP_EXIT = 1694,
	ACT_DOTA_SHOPKEEPER_PET_INTERACT = 1695,
	ACT_DOTA_ITEM_PICKUP = 1696,
	ACT_DOTA_ITEM_DROP = 1697,
	ACT_DOTA_CAPTURE_PET = 1698,
	ACT_DOTA_PET_WARD_OBSERVER = 1699,
	ACT_DOTA_PET_WARD_SENTRY = 1700,
	ACT_DOTA_PET_LEVEL = 1701,
	ACT_DOTA_CAST_BURROW_END = 1702,
	ACT_DOTA_LIFESTEALER_ASSIMILATE = 1703,
	ACT_DOTA_LIFESTEALER_EJECT = 1704,
	ACT_DOTA_ATTACK_EVENT_BASH = 1705,
	ACT_DOTA_CAPTURE_RARE = 1706,
	ACT_DOTA_AW_MAGNETIC_FIELD = 1707,
	ACT_DOTA_CAST_GHOST_SHIP = 1708,
	ACT_DOTA_FXANIM = 1709,
	ACT_DOTA_VICTORY_START = 1710,
	ACT_DOTA_DEFEAT_START = 1711,
	ACT_DOTA_DP_SPIRIT_SIPHON = 1712,
	ACT_DOTA_TRICKS_END = 1713,
	ACT_DOTA_ES_STONE_CALLER = 1714,
	ACT_DOTA_MK_STRIKE = 1715,
	ACT_DOTA_VERSUS = 1716,
	ACT_DOTA_CAPTURE_CARD = 1717,
	ACT_DOTA_MK_SPRING_SOAR = 1718,
	ACT_DOTA_MK_SPRING_END = 1719,
	ACT_DOTA_MK_TREE_SOAR = 1720,
	ACT_DOTA_MK_TREE_END = 1721,
	ACT_DOTA_MK_FUR_ARMY = 1722,
	ACT_DOTA_MK_SPRING_CAST = 1723,
	ACT_DOTA_NECRO_GHOST_SHROUD = 1724,
	ACT_DOTA_OVERRIDE_ARCANA = 1725,
	ACT_DOTA_SLIDE = 1726,
	ACT_DOTA_SLIDE_LOOP = 1727,
	ACT_DOTA_GENERIC_CHANNEL_1 = 1728,
	ACT_DOTA_GS_SOUL_CHAIN = 1729,
	ACT_DOTA_GS_INK_CREATURE = 1730,
	ACT_DOTA_TRANSITION = 1731
}

declare const enum TOGGLE_STATE {
	TS_AT_TOP = 0,
	TS_AT_BOTTOM = 1,
	TS_GOING_UP = 2,
	TS_GOING_DOWN = 3,
	DOOR_OPEN = 0,
	DOOR_CLOSED = 1,
	DOOR_OPENING = 2,
	DOOR_CLOSING = 3
}

declare const enum Attributes {
	DOTA_ATTRIBUTE_STRENGTH = 0,
	DOTA_ATTRIBUTE_AGILITY = 1,
	DOTA_ATTRIBUTE_INTELLECT = 2,
	DOTA_ATTRIBUTE_MAX = 3,
	DOTA_ATTRIBUTE_INVALID = -1
}

declare const enum SpeechPriorityType {
	SPEECH_PRIORITY_LOW = 0,
	SPEECH_PRIORITY_NORMAL = 1,
	SPEECH_PRIORITY_MANUAL = 2,
	SPEECH_PRIORITY_UNINTERRUPTABLE = 3
}

declare const enum PointWorldTextJustifyVertical_t {
	POINT_WORLD_TEXT_JUSTIFY_VERTICAL_BOTTOM = 0,
	POINT_WORLD_TEXT_JUSTIFY_VERTICAL_CENTER = 1,
	POINT_WORLD_TEXT_JUSTIFY_VERTICAL_TOP = 2
}

declare const enum PortraitScale_t {
	PORTRAIT_SCALE_INVALID = -1,
	PORTRAIT_SCALE_LOADOUT = 0,
	PORTRAIT_SCALE_ALTERNATE_LOADOUT = 1,
	PORTRAIT_SCALE_WORLD = 2,
	PORTRAIT_SCALE_SPECTATOR_LOADOUT = 3
}

declare const enum DOTA_UNIT_TARGET_TEAM {
	DOTA_UNIT_TARGET_TEAM_NONE = 0,
	DOTA_UNIT_TARGET_TEAM_FRIENDLY = 1,
	DOTA_UNIT_TARGET_TEAM_ENEMY = 2,
	DOTA_UNIT_TARGET_TEAM_CUSTOM = 4,
	DOTA_UNIT_TARGET_TEAM_BOTH = 3
}

declare const enum PointTemplateOwnerSpawnGroupType_t {
	INSERT_INTO_POINT_TEMPLATE_SPAWN_GROUP = 0,
	INSERT_INTO_CURRENTLY_ACTIVE_SPAWN_GROUP = 1,
	INSERT_INTO_NEWLY_CREATED_SPAWN_GROUP = 2
}

declare const enum ObstructionRelationshipClass_t {
	DOTA_OBSTRUCTION_RELATIONSHIP_NONE = 0,
	DOTA_OBSTRUCTION_RELATIONSHIP_BUILDING = 1,
	DOTA_OBSTRUCTION_RELATIONSHIP_PLAYER_CONTROLLED = 2,
	DOTA_OBSTRUCTION_RELATIONSHIP_NPC = 3,
	DOTA_OBSTRUCTION_RELATIONSHIP_LAST = 4
}

declare const enum NavDirType {
	NORTH = 0,
	EAST = 1,
	SOUTH = 2,
	WEST = 3,
	NUM_DIRECTIONS = 4
}

declare const enum ViewFadeMode_t {
	VIEW_FADE_CONSTANT_COLOR = 0,
	VIEW_FADE_MODULATE = 1,
	VIEW_FADE_MOD2X = 2
}

declare const enum CLICK_BEHAVIORS {
	DOTA_CLICK_BEHAVIOR_NONE = 0,
	DOTA_CLICK_BEHAVIOR_MOVE = 1,
	DOTA_CLICK_BEHAVIOR_ATTACK = 2,
	DOTA_CLICK_BEHAVIOR_CAST = 3,
	DOTA_CLICK_BEHAVIOR_DROP_ITEM = 4,
	DOTA_CLICK_BEHAVIOR_DROP_SHOP_ITEM = 5,
	DOTA_CLICK_BEHAVIOR_DRAG = 6,
	DOTA_CLICK_BEHAVIOR_LEARN_ABILITY = 7,
	DOTA_CLICK_BEHAVIOR_PATROL = 8,
	DOTA_CLICK_BEHAVIOR_VECTOR_CAST = 9,
	DOTA_CLICK_BEHAVIOR_UNUSED = 10,
	DOTA_CLICK_BEHAVIOR_RADAR = 11,
	DOTA_CLICK_BEHAVIOR_LAST = 12
}

declare const enum sound_states {
	SS_NONE = 0,
	SS_SHUTDOWN = 1,
	SS_SHUTDOWN_WATER = 2,
	SS_START_WATER = 3,
	SS_START_IDLE = 4,
	SS_IDLE = 5,
	SS_GEAR_0 = 6,
	SS_GEAR_1 = 7,
	SS_GEAR_2 = 8,
	SS_GEAR_3 = 9,
	SS_GEAR_4 = 10,
	SS_SLOWDOWN = 11,
	SS_SLOWDOWN_HIGHSPEED = 12,
	SS_GEAR_0_RESUME = 13,
	SS_GEAR_1_RESUME = 14,
	SS_GEAR_2_RESUME = 15,
	SS_GEAR_3_RESUME = 16,
	SS_GEAR_4_RESUME = 17,
	SS_TURBO = 18,
	SS_REVERSE = 19,
	SS_NUM_STATES = 20
}

declare const enum SurroundingBoundsType_t {
	USE_OBB_COLLISION_BOUNDS = 0,
	USE_BEST_COLLISION_BOUNDS = 1,
	USE_HITBOXES = 2,
	USE_SPECIFIED_BOUNDS = 3,
	USE_GAME_CODE = 4,
	USE_ROTATION_EXPANDED_BOUNDS = 5,
	USE_COLLISION_BOUNDS_NEVER_VPHYSICS = 6,
	USE_ROTATION_EXPANDED_SEQUENCE_BOUNDS = 7,
	SURROUNDING_TYPE_BIT_COUNT = 3
}

declare const enum RenderMultisampleType_t {
	RENDER_MULTISAMPLE_INVALID = -1,
	RENDER_MULTISAMPLE_NONE = 0,
	RENDER_MULTISAMPLE_2X = 1,
	RENDER_MULTISAMPLE_4X = 2,
	RENDER_MULTISAMPLE_6X = 3,
	RENDER_MULTISAMPLE_8X = 4,
	RENDER_MULTISAMPLE_16X = 5,
	RENDER_MULTISAMPLE_TYPE_COUNT = 6
}

declare const enum ParticleLightTypeChoiceList_t {
	PARTICLE_LIGHT_TYPE_POINT = 0,
	PARTICLE_LIGHT_TYPE_SPOT = 1,
	PARTICLE_LIGHT_TYPE_FX = 2
}

declare const enum WorldTextPanelOrientation_t {
	WORLDTEXT_ORIENTATION_DEFAULT = 0,
	WORLDTEXT_ORIENTATION_FACEUSER = 1,
	WORLDTEXT_ORIENTATION_FACEUSER_UPRIGHT = 2
}

declare const enum DotaCustomUIType_t {
	DOTA_CUSTOM_UI_TYPE_HUD = 0,
	DOTA_CUSTOM_UI_TYPE_HERO_SELECTION = 1,
	DOTA_CUSTOM_UI_TYPE_GAME_INFO = 2,
	DOTA_CUSTOM_UI_TYPE_GAME_SETUP = 3,
	DOTA_CUSTOM_UI_TYPE_FLYOUT_SCOREBOARD = 4,
	DOTA_CUSTOM_UI_TYPE_HUD_TOP_BAR = 5,
	DOTA_CUSTOM_UI_TYPE_END_SCREEN = 6,
	DOTA_CUSTOM_UI_TYPE_COUNT = 7,
	DOTA_CUSTOM_UI_TYPE_INVALID = -1
}

declare const enum TextureSpecificationFlags_t {
	TSPEC_FLAGS = 0,
	TSPEC_RENDER_TARGET = 1,
	TSPEC_VERTEX_TEXTURE = 2,
	TSPEC_UNFILTERABLE_OK = 4,
	TSPEC_RENDER_TARGET_SAMPLEABLE = 8,
	TSPEC_SUGGEST_CLAMPS = 16,
	TSPEC_SUGGEST_CLAMPT = 32,
	TSPEC_SUGGEST_CLAMPU = 64,
	TSPEC_NO_LOD = 128,
	TSPEC_CUBE_TEXTURE = 256,
	TSPEC_VOLUME_TEXTURE = 512,
	TSPEC_TEXTURE_ARRAY = 1024,
	TSPEC_TEXTURE_GEN_MIP_MAPS = 2048,
	TSPEC_LINE_TEXTURE_360 = 4096,
	TSPEC_LINEAR_ADDRESSING_360 = 8192,
	TSPEC_USE_TYPED_IMAGEFORMAT = 16384,
	TSPEC_SHARED_RESOURCE = 32768,
	TSPEC_UAV = 65536,
	TSPEC_INPUT_ATTACHMENT = 131072,
	TSPEC_CUBE_CAN_SAMPLE_AS_ARRAY = 262144
}

declare const enum EShareAbility {
	ITEM_FULLY_SHAREABLE = 0,
	ITEM_PARTIALLY_SHAREABLE = 1,
	ITEM_NOT_SHAREABLE = 2
}

declare const enum ShatterSurface_t {
	SHATTERSURFACE_GLASS = 0,
	SHATTERSURFACE_TILE = 1
}

declare const enum vote_create_failed_t {
	VOTE_FAILED_GENERIC = 0,
	VOTE_FAILED_TRANSITIONING_PLAYERS = 1,
	VOTE_FAILED_RATE_EXCEEDED = 2,
	VOTE_FAILED_YES_MUST_EXCEED_NO = 3,
	VOTE_FAILED_QUORUM_FAILURE = 4,
	VOTE_FAILED_ISSUE_DISABLED = 5,
	VOTE_FAILED_MAP_NOT_FOUND = 6,
	VOTE_FAILED_MAP_NAME_REQUIRED = 7,
	VOTE_FAILED_FAILED_RECENTLY = 8,
	VOTE_FAILED_TEAM_CANT_CALL = 9,
	VOTE_FAILED_WAITINGFORPLAYERS = 10,
	VOTE_FAILED_PLAYERNOTFOUND = 11,
	VOTE_FAILED_CANNOT_KICK_ADMIN = 12,
	VOTE_FAILED_SCRAMBLE_IN_PROGRESS = 13,
	VOTE_FAILED_SPECTATOR = 14
}

declare const enum PetLevelup_Rule_t {
	PETLEVELFROM_NOTHING = 0,
	PETLEVELFROM_KILLEATER = 1,
	PETLEVELFROM_COMPENDIUM_LEVEL = 2,
	NUM_PETLEVELUPRULES = 3
}

declare const enum EDOTA_ModifyGold_Reason {
	DOTA_ModifyGold_Unspecified = 0,
	DOTA_ModifyGold_Death = 1,
	DOTA_ModifyGold_Buyback = 2,
	DOTA_ModifyGold_PurchaseConsumable = 3,
	DOTA_ModifyGold_PurchaseItem = 4,
	DOTA_ModifyGold_AbandonedRedistribute = 5,
	DOTA_ModifyGold_SellItem = 6,
	DOTA_ModifyGold_AbilityCost = 7,
	DOTA_ModifyGold_CheatCommand = 8,
	DOTA_ModifyGold_SelectionPenalty = 9,
	DOTA_ModifyGold_GameTick = 10,
	DOTA_ModifyGold_Building = 11,
	DOTA_ModifyGold_HeroKill = 12,
	DOTA_ModifyGold_CreepKill = 13,
	DOTA_ModifyGold_RoshanKill = 14,
	DOTA_ModifyGold_CourierKill = 15,
	DOTA_ModifyGold_SharedGold = 16
}

declare const enum DOTASlotType_t {
	DOTA_LOADOUT_TYPE_INVALID = -1,
	DOTA_LOADOUT_TYPE_WEAPON = 0,
	DOTA_LOADOUT_TYPE_OFFHAND_WEAPON = 1,
	DOTA_LOADOUT_TYPE_WEAPON2 = 2,
	DOTA_LOADOUT_TYPE_OFFHAND_WEAPON2 = 3,
	DOTA_LOADOUT_TYPE_HEAD = 4,
	DOTA_LOADOUT_TYPE_SHOULDER = 5,
	DOTA_LOADOUT_TYPE_ARMS = 6,
	DOTA_LOADOUT_TYPE_ARMOR = 7,
	DOTA_LOADOUT_TYPE_BELT = 8,
	DOTA_LOADOUT_TYPE_NECK = 9,
	DOTA_LOADOUT_TYPE_BACK = 10,
	DOTA_LOADOUT_TYPE_LEGS = 11,
	DOTA_LOADOUT_TYPE_GLOVES = 12,
	DOTA_LOADOUT_TYPE_TAIL = 13,
	DOTA_LOADOUT_TYPE_MISC = 14,
	DOTA_LOADOUT_TYPE_BODY_HEAD = 15,
	DOTA_LOADOUT_TYPE_MOUNT = 16,
	DOTA_LOADOUT_TYPE_SUMMON = 17,
	DOTA_LOADOUT_TYPE_SHAPESHIFT = 18,
	DOTA_LOADOUT_TYPE_TAUNT = 19,
	DOTA_LOADOUT_TYPE_AMBIENT_EFFECTS = 20,
	DOTA_LOADOUT_TYPE_ABILITY_ATTACK = 21,
	DOTA_LOADOUT_TYPE_ABILITY1 = 22,
	DOTA_LOADOUT_TYPE_ABILITY2 = 23,
	DOTA_LOADOUT_TYPE_ABILITY3 = 24,
	DOTA_LOADOUT_TYPE_ABILITY4 = 25,
	DOTA_LOADOUT_TYPE_ABILITY_ULTIMATE = 26,
	DOTA_LOADOUT_TYPE_VOICE = 27,
	DOTA_LOADOUT_TYPE_COURIER = 28,
	DOTA_LOADOUT_TYPE_ANNOUNCER = 29,
	DOTA_LOADOUT_TYPE_MEGA_KILLS = 30,
	DOTA_LOADOUT_TYPE_MUSIC = 31,
	DOTA_LOADOUT_TYPE_WARD = 32,
	DOTA_LOADOUT_TYPE_HUD_SKIN = 33,
	DOTA_LOADOUT_TYPE_LOADING_SCREEN = 34,
	DOTA_LOADOUT_TYPE_WEATHER = 35,
	DOTA_LOADOUT_TYPE_HEROIC_STATUE = 36,
	DOTA_LOADOUT_TYPE_MULTIKILL_BANNER = 37,
	DOTA_LOADOUT_TYPE_CURSOR_PACK = 38,
	DOTA_LOADOUT_TYPE_TELEPORT_EFFECT = 39,
	DOTA_LOADOUT_TYPE_BLINK_EFFECT = 40,
	DOTA_LOADOUT_TYPE_EMBLEM = 41,
	DOTA_LOADOUT_TYPE_TERRAIN = 42,
	DOTA_LOADOUT_TYPE_RADIANT_CREEPS = 43,
	DOTA_LOADOUT_TYPE_DIRE_CREEPS = 44,
	DOTA_PLAYER_LOADOUT_START = 28,
	DOTA_PLAYER_LOADOUT_END = 44,
	DOTA_LOADOUT_TYPE_NONE = 45,
	DOTA_LOADOUT_TYPE_COUNT = 46
}

declare const enum GroundIKTiltSource_t {
	TILT_None = 0,
	TILT_IK = 1,
	TILT_MovementManagerSlope = 2
}

declare const enum PlayerUltimateStateOrTime_t {
	PLAYER_ULTIMATE_STATE_READY = 0,
	PLAYER_ULTIMATE_STATE_NO_MANA = -1,
	PLAYER_ULTIMATE_STATE_NOT_LEVELED = -2,
	PLAYER_ULTIMATE_STATE_HIDDEN = -3
}

declare const enum DOTA_HOLDOUT_WALL_TYPE {
	DOTA_HOLDOUT_WALL_NONE = 0,
	DOTA_HOLDOUT_WALL_PHYSICAL = 1,
	DOTA_HOLDOUT_WALL_FIRE = 2,
	DOTA_HOLDOUT_WALL_ICE = 3,
	DOTA_HOLDOUT_WALL_COUNT = 4
}

declare const enum ConstraintType_t {
	CONSTRAINT_TYPE_INVALID = 0,
	CONSTRAINT_TYPE_HELPER_BONE = 1,
	CONSTRAINT_TYPE_TWIST = 2,
	CONSTRAINT_TYPE_AIM = 3,
	CONSTRAINT_TYPE_POINT = 4,
	CONSTRAINT_TYPE_ROTATION = 5,
	CONSTRAINT_TYPE_ORIENT = 6,
	CONSTRAINT_TYPE_2_BONE_IK = 7,
	CONSTRAINT_TYPE_JIGGLE_BONE = 8,
	CONSTRAINT_TYPE_TILT_TWIST = 9,
	CONSTRAINT_TYPE_MORPH = 10,
	CONSTRAINT_TYPE_PARENT = 11,
	CONSTRAINT_TYPE_POSE_SPACE_MORPH = 12,
	CONSTRAINT_TYPE_POSE_SPACE_BONE = 13,
	CONSTRAINT_TYPE_MAX = 14
}

declare const enum Materials {
	matGlass = 0,
	matWood = 1,
	matMetal = 2,
	matFlesh = 3,
	matCinderBlock = 4,
	matCeilingTile = 5,
	matComputer = 6,
	matUnbreakableGlass = 7,
	matRocks = 8,
	matWeb = 9,
	matNone = 10,
	matLastMaterial = 11
}

declare const enum LayoutPositionType_e {
	LAYOUTPOSITIONTYPE_VIEWPORT_RELATIVE = 0,
	LAYOUTPOSITIONTYPE_FRACTIONAL = 1,
	LAYOUTPOSITIONTYPE_NONE = 2
}

declare const enum HeroPickType {
	HERO_PICK = 0,
	HERO_BAN = 1
}

declare const enum JointAxis_t {
	JOINT_AXIS_X = 0,
	JOINT_AXIS_Y = 1,
	JOINT_AXIS_Z = 2,
	JOINT_AXIS_COUNT = 3
}

declare const enum AimMatrixBlendMode {
	AimMatrixBlendMode_Additive = 0,
	AimMatrixBlendMode_BoneMask = 1
}

declare const enum modifierstate {
	MODIFIER_STATE_ROOTED = 0,
	MODIFIER_STATE_DISARMED = 1,
	MODIFIER_STATE_ATTACK_IMMUNE = 2,
	MODIFIER_STATE_SILENCED = 3,
	MODIFIER_STATE_MUTED = 4,
	MODIFIER_STATE_STUNNED = 5,
	MODIFIER_STATE_HEXED = 6,
	MODIFIER_STATE_INVISIBLE = 7,
	MODIFIER_STATE_INVULNERABLE = 8,
	MODIFIER_STATE_MAGIC_IMMUNE = 9,
	MODIFIER_STATE_PROVIDES_VISION = 10,
	MODIFIER_STATE_NIGHTMARED = 11,
	MODIFIER_STATE_BLOCK_DISABLED = 12,
	MODIFIER_STATE_EVADE_DISABLED = 13,
	MODIFIER_STATE_UNSELECTABLE = 14,
	MODIFIER_STATE_CANNOT_TARGET_ENEMIES = 15,
	MODIFIER_STATE_CANNOT_MISS = 16,
	MODIFIER_STATE_SPECIALLY_DENIABLE = 17,
	MODIFIER_STATE_FROZEN = 18,
	MODIFIER_STATE_COMMAND_RESTRICTED = 19,
	MODIFIER_STATE_NOT_ON_MINIMAP = 20,
	MODIFIER_STATE_LOW_ATTACK_PRIORITY = 21,
	MODIFIER_STATE_NO_HEALTH_BAR = 22,
	MODIFIER_STATE_FLYING = 23,
	MODIFIER_STATE_NO_UNIT_COLLISION = 24,
	MODIFIER_STATE_NO_TEAM_MOVE_TO = 25,
	MODIFIER_STATE_NO_TEAM_SELECT = 26,
	MODIFIER_STATE_PASSIVES_DISABLED = 27,
	MODIFIER_STATE_DOMINATED = 28,
	MODIFIER_STATE_BLIND = 29,
	MODIFIER_STATE_OUT_OF_GAME = 30,
	MODIFIER_STATE_FAKE_ALLY = 31,
	MODIFIER_STATE_FLYING_FOR_PATHING_PURPOSES_ONLY = 32,
	MODIFIER_STATE_TRUESIGHT_IMMUNE = 33,
	MODIFIER_STATE_UNTARGETABLE = 34,
	MODIFIER_STATE_IGNORING_MOVE_AND_ATTACK_ORDERS = 35,
	MODIFIER_STATE_ALLOW_PATHING_TROUGH_TREES = 36,
	MODIFIER_STATE_NOT_ON_MINIMAP_FOR_ENEMIES = 37,
	MODIFIER_STATE_UNSLOWABLE = 38,
	MODIFIER_STATE_TETHERED = 39,
	MODIFIER_STATE_LAST = 40
}

declare const enum BlurFilterType_t {
	BLURFILTER_GAUSSIAN = 0,
	BLURFILTER_BOX = 1
}

declare const enum AnimVRHand_t {
	AnimVRHand_Left = 0,
	AnimVRHand_Right = 1
}

declare const enum MeshDrawPrimitiveFlags_t {
	MESH_DRAW_FLAGS_NONE = 0,
	MESH_DRAW_FLAGS_USE_SHADOW_FAST_PATH = 1,
	MESH_DRAW_FLAGS_USE_COMPRESSED_NORMAL_TANGENT = 2,
	MESH_DRAW_FLAGS_IS_OCCLUDER = 4,
	MESH_DRAW_INPUT_LAYOUT_IS_NOT_MATCHED_TO_MATERIAL = 8,
	MESH_DRAW_FLAGS_USE_COMPRESSED_PER_VERTEX_LIGHTING = 16,
	MESH_DRAW_FLAGS_USE_UNCOMPRESSED_PER_VERTEX_LIGHTING = 32,
	MESH_DRAW_FLAGS_CAN_BATCH_WITH_DYNAMIC_SHADER_CONSTANTS = 64,
	MESH_DRAW_FLAGS_DRAW_LAST = 128,
	MESH_DRAW_FLAGS_HAS_LIGHTING_BASIS = 256
}

declare const enum ParticleFloatType_t {
	PF_TYPE_INVALID = -1,
	PF_TYPE_LITERAL = 0,
	PF_TYPE_RANDOM_UNIFORM = 1,
	PF_TYPE_RANDOM_BIASED = 2,
	PF_TYPE_COLLECTION_AGE = 3,
	PF_TYPE_CONTROL_POINT_COMPONENT = 4,
	PF_TYPE_PARTICLE_AGE = 5,
	PF_TYPE_PARTICLE_AGE_NORMALIZED = 6,
	PF_TYPE_PARTICLE_FLOAT = 7,
	PF_TYPE_PARTICLE_VECTOR_COMPONENT = 8,
	PF_TYPE_PARTICLE_SPEED = 9,
	PF_TYPE_COUNT = 10
}

declare const enum EconEntityParticleDisableMode_t {
	ECON_ENTITY_PARTICLES_ENABLED = 0,
	ECON_ENTITY_PARTICLES_DISABLED = 1,
	ECON_ENTITY_PARTICLES_DISABLED_BUT_PLAY_ENDCAPS_TO_STOP = 2
}

declare const enum ShopItemViewMode_t {
	SHOP_VIEW_MODE_LIST = 0,
	SHOP_VIEW_MODE_GRID = 1
}

declare const enum IrradVolumeFlags_t {
	IRRADVOLUME_FLAGS_NONE = 0,
	IRRADVOLUME_FLAG_AUTO_GENERATED = 1
}

declare const enum ParticleFloatMapType_t {
	PF_MAP_TYPE_INVALID = -1,
	PF_MAP_TYPE_DIRECT = 0,
	PF_MAP_TYPE_MULT = 1,
	PF_MAP_TYPE_REMAP = 2,
	PF_MAP_TYPE_REMAP_BIASED = 3,
	PF_MAP_TYPE_CURVE = 4,
	PF_MAP_TYPE_COUNT = 5
}

declare const enum BeamType_t {
	BEAM_INVALID = 0,
	BEAM_POINTS = 1,
	BEAM_ENTPOINT = 2,
	BEAM_ENTS = 3,
	BEAM_HOSE = 4,
	BEAM_SPLINE = 5,
	BEAM_LASER = 6
}

declare const enum subquest_player_stat_types_t {
	SUBQUEST_PLAYER_STAT_GOLD = 0,
	SUBQUEST_PLAYER_STAT_LEVEL = 1,
	SUBQUEST_PLAYER_STAT_LAST_HITS = 2,
	SUBQUEST_PLAYER_STAT_DENIES = 3,
	SUBQUEST_NUM_PLAYER_STATS = 4
}

declare const enum SequenceCombineMode_t {
	SEQUENCE_COMBINE_MODE_USE_SEQUENCE_0 = 0,
	SEQUENCE_COMBINE_MODE_USE_SEQUENCE_1 = 1,
	SEQUENCE_COMBINE_MODE_AVERAGE = 2,
	SEQUENCE_COMBINE_MODE_ADDITIVE = 3,
	SEQUENCE_COMBINE_MODE_ALPHA_FROM0_RGB_FROM_1 = 4,
	SEQUENCE_COMBINE_MODE_ALPHA_FROM1_RGB_FROM_0 = 5,
	SEQUENCE_COMBINE_MODE_WEIGHTED_BLEND = 6,
	SEQUENCE_COMBINE_MODE_ALPHA_BLEND_1_OVER_0 = 7,
	SEQUENCE_COMBINE_MODE_REPLICATEALPHA0 = 8,
	SEQUENCE_COMBINE_MODE_REPLICATEALPHA1 = 9,
	SEQUENCE_COMBINE_MODE_ALPHA_BLEND_0_OVER_1 = 10,
	SEQUENCE_COMBINE_MODE_REPLICATE_COLOR_0 = 11,
	SEQUENCE_COMBINE_MODE_REPLICATE_COLOR_1 = 12
}

declare const enum LightType_t {
	MATERIAL_LIGHT_DISABLE = 0,
	MATERIAL_LIGHT_POINT = 1,
	MATERIAL_LIGHT_DIRECTIONAL = 2,
	MATERIAL_LIGHT_SPOT = 3,
	MATERIAL_LIGHT_ORTHO = 4,
	MATERIAL_LIGHT_ENVIRONMENT_PROBE = 5
}

declare const enum ValueRemapperOutputType_t {
	OutputType_AnimationCycle = 0,
	OutputType_RotationX = 1,
	OutputType_RotationY = 2,
	OutputType_RotationZ = 3
}

declare const enum WorldTextAttachmentType_t {
	ATTACHED_NONE = 0,
	ATTACHED_PRIMARY_HAND = 1,
	ATTACHED_OFF_HAND = 2,
	ATTACHED_ENTITY = 3,
	ATTACHED_HMD = 4,
	ATTACHED_ENTITY_LARGE = 5,
	ATTACHED_HAND_SPECIFIED_IN_EVENT = 6
}

declare const enum DOTA_ABILITY_BEHAVIOR {
	DOTA_ABILITY_BEHAVIOR_NONE = 0,
	DOTA_ABILITY_BEHAVIOR_HIDDEN = 1,
	DOTA_ABILITY_BEHAVIOR_PASSIVE = 2,
	DOTA_ABILITY_BEHAVIOR_NO_TARGET = 4,
	DOTA_ABILITY_BEHAVIOR_UNIT_TARGET = 8,
	DOTA_ABILITY_BEHAVIOR_POINT = 16,
	DOTA_ABILITY_BEHAVIOR_AOE = 32,
	DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE = 64,
	DOTA_ABILITY_BEHAVIOR_CHANNELLED = 128,
	DOTA_ABILITY_BEHAVIOR_ITEM = 256,
	DOTA_ABILITY_BEHAVIOR_TOGGLE = 512,
	DOTA_ABILITY_BEHAVIOR_DIRECTIONAL = 1024,
	DOTA_ABILITY_BEHAVIOR_IMMEDIATE = 2048,
	DOTA_ABILITY_BEHAVIOR_AUTOCAST = 4096,
	DOTA_ABILITY_BEHAVIOR_OPTIONAL_UNIT_TARGET = 8192,
	DOTA_ABILITY_BEHAVIOR_OPTIONAL_POINT = 16384,
	DOTA_ABILITY_BEHAVIOR_OPTIONAL_NO_TARGET = 32768,
	DOTA_ABILITY_BEHAVIOR_AURA = 65536,
	DOTA_ABILITY_BEHAVIOR_ATTACK = 131072,
	DOTA_ABILITY_BEHAVIOR_DONT_RESUME_MOVEMENT = 262144,
	DOTA_ABILITY_BEHAVIOR_ROOT_DISABLES = 524288,
	DOTA_ABILITY_BEHAVIOR_UNRESTRICTED = 1048576,
	DOTA_ABILITY_BEHAVIOR_IGNORE_PSEUDO_QUEUE = 2097152,
	DOTA_ABILITY_BEHAVIOR_IGNORE_CHANNEL = 4194304,
	DOTA_ABILITY_BEHAVIOR_DONT_CANCEL_MOVEMENT = 8388608,
	DOTA_ABILITY_BEHAVIOR_DONT_ALERT_TARGET = 16777216,
	DOTA_ABILITY_BEHAVIOR_DONT_RESUME_ATTACK = 33554432,
	DOTA_ABILITY_BEHAVIOR_NORMAL_WHEN_STOLEN = 67108864,
	DOTA_ABILITY_BEHAVIOR_IGNORE_BACKSWING = 134217728,
	DOTA_ABILITY_BEHAVIOR_RUNE_TARGET = 268435456,
	DOTA_ABILITY_BEHAVIOR_DONT_CANCEL_CHANNEL = 536870912,
	DOTA_ABILITY_BEHAVIOR_VECTOR_TARGETING = 1073741824,
	DOTA_ABILITY_BEHAVIOR_LAST_RESORT_POINT = 2147483648,
	DOTA_ABILITY_BEHAVIOR_CAN_SELF_CAST = 4294967296,
	DOTA_ABILITY_BEHAVIOR_SHOW_IN_GUIDES = 8589934592
}

declare const enum DAMAGE_TYPES {
	DAMAGE_TYPE_NONE = 0,
	DAMAGE_TYPE_PHYSICAL = 1,
	DAMAGE_TYPE_MAGICAL = 2,
	DAMAGE_TYPE_PURE = 4,
	DAMAGE_TYPE_HP_REMOVAL = 8,
	DAMAGE_TYPE_ALL = 7
}

declare const enum SosGroupType_t {
	SOS_GROUPTYPE_DYNAMIC = 0,
	SOS_GROUPTYPE_STATIC = 1
}

declare const enum AnimParamButton_t {
	ANIMPARAM_BUTTON_NONE = 0,
	ANIMPARAM_BUTTON_DPAD_UP = 1,
	ANIMPARAM_BUTTON_DPAD_RIGHT = 2,
	ANIMPARAM_BUTTON_DPAD_DOWN = 3,
	ANIMPARAM_BUTTON_DPAD_LEFT = 4,
	ANIMPARAM_BUTTON_A = 5,
	ANIMPARAM_BUTTON_B = 6,
	ANIMPARAM_BUTTON_X = 7,
	ANIMPARAM_BUTTON_Y = 8,
	ANIMPARAM_BUTTON_LEFT_SHOULDER = 9,
	ANIMPARAM_BUTTON_RIGHT_SHOULDER = 10,
	ANIMPARAM_BUTTON_LTRIGGER = 11,
	ANIMPARAM_BUTTON_RTRIGGER = 12
}

declare const enum BloomBlendMode_t {
	BLOOM_BLEND_ADD = 0,
	BLOOM_BLEND_SCREEN = 1,
	BLOOM_BLEND_BLUR = 2
}

declare const enum PrecipitationType_t {
	PRECIPITATION_TYPE_RAIN = 0,
	PRECIPITATION_TYPE_SNOW = 1,
	PRECIPITATION_TYPE_ASH = 2,
	PRECIPITATION_TYPE_SNOWFALL = 3,
	PRECIPITATION_TYPE_PARTICLERAIN = 4,
	PRECIPITATION_TYPE_PARTICLEASH = 5,
	PRECIPITATION_TYPE_PARTICLERAINSTORM = 6,
	PRECIPITATION_TYPE_PARTICLEBUGS = 7,
	PRECIPITATION_TYPE_PARTICLESMOKE = 8,
	PRECIPITATION_TYPE_PARTICLESNOW = 9,
	PRECIPITATION_TYPE_PARTICLEXENSPORES = 10,
	PRECIPITATION_TYPE_DUSTMOTES = 11,
	NUM_PRECIPITATION_TYPES = 12
}

declare const enum DOTAModifierAttribute_t {
	MODIFIER_ATTRIBUTE_NONE = 0,
	MODIFIER_ATTRIBUTE_PERMANENT = 1,
	MODIFIER_ATTRIBUTE_MULTIPLE = 2,
	MODIFIER_ATTRIBUTE_IGNORE_INVULNERABLE = 4,
	MODIFIER_ATTRIBUTE_AURA_PRIORITY = 8
}

declare const enum SelectorTagBehaior_t {
	SelectorTagBehavior_OnWhileCurrent = 0,
	SelectorTagBehavior_OffWhenFinished = 1,
	SelectorTagBehavior_OffBeforeFinished = 2
}

declare const enum PerformanceMode_t {
	PM_NORMAL = 0,
	PM_NO_GIBS = 1,
	PM_FULL_GIBS = 2,
	PM_REDUCED_GIBS = 3
}

declare const enum ChoiceMethod {
	WeightedRandom = 0,
	WeightedRandomNoRepeat = 1,
	Iterate = 2,
	IterateRandom = 3
}

declare const enum PathStatusOptions {
	PathStatus_HasPath = 0,
	PathStatus_WaypointIsGoal = 1,
	PathStatus_GoalHasChanged = 2
}

declare const enum BrushSolidities_e {
	BRUSHSOLID_TOGGLE = 0,
	BRUSHSOLID_NEVER = 1,
	BRUSHSOLID_ALWAYS = 2
}

declare const enum Detail2Combo_t {
	DETAIL_2_COMBO_UNINITIALIZED = -1,
	DETAIL_2_COMBO_OFF = 0,
	DETAIL_2_COMBO_ADD = 1,
	DETAIL_2_COMBO_ADD_SELF_ILLUM = 2,
	DETAIL_2_COMBO_MOD2X = 3,
	DETAIL_2_COMBO_MUL = 4,
	DETAIL_2_COMBO_CROSSFADE = 5
}

declare const enum AttachmentInfluenceFlags_t {
	ATTACHMENT_INFLUENCE_FLAGS_NONE = 0,
	ATTACHMENT_INFLUENCE_FLAGS_ROOT_TRANSFORM = 1
}

declare const enum ScreenEffectType_t {
	SCREENEFFECT_EP2_ADVISOR_STUN = 0,
	SCREENEFFECT_EP1_INTRO = 1,
	SCREENEFFECT_EP2_GROGGY = 2
}

declare const enum IGE_AssassinationState {
	ASSASSINMINIGAMESTATE_NotActive = 0,
	ASSASSINMINIGAMESTATE_AwaitingInitialization = 1,
	ASSASSINMINIGAMESTATE_InProgress = 2,
	ASSASSINMINIGAMESTATE_ContractFilled = 3,
	ASSASSINMINIGAMESTATE_ContractDenied = 4
}

declare const enum ValueRemapperInputType_t {
	InputType_PlayerShootPosition = 0,
	InputType_PlayerShootPositionAroundAxis = 1
}

declare const enum BaseActivity_t {
	ACT_RESET = 0,
	ACT_IDLE = 1,
	ACT_TRANSITION = 2,
	ACT_COVER = 3,
	ACT_COVER_MED = 4,
	ACT_COVER_LOW = 5,
	ACT_WALK = 6,
	ACT_WALK_AIM = 7,
	ACT_WALK_CROUCH = 8,
	ACT_WALK_CROUCH_AIM = 9,
	ACT_RUN = 10,
	ACT_RUN_AIM = 11,
	ACT_RUN_CROUCH = 12,
	ACT_RUN_CROUCH_AIM = 13,
	ACT_RUN_PROTECTED = 14,
	ACT_SCRIPT_CUSTOM_MOVE = 15,
	ACT_RANGE_ATTACK1 = 16,
	ACT_RANGE_ATTACK2 = 17,
	ACT_RANGE_ATTACK1_LOW = 18,
	ACT_RANGE_ATTACK2_LOW = 19,
	ACT_DIESIMPLE = 20,
	ACT_DIEBACKWARD = 21,
	ACT_DIEFORWARD = 22,
	ACT_DIEVIOLENT = 23,
	ACT_DIERAGDOLL = 24,
	ACT_FLY = 25,
	ACT_HOVER = 26,
	ACT_GLIDE = 27,
	ACT_SWIM = 28,
	ACT_JUMP = 29,
	ACT_HOP = 30,
	ACT_LEAP = 31,
	ACT_LAND = 32,
	ACT_CLIMB_UP = 33,
	ACT_CLIMB_DOWN = 34,
	ACT_CLIMB_DISMOUNT = 35,
	ACT_SHIPLADDER_UP = 36,
	ACT_SHIPLADDER_DOWN = 37,
	ACT_STRAFE_LEFT = 38,
	ACT_STRAFE_RIGHT = 39,
	ACT_ROLL_LEFT = 40,
	ACT_ROLL_RIGHT = 41,
	ACT_TURN_LEFT = 42,
	ACT_TURN_RIGHT = 43,
	ACT_CROUCH = 44,
	ACT_CROUCHIDLE = 45,
	ACT_STAND = 46,
	ACT_USE = 47,
	ACT_ALIEN_BURROW_IDLE = 48,
	ACT_ALIEN_BURROW_OUT = 49,
	ACT_SIGNAL1 = 50,
	ACT_SIGNAL2 = 51,
	ACT_SIGNAL3 = 52,
	ACT_SIGNAL_ADVANCE = 53,
	ACT_SIGNAL_FORWARD = 54,
	ACT_SIGNAL_GROUP = 55,
	ACT_SIGNAL_HALT = 56,
	ACT_SIGNAL_LEFT = 57,
	ACT_SIGNAL_RIGHT = 58,
	ACT_SIGNAL_TAKECOVER = 59,
	ACT_LOOKBACK_RIGHT = 60,
	ACT_LOOKBACK_LEFT = 61,
	ACT_COWER = 62,
	ACT_SMALL_FLINCH = 63,
	ACT_BIG_FLINCH = 64,
	ACT_MELEE_ATTACK1 = 65,
	ACT_MELEE_ATTACK2 = 66,
	ACT_RELOAD = 67,
	ACT_RELOAD_START = 68,
	ACT_RELOAD_FINISH = 69,
	ACT_RELOAD_LOW = 70,
	ACT_ARM = 71,
	ACT_DISARM = 72,
	ACT_DROP_WEAPON = 73,
	ACT_DROP_WEAPON_SHOTGUN = 74,
	ACT_PICKUP_GROUND = 75,
	ACT_PICKUP_RACK = 76,
	ACT_IDLE_ANGRY = 77,
	ACT_IDLE_RELAXED = 78,
	ACT_IDLE_STIMULATED = 79,
	ACT_IDLE_AGITATED = 80,
	ACT_IDLE_STEALTH = 81,
	ACT_IDLE_HURT = 82,
	ACT_WALK_RELAXED = 83,
	ACT_WALK_STIMULATED = 84,
	ACT_WALK_AGITATED = 85,
	ACT_WALK_STEALTH = 86,
	ACT_RUN_RELAXED = 87,
	ACT_RUN_STIMULATED = 88,
	ACT_RUN_AGITATED = 89,
	ACT_RUN_STEALTH = 90,
	ACT_IDLE_AIM_RELAXED = 91,
	ACT_IDLE_AIM_STIMULATED = 92,
	ACT_IDLE_AIM_AGITATED = 93,
	ACT_IDLE_AIM_STEALTH = 94,
	ACT_WALK_AIM_RELAXED = 95,
	ACT_WALK_AIM_STIMULATED = 96,
	ACT_WALK_AIM_AGITATED = 97,
	ACT_WALK_AIM_STEALTH = 98,
	ACT_RUN_AIM_RELAXED = 99,
	ACT_RUN_AIM_STIMULATED = 100,
	ACT_RUN_AIM_AGITATED = 101,
	ACT_RUN_AIM_STEALTH = 102,
	ACT_CROUCHIDLE_STIMULATED = 103,
	ACT_CROUCHIDLE_AIM_STIMULATED = 104,
	ACT_CROUCHIDLE_AGITATED = 105,
	ACT_WALK_HURT = 106,
	ACT_RUN_HURT = 107,
	ACT_SPECIAL_ATTACK1 = 108,
	ACT_SPECIAL_ATTACK2 = 109,
	ACT_COMBAT_IDLE = 110,
	ACT_WALK_SCARED = 111,
	ACT_RUN_SCARED = 112,
	ACT_VICTORY_DANCE = 113,
	ACT_DIE_HEADSHOT = 114,
	ACT_DIE_CHESTSHOT = 115,
	ACT_DIE_GUTSHOT = 116,
	ACT_DIE_BACKSHOT = 117,
	ACT_FLINCH_HEAD = 118,
	ACT_FLINCH_CHEST = 119,
	ACT_FLINCH_STOMACH = 120,
	ACT_FLINCH_LEFTARM = 121,
	ACT_FLINCH_RIGHTARM = 122,
	ACT_FLINCH_LEFTLEG = 123,
	ACT_FLINCH_RIGHTLEG = 124,
	ACT_FLINCH_PHYSICS = 125,
	ACT_FLINCH_HEAD_BACK = 126,
	ACT_FLINCH_CHEST_BACK = 127,
	ACT_FLINCH_STOMACH_BACK = 128,
	ACT_FLINCH_CROUCH_FRONT = 129,
	ACT_FLINCH_CROUCH_BACK = 130,
	ACT_FLINCH_CROUCH_LEFT = 131,
	ACT_FLINCH_CROUCH_RIGHT = 132,
	ACT_IDLE_ON_FIRE = 133,
	ACT_WALK_ON_FIRE = 134,
	ACT_RUN_ON_FIRE = 135,
	ACT_RAPPEL_LOOP = 136,
	ACT_180_LEFT = 137,
	ACT_180_RIGHT = 138,
	ACT_90_LEFT = 139,
	ACT_90_RIGHT = 140,
	ACT_STEP_LEFT = 141,
	ACT_STEP_RIGHT = 142,
	ACT_STEP_BACK = 143,
	ACT_STEP_FORE = 144,
	ACT_GESTURE_RANGE_ATTACK1 = 145,
	ACT_GESTURE_RANGE_ATTACK2 = 146,
	ACT_GESTURE_MELEE_ATTACK1 = 147,
	ACT_GESTURE_MELEE_ATTACK2 = 148,
	ACT_GESTURE_RANGE_ATTACK1_LOW = 149,
	ACT_GESTURE_RANGE_ATTACK2_LOW = 150,
	ACT_MELEE_ATTACK_SWING_GESTURE = 151,
	ACT_GESTURE_SMALL_FLINCH = 152,
	ACT_GESTURE_BIG_FLINCH = 153,
	ACT_GESTURE_FLINCH_BLAST = 154,
	ACT_GESTURE_FLINCH_BLAST_SHOTGUN = 155,
	ACT_GESTURE_FLINCH_BLAST_DAMAGED = 156,
	ACT_GESTURE_FLINCH_BLAST_DAMAGED_SHOTGUN = 157,
	ACT_GESTURE_FLINCH_HEAD = 158,
	ACT_GESTURE_FLINCH_CHEST = 159,
	ACT_GESTURE_FLINCH_STOMACH = 160,
	ACT_GESTURE_FLINCH_LEFTARM = 161,
	ACT_GESTURE_FLINCH_RIGHTARM = 162,
	ACT_GESTURE_FLINCH_LEFTLEG = 163,
	ACT_GESTURE_FLINCH_RIGHTLEG = 164,
	ACT_GESTURE_TURN_LEFT = 165,
	ACT_GESTURE_TURN_RIGHT = 166,
	ACT_GESTURE_TURN_LEFT45 = 167,
	ACT_GESTURE_TURN_RIGHT45 = 168,
	ACT_GESTURE_TURN_LEFT90 = 169,
	ACT_GESTURE_TURN_RIGHT90 = 170,
	ACT_GESTURE_TURN_LEFT45_FLAT = 171,
	ACT_GESTURE_TURN_RIGHT45_FLAT = 172,
	ACT_GESTURE_TURN_LEFT90_FLAT = 173,
	ACT_GESTURE_TURN_RIGHT90_FLAT = 174,
	ACT_BARNACLE_HIT = 175,
	ACT_BARNACLE_PULL = 176,
	ACT_BARNACLE_CHOMP = 177,
	ACT_BARNACLE_CHEW = 178,
	ACT_DO_NOT_DISTURB = 179,
	ACT_SPECIFIC_SEQUENCE = 180,
	ACT_VM_DEPLOY = 181,
	ACT_VM_RELOAD_EMPTY = 182,
	ACT_VM_DRAW = 183,
	ACT_VM_HOLSTER = 184,
	ACT_VM_IDLE = 185,
	ACT_VM_FIDGET = 186,
	ACT_VM_PULLBACK = 187,
	ACT_VM_PULLBACK_HIGH = 188,
	ACT_VM_PULLBACK_LOW = 189,
	ACT_VM_THROW = 190,
	ACT_VM_DROP = 191,
	ACT_VM_PULLPIN = 192,
	ACT_VM_PRIMARYATTACK = 193,
	ACT_VM_SECONDARYATTACK = 194,
	ACT_VM_RELOAD = 195,
	ACT_VM_DRYFIRE = 196,
	ACT_VM_HITLEFT = 197,
	ACT_VM_HITLEFT2 = 198,
	ACT_VM_HITRIGHT = 199,
	ACT_VM_HITRIGHT2 = 200,
	ACT_VM_HITCENTER = 201,
	ACT_VM_HITCENTER2 = 202,
	ACT_VM_MISSLEFT = 203,
	ACT_VM_MISSLEFT2 = 204,
	ACT_VM_MISSRIGHT = 205,
	ACT_VM_MISSRIGHT2 = 206,
	ACT_VM_MISSCENTER = 207,
	ACT_VM_MISSCENTER2 = 208,
	ACT_VM_HAULBACK = 209,
	ACT_VM_SWINGHARD = 210,
	ACT_VM_SWINGMISS = 211,
	ACT_VM_SWINGHIT = 212,
	ACT_VM_IDLE_TO_LOWERED = 213,
	ACT_VM_IDLE_LOWERED = 214,
	ACT_VM_LOWERED_TO_IDLE = 215,
	ACT_VM_RECOIL1 = 216,
	ACT_VM_RECOIL2 = 217,
	ACT_VM_RECOIL3 = 218,
	ACT_VM_PICKUP = 219,
	ACT_VM_RELEASE = 220,
	ACT_VM_MAUL_LOOP = 221,
	ACT_VM_ATTACH_SILENCER = 222,
	ACT_VM_DETACH_SILENCER = 223,
	ACT_SLAM_STICKWALL_IDLE = 224,
	ACT_SLAM_STICKWALL_ND_IDLE = 225,
	ACT_SLAM_STICKWALL_ATTACH = 226,
	ACT_SLAM_STICKWALL_ATTACH2 = 227,
	ACT_SLAM_STICKWALL_ND_ATTACH = 228,
	ACT_SLAM_STICKWALL_ND_ATTACH2 = 229,
	ACT_SLAM_STICKWALL_DETONATE = 230,
	ACT_SLAM_STICKWALL_DETONATOR_HOLSTER = 231,
	ACT_SLAM_STICKWALL_DRAW = 232,
	ACT_SLAM_STICKWALL_ND_DRAW = 233,
	ACT_SLAM_STICKWALL_TO_THROW = 234,
	ACT_SLAM_STICKWALL_TO_THROW_ND = 235,
	ACT_SLAM_STICKWALL_TO_TRIPMINE_ND = 236,
	ACT_SLAM_THROW_IDLE = 237,
	ACT_SLAM_THROW_ND_IDLE = 238,
	ACT_SLAM_THROW_THROW = 239,
	ACT_SLAM_THROW_THROW2 = 240,
	ACT_SLAM_THROW_THROW_ND = 241,
	ACT_SLAM_THROW_THROW_ND2 = 242,
	ACT_SLAM_THROW_DRAW = 243,
	ACT_SLAM_THROW_ND_DRAW = 244,
	ACT_SLAM_THROW_TO_STICKWALL = 245,
	ACT_SLAM_THROW_TO_STICKWALL_ND = 246,
	ACT_SLAM_THROW_DETONATE = 247,
	ACT_SLAM_THROW_DETONATOR_HOLSTER = 248,
	ACT_SLAM_THROW_TO_TRIPMINE_ND = 249,
	ACT_SLAM_TRIPMINE_IDLE = 250,
	ACT_SLAM_TRIPMINE_DRAW = 251,
	ACT_SLAM_TRIPMINE_ATTACH = 252,
	ACT_SLAM_TRIPMINE_ATTACH2 = 253,
	ACT_SLAM_TRIPMINE_TO_STICKWALL_ND = 254,
	ACT_SLAM_TRIPMINE_TO_THROW_ND = 255,
	ACT_SLAM_DETONATOR_IDLE = 256,
	ACT_SLAM_DETONATOR_DRAW = 257,
	ACT_SLAM_DETONATOR_DETONATE = 258,
	ACT_SLAM_DETONATOR_HOLSTER = 259,
	ACT_SLAM_DETONATOR_STICKWALL_DRAW = 260,
	ACT_SLAM_DETONATOR_THROW_DRAW = 261,
	ACT_SHOTGUN_RELOAD_START = 262,
	ACT_SHOTGUN_RELOAD_FINISH = 263,
	ACT_SHOTGUN_PUMP = 264,
	ACT_SMG2_IDLE2 = 265,
	ACT_SMG2_FIRE2 = 266,
	ACT_SMG2_DRAW2 = 267,
	ACT_SMG2_RELOAD2 = 268,
	ACT_SMG2_DRYFIRE2 = 269,
	ACT_SMG2_TOAUTO = 270,
	ACT_SMG2_TOBURST = 271,
	ACT_PHYSCANNON_UPGRADE = 272,
	ACT_RANGE_ATTACK_AR1 = 273,
	ACT_RANGE_ATTACK_AR2 = 274,
	ACT_RANGE_ATTACK_AR2_LOW = 275,
	ACT_RANGE_ATTACK_AR2_GRENADE = 276,
	ACT_RANGE_ATTACK_HMG1 = 277,
	ACT_RANGE_ATTACK_ML = 278,
	ACT_RANGE_ATTACK_SMG1 = 279,
	ACT_RANGE_ATTACK_SMG1_LOW = 280,
	ACT_RANGE_ATTACK_SMG2 = 281,
	ACT_RANGE_ATTACK_SHOTGUN = 282,
	ACT_RANGE_ATTACK_SHOTGUN_LOW = 283,
	ACT_RANGE_ATTACK_PISTOL = 284,
	ACT_RANGE_ATTACK_PISTOL_LOW = 285,
	ACT_RANGE_ATTACK_SLAM = 286,
	ACT_RANGE_ATTACK_TRIPWIRE = 287,
	ACT_RANGE_ATTACK_THROW = 288,
	ACT_RANGE_ATTACK_SNIPER_RIFLE = 289,
	ACT_RANGE_ATTACK_RPG = 290,
	ACT_MELEE_ATTACK_SWING = 291,
	ACT_RANGE_AIM_LOW = 292,
	ACT_RANGE_AIM_SMG1_LOW = 293,
	ACT_RANGE_AIM_PISTOL_LOW = 294,
	ACT_RANGE_AIM_AR2_LOW = 295,
	ACT_COVER_PISTOL_LOW = 296,
	ACT_COVER_SMG1_LOW = 297,
	ACT_GESTURE_RANGE_ATTACK_AR1 = 298,
	ACT_GESTURE_RANGE_ATTACK_AR2 = 299,
	ACT_GESTURE_RANGE_ATTACK_AR2_GRENADE = 300,
	ACT_GESTURE_RANGE_ATTACK_HMG1 = 301,
	ACT_GESTURE_RANGE_ATTACK_ML = 302,
	ACT_GESTURE_RANGE_ATTACK_SMG1 = 303,
	ACT_GESTURE_RANGE_ATTACK_SMG1_LOW = 304,
	ACT_GESTURE_RANGE_ATTACK_SMG2 = 305,
	ACT_GESTURE_RANGE_ATTACK_SHOTGUN = 306,
	ACT_GESTURE_RANGE_ATTACK_PISTOL = 307,
	ACT_GESTURE_RANGE_ATTACK_PISTOL_LOW = 308,
	ACT_GESTURE_RANGE_ATTACK_SLAM = 309,
	ACT_GESTURE_RANGE_ATTACK_TRIPWIRE = 310,
	ACT_GESTURE_RANGE_ATTACK_THROW = 311,
	ACT_GESTURE_RANGE_ATTACK_SNIPER_RIFLE = 312,
	ACT_GESTURE_MELEE_ATTACK_SWING = 313,
	ACT_IDLE_RIFLE = 314,
	ACT_IDLE_SMG1 = 315,
	ACT_IDLE_ANGRY_SMG1 = 316,
	ACT_IDLE_PISTOL = 317,
	ACT_IDLE_ANGRY_PISTOL = 318,
	ACT_IDLE_ANGRY_SHOTGUN = 319,
	ACT_IDLE_STEALTH_PISTOL = 320,
	ACT_IDLE_PACKAGE = 321,
	ACT_WALK_PACKAGE = 322,
	ACT_IDLE_SUITCASE = 323,
	ACT_WALK_SUITCASE = 324,
	ACT_IDLE_SMG1_RELAXED = 325,
	ACT_IDLE_SMG1_STIMULATED = 326,
	ACT_WALK_RIFLE_RELAXED = 327,
	ACT_RUN_RIFLE_RELAXED = 328,
	ACT_WALK_RIFLE_STIMULATED = 329,
	ACT_RUN_RIFLE_STIMULATED = 330,
	ACT_IDLE_AIM_RIFLE_STIMULATED = 331,
	ACT_WALK_AIM_RIFLE_STIMULATED = 332,
	ACT_RUN_AIM_RIFLE_STIMULATED = 333,
	ACT_IDLE_SHOTGUN_RELAXED = 334,
	ACT_IDLE_SHOTGUN_STIMULATED = 335,
	ACT_IDLE_SHOTGUN_AGITATED = 336,
	ACT_WALK_ANGRY = 337,
	ACT_POLICE_HARASS1 = 338,
	ACT_POLICE_HARASS2 = 339,
	ACT_IDLE_MANNEDGUN = 340,
	ACT_IDLE_MELEE = 341,
	ACT_IDLE_ANGRY_MELEE = 342,
	ACT_IDLE_RPG_RELAXED = 343,
	ACT_IDLE_RPG = 344,
	ACT_IDLE_ANGRY_RPG = 345,
	ACT_COVER_LOW_RPG = 346,
	ACT_WALK_RPG = 347,
	ACT_RUN_RPG = 348,
	ACT_WALK_CROUCH_RPG = 349,
	ACT_RUN_CROUCH_RPG = 350,
	ACT_WALK_RPG_RELAXED = 351,
	ACT_RUN_RPG_RELAXED = 352,
	ACT_WALK_RIFLE = 353,
	ACT_WALK_AIM_RIFLE = 354,
	ACT_WALK_CROUCH_RIFLE = 355,
	ACT_WALK_CROUCH_AIM_RIFLE = 356,
	ACT_RUN_RIFLE = 357,
	ACT_RUN_AIM_RIFLE = 358,
	ACT_RUN_CROUCH_RIFLE = 359,
	ACT_RUN_CROUCH_AIM_RIFLE = 360,
	ACT_RUN_STEALTH_PISTOL = 361,
	ACT_WALK_AIM_SHOTGUN = 362,
	ACT_RUN_AIM_SHOTGUN = 363,
	ACT_WALK_PISTOL = 364,
	ACT_RUN_PISTOL = 365,
	ACT_WALK_AIM_PISTOL = 366,
	ACT_RUN_AIM_PISTOL = 367,
	ACT_WALK_STEALTH_PISTOL = 368,
	ACT_WALK_AIM_STEALTH_PISTOL = 369,
	ACT_RUN_AIM_STEALTH_PISTOL = 370,
	ACT_RELOAD_PISTOL = 371,
	ACT_RELOAD_PISTOL_LOW = 372,
	ACT_RELOAD_SMG1 = 373,
	ACT_RELOAD_SMG1_LOW = 374,
	ACT_RELOAD_SHOTGUN = 375,
	ACT_RELOAD_SHOTGUN_LOW = 376,
	ACT_GESTURE_RELOAD = 377,
	ACT_GESTURE_RELOAD_PISTOL = 378,
	ACT_GESTURE_RELOAD_SMG1 = 379,
	ACT_GESTURE_RELOAD_SHOTGUN = 380,
	ACT_BUSY_LEAN_LEFT = 381,
	ACT_BUSY_LEAN_LEFT_ENTRY = 382,
	ACT_BUSY_LEAN_LEFT_EXIT = 383,
	ACT_BUSY_LEAN_BACK = 384,
	ACT_BUSY_LEAN_BACK_ENTRY = 385,
	ACT_BUSY_LEAN_BACK_EXIT = 386,
	ACT_BUSY_SIT_GROUND = 387,
	ACT_BUSY_SIT_GROUND_ENTRY = 388,
	ACT_BUSY_SIT_GROUND_EXIT = 389,
	ACT_BUSY_SIT_CHAIR = 390,
	ACT_BUSY_SIT_CHAIR_ENTRY = 391,
	ACT_BUSY_SIT_CHAIR_EXIT = 392,
	ACT_BUSY_STAND = 393,
	ACT_BUSY_QUEUE = 394,
	ACT_DUCK_DODGE = 395,
	ACT_DIE_BARNACLE_SWALLOW = 396,
	ACT_GESTURE_BARNACLE_STRANGLE = 397,
	ACT_PHYSCANNON_DETACH = 398,
	ACT_PHYSCANNON_ANIMATE = 399,
	ACT_PHYSCANNON_ANIMATE_PRE = 400,
	ACT_PHYSCANNON_ANIMATE_POST = 401,
	ACT_DIE_FRONTSIDE = 402,
	ACT_DIE_RIGHTSIDE = 403,
	ACT_DIE_BACKSIDE = 404,
	ACT_DIE_LEFTSIDE = 405,
	ACT_DIE_CROUCH_FRONTSIDE = 406,
	ACT_DIE_CROUCH_RIGHTSIDE = 407,
	ACT_DIE_CROUCH_BACKSIDE = 408,
	ACT_DIE_CROUCH_LEFTSIDE = 409,
	ACT_DIE_INCAP = 410,
	ACT_DIE_STANDING = 411,
	ACT_OPEN_DOOR = 412,
	ACT_DI_ALYX_ZOMBIE_MELEE = 413,
	ACT_DI_ALYX_ZOMBIE_TORSO_MELEE = 414,
	ACT_DI_ALYX_HEADCRAB_MELEE = 415,
	ACT_DI_ALYX_ANTLION = 416,
	ACT_DI_ALYX_ZOMBIE_SHOTGUN64 = 417,
	ACT_DI_ALYX_ZOMBIE_SHOTGUN26 = 418,
	ACT_READINESS_RELAXED_TO_STIMULATED = 419,
	ACT_READINESS_RELAXED_TO_STIMULATED_WALK = 420,
	ACT_READINESS_AGITATED_TO_STIMULATED = 421,
	ACT_READINESS_STIMULATED_TO_RELAXED = 422,
	ACT_READINESS_PISTOL_RELAXED_TO_STIMULATED = 423,
	ACT_READINESS_PISTOL_RELAXED_TO_STIMULATED_WALK = 424,
	ACT_READINESS_PISTOL_AGITATED_TO_STIMULATED = 425,
	ACT_READINESS_PISTOL_STIMULATED_TO_RELAXED = 426,
	ACT_IDLE_CARRY = 427,
	ACT_WALK_CARRY = 428,
	ACT_STARTDYING = 429,
	ACT_DYINGLOOP = 430,
	ACT_DYINGTODEAD = 431,
	ACT_RIDE_MANNED_GUN = 432,
	ACT_VM_SPRINT_ENTER = 433,
	ACT_VM_SPRINT_IDLE = 434,
	ACT_VM_SPRINT_LEAVE = 435,
	ACT_FIRE_START = 436,
	ACT_FIRE_LOOP = 437,
	ACT_FIRE_END = 438,
	ACT_CROUCHING_GRENADEIDLE = 439,
	ACT_CROUCHING_GRENADEREADY = 440,
	ACT_CROUCHING_PRIMARYATTACK = 441,
	ACT_OVERLAY_GRENADEIDLE = 442,
	ACT_OVERLAY_GRENADEREADY = 443,
	ACT_OVERLAY_PRIMARYATTACK = 444,
	ACT_OVERLAY_SHIELD_UP = 445,
	ACT_OVERLAY_SHIELD_DOWN = 446,
	ACT_OVERLAY_SHIELD_UP_IDLE = 447,
	ACT_OVERLAY_SHIELD_ATTACK = 448,
	ACT_OVERLAY_SHIELD_KNOCKBACK = 449,
	ACT_SHIELD_UP = 450,
	ACT_SHIELD_DOWN = 451,
	ACT_SHIELD_UP_IDLE = 452,
	ACT_SHIELD_ATTACK = 453,
	ACT_SHIELD_KNOCKBACK = 454,
	ACT_CROUCHING_SHIELD_UP = 455,
	ACT_CROUCHING_SHIELD_DOWN = 456,
	ACT_CROUCHING_SHIELD_UP_IDLE = 457,
	ACT_CROUCHING_SHIELD_ATTACK = 458,
	ACT_CROUCHING_SHIELD_KNOCKBACK = 459,
	ACT_TURNRIGHT45 = 460,
	ACT_TURNLEFT45 = 461,
	ACT_TURN = 462,
	ACT_OBJ_ASSEMBLING = 463,
	ACT_OBJ_DISMANTLING = 464,
	ACT_OBJ_STARTUP = 465,
	ACT_OBJ_RUNNING = 466,
	ACT_OBJ_IDLE = 467,
	ACT_OBJ_PLACING = 468,
	ACT_OBJ_DETERIORATING = 469,
	ACT_OBJ_UPGRADING = 470,
	ACT_DEPLOY = 471,
	ACT_DEPLOY_IDLE = 472,
	ACT_UNDEPLOY = 473,
	ACT_CROSSBOW_DRAW_UNLOADED = 474,
	ACT_GAUSS_SPINUP = 475,
	ACT_GAUSS_SPINCYCLE = 476,
	ACT_VM_PRIMARYATTACK_SILENCED = 477,
	ACT_VM_RELOAD_SILENCED = 478,
	ACT_VM_DRYFIRE_SILENCED = 479,
	ACT_VM_IDLE_SILENCED = 480,
	ACT_VM_DRAW_SILENCED = 481,
	ACT_VM_IDLE_EMPTY_LEFT = 482,
	ACT_VM_DRYFIRE_LEFT = 483,
	ACT_VM_IS_DRAW = 484,
	ACT_VM_IS_HOLSTER = 485,
	ACT_VM_IS_IDLE = 486,
	ACT_VM_IS_PRIMARYATTACK = 487,
	ACT_PLAYER_IDLE_FIRE = 488,
	ACT_PLAYER_CROUCH_FIRE = 489,
	ACT_PLAYER_CROUCH_WALK_FIRE = 490,
	ACT_PLAYER_WALK_FIRE = 491,
	ACT_PLAYER_RUN_FIRE = 492,
	ACT_IDLETORUN = 493,
	ACT_RUNTOIDLE = 494,
	ACT_VM_DRAW_DEPLOYED = 495,
	ACT_HL2MP_IDLE_MELEE = 496,
	ACT_HL2MP_RUN_MELEE = 497,
	ACT_HL2MP_IDLE_CROUCH_MELEE = 498,
	ACT_HL2MP_WALK_CROUCH_MELEE = 499,
	ACT_HL2MP_GESTURE_RANGE_ATTACK_MELEE = 500,
	ACT_HL2MP_GESTURE_RELOAD_MELEE = 501,
	ACT_HL2MP_JUMP_MELEE = 502,
	ACT_MP_STAND_IDLE = 503,
	ACT_MP_CROUCH_IDLE = 504,
	ACT_MP_CROUCH_DEPLOYED_IDLE = 505,
	ACT_MP_CROUCH_DEPLOYED = 506,
	ACT_MP_DEPLOYED_IDLE = 507,
	ACT_MP_RUN = 508,
	ACT_MP_WALK = 509,
	ACT_MP_AIRWALK = 510,
	ACT_MP_CROUCHWALK = 511,
	ACT_MP_SPRINT = 512,
	ACT_MP_JUMP = 513,
	ACT_MP_JUMP_START = 514,
	ACT_MP_JUMP_FLOAT = 515,
	ACT_MP_JUMP_LAND = 516,
	ACT_MP_DOUBLEJUMP = 517,
	ACT_MP_SWIM = 518,
	ACT_MP_DEPLOYED = 519,
	ACT_MP_SWIM_DEPLOYED = 520,
	ACT_MP_VCD = 521,
	ACT_MP_ATTACK_STAND_PRIMARYFIRE = 522,
	ACT_MP_ATTACK_STAND_PRIMARYFIRE_DEPLOYED = 523,
	ACT_MP_ATTACK_STAND_SECONDARYFIRE = 524,
	ACT_MP_ATTACK_STAND_GRENADE = 525,
	ACT_MP_ATTACK_CROUCH_PRIMARYFIRE = 526,
	ACT_MP_ATTACK_CROUCH_PRIMARYFIRE_DEPLOYED = 527,
	ACT_MP_ATTACK_CROUCH_SECONDARYFIRE = 528,
	ACT_MP_ATTACK_CROUCH_GRENADE = 529,
	ACT_MP_ATTACK_SWIM_PRIMARYFIRE = 530,
	ACT_MP_ATTACK_SWIM_SECONDARYFIRE = 531,
	ACT_MP_ATTACK_SWIM_GRENADE = 532,
	ACT_MP_ATTACK_AIRWALK_PRIMARYFIRE = 533,
	ACT_MP_ATTACK_AIRWALK_SECONDARYFIRE = 534,
	ACT_MP_ATTACK_AIRWALK_GRENADE = 535,
	ACT_MP_RELOAD_STAND = 536,
	ACT_MP_RELOAD_STAND_LOOP = 537,
	ACT_MP_RELOAD_STAND_END = 538,
	ACT_MP_RELOAD_CROUCH = 539,
	ACT_MP_RELOAD_CROUCH_LOOP = 540,
	ACT_MP_RELOAD_CROUCH_END = 541,
	ACT_MP_RELOAD_SWIM = 542,
	ACT_MP_RELOAD_SWIM_LOOP = 543,
	ACT_MP_RELOAD_SWIM_END = 544,
	ACT_MP_RELOAD_AIRWALK = 545,
	ACT_MP_RELOAD_AIRWALK_LOOP = 546,
	ACT_MP_RELOAD_AIRWALK_END = 547,
	ACT_MP_ATTACK_STAND_PREFIRE = 548,
	ACT_MP_ATTACK_STAND_POSTFIRE = 549,
	ACT_MP_ATTACK_STAND_STARTFIRE = 550,
	ACT_MP_ATTACK_CROUCH_PREFIRE = 551,
	ACT_MP_ATTACK_CROUCH_POSTFIRE = 552,
	ACT_MP_ATTACK_SWIM_PREFIRE = 553,
	ACT_MP_ATTACK_SWIM_POSTFIRE = 554,
	ACT_MP_STAND_PRIMARY = 555,
	ACT_MP_CROUCH_PRIMARY = 556,
	ACT_MP_RUN_PRIMARY = 557,
	ACT_MP_WALK_PRIMARY = 558,
	ACT_MP_AIRWALK_PRIMARY = 559,
	ACT_MP_CROUCHWALK_PRIMARY = 560,
	ACT_MP_JUMP_PRIMARY = 561,
	ACT_MP_JUMP_START_PRIMARY = 562,
	ACT_MP_JUMP_FLOAT_PRIMARY = 563,
	ACT_MP_JUMP_LAND_PRIMARY = 564,
	ACT_MP_SWIM_PRIMARY = 565,
	ACT_MP_DEPLOYED_PRIMARY = 566,
	ACT_MP_SWIM_DEPLOYED_PRIMARY = 567,
	ACT_MP_ATTACK_STAND_PRIMARY = 568,
	ACT_MP_ATTACK_STAND_PRIMARY_DEPLOYED = 569,
	ACT_MP_ATTACK_CROUCH_PRIMARY = 570,
	ACT_MP_ATTACK_CROUCH_PRIMARY_DEPLOYED = 571,
	ACT_MP_ATTACK_SWIM_PRIMARY = 572,
	ACT_MP_ATTACK_AIRWALK_PRIMARY = 573,
	ACT_MP_RELOAD_STAND_PRIMARY = 574,
	ACT_MP_RELOAD_STAND_PRIMARY_LOOP = 575,
	ACT_MP_RELOAD_STAND_PRIMARY_END = 576,
	ACT_MP_RELOAD_CROUCH_PRIMARY = 577,
	ACT_MP_RELOAD_CROUCH_PRIMARY_LOOP = 578,
	ACT_MP_RELOAD_CROUCH_PRIMARY_END = 579,
	ACT_MP_RELOAD_SWIM_PRIMARY = 580,
	ACT_MP_RELOAD_SWIM_PRIMARY_LOOP = 581,
	ACT_MP_RELOAD_SWIM_PRIMARY_END = 582,
	ACT_MP_RELOAD_AIRWALK_PRIMARY = 583,
	ACT_MP_RELOAD_AIRWALK_PRIMARY_LOOP = 584,
	ACT_MP_RELOAD_AIRWALK_PRIMARY_END = 585,
	ACT_MP_ATTACK_STAND_GRENADE_PRIMARY = 586,
	ACT_MP_ATTACK_CROUCH_GRENADE_PRIMARY = 587,
	ACT_MP_ATTACK_SWIM_GRENADE_PRIMARY = 588,
	ACT_MP_ATTACK_AIRWALK_GRENADE_PRIMARY = 589,
	ACT_MP_STAND_SECONDARY = 590,
	ACT_MP_CROUCH_SECONDARY = 591,
	ACT_MP_RUN_SECONDARY = 592,
	ACT_MP_WALK_SECONDARY = 593,
	ACT_MP_AIRWALK_SECONDARY = 594,
	ACT_MP_CROUCHWALK_SECONDARY = 595,
	ACT_MP_JUMP_SECONDARY = 596,
	ACT_MP_JUMP_START_SECONDARY = 597,
	ACT_MP_JUMP_FLOAT_SECONDARY = 598,
	ACT_MP_JUMP_LAND_SECONDARY = 599,
	ACT_MP_SWIM_SECONDARY = 600,
	ACT_MP_ATTACK_STAND_SECONDARY = 601,
	ACT_MP_ATTACK_CROUCH_SECONDARY = 602,
	ACT_MP_ATTACK_SWIM_SECONDARY = 603,
	ACT_MP_ATTACK_AIRWALK_SECONDARY = 604,
	ACT_MP_RELOAD_STAND_SECONDARY = 605,
	ACT_MP_RELOAD_STAND_SECONDARY_LOOP = 606,
	ACT_MP_RELOAD_STAND_SECONDARY_END = 607,
	ACT_MP_RELOAD_CROUCH_SECONDARY = 608,
	ACT_MP_RELOAD_CROUCH_SECONDARY_LOOP = 609,
	ACT_MP_RELOAD_CROUCH_SECONDARY_END = 610,
	ACT_MP_RELOAD_SWIM_SECONDARY = 611,
	ACT_MP_RELOAD_SWIM_SECONDARY_LOOP = 612,
	ACT_MP_RELOAD_SWIM_SECONDARY_END = 613,
	ACT_MP_RELOAD_AIRWALK_SECONDARY = 614,
	ACT_MP_RELOAD_AIRWALK_SECONDARY_LOOP = 615,
	ACT_MP_RELOAD_AIRWALK_SECONDARY_END = 616,
	ACT_MP_ATTACK_STAND_GRENADE_SECONDARY = 617,
	ACT_MP_ATTACK_CROUCH_GRENADE_SECONDARY = 618,
	ACT_MP_ATTACK_SWIM_GRENADE_SECONDARY = 619,
	ACT_MP_ATTACK_AIRWALK_GRENADE_SECONDARY = 620,
	ACT_MP_STAND_MELEE = 621,
	ACT_MP_CROUCH_MELEE = 622,
	ACT_MP_RUN_MELEE = 623,
	ACT_MP_WALK_MELEE = 624,
	ACT_MP_AIRWALK_MELEE = 625,
	ACT_MP_CROUCHWALK_MELEE = 626,
	ACT_MP_JUMP_MELEE = 627,
	ACT_MP_JUMP_START_MELEE = 628,
	ACT_MP_JUMP_FLOAT_MELEE = 629,
	ACT_MP_JUMP_LAND_MELEE = 630,
	ACT_MP_SWIM_MELEE = 631,
	ACT_MP_ATTACK_STAND_MELEE = 632,
	ACT_MP_ATTACK_STAND_MELEE_SECONDARY = 633,
	ACT_MP_ATTACK_CROUCH_MELEE = 634,
	ACT_MP_ATTACK_CROUCH_MELEE_SECONDARY = 635,
	ACT_MP_ATTACK_SWIM_MELEE = 636,
	ACT_MP_ATTACK_AIRWALK_MELEE = 637,
	ACT_MP_ATTACK_STAND_GRENADE_MELEE = 638,
	ACT_MP_ATTACK_CROUCH_GRENADE_MELEE = 639,
	ACT_MP_ATTACK_SWIM_GRENADE_MELEE = 640,
	ACT_MP_ATTACK_AIRWALK_GRENADE_MELEE = 641,
	ACT_MP_STAND_ITEM1 = 642,
	ACT_MP_CROUCH_ITEM1 = 643,
	ACT_MP_RUN_ITEM1 = 644,
	ACT_MP_WALK_ITEM1 = 645,
	ACT_MP_AIRWALK_ITEM1 = 646,
	ACT_MP_CROUCHWALK_ITEM1 = 647,
	ACT_MP_JUMP_ITEM1 = 648,
	ACT_MP_JUMP_START_ITEM1 = 649,
	ACT_MP_JUMP_FLOAT_ITEM1 = 650,
	ACT_MP_JUMP_LAND_ITEM1 = 651,
	ACT_MP_SWIM_ITEM1 = 652,
	ACT_MP_ATTACK_STAND_ITEM1 = 653,
	ACT_MP_ATTACK_STAND_ITEM1_SECONDARY = 654,
	ACT_MP_ATTACK_CROUCH_ITEM1 = 655,
	ACT_MP_ATTACK_CROUCH_ITEM1_SECONDARY = 656,
	ACT_MP_ATTACK_SWIM_ITEM1 = 657,
	ACT_MP_ATTACK_AIRWALK_ITEM1 = 658,
	ACT_MP_STAND_ITEM2 = 659,
	ACT_MP_CROUCH_ITEM2 = 660,
	ACT_MP_RUN_ITEM2 = 661,
	ACT_MP_WALK_ITEM2 = 662,
	ACT_MP_AIRWALK_ITEM2 = 663,
	ACT_MP_CROUCHWALK_ITEM2 = 664,
	ACT_MP_JUMP_ITEM2 = 665,
	ACT_MP_JUMP_START_ITEM2 = 666,
	ACT_MP_JUMP_FLOAT_ITEM2 = 667,
	ACT_MP_JUMP_LAND_ITEM2 = 668,
	ACT_MP_SWIM_ITEM2 = 669,
	ACT_MP_ATTACK_STAND_ITEM2 = 670,
	ACT_MP_ATTACK_STAND_ITEM2_SECONDARY = 671,
	ACT_MP_ATTACK_CROUCH_ITEM2 = 672,
	ACT_MP_ATTACK_CROUCH_ITEM2_SECONDARY = 673,
	ACT_MP_ATTACK_SWIM_ITEM2 = 674,
	ACT_MP_ATTACK_AIRWALK_ITEM2 = 675,
	ACT_MP_GESTURE_FLINCH = 676,
	ACT_MP_GESTURE_FLINCH_PRIMARY = 677,
	ACT_MP_GESTURE_FLINCH_SECONDARY = 678,
	ACT_MP_GESTURE_FLINCH_MELEE = 679,
	ACT_MP_GESTURE_FLINCH_ITEM1 = 680,
	ACT_MP_GESTURE_FLINCH_ITEM2 = 681,
	ACT_MP_GESTURE_FLINCH_HEAD = 682,
	ACT_MP_GESTURE_FLINCH_CHEST = 683,
	ACT_MP_GESTURE_FLINCH_STOMACH = 684,
	ACT_MP_GESTURE_FLINCH_LEFTARM = 685,
	ACT_MP_GESTURE_FLINCH_RIGHTARM = 686,
	ACT_MP_GESTURE_FLINCH_LEFTLEG = 687,
	ACT_MP_GESTURE_FLINCH_RIGHTLEG = 688,
	ACT_MP_GRENADE1_DRAW = 689,
	ACT_MP_GRENADE1_IDLE = 690,
	ACT_MP_GRENADE1_ATTACK = 691,
	ACT_MP_GRENADE2_DRAW = 692,
	ACT_MP_GRENADE2_IDLE = 693,
	ACT_MP_GRENADE2_ATTACK = 694,
	ACT_MP_PRIMARY_GRENADE1_DRAW = 695,
	ACT_MP_PRIMARY_GRENADE1_IDLE = 696,
	ACT_MP_PRIMARY_GRENADE1_ATTACK = 697,
	ACT_MP_PRIMARY_GRENADE2_DRAW = 698,
	ACT_MP_PRIMARY_GRENADE2_IDLE = 699,
	ACT_MP_PRIMARY_GRENADE2_ATTACK = 700,
	ACT_MP_SECONDARY_GRENADE1_DRAW = 701,
	ACT_MP_SECONDARY_GRENADE1_IDLE = 702,
	ACT_MP_SECONDARY_GRENADE1_ATTACK = 703,
	ACT_MP_SECONDARY_GRENADE2_DRAW = 704,
	ACT_MP_SECONDARY_GRENADE2_IDLE = 705,
	ACT_MP_SECONDARY_GRENADE2_ATTACK = 706,
	ACT_MP_MELEE_GRENADE1_DRAW = 707,
	ACT_MP_MELEE_GRENADE1_IDLE = 708,
	ACT_MP_MELEE_GRENADE1_ATTACK = 709,
	ACT_MP_MELEE_GRENADE2_DRAW = 710,
	ACT_MP_MELEE_GRENADE2_IDLE = 711,
	ACT_MP_MELEE_GRENADE2_ATTACK = 712,
	ACT_MP_ITEM1_GRENADE1_DRAW = 713,
	ACT_MP_ITEM1_GRENADE1_IDLE = 714,
	ACT_MP_ITEM1_GRENADE1_ATTACK = 715,
	ACT_MP_ITEM1_GRENADE2_DRAW = 716,
	ACT_MP_ITEM1_GRENADE2_IDLE = 717,
	ACT_MP_ITEM1_GRENADE2_ATTACK = 718,
	ACT_MP_ITEM2_GRENADE1_DRAW = 719,
	ACT_MP_ITEM2_GRENADE1_IDLE = 720,
	ACT_MP_ITEM2_GRENADE1_ATTACK = 721,
	ACT_MP_ITEM2_GRENADE2_DRAW = 722,
	ACT_MP_ITEM2_GRENADE2_IDLE = 723,
	ACT_MP_ITEM2_GRENADE2_ATTACK = 724,
	ACT_MP_STAND_BUILDING = 725,
	ACT_MP_CROUCH_BUILDING = 726,
	ACT_MP_RUN_BUILDING = 727,
	ACT_MP_WALK_BUILDING = 728,
	ACT_MP_AIRWALK_BUILDING = 729,
	ACT_MP_CROUCHWALK_BUILDING = 730,
	ACT_MP_JUMP_BUILDING = 731,
	ACT_MP_JUMP_START_BUILDING = 732,
	ACT_MP_JUMP_FLOAT_BUILDING = 733,
	ACT_MP_JUMP_LAND_BUILDING = 734,
	ACT_MP_SWIM_BUILDING = 735,
	ACT_MP_ATTACK_STAND_BUILDING = 736,
	ACT_MP_ATTACK_CROUCH_BUILDING = 737,
	ACT_MP_ATTACK_SWIM_BUILDING = 738,
	ACT_MP_ATTACK_AIRWALK_BUILDING = 739,
	ACT_MP_ATTACK_STAND_GRENADE_BUILDING = 740,
	ACT_MP_ATTACK_CROUCH_GRENADE_BUILDING = 741,
	ACT_MP_ATTACK_SWIM_GRENADE_BUILDING = 742,
	ACT_MP_ATTACK_AIRWALK_GRENADE_BUILDING = 743,
	ACT_MP_STAND_PDA = 744,
	ACT_MP_CROUCH_PDA = 745,
	ACT_MP_RUN_PDA = 746,
	ACT_MP_WALK_PDA = 747,
	ACT_MP_AIRWALK_PDA = 748,
	ACT_MP_CROUCHWALK_PDA = 749,
	ACT_MP_JUMP_PDA = 750,
	ACT_MP_JUMP_START_PDA = 751,
	ACT_MP_JUMP_FLOAT_PDA = 752,
	ACT_MP_JUMP_LAND_PDA = 753,
	ACT_MP_SWIM_PDA = 754,
	ACT_MP_ATTACK_STAND_PDA = 755,
	ACT_MP_ATTACK_SWIM_PDA = 756,
	ACT_MP_GESTURE_VC_HANDMOUTH = 757,
	ACT_MP_GESTURE_VC_FINGERPOINT = 758,
	ACT_MP_GESTURE_VC_FISTPUMP = 759,
	ACT_MP_GESTURE_VC_THUMBSUP = 760,
	ACT_MP_GESTURE_VC_NODYES = 761,
	ACT_MP_GESTURE_VC_NODNO = 762,
	ACT_MP_GESTURE_VC_HANDMOUTH_PRIMARY = 763,
	ACT_MP_GESTURE_VC_FINGERPOINT_PRIMARY = 764,
	ACT_MP_GESTURE_VC_FISTPUMP_PRIMARY = 765,
	ACT_MP_GESTURE_VC_THUMBSUP_PRIMARY = 766,
	ACT_MP_GESTURE_VC_NODYES_PRIMARY = 767,
	ACT_MP_GESTURE_VC_NODNO_PRIMARY = 768,
	ACT_MP_GESTURE_VC_HANDMOUTH_SECONDARY = 769,
	ACT_MP_GESTURE_VC_FINGERPOINT_SECONDARY = 770,
	ACT_MP_GESTURE_VC_FISTPUMP_SECONDARY = 771,
	ACT_MP_GESTURE_VC_THUMBSUP_SECONDARY = 772,
	ACT_MP_GESTURE_VC_NODYES_SECONDARY = 773,
	ACT_MP_GESTURE_VC_NODNO_SECONDARY = 774,
	ACT_MP_GESTURE_VC_HANDMOUTH_MELEE = 775,
	ACT_MP_GESTURE_VC_FINGERPOINT_MELEE = 776,
	ACT_MP_GESTURE_VC_FISTPUMP_MELEE = 777,
	ACT_MP_GESTURE_VC_THUMBSUP_MELEE = 778,
	ACT_MP_GESTURE_VC_NODYES_MELEE = 779,
	ACT_MP_GESTURE_VC_NODNO_MELEE = 780,
	ACT_MP_GESTURE_VC_HANDMOUTH_ITEM1 = 781,
	ACT_MP_GESTURE_VC_FINGERPOINT_ITEM1 = 782,
	ACT_MP_GESTURE_VC_FISTPUMP_ITEM1 = 783,
	ACT_MP_GESTURE_VC_THUMBSUP_ITEM1 = 784,
	ACT_MP_GESTURE_VC_NODYES_ITEM1 = 785,
	ACT_MP_GESTURE_VC_NODNO_ITEM1 = 786,
	ACT_MP_GESTURE_VC_HANDMOUTH_ITEM2 = 787,
	ACT_MP_GESTURE_VC_FINGERPOINT_ITEM2 = 788,
	ACT_MP_GESTURE_VC_FISTPUMP_ITEM2 = 789,
	ACT_MP_GESTURE_VC_THUMBSUP_ITEM2 = 790,
	ACT_MP_GESTURE_VC_NODYES_ITEM2 = 791,
	ACT_MP_GESTURE_VC_NODNO_ITEM2 = 792,
	ACT_MP_GESTURE_VC_HANDMOUTH_BUILDING = 793,
	ACT_MP_GESTURE_VC_FINGERPOINT_BUILDING = 794,
	ACT_MP_GESTURE_VC_FISTPUMP_BUILDING = 795,
	ACT_MP_GESTURE_VC_THUMBSUP_BUILDING = 796,
	ACT_MP_GESTURE_VC_NODYES_BUILDING = 797,
	ACT_MP_GESTURE_VC_NODNO_BUILDING = 798,
	ACT_MP_GESTURE_VC_HANDMOUTH_PDA = 799,
	ACT_MP_GESTURE_VC_FINGERPOINT_PDA = 800,
	ACT_MP_GESTURE_VC_FISTPUMP_PDA = 801,
	ACT_MP_GESTURE_VC_THUMBSUP_PDA = 802,
	ACT_MP_GESTURE_VC_NODYES_PDA = 803,
	ACT_MP_GESTURE_VC_NODNO_PDA = 804,
	ACT_VM_UNUSABLE = 805,
	ACT_VM_UNUSABLE_TO_USABLE = 806,
	ACT_VM_USABLE_TO_UNUSABLE = 807,
	ACT_PRIMARY_VM_DRAW = 808,
	ACT_PRIMARY_VM_HOLSTER = 809,
	ACT_PRIMARY_VM_IDLE = 810,
	ACT_PRIMARY_VM_PULLBACK = 811,
	ACT_PRIMARY_VM_PRIMARYATTACK = 812,
	ACT_PRIMARY_VM_SECONDARYATTACK = 813,
	ACT_PRIMARY_VM_RELOAD = 814,
	ACT_PRIMARY_VM_DRYFIRE = 815,
	ACT_PRIMARY_VM_IDLE_TO_LOWERED = 816,
	ACT_PRIMARY_VM_IDLE_LOWERED = 817,
	ACT_PRIMARY_VM_LOWERED_TO_IDLE = 818,
	ACT_SECONDARY_VM_DRAW = 819,
	ACT_SECONDARY_VM_HOLSTER = 820,
	ACT_SECONDARY_VM_IDLE = 821,
	ACT_SECONDARY_VM_PULLBACK = 822,
	ACT_SECONDARY_VM_PRIMARYATTACK = 823,
	ACT_SECONDARY_VM_SECONDARYATTACK = 824,
	ACT_SECONDARY_VM_RELOAD = 825,
	ACT_SECONDARY_VM_DRYFIRE = 826,
	ACT_SECONDARY_VM_IDLE_TO_LOWERED = 827,
	ACT_SECONDARY_VM_IDLE_LOWERED = 828,
	ACT_SECONDARY_VM_LOWERED_TO_IDLE = 829,
	ACT_MELEE_VM_DRAW = 830,
	ACT_MELEE_VM_HOLSTER = 831,
	ACT_MELEE_VM_IDLE = 832,
	ACT_MELEE_VM_PULLBACK = 833,
	ACT_MELEE_VM_PRIMARYATTACK = 834,
	ACT_MELEE_VM_SECONDARYATTACK = 835,
	ACT_MELEE_VM_RELOAD = 836,
	ACT_MELEE_VM_DRYFIRE = 837,
	ACT_MELEE_VM_IDLE_TO_LOWERED = 838,
	ACT_MELEE_VM_IDLE_LOWERED = 839,
	ACT_MELEE_VM_LOWERED_TO_IDLE = 840,
	ACT_PDA_VM_DRAW = 841,
	ACT_PDA_VM_HOLSTER = 842,
	ACT_PDA_VM_IDLE = 843,
	ACT_PDA_VM_PULLBACK = 844,
	ACT_PDA_VM_PRIMARYATTACK = 845,
	ACT_PDA_VM_SECONDARYATTACK = 846,
	ACT_PDA_VM_RELOAD = 847,
	ACT_PDA_VM_DRYFIRE = 848,
	ACT_PDA_VM_IDLE_TO_LOWERED = 849,
	ACT_PDA_VM_IDLE_LOWERED = 850,
	ACT_PDA_VM_LOWERED_TO_IDLE = 851,
	ACT_ITEM1_VM_DRAW = 852,
	ACT_ITEM1_VM_HOLSTER = 853,
	ACT_ITEM1_VM_IDLE = 854,
	ACT_ITEM1_VM_PULLBACK = 855,
	ACT_ITEM1_VM_PRIMARYATTACK = 856,
	ACT_ITEM1_VM_SECONDARYATTACK = 857,
	ACT_ITEM1_VM_RELOAD = 858,
	ACT_ITEM1_VM_DRYFIRE = 859,
	ACT_ITEM1_VM_IDLE_TO_LOWERED = 860,
	ACT_ITEM1_VM_IDLE_LOWERED = 861,
	ACT_ITEM1_VM_LOWERED_TO_IDLE = 862,
	ACT_ITEM2_VM_DRAW = 863,
	ACT_ITEM2_VM_HOLSTER = 864,
	ACT_ITEM2_VM_IDLE = 865,
	ACT_ITEM2_VM_PULLBACK = 866,
	ACT_ITEM2_VM_PRIMARYATTACK = 867,
	ACT_ITEM2_VM_SECONDARYATTACK = 868,
	ACT_ITEM2_VM_RELOAD = 869,
	ACT_ITEM2_VM_DRYFIRE = 870,
	ACT_ITEM2_VM_IDLE_TO_LOWERED = 871,
	ACT_ITEM2_VM_IDLE_LOWERED = 872,
	ACT_ITEM2_VM_LOWERED_TO_IDLE = 873,
	ACT_RELOAD_SUCCEED = 874,
	ACT_RELOAD_FAIL = 875,
	ACT_WALK_AIM_AUTOGUN = 876,
	ACT_RUN_AIM_AUTOGUN = 877,
	ACT_IDLE_AUTOGUN = 878,
	ACT_IDLE_AIM_AUTOGUN = 879,
	ACT_RELOAD_AUTOGUN = 880,
	ACT_CROUCH_IDLE_AUTOGUN = 881,
	ACT_RANGE_ATTACK_AUTOGUN = 882,
	ACT_JUMP_AUTOGUN = 883,
	ACT_IDLE_AIM_PISTOL = 884,
	ACT_WALK_AIM_DUAL = 885,
	ACT_RUN_AIM_DUAL = 886,
	ACT_IDLE_DUAL = 887,
	ACT_IDLE_AIM_DUAL = 888,
	ACT_RELOAD_DUAL = 889,
	ACT_CROUCH_IDLE_DUAL = 890,
	ACT_RANGE_ATTACK_DUAL = 891,
	ACT_JUMP_DUAL = 892,
	ACT_IDLE_AIM_SHOTGUN = 893,
	ACT_CROUCH_IDLE_SHOTGUN = 894,
	ACT_IDLE_AIM_RIFLE = 895,
	ACT_CROUCH_IDLE_RIFLE = 896,
	ACT_RANGE_ATTACK_RIFLE = 897,
	ACT_SLEEP = 898,
	ACT_WAKE = 899,
	ACT_FLICK_LEFT = 900,
	ACT_FLICK_LEFT_MIDDLE = 901,
	ACT_FLICK_RIGHT_MIDDLE = 902,
	ACT_FLICK_RIGHT = 903,
	ACT_SPINAROUND = 904,
	ACT_PREP_TO_FIRE = 905,
	ACT_FIRE = 906,
	ACT_FIRE_RECOVER = 907,
	ACT_SPRAY = 908,
	ACT_PREP_EXPLODE = 909,
	ACT_EXPLODE = 910,
	ACT_SCRIPT_CUSTOM_0 = 911,
	ACT_SCRIPT_CUSTOM_1 = 912,
	ACT_SCRIPT_CUSTOM_2 = 913,
	ACT_SCRIPT_CUSTOM_3 = 914,
	ACT_SCRIPT_CUSTOM_4 = 915,
	ACT_SCRIPT_CUSTOM_5 = 916,
	ACT_SCRIPT_CUSTOM_6 = 917,
	ACT_SCRIPT_CUSTOM_7 = 918,
	ACT_SCRIPT_CUSTOM_8 = 919,
	ACT_SCRIPT_CUSTOM_9 = 920,
	ACT_SCRIPT_CUSTOM_10 = 921,
	ACT_SCRIPT_CUSTOM_11 = 922,
	ACT_SCRIPT_CUSTOM_12 = 923,
	ACT_SCRIPT_CUSTOM_13 = 924,
	ACT_SCRIPT_CUSTOM_14 = 925,
	ACT_SCRIPT_CUSTOM_15 = 926,
	ACT_SCRIPT_CUSTOM_16 = 927,
	ACT_SCRIPT_CUSTOM_17 = 928,
	ACT_SCRIPT_CUSTOM_18 = 929,
	ACT_SCRIPT_CUSTOM_19 = 930,
	ACT_SCRIPT_CUSTOM_20 = 931,
	ACT_SCRIPT_CUSTOM_21 = 932,
	ACT_SCRIPT_CUSTOM_22 = 933,
	ACT_SCRIPT_CUSTOM_23 = 934,
	ACT_SCRIPT_CUSTOM_24 = 935,
	ACT_SCRIPT_CUSTOM_25 = 936,
	ACT_SCRIPT_CUSTOM_26 = 937,
	ACT_SCRIPT_CUSTOM_27 = 938,
	ACT_SCRIPT_CUSTOM_28 = 939,
	ACT_SCRIPT_CUSTOM_29 = 940,
	ACT_SCRIPT_CUSTOM_30 = 941,
	ACT_SCRIPT_CUSTOM_31 = 942,
	ACT_VR_PISTOL_LAST_SHOT = 943,
	ACT_VR_PISTOL_SLIDE_RELEASE = 944,
	ACT_VR_PISTOL_CLIP_OUT_CHAMBERED = 945,
	ACT_VR_PISTOL_CLIP_OUT_SLIDE_BACK = 946,
	ACT_VR_PISTOL_CLIP_IN_CHAMBERED = 947,
	ACT_VR_PISTOL_CLIP_IN_SLIDE_BACK = 948,
	ACT_VR_PISTOL_IDLE_SLIDE_BACK = 949,
	ACT_VR_PISTOL_IDLE_SLIDE_BACK_CLIP_READY = 950,
	ACT_RAGDOLL_RECOVERY_FRONT = 951,
	ACT_RAGDOLL_RECOVERY_BACK = 952,
	ACT_RAGDOLL_RECOVERY_LEFT = 953,
	ACT_RAGDOLL_RECOVERY_RIGHT = 954,
	ACT_GRABBITYGLOVES_GRAB = 955,
	ACT_GRABBITYGLOVES_RELEASE = 956,
	ACT_GRABBITYGLOVES_GRAB_IDLE = 957,
	ACT_GRABBITYGLOVES_ACTIVE = 958,
	ACT_GRABBITYGLOVES_ACTIVE_IDLE = 959,
	ACT_GRABBITYGLOVES_DEACTIVATE = 960,
	ACT_GRABBITYGLOVES_PULL = 961,
	ACT_HEADCRAB_SMOKE_BOMB = 962,
	ACT_HEADCRAB_SPIT = 963,
	ACT_ZOMBIE_TRIP = 964,
	ACT_ZOMBIE_LUNGE = 965,
	ACT_NEUTRAL_REF_POSE = 966,
	ACT_ANTLION_SCUTTLE_FORWARD = 967,
	ACT_ANTLION_SCUTTLE_BACK = 968,
	ACT_ANTLION_SCUTTLE_LEFT = 969,
	ACT_ANTLION_SCUTTLE_RIGHT = 970,
	ACT_VR_PISTOL_EMPTY_CLIP_IN_SLIDE_BACK = 971,
	ACT_VR_SHOTGUN_IDLE = 972,
	ACT_VR_SHOTGUN_OPEN_CHAMBER = 973,
	ACT_VR_SHOTGUN_RELOAD_1 = 974,
	ACT_VR_SHOTGUN_RELOAD_2 = 975,
	ACT_VR_SHOTGUN_RELOAD_3 = 976,
	ACT_VR_SHOTGUN_CLOSE_CHAMBER = 977,
	ACT_VR_SHOTGUN_TRIGGER_SQUEEZE = 978,
	ACT_VR_SHOTGUN_SHOOT = 979,
	ACT_VR_SHOTGUN_SLIDE_BACK = 980,
	ACT_VR_SHOTGUN_SLIDE_FORWARD = 981,
	ACT_VR_PISTOL_LONG_CLIP_IN_CHAMBERED = 982,
	ACT_VR_PISTOL_LONG_CLIP_IN_SLIDE_BACK = 983,
	ACT_VR_PISTOL_BURST_TOGGLE = 984,
	ACT_VR_PISTOL_LOW_KICK = 985,
	ACT_VR_PISTOL_BURST_ATTACK = 986,
	ACT_VR_SHOTGUN_GRENADE_TWIST = 987
}

declare const enum ThreeState_t {
	TRS_FALSE = 0,
	TRS_TRUE = 1,
	TRS_NONE = 2
}

declare const enum TrainOrientationType_t {
	TrainOrientation_Fixed = 0,
	TrainOrientation_AtPathTracks = 1,
	TrainOrientation_LinearBlend = 2,
	TrainOrientation_EaseInEaseOut = 3
}

declare const enum AnimVrFingerSplay_t {
	AnimVrFingerSplay_Thumb_Index = 0,
	AnimVrFingerSplay_Index_Middle = 1,
	AnimVrFingerSplay_Middle_Ring = 2,
	AnimVrFingerSplay_Ring_Pinky = 3
}

declare const enum explosion_t {
	EXPLOSION_DEFAULT = 0,
	EXPLOSION_GRENADE = 1,
	EXPLOSION_MOLOTOV = 2,
	EXPLOSION_FIREWORKS = 3
}

declare const enum ValueRemapperMomentumType_t {
	MomentumType_None = 0,
	MomentumType_Friction = 1,
	MomentumType_SpringTowardSnapValue = 2,
	MomentumType_SpringAwayFromSnapValue = 3
}

declare const enum ValueRemapperHapticsType_t {
	HaticsType_Default = 0,
	HaticsType_None = 1
}

declare const enum quest_hud_types_t {
	QUEST_HUD_TYPE_DEFAULT = 0,
	QUEST_HUD_TYPE_GOLD = 1,
	QUEST_HUD_TYPE_ATTACK = 2,
	QUEST_HUD_TYPE_DEFEND = 3,
	QUEST_NUM_HUD_TYPES = 4
}

declare const enum ParticleFloatRandomMode_t {
	PF_RANDOM_MODE_INVALID = -1,
	PF_RANDOM_MODE_CONSTANT = 0,
	PF_RANDOM_MODE_VARYING = 1,
	PF_RANDOM_MODE_COUNT = 2
}

declare const enum DamageCategory_t {
	DOTA_DAMAGE_CATEGORY_SPELL = 0,
	DOTA_DAMAGE_CATEGORY_ATTACK = 1
}

declare const enum AnimNodeNetworkMode {
	ServerAuthoritative = 0,
	ClientSimulate = 1
}

declare const enum SteamUGCMatchingUGCType {
	Items = 0,
	Items_Mtx = 1,
	Items_ReadyToUse = 2,
	Collections = 3,
	Artwork = 4,
	Videos = 5,
	Screenshots = 6,
	AllGuides = 7,
	WebGuides = 8,
	IntegratedGuides = 9,
	UsableInGame = 10,
	ControllerBindings = 11,
	GameManagedItems = 12,
	All = -1
}

declare const enum navproperties_t {
	NAV_IGNORE = 1
}

declare const enum GlobalIlluminationMethod_t {
	GLOBAL_ILLUMINATION_NONE = 0,
	GLOBAL_ILLUMINATION_BAKE = 1,
	GLOBAL_ILLUMINATION_AMBIENT_OCCLUSION = 2,
	GLOBAL_ILLUMINATION_REALTIME_RADIOSITY = 3
}

declare const enum RenderMeshFlexControllerRemapType_t {
	FLEXCONTROLLER_REMAP_PASSTHRU = 0,
	FLEXCONTROLLER_REMAP_2WAY = 1,
	FLEXCONTROLLER_REMAP_NWAY = 2,
	FLEXCONTROLLER_REMAP_EYELID = 3
}

declare const enum Explosions {
	expRandom = 0,
	expDirected = 1,
	expUsePrecise = 2
}

declare const enum DOTAProjectileAttachment_t {
	DOTA_PROJECTILE_ATTACHMENT_NONE = 0,
	DOTA_PROJECTILE_ATTACHMENT_ATTACK_1 = 1,
	DOTA_PROJECTILE_ATTACHMENT_ATTACK_2 = 2,
	DOTA_PROJECTILE_ATTACHMENT_HITLOCATION = 3,
	DOTA_PROJECTILE_ATTACHMENT_ATTACK_3 = 4,
	DOTA_PROJECTILE_ATTACHMENT_ATTACK_4 = 5,
	DOTA_PROJECTILE_ATTACHMENT_LAST = 6
}

declare const enum ChoiceChangeMethod {
	OnReset = 0,
	OnCycleEnd = 1,
	OnResetOrCycleEnd = 2
}

declare const enum PropDoorRotatingSpawnPos_t {
	DOOR_SPAWN_CLOSED = 0,
	DOOR_SPAWN_OPEN_FORWARD = 1,
	DOOR_SPAWN_OPEN_BACK = 2,
	DOOR_SPAWN_AJAR = 3
}

declare const enum Touch_t {
	touch_none = 0,
	touch_player_only = 1,
	touch_npc_only = 2,
	touch_player_or_npc = 3,
	touch_player_or_npc_or_physicsprop = 4
}

declare const enum DOTAInventoryFlags_t {
	DOTA_INVENTORY_ALLOW_NONE = 0,
	DOTA_INVENTORY_ALLOW_MAIN = 1,
	DOTA_INVENTORY_ALLOW_STASH = 2,
	DOTA_INVENTORY_ALLOW_DROP_ON_GROUND = 4,
	DOTA_INVENTORY_ALLOW_DROP_AT_FOUNTAIN = 8,
	DOTA_INVENTORY_LIMIT_DROP_ON_GROUND = 16,
	DOTA_INVENTORY_ALL_ACCESS = 3
}

declare const enum DotaDefaultUIElement_t {
	DOTA_DEFAULT_UI_INVALID = -1,
	DOTA_DEFAULT_UI_TOP_TIMEOFDAY = 0,
	DOTA_DEFAULT_UI_TOP_HEROES = 1,
	DOTA_DEFAULT_UI_FLYOUT_SCOREBOARD = 2,
	DOTA_DEFAULT_UI_ACTION_PANEL = 3,
	DOTA_DEFAULT_UI_ACTION_MINIMAP = 4,
	DOTA_DEFAULT_UI_INVENTORY_PANEL = 5,
	DOTA_DEFAULT_UI_INVENTORY_SHOP = 6,
	DOTA_DEFAULT_UI_INVENTORY_ITEMS = 7,
	DOTA_DEFAULT_UI_INVENTORY_QUICKBUY = 8,
	DOTA_DEFAULT_UI_INVENTORY_COURIER = 9,
	DOTA_DEFAULT_UI_INVENTORY_PROTECT = 10,
	DOTA_DEFAULT_UI_INVENTORY_GOLD = 11,
	DOTA_DEFAULT_UI_SHOP_SUGGESTEDITEMS = 12,
	DOTA_DEFAULT_UI_HERO_SELECTION_TEAMS = 13,
	DOTA_DEFAULT_UI_HERO_SELECTION_GAME_NAME = 14,
	DOTA_DEFAULT_UI_HERO_SELECTION_CLOCK = 15,
	DOTA_DEFAULT_UI_TOP_MENU_BUTTONS = 16,
	DOTA_DEFAULT_UI_TOP_BAR_BACKGROUND = 17,
	DOTA_DEFAULT_UI_TOP_BAR_RADIANT_TEAM = 18,
	DOTA_DEFAULT_UI_TOP_BAR_DIRE_TEAM = 19,
	DOTA_DEFAULT_UI_TOP_BAR_SCORE = 20,
	DOTA_DEFAULT_UI_ENDGAME = 21,
	DOTA_DEFAULT_UI_ENDGAME_CHAT = 22,
	DOTA_DEFAULT_UI_QUICK_STATS = 23,
	DOTA_DEFAULT_UI_PREGAME_STRATEGYUI = 24,
	DOTA_DEFAULT_UI_KILLCAM = 25,
	DOTA_DEFAULT_UI_TOP_BAR = 26,
	DOTA_DEFAULT_UI_ELEMENT_COUNT = 27
}

declare const enum MeshTranslucencyType_t {
	MESH_TRANSLUCENCY_FULLY_OPAQUE = 0,
	MESH_TRANSLUCENCY_PARTIALLY_ALPHA_BLENDED = 1,
	MESH_TRANSLUCENCY_FULLY_ALPHA_BLENDED = 2
}

declare const enum SignonState_t {
	SIGNONSTATE_NONE = 0,
	SIGNONSTATE_CHALLENGE = 1,
	SIGNONSTATE_CONNECTED = 2,
	SIGNONSTATE_NEW = 3,
	SIGNONSTATE_PRESPAWN = 4,
	SIGNONSTATE_SPAWN = 5,
	SIGNONSTATE_FULL = 6,
	SIGNONSTATE_CHANGELEVEL = 7
}

declare const enum WeaponTexture_t {
	WEAPON_TEXTURE_ICON_ACTIVE = 0,
	WEAPON_TEXTURE_ICON_INACTIVE = 1,
	WEAPON_TEXTURE_ICON_AMMO = 2,
	WEAPON_TEXTURE_ICON_AMMO2 = 3,
	WEAPON_TEXTURE_ICON_CROSSHAIR = 4,
	WEAPON_TEXTURE_ICON_AUTOAIM = 5,
	WEAPON_TEXTURE_ICON_ZOOMED_CROSSHAIR = 6,
	WEAPON_TEXTURE_ICON_ZOOMED_AUTOAIM = 7,
	WEAPON_TEXTURE_ICON_SMALL = 8
}

declare const enum EDOTASpecialBonusOperation {
	SPECIAL_BONUS_ADD = 0,
	SPECIAL_BONUS_MULTIPLY = 1,
	SPECIAL_BONUS_SUBTRACT = 2
}

declare const enum DOTAAbilitySpeakTrigger_t {
	DOTA_ABILITY_SPEAK_START_ACTION_PHASE = 0,
	DOTA_ABILITY_SPEAK_CAST = 1
}

declare const enum HierarchyType_t {
	HIERARCHY_NONE = 0,
	HIERARCHY_BONE_MERGE = 1,
	HIERARCHY_ATTACHMENT = 2,
	HIERARCHY_ABSORIGIN = 3,
	HIERARCHY_BONE = 4,
	HIERARCHY_TYPE_COUNT = 5
}

declare const enum BoneMaskBlendSpace {
	BlendSpace_Parent = 0,
	BlendSpace_Model = 1,
	BlendSpace_Model_RotationOnly = 2
}

declare const enum quest_text_replace_values_t {
	QUEST_TEXT_REPLACE_VALUE_CURRENT_VALUE = 0,
	QUEST_TEXT_REPLACE_VALUE_TARGET_VALUE = 1,
	QUEST_TEXT_REPLACE_VALUE_ROUND = 2,
	QUEST_TEXT_REPLACE_VALUE_REWARD = 3,
	QUEST_NUM_TEXT_REPLACE_VALUES = 4
}

declare const enum modifierremove {
	DOTA_BUFF_REMOVE_ALL = 0,
	DOTA_BUFF_REMOVE_ENEMY = 1,
	DOTA_BUFF_REMOVE_ALLY = 2
}

declare const enum DoorState_t {
	DOOR_STATE_CLOSED = 0,
	DOOR_STATE_OPENING = 1,
	DOOR_STATE_OPEN = 2,
	DOOR_STATE_CLOSING = 3,
	DOOR_STATE_AJAR = 4
}

declare const enum AnimVectorSource {
	MoveDirection = 0,
	FacingDirection = 1,
	LookDirection = 2,
	VectorParameter = 3,
	WayPointDirection = 4,
	WayPointFacingDirection = 5,
	TargetMoveDirection = 6,
	Acceleration = 7,
	SlopeNormal = 8,
	LookTarget = 9,
	WayPointPosition = 10,
	GoalPosition = 11,
	GoalFacingDirection = 12
}

declare const enum fieldtype_t {
	FIELD_VOID = 0,
	FIELD_FLOAT32 = 1,
	FIELD_STRING = 2,
	FIELD_VECTOR = 3,
	FIELD_QUATERNION = 4,
	FIELD_INT32 = 5,
	FIELD_BOOLEAN = 6,
	FIELD_INT16 = 7,
	FIELD_CHARACTER = 8,
	FIELD_COLOR32 = 9,
	FIELD_EMBEDDED = 10,
	FIELD_CUSTOM = 11,
	FIELD_CLASSPTR = 12,
	FIELD_EHANDLE = 13,
	FIELD_POSITION_VECTOR = 14,
	FIELD_TIME = 15,
	FIELD_TICK = 16,
	FIELD_SOUNDNAME = 17,
	FIELD_INPUT = 18,
	FIELD_FUNCTION = 19,
	FIELD_VMATRIX = 20,
	FIELD_VMATRIX_WORLDSPACE = 21,
	FIELD_MATRIX3X4_WORLDSPACE = 22,
	FIELD_INTERVAL = 23,
	FIELD_UNUSED = 24,
	FIELD_VECTOR2D = 25,
	FIELD_INT64 = 26,
	FIELD_VECTOR4D = 27,
	FIELD_RESOURCE = 28,
	FIELD_TYPEUNKNOWN = 29,
	FIELD_CSTRING = 30,
	FIELD_HSCRIPT = 31,
	FIELD_VARIANT = 32,
	FIELD_UINT64 = 33,
	FIELD_FLOAT64 = 34,
	FIELD_POSITIVEINTEGER_OR_NULL = 35,
	FIELD_HSCRIPT_NEW_INSTANCE = 36,
	FIELD_UINT32 = 37,
	FIELD_UTLSTRINGTOKEN = 38,
	FIELD_QANGLE = 39,
	FIELD_NETWORK_ORIGIN_CELL_QUANTIZED_VECTOR = 40,
	FIELD_HMATERIAL = 41,
	FIELD_HMODEL = 42,
	FIELD_NETWORK_QUANTIZED_VECTOR = 43,
	FIELD_NETWORK_QUANTIZED_FLOAT = 44,
	FIELD_DIRECTION_VECTOR_WORLDSPACE = 45,
	FIELD_QANGLE_WORLDSPACE = 46,
	FIELD_QUATERNION_WORLDSPACE = 47,
	FIELD_HSCRIPT_LIGHTBINDING = 48,
	FIELD_V8_VALUE = 49,
	FIELD_V8_OBJECT = 50,
	FIELD_V8_ARRAY = 51,
	FIELD_V8_CALLBACK_INFO = 52,
	FIELD_UTLSTRING = 53,
	FIELD_NETWORK_ORIGIN_CELL_QUANTIZED_POSITION_VECTOR = 54,
	FIELD_HRENDERTEXTURE = 55,
	FIELD_HPARTICLESYSTEMDEFINITION = 56,
	FIELD_UINT8 = 57,
	FIELD_UINT16 = 58,
	FIELD_CTRANSFORM = 59,
	FIELD_CTRANSFORM_WORLDSPACE = 60,
	FIELD_HPOSTPROCESSING = 61,
	FIELD_MATRIX3X4 = 62,
	FIELD_TYPECOUNT = 63
}

declare const enum PlayerOrderIssuer_t {
	DOTA_ORDER_ISSUER_SELECTED_UNITS = 0,
	DOTA_ORDER_ISSUER_CURRENT_UNIT_ONLY = 1,
	DOTA_ORDER_ISSUER_HERO_ONLY = 2,
	DOTA_ORDER_ISSUER_PASSED_UNIT_ONLY = 3
}

declare const enum SPELL_DISPELLABLE_TYPES {
	SPELL_DISPELLABLE_NONE = 0,
	SPELL_DISPELLABLE_YES_STRONG = 1,
	SPELL_DISPELLABLE_YES = 2,
	SPELL_DISPELLABLE_NO = 3
}

declare const enum DOTAMinimapEvent_t {
	DOTA_MINIMAP_EVENT_ANCIENT_UNDER_ATTACK = 2,
	DOTA_MINIMAP_EVENT_BASE_UNDER_ATTACK = 4,
	DOTA_MINIMAP_EVENT_BASE_GLYPHED = 8,
	DOTA_MINIMAP_EVENT_TEAMMATE_UNDER_ATTACK = 16,
	DOTA_MINIMAP_EVENT_TEAMMATE_TELEPORTING = 32,
	DOTA_MINIMAP_EVENT_TEAMMATE_DIED = 64,
	DOTA_MINIMAP_EVENT_TUTORIAL_TASK_ACTIVE = 128,
	DOTA_MINIMAP_EVENT_TUTORIAL_TASK_FINISHED = 256,
	DOTA_MINIMAP_EVENT_HINT_LOCATION = 512,
	DOTA_MINIMAP_EVENT_ENEMY_TELEPORTING = 1024,
	DOTA_MINIMAP_EVENT_CANCEL_TELEPORTING = 2048,
	DOTA_MINIMAP_EVENT_RADAR = 4096,
	DOTA_MINIMAP_EVENT_RADAR_TARGET = 8192
}

declare const enum LessonPanelLayoutFileTypes_t {
	LAYOUT_HAND_DEFAULT = 0,
	LAYOUT_WORLD_DEFAULT = 1,
	LAYOUT_CUSTOM = 2
}

declare const enum EntityIOTargetType_t {
	ENTITY_IO_TARGET_INVALID = -1,
	ENTITY_IO_TARGET_CLASSNAME = 0,
	ENTITY_IO_TARGET_CLASSNAME_DERIVES_FROM = 1,
	ENTITY_IO_TARGET_ENTITYNAME = 2,
	ENTITY_IO_TARGET_CONTAINS_COMPONENT = 3,
	ENTITY_IO_TARGET_SPECIAL_ACTIVATOR = 4,
	ENTITY_IO_TARGET_SPECIAL_CALLER = 5,
	ENTITY_IO_TARGET_EHANDLE = 6,
	ENTITY_IO_TARGET_ENTITYNAME_OR_CLASSNAME = 7
}

declare const enum PetCoopStates_t {
	COOP_IGNORE = 0,
	COOPTELEPORT_START_PERFORMING = 1,
	COOPTELEPORT_PLAY_ENDANIM = 2,
	COOPTELEPORT_PLAY_EXITANIM = 3,
	COOP_WARD_OBSERVER = 4,
	COOP_WARD_SENTRY = 5
}

declare const enum gender_t {
	GENDER_NONE = 0,
	GENDER_MALE = 1,
	GENDER_FEMALE = 2,
	GENDER_NAMVET = 3,
	GENDER_TEENGIRL = 4,
	GENDER_BIKER = 5,
	GENDER_MANAGER = 6,
	GENDER_GAMBLER = 7,
	GENDER_PRODUCER = 8,
	GENDER_COACH = 9,
	GENDER_MECHANIC = 10,
	GENDER_CEDA = 11,
	GENDER_CRAWLER = 12,
	GENDER_UNDISTRACTABLE = 13,
	GENDER_FALLEN = 14,
	GENDER_RIOT_CONTROL = 15,
	GENDER_CLOWN = 16,
	GENDER_JIMMY = 17,
	GENDER_HOSPITAL_PATIENT = 18,
	GENDER_BRIDE = 19,
	GENDER_LAST = 20
}

declare const enum SteamUniverse {
	Invalid = 0,
	Internal = 3,
	Dev = 4,
	Beta = 2,
	Public = 1
}

declare const enum DOTACustomHeroPickRulesPhase_t {
	PHASE_Ban = 0,
	PHASE_Pick = 1
}

declare const enum DOTA_HOLDOUT_TOWER_TYPE {
	DOTA_HOLDOUT_TOWER_NONE = 0,
	DOTA_HOLDOUT_TOWER_LIGHTFAST = 1,
	DOTA_HOLDOUT_TOWER_HEAVYSLOW = 2,
	DOTA_HOLDOUT_TOWER_REDUCESPEED = 3,
	DOTA_HOLDOUT_TOWER_COUNT = 4
}

declare const enum PointWorldTextReorientMode_t {
	POINT_WORLD_TEXT_REORIENT_NONE = 0,
	POINT_WORLD_TEXT_REORIENT_AROUND_UP = 1
}

declare const enum DOTA_PURGE_FLAGS {
	DOTA_PURGE_FLAG_NONE = 0,
	DOTA_PURGE_FLAG_REMOVE_BUFFS = 2,
	DOTA_PURGE_FLAG_REMOVE_DEBUFFS = 4,
	DOTA_PURGE_FLAG_REMOVE_STUNS = 8,
	DOTA_PURGE_FLAG_REMOVE_EXCEPTIONS = 16,
	DOTA_PURGE_FLAG_REMOVE_THIS_FRAME_ONLY = 32
}

declare const enum SosActionSortType_t {
	SOS_SORTTYPE_HIGHEST = 0,
	SOS_SORTTYPE_LOWEST = 1
}

declare const enum NPC_STATE {
	NPC_STATE_INVALID = -1,
	NPC_STATE_NONE = 0,
	NPC_STATE_IDLE = 1,
	NPC_STATE_ALERT = 2,
	NPC_STATE_COMBAT = 3,
	NPC_STATE_SCRIPT = 4,
	NPC_STATE_PLAYDEAD = 5,
	NPC_STATE_PRONE = 6,
	NPC_STATE_DEAD = 7
}

declare const enum AnimVRHandMotionRange_t {
	MotionRange_WithController = 0,
	MotionRange_WithoutController = 1
}

declare const enum ResourceStructFlags_t {
	STRUCT_HAS_VTABLE = 1,
	STRUCT_TREE_REQUIRES_SCATTER = 2,
	STRUCT_TREE_REQUIRES_CONSTRUCTOR = 4,
	STRUCT_TREE_REQUIRES_DESTRUCTOR = 8,
	STRUCT_TREE_REQUIRES_EXT_REFERENCES = 16,
	STRUCT_TREE_REQUIRES_UNUSED = 32,
	STRUCT_FLAGS_MAX = 32
}

declare const enum WorldTextPanelHorizontalAlign_t {
	WORLDTEXT_HORIZONTAL_ALIGN_LEFT = 0,
	WORLDTEXT_HORIZONTAL_ALIGN_CENTER = 1,
	WORLDTEXT_HORIZONTAL_ALIGN_RIGHT = 2
}

declare const enum DOTA_UNIT_TARGET_TYPE {
	DOTA_UNIT_TARGET_NONE = 0,
	DOTA_UNIT_TARGET_HERO = 1,
	DOTA_UNIT_TARGET_CREEP = 2,
	DOTA_UNIT_TARGET_BUILDING = 4,
	DOTA_UNIT_TARGET_COURIER = 16,
	DOTA_UNIT_TARGET_OTHER = 32,
	DOTA_UNIT_TARGET_TREE = 64,
	DOTA_UNIT_TARGET_CUSTOM = 128,
	DOTA_UNIT_TARGET_BASIC = 18,
	DOTA_UNIT_TARGET_ALL = 55
}

declare const enum PetGroundType_t {
	PET_GROUND_NONE = 0,
	PET_GROUND_GRID = 1,
	PET_GROUND_PLANE = 2
}

declare const enum PortraitDisplayMode_t {
	PORTRAIT_DISPLAY_MODE_INVALID = -1,
	PORTRAIT_DISPLAY_MODE_LOADOUT = 0,
	PORTRAIT_DISPLAY_MODE_LOADOUT_DIRE = 1,
	PORTRAIT_DISPLAY_MODE_LOADOUT_SMALL = 2,
	PORTRAIT_DISPLAY_MODE_TREASURE_SMALL = 3
}

declare const enum eLogicalHandType {
	LOGICAL_HAND_TYPE_UNKNOWN = -1,
	LOGICAL_HAND_TYPE_PRIMARY_HAND = 0,
	LOGICAL_HAND_TYPE_OFF_HAND = 1,
	LOGICAL_HAND_TYPE_COUNT = 2
}

declare const enum InputLayoutVariation_t {
	INPUT_LAYOUT_VARIATION_DEFAULT = 0,
	INPUT_LAYOUT_VARIATION_STREAM1_MAT3X4 = 1,
	INPUT_LAYOUT_VARIATION_STREAM1_INSTANCEID = 2,
	INPUT_LAYOUT_VARIATION_STREAM1_INSTANCEID_LIGHTMAP_PARAMS = 3,
	INPUT_LAYOUT_VARIATION_STREAM1_INSTANCEID_MORPH_VERT_ID = 4,
	INPUT_LAYOUT_VARIATION_MAX = 5
}

declare const enum BlendKeyType {
	BlendKey_UserValue = 0,
	BlendKey_Velocity = 1,
	BlendKey_Distance = 2,
	BlendKey_RemainingDistance = 3
}

declare const enum VertJustification_e {
	VERT_JUSTIFICATION_TOP = 0,
	VERT_JUSTIFICATION_CENTER = 1,
	VERT_JUSTIFICATION_BOTTOM = 2,
	VERT_JUSTIFICATION_NONE = 3
}

declare const enum TakeHealthOptions_t {
	TH_IGNORE_MAX_HITPOINTS = 1
}

declare const enum MoveType_t {
	MOVETYPE_NONE = 0,
	MOVETYPE_ISOMETRIC = 1,
	MOVETYPE_WALK = 2,
	MOVETYPE_STEP = 3,
	MOVETYPE_FLY = 4,
	MOVETYPE_FLYGRAVITY = 5,
	MOVETYPE_VPHYSICS = 6,
	MOVETYPE_PUSH = 7,
	MOVETYPE_NOCLIP = 8,
	MOVETYPE_LADDER = 9,
	MOVETYPE_OBSERVER = 10,
	MOVETYPE_CUSTOM = 11,
	MOVETYPE_LAST = 11,
	MOVETYPE_MAX_BITS = 4
}

declare const enum AnimVRFinger_t {
	AnimVrFinger_Thumb = 0,
	AnimVrFinger_Index = 1,
	AnimVrFinger_Middle = 2,
	AnimVrFinger_Ring = 3,
	AnimVrFinger_Pinky = 4
}

declare const enum LatchDirtyPermission_t {
	LATCH_DIRTY_DISALLOW = 0,
	LATCH_DIRTY_SERVER_CONTROLLED = 1,
	LATCH_DIRTY_CLIENT_SIMULATED = 2,
	LATCH_DIRTY_PREDICTION = 3,
	LATCH_DIRTY_FRAMESIMULATE = 4,
	LATCH_DIRTY_PARTICLE_SIMULATE = 5
}

declare const enum AbilityLearnResult_t {
	ABILITY_CAN_BE_UPGRADED = 0,
	ABILITY_CANNOT_BE_UPGRADED_NOT_UPGRADABLE = 1,
	ABILITY_CANNOT_BE_UPGRADED_AT_MAX = 2,
	ABILITY_CANNOT_BE_UPGRADED_REQUIRES_LEVEL = 3,
	ABILITY_NOT_LEARNABLE = 4
}

declare const enum PostProcessParameterNames_t {
	PPPN_FADE_TIME = 0,
	PPPN_LOCAL_CONTRAST_STRENGTH = 1,
	PPPN_LOCAL_CONTRAST_EDGE_STRENGTH = 2,
	PPPN_VIGNETTE_START = 3,
	PPPN_VIGNETTE_END = 4,
	PPPN_VIGNETTE_BLUR_STRENGTH = 5,
	PPPN_FADE_TO_BLACK_STRENGTH = 6,
	PPPN_DEPTH_BLUR_FOCAL_DISTANCE = 7,
	PPPN_DEPTH_BLUR_STRENGTH = 8,
	PPPN_SCREEN_BLUR_STRENGTH = 9,
	PPPN_FILM_GRAIN_STRENGTH = 10,
	PPPN_TOP_VIGNETTE_STRENGTH = 11,
	POST_PROCESS_PARAMETER_COUNT = 12
}

declare const enum HorizJustification_e {
	HORIZ_JUSTIFICATION_LEFT = 0,
	HORIZ_JUSTIFICATION_CENTER = 1,
	HORIZ_JUSTIFICATION_RIGHT = 2,
	HORIZ_JUSTIFICATION_NONE = 3
}

declare const enum DOTAPortraitEnvironmentType_t {
	DOTA_PORTRAIT_ENVIRONMENT_INVALID = -1,
	DOTA_PORTRAIT_ENVIRONMENT_DEFAULT = 0,
	DOTA_PORTRAIT_ENVIRONMENT_FULL_BODY = 1,
	DOTA_PORTRAIT_ENVIRONMENT_CARD = 2,
	DOTA_PORTRAIT_ENVIRONMENT_VERSUS_RADIANT = 3,
	DOTA_PORTRAIT_ENVIRONMENT_VERSUS_DIRE = 4,
	DOTA_PORTRAIT_ENVIRONMENT_WEBPAGE = 5,
	DOTA_PORTRAIT_ENVIRONMENT_FULL_BODY_RIGHT_SIDE = 6,
	DOTA_PORTRAIT_ENVIRONMENT_TYPE_COUNT = 7
}

declare const enum PointTemplateClientOnlyEntityBehavior_t {
	CREATE_FOR_CURRENTLY_CONNECTED_CLIENTS_ONLY = 0,
	CREATE_FOR_CLIENTS_WHO_CONNECT_LATER = 1
}

declare const enum DOTADamageFlag_t {
	DOTA_DAMAGE_FLAG_NONE = 0,
	DOTA_DAMAGE_FLAG_IGNORES_MAGIC_ARMOR = 1,
	DOTA_DAMAGE_FLAG_IGNORES_PHYSICAL_ARMOR = 2,
	DOTA_DAMAGE_FLAG_BYPASSES_INVULNERABILITY = 4,
	DOTA_DAMAGE_FLAG_BYPASSES_BLOCK = 8,
	DOTA_DAMAGE_FLAG_REFLECTION = 16,
	DOTA_DAMAGE_FLAG_HPLOSS = 32,
	DOTA_DAMAGE_FLAG_NO_DIRECTOR_EVENT = 64,
	DOTA_DAMAGE_FLAG_NON_LETHAL = 128,
	DOTA_DAMAGE_FLAG_USE_COMBAT_PROFICIENCY = 256,
	DOTA_DAMAGE_FLAG_NO_DAMAGE_MULTIPLIERS = 512,
	DOTA_DAMAGE_FLAG_NO_SPELL_AMPLIFICATION = 1024,
	DOTA_DAMAGE_FLAG_DONT_DISPLAY_DAMAGE_IF_SOURCE_HIDDEN = 2048,
	DOTA_DAMAGE_FLAG_NO_SPELL_LIFESTEAL = 4096,
	DOTA_DAMAGE_FLAG_PROPERTY_FIRE = 8192
}

declare const enum TimelineCompression_t {
	TIMELINE_COMPRESSION_SUM = 0,
	TIMELINE_COMPRESSION_COUNT_PER_INTERVAL = 1,
	TIMELINE_COMPRESSION_AVERAGE = 2,
	TIMELINE_COMPRESSION_AVERAGE_BLEND = 3,
	TIMELINE_COMPRESSION_TOTAL = 4
}

declare const enum ERoshanSpawnPhase {
	ROSHAN_SPAWN_PHASE_ALIVE = 0,
	ROSHAN_SPAWN_PHASE_BASE_TIMER = 1,
	ROSHAN_SPAWN_PHASE_VISIBLE_TIMER = 2
}

declare const enum attributeprovidertypes_t {
	PROVIDER_GENERIC = 0,
	PROVIDER_WEAPON = 1
}

declare const enum DOTAUnitMoveCapability_t {
	DOTA_UNIT_CAP_MOVE_NONE = 0,
	DOTA_UNIT_CAP_MOVE_GROUND = 1,
	DOTA_UNIT_CAP_MOVE_FLY = 2
}

declare const enum DOTA_MOTION_CONTROLLER_PRIORITY {
	DOTA_MOTION_CONTROLLER_PRIORITY_LOWEST = 0,
	DOTA_MOTION_CONTROLLER_PRIORITY_LOW = 1,
	DOTA_MOTION_CONTROLLER_PRIORITY_MEDIUM = 2,
	DOTA_MOTION_CONTROLLER_PRIORITY_HIGH = 3,
	DOTA_MOTION_CONTROLLER_PRIORITY_HIGHEST = 4
}

declare const enum DOTAUnitAttackCapability_t {
	DOTA_UNIT_CAP_NO_ATTACK = 0,
	DOTA_UNIT_CAP_MELEE_ATTACK = 1,
	DOTA_UNIT_CAP_RANGED_ATTACK = 2,
	DOTA_UNIT_CAP_RANGED_ATTACK_DIRECTIONAL = 4,
	DOTA_UNIT_ATTACK_CAPABILITY_BIT_COUNT = 3
}

declare const enum attackfail {
	DOTA_ATTACK_RECORD_FAIL_NO = 0,
	DOTA_ATTACK_RECORD_FAIL_TERRAIN_MISS = 1,
	DOTA_ATTACK_RECORD_FAIL_SOURCE_MISS = 2,
	DOTA_ATTACK_RECORD_FAIL_TARGET_EVADED = 3,
	DOTA_ATTACK_RECORD_FAIL_TARGET_INVULNERABLE = 4,
	DOTA_ATTACK_RECORD_FAIL_TARGET_OUT_OF_RANGE = 5,
	DOTA_ATTACK_RECORD_CANNOT_FAIL = 6,
	DOTA_ATTACK_RECORD_FAIL_BLOCKED_BY_OBSTRUCTION = 7
}

declare const enum ControlValue {
	ControlValue_MoveHeading = 0,
	ControlValue_MoveSpeed = 1,
	ControlValue_FacingHeading = 2,
	ControlValue_LookHeading = 3,
	ControlValue_LookPitch = 4,
	ControlValue_WayPointHeading = 5,
	ControlValue_WayPointFacing = 6,
	ControlValue_WayPointDistance = 7,
	ControlValue_TotalTranslation_SourceState = 8,
	ControlValue_TotalTranslation_TargetState = 9,
	ControlValue_RemainingTranslation_SourceState = 10,
	ControlValue_RemainingTranslation_TargetState = 11,
	ControlValue_MoveVsFacingDelta = 12,
	ControlValue_SourceStateBlendWeight = 13,
	ControlValue_TargetStateBlendWeight = 14,
	ControlValue_TargetMoveHeading = 15,
	ControlValue_TargetMoveSpeed = 16,
	ControlValue_AccelerationHeading = 17,
	ControlValue_AccelerationSpeed = 18,
	ControlValue_SlopeHeading = 19,
	ControlValue_SlopeAngle = 20,
	ControlValue_GoalDistance = 21,
	ControlValue_AccelerationLeftRight = 22,
	ControlValue_AccelerationFrontBack = 23,
	ControlValue_RootMotionSpeed = 24,
	ControlValue_RootMotionTurnSpeed = 25,
	ControlValue_MoveHeadingRelativeToLookHeading = 26,
	ControlValue_FingerCurl_Thumb = 27,
	ControlValue_FingerCurl_Index = 28,
	ControlValue_FingerCurl_Middle = 29,
	ControlValue_FingerCurl_Ring = 30,
	ControlValue_FingerCurl_Pinky = 31,
	ControlValue_FingerSplay_Thumb_Index = 32,
	ControlValue_FingerSplay_Index_Middle = 33,
	ControlValue_FingerSplay_Middle_Ring = 34,
	ControlValue_FingerSplay_Ring_Pinky = 35,
	ControlValue_Count = 36,
	ControlValue_Invalid = 255
}

declare const enum NavAttributeEnum {
	NAV_MESH_CROUCH = 1,
	NAV_MESH_JUMP = 2,
	NAV_MESH_PRECISE = 4,
	NAV_MESH_NO_JUMP = 8,
	NAV_MESH_AVOID = 128,
	NAV_MESH_STAIRS = 4096,
	NAV_MESH_NO_MERGE = 8192,
	NAV_MESH_OBSTACLE_TOP = 16384,
	NAV_MESH_CLIFF = 32768
}

declare const enum RenderBufferFlags_t {
	RENDER_BUFFER_USAGE_VERTEX_BUFFER = 1,
	RENDER_BUFFER_USAGE_INDEX_BUFFER = 2,
	RENDER_BUFFER_USAGE_SHADER_RESOURCE = 4,
	RENDER_BUFFER_USAGE_UNORDERED_ACCESS = 8,
	RENDER_BUFFER_BYTEADDRESS_BUFFER = 16,
	RENDER_BUFFER_STRUCTURED_BUFFER = 32,
	RENDER_BUFFER_APPEND_CONSUME_BUFFER = 64,
	RENDER_BUFFER_UAV_COUNTER = 128
}

declare const enum DOTA_UNIT_TARGET_FLAGS {
	DOTA_UNIT_TARGET_FLAG_NONE = 0,
	DOTA_UNIT_TARGET_FLAG_RANGED_ONLY = 2,
	DOTA_UNIT_TARGET_FLAG_MELEE_ONLY = 4,
	DOTA_UNIT_TARGET_FLAG_DEAD = 8,
	DOTA_UNIT_TARGET_FLAG_MAGIC_IMMUNE_ENEMIES = 16,
	DOTA_UNIT_TARGET_FLAG_NOT_MAGIC_IMMUNE_ALLIES = 32,
	DOTA_UNIT_TARGET_FLAG_INVULNERABLE = 64,
	DOTA_UNIT_TARGET_FLAG_FOW_VISIBLE = 128,
	DOTA_UNIT_TARGET_FLAG_NO_INVIS = 256,
	DOTA_UNIT_TARGET_FLAG_NOT_ANCIENTS = 512,
	DOTA_UNIT_TARGET_FLAG_PLAYER_CONTROLLED = 1024,
	DOTA_UNIT_TARGET_FLAG_NOT_DOMINATED = 2048,
	DOTA_UNIT_TARGET_FLAG_NOT_SUMMONED = 4096,
	DOTA_UNIT_TARGET_FLAG_NOT_ILLUSIONS = 8192,
	DOTA_UNIT_TARGET_FLAG_NOT_ATTACK_IMMUNE = 16384,
	DOTA_UNIT_TARGET_FLAG_MANA_ONLY = 32768,
	DOTA_UNIT_TARGET_FLAG_CHECK_DISABLE_HELP = 65536,
	DOTA_UNIT_TARGET_FLAG_NOT_CREEP_HERO = 131072,
	DOTA_UNIT_TARGET_FLAG_OUT_OF_WORLD = 262144,
	DOTA_UNIT_TARGET_FLAG_NOT_NIGHTMARED = 524288,
	DOTA_UNIT_TARGET_FLAG_PREFER_ENEMIES = 1048576,
	DOTA_UNIT_TARGET_FLAG_RESPECT_OBSTRUCTIONS = 2097152
}

declare const enum TRAIN_CODE {
	TRAIN_SAFE = 0,
	TRAIN_BLOCKING = 1,
	TRAIN_FOLLOWING = 2
}

declare const enum SosEditItemType_t {
	SOS_EDIT_ITEM_TYPE_SOUNDEVENTS = 0,
	SOS_EDIT_ITEM_TYPE_SOUNDEVENT = 1,
	SOS_EDIT_ITEM_TYPE_LIBRARYSTACKS = 2,
	SOS_EDIT_ITEM_TYPE_STACK = 3,
	SOS_EDIT_ITEM_TYPE_OPERATOR = 4,
	SOS_EDIT_ITEM_TYPE_FIELD = 5
}

declare const enum DOTAScriptInventorySlot_t {
	DOTA_ITEM_SLOT_1 = 0,
	DOTA_ITEM_SLOT_2 = 1,
	DOTA_ITEM_SLOT_3 = 2,
	DOTA_ITEM_SLOT_4 = 3,
	DOTA_ITEM_SLOT_5 = 4,
	DOTA_ITEM_SLOT_6 = 5,
	DOTA_ITEM_SLOT_7 = 6,
	DOTA_ITEM_SLOT_8 = 7,
	DOTA_ITEM_SLOT_9 = 8,
	DOTA_STASH_SLOT_1 = 9,
	DOTA_STASH_SLOT_2 = 10,
	DOTA_STASH_SLOT_3 = 11,
	DOTA_STASH_SLOT_4 = 12,
	DOTA_STASH_SLOT_5 = 13,
	DOTA_STASH_SLOT_6 = 14
}

declare const enum filter_t {
	FILTER_AND = 0,
	FILTER_OR = 1
}

declare const enum subquest_text_replace_values_t {
	SUBQUEST_TEXT_REPLACE_VALUE_CURRENT_VALUE = 0,
	SUBQUEST_TEXT_REPLACE_VALUE_TARGET_VALUE = 1,
	SUBQUEST_NUM_TEXT_REPLACE_VALUES = 2
}

declare const enum SosActionStopType_t {
	SOS_STOPTYPE_NONE = 0,
	SOS_STOPTYPE_TIME = 1,
	SOS_STOPTYPE_OPVAR = 2
}

declare const enum ModelBoneFlexComponent_t {
	MODEL_BONE_FLEX_INVALID = -1,
	MODEL_BONE_FLEX_TX = 0,
	MODEL_BONE_FLEX_TY = 1,
	MODEL_BONE_FLEX_TZ = 2
}

declare const enum ParticleAttachment_t {
	PATTACH_INVALID = -1,
	PATTACH_ABSORIGIN = 0,
	PATTACH_ABSORIGIN_FOLLOW = 1,
	PATTACH_CUSTOMORIGIN = 2,
	PATTACH_CUSTOMORIGIN_FOLLOW = 3,
	PATTACH_POINT = 4,
	PATTACH_POINT_FOLLOW = 5,
	PATTACH_EYES_FOLLOW = 6,
	PATTACH_OVERHEAD_FOLLOW = 7,
	PATTACH_WORLDORIGIN = 8,
	PATTACH_ROOTBONE_FOLLOW = 9,
	PATTACH_RENDERORIGIN_FOLLOW = 10,
	PATTACH_MAIN_VIEW = 11,
	PATTACH_WATERWAKE = 12,
	PATTACH_CENTER_FOLLOW = 13,
	MAX_PATTACH_TYPES = 14
}

declare const enum WeaponProficiency_t {
	WEAPON_PROFICIENCY_POOR = 0,
	WEAPON_PROFICIENCY_AVERAGE = 1,
	WEAPON_PROFICIENCY_GOOD = 2,
	WEAPON_PROFICIENCY_VERY_GOOD = 3,
	WEAPON_PROFICIENCY_PERFECT = 4
}

declare const enum CourierState_t {
	COURIER_STATE_INIT = -1,
	COURIER_STATE_IDLE = 0,
	COURIER_STATE_AT_BASE = 1,
	COURIER_STATE_MOVING = 2,
	COURIER_STATE_DELIVERING_ITEMS = 3,
	COURIER_STATE_RETURNING_TO_BASE = 4,
	COURIER_STATE_DEAD = 5,
	COURIER_NUM_STATES = 6
}

declare const enum FuncDoorSpawnPos_t {
	FUNC_DOOR_SPAWN_CLOSED = 0,
	FUNC_DOOR_SPAWN_OPEN = 1
}

declare const enum DOTA_ITEM_STATE {
	DOTA_ITEM_NEEDS_EQUIPPED = 0,
	DOTA_ITEM_READY = 1
}

declare const enum SolidType_t {
	SOLID_NONE = 0,
	SOLID_BSP = 1,
	SOLID_BBOX = 2,
	SOLID_OBB = 3,
	SOLID_POINT = 5,
	SOLID_VPHYSICS = 6,
	SOLID_CAPSULE = 7,
	SOLID_LAST = 8
}

declare const enum CubeMapFace_t {
	CUBEMAP_FACE_POSITIVE_X = 0,
	CUBEMAP_FACE_NEGATIVE_X = 1,
	CUBEMAP_FACE_POSITIVE_Y = 2,
	CUBEMAP_FACE_NEGATIVE_Y = 3,
	CUBEMAP_FACE_POSITIVE_Z = 4,
	CUBEMAP_FACE_NEGATIVE_Z = 5
}

declare const enum DOTAKeybindCommand_t {
	DOTA_KEYBIND_NONE = 0,
	DOTA_KEYBIND_FIRST = 1,
	DOTA_KEYBIND_CAMERA_UP = 1,
	DOTA_KEYBIND_CAMERA_DOWN = 2,
	DOTA_KEYBIND_CAMERA_LEFT = 3,
	DOTA_KEYBIND_CAMERA_RIGHT = 4,
	DOTA_KEYBIND_CAMERA_GRIP = 5,
	DOTA_KEYBIND_CAMERA_YAW_GRIP = 6,
	DOTA_KEYBIND_CAMERA_SAVED_POSITION_1 = 7,
	DOTA_KEYBIND_CAMERA_SAVED_POSITION_2 = 8,
	DOTA_KEYBIND_CAMERA_SAVED_POSITION_3 = 9,
	DOTA_KEYBIND_CAMERA_SAVED_POSITION_4 = 10,
	DOTA_KEYBIND_CAMERA_SAVED_POSITION_5 = 11,
	DOTA_KEYBIND_CAMERA_SAVED_POSITION_6 = 12,
	DOTA_KEYBIND_CAMERA_SAVED_POSITION_7 = 13,
	DOTA_KEYBIND_CAMERA_SAVED_POSITION_8 = 14,
	DOTA_KEYBIND_CAMERA_SAVED_POSITION_9 = 15,
	DOTA_KEYBIND_CAMERA_SAVED_POSITION_10 = 16,
	DOTA_KEYBIND_HERO_ATTACK = 17,
	DOTA_KEYBIND_HERO_MOVE = 18,
	DOTA_KEYBIND_HERO_MOVE_DIRECTION = 19,
	DOTA_KEYBIND_PATROL = 20,
	DOTA_KEYBIND_HERO_STOP = 21,
	DOTA_KEYBIND_HERO_HOLD = 22,
	DOTA_KEYBIND_HERO_SELECT = 23,
	DOTA_KEYBIND_COURIER_SELECT = 24,
	DOTA_KEYBIND_COURIER_DELIVER = 25,
	DOTA_KEYBIND_COURIER_HASTE = 26,
	DOTA_KEYBIND_PAUSE = 27,
	DOTA_SELECT_ALL = 28,
	DOTA_SELECT_ALL_OTHERS = 29,
	DOTA_RECENT_EVENT = 30,
	DOTA_KEYBIND_CHAT_TEAM = 31,
	DOTA_KEYBIND_CHAT_GLOBAL = 32,
	DOTA_KEYBIND_CHAT_TEAM2 = 33,
	DOTA_KEYBIND_CHAT_GLOBAL2 = 34,
	DOTA_KEYBIND_CHAT_VOICE_PARTY = 35,
	DOTA_KEYBIND_CHAT_VOICE_TEAM = 36,
	DOTA_KEYBIND_CHAT_WHEEL = 37,
	DOTA_KEYBIND_CHAT_WHEEL2 = 38,
	DOTA_KEYBIND_CHAT_WHEEL_CARE = 39,
	DOTA_KEYBIND_CHAT_WHEEL_BACK = 40,
	DOTA_KEYBIND_CHAT_WHEEL_NEED_WARDS = 41,
	DOTA_KEYBIND_CHAT_WHEEL_STUN = 42,
	DOTA_KEYBIND_CHAT_WHEEL_HELP = 43,
	DOTA_KEYBIND_CHAT_WHEEL_GET_PUSH = 44,
	DOTA_KEYBIND_CHAT_WHEEL_GOOD_JOB = 45,
	DOTA_KEYBIND_CHAT_WHEEL_MISSING = 46,
	DOTA_KEYBIND_CHAT_WHEEL_MISSING_TOP = 47,
	DOTA_KEYBIND_CHAT_WHEEL_MISSING_MIDDLE = 48,
	DOTA_KEYBIND_CHAT_WHEEL_MISSING_BOTTOM = 49,
	DOTA_KEYBIND_HERO_CHAT_WHEEL = 50,
	DOTA_KEYBIND_SPRAY_WHEEL = 51,
	DOTA_KEYBIND_ABILITY_PRIMARY1 = 52,
	DOTA_KEYBIND_ABILITY_PRIMARY2 = 53,
	DOTA_KEYBIND_ABILITY_PRIMARY3 = 54,
	DOTA_KEYBIND_ABILITY_SECONDARY1 = 55,
	DOTA_KEYBIND_ABILITY_SECONDARY2 = 56,
	DOTA_KEYBIND_ABILITY_ULTIMATE = 57,
	DOTA_KEYBIND_ABILITY_PRIMARY1_QUICKCAST = 58,
	DOTA_KEYBIND_ABILITY_PRIMARY2_QUICKCAST = 59,
	DOTA_KEYBIND_ABILITY_PRIMARY3_QUICKCAST = 60,
	DOTA_KEYBIND_ABILITY_SECONDARY1_QUICKCAST = 61,
	DOTA_KEYBIND_ABILITY_SECONDARY2_QUICKCAST = 62,
	DOTA_KEYBIND_ABILITY_ULTIMATE_QUICKCAST = 63,
	DOTA_KEYBIND_ABILITY_PRIMARY1_EXPLICIT_AUTOCAST = 64,
	DOTA_KEYBIND_ABILITY_PRIMARY2_EXPLICIT_AUTOCAST = 65,
	DOTA_KEYBIND_ABILITY_PRIMARY3_EXPLICIT_AUTOCAST = 66,
	DOTA_KEYBIND_ABILITY_SECONDARY1_EXPLICIT_AUTOCAST = 67,
	DOTA_KEYBIND_ABILITY_SECONDARY2_EXPLICIT_AUTOCAST = 68,
	DOTA_KEYBIND_ABILITY_ULTIMATE_EXPLICIT_AUTOCAST = 69,
	DOTA_KEYBIND_ABILITY_PRIMARY1_QUICKCAST_AUTOCAST = 70,
	DOTA_KEYBIND_ABILITY_PRIMARY2_QUICKCAST_AUTOCAST = 71,
	DOTA_KEYBIND_ABILITY_PRIMARY3_QUICKCAST_AUTOCAST = 72,
	DOTA_KEYBIND_ABILITY_SECONDARY1_QUICKCAST_AUTOCAST = 73,
	DOTA_KEYBIND_ABILITY_SECONDARY2_QUICKCAST_AUTOCAST = 74,
	DOTA_KEYBIND_ABILITY_ULTIMATE_QUICKCAST_AUTOCAST = 75,
	DOTA_KEYBIND_ABILITY_PRIMARY1_AUTOMATIC_AUTOCAST = 76,
	DOTA_KEYBIND_ABILITY_PRIMARY2_AUTOMATIC_AUTOCAST = 77,
	DOTA_KEYBIND_ABILITY_PRIMARY3_AUTOMATIC_AUTOCAST = 78,
	DOTA_KEYBIND_ABILITY_SECONDARY1_AUTOMATIC_AUTOCAST = 79,
	DOTA_KEYBIND_ABILITY_SECONDARY2_AUTOMATIC_AUTOCAST = 80,
	DOTA_KEYBIND_ABILITY_ULTIMATE_AUTOMATIC_AUTOCAST = 81,
	DOTA_KEYBIND_INVENTORY1 = 82,
	DOTA_KEYBIND_INVENTORY2 = 83,
	DOTA_KEYBIND_INVENTORY3 = 84,
	DOTA_KEYBIND_INVENTORY4 = 85,
	DOTA_KEYBIND_INVENTORY5 = 86,
	DOTA_KEYBIND_INVENTORY6 = 87,
	DOTA_KEYBIND_INVENTORYTP = 88,
	DOTA_KEYBIND_INVENTORY1_QUICKCAST = 89,
	DOTA_KEYBIND_INVENTORY2_QUICKCAST = 90,
	DOTA_KEYBIND_INVENTORY3_QUICKCAST = 91,
	DOTA_KEYBIND_INVENTORY4_QUICKCAST = 92,
	DOTA_KEYBIND_INVENTORY5_QUICKCAST = 93,
	DOTA_KEYBIND_INVENTORY6_QUICKCAST = 94,
	DOTA_KEYBIND_INVENTORYTP_QUICKCAST = 95,
	DOTA_KEYBIND_INVENTORY1_AUTOCAST = 96,
	DOTA_KEYBIND_INVENTORY2_AUTOCAST = 97,
	DOTA_KEYBIND_INVENTORY3_AUTOCAST = 98,
	DOTA_KEYBIND_INVENTORY4_AUTOCAST = 99,
	DOTA_KEYBIND_INVENTORY5_AUTOCAST = 100,
	DOTA_KEYBIND_INVENTORY6_AUTOCAST = 101,
	DOTA_KEYBIND_INVENTORYTP_AUTOCAST = 102,
	DOTA_KEYBIND_INVENTORY1_QUICKAUTOCAST = 103,
	DOTA_KEYBIND_INVENTORY2_QUICKAUTOCAST = 104,
	DOTA_KEYBIND_INVENTORY3_QUICKAUTOCAST = 105,
	DOTA_KEYBIND_INVENTORY4_QUICKAUTOCAST = 106,
	DOTA_KEYBIND_INVENTORY5_QUICKAUTOCAST = 107,
	DOTA_KEYBIND_INVENTORY6_QUICKAUTOCAST = 108,
	DOTA_KEYBIND_INVENTORYTP_QUICKAUTOCAST = 109,
	DOTA_KEYBIND_CONTROL_GROUP1 = 110,
	DOTA_KEYBIND_CONTROL_GROUP2 = 111,
	DOTA_KEYBIND_CONTROL_GROUP3 = 112,
	DOTA_KEYBIND_CONTROL_GROUP4 = 113,
	DOTA_KEYBIND_CONTROL_GROUP5 = 114,
	DOTA_KEYBIND_CONTROL_GROUP6 = 115,
	DOTA_KEYBIND_CONTROL_GROUP7 = 116,
	DOTA_KEYBIND_CONTROL_GROUP8 = 117,
	DOTA_KEYBIND_CONTROL_GROUP9 = 118,
	DOTA_KEYBIND_CONTROL_GROUP10 = 119,
	DOTA_KEYBIND_CONTROL_GROUPCYCLE = 120,
	DOTA_KEYBIND_SHOP_TOGGLE = 121,
	DOTA_KEYBIND_SCOREBOARD_TOGGLE = 122,
	DOTA_KEYBIND_SCREENSHOT = 123,
	DOTA_KEYBIND_ESCAPE = 124,
	DOTA_KEYBIND_CONSOLE = 125,
	DOTA_KEYBIND_DEATH_SUMMARY = 126,
	DOTA_KEYBIND_LEARN_ABILITIES = 127,
	DOTA_KEYBIND_LEARN_STATS = 128,
	DOTA_KEYBIND_ACTIVATE_GLYPH = 129,
	DOTA_KEYBIND_ACTIVATE_RADAR = 130,
	DOTA_KEYBIND_PURCHASE_QUICKBUY = 131,
	DOTA_KEYBIND_PURCHASE_STICKY = 132,
	DOTA_KEYBIND_GRAB_STASH_ITEMS = 133,
	DOTA_KEYBIND_TOGGLE_AUTOATTACK = 134,
	DOTA_KEYBIND_TOGGLE_CONSUMABLE_ABILITIES = 135,
	DOTA_KEYBIND_TAUNT = 136,
	DOTA_KEYBIND_SHOP_CONSUMABLES = 137,
	DOTA_KEYBIND_SHOP_ATTRIBUTES = 138,
	DOTA_KEYBIND_SHOP_ARMAMENTS = 139,
	DOTA_KEYBIND_SHOP_ARCANE = 140,
	DOTA_KEYBIND_SHOP_BASICS = 141,
	DOTA_KEYBIND_SHOP_SUPPORT = 142,
	DOTA_KEYBIND_SHOP_CASTER = 143,
	DOTA_KEYBIND_SHOP_WEAPONS = 144,
	DOTA_KEYBIND_SHOP_ARMOR = 145,
	DOTA_KEYBIND_SHOP_ARTIFACTS = 146,
	DOTA_KEYBIND_SHOP_SIDE_PAGE_1 = 147,
	DOTA_KEYBIND_SHOP_SIDE_PAGE_2 = 148,
	DOTA_KEYBIND_SHOP_SECRET = 149,
	DOTA_KEYBIND_SHOP_SEARCHBOX = 150,
	DOTA_KEYBIND_SHOP_SLOT_1 = 151,
	DOTA_KEYBIND_SHOP_SLOT_2 = 152,
	DOTA_KEYBIND_SHOP_SLOT_3 = 153,
	DOTA_KEYBIND_SHOP_SLOT_4 = 154,
	DOTA_KEYBIND_SHOP_SLOT_5 = 155,
	DOTA_KEYBIND_SHOP_SLOT_6 = 156,
	DOTA_KEYBIND_SHOP_SLOT_7 = 157,
	DOTA_KEYBIND_SHOP_SLOT_8 = 158,
	DOTA_KEYBIND_SHOP_SLOT_9 = 159,
	DOTA_KEYBIND_SHOP_SLOT_10 = 160,
	DOTA_KEYBIND_SHOP_SLOT_11 = 161,
	DOTA_KEYBIND_SHOP_SLOT_12 = 162,
	DOTA_KEYBIND_SHOP_SLOT_13 = 163,
	DOTA_KEYBIND_SHOP_SLOT_14 = 164,
	DOTA_KEYBIND_SPEC_CAMERA_UP = 165,
	DOTA_KEYBIND_SPEC_CAMERA_DOWN = 166,
	DOTA_KEYBIND_SPEC_CAMERA_LEFT = 167,
	DOTA_KEYBIND_SPEC_CAMERA_RIGHT = 168,
	DOTA_KEYBIND_SPEC_CAMERA_GRIP = 169,
	DOTA_KEYBIND_SPEC_CAMERA_SAVED_POSITION_1 = 170,
	DOTA_KEYBIND_SPEC_CAMERA_SAVED_POSITION_2 = 171,
	DOTA_KEYBIND_SPEC_CAMERA_SAVED_POSITION_3 = 172,
	DOTA_KEYBIND_SPEC_CAMERA_SAVED_POSITION_4 = 173,
	DOTA_KEYBIND_SPEC_CAMERA_SAVED_POSITION_5 = 174,
	DOTA_KEYBIND_SPEC_CAMERA_SAVED_POSITION_6 = 175,
	DOTA_KEYBIND_SPEC_CAMERA_SAVED_POSITION_7 = 176,
	DOTA_KEYBIND_SPEC_CAMERA_SAVED_POSITION_8 = 177,
	DOTA_KEYBIND_SPEC_CAMERA_SAVED_POSITION_9 = 178,
	DOTA_KEYBIND_SPEC_CAMERA_SAVED_POSITION_10 = 179,
	DOTA_KEYBIND_SPEC_UNIT_SELECT = 180,
	DOTA_KEYBIND_SPEC_HERO_SELECT = 181,
	DOTA_KEYBIND_SPEC_PAUSE = 182,
	DOTA_KEYBIND_SPEC_CHAT = 183,
	DOTA_KEYBIND_SPEC_SCOREBOARD = 184,
	DOTA_KEYBIND_SPEC_INCREASE_REPLAY_SPEED = 185,
	DOTA_KEYBIND_SPEC_DECREASE_REPLAY_SPEED = 186,
	DOTA_KEYBIND_SPEC_STATS_HARVEST = 187,
	DOTA_KEYBIND_SPEC_STATS_ITEM = 188,
	DOTA_KEYBIND_SPEC_STATS_GOLD = 189,
	DOTA_KEYBIND_SPEC_STATS_XP = 190,
	DOTA_KEYBIND_SPEC_STATS_FANTASY = 191,
	DOTA_KEYBIND_SPEC_STATS_WINCHANCE = 192,
	DOTA_KEYBIND_SPEC_FOW_TOGGLEBOTH = 193,
	DOTA_KEYBIND_SPEC_FOW_TOGGLERADIENT = 194,
	DOTA_KEYBIND_SPEC_FOW_TOGGLEDIRE = 195,
	DOTA_KEYBIND_SPEC_OPEN_BROADCASTER_MENU = 196,
	DOTA_KEYBIND_SPEC_DROPDOWN_KDA = 197,
	DOTA_KEYBIND_SPEC_DROPDOWN_LASTHITS_DENIES = 198,
	DOTA_KEYBIND_SPEC_DROPDOWN_LEVEL = 199,
	DOTA_KEYBIND_SPEC_DROPDOWN_XP_PER_MIN = 200,
	DOTA_KEYBIND_SPEC_DROPDOWN_GOLD = 201,
	DOTA_KEYBIND_SPEC_DROPDOWN_TOTALGOLD = 202,
	DOTA_KEYBIND_SPEC_DROPDOWN_GOLD_PER_MIN = 203,
	DOTA_KEYBIND_SPEC_DROPDOWN_BUYBACK = 204,
	DOTA_KEYBIND_SPEC_DROPDOWN_NETWORTH = 205,
	DOTA_KEYBIND_SPEC_DROPDOWN_FANTASY = 206,
	DOTA_KEYBIND_SPEC_DROPDOWN_SORT = 207,
	DOTA_KEYBIND_SPEC_DROPDOWN_CLOSE = 208,
	DOTA_KEYBIND_SPEC_FOCUS_PLAYER_1 = 209,
	DOTA_KEYBIND_SPEC_FOCUS_PLAYER_2 = 210,
	DOTA_KEYBIND_SPEC_FOCUS_PLAYER_3 = 211,
	DOTA_KEYBIND_SPEC_FOCUS_PLAYER_4 = 212,
	DOTA_KEYBIND_SPEC_FOCUS_PLAYER_5 = 213,
	DOTA_KEYBIND_SPEC_FOCUS_PLAYER_6 = 214,
	DOTA_KEYBIND_SPEC_FOCUS_PLAYER_7 = 215,
	DOTA_KEYBIND_SPEC_FOCUS_PLAYER_8 = 216,
	DOTA_KEYBIND_SPEC_FOCUS_PLAYER_9 = 217,
	DOTA_KEYBIND_SPEC_FOCUS_PLAYER_10 = 218,
	DOTA_KEYBIND_SPEC_COACH_VIEWTOGGLE = 219,
	DOTA_KEYBIND_INSPECTHEROINWORLD = 220,
	DOTA_KEYBIND_CAMERA_ZOOM_IN = 221,
	DOTA_KEYBIND_CAMERA_ZOOM_OUT = 222,
	DOTA_KEYBIND_CONTROL_GROUPCYCLEPREV = 223,
	DOTA_KEYBIND_DOTA_ALT = 224,
	DOTA_KEYBIND_COUNT = 225
}

declare const enum modifierpriority {
	MODIFIER_PRIORITY_LOW = 0,
	MODIFIER_PRIORITY_NORMAL = 1,
	MODIFIER_PRIORITY_HIGH = 2,
	MODIFIER_PRIORITY_ULTRA = 3,
	MODIFIER_PRIORITY_SUPER_ULTRA = 4
}

declare const enum ParticleOrientationChoiceList_t {
	PARTICLE_ORIENTATION_SCREEN_ALIGNED = 0,
	PARTICLE_ORIENTATION_SCREEN_Z_ALIGNED = 1,
	PARTICLE_ORIENTATION_WORLD_Z_ALIGNED = 2,
	PARTICLE_ORIENTATION_ALIGN_TO_PARTICLE_NORMAL = 3,
	PARTICLE_ORIENTATION_SCREENALIGN_TO_PARTICLE_NORMAL = 4,
	PARTICLE_ORIENTATION_FULL_3AXIS_ROTATION = 5
}

declare const enum DOTA_SHOP_TYPE {
	DOTA_SHOP_HOME = 0,
	DOTA_SHOP_SIDE = 1,
	DOTA_SHOP_SECRET = 2,
	DOTA_SHOP_GROUND = 3,
	DOTA_SHOP_SIDE2 = 4,
	DOTA_SHOP_SECRET2 = 5,
	DOTA_SHOP_CUSTOM = 6,
	DOTA_SHOP_NONE = 7
}

declare const enum EntityDisolveType_t {
	ENTITY_DISSOLVE_NORMAL = 0,
	ENTITY_DISSOLVE_ELECTRICAL = 1,
	ENTITY_DISSOLVE_ELECTRICAL_LIGHT = 2,
	ENTITY_DISSOLVE_CORE = 3
}

declare const enum LightSourceShape_t {
	LIGHT_SOURCE_SHAPE_SPHERE = 0
}

declare const enum ShadowType_t {
	SHADOWS_NONE = 0,
	SHADOWS_SIMPLE = 1
}

declare const enum DOTASpeechType_t {
	DOTA_SPEECH_USER_INVALID = 0,
	DOTA_SPEECH_USER_SINGLE = 1,
	DOTA_SPEECH_USER_TEAM = 2,
	DOTA_SPEECH_USER_TEAM_NEARBY = 3,
	DOTA_SPEECH_USER_NEARBY = 4,
	DOTA_SPEECH_USER_ALL = 5,
	DOTA_SPEECH_GOOD_TEAM = 6,
	DOTA_SPEECH_BAD_TEAM = 7,
	DOTA_SPEECH_SPECTATOR = 8,
	DOTA_SPEECH_RECIPIENT_TYPE_MAX = 9
}

declare const enum Class_T {
	CLASS_NONE = 0,
	CLASS_PLAYER = 1,
	CLASS_PLAYER_ALLY = 2,
	CLASS_BULLSEYE = 3,
	LAST_SHARED_ENTITY_CLASS = 4
}

declare const enum TrainVelocityType_t {
	TrainVelocity_Instantaneous = 0,
	TrainVelocity_LinearBlend = 1,
	TrainVelocity_EaseInEaseOut = 2
}

declare const enum Disposition_t {
	D_ER = 0,
	D_HT = 1,
	D_FR = 2,
	D_LI = 3,
	D_NU = 4,
	D_ERROR = 0,
	D_HATE = 1,
	D_FEAR = 2,
	D_LIKE = 3,
	D_NEUTRAL = 4
}

declare const enum TrackOrientationType_t {
	TrackOrientation_Fixed = 0,
	TrackOrientation_FacePath = 1,
	TrackOrientation_FacePathAngles = 2
}

declare const enum ParticleTopology_t {
	PARTICLE_TOPOLOGY_POINTS = 0,
	PARTICLE_TOPOLOGY_LINES = 1,
	PARTICLE_TOPOLOGY_TRIS = 2,
	PARTICLE_TOPOLOGY_QUADS = 3,
	PARTICLE_TOPOLOGY_CUBES = 4
}

declare const enum DOTA_HeroPickState {
	DOTA_HEROPICK_STATE_NONE = 0,
	DOTA_HEROPICK_STATE_AP_SELECT = 1,
	DOTA_HEROPICK_STATE_SD_SELECT = 2,
	DOTA_HEROPICK_STATE_INTRO_SELECT_UNUSED = 3,
	DOTA_HEROPICK_STATE_RD_SELECT_UNUSED = 4,
	DOTA_HEROPICK_STATE_CM_INTRO = 5,
	DOTA_HEROPICK_STATE_CM_CAPTAINPICK = 6,
	DOTA_HEROPICK_STATE_CM_BAN1 = 7,
	DOTA_HEROPICK_STATE_CM_BAN2 = 8,
	DOTA_HEROPICK_STATE_CM_BAN3 = 9,
	DOTA_HEROPICK_STATE_CM_BAN4 = 10,
	DOTA_HEROPICK_STATE_CM_BAN5 = 11,
	DOTA_HEROPICK_STATE_CM_BAN6 = 12,
	DOTA_HEROPICK_STATE_CM_BAN7 = 13,
	DOTA_HEROPICK_STATE_CM_BAN8 = 14,
	DOTA_HEROPICK_STATE_CM_BAN9 = 15,
	DOTA_HEROPICK_STATE_CM_BAN10 = 16,
	DOTA_HEROPICK_STATE_CM_BAN11 = 17,
	DOTA_HEROPICK_STATE_CM_BAN12 = 18,
	DOTA_HEROPICK_STATE_CM_SELECT1 = 19,
	DOTA_HEROPICK_STATE_CM_SELECT2 = 20,
	DOTA_HEROPICK_STATE_CM_SELECT3 = 21,
	DOTA_HEROPICK_STATE_CM_SELECT4 = 22,
	DOTA_HEROPICK_STATE_CM_SELECT5 = 23,
	DOTA_HEROPICK_STATE_CM_SELECT6 = 24,
	DOTA_HEROPICK_STATE_CM_SELECT7 = 25,
	DOTA_HEROPICK_STATE_CM_SELECT8 = 26,
	DOTA_HEROPICK_STATE_CM_SELECT9 = 27,
	DOTA_HEROPICK_STATE_CM_SELECT10 = 28,
	DOTA_HEROPICK_STATE_CM_PICK = 29,
	DOTA_HEROPICK_STATE_AR_SELECT = 30,
	DOTA_HEROPICK_STATE_MO_SELECT = 31,
	DOTA_HEROPICK_STATE_FH_SELECT = 32,
	DOTA_HEROPICK_STATE_CD_INTRO = 33,
	DOTA_HEROPICK_STATE_CD_CAPTAINPICK = 34,
	DOTA_HEROPICK_STATE_CD_BAN1 = 35,
	DOTA_HEROPICK_STATE_CD_BAN2 = 36,
	DOTA_HEROPICK_STATE_CD_BAN3 = 37,
	DOTA_HEROPICK_STATE_CD_BAN4 = 38,
	DOTA_HEROPICK_STATE_CD_BAN5 = 39,
	DOTA_HEROPICK_STATE_CD_BAN6 = 40,
	DOTA_HEROPICK_STATE_CD_SELECT1 = 41,
	DOTA_HEROPICK_STATE_CD_SELECT2 = 42,
	DOTA_HEROPICK_STATE_CD_SELECT3 = 43,
	DOTA_HEROPICK_STATE_CD_SELECT4 = 44,
	DOTA_HEROPICK_STATE_CD_SELECT5 = 45,
	DOTA_HEROPICK_STATE_CD_SELECT6 = 46,
	DOTA_HEROPICK_STATE_CD_SELECT7 = 47,
	DOTA_HEROPICK_STATE_CD_SELECT8 = 48,
	DOTA_HEROPICK_STATE_CD_SELECT9 = 49,
	DOTA_HEROPICK_STATE_CD_SELECT10 = 50,
	DOTA_HEROPICK_STATE_CD_PICK = 51,
	DOTA_HEROPICK_STATE_BD_SELECT = 52,
	DOTA_HERO_PICK_STATE_ABILITY_DRAFT_SELECT = 53,
	DOTA_HERO_PICK_STATE_ARDM_SELECT = 54,
	DOTA_HEROPICK_STATE_ALL_DRAFT_SELECT = 55,
	DOTA_HERO_PICK_STATE_CUSTOMGAME_SELECT = 56,
	DOTA_HEROPICK_STATE_SELECT_PENALTY = 57,
	DOTA_HEROPICK_STATE_CUSTOM_PICK_RULES = 58,
	DOTA_HEROPICK_STATE_COUNT = 59
}

declare const enum AttributeDerivedStats {
	DOTA_ATTRIBUTE_STRENGTH_DAMAGE = 0,
	DOTA_ATTRIBUTE_STRENGTH_HP = 1,
	DOTA_ATTRIBUTE_STRENGTH_HP_REGEN = 2,
	DOTA_ATTRIBUTE_STRENGTH_STATUS_RESISTANCE_PERCENT = 3,
	DOTA_ATTRIBUTE_STRENGTH_MAGIC_RESISTANCE_PERCENT = 4,
	DOTA_ATTRIBUTE_AGILITY_DAMAGE = 5,
	DOTA_ATTRIBUTE_AGILITY_ARMOR = 6,
	DOTA_ATTRIBUTE_AGILITY_ATTACK_SPEED = 7,
	DOTA_ATTRIBUTE_AGILITY_MOVE_SPEED_PERCENT = 8,
	DOTA_ATTRIBUTE_INTELLIGENCE_DAMAGE = 9,
	DOTA_ATTRIBUTE_INTELLIGENCE_MANA = 10,
	DOTA_ATTRIBUTE_INTELLIGENCE_MANA_REGEN = 11,
	DOTA_ATTRIBUTE_INTELLIGENCE_SPELL_AMP_PERCENT = 12,
	DOTA_ATTRIBUTE_INTELLIGENCE_MAGIC_RESISTANCE_PERCENT = 13
}

declare const enum DampingSpeedFunction {
	NoDamping = 0,
	Constant = 1,
	Spring = 2
}

declare const enum EDOTA_ModifyXP_Reason {
	DOTA_ModifyXP_Unspecified = 0,
	DOTA_ModifyXP_HeroKill = 1,
	DOTA_ModifyXP_CreepKill = 2,
	DOTA_ModifyXP_RoshanKill = 3
}

declare const enum RenderMode_t {
	kRenderNormal = 0,
	kRenderTransColor = 1,
	kRenderTransTexture = 2,
	kRenderGlow = 3,
	kRenderTransAlpha = 4,
	kRenderTransAdd = 5,
	kRenderEnvironmental = 6,
	kRenderTransAddFrameBlend = 7,
	kRenderTransAlphaAdd = 8,
	kRenderWorldGlow = 9,
	kRenderNone = 10,
	kRenderDevVisualizer = 11,
	kRenderModeCount = 12
}

declare const enum BeamClipStyle_t {
	kNOCLIP = 0,
	kGEOCLIP = 1,
	kMODELCLIP = 2,
	kBEAMCLIPSTYLE_NUMBITS = 2
}

declare const enum MaterialModifyMode_t {
	MATERIAL_MODIFY_MODE_NONE = 0,
	MATERIAL_MODIFY_MODE_SETVAR = 1,
	MATERIAL_MODIFY_MODE_ANIM_SEQUENCE = 2,
	MATERIAL_MODIFY_MODE_FLOAT_LERP = 3
}

declare const enum soundlevel_t {
	SNDLVL_NONE = 0,
	SNDLVL_20dB = 20,
	SNDLVL_25dB = 25,
	SNDLVL_30dB = 30,
	SNDLVL_35dB = 35,
	SNDLVL_40dB = 40,
	SNDLVL_45dB = 45,
	SNDLVL_50dB = 50,
	SNDLVL_55dB = 55,
	SNDLVL_IDLE = 60,
	SNDLVL_60dB = 60,
	SNDLVL_65dB = 65,
	SNDLVL_STATIC = 66,
	SNDLVL_70dB = 70,
	SNDLVL_NORM = 75,
	SNDLVL_75dB = 75,
	SNDLVL_80dB = 80,
	SNDLVL_TALKING = 80,
	SNDLVL_85dB = 85,
	SNDLVL_90dB = 90,
	SNDLVL_95dB = 95,
	SNDLVL_100dB = 100,
	SNDLVL_105dB = 105,
	SNDLVL_110dB = 110,
	SNDLVL_120dB = 120,
	SNDLVL_130dB = 130,
	SNDLVL_GUNFIRE = 140,
	SNDLVL_140dB = 140,
	SNDLVL_150dB = 150,
	SNDLVL_180dB = 180
}

declare const enum AnimationSnapshotType_t {
	ANIMATION_SNAPSHOT_SERVER_SIMULATION = 0,
	ANIMATION_SNAPSHOT_CLIENT_SIMULATION = 1,
	ANIMATION_SNAPSHOT_CLIENT_PREDICTION = 2,
	ANIMATION_SNAPSHOT_CLIENT_INTERPOLATION = 3,
	ANIMATION_SNAPSHOT_CLIENT_RENDER = 4,
	ANIMATION_SNAPSHOT_FINAL_COMPOSITE = 5,
	ANIMATION_SNAPSHOT_MAX = 6
}

declare const enum ValueRemapperRatchetType_t {
	RatchetType_Absolute = 0,
	RatchetType_EachEngage = 1
}

declare const enum gamerules_roundstate_t {
	GR_STATE_INIT = 0,
	GR_STATE_PREGAME = 1,
	GR_STATE_STARTGAME = 2,
	GR_STATE_PREROUND = 3,
	GR_STATE_RND_RUNNING = 4,
	GR_STATE_TEAM_WIN = 5,
	GR_STATE_RESTART = 6,
	GR_STATE_STALEMATE = 7,
	GR_STATE_GAME_OVER = 8,
	GR_NUM_ROUND_STATES = 9
}

declare const enum ParticleColorBlendMode_t {
	PARTICLEBLEND_DEFAULT = 0,
	PARTICLEBLEND_OVERLAY = 1,
	PARTICLEBLEND_DARKEN = 2,
	PARTICLEBLEND_LIGHTEN = 3,
	PARTICLEBLEND_MULTIPLY = 4
}

declare const enum PropDoorRotatingOpenDirection_e {
	DOOR_ROTATING_OPEN_BOTH_WAYS = 0,
	DOOR_ROTATING_OPEN_FORWARD = 1,
	DOOR_ROTATING_OPEN_BACKWARD = 2
}

declare const enum eEconItemOrigin {
	kEconItemOrigin_Invalid = -1,
	kEconItemOrigin_Drop = 0,
	kEconItemOrigin_Achievement = 1,
	kEconItemOrigin_Purchased = 2,
	kEconItemOrigin_Traded = 3,
	kEconItemOrigin_Crafted = 4,
	kEconItemOrigin_StorePromotion = 5,
	kEconItemOrigin_Gifted = 6,
	kEconItemOrigin_SupportGranted = 7,
	kEconItemOrigin_FoundInCrate = 8,
	kEconItemOrigin_Earned = 9,
	kEconItemOrigin_ThirdPartyPromotion = 10,
	kEconItemOrigin_GiftWrapped = 11,
	kEconItemOrigin_HalloweenDrop = 12,
	kEconItemOrigin_PackageItem = 13,
	kEconItemOrigin_Foreign = 14,
	kEconItemOrigin_CDKey = 15,
	kEconItemOrigin_CollectionReward = 16,
	kEconItemOrigin_PreviewItem = 17,
	kEconItemOrigin_SteamWorkshopContribution = 18,
	kEconItemOrigin_PeriodicScoreReward = 19,
	kEconItemOrigin_Recycling = 20,
	kEconItemOrigin_TournamentDrop = 21,
	kEconItemOrigin_PassportReward = 22,
	kEconItemOrigin_TutorialDrop = 23,
	kEconItemOrigin_RecipeOutput = 24,
	kEconItemOrigin_GemExtract = 25,
	kEconItemOrigin_EventPointReward = 26,
	kEconItemOrigin_ItemRedemption = 27,
	kEconItemOrigin_FantasyTicketRefund = 28,
	kEconItemOrigin_VictoryPredictionReward = 29,
	kEconItemOrigin_AssassinEventReward = 30,
	kEconItemOrigin_CompendiumReward = 31,
	kEconItemOrigin_CompendiumDrop = 32,
	kEconItemOrigin_MysteryItem = 33,
	kEconItemOrigin_UnpackedFromBundle = 34,
	kEconItemOrigin_WonFromWeeklyGame = 35,
	kEconItemOrigin_SeasonalItemGrant = 36,
	kEconItemOrigin_PackOpening = 37,
	kEconItemOrigin_InitialGrant = 38,
	kEconItemOrigin_MarketPurchase = 39,
	kEconItemOrigin_MarketRefunded = 40,
	kEconItemOrigin_LimitedDraft = 41,
	kEconItemOrigin_GauntletReward = 42,
	kEconItemOrigin_CompendiumGift = 43,
	kEconItemOrigin_Max = 44
}

declare const enum SelectionSource_t {
	SelectionSource_Bool = 0,
	SelectionSource_Enum = 1
}

declare const enum DOTALimits_t {
	DOTA_MAX_PLAYERS = 64,
	DOTA_MAX_TEAM = 24,
	DOTA_MAX_PLAYER_TEAMS = 10,
	DOTA_MAX_TEAM_PLAYERS = 24,
	DOTA_MAX_SPECTATOR_TEAM_SIZE = 40,
	DOTA_MAX_SPECTATOR_LOBBY_SIZE = 15,
	DOTA_DEFAULT_MAX_TEAM = 5,
	DOTA_DEFAULT_MAX_TEAM_PLAYERS = 10
}

declare const enum interactions_t {
	INTERACTION_NONE = -1,
	INTERACTION_CLIP_TO_ENERGYGUN = 0,
	INTERACTION_LARGE_CLIP_TO_ENERGYGUN = 1,
	INTERACTION_CLIP_TO_SHOTGUN = 2,
	INTERACTION_MULTICLIP_TO_SHOTGUN = 3,
	INTERACTION_GRENADE_TO_SHOTGUN = 4,
	INTERACTION_XENGRENADE_TO_SHOTGUN = 5,
	INTERACTION_CHARGEDCLIP_TO_SHOTGUN = 6,
	INTERACTION_CLIP_TO_RAPIDFIRE = 7,
	NUM_HAND_INTERACTIONS = 8
}

declare const enum SeqResourceCmdEnum {
	SEQ_CMD_Nop = 0,
	SEQ_CMD_LinearDelta = 1,
	SEQ_CMD_FetchFrameRange = 2,
	SEQ_CMD_Slerp = 3,
	SEQ_CMD_Add = 4,
	SEQ_CMD_Subtract = 5,
	SEQ_CMD_Scale = 6,
	SEQ_CMD_Copy = 7,
	SEQ_CMD_Blend = 8,
	SEQ_CMD_Worldspace = 9,
	SEQ_CMD_Sequence = 10,
	SEQ_CMD_FetchCycle = 11,
	SEQ_CMD_FetchFrame = 12,
	SEQ_CMD_IKLockInPlace = 13,
	SEQ_CMD_IKRestoreAll = 14,
	SEQ_CMD_ReverseSequence = 15,
	SEQ_CMD_Transform = 16
}

declare const enum LifeState_t {
	LIFE_ALIVE = 0,
	LIFE_DYING = 1,
	LIFE_DEAD = 2,
	LIFE_RESPAWNABLE = 3,
	LIFE_RESPAWNING = 4
}

declare const enum voxel_vis_compression_t {
	VOXVIS_COMPRESS_RAW = 0,
	VOXVIS_COMPRESS_RLE = 1
}

declare const enum DamageOptions_t {
	DAMAGE_NO = 0,
	DAMAGE_EVENTS_ONLY = 1,
	DAMAGE_YES = 2
}

declare const enum PortraitSoundMode_t {
	PORTRAIT_SOUND_MODE_INVALID = -1,
	PORTRAIT_SOUND_MODE_NO_SOUNDS = 0,
	PORTRAIT_SOUND_MODE_ONLY_TAUNT_SOUNDS = 1,
	PORTRAIT_SOUND_MODE_ALL_SOUNDS = 2
}

declare const enum EntityLumpFlags_t {
	ENTITY_LUMP_NONE = 0
}

declare const enum EntFinderMethod_t {
	ENT_FIND_METHOD_NEAREST = 0,
	ENT_FIND_METHOD_FARTHEST = 1,
	ENT_FIND_METHOD_RANDOM = 2
}

declare const enum DOTA_SHOP_CATEGORY {
	DOTA_SHOP_CATEGORY_NONE = -1,
	DOTA_SHOP_CATEGORY_CONSUMABLES = 0,
	DOTA_SHOP_CATEGORY_ATTRIBUTES = 1,
	DOTA_SHOP_CATEGORY_WEAPONS_ARMOR = 2,
	DOTA_SHOP_CATEGORY_MISC = 3,
	DOTA_SHOP_CATEGORY_BASICS = 4,
	DOTA_SHOP_CATEGORY_SUPPORT = 5,
	DOTA_SHOP_CATEGORY_MAGICS = 6,
	DOTA_SHOP_CATEGORY_WEAPONS = 7,
	DOTA_SHOP_CATEGORY_DEFENSE = 8,
	DOTA_SHOP_CATEGORY_ARTIFACTS = 9,
	DOTA_SHOP_CATEGORY_SIDE_SHOP_PAGE_1 = 10,
	DOTA_SHOP_CATEGORY_SIDE_SHOP_PAGE_2 = 11,
	DOTA_SHOP_CATEGORY_SECRET_SHOP = 12,
	DOTA_SHOP_CATEGORY_RECOMMENDED_ITEMS = 13,
	DOTA_SHOP_CATEGORY_SEARCH_RESULTS = 14,
	NUM_SHOP_CATEGORIES = 15
}

declare const enum eLiteralHandType {
	LITERAL_HAND_TYPE_UNKNOWN = -1,
	LITERAL_HAND_TYPE_RIGHT = 0,
	LITERAL_HAND_TYPE_LEFT = 1,
	LITERAL_HAND_TYPE_COUNT = 2
}

declare const enum WeaponSound_t {
	WEAPON_SOUND_EMPTY = 0,
	WEAPON_SOUND_SINGLE = 1,
	WEAPON_SOUND_SINGLE_NPC = 2,
	WEAPON_SOUND_DOUBLE = 3,
	WEAPON_SOUND_DOUBLE_NPC = 4,
	WEAPON_SOUND_BURST = 5,
	WEAPON_SOUND_RELOAD = 6,
	WEAPON_SOUND_RELOAD_NPC = 7,
	WEAPON_SOUND_MELEE_MISS = 8,
	WEAPON_SOUND_MELEE_HIT = 9,
	WEAPON_SOUND_MELEE_HIT_WORLD = 10,
	WEAPON_SOUND_SPECIAL1 = 11,
	WEAPON_SOUND_SPECIAL2 = 12,
	WEAPON_SOUND_SPECIAL3 = 13,
	WEAPON_SOUND_TAUNT = 14,
	WEAPON_SOUND_FAST_RELOAD = 15,
	WEAPON_SOUND_NUM_TYPES = 16
}

declare const enum WeaponState_t {
	WEAPON_NOT_CARRIED = 0,
	WEAPON_IS_CARRIED_BY_PLAYER = 1,
	WEAPON_IS_ACTIVE = 2
}

declare const enum UnitFilterResult {
	UF_SUCCESS = 0,
	UF_FAIL_FRIENDLY = 1,
	UF_FAIL_ENEMY = 2,
	UF_FAIL_HERO = 3,
	UF_FAIL_CONSIDERED_HERO = 4,
	UF_FAIL_CREEP = 5,
	UF_FAIL_BUILDING = 6,
	UF_FAIL_COURIER = 7,
	UF_FAIL_OTHER = 8,
	UF_FAIL_ANCIENT = 9,
	UF_FAIL_ILLUSION = 10,
	UF_FAIL_SUMMONED = 11,
	UF_FAIL_DOMINATED = 12,
	UF_FAIL_MELEE = 13,
	UF_FAIL_RANGED = 14,
	UF_FAIL_DEAD = 15,
	UF_FAIL_MAGIC_IMMUNE_ALLY = 16,
	UF_FAIL_MAGIC_IMMUNE_ENEMY = 17,
	UF_FAIL_INVULNERABLE = 18,
	UF_FAIL_IN_FOW = 19,
	UF_FAIL_INVISIBLE = 20,
	UF_FAIL_NOT_PLAYER_CONTROLLED = 21,
	UF_FAIL_ATTACK_IMMUNE = 22,
	UF_FAIL_CUSTOM = 23,
	UF_FAIL_INVALID_LOCATION = 24,
	UF_FAIL_DISABLE_HELP = 25,
	UF_FAIL_OUT_OF_WORLD = 26,
	UF_FAIL_NIGHTMARED = 27,
	UF_FAIL_OBSTRUCTED = 28
}

declare const enum doorCheck_e {
	DOOR_CHECK_FORWARD = 0,
	DOOR_CHECK_BACKWARD = 1,
	DOOR_CHECK_FULL = 2
}

declare const enum SPELL_IMMUNITY_TYPES {
	SPELL_IMMUNITY_NONE = 0,
	SPELL_IMMUNITY_ALLIES_YES = 1,
	SPELL_IMMUNITY_ALLIES_NO = 2,
	SPELL_IMMUNITY_ENEMIES_YES = 3,
	SPELL_IMMUNITY_ENEMIES_NO = 4
}

declare const enum ParticleFloatBiasType_t {
	PF_BIAS_TYPE_INVALID = -1,
	PF_BIAS_TYPE_STANDARD = 0,
	PF_BIAS_TYPE_GAIN = 1,
	PF_BIAS_TYPE_EXPONENTIAL = 2,
	PF_BIAS_TYPE_COUNT = 3
}

declare const enum ParticleDepthFeatheringMode_t {
	PARTICLE_DEPTH_FEATHERING_OFF = 0,
	PARTICLE_DEPTH_FEATHERING_ON_OPTIONAL = 1,
	PARTICLE_DEPTH_FEATHERING_ON_REQUIRED = 2
}

declare const enum RenderSlotType_t {
	RENDER_SLOT_INVALID = -1,
	RENDER_SLOT_PER_VERTEX = 0,
	RENDER_SLOT_PER_INSTANCE = 1
}

declare const enum AnimValueSource {
	MoveHeading = 0,
	MoveSpeed = 1,
	ForwardSpeed = 2,
	StrafeSpeed = 3,
	FacingHeading = 4,
	LookHeading = 5,
	LookPitch = 6,
	Parameter = 7,
	WayPointHeading = 8,
	WayPointFacing = 9,
	WayPointDistance = 10,
	TargetMoveHeading = 11,
	TargetMoveSpeed = 12,
	AccelerationHeading = 13,
	AccelerationSpeed = 14,
	SlopeHeading = 15,
	SlopeAngle = 16,
	GoalDistance = 17,
	AccelerationLeftRight = 18,
	AccelerationFrontBack = 19,
	RootMotionSpeed = 20,
	RootMotionTurnSpeed = 21,
	MoveHeadingRelativeToLookHeading = 22,
	FingerCurl_Thumb = 23,
	FingerCurl_Index = 24,
	FingerCurl_Middle = 25,
	FingerCurl_Ring = 26,
	FingerCurl_Pinky = 27,
	FingerSplay_Thumb_Index = 28,
	FingerSplay_Index_Middle = 29,
	FingerSplay_Middle_Ring = 30,
	FingerSplay_Ring_Pinky = 31
}

declare const enum modifierfunction {
	MODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE = 0,
	MODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE_TARGET = 1,
	MODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE_PROC = 2,
	MODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE_POST_CRIT = 3,
	MODIFIER_PROPERTY_BASEATTACK_BONUSDAMAGE = 4,
	MODIFIER_PROPERTY_PROCATTACK_BONUS_DAMAGE_PHYSICAL = 5,
	MODIFIER_PROPERTY_PROCATTACK_BONUS_DAMAGE_MAGICAL = 6,
	MODIFIER_PROPERTY_PROCATTACK_BONUS_DAMAGE_PURE = 7,
	MODIFIER_PROPERTY_PROCATTACK_FEEDBACK = 8,
	MODIFIER_PROPERTY_OVERRIDE_ATTACK_DAMAGE = 9,
	MODIFIER_PROPERTY_PRE_ATTACK = 10,
	MODIFIER_PROPERTY_INVISIBILITY_LEVEL = 11,
	MODIFIER_PROPERTY_INVISIBILITY_ATTACK_BEHAVIOR_EXCEPTION = 12,
	MODIFIER_PROPERTY_PERSISTENT_INVISIBILITY = 13,
	MODIFIER_PROPERTY_MOVESPEED_BONUS_CONSTANT = 14,
	MODIFIER_PROPERTY_MOVESPEED_BASE_OVERRIDE = 15,
	MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE = 16,
	MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE_UNIQUE = 17,
	MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE_UNIQUE_2 = 18,
	MODIFIER_PROPERTY_MOVESPEED_BONUS_UNIQUE = 19,
	MODIFIER_PROPERTY_MOVESPEED_BONUS_UNIQUE_2 = 20,
	MODIFIER_PROPERTY_MOVESPEED_BONUS_CONSTANT_UNIQUE = 21,
	MODIFIER_PROPERTY_MOVESPEED_BONUS_CONSTANT_UNIQUE_2 = 22,
	MODIFIER_PROPERTY_MOVESPEED_ABSOLUTE = 23,
	MODIFIER_PROPERTY_MOVESPEED_ABSOLUTE_MIN = 24,
	MODIFIER_PROPERTY_MOVESPEED_ABSOLUTE_MAX = 25,
	MODIFIER_PROPERTY_IGNORE_MOVESPEED_LIMIT = 26,
	MODIFIER_PROPERTY_MOVESPEED_LIMIT = 27,
	MODIFIER_PROPERTY_ATTACKSPEED_BASE_OVERRIDE = 28,
	MODIFIER_PROPERTY_FIXED_ATTACK_RATE = 29,
	MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT = 30,
	MODIFIER_PROPERTY_COOLDOWN_REDUCTION_CONSTANT = 31,
	MODIFIER_PROPERTY_BASE_ATTACK_TIME_CONSTANT = 32,
	MODIFIER_PROPERTY_ATTACK_POINT_CONSTANT = 33,
	MODIFIER_PROPERTY_DAMAGEOUTGOING_PERCENTAGE = 34,
	MODIFIER_PROPERTY_DAMAGEOUTGOING_PERCENTAGE_ILLUSION = 35,
	MODIFIER_PROPERTY_TOTALDAMAGEOUTGOING_PERCENTAGE = 36,
	MODIFIER_PROPERTY_SPELL_AMPLIFY_PERCENTAGE = 37,
	MODIFIER_PROPERTY_SPELL_AMPLIFY_PERCENTAGE_UNIQUE = 38,
	MODIFIER_PROPERTY_HP_REGEN_AMPLIFY_PERCENTAGE_SOURCE = 39,
	MODIFIER_PROPERTY_HP_REGEN_AMPLIFY_PERCENTAGE = 40,
	MODIFIER_PROPERTY_MP_REGEN_AMPLIFY_PERCENTAGE = 41,
	MODIFIER_PROPERTY_MP_RESTORE_AMPLIFY_PERCENTAGE = 42,
	MODIFIER_PROPERTY_BASEDAMAGEOUTGOING_PERCENTAGE = 43,
	MODIFIER_PROPERTY_BASEDAMAGEOUTGOING_PERCENTAGE_UNIQUE = 44,
	MODIFIER_PROPERTY_INCOMING_DAMAGE_PERCENTAGE = 45,
	MODIFIER_PROPERTY_INCOMING_PHYSICAL_DAMAGE_PERCENTAGE = 46,
	MODIFIER_PROPERTY_INCOMING_PHYSICAL_DAMAGE_CONSTANT = 47,
	MODIFIER_PROPERTY_INCOMING_SPELL_DAMAGE_CONSTANT = 48,
	MODIFIER_PROPERTY_EVASION_CONSTANT = 49,
	MODIFIER_PROPERTY_NEGATIVE_EVASION_CONSTANT = 50,
	MODIFIER_PROPERTY_STATUS_RESISTANCE = 51,
	MODIFIER_PROPERTY_STATUS_RESISTANCE_STACKING = 52,
	MODIFIER_PROPERTY_STATUS_RESISTANCE_CASTER = 53,
	MODIFIER_PROPERTY_AVOID_DAMAGE = 54,
	MODIFIER_PROPERTY_AVOID_SPELL = 55,
	MODIFIER_PROPERTY_MISS_PERCENTAGE = 56,
	MODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS = 57,
	MODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS_UNIQUE = 58,
	MODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS_UNIQUE_ACTIVE = 59,
	MODIFIER_PROPERTY_IGNORE_PHYSICAL_ARMOR = 60,
	MODIFIER_PROPERTY_MAGICAL_RESISTANCE_DIRECT_MODIFICATION = 61,
	MODIFIER_PROPERTY_MAGICAL_RESISTANCE_BONUS = 62,
	MODIFIER_PROPERTY_MAGICAL_RESISTANCE_DECREPIFY_UNIQUE = 63,
	MODIFIER_PROPERTY_BASE_MANA_REGEN = 64,
	MODIFIER_PROPERTY_MANA_REGEN_CONSTANT = 65,
	MODIFIER_PROPERTY_MANA_REGEN_CONSTANT_UNIQUE = 66,
	MODIFIER_PROPERTY_MANA_REGEN_TOTAL_PERCENTAGE = 67,
	MODIFIER_PROPERTY_HEALTH_REGEN_CONSTANT = 68,
	MODIFIER_PROPERTY_HEALTH_REGEN_PERCENTAGE = 69,
	MODIFIER_PROPERTY_HEALTH_REGEN_PERCENTAGE_UNIQUE = 70,
	MODIFIER_PROPERTY_HEALTH_BONUS = 71,
	MODIFIER_PROPERTY_MANA_BONUS = 72,
	MODIFIER_PROPERTY_EXTRA_STRENGTH_BONUS = 73,
	MODIFIER_PROPERTY_EXTRA_HEALTH_BONUS = 74,
	MODIFIER_PROPERTY_EXTRA_MANA_BONUS = 75,
	MODIFIER_PROPERTY_EXTRA_HEALTH_PERCENTAGE = 76,
	MODIFIER_PROPERTY_STATS_STRENGTH_BONUS = 77,
	MODIFIER_PROPERTY_STATS_AGILITY_BONUS = 78,
	MODIFIER_PROPERTY_STATS_INTELLECT_BONUS = 79,
	MODIFIER_PROPERTY_CAST_RANGE_BONUS = 80,
	MODIFIER_PROPERTY_CAST_RANGE_BONUS_TARGET = 81,
	MODIFIER_PROPERTY_CAST_RANGE_BONUS_STACKING = 82,
	MODIFIER_PROPERTY_ATTACK_RANGE_BASE_OVERRIDE = 83,
	MODIFIER_PROPERTY_ATTACK_RANGE_BONUS = 84,
	MODIFIER_PROPERTY_ATTACK_RANGE_BONUS_UNIQUE = 85,
	MODIFIER_PROPERTY_ATTACK_RANGE_BONUS_PERCENTAGE = 86,
	MODIFIER_PROPERTY_MAX_ATTACK_RANGE = 87,
	MODIFIER_PROPERTY_PROJECTILE_SPEED_BONUS = 88,
	MODIFIER_PROPERTY_PROJECTILE_NAME = 89,
	MODIFIER_PROPERTY_REINCARNATION = 90,
	MODIFIER_PROPERTY_RESPAWNTIME = 91,
	MODIFIER_PROPERTY_RESPAWNTIME_PERCENTAGE = 92,
	MODIFIER_PROPERTY_RESPAWNTIME_STACKING = 93,
	MODIFIER_PROPERTY_COOLDOWN_PERCENTAGE = 94,
	MODIFIER_PROPERTY_COOLDOWN_PERCENTAGE_STACKING = 95,
	MODIFIER_PROPERTY_CASTTIME_PERCENTAGE = 96,
	MODIFIER_PROPERTY_MANACOST_PERCENTAGE = 97,
	MODIFIER_PROPERTY_MANACOST_PERCENTAGE_STACKING = 98,
	MODIFIER_PROPERTY_DEATHGOLDCOST = 99,
	MODIFIER_PROPERTY_EXP_RATE_BOOST = 100,
	MODIFIER_PROPERTY_PREATTACK_CRITICALSTRIKE = 101,
	MODIFIER_PROPERTY_PREATTACK_TARGET_CRITICALSTRIKE = 102,
	MODIFIER_PROPERTY_MAGICAL_CONSTANT_BLOCK = 103,
	MODIFIER_PROPERTY_PHYSICAL_CONSTANT_BLOCK = 104,
	MODIFIER_PROPERTY_PHYSICAL_CONSTANT_BLOCK_SPECIAL = 105,
	MODIFIER_PROPERTY_TOTAL_CONSTANT_BLOCK_UNAVOIDABLE_PRE_ARMOR = 106,
	MODIFIER_PROPERTY_TOTAL_CONSTANT_BLOCK = 107,
	MODIFIER_PROPERTY_OVERRIDE_ANIMATION = 108,
	MODIFIER_PROPERTY_OVERRIDE_ANIMATION_WEIGHT = 109,
	MODIFIER_PROPERTY_OVERRIDE_ANIMATION_RATE = 110,
	MODIFIER_PROPERTY_ABSORB_SPELL = 111,
	MODIFIER_PROPERTY_REFLECT_SPELL = 112,
	MODIFIER_PROPERTY_DISABLE_AUTOATTACK = 113,
	MODIFIER_PROPERTY_BONUS_DAY_VISION = 114,
	MODIFIER_PROPERTY_BONUS_NIGHT_VISION = 115,
	MODIFIER_PROPERTY_BONUS_NIGHT_VISION_UNIQUE = 116,
	MODIFIER_PROPERTY_BONUS_VISION_PERCENTAGE = 117,
	MODIFIER_PROPERTY_FIXED_DAY_VISION = 118,
	MODIFIER_PROPERTY_FIXED_NIGHT_VISION = 119,
	MODIFIER_PROPERTY_MIN_HEALTH = 120,
	MODIFIER_PROPERTY_ABSOLUTE_NO_DAMAGE_PHYSICAL = 121,
	MODIFIER_PROPERTY_ABSOLUTE_NO_DAMAGE_MAGICAL = 122,
	MODIFIER_PROPERTY_ABSOLUTE_NO_DAMAGE_PURE = 123,
	MODIFIER_PROPERTY_IS_ILLUSION = 124,
	MODIFIER_PROPERTY_ILLUSION_LABEL = 125,
	MODIFIER_PROPERTY_SUPER_ILLUSION = 126,
	MODIFIER_PROPERTY_SUPER_ILLUSION_WITH_ULTIMATE = 127,
	MODIFIER_PROPERTY_TURN_RATE_PERCENTAGE = 128,
	MODIFIER_PROPERTY_TURN_RATE_OVERRIDE = 129,
	MODIFIER_PROPERTY_DISABLE_HEALING = 130,
	MODIFIER_PROPERTY_ALWAYS_ALLOW_ATTACK = 131,
	MODIFIER_PROPERTY_OVERRIDE_ATTACK_MAGICAL = 132,
	MODIFIER_PROPERTY_UNIT_STATS_NEEDS_REFRESH = 133,
	MODIFIER_PROPERTY_BOUNTY_CREEP_MULTIPLIER = 134,
	MODIFIER_PROPERTY_BOUNTY_OTHER_MULTIPLIER = 135,
	MODIFIER_PROPERTY_UNIT_DISALLOW_UPGRADING = 136,
	MODIFIER_PROPERTY_DODGE_PROJECTILE = 137,
	MODIFIER_EVENT_ON_SPELL_TARGET_READY = 138,
	MODIFIER_EVENT_ON_ATTACK_RECORD = 139,
	MODIFIER_EVENT_ON_ATTACK_START = 140,
	MODIFIER_EVENT_ON_ATTACK = 141,
	MODIFIER_EVENT_ON_ATTACK_LANDED = 142,
	MODIFIER_EVENT_ON_ATTACK_FAIL = 143,
	MODIFIER_EVENT_ON_ATTACK_ALLIED = 144,
	MODIFIER_EVENT_ON_PROJECTILE_DODGE = 145,
	MODIFIER_EVENT_ON_ORDER = 146,
	MODIFIER_EVENT_ON_UNIT_MOVED = 147,
	MODIFIER_EVENT_ON_ABILITY_START = 148,
	MODIFIER_EVENT_ON_ABILITY_EXECUTED = 149,
	MODIFIER_EVENT_ON_ABILITY_FULLY_CAST = 150,
	MODIFIER_EVENT_ON_BREAK_INVISIBILITY = 151,
	MODIFIER_EVENT_ON_ABILITY_END_CHANNEL = 152,
	MODIFIER_EVENT_ON_PROCESS_UPGRADE = 153,
	MODIFIER_EVENT_ON_REFRESH = 154,
	MODIFIER_EVENT_ON_TAKEDAMAGE = 155,
	MODIFIER_EVENT_ON_STATE_CHANGED = 156,
	MODIFIER_EVENT_ON_ORB_EFFECT = 157,
	MODIFIER_EVENT_ON_PROCESS_CLEAVE = 158,
	MODIFIER_EVENT_ON_DAMAGE_CALCULATED = 159,
	MODIFIER_EVENT_ON_ATTACKED = 160,
	MODIFIER_EVENT_ON_DEATH = 161,
	MODIFIER_EVENT_ON_RESPAWN = 162,
	MODIFIER_EVENT_ON_SPENT_MANA = 163,
	MODIFIER_EVENT_ON_TELEPORTING = 164,
	MODIFIER_EVENT_ON_TELEPORTED = 165,
	MODIFIER_EVENT_ON_SET_LOCATION = 166,
	MODIFIER_EVENT_ON_HEALTH_GAINED = 167,
	MODIFIER_EVENT_ON_MANA_GAINED = 168,
	MODIFIER_EVENT_ON_TAKEDAMAGE_KILLCREDIT = 169,
	MODIFIER_EVENT_ON_HERO_KILLED = 170,
	MODIFIER_EVENT_ON_HEAL_RECEIVED = 171,
	MODIFIER_EVENT_ON_BUILDING_KILLED = 172,
	MODIFIER_EVENT_ON_MODEL_CHANGED = 173,
	MODIFIER_EVENT_ON_MODIFIER_ADDED = 174,
	MODIFIER_PROPERTY_TOOLTIP = 175,
	MODIFIER_PROPERTY_MODEL_CHANGE = 176,
	MODIFIER_PROPERTY_MODEL_SCALE = 177,
	MODIFIER_PROPERTY_IS_SCEPTER = 178,
	MODIFIER_PROPERTY_TRANSLATE_ACTIVITY_MODIFIERS = 179,
	MODIFIER_PROPERTY_TRANSLATE_ATTACK_SOUND = 180,
	MODIFIER_PROPERTY_LIFETIME_FRACTION = 181,
	MODIFIER_PROPERTY_PROVIDES_FOW_POSITION = 182,
	MODIFIER_PROPERTY_SPELLS_REQUIRE_HP = 183,
	MODIFIER_PROPERTY_FORCE_DRAW_MINIMAP = 184,
	MODIFIER_PROPERTY_DISABLE_TURNING = 185,
	MODIFIER_PROPERTY_IGNORE_CAST_ANGLE = 186,
	MODIFIER_PROPERTY_CHANGE_ABILITY_VALUE = 187,
	MODIFIER_PROPERTY_ABILITY_LAYOUT = 188,
	MODIFIER_EVENT_ON_DOMINATED = 189,
	MODIFIER_PROPERTY_TEMPEST_DOUBLE = 190,
	MODIFIER_PROPERTY_PRESERVE_PARTICLES_ON_MODEL_CHANGE = 191,
	MODIFIER_EVENT_ON_ATTACK_FINISHED = 192,
	MODIFIER_PROPERTY_IGNORE_COOLDOWN = 193,
	MODIFIER_PROPERTY_CAN_ATTACK_TREES = 194,
	MODIFIER_PROPERTY_VISUAL_Z_DELTA = 195,
	MODIFIER_PROPERTY_INCOMING_DAMAGE_ILLUSION = 196,
	MODIFIER_PROPERTY_DONT_GIVE_VISION_OF_ATTACKER = 197,
	MODIFIER_PROPERTY_TOOLTIP2 = 198,
	MODIFIER_EVENT_ON_ATTACK_RECORD_DESTROY = 199,
	MODIFIER_EVENT_ON_PROJECTILE_OBSTRUCTION_HIT = 200,
	MODIFIER_PROPERTY_SUPPRESS_TELEPORT = 201,
	MODIFIER_FUNCTION_LAST = 202,
	MODIFIER_FUNCTION_INVALID = 255
}

declare const enum DOTATeam_t {
	DOTA_TEAM_SPECTATOR = 1,
	DOTA_TEAM_FIRST = 2,
	DOTA_TEAM_GOODGUYS = 2,
	DOTA_TEAM_BADGUYS = 3,
	DOTA_TEAM_NEUTRALS = 4,
	DOTA_TEAM_NOTEAM = 5,
	DOTA_TEAM_CUSTOM_1 = 6,
	DOTA_TEAM_CUSTOM_2 = 7,
	DOTA_TEAM_CUSTOM_3 = 8,
	DOTA_TEAM_CUSTOM_4 = 9,
	DOTA_TEAM_CUSTOM_5 = 10,
	DOTA_TEAM_CUSTOM_6 = 11,
	DOTA_TEAM_CUSTOM_7 = 12,
	DOTA_TEAM_CUSTOM_8 = 13,
	DOTA_TEAM_COUNT = 14,
	DOTA_TEAM_CUSTOM_MIN = 6,
	DOTA_TEAM_CUSTOM_MAX = 13,
	DOTA_TEAM_CUSTOM_COUNT = 8
}

declare const enum CreatureAbilityType {
	CREATURE_ABILITY_OFFENSIVE = 0,
	CREATURE_ABILITY_DEFENSIVE = 1,
	CREATURE_ABILITY_ESCAPE = 2
}

declare const enum SeqResourcePoseSettingEnum {
	SEQ_POSE_CONSTANT = 0,
	SEQ_POSE_ROTATION = 1,
	SEQ_POSE_POSITION = 2,
	SEQ_POSE_VELOCITY = 3
}

declare const enum EntityDormancyType_t {
	ENTITY_NOT_DORMANT = 0,
	ENTITY_DORMANT = 1,
	ENTITY_SUSPENDED = 2
}

declare const enum StartupBehavior_t {
	UNIT_STARTUP_BEHAVIOR_DEFAULT = 0,
	UNIT_STARTUP_BEHAVIOR_TAUNT = 1
}

declare const enum BinaryNodeTiming {
	UseChild1 = 0,
	UseChild2 = 1,
	SyncChildren = 2
}

declare const enum ResetCycleOption {
	Beginning = 0,
	SameCycleAsSource = 1,
	InverseSourceCycle = 2,
	FixedValue = 3
}

declare const enum DOTA_LANE {
	DOTA_LANE_NONE = 0,
	DOTA_LANE_TOP = 1,
	DOTA_LANE_MIDDLE = 2,
	DOTA_LANE_BOTTOM = 3,
	DOTA_LANE_MAX = 4
}

declare const enum DOTAHUDVisibility_t {
	DOTA_HUD_VISIBILITY_INVALID = -1,
	DOTA_HUD_VISIBILITY_TOP_TIMEOFDAY = 0,
	DOTA_HUD_VISIBILITY_TOP_HEROES = 1,
	DOTA_HUD_VISIBILITY_TOP_SCOREBOARD = 2,
	DOTA_HUD_VISIBILITY_ACTION_PANEL = 3,
	DOTA_HUD_VISIBILITY_ACTION_MINIMAP = 4,
	DOTA_HUD_VISIBILITY_INVENTORY_PANEL = 5,
	DOTA_HUD_VISIBILITY_INVENTORY_SHOP = 6,
	DOTA_HUD_VISIBILITY_INVENTORY_ITEMS = 7,
	DOTA_HUD_VISIBILITY_INVENTORY_QUICKBUY = 8,
	DOTA_HUD_VISIBILITY_INVENTORY_COURIER = 9,
	DOTA_HUD_VISIBILITY_INVENTORY_PROTECT = 10,
	DOTA_HUD_VISIBILITY_INVENTORY_GOLD = 11,
	DOTA_HUD_VISIBILITY_SHOP_SUGGESTEDITEMS = 12,
	DOTA_HUD_VISIBILITY_HERO_SELECTION_TEAMS = 13,
	DOTA_HUD_VISIBILITY_HERO_SELECTION_GAME_NAME = 14,
	DOTA_HUD_VISIBILITY_HERO_SELECTION_CLOCK = 15,
	DOTA_HUD_VISIBILITY_TOP_MENU_BUTTONS = 16,
	DOTA_HUD_VISIBILITY_TOP_BAR_BACKGROUND = 17,
	DOTA_HUD_VISIBILITY_TOP_BAR_RADIANT_TEAM = 18,
	DOTA_HUD_VISIBILITY_TOP_BAR_DIRE_TEAM = 19,
	DOTA_HUD_VISIBILITY_TOP_BAR_SCORE = 20,
	DOTA_HUD_VISIBILITY_ENDGAME = 21,
	DOTA_HUD_VISIBILITY_ENDGAME_CHAT = 22,
	DOTA_HUD_VISIBILITY_QUICK_STATS = 23,
	DOTA_HUD_VISIBILITY_PREGAME_STRATEGYUI = 24,
	DOTA_HUD_VISIBILITY_KILLCAM = 25,
	DOTA_HUD_VISIBILITY_TOP_BAR = 26,
	DOTA_HUD_VISIBILITY_COUNT = 27
}

declare const enum ABILITY_TYPES {
	ABILITY_TYPE_BASIC = 0,
	ABILITY_TYPE_ULTIMATE = 1,
	ABILITY_TYPE_ATTRIBUTES = 2,
	ABILITY_TYPE_HIDDEN = 3
}

declare const enum ActionType_t {
	SOS_ACTION_NONE = 0,
	SOS_ACTION_LIMITER = 1
}

declare const enum FootFallTagFoot_t {
	FOOT1 = 0,
	FOOT2 = 1,
	FOOT3 = 2,
	FOOT4 = 3,
	FOOT5 = 4,
	FOOT6 = 5,
	FOOT7 = 6,
	FOOT8 = 7
}

declare const enum BundleType_t {
	BUNDLE_TYPE_NONE = 0,
	BUNDLE_TYPE_POSITION_SPEED = 1,
	BUNDLE_TYPE_NORMAL_WRINKLE = 2,
	BUNDLE_TYPE_COUNT = 3
}

declare const enum ShakeCommand_t {
	SHAKE_START = 0,
	SHAKE_STOP = 1,
	SHAKE_AMPLITUDE = 2,
	SHAKE_FREQUENCY = 3,
	SHAKE_START_RUMBLEONLY = 4,
	SHAKE_START_NORUMBLE = 5
}

declare const enum PoseController_FModType_t {
	POSECONTROLLER_FMODTYPE_NONE = 0,
	POSECONTROLLER_FMODTYPE_SINE = 1,
	POSECONTROLLER_FMODTYPE_SQUARE = 2,
	POSECONTROLLER_FMODTYPE_TRIANGLE = 3,
	POSECONTROLLER_FMODTYPE_SAWTOOTH = 4,
	POSECONTROLLER_FMODTYPE_NOISE = 5,
	POSECONTROLLER_FMODTYPE_TOTAL = 6
}

declare const enum WorldTextPanelVerticalAlign_t {
	WORLDTEXT_VERTICAL_ALIGN_TOP = 0,
	WORLDTEXT_VERTICAL_ALIGN_CENTER = 1,
	WORLDTEXT_VERTICAL_ALIGN_BOTTOM = 2
}

declare const enum NetChannelBufType_t {
	BUF_DEFAULT = -1,
	BUF_UNRELIABLE = 0,
	BUF_RELIABLE = 1,
	BUF_VOICE = 2
}

declare const enum PointWorldTextJustifyHorizontal_t {
	POINT_WORLD_TEXT_JUSTIFY_HORIZONTAL_LEFT = 0,
	POINT_WORLD_TEXT_JUSTIFY_HORIZONTAL_CENTER = 1,
	POINT_WORLD_TEXT_JUSTIFY_HORIZONTAL_RIGHT = 2
}
