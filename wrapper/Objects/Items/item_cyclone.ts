import { WrapperClass } from "../../Decorators"
import { Item } from "../Base/Item"

@WrapperClass("item_cyclone")
export class item_cyclone extends Item {
	public get MaxDuration() {
		return this.GetSpecialValue("cyclone_duration")
	}
}
