import Hero from "../Base/Hero"

export default class npc_dota_hero_zuus extends Hero {
	public readonly m_pBaseEntity!: C_DOTA_Unit_Hero_Zuus
}

import { RegisterClass } from "wrapper/Objects/NativeToSDK"
RegisterClass("C_DOTA_Unit_Hero_Zuus", npc_dota_hero_zuus)