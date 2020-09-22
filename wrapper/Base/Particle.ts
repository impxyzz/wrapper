import Entity from "../Objects/Base/Entity"
import ParticlesSDK from "../Managers/ParticleManager"
import Vector2 from "./Vector2"
import Vector3 from "./Vector3"
import Color from "./Color"

export type ControlPoint = boolean | number | Entity | Vector3 | Vector2 | Color | [number?, number?, number?]
export type ControlPointParam = [number, ControlPoint]

export default class Particle {
	public IsValid = false
	public readonly ControlPoints = new Map<number, Vector3>()
	private EffectIndex = -1

	constructor(
		public readonly parent: ParticlesSDK,
		public readonly Key: any,
		public readonly Path: string,
		public readonly Attachment: ParticleAttachment_t,
		public readonly Entity?: Entity,
		...controlPoints: ControlPointParam[]
	) {
		this.Create(...controlPoints)
	}

	public SetControlPoint(id: number, param: ControlPoint): void {
		if (!this.IsValid)
			return

		if (Array.isArray(param))
			param = Vector3.fromArray(param)
		else if (param instanceof Entity)
			param = param.Position
		else if (param instanceof Vector2)
			param = param.toVector3()
		else if (param instanceof Color)
			param = new Vector3(param.r, param.g, param.b)
		else if (typeof param === "number")
			param = new Vector3(param, 0, 0)
		else if (typeof param === "boolean")
			param = new Vector3(param ? 1 : 0, 0, 0)
		else
			param = param.Clone()

		if (this.ControlPoints.get(id)?.Equals(param))
			return
		this.ControlPoints.set(id, param)
		param.toIOBuffer()
		Particles.SetControlPoint(this.EffectIndex, id)
	}

	/**
	 * @param points rest params (index as number, point as Vector)
	 *
	 * @example
	 * particle.SetControlPoints(
	 * 	[1, new Vector3(1, 2, 3)],
	 * 	[2, new Vector2(1, 2, 3)],
	 * 	[3, new Color(1, 2, 3)],
	 * 	[4, false],
	 * 	[5, [1, 2]],
	 * 	[6, 646]
	 * )
	 */
	public SetControlPoints(...controlPoints: ControlPointParam[]): void {
		if (!this.IsValid)
			return
		controlPoints.forEach(([id, param]) => this.SetControlPoint(id, param))
	}

	public Restart() {
		if (!this.IsValid)
			return
		let save = [...this.ControlPoints.entries()] // TODO: Is saving needed?
		this.Destroy().Create(...save)
	}

	public Destroy(immediate = true) {
		if (this.IsValid) {
			Particles.Destroy(this.EffectIndex, immediate)
			this.EffectIndex = -1
			this.IsValid = false
			this.ControlPoints.clear()
			this.parent.AllParticles.delete(this.Key)
		}
		return this
	}

	public toJSON() {
		return {
			Key: this.Key,
			Path: this.Path,
			Attachment: this.Attachment,
			Entity: this.Entity,
			ControlPoints: [...this.ControlPoints.entries()],
			EffectIndex: this.EffectIndex
		}
	}

	private Create(...controlPoints: ControlPointParam[]): this {
		if (this.IsValid)
			return this

		this.EffectIndex = Particles.Create(
			this.Path,
			this.Attachment,
			this.Entity?.IsValid
				? this.Entity.Index
				: -1
		)
		this.IsValid = true
		this.SetControlPoints(...controlPoints)
		this.parent.AllParticles.set(this.Key, this)

		return this
	}
}