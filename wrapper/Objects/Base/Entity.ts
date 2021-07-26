import AABB from "../../Base/AABB"
import Color from "../../Base/Color"
import QAngle from "../../Base/QAngle"
import Vector2 from "../../Base/Vector2"
import Vector3 from "../../Base/Vector3"
import { NetworkedBasicField, WrapperClass } from "../../Decorators"
import { GameActivity_t } from "../../Enums/GameActivity_t"
import { LifeState_t } from "../../Enums/LifeState_t"
import { RenderMode_t } from "../../Enums/RenderMode_t"
import { Team } from "../../Enums/Team"
import { default as EntityManager, EntityPropertiesNode } from "../../Managers/EntityManager"
import EventsSDK from "../../Managers/EventsSDK"
import Manifest from "../../Managers/Manifest"
import * as StringTables from "../../Managers/StringTables"
import RendererSDK from "../../Native/RendererSDK"
import Player from "../../Objects/Base/Player"
import { ComputeAttachmentsAndBoundsAsync, ComputedAttachment, ComputedAttachments } from "../../Resources/ComputeAttachments"
import GameState from "../../Utils/GameState"
import { DegreesToRadian } from "../../Utils/Math"
import CGameRules from "./GameRules"
import Item from "./Item"

export var LocalPlayer: Nullable<Player>
let player_slot = NaN
EventsSDK.on("ServerInfo", info => player_slot = (info.get("player_slot") as number) ?? NaN)
let gameInProgress = false
const ModelDataCache = new Map<string, Promise<[ComputedAttachments, Vector3, Vector3]>>()
export async function SetGameInProgress(new_val: boolean) {
	if (!gameInProgress && new_val)
		await EventsSDK.emit("GameStarted", false)
	else if (gameInProgress && !new_val) {
		await EventsSDK.emit("GameEnded", false)
		Particles.DeleteAll()
		RendererSDK.FreeTextureCache()
	}
	gameInProgress = new_val
}
EventsSDK.on("PreEntityCreated", async ent => {
	if (ent.Index === player_slot + 1) {
		LocalPlayer = ent as Player
		await SetGameInProgress(true)
	}
})
EventsSDK.on("EntityDestroyed", async ent => {
	if (ent === LocalPlayer) {
		LocalPlayer = undefined
		await SetGameInProgress(false)
	}
})
export let GameRules: Nullable<CGameRules>
EventsSDK.on("PreEntityCreated", ent => {
	if (ent.IsGameRules)
		GameRules = ent as CGameRules
})
EventsSDK.on("EntityDestroyed", ent => {
	if (!ent.IsGameRules)
		return
	GameRules = undefined
	GameState.RawGameTime = 0
})

/*
m_pEntity.m_flags

1 << 2 is EF_IN_STAGING_LIST
1 << 4 is EF_DELETE_IN_PROGRESS
*/
@WrapperClass("CBaseEntity")
export default class Entity {
	public IsValid = true
	public Name_ = ""
	@NetworkedBasicField("m_flCreateTime")
	public CreateTime_ = 0
	public FakeCreateTime_ = GameState.RawGameTime
	public Team = Team.None
	public LifeState = LifeState_t.LIFE_DEAD
	@NetworkedBasicField("m_iHealth")
	public HP = 0
	@NetworkedBasicField("m_iMaxHealth")
	public MaxHP = 0
	public ClassName = ""
	public BecameDormantTime = 0
	public ModelName = ""
	public Agility = 0
	public Intellect = 0
	public Strength = 0
	public TotalAgility = 0
	public TotalIntellect = 0
	public TotalStrength = 0
	public Owner_ = 0
	public OwnerEntity: Nullable<Entity> = undefined
	@NetworkedBasicField("CBodyComponent")
	public CBodyComponent_: Nullable<EntityPropertiesNode> = undefined
	public IsVisible = true
	public DeltaZ = 0
	public readonly NetworkedPosition = new Vector3()
	public readonly Position = new Vector3()
	public readonly NetworkedAngles = new QAngle()
	public readonly Angles = new QAngle()
	public readonly BoundingBox = new AABB(this.Position)
	public Attachments: Nullable<ComputedAttachments>
	private CustomGlowColor_: Nullable<Color>
	private CustomDrawColor_: Nullable<[Color, RenderMode_t]>
	private RingRadius_ = 30

	constructor(public readonly Index: number) { }

