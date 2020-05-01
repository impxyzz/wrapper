import { Team } from "../../Enums/Team"
import EntityManager from "../../Managers/EntityManager"
import Entity, { LocalPlayer, OnLocalPlayerDeleted } from "./Entity"
import Vector3 from "../../Base/Vector3"
import Vector2 from "../../Base/Vector2"
import { dotaunitorder_t } from "../../Enums/dotaunitorder_t"
import Ability from "./Ability"
import Unit from "./Unit"
import ExecuteOrder from "../../Native/ExecuteOrder"
import Hero from "./Hero"
import { SetGameInProgress } from "../../Managers/EventsHandler"
import EventsSDK from "../../Managers/EventsSDK"

export default class Player extends Entity {
	public static PrepareOrder(order: {
		orderType: dotaunitorder_t,
		target?: Entity | number,
		position?: Vector3 | Vector2,
		ability?: Ability | number,
		orderIssuer?: PlayerOrderIssuer_t,
		unit?: Unit,
		queue?: boolean,
		showEffects?: boolean,
	}): ExecuteOrder {
		return ExecuteOrder.fromObject(order).ExecuteQueued()
	}
	public static Buyback(queue?: boolean, showEffects?: boolean): ExecuteOrder {
		return Player.PrepareOrder({ orderType: dotaunitorder_t.DOTA_UNIT_ORDER_BUYBACK, queue, showEffects })
	}
	public static Glyph(queue?: boolean, showEffects?: boolean): ExecuteOrder {
		return Player.PrepareOrder({ orderType: dotaunitorder_t.DOTA_UNIT_ORDER_GLYPH, queue, showEffects })
	}
	public static CastRiverPaint(position: Vector3 | Vector2, queue?: boolean, showEffects?: boolean): ExecuteOrder {
		return Player.PrepareOrder({ orderType: dotaunitorder_t.DOTA_UNIT_ORDER_CAST_RIVER_PAINT, position, queue, showEffects })
	}
	public static PreGameAdgustItemAssigment(ItemID: number, queue?: boolean, showEffects?: boolean): ExecuteOrder {
		return Player.PrepareOrder({ orderType: dotaunitorder_t.DOTA_UNIT_ORDER_PREGAME_ADJUST_ITEM_ASSIGNMENT, target: ItemID, queue, showEffects })
	}
	public static Scan(position: Vector3 | Vector2, queue?: boolean, showEffects?: boolean): ExecuteOrder {
		return Player.PrepareOrder({ orderType: dotaunitorder_t.DOTA_UNIT_ORDER_RADAR, position, queue, showEffects })
	}

	public NativeEntity: Nullable<C_DOTAPlayer>
	public PlayerID: number = -1
	public QuickBuyItems: number[] = []
	public TotalEarnedGold = 0
	public TotalEarnedXP = 0
	public Hero_ = 0

	public get IsSpectator(): boolean {
		return this.Team === Team.Observer || this.Team === Team.Neutral || this.Team === Team.None || this.Team === Team.Undefined
	}
	public get Hero(): Nullable<Hero> {
		let hero = EntityManager.EntityByIndex(this.Hero_),
			// inadequate code because of circular dependency
			hero_constructor = (globalThis as any).GetEntityClassByName("Hero") as Constructor<Hero>
		if (hero instanceof hero_constructor)
			return hero
		let ent = (EntityManager.GetEntitiesByClass(hero_constructor) as Hero[]).find(hero =>
			hero.PlayerID === this.PlayerID
			&& !hero.IsIllusion
			&& !hero.IsTempestDouble
			// inadequate code because of circular dependency
			&& !(hero.constructor.name === "npc_dota_hero_meepo" && (hero as any).IsClone)
		)
		if (ent !== undefined)
			this.Hero_ = ent.Index
		return ent
	}
}

import { RegisterClass, RegisterFieldHandler } from "wrapper/Objects/NativeToSDK"
RegisterClass("C_DOTAPlayer", Player)
RegisterFieldHandler(Player, "m_quickBuyItems", (player, new_value) => player.QuickBuyItems = new_value as number[])
RegisterFieldHandler(Player, "m_iTotalEarnedGold", (player, new_value) => player.TotalEarnedGold = new_value as number)
RegisterFieldHandler(Player, "m_iTotalEarnedXP", (player, new_value) => player.TotalEarnedXP = new_value as number)
RegisterFieldHandler(Player, "m_iPlayerID", (player, new_value) => player.PlayerID = new_value as number)
RegisterFieldHandler(Player, "m_hAssignedHero", (player, new_value) => {
	player.Hero_ = new_value as number
	if (player === LocalPlayer && player.Hero !== undefined)
		SetGameInProgress(true)
})
EventsSDK.on("EntityDestroyed", ent => {
	if (ent === LocalPlayer) {
		OnLocalPlayerDeleted()
		SetGameInProgress(false)
	}
})
EventsSDK.on("GameEvent", (name, obj) => {
	if (name !== "player_connect_full")
		return
	let ent = EntityManager.EntityByIndex(obj.index + 1)
	if (ent instanceof Player)
		ent.PlayerID = obj.PlayerID
})
