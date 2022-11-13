import { Color } from "../Base/Color"
import { QAngle } from "../Base/QAngle"
import { Rectangle } from "../Base/Rectangle"
import { Vector2 } from "../Base/Vector2"
import { Vector3 } from "../Base/Vector3"
import { DOTAGameUIState_t } from "../Enums/DOTAGameUIState_t"
import { dotaunitorder_t } from "../Enums/dotaunitorder_t"
import { DOTA_GameState } from "../Enums/DOTA_GameState"
import { DOTA_SHOP_TYPE } from "../Enums/DOTA_SHOP_TYPE"
import { WorldPolygon } from "../Geometry/WorldPolygon"
import { GUIInfo } from "../GUI/GUIInfo"
import { EntityManager } from "../Managers/EntityManager"
import { Events } from "../Managers/Events"
import { EventsSDK } from "../Managers/EventsSDK"
import { InputEventSDK, InputManager, VKeys } from "../Managers/InputManager"
import { MinimapSDK } from "../Managers/MinimapSDK"
import { ParticlesSDK } from "../Managers/ParticleManager"
import { Ability } from "../Objects/Base/Ability"
import { CameraBounds } from "../Objects/Base/CameraBounds"
import { Entity, GameRules, LocalPlayer } from "../Objects/Base/Entity"
import { Shop } from "../Objects/Base/Shop"
import { TempTree } from "../Objects/Base/TempTree"
import { Tree } from "../Objects/Base/Tree"
import { Unit, Units } from "../Objects/Base/Unit"
import { EntityDataLump } from "../Resources/ParseEntityLump"
import { orderByFirst } from "../Utils/ArrayExtensions"
import { GameState } from "../Utils/GameState"
import { ConVarsSDK } from "./ConVarsSDK"
import { ExecuteOrder } from "./ExecuteOrder"
import { RendererSDK } from "./RendererSDK"
import { UserCmd } from "./UserCmd"
import * as WASM from "./WASM"

let world_bounds: Nullable<[Vector2, Vector2]>

EventsSDK.on("MapDataLoaded", () => {
	try {
		const world_bounds_data = EntityDataLump.find(data => data.get("classname") === "world_bounds")
		if (world_bounds_data !== undefined) {
			const min = world_bounds_data.get("min"),
				max = world_bounds_data.get("max")
			world_bounds = typeof min === "string" && typeof max === "string"
				? [Vector2.FromString(min), Vector2.FromString(max)]
				: undefined
		} else
			world_bounds = undefined
	} catch (e) {
		console.error("Error in world_bounds_data init", e)
		world_bounds = undefined
	}
})

class Polygon2D {
	public Points: Vector2[] = []

	constructor(...points: Vector2[]) {
		this.Points = points
	}
	public get Center(): Vector2 {
		return this.Points.reduce((a, b) => a.AddForThis(b), new Vector2())
			.DivideScalarForThis(this.Points.length)
	}
	public Add(polygon: Polygon2D | Vector2): void {
		if (polygon instanceof Polygon2D)
			polygon.Points.forEach(point => this.AddPoint(point))
		else
			this.AddPoint(polygon)
	}

	public Draw(
		color: Color,
		width = 10,
	): void {
		for (let i = 0; i < this.Points.length; i++) {
			const nextIndex = this.Points.length - 1 === i ? 0 : i + 1
			const point1 = this.Points[i],
				point2 = this.Points[nextIndex]
			if (point1 !== undefined && point2 !== undefined)
				RendererSDK.Line(point1, point2, color, width)
		}
	}

	public IsInside(point: Vector2): boolean {
		return !this.IsOutside(point)
	}
	public IsOutside(point: Vector2): boolean {
		let is_outside = true
		for (let i = 0; i < this.Points.length; i++) {
			const j = i === 0 ? this.Points.length - 1 : i - 1
			if (
				(this.Points[i].y > point.y) !== (this.Points[j].y > point.y)
				&& point.x < (this.Points[j].x - this.Points[i].x) * (point.y - this.Points[i].y) / (this.Points[j].y - this.Points[i].y) + this.Points[i].x
			)
				is_outside = !is_outside
		}
		return is_outside
	}

	private AddPoint(point: Vector2): void {
		this.Points.push(point)
	}
}

const latest_cursor = new Vector2(),
	latest_camera_poly = new WorldPolygon(),
	debug_camera_poly = new WorldPolygon(),
	latest_camera_green_zone_poly_screen = new Polygon2D(),
	latest_camera_yellow_zone_poly_screen = new Polygon2D(),
	latest_camera_red_zone_poly_screen = new Polygon2D(),
	latest_camera_green_zone_poly_world = new WorldPolygon(),
	latest_camera_yellow_zone_poly_world = new WorldPolygon(),
	latest_camera_red_zone_poly_world = new WorldPolygon(),
	default_camera_dist = 1200, // default camera distance
	default_camera_angles = new QAngle(60, 90, 0)
