import { Vector3 } from "../Base/Vector3"
import { dotaunitorder_t } from "../Enums/dotaunitorder_t"
import { EventsSDK } from "../Managers/EventsSDK"
import { Ability } from "../Objects/Base/Ability"
import { Entity } from "../Objects/Base/Entity"
import { TempTree } from "../Objects/Base/TempTree"
import { Tree } from "../Objects/Base/Tree"
import { Unit } from "../Objects/Base/Unit"
import { arrayRemoveCallback } from "../Utils/ArrayExtensions"
import * as WASM from "./WASM"

function WillInterruptOrderQueue(order: ExecuteOrder): boolean {
	switch (order.OrderType) {
		case dotaunitorder_t.DOTA_UNIT_ORDER_CAST_RUNE:
		case dotaunitorder_t.DOTA_UNIT_ORDER_CAST_TARGET:
		case dotaunitorder_t.DOTA_UNIT_ORDER_CAST_TARGET_TREE:
		case dotaunitorder_t.DOTA_UNIT_ORDER_CAST_POSITION:
		case dotaunitorder_t.DOTA_UNIT_ORDER_MOVE_TO_DIRECTION:
		case dotaunitorder_t.DOTA_UNIT_ORDER_MOVE_TO_POSITION:
		case dotaunitorder_t.DOTA_UNIT_ORDER_MOVE_TO_TARGET:
		case dotaunitorder_t.DOTA_UNIT_ORDER_HOLD_POSITION:
		case dotaunitorder_t.DOTA_UNIT_ORDER_STOP:
		case dotaunitorder_t.DOTA_UNIT_ORDER_PATROL:
		case dotaunitorder_t.DOTA_UNIT_ORDER_PICKUP_ITEM:
		case dotaunitorder_t.DOTA_UNIT_ORDER_PICKUP_RUNE:
		case dotaunitorder_t.DOTA_UNIT_ORDER_VECTOR_TARGET_POSITION:
		case dotaunitorder_t.DOTA_UNIT_ORDER_VECTOR_TARGET_CANCELED:
		case dotaunitorder_t.DOTA_UNIT_ORDER_GIVE_ITEM:
		case dotaunitorder_t.DOTA_UNIT_ORDER_ATTACK_MOVE:
		case dotaunitorder_t.DOTA_UNIT_ORDER_ATTACK_TARGET:
		case dotaunitorder_t.DOTA_UNIT_ORDER_BUYBACK:
		case dotaunitorder_t.DOTA_UNIT_ORDER_DROP_ITEM:
			return true
		case dotaunitorder_t.DOTA_UNIT_ORDER_CAST_TOGGLE:
		case dotaunitorder_t.DOTA_UNIT_ORDER_CAST_TOGGLE_AUTO:
		case dotaunitorder_t.DOTA_UNIT_ORDER_CAST_NO_TARGET: {
			const abil = order.Ability_
			return (
				abil instanceof Ability &&
				(abil.CastPoint > 0 || abil.MaxChannelTime > 0) &&
				!abil.UsesRotation
			)
		}
		default:
			return false
	}
}

function CanBeIgnored(order: ExecuteOrder): boolean {
	switch (order.OrderType) {
		case dotaunitorder_t.DOTA_UNIT_ORDER_MOVE_TO_DIRECTION:
		case dotaunitorder_t.DOTA_UNIT_ORDER_MOVE_TO_POSITION:
		case dotaunitorder_t.DOTA_UNIT_ORDER_MOVE_TO_TARGET:
		case dotaunitorder_t.DOTA_UNIT_ORDER_HOLD_POSITION:
		case dotaunitorder_t.DOTA_UNIT_ORDER_PATROL:
		case dotaunitorder_t.DOTA_UNIT_ORDER_PICKUP_ITEM:
		case dotaunitorder_t.DOTA_UNIT_ORDER_PICKUP_RUNE:
		case dotaunitorder_t.DOTA_UNIT_ORDER_VECTOR_TARGET_POSITION:
		case dotaunitorder_t.DOTA_UNIT_ORDER_VECTOR_TARGET_CANCELED:
		case dotaunitorder_t.DOTA_UNIT_ORDER_GIVE_ITEM:
		case dotaunitorder_t.DOTA_UNIT_ORDER_ATTACK_MOVE:
		case dotaunitorder_t.DOTA_UNIT_ORDER_ATTACK_TARGET:
			return true
		case dotaunitorder_t.DOTA_UNIT_ORDER_CAST_TARGET:
		case dotaunitorder_t.DOTA_UNIT_ORDER_CAST_TARGET_TREE: {
			const issuer = order.Issuers[0],
				abil = order.Ability_
			if (
				issuer === undefined ||
				!(abil instanceof Ability) ||
				abil.IsCastRangeFake
			)
				return false
			const target = order.Target
			if (target instanceof Entity) {
				const targetPos = target.Position
				return issuer.Distance2D(targetPos) > abil.CastRange
			}
			return false
		}
		case dotaunitorder_t.DOTA_UNIT_ORDER_CAST_POSITION: {
			const issuer = order.Issuers[0],
				abil = order.Ability_
			if (
				issuer === undefined ||
				!(abil instanceof Ability) ||
				abil.IsCastRangeFake
			)
				return false
			return issuer.Distance2D(order.Position) > abil.CastRange
		}
		default:
			return order.Queue
	}
}