	public get CustomGlowColor(): Nullable<Color> {
		return this.CustomGlowColor_
	}
	public set CustomGlowColor(val: Nullable<Color>) {
		if (this.CustomGlowColor_ === undefined && val === undefined)
			return
		this.CustomGlowColor_ = val
		last_glow_ents.add(this)
	}
	public get CustomDrawColor(): Nullable<[Color, RenderMode_t]> {
		return this.CustomDrawColor_
	}
	public set CustomDrawColor(val: Nullable<[Color, RenderMode_t]>) {
		if (this.CustomDrawColor_ === undefined && val === undefined)
			return
		this.CustomDrawColor_ = val
		last_colored_ents.add(this)
	}
	public get Name(): string {
		return this.Name_
	}
	public get Owner(): Nullable<Entity> {
		return this.OwnerEntity
	}
	public get RootOwner(): Nullable<Entity> {
		let owner = this.Owner
		while (true) {
			const root_owner = owner?.Owner
			if (root_owner === undefined)
				break

			owner = root_owner
		}
		return owner
	}
	public get NetworkedRotation(): number {
		const ang = this.NetworkedAngles.y
		if (ang >= 180)
			return ang - 360
		return ang
	}
	public get Rotation(): number {
		const ang = this.Angles.y
		if (ang >= 180)
			return ang - 360
		return ang
	}
	public get CreateTime() {
		return this.CreateTime_ !== 0
			? this.CreateTime_
			: this.FakeCreateTime_
	}
	public get HPPercent(): number {
		return Math.floor(this.HP / this.MaxHP * 100) || 0
	}
	public get IsAlive(): boolean {
		return this.LifeState === LifeState_t.LIFE_ALIVE || this.LifeState === LifeState_t.LIFE_RESPAWNING
	}
	public get Forward(): Vector3 {
		return Vector3.FromAngle(this.RotationRad)
	}
	public get RotationRad(): number {
		return DegreesToRadian(this.Rotation)
	}
	public get NetworkedRotationRad(): number {
		return DegreesToRadian(this.NetworkedRotation)
	}
	public get IsNeutral(): boolean {
		return this.Team === Team.Neutral || this.Team === Team.Shop
	}

	public get Speed(): number {
		return 0
	}
	public get CollisionRadius(): number {
		return 20 // TODO: native crutch broke, we need to completely rewrite that in TS
	}
	public get ProjectileCollisionSize(): number {
		return this.CollisionRadius
	}
	public get RingRadius(): number {
		return this.RingRadius_
	}
	public get IsGameRules(): boolean {
		return false
	}
	public get IsShop(): boolean {
		return false
	}
	public get CustomNativeID(): number {
		return this.Index << 1
	}
	public get AnimationTime(): number {
		return 0
	}

	public async AsyncCreate(): Promise<void> {
		// TBD in child classes
	}
	public Distance(vec: Vector3 | Entity): number {
		if (vec instanceof Entity)
			vec = vec.Position
		return this.Position.Distance(vec)
	}
	public Distance2D(vec: Vector3 | Vector2 | Entity): number {
		if (vec instanceof Entity)
			vec = vec.Position
		return this.Position.Distance2D(vec)
	}
	public DistanceSqr(vec: Vector3 | Entity): number {
		if (vec instanceof Entity)
			vec = vec.Position
		return this.Position.DistanceSqr(vec)
	}
	public DistanceSqr2D(vec: Vector3 | Vector2 | Entity): number {
		if (vec instanceof Entity)
			vec = vec.Position
		return this.Position.DistanceSqr2D(vec)
	}
	public AngleBetweenFaces(front: Vector3): number {
		return this.Forward.AngleBetweenFaces(front)
	}
	public InFront(distance: number): Vector3 {
		return this.Position.Rotation(this.Forward, distance)
	}
	public InFrontFromAngle(angle: number, distance: number): Vector3 {
		return this.Position.InFrontFromAngle(this.RotationRad + angle, distance)
	}
	public FindRotationAngle(vec: Vector3 | Entity): number {
		if (vec instanceof Entity)
			vec = vec.Position
		return this.Position.FindRotationAngle(vec, this.RotationRad)
	}
	/**
	 * That's a bit faster than just checking this.Distance(ent) < range,
	 * since square root is omitted, and square of number is easier to calculate
	 * than square root
	 */
	public IsInRange(ent: Vector3 | Vector2 | Entity, range: number): boolean {
		return this.DistanceSqr2D(ent) < range ** 2
	}
	public Closest(ents: Entity[]): Entity {
		const thisPos = this.Position

		let entity: Nullable<Entity>
		let distance = Number.POSITIVE_INFINITY

		ents.forEach(ent => {
			const tempDist = ent.Distance(thisPos)
			if (tempDist < distance) {
				distance = tempDist
				entity = ent
			}
		})

		return entity as Entity
	}
	/**
	 * @example
	 * unit.ClosestGroup(groups, group => Vector3.GetCenterType(creeps, creep => creep.InFront(200)))
	 */
	public ClosestGroup(groups: Entity[][], callback: (entity: Entity[]) => Vector3): [Entity[], Vector3] {
		const thisPos = this.Position

		let entities: Entity[] = []
		let vec = new Vector3()
		let distance = Number.POSITIVE_INFINITY

		groups.forEach(group => {
			const tempVec = callback(group)
			const tempDist = thisPos.Distance(tempVec)

			if (tempDist < distance) {
				distance = tempDist
				entities = group
				vec = tempVec
			}
		})
		return [entities, vec]
	}
	/**
	 * @param ent optional, defaults to LocalPlayer
	 */
	public IsEnemy(ent?: Entity): boolean {
		const team = ent?.Team ?? GameState.LocalTeam
		return this.Team !== team
	}