function UpdateCameraBounds(camera_vec_2d: Vector2) {
	const camera_vec = WASM.GetCameraPosition(camera_vec_2d, default_camera_dist, default_camera_angles)
	latest_camera_poly.Points = RendererSDK.ScreenToWorldFar(
		[
			new Vector2(1, 1),
			new Vector2(0, 1),
			new Vector2(0, 0),
			new Vector2(1, 0),
		],
		camera_vec,
		default_camera_dist,
	)
	debug_camera_poly.Points = [
		latest_camera_poly.Points[0],
		camera_vec,
		latest_camera_poly.Points[1],
		camera_vec,
		latest_camera_poly.Points[2],
		camera_vec,
		latest_camera_poly.Points[3],
		camera_vec,
		latest_camera_poly.Points[0],
		latest_camera_poly.Points[1],
		latest_camera_poly.Points[2],
		latest_camera_poly.Points[3],
	]
	const screen_size = RendererSDK.WindowSize,
		minimap = GUIInfo.Minimap.Minimap
	const camera_limit_x1 = (GUIInfo.HUDFlipped ? minimap.Left : minimap.Right) / screen_size.x,
		camera_limit_x2 = GUIInfo.HUDFlipped ? 0.05 : 0.95
	let camera_limit_y_min = Math.min(
		GUIInfo.TopBar.RadiantPlayersHeroImages[0].Bottom * 2 / screen_size.y,
		0.1,
	)
	let camera_limit_y_max = minimap.Top / screen_size.y,
		camera_limit_x_min = Math.min(camera_limit_x1, camera_limit_x2),
		camera_limit_x_max = Math.max(camera_limit_x1, camera_limit_x2)
	latest_camera_red_zone_poly_screen.Points = [
		new Vector2(camera_limit_x_max, camera_limit_y_max),
		new Vector2(camera_limit_x_min, camera_limit_y_max),
		new Vector2(camera_limit_x_min, camera_limit_y_min),
		new Vector2(camera_limit_x_max, camera_limit_y_min),
	]
	const x_offset_minimap = 1 / 25,
		x_offset_non_minimap = 1 / 15,
		y_offset_min = 1 / 8,
		y_offset_max = 1 / 15
	camera_limit_y_min += y_offset_min
	camera_limit_y_max -= y_offset_max
	if (GUIInfo.HUDFlipped) {
		camera_limit_x_min += x_offset_non_minimap
		camera_limit_x_max -= x_offset_minimap
	} else {
		camera_limit_x_min += x_offset_minimap
		camera_limit_x_max -= x_offset_non_minimap
	}
	latest_camera_yellow_zone_poly_screen.Points = [
		new Vector2(camera_limit_x_max, camera_limit_y_max),
		new Vector2(camera_limit_x_min, camera_limit_y_max),
		new Vector2(camera_limit_x_min, camera_limit_y_min),
		new Vector2(camera_limit_x_max, camera_limit_y_min),
	]
	const x_available = camera_limit_x_max - camera_limit_x_min,
		y_available = camera_limit_y_max - camera_limit_y_min
	camera_limit_x_min += x_available / 6
	camera_limit_x_max -= x_available / 6
	camera_limit_y_min += y_available / 6
	camera_limit_y_max -= y_available / 6
	latest_camera_green_zone_poly_screen.Points = [
		new Vector2(camera_limit_x_max, camera_limit_y_max),
		new Vector2(camera_limit_x_min, camera_limit_y_max),
		new Vector2(camera_limit_x_min, camera_limit_y_min),
		new Vector2(camera_limit_x_max, camera_limit_y_min),
	]

	latest_camera_green_zone_poly_world.Points = RendererSDK.ScreenToWorldFar(
		latest_camera_green_zone_poly_screen.Points,
		camera_vec,
		default_camera_dist,
	)
	latest_camera_yellow_zone_poly_world.Points = RendererSDK.ScreenToWorldFar(
		latest_camera_yellow_zone_poly_screen.Points,
		camera_vec,
		default_camera_dist,
	)
	latest_camera_red_zone_poly_world.Points = RendererSDK.ScreenToWorldFar(
		latest_camera_red_zone_poly_screen.Points,
		camera_vec,
		default_camera_dist,
	)
}

function CanOrderBeSkipped(order: ExecuteOrder): boolean {
	switch (order.OrderType) {
		case dotaunitorder_t.DOTA_UNIT_ORDER_CAST_POSITION:
		case dotaunitorder_t.DOTA_UNIT_ORDER_CAST_TARGET:
		case dotaunitorder_t.DOTA_UNIT_ORDER_CAST_TARGET_TREE: {
			const abil = order.Ability
			if (abil instanceof Ability && abil.IsDoubleTap(order))
				return true
			break
		}
		default:
			break
	}
	switch (order.OrderType) {
		case dotaunitorder_t.DOTA_UNIT_ORDER_CAST_POSITION:
			return Units.some(ent => (
				ent.IsGloballyTargetable
				&& order.Position.Distance2D(ent.Position) < 200
			))
		case dotaunitorder_t.DOTA_UNIT_ORDER_CAST_TARGET:
			return order.Target instanceof Entity && order.Target === order.Issuers[0]
		case dotaunitorder_t.DOTA_UNIT_ORDER_ATTACK_TARGET:
		case dotaunitorder_t.DOTA_UNIT_ORDER_CAST_TARGET_TREE:
		case dotaunitorder_t.DOTA_UNIT_ORDER_MOVE_TO_TARGET:
		case dotaunitorder_t.DOTA_UNIT_ORDER_PICKUP_ITEM:
		case dotaunitorder_t.DOTA_UNIT_ORDER_PICKUP_RUNE:
		case dotaunitorder_t.DOTA_UNIT_ORDER_RADAR:
		case dotaunitorder_t.DOTA_UNIT_ORDER_MOVE_TO_DIRECTION:
		case dotaunitorder_t.DOTA_UNIT_ORDER_MOVE_TO_POSITION:
		case dotaunitorder_t.DOTA_UNIT_ORDER_PATROL:
		case dotaunitorder_t.DOTA_UNIT_ORDER_ATTACK_MOVE:
		case dotaunitorder_t.DOTA_UNIT_ORDER_GIVE_ITEM:
			return false
		default:
			return true
	}
}

function GetEntityHitBox(ent: Entity, camera_vec: Vector2): Nullable<Polygon2D> {
	const points = ent.BoundingBox.Polygon.Points
	const w2s = points.map(point => RendererSDK.WorldToScreenCustom(point, camera_vec)).filter(point => (
		point !== undefined
		&& point.x >= 0
		&& point.y >= 0
		&& point.x <= 1
		&& point.y <= 1
	))
	if (w2s.length < 2)
		return undefined
	return new Polygon2D(...w2s as Vector2[])
}

function EntityHitBoxesIntersect(
	ents: Entity[],
	camera_vec: Vector3 | Vector2,
	cursor_vec: Vector2,
): boolean[] {
	if (camera_vec instanceof Vector2)
		camera_vec = WASM.GetCameraPosition(
			camera_vec,
			default_camera_dist,
			default_camera_angles,
		)
	const ray = WASM.GetCursorRay(
		cursor_vec,
		RendererSDK.WindowSize,
		default_camera_angles,
		-1,
	)
	return WASM.BatchCheckRayBox(camera_vec, ray, ents.map(ent => ent.BoundingBox))
}