const sameMovePositionThreshold = 30
export class ExecuteOrder {
	public static readonly orderQueue: [
		ExecuteOrder,
		number,
		boolean,
		boolean
	][] = []
	public static lastMove: Nullable<[Vector3, number]>
	public static DebugOrders = false
	public static DebugDraw = false
	public static HoldOrders = 0
	public static HoldOrdersTarget: Nullable<Vector3 | Entity>
	public static cameraMinimapSpaces = 3 // 2 => 5
	public static cameraSpeed = 8000 // 5000 => 20000
	public static cursorSpeed = 6 // ?
	public static cursorSpeedMinAccel = 1 //?
	public static cursorSpeedMaxAccel = 2 // ?
	public static PrefireOrders = true
	public static IsStandalone = false
	public static unsafeMode = false
	private static DisableHumanizer_ = false

	/**
	 * Orders by native CUnitOrder
	 *
	 * @param position default: new Vector3(0,0,0)
	 * @param issuer default: DOTA_ORDER_ISSUER_PASSED_UNIT_ONLY
	 */
	constructor(
		public readonly OrderType: dotaunitorder_t,
		public readonly Target: Nullable<Entity | number>,
		public readonly Position: Vector3 = new Vector3(),
		// tslint:disable-next-line: no-shadowed-variable
		public readonly Ability_: Nullable<Ability | number>,
		public readonly Issuers: Unit[],
		public readonly Queue: boolean = false,
		public readonly ShowEffects: boolean = false,
		public IsPlayerInput: boolean = true
	) {
		this.Position = this.Position.Clone()
	}

	public static get DisableHumanizer() {
		return this.DisableHumanizer_ || this.unsafeMode
	}
	public static set DisableHumanizer(newVal: boolean) {
		if (this.DisableHumanizer_ === newVal) return
		this.DisableHumanizer_ = newVal
		ToggleRequestUserCmd(!this.DisableHumanizer_)
		EventsSDK.emit("HumanizerStateChanged", false)
	}

	public static PrepareOrder(order: {
		orderType: dotaunitorder_t
		target?: Entity | number
		position?: Vector3
		ability?: Ability | number
		issuers?: Unit[]
		queue?: boolean
		showEffects?: boolean
	}): void {
		ExecuteOrder.fromObject(order).ExecuteQueued()
	}
	public static Buyback(queue?: boolean, showEffects?: boolean): void {
		return ExecuteOrder.PrepareOrder({
			orderType: dotaunitorder_t.DOTA_UNIT_ORDER_BUYBACK,
			queue,
			showEffects,
		})
	}
	public static Glyph(queue?: boolean, showEffects?: boolean): void {
		return ExecuteOrder.PrepareOrder({
			orderType: dotaunitorder_t.DOTA_UNIT_ORDER_GLYPH,
			queue,
			showEffects,
		})
	}
	public static CastRiverPaint(
		position: Vector3,
		queue?: boolean,
		showEffects?: boolean
	): void {
		return ExecuteOrder.PrepareOrder({
			orderType: dotaunitorder_t.DOTA_UNIT_ORDER_CAST_RIVER_PAINT,
			position,
			queue,
			showEffects,
		})
	}
	public static PreGameAdjustItemAssigment(
		itemID: number,
		queue?: boolean,
		showEffects?: boolean
	): void {
		return ExecuteOrder.PrepareOrder({
			orderType: dotaunitorder_t.DOTA_UNIT_ORDER_PREGAME_ADJUST_ITEM_ASSIGNMENT,
			target: itemID,
			queue,
			showEffects,
		})
	}
	public static Scan(
		position: Vector3,
		queue?: boolean,
		showEffects?: boolean
	): void {
		return ExecuteOrder.PrepareOrder({
			orderType: dotaunitorder_t.DOTA_UNIT_ORDER_RADAR,
			position,
			queue,
			showEffects,
		})
	}

