import Item from "../Base/Item"

export default class item_horizon extends Item {
	public readonly m_pBaseEntity!: C_DOTA_Item_Horizon
}

import { RegisterClass } from "wrapper/Objects/NativeToSDK"
RegisterClass("item_horizon", item_horizon)