function ComputeTargetPos(camera_vec: Vector2, current_time: number): Vector3 | Vector2 {
	const yellow_zone_reached = yellow_zone_out_at < current_time - yellow_zone_max_duration,
		green_zone_reached = green_zone_out_at < current_time - green_zone_max_duration
	const current_pos = latest_usercmd.MousePosition
	if (last_order_target instanceof Entity) {
		if (
			EntityHitBoxesIntersect([last_order_target], camera_vec, current_pos)[0]
			&& (
				latest_camera_red_zone_poly_screen.IsInside(current_pos)
				|| !CanMoveCamera(camera_vec, current_pos)
			)
		)
			return current_pos
		const hitbox = GetEntityHitBox(last_order_target, camera_vec)
		if (hitbox === undefined || hitbox.Points.some(point => (
			(
				latest_camera_red_zone_poly_screen.IsOutside(point)
				|| (
					(yellow_zone_reached || green_zone_reached)
					&& latest_camera_green_zone_poly_screen.IsOutside(point)
				)
			) && CanMoveCamera(camera_vec, point)
		)))
			return last_order_target.Position
		// TODO: try to find best spot between other entities' hitboxes, i.e. between creeps
		const center = hitbox.Center,
			min = hitbox.Points.reduce((prev, cur) => prev.Min(cur), new Vector2()).SubtractForThis(center),
			max = hitbox.Points.reduce((prev, cur) => prev.Max(cur), new Vector2()).SubtractForThis(center)
		for (let i = 0; i < 1000; i++) {
			const generated = center
				.Add(min.MultiplyScalar(Math.random() / 2))
				.AddForThis(max.MultiplyScalar(Math.random() / 2))
			if (
				EntityHitBoxesIntersect([last_order_target], camera_vec, generated)[0]
				&& (
					latest_camera_red_zone_poly_screen.IsInside(generated)
					|| !CanMoveCamera(camera_vec, generated)
				)
			)
				return generated
		}
		if (
			latest_camera_red_zone_poly_screen.IsOutside(center)
			&& CanMoveCamera(camera_vec, center)
		)
			return last_order_target.Position
		return center
	} else if (last_order_target instanceof Vector3) {
		const w2s = RendererSDK.WorldToScreenCustom(last_order_target, camera_vec)
		if (
			w2s === undefined
			|| w2s.x < 0
			|| w2s.y < 0
			|| w2s.x > 1
			|| w2s.y > 1
			|| ((
				latest_camera_red_zone_poly_screen.IsOutside(w2s)
				|| (
					(yellow_zone_reached || green_zone_reached)
					&& latest_camera_green_zone_poly_screen.IsOutside(w2s)
				)
			) && CanMoveCamera(camera_vec, w2s))
		)
			return last_order_target
		// allow 0.5% error (i.e. 19x10 for 1920x1080)
		const min = w2s.SubtractScalar(0.005).Max(0).Min(1),
			max = w2s.AddScalar(0.005).Max(0).Min(1)
		if (new Rectangle(min, max).Contains(current_pos)) {
			if (
				latest_camera_red_zone_poly_screen.IsOutside(current_pos)
				&& CanMoveCamera(camera_vec, current_pos)
			)
				return last_order_target
			return current_pos
		}
		const ret = min.AddForThis(max.SubtractForThis(min).MultiplyScalarForThis(Math.random()))
		if (
			latest_camera_red_zone_poly_screen.IsOutside(ret)
			&& CanMoveCamera(camera_vec, ret)
		)
			return last_order_target
		return ret
	} else {
		if (ExecuteOrder.is_standalone) {
			if (latest_usercmd.MousePosition.IsZero())
				return new Vector2(0.5 + Math.random() / 2 - 0.25, 0.5 + Math.random() / 2 - 0.25)
			return latest_usercmd.MousePosition
		}
		latest_usercmd.ScoreboardOpened = InputManager.IsScoreboardOpen
		const local_hero = LocalPlayer?.Hero
		if (InputManager.IsShopOpen && local_hero !== undefined)
			switch ((EntityManager.AllEntities.find(ent => (
				ent.IsShop
				&& ent.Distance(local_hero) < 720
			)) as Shop)?.ShopType) {
				case DOTA_SHOP_TYPE.DOTA_SHOP_SECRET:
					latest_usercmd.ShopMask = 12
					break
				default:
					latest_usercmd.ShopMask = 13
					break
			}
		const cursor_pos = InputManager.CursorOnScreen,
			game_state = GameRules?.GameState ?? DOTA_GameState.DOTA_GAMERULES_STATE_INIT,
			selected_ent = InputManager.SelectedUnit
		if (
			game_state < DOTA_GameState.DOTA_GAMERULES_STATE_PRE_GAME
			|| game_state === DOTA_GameState.DOTA_GAMERULES_STATE_POST_GAME
			|| GUIInfo.Minimap.Minimap.Contains(cursor_pos)
			|| GUIInfo.Shop.Sticky_2Rows.Contains(cursor_pos)
			|| GUIInfo.Shop.Quickbuy_2Rows.Contains(cursor_pos)
			|| GUIInfo.Shop.ClearQuickBuy_2Rows.Contains(cursor_pos)
			|| GUIInfo.Shop.CourierGold.Contains(cursor_pos)
			|| (InputManager.IsScoreboardOpen && GUIInfo.Scoreboard.Background.Contains(current_pos))
			|| (InputManager.IsShopOpen && (
				GUIInfo.OpenShopLarge.Header.Contains(cursor_pos)
				|| GUIInfo.OpenShopLarge.ItemCombines.Contains(cursor_pos)
				|| GUIInfo.OpenShopLarge.Items.Contains(cursor_pos)
				|| GUIInfo.OpenShopLarge.PinnedItems.Contains(cursor_pos)
				|| GUIInfo.OpenShopLarge.GuideFlyout.Contains(cursor_pos)
			))
			|| (
				(
					InputManager.IsShopOpen
					|| (selected_ent?.Inventory?.Stash?.length ?? 0) !== 0
				) && (
					GUIInfo.Shop.Stash.Contains(cursor_pos)
					|| GUIInfo.Shop.StashGrabAll.Contains(cursor_pos)
				)
			)
		)
			return cursor_pos.Divide(RendererSDK.WindowSize)
		const hud = GUIInfo.GetLowerHUDForUnit(selected_ent)
		if (
			hud !== undefined
			&& (
				hud.InventoryContainer.Contains(cursor_pos)
				|| hud.NeutralAndTPContainer.Contains(cursor_pos)
				|| hud.XP.Contains(cursor_pos)
			)
		)
			return cursor_pos.Divide(RendererSDK.WindowSize)
		const pos = InputManager.CursorOnWorld
		if (pos.IsValid && pos.z > -1000) {
			const w2s = RendererSDK.WorldToScreenCustom(pos, camera_vec)
			if (
				w2s === undefined
				|| w2s.x < 0
				|| w2s.y < 0
				|| w2s.x > 1
				|| w2s.y > 1
				|| ((
					latest_camera_red_zone_poly_screen.IsOutside(w2s)
					|| (
						(yellow_zone_reached || green_zone_reached)
						&& latest_camera_green_zone_poly_screen.IsOutside(w2s)
					)
				) && CanMoveCamera(camera_vec, w2s))
			)
				return pos.Clone()
			return w2s
		} else
			return cursor_pos.Divide(RendererSDK.WindowSize)
	}
}

