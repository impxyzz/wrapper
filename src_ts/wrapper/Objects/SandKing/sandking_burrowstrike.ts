import Ability from "../Base/Ability"

export default class sandking_burrowstrike extends Ability {
	public readonly m_pBaseEntity!: C_DOTA_Ability_SandKing_BurrowStrike
}

import { RegisterClass } from "wrapper/Objects/NativeToSDK"
RegisterClass("sandking_burrowstrike", sandking_burrowstrike)