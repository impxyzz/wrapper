import Vector2 from "../../../Base/Vector2"
import Vector3 from "../../../Base/Vector3"
import { WrapperClass } from "../../../Decorators"
import { ParticleAttachment_t } from "../../../Enums/ParticleAttachment_t"
import EntityManager from "../../../Managers/EntityManager"
import EventsSDK from "../../../Managers/EventsSDK"
import ParticlesSDK from "../../../Managers/ParticleManager"
import { GetPositionHeight } from "../../../Native/WASM"
import * as ArrayExtensions from "../../../Utils/ArrayExtensions"
import GameState from "../../../Utils/GameState"
import Ability from "../../Base/Ability"
import { LocalPlayer } from "../../Base/Entity"
import TempTree from "../../Base/TempTree"
import Tree from "../../Base/Tree"
import Unit from "../../Base/Unit"

@WrapperClass("monkey_king_tree_dance")
export default class monkey_king_tree_dance extends Ability {
	public readonly StartPosition = new Vector3().Invalidate()
	public TargetTree: Nullable<Tree | TempTree>
	public PredictedPositionsPerTree: [Vector3, Tree | TempTree, number][] = [] // current position, tree, finished jumping at time
	public StartedJumpingTime = 0
	public EndedJumpingTime = 0
	public IsJumping = false
	public IsJumpingToTree = true

	public GetBaseCastRangeForLevel(level: number): number {
		return this.GetSpecialValue("ground_jump_distance", level)
	}
}

function FilterValidTrees(ar: (Tree | TempTree)[], pos: Vector3, cast_range: number): [Vector3, Tree | TempTree, number][] {
	return ar
		.filter(tree => tree.IsAlive && tree.IsInRange(pos, cast_range) && tree.Distance2D(pos) > 32)
		.map(tree => [pos.Clone(), tree, 0])
}

const trails = new Map<number, Nullable<monkey_king_tree_dance>>()
EventsSDK.on("ParticleCreated", (id, path) => {
	if (path === "particles/units/heroes/hero_monkey_king/monkey_king_jump_trail.vpcf")
		trails.set(id, undefined)
})
const particlesSDK = new ParticlesSDK()
EventsSDK.on("ParticleUpdatedEnt", (id, cp, ent, _attach, _attachment, pos) => {
	if (cp !== 1 || !trails.has(id))
		return

	if (!(ent instanceof Unit))
		return
	const abil = ent.GetAbilityByClass(monkey_king_tree_dance)
	if (abil === undefined)
		return
	abil.StartedJumpingTime = GameState.RawGameTime
	pos.CopyTo(abil.StartPosition)
	trails.set(id, abil)
	abil.IsJumping = true
	abil.IsJumpingToTree = (
		ent.LastActivity === ent.GetActivityForAbilityClass(monkey_king_tree_dance)
		&& Math.abs(GameState.RawGameTime - ent.LastActivityEndTime - (1 / 30)) < 0.04
	)
	abil.TargetTree = undefined
	const cast_range = abil.CastRange
	abil.PredictedPositionsPerTree = [
		...FilterValidTrees(EntityManager.GetEntitiesByClass(Tree), pos, cast_range),
		...FilterValidTrees(EntityManager.GetEntitiesByClass(TempTree), pos, cast_range),
	]
	particlesSDK.DestroyAll()
})

EventsSDK.on("ParticleDestroyed", id => {
	const abil = trails.get(id)
	if (abil !== undefined) {
		abil.IsJumping = false
		abil.EndedJumpingTime = GameState.RawGameTime + (1 / 30)
	}
	trails.delete(id)
})

function CreateParticleForTree(tree: Tree | TempTree) {
	const particle_pos = tree.Position.AddScalarZ(250)
	particlesSDK.AddOrUpdate(
		particle_pos,
		"particles/units/heroes/hero_skywrath_mage/skywrath_mage_concussive_shot.vpcf",
		ParticleAttachment_t.PATTACH_CUSTOMORIGIN,
		LocalPlayer!.Hero!,
		[0, particle_pos],
		[1, particle_pos],
		[2, new Vector3(3000)],
	)
}

EventsSDK.on("Tick", dt => {
	EntityManager.GetEntitiesByClass(monkey_king_tree_dance).forEach(abil => {
		const owner = abil.Owner
		if (owner === undefined)
			return

		if (
			abil.TargetTree !== undefined
			|| !abil.IsJumpingToTree
			|| GameState.RawGameTime === abil.StartedJumpingTime
		)
			return

		const start_pos = abil.StartPosition
		if (!start_pos.IsValid)
			return
		if (owner.IsVisible && owner.HasBuffByName("modifier_monkey_king_arc_to_ground")) {
			abil.TargetTree = undefined
			abil.PredictedPositionsPerTree = []
			return
		}
		const finished_jumping = !abil.IsJumping && Math.abs(GameState.RawGameTime - abil.EndedJumpingTime) < 0.01,
			finished_jumping_trees: (Tree | TempTree)[] = []
		abil.PredictedPositionsPerTree.forEach(predicted_ar => {
			const [current_pos, tree, time_finished] = predicted_ar
			if (time_finished !== 0)
				return
			const target_pos = tree.Position
			{ // update horizontal motion
				const leap_speed = 700 + abil.StartPosition.Distance2D(target_pos) * 0.4
				const distance_left = current_pos.Distance2D(target_pos)
				const velocity = current_pos.GetDirection2DTo(target_pos).MultiplyScalarForThis(leap_speed * dt)
				current_pos.AddForThis(velocity)
				if (velocity.Length + owner.HullRadius + /* valve(tm) magic */5 >= distance_left) {
					current_pos.z = GetPositionHeight(Vector2.FromVector3(current_pos))
					predicted_ar[2] = GameState.RawGameTime
					if (finished_jumping) {
						CreateParticleForTree(tree)
						finished_jumping_trees.push(tree)
					}
				}
			}
			if (predicted_ar[2] === 0) { // update vertical motion
				const mul = 1 - (target_pos.Distance2D(current_pos) / target_pos.Distance2D(start_pos))
				current_pos.z = start_pos.z + ((target_pos.z - start_pos.z) * mul) + Math.sin(mul * Math.PI) * Math.min(200, target_pos.Distance2D(start_pos) / 3)
				const ground_height = GetPositionHeight(Vector2.FromVector3(current_pos))
				if (current_pos.z < ground_height)
					current_pos.z = ground_height
			}
		})
		if (finished_jumping_trees.length === 1)
			abil.TargetTree = finished_jumping_trees[0]

		if (!abil.IsJumping)
			return

		// further code relies on owner visibility, so we should skip it if owner isn't visible
		if (!owner.IsVisible)
			return
		const hero_angle = owner.NetworkedRotationRad
		const best_predicted_pos = ArrayExtensions.orderBy(
			abil.PredictedPositionsPerTree.filter(ar =>
				ar[2] === 0
				&& Math.abs(
					hero_angle - abil.StartPosition.GetDirectionTo(ar[1].Position).Angle,
				) < 0.05, // 0.05rad = 2.8deg
			),
			ar => owner.NetworkedPosition.Distance(ar[0]),
		)[0]
		if (best_predicted_pos !== undefined) {
			const tree = best_predicted_pos[1]
			CreateParticleForTree(tree)
			abil.TargetTree = tree
		}
	})
})
