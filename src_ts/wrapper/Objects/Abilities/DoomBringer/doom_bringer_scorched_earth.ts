import Ability from "../../Base/Ability"

export default class doom_bringer_scorched_earth extends Ability {
	public readonly NativeEntity!: C_DOTA_Ability_DoomBringer_ScorchedEarth
}

import { RegisterClass } from "wrapper/Objects/NativeToSDK"
RegisterClass("doom_bringer_scorched_earth", doom_bringer_scorched_earth)
