import Item from "../Base/Item"

export default class item_satanic extends Item {
}

import { RegisterClass } from "wrapper/Objects/NativeToSDK"
RegisterClass("item_satanic", item_satanic)
