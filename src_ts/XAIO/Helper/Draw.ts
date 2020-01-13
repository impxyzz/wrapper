//@ts-nocheck
import { Unit, LocalPlayer, Menu, ParticlesSDK, Vector3, Color, Hero, Ability } from "wrapper/Imports"

const CircleParticles = new Map<string, number>()
const LineDotParticles = new Map<string, number>()
const CircleParticlesTempRange = new Map<number, number>()

export class XAIOParticle {

	constructor(public unit: Unit) { }

	private get IsOwnerValid(): boolean {
		return LocalPlayer !== undefined && !LocalPlayer.IsSpectator && this.unit !== undefined
	}

	/**
	 * Render Ability or Item Range Radius
	 * @param name | Name item or ability for destroyer
	 * @param Range | Radius
	 * @param Items | Item or Ability
	 * @param State | Turn off/on Toggle
	 * @param Selector | Select in Menu
	 * @param Colors | Color default 255, 255, 255
	 * @param InfrontUnit | InFrontUnit
	 */

	public Render(
		name: string,
		Range: number,
		Items: Ability,
		State: Menu.Toggle,
		Selector: Menu.ImageSelector,
		Colors?: Color,
		InfrontUnit?: Vector3
	) {
		Items !== undefined && Selector.IsEnabled(name) && this.unit.IsAlive && State.value
			? this.DrawParticle(name, Range, Colors, InfrontUnit)
			: this.RemoveParticle(name)
	}
	/**
	 * Line particle at your hero to Unit enemy
	 * @param Base | Base Class Helper
	 * @param Drawing | Toogle
	 * @param State | Toogle
	 * @param target | target enemy
	 */
	public RenderLineTarget(State: Menu.Toggle, target: Hero) {
		return State.value ? this.UpdateLineDot("catch_target", target) : this.RemoveParticle("catch_target")
	}

	/**
	 * Attack Range Unit
	 * @param State | Turn off/on Toogle Base
	 * @param Drawing | Turn off/on Toggle
	 * @param Range | Radius
	 * @param Colors | Color default 255, 255, 0
	 */

	public RenderAttackRange(State: Menu.Toggle, Range: number, Colors: Color = new Color(255, 255, 0)) {
		return this.unit.IsAlive && State.value
			? this.DrawParticle("AttackRange_" + this.unit.Index, Range + this.unit.HullRadius, Colors)
			: this.RemoveParticle("AttackRange_" + this.unit.Index)
	}

	/**
	 * Particle Circle AOE Radius on Unit
	 * @param name | Name string for destroyer
	 * @param range | AOE Radius
	 * @param Colors | undefined | Color default 255, 255, 255
	 * @param InfrontUnit | undefined | InfrontUnit
	 * @param callback | Function Custom SetControlPoint and Create, return particleid from DrawBase class
	 * @example
	 * UpdateCircle("item_blink", 1200, new Color(255, 255, 255))
	 * @example
	 * UpdateCircle("item_blink", 1200, new Color(255, 255, 255), unit.Infront(200),
	 * (parricle) => {
	 * 		ParticlesSDK.SetControlPoint(particle, 1, new Vector3(Colors.r, Colors.g, Colors.b))
	 * })
	 */

	public DrawParticle(
		name: string,
		range: number,
		Colors: Color = Color.White,
		InfrontUnit?: Vector3,
		callback?: (par_id: number) => void,
		path?: string,
		attach?: ParticleAttachment_t,
		unit?: Unit
	) {
		if (!this.IsOwnerValid)
			return

		let particle = CircleParticles.get(name)

		if (particle === undefined) {
			particle = !callback
				? ParticlesSDK.Create("particles/ui_mouseactions/drag_selected_ring.vpcf", ParticleAttachment_t.PATTACH_ABSORIGIN, this.unit)
				: ParticlesSDK.Create(path, attach, unit)

			CircleParticles.set(name, particle)
			CircleParticlesTempRange.set(range, particle)
		}

		if (!CircleParticlesTempRange.has(range)) {
			this.RemoveParticle(name)
			CircleParticlesTempRange.clear()
			return
		}

		if (name === undefined)
			return

		if (callback === undefined) {

			ParticlesSDK.SetControlPoint(particle, 1, new Vector3(Colors.r, Colors.g, Colors.b))
			ParticlesSDK.SetControlPoint(particle, 2, new Vector3(range * 1.114, 255, 0))
			ParticlesSDK.SetControlPoint(particle, 0, InfrontUnit === undefined ? this.unit.Position : InfrontUnit)

		} else {
			callback(particle)
		}
	}

	/**
	 * Particle Destroy
	 * @param name | Name particle string for destroyer
	 * @example RemoveParticle("item_blink")
	 */

	public RemoveParticle(name: string) {

		let particle = CircleParticles.get(name)
		if (particle !== undefined) {
			ParticlesSDK.Destroy(particle, true)
			CircleParticles.delete(name)
		}

		let _particle = LineDotParticles.get(name)
		if (_particle !== undefined) {
			ParticlesSDK.Destroy(_particle, true)
			LineDotParticles.delete(name)
		}
	}

	private UpdateLineDot(name: string, target: Hero) {

		if (!this.IsOwnerValid)
			return

		let particle = LineDotParticles.get(name)
		if (particle === undefined && target !== undefined) {
			particle = ParticlesSDK.Create("particles/ui_mouseactions/range_finder_tower_aoe.vpcf", ParticleAttachment_t.PATTACH_ABSORIGIN, target)
			ParticlesSDK.SetControlPoint(particle, 6, new Vector3(1))
			LineDotParticles.set(name, particle)
		}

		if (LineDotParticles.has(name)) {
			if (target !== undefined && this.unit.IsAlive) {
				ParticlesSDK.SetControlPoint(particle, 2, this.unit.Position)
				ParticlesSDK.SetControlPoint(particle, 7, target.Position)
			} else {
				this.RemoveParticle(name)
			}
		}
	}
}

EventsSDK.on("GameEnded", () => {
	CircleParticles.clear()
	LineDotParticles.clear()
	CircleParticlesTempRange.clear()
})
