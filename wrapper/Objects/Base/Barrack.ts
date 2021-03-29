import { WrapperClass } from "../../Decorators"
import Building from "./Building"

@WrapperClass("CDOTA_BaseNPC_Barracks")
export default class Barrack extends Building {
	public get RingRadius(): number {
		return 140
	}
}
