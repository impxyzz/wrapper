import Hero from "../Base/Hero"

export default class npc_dota_hero_lina extends Hero {
	public NativeEntity: Nullable<C_DOTA_Unit_Hero_Lina>
}

import { RegisterClass } from "wrapper/Objects/NativeToSDK"
RegisterClass("C_DOTA_Unit_Hero_Lina", npc_dota_hero_lina)