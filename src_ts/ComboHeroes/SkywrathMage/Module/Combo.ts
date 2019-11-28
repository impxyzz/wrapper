import { GameSleeper, TickSleeper, Utils } from "wrapper/Imports"
import { Base } from "../Extends/Helper"
import { MouseTarget, MyHero, ProjList, initItemsMap, initAbilityMap, initItemsTargetMap } from "../Listeners"
import { AbilityMenu, AutoAttackTarget, BladeMailCancelCombo, BlinkRadius, ComboKey, ConcussiveShotAwait, Items, MinHealthToUltItem, State, StyleCombo } from "../Menu"
import { BreakInit } from "./LinkenBreaker"
let Sleep = new TickSleeper(),
	GameSleep = new GameSleeper()
export let ComboActived = false
ComboKey.OnRelease(() => ComboActived = !ComboActived);
// const orig = Ability.prototype.UseAbility;
// Ability.prototype.UseAbility = function (...args) {
// 	if (args[0] instanceof Entity) {
// 		console.log(args[0].Name, this.Name);
// 		console.log(new Error().stack)
// 	}
// 	orig.call(this, ...args);
// };
export function InitCombo() {
	if (!Base.IsRestrictions(State) || Sleep.Sleeping)
		return
	if ((StyleCombo.selected_id === 1 && !ComboActived) || (StyleCombo.selected_id === 0 && !ComboKey.is_pressed)) {
		return
	}
	let target = MouseTarget
	if (target === undefined) {
		MyHero.MoveTo(Utils.CursorWorldVec)
		Sleep.Sleep(350)
		return
	}
	if (BladeMailCancelCombo.value && target.HasBuffByName("modifier_item_blade_mail_reflect"))
		return
	let ItemsInit = initItemsMap.get(MyHero),
		Abilities = initAbilityMap.get(MyHero),
		ItemsTarget = initItemsTargetMap.get(target)
	if (Items === undefined || Abilities === undefined || ItemsTarget === undefined)
		return

	let ClumsyDelay = ProjList.find(x => x.ParticlePath === "particles/items5_fx/clumsy_net_proj.vpcf"),
		RodofAtosDelay = ProjList.find(x => x.ParticlePath === "particles/items2_fx/rod_of_atos_attack.vpcf"),
		EtherealDelay = ProjList.find(x => x.ParticlePath === "particles/items_fx/ethereal_blade.vpcf"),
		ConcussiveShotDelay = ProjList.find(x => x.ParticlePath === "particles/units/heroes/hero_skywrath_mage/skywrath_mage_concussive_shot.vpcf")

	// if (RodofAtosDelay !== undefined)
	// 	console.log(target.Distance2D(RodofAtosDelay.Position))

	if (ItemsInit.Blink !== undefined
		&& Items.IsEnabled(ItemsInit.Blink.Name)
		&& Base.CancelAbilityRealm(target)
		&& !target.IsInRange(MyHero, 600)
		&& ItemsInit.Blink.CanBeCasted()) {
		// blink c+v :roflanpominki:
		let castRange = ItemsInit.Blink.GetSpecialValue("blink_range") + MyHero.CastRangeBonus
		ItemsInit.Blink.UseAbility(MyHero.Position.Extend(target.Position, Math.min(castRange, MyHero.Distance(target) - BlinkRadius.value) - 1))
		Sleep.Sleep(ItemsInit.Tick)
		return
	}

	if (Base.Cancel(target) && Base.StartCombo(target)) {

		if (Base.IsLinkensProtected(target)) {
			BreakInit()
			return
		}

		var comboBreaker = Base.AeonDisc(target),
			//stunDebuff = target.Modifiers.FirstOrDefault(x => x.IsStunDebuff),
			hexDebuff = target.GetBuffByName("modifier_sheepstick_debuff")

		// Hex
		if (ItemsInit.Sheeps !== undefined
			&& !Base.CancelAbilityRealm(target)
			&& Items.IsEnabled(ItemsInit.Sheeps.Name)
			&& ItemsInit.Sheeps.CanBeCasted()
			&& MyHero.Distance2D(target) <= ItemsInit.Sheeps.CastRange
			&& !comboBreaker
			&& !target.IsStunned
			&& (hexDebuff === undefined || !hexDebuff.IsValid || hexDebuff.RemainingTime <= 0.3)
		) {
			ItemsInit.Sheeps.UseAbility(target)
			Sleep.Sleep(ItemsInit.Tick)
			return
		}

		// Orchid
		if (ItemsInit.Orchid !== undefined
			&& !Base.CancelAbilityRealm(target)
			&& Items.IsEnabled(ItemsInit.Orchid.Name)
			&& ItemsInit.Orchid.CanBeCasted()
			&& MyHero.Distance2D(target) <= ItemsInit.Orchid.CastRange
			&& !comboBreaker
		) {
			ItemsInit.Orchid.UseAbility(target)
			Sleep.Sleep(ItemsInit.Tick)
			return
		}

		// Bloodthorn
		if (ItemsInit.Bloodthorn !== undefined
			&& !Base.CancelAbilityRealm(target)
			&& Items.IsEnabled(ItemsInit.Bloodthorn.Name)
			&& ItemsInit.Bloodthorn.CanBeCasted()
			&& MyHero.Distance2D(target) <= ItemsInit.Bloodthorn.CastRange
			&& !comboBreaker
		) {
			ItemsInit.Bloodthorn.UseAbility(target)
			Sleep.Sleep(ItemsInit.Tick)
			return
		}

		// AncientSeal
		if (Abilities.AncientSeal !== undefined
			&& !Base.CancelAbilityRealm(target)
			&& AbilityMenu.IsEnabled(Abilities.AncientSeal.Name)
			&& Abilities.AncientSeal.CanBeCasted()
			&& MyHero.Distance2D(target) <= Abilities.AncientSeal.CastRange
			&& !comboBreaker
		) {
			Abilities.AncientSeal.UseAbility(target)
			Sleep.Sleep(Abilities.Tick)
			return
		}

		// RodofAtos
		let atosDebuff = target.Buffs.some(x => x.IsValid && x.Name === "modifier_rod_of_atos_debuff" && x.RemainingTime > 0.5)
		if (ItemsInit.RodofAtos !== undefined
			&& !Base.CancelAbilityRealm(target)
			&& Items.IsEnabled(ItemsInit.RodofAtos.Name)
			&& ItemsInit.RodofAtos.CanBeCasted()
			&& MyHero.Distance2D(target) <= ItemsInit.RodofAtos.CastRange
			&& !atosDebuff
		) {
			ItemsInit.RodofAtos.UseAbility(target)
			Sleep.Sleep(ItemsInit.Tick)
			return
		}
		// Clumsy net
		let ClumsyDebuff = target.Buffs.some(x => x.IsValid && x.Name === "modifier_clumsy_net_ensnare" && x.RemainingTime > 0.5)
		if (ItemsInit.ClumsyNet !== undefined
			&& !Base.CancelAbilityRealm(target)
			&& Items.IsEnabled(ItemsInit.ClumsyNet.Name)
			&& ItemsInit.ClumsyNet.CanBeCasted()
			&& MyHero.Distance2D(target) <= ItemsInit.ClumsyNet.CastRange
			&& !ClumsyDebuff
		) {
			ItemsInit.ClumsyNet.UseAbility(target)
			Sleep.Sleep(ItemsInit.Tick)
			return
		}

		// MysticFlare
		if (Abilities.MysticFlare !== undefined
			&& AbilityMenu.IsEnabled(Abilities.MysticFlare.Name)
			&& MinHealthToUltItem.value <= target.HPPercent
			&& Abilities.MysticFlare.CanBeCasted()
			&& MyHero.Distance2D(target) <= (Abilities.MysticFlare.CastRange - 100)
			&& !comboBreaker
			&& (Base.BadUlt(target) || Base.Active(target))
		) {
			if (ItemsInit.RodofAtos === undefined
				&& ConcussiveShotAwait.value
				&& Abilities.ConcussiveShot !== undefined
				&&
				(
					ConcussiveShotDelay !== undefined && target.Distance2D(ConcussiveShotDelay.Position) <= 100
					|| EtherealDelay !== undefined && target.Distance2D(EtherealDelay.Position) <= 100
					|| target.Buffs.some(x => x.Name === "modifier_skywrath_mage_concussive_shot_slow")
				)
				|| target.IsEthereal
			) {
				Abilities.UseMysticFlare(target)
				Sleep.Sleep(Abilities.Tick)
				return
			} else if (ItemsInit.RodofAtos === undefined && !ConcussiveShotAwait.value) {
				Abilities.UseMysticFlare(target)
				Sleep.Sleep(Abilities.Tick)
				return
			} else if (ItemsInit.RodofAtos === undefined && ClumsyDelay !== undefined && target.Distance2D(ClumsyDelay.Position) <= 100) {
				Abilities.UseMysticFlare(target)
				Sleep.Sleep(Abilities.Tick)
				return
			} else if (ItemsInit.RodofAtos !== undefined && RodofAtosDelay !== undefined && target.Distance2D(RodofAtosDelay.Position) <= 100) {
				Abilities.UseMysticFlare(target)
				Sleep.Sleep(Abilities.Tick)
				return
			} else if (ItemsInit.RodofAtos !== undefined && (ItemsInit.RodofAtos.Cooldown - 1) && RodofAtosDelay === undefined
			) {
				Abilities.UseMysticFlare(target)
				Sleep.Sleep(Abilities.Tick)
				return
			}
		}

		// Nullifier
		if (ItemsInit.Nullifier !== undefined
			&& !Base.CancelAbilityRealm(target)
			&& Items.IsEnabled(ItemsInit.Nullifier.Name)
			&& ItemsInit.Nullifier.CanBeCasted()
			&& MyHero.Distance2D(target) <= ItemsInit.Nullifier.CastRange
			&& !comboBreaker
		) {
			if (ItemsTarget.AeonDisk === undefined) {
				ItemsInit.Nullifier.UseAbility(target)
				Sleep.Sleep(ItemsInit.Tick)
				return
			} else if (ItemsTarget.AeonDisk !== undefined && target.HPPercent <= 70) {
				ItemsInit.Nullifier.UseAbility(target)
				Sleep.Sleep(ItemsInit.Tick)
				return
			} else if (ItemsTarget.AeonDisk !== undefined && !ItemsTarget.AeonDisk.CanBeCasted()) {
				ItemsInit.Nullifier.UseAbility(target)
				Sleep.Sleep(ItemsInit.Tick)
				return
			}
		}

		// Veil
		if (ItemsInit.Discord !== undefined
			&& !Base.CancelAbilityRealm(target)
			&& Items.IsEnabled(ItemsInit.Discord.Name)
			&& ItemsInit.Discord.CanBeCasted()
			&& MyHero.Distance2D(target) <= ItemsInit.Discord.CastRange
		) {
			ItemsInit.Discord.UseAbility(target.Position)
			Sleep.Sleep(ItemsInit.Tick)
			return
		}

		// Ethereal
		if (ItemsInit.Ethereal !== undefined
			&& !Base.CancelAbilityRealm(target)
			&& Items.IsEnabled(ItemsInit.Ethereal.Name)
			&& ItemsInit.Ethereal.CanBeCasted()
			&& MyHero.Distance2D(target) <= ItemsInit.Ethereal.CastRange
			&& !comboBreaker
		) {
			ItemsInit.Ethereal.UseAbility(target)
			Sleep.Sleep(ItemsInit.Tick)
			return
		}

		// Shivas
		if (ItemsInit.Shivas !== undefined
			&& Items.IsEnabled(ItemsInit.Shivas.Name)
			&& ItemsInit.Shivas.CanBeCasted()
			&& MyHero.Distance2D(target) <= ItemsInit.Shivas.CastRange
		) {
			ItemsInit.Shivas.UseAbility()
			Sleep.Sleep(ItemsInit.Tick)
			return
		}
		// ConcussiveShot
		if (Abilities.ConcussiveShot !== undefined
			&& AbilityMenu.IsEnabled(Abilities.ConcussiveShot.Name)
			//&& Base.ConcussiveShotTarget(target, Abilities.ConcussiveShot.TargetHit)
			&& Abilities.ConcussiveShot.CanBeCasted()
			&& MyHero.Distance2D(target) <= Abilities.ConcussiveShot.CastRange
		) {
			Abilities.ConcussiveShot.UseAbility(target)
			Sleep.Sleep(Abilities.CastDelay(Abilities.ConcussiveShot))
			return
		}
		// ArcaneBolt
		if (Abilities.ArcaneBolt !== undefined
			&& !Base.CancelAbilityRealm(target)
			&& AbilityMenu.IsEnabled(Abilities.ArcaneBolt.Name)
			&& Abilities.ArcaneBolt.CanBeCasted()
			&& MyHero.Distance2D(target) <= Abilities.ArcaneBolt.CastRange
		) {
			Abilities.ArcaneBolt.UseAbility(target)
			Sleep.Sleep(Abilities.CastDelay(Abilities.ArcaneBolt))
			return
		}

		// Dagon
		if (ItemsInit.Dagon !== undefined
			&& !Base.CancelAbilityRealm(target)
			&& Items.IsEnabled("item_dagon_5")
			&& ItemsInit.Dagon.CanBeCasted()
			&& MyHero.Distance2D(target) <= ItemsInit.Dagon.CastRange
			&& !comboBreaker
		) {
			ItemsInit.Dagon.UseAbility(target)
			Sleep.Sleep(ItemsInit.Tick)
			return
		}

		// UrnOfShadows
		if (ItemsInit.UrnOfShadows !== undefined
			&& !Base.CancelAbilityRealm(target)
			&& Items.IsEnabled(ItemsInit.UrnOfShadows.Name)
			&& ItemsInit.UrnOfShadows.CanBeCasted()
			&& MyHero.Distance2D(target) <= ItemsInit.UrnOfShadows.CastRange
			&& !comboBreaker
		) {
			ItemsInit.UrnOfShadows.UseAbility(target)
			Sleep.Sleep(ItemsInit.Tick)
			return
		}

		// SpiritVessel
		if (ItemsInit.SpiritVesel !== undefined
			&& !Base.CancelAbilityRealm(target)
			&& Items.IsEnabled(ItemsInit.SpiritVesel.Name)
			&& ItemsInit.SpiritVesel.CanBeCasted()
			&& MyHero.Distance2D(target) <= ItemsInit.SpiritVesel.CastRange
			&& !comboBreaker
		) {
			ItemsInit.SpiritVesel.UseAbility(target)
			Sleep.Sleep(ItemsInit.Tick)
			return
		}
		if (AutoAttackTarget.value && MyHero.CanAttack(target)
			&& !GameSleep.Sleeping("Attack")) {
			MyHero.AttackTarget(target)
			GameSleep.Sleep(MyHero.SecondsPerAttack * 1000, "Attack")
			return
		}
	}
}
export function ComboDeleteVarsTemp() {
	Sleep.ResetTimer()
	GameSleep.FullReset()
}