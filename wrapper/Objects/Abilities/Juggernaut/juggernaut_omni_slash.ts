import Ability from "../../Base/Ability"
import { WrapperClass } from "../../../Decorators"

@WrapperClass("juggernaut_omni_slash")
export default class juggernaut_omni_slash extends Ability {
	public get AOERadius(): number {
		return this.GetSpecialValue("omni_slash_radius")
	}
}