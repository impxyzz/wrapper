import Ability from "../../Base/Ability"

export default class alchemist_unstable_concoction extends Ability {
	public NativeEntity: Nullable<C_DOTA_Ability_Alchemist_UnstableConcoction>
}

import { RegisterClass } from "wrapper/Objects/NativeToSDK"
RegisterClass("alchemist_unstable_concoction", alchemist_unstable_concoction)