	public OnModelUpdated(): void {
		const initial_radius = this.RingRadius !== 0
			? this.RingRadius
			: 50
		const min = this.BoundingBox.MinOffset,
			max = this.BoundingBox.MaxOffset
		min.x = -initial_radius
		min.y = -initial_radius
		min.z = 0
		max.x = initial_radius
		max.y = initial_radius
		max.z = initial_radius
		let promise = ModelDataCache.get(this.ModelName)
		if (promise === undefined) {
			promise = ComputeAttachmentsAndBoundsAsync(this.ModelName)
			ModelDataCache.set(this.ModelName, promise)
		}
		promise.then(ar => {
			this.Attachments = ar[0]
			this.BoundingBox.MinOffset.CopyFrom(ar[1])
			this.BoundingBox.MaxOffset.CopyFrom(ar[2])
			const min_xy = Math.min(min.x, min.y, max.x, max.y),
				max_xy = Math.max(min.x, min.y, max.x, max.y)
			this.RingRadius_ = Math.max(Math.abs(min_xy), Math.abs(max_xy))
			min.x = -this.RingRadius
			min.y = -this.RingRadius
			max.x = this.RingRadius
			max.y = this.RingRadius
		}, console.error)
	}
	public GetAttachment(
		name: string,
		activity = GameActivity_t.ACT_DOTA_IDLE,
	): Nullable<ComputedAttachment> {
		// return this.Attachments?.get(activity)?.find(attach => attach.Name === name)
		return undefined
	}
	public ForwardNativeProperties(
		m_fAttackRange: number,
		m_fAttackSpeed: number,
		m_fIncreasedAttackSpeed: number,
		m_fAttacksPerSecond: number,
		m_fIdealSpeed: number,
		m_flBaseAttackTime: number,
		m_iHealthBarOffset: number,
		m_iMoveCapabilities: number,
		m_flMagicalResistanceValueReal: number,
		m_flBonusPhysicalArmor: number,
	) {
		// To be implemented in child classes
	}

	public CannotUseItem(_item: Item): boolean {
		return false
	}

	public toString(): string {
		return this.Name
	}
}

function QuantitizedVecCoordToCoord(cell: Nullable<number>, inside: Nullable<number>): number {
	return ((cell ?? 0) - 128) * 128 + (inside ?? 0)
}

import { RegisterFieldHandler } from "wrapper/Objects/NativeToSDK"
import Events from "../../Managers/Events"
RegisterFieldHandler(Entity, "m_iTeamNum", async (ent, new_val) => {
	const old_team = ent.Team
	ent.Team = new_val as Team
	if (ent.IsValid && old_team !== ent.Team)
		await EventsSDK.emit("EntityTeamChanged", false, ent)
})
RegisterFieldHandler(Entity, "m_lifeState", async (ent, new_val) => {
	const old_state = ent.LifeState
	ent.LifeState = new_val as LifeState_t
	if (ent.IsValid && old_state !== ent.LifeState)
		await EventsSDK.emit("LifeStateChanged", false, ent)
})
RegisterFieldHandler(Entity, "m_hModel", (ent, new_val) => {
	ent.ModelName = Manifest.GetPathByHash(new_val as bigint) ?? ""
	ent.OnModelUpdated()
})
EventsSDK.on("GameEnded", () => ModelDataCache.clear())
RegisterFieldHandler(Entity, "m_angRotation", (ent, new_val) => {
	const m_angRotation = new_val as QAngle
	ent.NetworkedAngles.CopyFrom(m_angRotation)
	ent.Angles.CopyFrom(m_angRotation)
})
RegisterFieldHandler(Entity, "m_nameStringableIndex", async (ent, new_val) => {
	const old_name = ent.Name
	ent.Name_ = StringTables.GetString("EntityNames", new_val as number) ?? ent.Name_
	if (ent.IsValid && old_name !== ent.Name)
		await EventsSDK.emit("EntityNameChanged", false, ent)
})

