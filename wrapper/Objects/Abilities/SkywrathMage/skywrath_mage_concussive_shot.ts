import Ability from "../../Base/Ability"
import { WrapperClass } from "../../../Decorators"

@WrapperClass("skywrath_mage_concussive_shot")
export default class skywrath_mage_concussive_shot extends Ability {
	public get AOERadius(): number {
		const talent = this.Owner?.GetAbilityByName("special_bonus_unique_skywrath_4")
		if (talent !== undefined && talent.Level !== 0)
			return Number.MAX_SAFE_INTEGER
		return this.GetSpecialValue("launch_radius")
	}
	public get CastRange(): number {
		const talent = this.Owner?.GetAbilityByName("special_bonus_unique_skywrath_4")
		if (talent !== undefined && talent.Level !== 0)
			return Number.MAX_SAFE_INTEGER
		return super.CastRange
	}
	public get Speed(): number {
		return this.GetSpecialValue("speed")
	}
	public get ProjectileName() {
		return ["particles/units/heroes/hero_skywrath_mage/skywrath_mage_concussive_shot.vpcf"]
	}
}
