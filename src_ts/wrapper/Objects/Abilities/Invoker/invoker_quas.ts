import Ability from "../../Base/Ability"

export default class invoker_quas extends Ability {
	public NativeEntity: Nullable<C_DOTA_Ability_Invoker_Quas>
}

import { RegisterClass } from "wrapper/Objects/NativeToSDK"
RegisterClass("invoker_quas", invoker_quas)