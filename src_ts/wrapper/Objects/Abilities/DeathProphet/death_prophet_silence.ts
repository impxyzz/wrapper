import Ability from "../../Base/Ability"

export default class death_prophet_silence extends Ability {
	public readonly NativeEntity!: C_DOTA_Ability_DeathProphet_Silence
}

import { RegisterClass } from "wrapper/Objects/NativeToSDK"
RegisterClass("death_prophet_silence", death_prophet_silence)
