import { WrapperClass } from "../../../Decorators"
import Ability from "../../Base/Ability"

@WrapperClass("terrorblade_terror_wave")
export default class terrorblade_terror_wave extends Ability {
	public get AOERadius() {
		return this.GetSpecialValue("scepter_radius")
	}
}
