import Item from "../Base/Item"

export default class item_broom_handle extends Item {
}

import { RegisterClass } from "wrapper/Objects/NativeToSDK"
RegisterClass("item_broom_handle", item_broom_handle)
