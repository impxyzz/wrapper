import { WrapperClass } from "../../../Decorators"
import { Ability } from "../../Base/Ability"

@WrapperClass("venomancer_plague_ward")
export class venomancer_plague_ward extends Ability {
	public get Duration(): number {
		return this.GetSpecialValue("duration")
	}
}
