import Hero from "../Base/Hero"

export default class npc_dota_hero_furion extends Hero {
	public readonly m_pBaseEntity!: C_DOTA_Unit_Hero_Furion
}

import { RegisterClass } from "wrapper/Objects/NativeToSDK"
RegisterClass("C_DOTA_Unit_Hero_Furion", npc_dota_hero_furion)