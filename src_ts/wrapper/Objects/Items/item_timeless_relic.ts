import Item from "../Base/Item"

export default class item_timeless_relic extends Item {
	public readonly m_pBaseEntity!: C_DOTA_Item_Timeless_Relic
}

import { RegisterClass } from "wrapper/Objects/NativeToSDK"
RegisterClass("item_timeless_relic", item_timeless_relic)