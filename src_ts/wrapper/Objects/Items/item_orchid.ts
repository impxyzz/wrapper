import Item from "../Base/Item"

export default class item_orchid extends Item {
}

import { RegisterClass } from "wrapper/Objects/NativeToSDK"
RegisterClass("item_orchid", item_orchid)
