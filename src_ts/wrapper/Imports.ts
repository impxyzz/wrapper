// Utils
import * as ArrayExtensions from "./Utils/ArrayExtensions"
import * as Debug from "./Utils/Debug"
import * as MapExtensions from "./Utils/MapExtensions"
import * as MathSDK from "./Utils/Math"
import * as Parse from "./Utils/ParseKV"
import * as Utils from "./Utils/Utils"
export { default as Benchmark } from "./Utils/BenchMark"
export { Team } from "./Helpers/Team"
export { Utils, MathSDK, Debug, ArrayExtensions, MapExtensions, Parse }

// base
export { default as Vector2 } from "./Base/Vector2"
export { default as Rectangle } from "./Base/Rectangle"
export { default as Vector3 } from "./Base/Vector3"
export { default as QAngle } from "./Base/QAngle"
export { default as Color } from "./Base/Color"

// Native
export { default as RendererSDK } from "./Native/RendererSDK"
export { default as ExecuteOrder, ORDERS_WITHOUT_SIDE_EFFECTS } from "./Native/ExecuteOrder"

// Menu
import * as Menu from "./Menu/Imports"
export { Menu }

// Helpers
export { Sleeper, GameSleeper, TickSleeper } from "./Helpers/Sleeper"

// Managers
export {
	default as EntityManager,
	LocalPlayer,
	Game,
	PlayerResource
} from "./Managers/EntityManager";

export { default as ModifierManager } from "./Managers/ModifierManager"
export { default as ParticlesSDK } from "./Managers/Particles"
export { default as EventsSDK } from "./Managers/Events"

// Objects
export { default as Entity } from "./Objects/Base/Entity"
export { default as Unit } from "./Objects/Base/Unit"
export { default as Hero } from "./Objects/Base/Hero"
export { default as Player } from "./Objects/Base/Player"
export { default as Courier } from "./Objects/Base/Courier"
export { default as Creep } from "./Objects/Base/Creep"
export { default as Meepo } from "./Objects/Heroes/Meepo"
export { default as Roshan } from "./Objects/Units/Roshan"

export { default as Ability } from "./Objects/Base/Ability"
export { default as Item } from "./Objects/Base/Item"
export {
	default as Modifier,
	TRUESIGHT_MODIFIERS,
	SCEPTER_MODIFIERS,
	BLOCKING_DAMAGE_MODIFIERS,
	REFLECTING_DAMAGE_MODIFIERS
} from "./Objects/Base/Modifier"

export { default as PhysicalItem } from "./Objects/Base/PhysicalItem"
export { default as Rune } from "./Objects/Base/Rune"
export { default as Tree } from "./Objects/Base/Tree"
export { default as TreeTemp } from "./Objects/Base/TreeTemp"

export { default as Building } from "./Objects/Base/Building"
export { default as Tower } from "./Objects/Base/Tower"
export { default as Shop } from "./Objects/Base/Shop"

// projectiles
export { LinearProjectile, TrackingProjectile } from "./Objects/Base/Projectile"
export { default as ProjectileManager } from "./Managers/ProjectileManager"

/*
	TODO:

	- wrapper:
		C_DOTA_DataNonSpectator -> DataNonSpectator
		C_DOTA_UnitInventory 	-> Inventory
		CDOTA_ModifierManager 	-> Modifiers

	- check:
		C_DOTA_BaseNPC:
			m_flManaThinkRegen | m_flManaRegen 		-> ManaRegen
			m_flHealthThinkRegen | m_flHealthRegen 	-> HPRegen

			C_DOTA_Unit_Hero_Meepo 		-> m_bIsIllusion
		C_DOTAPlayer:
			m_flCameraZoomAmount

	TODO Native:

	- add AbilitySlot (index in slots)
	- particle list as entity list
	- particle destroyed
	- QAngle - add AsVector3
	- reverse:
		Global:
			UnSelectUnit

		C_DOTA_BaseNPC | Unit
			BaseArmor
			BaseHealthRegeneration
			BaseManaRegeneration
	- check painttravarse - streamer mode

*/
