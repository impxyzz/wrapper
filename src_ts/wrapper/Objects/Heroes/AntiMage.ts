import Hero from "../Base/Hero"

export default class AntiMage extends Hero {
	public readonly m_pBaseEntity!: C_DOTA_Unit_Hero_AntiMage
}

import { RegisterClass } from "wrapper/Objects/NativeToSDK"
RegisterClass("C_DOTA_Unit_Hero_AntiMage", AntiMage)