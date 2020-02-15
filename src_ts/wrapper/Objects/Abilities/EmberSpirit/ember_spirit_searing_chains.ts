import Ability from "../../Base/Ability"

export default class ember_spirit_searing_chains extends Ability {
	public NativeEntity: Nullable<C_DOTA_Ability_EmberSpirit_SearingChains>
}

import { RegisterClass } from "wrapper/Objects/NativeToSDK"
RegisterClass("ember_spirit_searing_chains", ember_spirit_searing_chains)