RegisterFieldHandler(Entity, "m_hOwnerEntity", (ent, new_val) => {
	ent.Owner_ = (new_val as number) & 0x3FFF
	ent.OwnerEntity = EntityManager.EntityByIndex(ent.Owner_)
})
EventsSDK.on("PreEntityCreated", ent => {
	if (ent.Index === 0)
		return
	EntityManager.AllEntities.forEach(iter => {
		if (iter.Owner_ === ent.Index)
			iter.OwnerEntity = ent
	})
})
EventsSDK.on("EntityDestroyed", ent => {
	if (ent.Index === 0)
		return
	EntityManager.AllEntities.forEach(iter => {
		if (iter.Owner_ === ent.Index)
			iter.OwnerEntity = undefined
	})
})

RegisterFieldHandler(Entity, "m_cellX", (ent, new_val) => {
	ent.NetworkedPosition.x = ent.Position.x = QuantitizedVecCoordToCoord(
		new_val as number,
		ent.CBodyComponent_?.get("m_vecX") as Nullable<number>,
	)
})
RegisterFieldHandler(Entity, "m_vecX", (ent, new_val) => {
	ent.NetworkedPosition.x = ent.Position.x = QuantitizedVecCoordToCoord(
		ent.CBodyComponent_?.get("m_cellX") as Nullable<number>,
		new_val as number,
	)
})
RegisterFieldHandler(Entity, "m_cellY", (ent, new_val) => {
	ent.NetworkedPosition.y = ent.Position.y = QuantitizedVecCoordToCoord(
		new_val as number,
		ent.CBodyComponent_?.get("m_vecY") as Nullable<number>,
	)
})
RegisterFieldHandler(Entity, "m_vecY", (ent, new_val) => {
	ent.NetworkedPosition.y = ent.Position.y = QuantitizedVecCoordToCoord(
		ent.CBodyComponent_?.get("m_cellY") as Nullable<number>,
		new_val as number,
	)
})
RegisterFieldHandler(Entity, "m_cellZ", (ent, new_val) => {
	ent.NetworkedPosition.z = ent.Position.z = QuantitizedVecCoordToCoord(
		new_val as number,
		ent.CBodyComponent_?.get("m_vecZ") as Nullable<number>,
	)
})
RegisterFieldHandler(Entity, "m_vecZ", (ent, new_val) => {
	ent.NetworkedPosition.z = ent.Position.z = QuantitizedVecCoordToCoord(
		ent.CBodyComponent_?.get("m_cellZ") as Nullable<number>,
		new_val as number,
	)
})

EventsSDK.on("GameEvent", (name, obj) => {
	if (name !== "entity_hurt")
		return
	const ent = EntityManager.EntityByIndex(obj.entindex_killed)
	if (ent === undefined || !ent.IsAlive)
		return
	ent.HP = Math.max(Math.round(ent.HP - obj.damage), 1)
})

const last_glow_ents = new Set<Entity>()
function CustomGlowEnts(): void {
	last_glow_ents.forEach(ent => {
		if (!ent.IsValid) {
			last_glow_ents.delete(ent)
			return
		}
		const custom_id = ent.CustomNativeID
		const CustomGlowColor = ent.CustomGlowColor
		let color_u32 = 0
		if (CustomGlowColor !== undefined)
			color_u32 = CustomGlowColor.toUint32()
		else
			last_glow_ents.delete(ent)
		SetEntityGlow(custom_id, color_u32)
	})
}

const last_colored_ents = new Set<Entity>()
function CustomColorEnts(): void {
	last_colored_ents.forEach(ent => {
		if (!ent.IsValid) {
			last_colored_ents.delete(ent)
			return
		}
		const CustomDrawColor = ent.CustomDrawColor
		let color_u32 = 0,
			renderMode = RenderMode_t.kRenderNormal
		if (CustomDrawColor !== undefined) {
			color_u32 = CustomDrawColor[0].toUint32()
			renderMode = CustomDrawColor[1]
		} else {
			color_u32 = Color.White.toUint32()
			last_colored_ents.delete(ent)
		}
		SetEntityColor(ent.CustomNativeID, color_u32, renderMode)
	})
}

Events.after("Draw", () => {
	CustomColorEnts()
	CustomGlowEnts()
})
Events.on("NewConnection", () => {
	last_glow_ents.clear()
	last_colored_ents.clear()
})
