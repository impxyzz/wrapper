import Hero from "../Base/Hero"

export default class npc_dota_hero_queenofpain extends Hero {
	public readonly m_pBaseEntity!: C_DOTA_Unit_Hero_QueenOfPain
}

import { RegisterClass } from "wrapper/Objects/NativeToSDK"
RegisterClass("C_DOTA_Unit_Hero_QueenOfPain", npc_dota_hero_queenofpain)