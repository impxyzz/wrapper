import { WrapperClass } from "../../Decorators"
import Item from "../Base/Item"

@WrapperClass("item_blink")
export default class item_blink extends Item {
	public GetBaseCastRangeForLevel(level: number): number {
		return this.GetSpecialValue("blink_range", level)
	}
}
