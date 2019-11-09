import { Game, GameSleeper, Unit, Utils } from "wrapper/Imports";
import { Base } from "../Extends/Helper";
import { MouseTarget, Owner, initAbilityMap } from "../Listeners";
import { BladeMailItem, HarassKey, HarassMode, State } from "../Menu";

let Sleep = new GameSleeper()
function HitAndRun(unit: Unit, mode: boolean = false) {
	Owner.MoveTo(!mode ? Utils.CursorWorldVec : unit.NetworkPosition)
}
export function InitHarass() {
	if (!Base.IsRestrictions(State) || !HarassKey.is_pressed || HarassMode.selected_id === 0)
		return

	let target = MouseTarget
	if (target === undefined || (BladeMailItem.value && (BladeMailItem.value && target.HasModifier("modifier_item_blade_mail_reflect"))) || !Base.Cancel(target)) {
		Owner.MoveTo(Utils.CursorWorldVec)
		return
	}
	let Abilities = initAbilityMap.get(Owner)
	if (Abilities === undefined)
		return

	let Delay = (Owner.SecondsPerAttack * 1000) + (Game.Ping / 2)
	if (HarassMode.selected_id !== 0 && Sleep.Sleeping("Attack")) {
		switch (HarassMode.selected_id) {
			case 1: HitAndRun(target); break;
			case 2: HitAndRun(target, true); break;
		}
		return
	}
	if (
		Abilities.SearingArrows !== undefined
		&& !Sleep.Sleeping("AttackArrow")
		&& Owner.AttackRange <= Abilities.SearingArrows.CastRange
		&& Abilities.SearingArrows.CanBeCasted()
	) {
		Owner.CastTarget(Abilities.SearingArrows, target)
		Sleep.Sleep(Delay, "AttackArrow")
		return
	} else if (!Sleep.Sleeping("Attack")) {
		Owner.AttackTarget(target)
		Sleep.Sleep(Delay, "Attack")
		return
	}
}

export function HarassGameEdned() {
	Sleep.FullReset()
}