import Ability from "../../Base/Ability"

export default class phantom_lancer_juxtapose extends Ability {
	public NativeEntity: Nullable<C_DOTA_Ability_PhantomLancer_Juxtapose>
}

import { RegisterClass } from "wrapper/Objects/NativeToSDK"
RegisterClass("phantom_lancer_juxtapose", phantom_lancer_juxtapose)