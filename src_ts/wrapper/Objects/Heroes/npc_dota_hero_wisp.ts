import Hero from "../Base/Hero"

export default class npc_dota_hero_wisp extends Hero {
	public NativeEntity: Nullable<C_DOTA_Unit_Hero_Wisp>
}

import { RegisterClass } from "wrapper/Objects/NativeToSDK"
RegisterClass("C_DOTA_Unit_Hero_Wisp", npc_dota_hero_wisp)