import { Base } from "../Extends/Helper"
import { Owner, Creeps, initAbilityMap, initItemsMap } from "../Listeners";
import { ArrayExtensions, TickSleeper } from "wrapper/Imports";
import { State, AutoDeathPactState, AutoDeathPactAbility, AutoDeathPactCreepHP } from "../Menu";
let Sleep = new TickSleeper
export function InitAutoDeathPact() {
	if (!Base.IsRestrictions(State) || Owner.IsInvulnerable || Owner.InvisibleLevel > 0 || !AutoDeathPactState.value || Sleep.Sleeping)
		return
	let Abilities = initAbilityMap.get(Owner),
		Items = initItemsMap.get(Owner)
	if (Abilities === undefined || Items === undefined || Abilities.DeathPact === undefined
		|| !AutoDeathPactAbility.IsEnabled(Abilities.DeathPact.Name)
		|| !Abilities.DeathPact.CanBeCasted())
		return
	let Creep = ArrayExtensions.orderBy(Creeps.filter(x =>
		x.IsValid
		&& x.IsSpawned
		&& x.IsAlive
		&& !x.IsAncient
		&& !x.IsMagicImmune
		&& x.Distance(Owner) <= Abilities.DeathPact.CastRange
		&& x.IsVisible), x => x.HPPercent <= AutoDeathPactCreepHP.value).sort((a, b) => b.MaxHP - a.MaxHP)[0]
	if (Creep === undefined)
		return
	if (Items.Soulring !== undefined
		&& AutoDeathPactAbility.IsEnabled(Items.Soulring.Name)
		&& Items.Soulring.CanBeCasted()
	) {
		Items.Soulring.UseAbility(Owner)
		Sleep.Sleep(Creeps.length * 1.1)
		return
	}
	Abilities.DeathPact.UseAbility(Creep)
	Sleep.Sleep(Creeps.length * 1.2)
	return
}