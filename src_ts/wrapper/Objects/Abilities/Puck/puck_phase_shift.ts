import Ability from "../../Base/Ability"

export default class puck_phase_shift extends Ability {
	public NativeEntity: Nullable<C_DOTA_Ability_Puck_PhaseShift>
}

import { RegisterClass } from "wrapper/Objects/NativeToSDK"
RegisterClass("puck_phase_shift", puck_phase_shift)