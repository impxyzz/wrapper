import Item from "../Base/Item"

export default class item_phase_boots extends Item {
	public readonly m_pBaseEntity!: C_DOTA_Item_PhaseBoots
}

import { RegisterClass } from "wrapper/Objects/NativeToSDK"
RegisterClass("item_phase_boots", item_phase_boots)