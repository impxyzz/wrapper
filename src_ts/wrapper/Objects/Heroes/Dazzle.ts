import Hero from "../Base/Hero"

export default class Dazzle extends Hero {
	public readonly m_pBaseEntity!: C_DOTA_Unit_Hero_Dazzle
}

import { RegisterClass } from "wrapper/Objects/NativeToSDK"
RegisterClass("C_DOTA_Unit_Hero_Dazzle", Dazzle)