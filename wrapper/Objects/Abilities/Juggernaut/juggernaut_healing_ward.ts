import Ability from "../../Base/Ability"
import { WrapperClass } from "../../../Decorators"

@WrapperClass("juggernaut_healing_ward")
export default class juggernaut_healing_ward extends Ability {
	public get AOERadius(): number {
		return this.GetSpecialValue("healing_ward_aura_radius")
	}
}