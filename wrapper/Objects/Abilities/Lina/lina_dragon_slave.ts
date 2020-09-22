import Ability from "../../Base/Ability"
import { WrapperClass } from "../../../Decorators"

@WrapperClass("lina_dragon_slave")
export default class lina_dragon_slave extends Ability {
	public get EndRadius(): number {
		return this.GetSpecialValue("dragon_slave_width_end")
	}

	public get AOERadius(): number {
		return this.GetSpecialValue("dragon_slave_width_initial")
	}

	public get BaseCastRange(): number {
		return this.GetSpecialValue("dragon_slave_distance")
	}

	public get Speed(): number {
		return this.GetSpecialValue("dragon_slave_speed")
	}
}