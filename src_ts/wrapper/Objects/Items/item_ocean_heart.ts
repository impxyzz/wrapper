import Item from "../Base/Item"

export default class item_ocean_heart extends Item {
	public readonly m_pBaseEntity!: CDOTA_Item_Ocean_Heart
}

import { RegisterClass } from "wrapper/Objects/NativeToSDK"
RegisterClass("item_ocean_heart", item_ocean_heart)