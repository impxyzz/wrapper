import Item from "../Base/Item"

export default class item_fusion_rune extends Item {
	public readonly m_pBaseEntity!: C_DOTA_Item_Fusion_rune
}

import { RegisterClass } from "wrapper/Objects/NativeToSDK"
RegisterClass("item_fusion_rune", item_fusion_rune)