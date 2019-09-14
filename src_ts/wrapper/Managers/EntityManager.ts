import { arrayRemove } from "../Utils/ArrayExtensions"

// import * as Debug from "../Utils/Debug"

import EventsSDK from "./Events"

import Vector3 from "../Base/Vector3"

import Creep from "../Objects/Base/Creep"
import Entity from "../Objects/Base/Entity"
import Hero from "../Objects/Base/Hero"
import Player from "../Objects/Base/Player"
import Unit from "../Objects/Base/Unit"

import Ability from "../Objects/Base/Ability"
import Item from "../Objects/Base/Item"
import NativeToSDK from "../Objects/NativeToSDK"

import { useQueueModifiers } from "./ModifierManager"

import Building from "../Objects/Base/Building"
import PhysicalItem from "../Objects/Base/PhysicalItem"
import Tower from "../Objects/Base/Tower"

import Game from "../Objects/GameResources/GameRules"
import PlayerResource from "../Objects/GameResources/PlayerResource"
import { HasBit } from "../Utils/Utils"

export { PlayerResource, Game }

let queueEntitiesAsMap = new Map<C_BaseEntity, Entity>()

let AllEntities: Entity[] = []
let EntitiesIDs = new Map<number, Entity>()
let AllEntitiesAsMap = new Map<C_BaseEntity, Entity>()
let InStage = new Map<C_BaseEntity, Entity>()

export let LocalPlayer: Player

class EntityManager {
	get LocalPlayer(): Player {
		return LocalPlayer
	}
	get LocalHero(): Hero {
		return LocalPlayer !== undefined ? LocalPlayer.Hero : undefined
	}
	get AllEntities(): Entity[] {
		return AllEntities.slice()
	}
	EntityByIndex(index: number): Entity {
		return EntitiesIDs.get(index)
	}
	GetPlayerByID(playerID: number): Player {
		if (playerID === -1)
			return undefined
		return AllEntities.find(entity => entity instanceof Player && entity.PlayerID === playerID) as Player
	}

	GetEntityByNative(ent: C_BaseEntity | number, inStage: boolean = false): Entity {
		if (ent === undefined)
			return undefined
		if (!(ent instanceof C_BaseEntity))
			return this.EntityByIndex(ent)

		let entityFind = AllEntitiesAsMap.get(ent)

		if (entityFind !== undefined)
			return entityFind

		if (!inStage)
			return undefined

		entityFind = InStage.get(ent)

		if (entityFind !== undefined)
			return entityFind

		return queueEntitiesAsMap.get(ent)
	}

	GetEntityByFilter(filter: (ent: Entity) => boolean, inStage: boolean = false): Entity {
		let found = AllEntities.find(filter)
		if (found !== undefined)
			return found

		if (!inStage)
			return undefined

		// loop-optimizer: KEEP
		InStage.forEach((ent, _) => {
			if (found === undefined && filter(ent))
				found = ent
		})
		if (found !== undefined)
			return found
		
		// loop-optimizer: KEEP
		queueEntitiesAsMap.forEach((ent, _) => {
			if (found === undefined && filter(ent))
				found = ent
		})

		return found
	}

	GetEntitiesByNative(ents: Array<C_BaseEntity | Entity | number>, inStage: boolean = false): Array<Entity | any> {
		// loop-optimizer: FORWARD
		return ents.map(ent => {
			if (ent instanceof Entity)
				return ent
			if (!(ent instanceof C_BaseEntity))
				return this.EntityByIndex(ent)
			let ent_ = AllEntitiesAsMap.get(ent)
			if (inStage)
				ent_ = ent_ || InStage.get(ent) || queueEntitiesAsMap.get(ent)
			return ent_ || ent
		})
	}

	GetEntitiesInRange(vec: Vector3, range: number, filter?: (value: Entity) => boolean): Entity[] {
		return AllEntities.filter(entity => {
			if (entity.Position.Distance(vec) > range)
				return false
			if (filter !== undefined)
				return filter(entity) === true
			return true
		})
	}
}

const entityManager = new EntityManager()

export default global.EntityManager = entityManager

Events.on("EntityCreated", (ent, index) => {
	{ // add globals
		if (ent instanceof C_DOTA_PlayerResource) {
			PlayerResource.m_pBaseEntity = ent
			return
		}

		if (ent instanceof C_DOTAGamerulesProxy) {
			Game.m_GameRules = ent.m_pGameRules
			return
		}

		if (ent instanceof C_DOTAGameManagerProxy) {
			Game.m_GameManager = ent.m_pGameManager
			return
		}
	}

	const entity = ClassFromNative(ent, index)

	if (LocalPlayer === undefined) {
		queueEntitiesAsMap.set(ent, entity)
		return
	}

	AddToCache(entity)
})

Events.on("EntityDestroyed", (ent, index) => {
	{ // delete global
		if (ent instanceof C_DOTA_PlayerResource) {
			PlayerResource.m_pBaseEntity = undefined
			return
		}

		if (ent instanceof C_DOTAGamerulesProxy) {
			Game.m_GameRules = undefined
			return
		}

		if (ent instanceof C_DOTAGameManagerProxy) {
			Game.m_GameManager = undefined
			return
		}

		if (ent instanceof C_DOTAPlayer && LocalPlayer !== undefined && LocalPlayer.m_pBaseEntity === ent)
			LocalPlayer = undefined
	}

	DeleteFromCache(ent, index)
})