let last_order_target: Nullable<Vector3 | Entity>,
	current_order: Nullable<[ExecuteOrder, number, boolean]>
function ProcessOrderQueue(current_time: number): Nullable<[ExecuteOrder, number, boolean]> {
	let order = ExecuteOrder.order_queue[0] as Nullable<[ExecuteOrder, number, boolean]>
	while (order !== undefined && CanOrderBeSkipped(order[0])) {
		if (ExecuteOrder.debug_orders)
			console.log(`Executing order ${order[0].OrderType} after ${current_time - order[1]}ms`)
		order[0].Execute()
		ExecuteOrder.order_queue.splice(0, 1)
		current_order = undefined
		order = ExecuteOrder.order_queue[0] as Nullable<[ExecuteOrder, number, boolean]>
	}
	if (order !== undefined && current_order !== order) {
		current_order = order
		if (ExecuteOrder.prefire_orders) {
			if (ExecuteOrder.debug_orders)
				console.log(`Prefiring order ${order[0].OrderType} after ${current_time - order[1]}ms at ${GameState.RawGameTime}`)
			order[0].Execute()
		}
		switch (order[0].OrderType) {
			case dotaunitorder_t.DOTA_UNIT_ORDER_ATTACK_MOVE:
			case dotaunitorder_t.DOTA_UNIT_ORDER_CAST_POSITION:
			case dotaunitorder_t.DOTA_UNIT_ORDER_MOVE_TO_DIRECTION:
			case dotaunitorder_t.DOTA_UNIT_ORDER_MOVE_TO_POSITION:
			case dotaunitorder_t.DOTA_UNIT_ORDER_PATROL:
			case dotaunitorder_t.DOTA_UNIT_ORDER_RADAR:
			case dotaunitorder_t.DOTA_UNIT_ORDER_VECTOR_TARGET_POSITION:
				last_order_target = order[0].Position
				break
			case dotaunitorder_t.DOTA_UNIT_ORDER_ATTACK_TARGET:
			case dotaunitorder_t.DOTA_UNIT_ORDER_CAST_TARGET:
			case dotaunitorder_t.DOTA_UNIT_ORDER_CAST_TARGET_TREE:
			case dotaunitorder_t.DOTA_UNIT_ORDER_MOVE_TO_TARGET:
			case dotaunitorder_t.DOTA_UNIT_ORDER_PICKUP_ITEM:
			case dotaunitorder_t.DOTA_UNIT_ORDER_PICKUP_RUNE:
			case dotaunitorder_t.DOTA_UNIT_ORDER_GIVE_ITEM:
				last_order_target = order[0].Target instanceof Entity
					? order[0].Target
					: order[0].Position
				break
			default:
				last_order_target = undefined
				break
		}
		if (last_order_target instanceof Vector3 && world_bounds !== undefined) {
			if (order[0].Position !== last_order_target)
				last_order_target = last_order_target.Clone()
			last_order_target.x = Math.min(Math.max(last_order_target.x, world_bounds[0].x), world_bounds[1].x)
			last_order_target.y = Math.min(Math.max(last_order_target.y, world_bounds[0].y), world_bounds[1].y)
		}
	}
	return order
}

const camera_move_linger_duration = 100,
	order_linger_duration = 150,
	order_linger_duration_minimap = 250,
	camera_move_seed_expiry = 300,
	yellow_zone_max_duration = 700,
	green_zone_max_duration = yellow_zone_max_duration * 2,
	camera_direction = new Vector2(),
	debug_cursor = new Vector3()
let last_order_finish = 0,
	last_order_used_minimap = false,
	latest_camera_x = 0,
	latest_camera_y = 0,
	camera_move_end = 0,
	were_moving_camera = false,
	latest_update = 0,
	latest_usercmd = new UserCmd(),
	last_camera_move_seed = 0,
	yellow_zone_out_at = 0,
	green_zone_out_at = 0,
	cursor_at_minimap_at = 0,
	cursor_entered_minimap_at = 0
