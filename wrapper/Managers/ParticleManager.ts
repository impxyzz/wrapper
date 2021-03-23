import Color from "../Base/Color"
import Particle, { ControlPoint, ControlPointParam } from "../Base/Particle"
import Vector3 from "../Base/Vector3"
import { ParticleAttachment_t } from "../Enums/ParticleAttachment_t"
import Entity from "../Objects/Base/Entity"

export enum PARTICLE_RENDER_NAME {
	NORMAL = "Normal",
	ROPE = "Rope",
	ANIMATION = "Animation",
}

export enum PARTICLE_RENDER {
	NORMAL = 0,
	ROPE,
	ANIMATION,
}

function ParticleRangePath(name: string): string {
	return `particles/range_display/range_display_${name.toLowerCase()}.vpcf`
}
function ParticleLinePath(name: string): string {
	return `particles/range_line/${name.toLowerCase()}.vpcf`
}
function RenderPath(render: PARTICLE_RENDER): string {
	return (PARTICLE_RENDER[render] ?? PARTICLE_RENDER_NAME.NORMAL).toLowerCase()
}
function RangeRenderPath(render = PARTICLE_RENDER.NORMAL): string {
	return ParticleRangePath(RenderPath(render))
}
function BoundingAreaRenderPath(render = PARTICLE_RENDER.NORMAL): string {
	return ParticleLinePath(`bounding_area_view_${RenderPath(render)}`)
}

export interface IDrawCircleOptions {
	Attachment?: ParticleAttachment_t
	RenderStyle?: PARTICLE_RENDER
	Position?: Entity | Vector3
	Color?: Color
	Width?: number
	Alpha?: number
}

export interface IDrawLineOptions {
	Attachment?: ParticleAttachment_t
	Position?: Entity | Vector3
	Color?: Color
	Width?: number
	Alpha?: number
	Mode2D?: number
}

export interface IDrawLineTargetOptions {
	Attachment?: ParticleAttachment_t
	Start?: Entity | Vector3
	End?: Entity | Vector3
	Color?: Color
	Alpha?: number // float
}

export interface IDrawBoundingAreaOptions {
	RenderStyle?: PARTICLE_RENDER
	Color?: Color
	Width?: number
}

class ParticlesSDK {
	public readonly AllParticles = new Map<any, Particle>()
	private readonly AllParticlesRange = new Map<Particle, number>()

	public AddOrUpdate(
		key: any,
		path: string,
		attachment: ParticleAttachment_t,
		entity: Nullable<Entity> | Vector3,
		...points: ControlPointParam[]
	): Particle {
		let particle = this.AllParticles.get(key)

		if (
			particle === undefined
			|| particle.Entity !== entity
			|| particle.Path !== path
			|| particle.Attachment !== attachment
		) {
			if (particle !== undefined)
				particle.Destroy(true)

			particle = new Particle(this, key, path, attachment, entity instanceof Entity ? entity : entity, ...points)

			this.AllParticles.set(key, particle)
		} else if (points !== undefined)
			particle.SetControlPoints(...points)

		return particle
	}

	public DrawCircle(
		key: any,
		entity: Entity,
		range: number = 100,
		options: IDrawCircleOptions = {},
	) {
		this.CheckChangedRange(key, range)
		return this.AddOrUpdate(
			key,
			RangeRenderPath(options.RenderStyle),
			options.Attachment ?? ParticleAttachment_t.PATTACH_ABSORIGIN,
			entity,
			[0, options.Position ?? entity],
			[1, range],
			[2, options.Color ?? Color.Aqua],
			[3, options.Width ?? 10],
			[4, options.Alpha ?? 255],
		)
	}

	public DrawSelectedRing(
		key: any,
		entity: Entity,
		range: number = 100,
		position: Entity | Vector3 = entity,
		color = Color.Aqua,
	) {
		this.CheckChangedRange(key, range)
		return this.AddOrUpdate(
			key,
			"particles/ui_mouseactions/drag_selected_ring.vpcf",
			ParticleAttachment_t.PATTACH_ABSORIGIN,
			entity,
			[0, position],
			[1, color],
			[2, new Vector3(range * 1.1, 255)],
		)
	}

