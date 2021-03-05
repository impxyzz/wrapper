import { WrapperClass } from "../../../Decorators"
import Ability from "../../Base/Ability"

@WrapperClass("phantom_assassin_blur")
export default class phantom_assassin_blur extends Ability {
	public GetCastRangeForLevel(_level: number): number {
		return 0
	}
	public GetAOERadiusForLevel(level: number): number {
		return this.GetSpecialValue("radius", level)
	}
}
