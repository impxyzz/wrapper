import Ability from "../../Base/Ability"
import { WrapperClass } from "../../../Decorators"

@WrapperClass("queenofpain_scream_of_pain")
export default class queenofpain_scream_of_pain extends Ability {
	public get AOERadius(): number {
		return this.GetSpecialValue("area_of_effect")
	}

	public get Speed(): number {
		return this.GetSpecialValue("projectile_speed")
	}
}