/* ================ RUNTIME CACHE ================ */

function CheckIsInStagingEntity(ent: C_BaseEntity) {
	let ent_ = ent.m_pEntity
	return ent_ === undefined || HasBit(ent_.m_flags, 2)
}

setInterval(() => {
	// loop-optimizer: KEEP
	queueEntitiesAsMap.forEach((entity, baseEntity) => {
		if (CheckIsInStagingEntity(baseEntity))
			return

		if (!(baseEntity instanceof C_DOTAPlayer && baseEntity.m_bIsLocalPlayer))
			return

		LocalPlayer = entity as Player
		useQueueEntities()
	})

	// loop-optimizer: KEEP
	InStage.forEach((entity, baseEntity) => {
		if (CheckIsInStagingEntity(baseEntity))
			return
		InStage.delete(baseEntity)
		AddToCache(entity)
	})
}, 5)

let gameInProgress = false
function AddToCache(entity: Entity) {
	// console.log("onEntityPreCreated SDK", entity.m_pBaseEntity, entity.Index);
	EventsSDK.emit("EntityPreCreated", false, entity, entity.Index)

	const index = entity.Index
	EntitiesIDs.set(index, entity)
	if (CheckIsInStagingEntity(entity.m_pBaseEntity)) {
		InStage.set(entity.m_pBaseEntity, entity)
		return
	}

	entity.OnCreated()
	AllEntitiesAsMap.set(entity.m_pBaseEntity, entity)
	AllEntities.push(entity)

	// console.log("onEntityCreated SDK", entity, entity.m_pBaseEntity, index);
	EventsSDK.emit("EntityCreated", false, entity, index)
	if (entity instanceof Unit)
		changeFieldsByEvents(entity)
	if (LocalPlayer !== undefined && LocalPlayer.Hero === entity) {
		gameInProgress = true
		EventsSDK.emit("GameStarted", false, entity)
	}
}
setInterval(() => {
	let old_val = Game.IsConnected
	Game.IsConnected = IsInGame()
	if (!old_val && Game.IsConnected && LocalPlayer !== undefined)
		EventsSDK.emit("GameConnected", false)
	if (old_val && !Game.IsConnected)
		Particles.DeleteAll()
	if (gameInProgress && !Game.IsConnected) {
		gameInProgress = false
		EventsSDK.emit("GameEnded", false)
	}
}, 1000 / 30)

function DeleteFromCache(entNative: C_BaseEntity, index: number) {
	{
		let is_queued_entity = false
		is_queued_entity = queueEntitiesAsMap.delete(entNative) || is_queued_entity
		is_queued_entity = InStage.delete(entNative) || is_queued_entity
		if (is_queued_entity)
			return
	}

	const entity = AllEntitiesAsMap.get(entNative)

	entity.IsValid = false

	AllEntitiesAsMap.delete(entNative)
	EntitiesIDs.delete(index)
	arrayRemove(AllEntities, entity)

	// console.log("onEntityDestroyed SDK", entity, entity.m_pBaseEntity, index);
	EventsSDK.emit("EntityDestroyed", false, entity, index)
}

function ClassFromNative(ent: C_BaseEntity, index: number) {
	{
		let constructor = NativeToSDK[ent.constructor.name]
		if (constructor !== undefined)
			return new constructor(ent, index)
	}

	if (ent instanceof C_DOTA_BaseNPC_Tower)
		return new Tower(ent, index)

	if (ent instanceof C_DOTA_BaseNPC_Building)
		return new Building(ent, index)

	if (ent instanceof C_DOTA_BaseNPC_Hero)
		return new Hero(ent, index)

	if (ent instanceof C_DOTA_BaseNPC_Creep)
		return new Creep(ent, index)

	if (ent instanceof C_DOTA_BaseNPC)
		return new Unit(ent, index)

	if (ent instanceof C_DOTA_Item)
		return new Item(ent, index)

	if (ent instanceof C_DOTABaseAbility)
		return new Ability(ent, index)

	if (ent instanceof C_DOTA_Item_Physical)
		return new PhysicalItem(ent, index)

	return new Entity(ent, index)
}

/* ================ QUEUE CACHE ================ */

function useQueueEntities() {
	if (queueEntitiesAsMap.size === 0)
		return

	// loop-optimizer: KEEP
	queueEntitiesAsMap.forEach(entity => {
		AddToCache(entity)

		if (entity instanceof Unit)
			useQueueModifiers(entity)
	})

	queueEntitiesAsMap.clear()
}

/* ================ CHANGE FIELDS ================ */

function changeFieldsByEvents(unit: Unit) {
	const visibleTagged = unit.IsVisibleForTeamMask

	const isVisibleForEnemies = Unit.IsVisibleForEnemies(unit, visibleTagged)
	unit.IsVisibleForEnemies = isVisibleForEnemies
	EventsSDK.emit("TeamVisibilityChanged", false, unit, isVisibleForEnemies, visibleTagged)
}
