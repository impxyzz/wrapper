import Item from "../Base/Item"

export default class item_yasha extends Item {
	public readonly m_pBaseEntity!: C_DOTA_Item_Yasha
}

import { RegisterClass } from "wrapper/Objects/NativeToSDK"
RegisterClass("item_yasha", item_yasha)