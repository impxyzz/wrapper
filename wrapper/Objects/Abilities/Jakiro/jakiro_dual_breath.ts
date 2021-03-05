import { WrapperClass } from "../../../Decorators"
import Ability from "../../Base/Ability"

@WrapperClass("jakiro_dual_breath")
export default class jakiro_dual_breath extends Ability {
	public get EndRadius(): number {
		return this.GetSpecialValue("end_radius")
	}
	public get Speed(): number {
		return this.GetSpecialValue("speed_fire")
	}
	public GetAOERadiusForLevel(level: number): number {
		return this.GetSpecialValue("start_radius", level)
	}
}
