import Ability from "../../Base/Ability"

export default class mirana_invis extends Ability {
	public NativeEntity: Nullable<C_DOTA_Ability_Mirana_MoonlightShadow>
}

import { RegisterClass } from "wrapper/Objects/NativeToSDK"
RegisterClass("mirana_invis", mirana_invis)