	public DrawLine(
		key: any,
		entity: Entity,
		endPosition: Entity | Vector3,
		options: IDrawLineOptions = {},
	) {
		return this.AddOrUpdate(
			key,
			ParticleLinePath("line"),
			options.Attachment ?? ParticleAttachment_t.PATTACH_ABSORIGIN_FOLLOW,
			entity,
			[1, options.Position ?? entity],
			[2, endPosition],
			[3, new Vector3(options.Alpha ?? 255, options.Width ?? 10, options.Mode2D ?? 0)],
			[4, options.Color ?? Color.Aqua],
		)
	}

	public DrawRangeLine(
		key: any,
		entity: Entity,
		endPosition: Entity | Vector3,
	) {
		return this.AddOrUpdate(
			key,
			"particles/ui_mouseactions/range_finder_line.vpcf",
			ParticleAttachment_t.PATTACH_ABSORIGIN,
			entity,
			[0, entity],
			[1, entity],
			[2, endPosition],
		)
	}

	public DrawLineToTarget(
		key: any,
		entity: Entity,
		target: Entity,
		color = Color.Red,
		options: IDrawLineTargetOptions = {},
	) {
		const start_opt = options.Start
		const ctrl2 = start_opt instanceof Vector3
			? start_opt
			: start_opt instanceof Vector3
				? start_opt
				: start_opt?.Position ?? entity.Position

		const end_opt = options.End
		const ctrl7 = end_opt instanceof Vector3
			? end_opt
			: end_opt instanceof Vector3
				? end_opt
				: end_opt?.Position ?? target.Position

		return this.AddOrUpdate(
			key,
			"particles/target/range_finder_tower_aoe.vpcf",
			ParticleAttachment_t.PATTACH_ABSORIGIN,
			entity,
			[2, ctrl2],
			[5, color],
			[6, new Vector3(options.Alpha ?? 1, 0, 0)],
			[7, ctrl7],
		)
	}

	/**
	 *
	 * ControlPoints:
	 * 	0: Start Position (|| entity pos)
	 * 	1: End Position
	 * 	2: Color
	 * 	3: Width
	 * 	4: Alpha
	 */
	public DrawBoundingArea(
		key: any,
		entity: Entity,
		startPos: Entity | Vector3,
		endPosition: Entity | Vector3 = entity,
		options: IDrawBoundingAreaOptions = {},
	) {
		return this.AddOrUpdate(
			key,
			BoundingAreaRenderPath(options.RenderStyle),
			ParticleAttachment_t.PATTACH_ABSORIGIN,
			entity,
			[0, startPos],
			[1, endPosition],
			[2, options.Color ?? Color.Aqua],
			[3, options.Width ?? 10],
			[4, options.Color?.a ?? 0],
		)
	}

	public SetConstrolPointByKey(key: any, id: number, point: ControlPoint) {
		this.AllParticles.get(key)?.SetControlPoint(id, point)
	}
	public SetConstrolPointsByKey(key: any, ...points: ControlPointParam[]) {
		this.AllParticles.get(key)?.SetControlPoints(...points)
	}
	public RestartByKey(key: any) {
		this.AllParticles.get(key)?.Restart()
	}
	public DestroyByKey(key: any, immediate = true) {
		this.AllParticles.get(key)?.Destroy(immediate)
		this.AllParticlesRange.delete(key)
	}

	public DestroyAll(immediate = true) {
		this.AllParticles.forEach(particle => particle.Destroy(immediate))
		this.AllParticlesRange.clear()
	}

	public CheckChangedRange(key: any, range: number) {
		const particleRange = this.AllParticlesRange.get(key)

		if (particleRange !== undefined && particleRange !== range) {
			this.DestroyByKey(key)
			this.AllParticlesRange.set(key, range)
			return
		}

		if (particleRange === undefined)
			this.AllParticlesRange.set(key, range)

		return
	}
}

export default ParticlesSDK
