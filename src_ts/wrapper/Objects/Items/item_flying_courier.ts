import Item from "../Base/Item"

export default class item_flying_courier extends Item {
	public readonly m_pBaseEntity!: C_DOTA_Item_Flying_Courier
}

import { RegisterClass } from "wrapper/Objects/NativeToSDK"
RegisterClass("item_flying_courier", item_flying_courier)