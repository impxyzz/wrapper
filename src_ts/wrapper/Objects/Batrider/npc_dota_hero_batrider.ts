import Hero from "../Base/Hero"

export default class npc_dota_hero_batrider extends Hero {
	public readonly m_pBaseEntity!: C_DOTA_Unit_Hero_Batrider
}

import { RegisterClass } from "wrapper/Objects/NativeToSDK"
RegisterClass("C_DOTA_Unit_Hero_Batrider", npc_dota_hero_batrider)