	public static fromObject(order: {
		orderType: dotaunitorder_t
		target?: Entity | number
		position?: Vector3
		ability?: Ability | number
		issuers?: Unit[]
		queue?: boolean
		showEffects?: boolean
	}): ExecuteOrder {
		return new ExecuteOrder(
			order.orderType,
			order.target,
			order.position,
			order.ability,
			order.issuers ?? [],
			order.queue,
			order.showEffects
		)
	}

	/**
	 * pass Position: Vector3 at IOBuffer offset 0
	 */
	public toNative() {
		const target = this.Target,
			ability = this.Ability_

		return {
			OrderType: this.OrderType,
			Target:
				target instanceof Entity
					? target instanceof Tree || target instanceof TempTree
						? target.BinaryID
						: target.Index
					: target,
			Ability: ability instanceof Ability ? ability.Index : ability,
			Issuers: this.Issuers.map(ent => ent.Index),
			Queue: this.Queue,
			ShowEffects: this.ShowEffects,
		}
	}
	/**
	 * Execute order with this fields
	 */
	public Execute(): void {
		this.Position.toIOBuffer()
		PrepareUnitOrders(this.toNative())
	}
	public ExecuteQueued(): void {
		if (ExecuteOrder.unsafeMode) {
			this.Execute()
			return
		}
		switch (this.OrderType) {
			case dotaunitorder_t.DOTA_UNIT_ORDER_PURCHASE_ITEM:
			case dotaunitorder_t.DOTA_UNIT_ORDER_GLYPH:
			case dotaunitorder_t.DOTA_UNIT_ORDER_TRAIN_ABILITY:
			case dotaunitorder_t.DOTA_UNIT_ORDER_CONTINUE:
			case dotaunitorder_t.DOTA_UNIT_ORDER_CAST_TOGGLE:
			case dotaunitorder_t.DOTA_UNIT_ORDER_CAST_TOGGLE_AUTO:
			// TODO: humanize following (?)
			case dotaunitorder_t.DOTA_UNIT_ORDER_EJECT_ITEM_FROM_STASH:
			case dotaunitorder_t.DOTA_UNIT_ORDER_SELL_ITEM:
			case dotaunitorder_t.DOTA_UNIT_ORDER_SET_ITEM_COMBINE_LOCK:
			case dotaunitorder_t.DOTA_UNIT_ORDER_DISASSEMBLE_ITEM:
				this.Execute()
				return
			case dotaunitorder_t.DOTA_UNIT_ORDER_CAST_NO_TARGET:
				if (ExecuteOrder.DisableHumanizer) {
					this.Execute()
					return
				}
				break
			default:
				if (ExecuteOrder.DisableHumanizer) return
				break
		}
		let setZ = false
		switch (this.OrderType) {
			case dotaunitorder_t.DOTA_UNIT_ORDER_ATTACK_MOVE:
			case dotaunitorder_t.DOTA_UNIT_ORDER_CAST_POSITION:
			case dotaunitorder_t.DOTA_UNIT_ORDER_MOVE_TO_DIRECTION:
			case dotaunitorder_t.DOTA_UNIT_ORDER_MOVE_TO_POSITION:
			case dotaunitorder_t.DOTA_UNIT_ORDER_PATROL:
			case dotaunitorder_t.DOTA_UNIT_ORDER_RADAR:
			case dotaunitorder_t.DOTA_UNIT_ORDER_VECTOR_TARGET_POSITION:
			case dotaunitorder_t.DOTA_UNIT_ORDER_DROP_ITEM:
				setZ = true
				break
			default:
				break
		}
		if (setZ) {
			this.Position.SetZ(WASM.GetPositionHeight(this.Position))
			const heightMap = WASM.HeightMap
			if (
				this.Position.z < -1024 ||
				(heightMap !== undefined && !heightMap.Contains(this.Position))
			)
				return
		}

		const currentTime = hrtime()
		if (this.OrderType === dotaunitorder_t.DOTA_UNIT_ORDER_MOVE_TO_POSITION) {
			if (
				ExecuteOrder.lastMove !== undefined &&
				ExecuteOrder.lastMove[0].Equals(this.Position) &&
				currentTime - ExecuteOrder.lastMove[1] < sameMovePositionThreshold
			)
				return
			ExecuteOrder.lastMove = [this.Position, currentTime]
		}

		if (!this.Queue && WillInterruptOrderQueue(this))
			while (
				arrayRemoveCallback(
					ExecuteOrder.orderQueue,
					([order, _orderStartTime, _orderUsedMinimap, executed], i) =>
						i !== 0 &&
						!executed &&
						(order.Issuers.every(unit => this.Issuers.includes(unit)) ||
							(order.Issuers.length === 1 &&
								this.Issuers.includes(order.Issuers[0]))) &&
						CanBeIgnored(order)
				)
			)
				continue
		ExecuteOrder.orderQueue.push([this, hrtime(), false, false])
	}
}