function CanMoveCamera(camera_vec: Vector2, target_pos: Vector2): boolean {
	const bounds_ent = CameraBounds
	if (bounds_ent === undefined)
		return true
	const bounds_min = bounds_ent.BoundsMin,
		bounds_max = bounds_ent.BoundsMax
	let bounds = 0
	if (target_pos.x !== 0.5) {
		bounds++
		if (target_pos.x < 0.5) {
			if (
				Math.abs(camera_vec.x - bounds_min.x) < 1 // left
				|| camera_vec.x < bounds_min.x
			)
				bounds--
		} else {
			if (
				Math.abs(camera_vec.x - bounds_max.x) < 1 // right
				|| camera_vec.x > bounds_max.x
			)
				bounds--
		}
	}
	if (target_pos.y !== 0.5) {
		bounds++
		if (target_pos.y < 0.5) {
			if (
				Math.abs(camera_vec.y - bounds_max.y) < 1 // top
				|| camera_vec.y > bounds_max.y
			)
				bounds--
		} else {
			if (
				Math.abs(camera_vec.y - bounds_min.y) < 1 // bot
				|| camera_vec.y < bounds_min.y
			)
				bounds--
		}
	}
	return bounds > 0
}
function MoveCameraByScreen(target_pos: Vector3, current_time: number): Vector2 {
	const dist_right_bot = target_pos.DistanceSqr2D(latest_camera_green_zone_poly_world.Points[0]),
		dist_left_bot = target_pos.DistanceSqr2D(latest_camera_green_zone_poly_world.Points[1]),
		dist_left_top = target_pos.DistanceSqr2D(latest_camera_green_zone_poly_world.Points[2]),
		dist_right_top = target_pos.DistanceSqr2D(latest_camera_green_zone_poly_world.Points[3]),
		dist_center_bot = target_pos.DistanceSqr2D(
			latest_camera_green_zone_poly_world.Points[0]
				.Add(latest_camera_green_zone_poly_world.Points[1])
				.DivideScalarForThis(2),
		),
		dist_center_left = target_pos.DistanceSqr2D(
			latest_camera_green_zone_poly_world.Points[1]
				.Add(latest_camera_green_zone_poly_world.Points[2])
				.DivideScalarForThis(2),
		),
		dist_center_top = target_pos.DistanceSqr2D(
			latest_camera_green_zone_poly_world.Points[2]
				.Add(latest_camera_green_zone_poly_world.Points[3])
				.DivideScalarForThis(2),
		),
		dist_center_right = target_pos.DistanceSqr2D(
			latest_camera_green_zone_poly_world.Points[0]
				.Add(latest_camera_green_zone_poly_world.Points[3])
				.DivideScalarForThis(2),
		)
	const ret = latest_usercmd.MousePosition.Clone()
	const min_corner_dist = Math.min(
		dist_right_bot,
		dist_left_bot,
		dist_left_top,
		dist_right_top,
	)
	const min_center_dist = Math.min(
		dist_center_bot,
		dist_center_left,
		dist_center_top,
		dist_center_right,
	)
	if (min_corner_dist < min_center_dist) {
		if (min_corner_dist === dist_right_bot) {
			camera_direction.x = 1
			camera_direction.y = 1
		} else if (min_corner_dist === dist_left_bot) {
			camera_direction.x = 0
			camera_direction.y = 1
		} else if (min_corner_dist === dist_left_top) {
			camera_direction.x = 0
			camera_direction.y = 0
		} else if (min_corner_dist === dist_right_top) {
			camera_direction.x = 1
			camera_direction.y = 0
		}
	} else {
		if (min_center_dist === dist_center_bot) {
			camera_direction.x = 0.5
			camera_direction.y = 1
		} else if (min_center_dist === dist_center_left) {
			camera_direction.x = 0
			camera_direction.y = 0.5
		} else if (min_center_dist === dist_center_top) {
			camera_direction.x = 0.5
			camera_direction.y = 0
		} else if (min_center_dist === dist_center_right) {
			camera_direction.x = 1
			camera_direction.y = 0.5
		}
	}

	if (last_camera_move_seed < current_time - camera_move_seed_expiry)
		last_camera_move_seed = current_time
	ret.x = camera_direction.x === 0.5
		? Math.min(0.9, Math.max(0.1, 0.5 + (Math.cos(last_camera_move_seed) ** 3) * 0.2 - 0.1))
		: camera_direction.x
	ret.y = camera_direction.y === 0.5
		? Math.min(0.9, Math.max(0.1, 0.5 + (Math.sin(last_camera_move_seed) ** 3) * 0.2 - 0.1))
		: camera_direction.y
	return ret
}

function MoveCamera(
	camera_vec: Vector2,
	target_pos: Vector3,
	current_time: number,
): [Vector2, boolean] {
	if (target_pos.Distance2D(camera_vec) > 1500) {
		const nearest = orderByFirst(Units.filter(ent => (
			ent.IsControllable
			&& ent.RootOwner === LocalPlayer
			&& (ent.IsAlive || ent === LocalPlayer?.Hero)
			&& !ent.IsEnemy()
		)), ent => ent.Distance(target_pos))
		if (nearest !== undefined && nearest.Distance(target_pos) < 1000) {
			const eye_vector = WASM.GetEyeVector(default_camera_angles)
			const lookatpos = nearest.Position.Clone()
				.SubtractScalarX(eye_vector.x * default_camera_dist)
				.SubtractScalarY(eye_vector.y * default_camera_dist)
			camera_vec.x = lookatpos.x
			camera_vec.y = lookatpos.y
			return [latest_usercmd.MousePosition, false]
		}
	}
	if (latest_camera_poly.Center.Distance(target_pos) > ExecuteOrder.camera_minimap_spaces * default_camera_dist) {
		const minimap_target = MinimapSDK
			.WorldToMinimap(target_pos)
			.DivideForThis(RendererSDK.WindowSize)
		if (minimap_target.x <= 1 && minimap_target.x >= 0 && minimap_target.y <= 1 && minimap_target.y >= 0)
			return [minimap_target, true]
	}
	return [MoveCameraByScreen(target_pos, current_time), false]
}

function getParams() {
	const res: [number, number][] = []
	const num = 5 + Math.round(Math.random() * 3) // [5,8]
	for (let i = 0; i < num; i++)
		res.push([
			1 / (0.5 + Math.random()), // amplitude rcp [1/1.5,1/0.5]
			Math.random() * Math.PI * 2 - Math.PI, // offset [-180deg,180deg]
		])
	return res
}
let params = getParams()
function ApplyParams(vec: Vector2, currentTime: number): void {
	const [cos, sin] = params.reduce((prev, cur) => {
		const param = currentTime * cur[0] + cur[1]
		prev[0] += (Math.cos(param) ** 2)
		prev[1] += (Math.sin(param) ** 2)
		return prev
	}, [0, 0])
	vec
		.MultiplyScalarX(cos / params.length)
		.MultiplyScalarY(sin / params.length)
}

