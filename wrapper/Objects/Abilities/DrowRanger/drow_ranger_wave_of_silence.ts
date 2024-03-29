import { WrapperClass } from "../../../Decorators"
import { Ability } from "../../Base/Ability"

@WrapperClass("drow_ranger_wave_of_silence")
export class drow_ranger_wave_of_silence extends Ability {
	public get Speed(): number {
		return this.GetSpecialValue("wave_speed")
	}
	public GetAOERadiusForLevel(level: number): number {
		return this.GetSpecialValue("wave_width", level)
	}
}
