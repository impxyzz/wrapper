import Item from "../Base/Item"

export default class item_river_painter4 extends Item {
	public readonly m_pBaseEntity!: CDOTA_Item_RiverPainter4
}

import { RegisterClass } from "wrapper/Objects/NativeToSDK"
RegisterClass("item_river_painter4", item_river_painter4)