const min_ProcessUserCmd_window = 1 / 60
function ProcessUserCmd(force = false): void {
	const current_time = hrtime()
	const dt = Math.min(current_time - latest_update, 100) / 1000
	if (RendererSDK.WindowSize.IsZero())
		return
	latest_usercmd.SpectatorStatsCategoryID = 0
	latest_usercmd.SpectatorStatsSortMethod = 0
	latest_usercmd.Pawn = LocalPlayer?.Pawn
	latest_usercmd.MousePosition.CopyFrom(InputManager.CursorOnScreen.DivideForThis(RendererSDK.WindowSize))
	InputManager.IsShopOpen = IsShopOpen()
	InputManager.IsScoreboardOpen = ConVarsSDK.GetInt("dota_spectator_stats_panel", 0) === 1
	const num_selected = GetSelectedEntities()
	InputManager.SelectedEntities.splice(0)
	for (let i = 0; i < num_selected; i++) {
		const ent = EntityManager.EntityByIndex(IOBufferView.getUint32(i * 4, true))
		if (ent !== undefined)
			InputManager.SelectedEntities.push(ent as Unit)
	}
	if (InputManager.SelectedEntities.length === 0) {
		const ent = LocalPlayer?.Hero
		if (ent !== undefined)
			InputManager.SelectedEntities.push(ent)
	}
	InputManager.QueryUnit = EntityManager.EntityByIndex(GetQueryUnit()) as Nullable<Unit>
	InputManager.SelectedUnit = !ConVarsSDK.GetBoolean("dota_hud_new_query_panel", false)
		? InputManager.QueryUnit ?? InputManager.SelectedEntities[0]
		: InputManager.SelectedEntities[0] ?? InputManager.QueryUnit
	InputManager.CursorOnWorld = RendererSDK.ScreenToWorldFar(
		[latest_usercmd.MousePosition],
		Camera.Position ? Vector3.fromIOBuffer() : new Vector3(),
		RendererSDK.CameraDistance,
		Camera.Angles ? QAngle.fromIOBuffer() : new QAngle(),
		RendererSDK.WindowSize,
		Camera.FoV,
	)[0]
	if (!force && dt < min_ProcessUserCmd_window)
		return
	latest_update = current_time
	if (ExecuteOrder.disable_humanizer)
		return
	latest_usercmd.ShopMask = 15
	const prev_last_order_target = last_order_target
	let order = ProcessOrderQueue(current_time)
	latest_usercmd.CameraPosition.x = latest_camera_x
	latest_usercmd.CameraPosition.y = latest_camera_y
	latest_usercmd.MousePosition.CopyFrom(latest_cursor)
	const camera_vec = latest_usercmd.CameraPosition
	UpdateCameraBounds(latest_usercmd.CameraPosition)
	if (ExecuteOrder.hold_orders > 0 && ExecuteOrder.hold_orders_target !== undefined && last_order_target === undefined)
		last_order_target = ExecuteOrder.hold_orders_target instanceof Vector3
			? ExecuteOrder.hold_orders_target.Clone().SetZ(WASM.GetPositionHeight(ExecuteOrder.hold_orders_target))
			: ExecuteOrder.hold_orders_target
	if (last_order_target instanceof Entity && (!last_order_target.IsValid || !last_order_target.IsVisible)) {
		try {
			if (ExecuteOrder.debug_orders)
				console.log(`Skipping order due to invalid entity after ${current_time - ExecuteOrder.order_queue[0][1]}ms`)
		} catch (e) {
			console.error(e)
		}
		last_order_finish = current_time
		ExecuteOrder.order_queue.splice(0, 1)
		last_order_target = undefined
		order = ProcessOrderQueue(current_time)
	}
	let target_pos = ComputeTargetPos(camera_vec, current_time)
	let interacting_with_minimap = false
	if (target_pos instanceof Vector3) {
		let ar = MoveCamera(camera_vec, target_pos, current_time)
		if (ar[1] && last_order_used_minimap && last_order_finish > current_time - order_linger_duration_minimap) {
			order = undefined
			last_order_target = prev_last_order_target
			target_pos = ComputeTargetPos(camera_vec, current_time)
			if (target_pos instanceof Vector3)
				ar = MoveCamera(camera_vec, target_pos, current_time)
		}
		target_pos = ar[0]
		interacting_with_minimap = ar[1]
		if (interacting_with_minimap && order !== undefined)
			order[2] = true
	}
	if (order !== undefined)
		switch (order[0].OrderType) {
			case dotaunitorder_t.DOTA_UNIT_ORDER_ATTACK_MOVE:
			case dotaunitorder_t.DOTA_UNIT_ORDER_ATTACK_TARGET:
				latest_usercmd.ClickBehaviors = 2
				break
			case dotaunitorder_t.DOTA_UNIT_ORDER_PATROL:
				latest_usercmd.ClickBehaviors = 8
				break
			case dotaunitorder_t.DOTA_UNIT_ORDER_RADAR:
				latest_usercmd.ClickBehaviors = 11
				break
			default:
				latest_usercmd.ClickBehaviors = 0
				break
		}
	let cursor_at_target = false
	{ // move cursor
		const dist = latest_usercmd.MousePosition.Distance(target_pos)
		const extend = ExecuteOrder.cursor_speed_min_accel + Math.min(Math.sqrt(dist), 1) * (
			ExecuteOrder.cursor_speed_max_accel
			- ExecuteOrder.cursor_speed_min_accel
		) * ExecuteOrder.cursor_speed * dt
		const dir = latest_usercmd.MousePosition
			.GetDirectionTo(target_pos)
			.MultiplyScalarForThis(Math.min(extend, dist))
		ApplyParams(dir, current_time)
		latest_usercmd.MousePosition.AddForThis(dir)
		cursor_at_target = dist < 0.005
	}
	const order_suits = (
		cursor_at_target
		&& (
			latest_camera_red_zone_poly_screen.IsInside(target_pos)
			|| !CanMoveCamera(camera_vec, target_pos)
		)
	)
	if (order !== undefined)
		interacting_with_minimap ||= order[2] && current_time - cursor_at_minimap_at < order_linger_duration
	// move camera via minimap
	if (interacting_with_minimap) {
		if (cursor_entered_minimap_at === 0 && GUIInfo.Minimap.Minimap.Contains(target_pos))
			cursor_entered_minimap_at = current_time
		if (
			current_time - cursor_entered_minimap_at > ConVarsSDK.GetFloat("dota_minimap_misclick_time", 0.2)
			&& cursor_at_target
		) {
			const eye_vector = WASM.GetEyeVector(default_camera_angles)
			const lookatpos = MinimapSDK.MinimapToWorld(latest_usercmd.MousePosition.Multiply(RendererSDK.WindowSize))
				.SubtractScalarX(eye_vector.x * default_camera_dist)
				.SubtractScalarY(eye_vector.y * default_camera_dist)
			camera_vec.x = lookatpos.x
			camera_vec.y = lookatpos.y
			if (cursor_at_minimap_at === 0)
				cursor_at_minimap_at = current_time
		}
	} else {
		cursor_at_minimap_at = 0
		cursor_entered_minimap_at = 0
	}
	let moving_camera = false,
		moved_x = false,
		moved_y = false
	{ // move camera via screen bounds
		const threshold = 0.008 * RendererSDK.WindowSize.y / RendererSDK.WindowSize.x
		const extend_dist = ExecuteOrder.camera_speed * dt
		if (CanMoveCamera(camera_vec, latest_usercmd.MousePosition)) {
			if (latest_usercmd.MousePosition.x <= threshold) {
				camera_vec.x -= extend_dist
				moved_x = true
				moving_camera = true
			} else if (latest_usercmd.MousePosition.x >= 1 - threshold) {
				camera_vec.x += extend_dist
				moved_x = true
				moving_camera = true
			}
			if (latest_usercmd.MousePosition.y <= threshold) {
				camera_vec.y += extend_dist
				moved_y = true
				moving_camera = true
			} else if (latest_usercmd.MousePosition.y >= 1 - threshold) {
				camera_vec.y -= extend_dist
				moved_y = true
				moving_camera = true
			}
		}
		if (!moving_camera && were_moving_camera)
			camera_move_end = current_time
		if (camera_move_end > current_time - camera_move_linger_duration) {
			camera_vec.x += extend_dist * (camera_direction.x - 0.5)
			camera_vec.y -= extend_dist * (camera_direction.y - 0.5)
			if (camera_direction.x !== 0.5)
				moved_x = true
			if (camera_direction.y !== 0.5)
				moved_y = true
		}
		were_moving_camera = moving_camera
	}
	if (
		moving_camera
		|| latest_camera_yellow_zone_poly_screen.IsInside(latest_usercmd.MousePosition)
	)
		yellow_zone_out_at = current_time
	if (
		moving_camera
		|| latest_camera_green_zone_poly_screen.IsInside(latest_usercmd.MousePosition)
	)
		green_zone_out_at = current_time
	let camera_limited_x = false,
		camera_limited_y = false
	{
		const bounds_ent = CameraBounds
		if (bounds_ent !== undefined) {
			const old_x = camera_vec.x,
				old_y = camera_vec.y
			camera_vec.x = Math.min(
				Math.max(camera_vec.x, bounds_ent.BoundsMin.x),
				bounds_ent.BoundsMax.x,
			)
			camera_vec.y = Math.min(
				Math.max(camera_vec.y, bounds_ent.BoundsMin.y),
				bounds_ent.BoundsMax.y,
			)
			camera_limited_x = Math.abs(camera_vec.x - old_x) > 0.01
			camera_limited_y = Math.abs(camera_vec.y - old_y) > 0.01
		}
		UpdateCameraBounds(camera_vec)
		target_pos = ComputeTargetPos(camera_vec, current_time)
	}
	const camera_limited = (camera_limited_x === moved_x) && (camera_limited_y === moved_y)
	if ((!moving_camera && !interacting_with_minimap) || camera_limited) {
		let execute_order = camera_limited
		if (target_pos instanceof Vector2)
			execute_order ||= (
				order_suits
				|| (
					cursor_at_target
					&& latest_camera_red_zone_poly_screen.IsInside(target_pos)
				)
				|| !CanMoveCamera(camera_vec, target_pos)
			)
		if (execute_order && order !== undefined) {
			if (!ExecuteOrder.prefire_orders)
				order[0].Execute()
			if (ExecuteOrder.debug_orders)
				console.log(`Finished order ${order[0].OrderType} after ${current_time - order[1]}ms at ${GameState.RawGameTime}`)
			last_order_finish = current_time
			last_order_used_minimap = order[2]
			ExecuteOrder.order_queue.splice(0, 1)
		}
	}
	if (order === undefined && last_order_finish < current_time - (last_order_used_minimap ? order_linger_duration_minimap : order_linger_duration))
		last_order_target = undefined
	latest_camera_x = latest_usercmd.CameraPosition.x = camera_vec.x
	latest_camera_y = latest_usercmd.CameraPosition.y = camera_vec.y

	latest_cursor.CopyFrom(latest_usercmd.MousePosition)
	latest_usercmd.MousePosition
		.MultiplyForThis(RendererSDK.WindowSize)
		.RoundForThis()
		.DivideForThis(RendererSDK.WindowSize)
	latest_usercmd.VectorUnderCursor.CopyFrom(debug_cursor.CopyFrom(RendererSDK.ScreenToWorldFar(
		[latest_cursor],
		camera_vec,
		default_camera_dist,
	)[0]))
	const units = Units.filter(ent => ent.IsVisible && ent.IsSpawned)
	const intersected_units_mask = EntityHitBoxesIntersect(units, camera_vec, latest_usercmd.MousePosition)
	const intersected_units = units.filter((_, i) => intersected_units_mask[i])
	latest_usercmd.WeaponSelect = (
		(order !== undefined || ExecuteOrder.hold_orders > 0)
		&& last_order_target instanceof Unit
		&& intersected_units.includes(last_order_target)
	) ? last_order_target : orderByFirst(
		intersected_units,
		ent => ent.Distance(latest_usercmd.VectorUnderCursor),
	)

	latest_usercmd.WriteBack()
	WriteUserCmd()
}
EventsSDK.on("Draw", ProcessUserCmd)
Events.on("RequestUserCmd", () => {
	if (!ExecuteOrder.disable_humanizer)
		ProcessUserCmd(true)
})

