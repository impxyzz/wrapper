import Item from "../Base/Item"

export default class item_gauntlets extends Item {
	public readonly m_pBaseEntity!: C_DOTA_Item_Gauntlets
}

import { RegisterClass } from "wrapper/Objects/NativeToSDK"
RegisterClass("item_gauntlets", item_gauntlets)