import Item from "../Base/Item"

export default class item_force_boots extends Item {
	public readonly m_pBaseEntity!: CDOTA_Item_Force_Boots
}

import { RegisterClass } from "wrapper/Objects/NativeToSDK"
RegisterClass("item_force_boots", item_force_boots)