const debugParticles = new ParticlesSDK()
EventsSDK.on("Draw", () => {
	if (
		!ExecuteOrder.debug_draw
		|| ExecuteOrder.disable_humanizer
		|| GameState.UIState !== DOTAGameUIState_t.DOTA_GAME_UI_DOTA_INGAME
	) {
		debugParticles.DestroyAll()
		return
	}
	const hero = LocalPlayer?.Hero
	if (hero !== undefined) {
		debug_camera_poly.Draw("1", hero, debugParticles, Color.Aqua, 40, 40, false)
		latest_camera_green_zone_poly_world.Draw("2", hero, debugParticles, Color.Green, 40, 40, false)
		latest_camera_yellow_zone_poly_world.Draw("3", hero, debugParticles, Color.Yellow, 40, 40, false)
		latest_camera_red_zone_poly_world.Draw("4", hero, debugParticles, Color.Red, 40, 40, false)
	}

	const debug_point = RendererSDK.WorldToScreen(debug_cursor)
	if (debug_point !== undefined)
		RendererSDK.FilledRect(debug_point.Subtract(new Vector2(5, 5)), new Vector2(10, 10), Color.Fuchsia)
})

let ctrl_down = false,
	shift_down = false
InputEventSDK.on("KeyDown", key => {
	if (key === VKeys.CONTROL || key === VKeys.LCONTROL || key === VKeys.RCONTROL)
		ctrl_down = true
	if (key === VKeys.SHIFT || key === VKeys.LSHIFT || key === VKeys.RSHIFT)
		shift_down = true
})
InputEventSDK.on("KeyUp", key => {
	if (key === VKeys.CONTROL || key === VKeys.LCONTROL || key === VKeys.RCONTROL)
		ctrl_down = false
	if (key === VKeys.SHIFT || key === VKeys.LSHIFT || key === VKeys.RSHIFT)
		shift_down = false
})
const LatestUnitOrder_view = new DataView(LatestUnitOrder.buffer)
function deserializeOrder(): ExecuteOrder {
	const issuers_size = LatestUnitOrder_view.getUint32(26, true)
	let issuers: Unit[] = []
	for (let i = 0; i < issuers_size; i++) {
		const ent_id = LatestUnitOrder_view.getUint32(30 + (i * 4), true)
		const ent = EntityManager.EntityByIndex(ent_id)
		if (ent instanceof Unit)
			issuers.push(ent)
	}
	issuers = [...new Set([...issuers, ...InputManager.SelectedEntities])]

	const target = LatestUnitOrder_view.getUint32(16, true),
		ability = LatestUnitOrder_view.getUint32(20, true),
		order_type = LatestUnitOrder_view.getUint32(0, true) as dotaunitorder_t
	let target_: Entity | number = target,
		ability_: Ability | number = ability
	if (order_type === dotaunitorder_t.DOTA_UNIT_ORDER_CAST_TARGET_TREE)
		target_ = EntityManager.AllEntities.find(ent => (
			(ent instanceof Tree || ent instanceof TempTree)
			&& ent.BinaryID === target
		)) ?? target_
	else if (order_type !== dotaunitorder_t.DOTA_UNIT_ORDER_MOVE_ITEM)
		target_ = EntityManager.EntityByIndex(target_) ?? target_
	if (order_type !== dotaunitorder_t.DOTA_UNIT_ORDER_PURCHASE_ITEM)
		ability_ = (EntityManager.EntityByIndex(ability_) as Ability) ?? ability_
	switch (order_type) {
		case dotaunitorder_t.DOTA_UNIT_ORDER_CAST_NO_TARGET:
		case dotaunitorder_t.DOTA_UNIT_ORDER_CAST_POSITION:
		case dotaunitorder_t.DOTA_UNIT_ORDER_CAST_TARGET:
		case dotaunitorder_t.DOTA_UNIT_ORDER_CAST_TARGET_TREE:
		case dotaunitorder_t.DOTA_UNIT_ORDER_CAST_TOGGLE:
		case dotaunitorder_t.DOTA_UNIT_ORDER_CAST_TOGGLE_AUTO:
		case dotaunitorder_t.DOTA_UNIT_ORDER_TRAIN_ABILITY:
		case dotaunitorder_t.DOTA_UNIT_ORDER_PURCHASE_ITEM:
		case dotaunitorder_t.DOTA_UNIT_ORDER_SELL_ITEM:
		case dotaunitorder_t.DOTA_UNIT_ORDER_SET_ITEM_COMBINE_LOCK:
			break
		default:
			if (ctrl_down && ConVarsSDK.GetBoolean("dota_player_multipler_orders", false))
				issuers = [...new Set([...issuers, ...Units.filter(ent => (
					ent.IsControllable
					&& ent.RootOwner === LocalPlayer
					&& ent.IsAlive
					&& !ent.IsEnemy()
					&& ent.ShouldUnifyOrders
				))])]
			break
	}
	return new ExecuteOrder(
		order_type,
		target_,
		new Vector3(
			LatestUnitOrder_view.getFloat32(4, true),
			LatestUnitOrder_view.getFloat32(8, true),
			LatestUnitOrder_view.getFloat32(12, true),
		),
		ability_,
		issuers,
		(LatestUnitOrder_view.getUint8(25) !== 0) || shift_down,
		LatestUnitOrder_view.getUint8(24) !== 0,
	)
}

