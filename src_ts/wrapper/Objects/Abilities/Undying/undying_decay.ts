import Ability from "../../Base/Ability"

export default class undying_decay extends Ability {
	public NativeEntity: Nullable<C_DOTA_Ability_Undying_Decay>

	public get AbilityDamage(): number {
		return this.GetSpecialValue("decay_damage")
	}
}

import { RegisterClass } from "wrapper/Objects/NativeToSDK"
RegisterClass("undying_decay", undying_decay)
