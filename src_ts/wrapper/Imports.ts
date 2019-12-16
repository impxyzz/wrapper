// enums
export { ArmorType } from "./Enums/ArmorType"
export { AttackDamageType } from "./Enums/AttackDamageType"
export { ConnectionState } from "./Enums/ConnectionState"
export { DOTAGameUIState_t } from "./Enums/DOTAGameUIState_t"
export { DOTA_GameMode } from "./Enums/DOTA_GameMode"
export { DOTA_GameState } from "./Enums/DOTA_GameState"
export { Flow_t } from "./Enums/Flow_t"
export { FontFlags_t } from "./Enums/FontFlags_t"
export { PingType_t } from "./Enums/PingType_t"
export { Team } from "./Enums/Team"
export { dotaunitorder_t } from "./Enums/dotaunitorder_t"

import * as ArrayExtensions from "./Utils/ArrayExtensions"
import * as BitsExtensions from "./Utils/BitsExtensions"
import * as MapExtensions from "./Utils/MapExtensions"
import * as MathSDK from "./Utils/Math"
import * as Parse from "./Utils/ParseKV"
import * as Utils from "./Utils/Utils"
export { default as Benchmark } from "./Utils/BenchMark"
export { Utils, MathSDK, ArrayExtensions, BitsExtensions, MapExtensions, Parse }

export { default as Vector2 } from "./Base/Vector2"
export { default as Rectangle } from "./Base/Rectangle"
export { default as Vector3 } from "./Base/Vector3"
export { default as QAngle } from "./Base/QAngle"
export { default as Color } from "./Base/Color"

import * as Menu from "./Menu/Imports"
export { Menu }

export { Sleeper, GameSleeper, TickSleeper } from "./Helpers/Sleeper"

export { default as ParticlesSDK } from "./Managers/Particles"
export { default as Events, EventEmitter } from "./Managers/Events"
export { default as Game } from "./Objects/GameResources/GameRules"
export { default as PlayerResource } from "./Objects/GameResources/PlayerResource"
export { default as EntityManager, LocalPlayer } from "./Managers/EntityManager"
export { default as EventsSDK } from "./Managers/EventsSDK"
export {
	default as Input,
	InputEventSDK,
	InputMessage,
	VKeys,
	VMouseKeys,
	VXMouseKeys,
	MouseWheel,
} from "./Managers/InputManager"
export { default as RendererSDK } from "./Native/RendererSDK"
export { default as ExecuteOrder, ORDERS_WITHOUT_SIDE_EFFECTS } from "./Native/ExecuteOrder"

export { default as Entity, EntityNullable, CEntityNullable } from "./Objects/Base/Entity"
export { default as Unit, UnitNullable } from "./Objects/Base/Unit"
export { default as Hero, HeroNullable } from "./Objects/Base/Hero"
export { default as Player, PlayerNullable } from "./Objects/Base/Player"
export { default as Courier } from "./Objects/Base/Courier"
export { default as Creep } from "./Objects/Base/Creep"
export { default as Meepo } from "./Objects/Heroes/Meepo"
export { default as Roshan } from "./Objects/Units/Roshan"

export { default as Ability, AbilityNullable } from "./Objects/Base/Ability"
export { default as Item, ItemNullable } from "./Objects/Base/Item"
export {
	default as Modifier,
	ModifierNullable,
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
export { default as WardObserver } from "./Objects/Base/WardObserver"
export { default as WardTrueSight } from "./Objects/Base/WardTrueSight"

export { LinearProjectile, TrackingProjectile } from "./Objects/Base/Projectile"
export { default as ProjectileManager } from "./Managers/ProjectileManager"

/*
	TODO:

	- wrapper:
		C_DOTA_DataNonSpectator -> DataNonSpectator
		C_DOTA_UnitInventory 	-> Inventory

	TODO Native:

	- add AbilitySlot (index in slots)
	- reverse:
		Global:
			UnSelectUnit

		C_DOTA_BaseNPC | Unit
			BaseArmor
			BaseHealthRegeneration
			BaseManaRegeneration
	- check painttravarse - streamer mode
*/
