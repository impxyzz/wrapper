import Ability from "../../Base/Ability"

export default class death_prophet_exorcism extends Ability {
	public readonly NativeEntity!: C_DOTA_Ability_DeathProphet_Exorcism

	public get Speed(): number {
		return this.GetSpecialValue("spirit_speed")
	}
}

import { RegisterClass } from "wrapper/Objects/NativeToSDK"
RegisterClass("death_prophet_exorcism", death_prophet_exorcism)
