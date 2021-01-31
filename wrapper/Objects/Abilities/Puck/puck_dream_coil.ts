import { WrapperClass } from "../../../Decorators"
import Ability from "../../Base/Ability"

@WrapperClass("puck_dream_coil")
export default class puck_dream_coil extends Ability {
	public get AOERadius() {
		return this.GetSpecialValue("coil_break_radius")
	}
}