Events.on("PrepareUnitOrders", () => {
	const order = deserializeOrder()
	if (order === undefined)
		return true

	const ret = EventsSDK.emit("PrepareUnitOrders", true, order)
	if (!ret)
		return false
	if (!ExecuteOrder.disable_humanizer) {
		order.ExecuteQueued()
		if (latest_usercmd !== undefined)
			ProcessUserCmd(true)
		return false
	}
	return true
})

Events.on("DebuggerPrepareUnitOrders", (is_user_input: boolean, was_cancelled: boolean) => {
	const order = deserializeOrder()
	if (order !== undefined)
		EventsSDK.emit(
			"DebuggerPrepareUnitOrders",
			true,
			order,
			is_user_input,
			was_cancelled,
		)
})

function ClearHumanizerState() {
	ExecuteOrder.order_queue.splice(0)
	last_order_finish = 0
	latest_camera_x = 0
	latest_camera_y = 0
	current_order = undefined
	debug_cursor.toZero()
	latest_update = 0
	latest_usercmd = new UserCmd()
	camera_move_end = 0
	camera_direction.toZero()
	yellow_zone_out_at = 0
	green_zone_out_at = 0
	cursor_at_minimap_at = 0
	cursor_entered_minimap_at = 0
	InputManager.IsShopOpen = false
	InputManager.IsScoreboardOpen = false
	InputManager.SelectedEntities.splice(0)
	params = getParams()
}

Events.on("NewConnection", ClearHumanizerState)
EventsSDK.on("GameEnded", ClearHumanizerState)
