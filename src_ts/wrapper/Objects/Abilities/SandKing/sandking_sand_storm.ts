import Ability from "../../Base/Ability"

export default class sandking_sand_storm extends Ability {
	public NativeEntity: Nullable<C_DOTA_Ability_SandKing_SandStorm>
}

import { RegisterClass } from "wrapper/Objects/NativeToSDK"
RegisterClass("sandking_sand_storm", sandking_sand_storm)