import Hero from "../Base/Hero"

export default class npc_dota_hero_ursa extends Hero {
	public NativeEntity: Nullable<C_DOTA_Unit_Hero_Ursa>
}

import { RegisterClass } from "wrapper/Objects/NativeToSDK"
RegisterClass("C_DOTA_Unit_Hero_Ursa", npc_dota_hero_ursa)