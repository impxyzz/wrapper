import Ability from "../Base/Ability"

export default class morphling_morph_replicate extends Ability {
	public readonly m_pBaseEntity!: C_DOTA_Ability_Morphling_MorphReplicate
}

import { RegisterClass } from "wrapper/Objects/NativeToSDK"
RegisterClass("morphling_morph_replicate", morphling_morph_replicate)