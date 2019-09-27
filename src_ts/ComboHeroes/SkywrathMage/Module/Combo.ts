import { GameSleeper, Utils } from "wrapper/Imports"
import { Base } from "../Extends/Helper"
import { MouseTarget, MyHero } from "../Listeners"
import { Ability, AutoAttackTarget, BladeMailCancelCombo, BlinkRadius, ComboKey, Items, MinHealthToUltItem, State } from "../Menu"
import { BreakInit } from "./LinkenBreaker"

import InitAbility from "../Extends/Abilities"
import InitItems from "../Extends/Items"

let Sleep = new GameSleeper()

export function InitCombo() {
	if (!Base.IsRestrictions(State) || !ComboKey.is_pressed)
		return false
	let target = MouseTarget
	if (target === undefined || (BladeMailCancelCombo.value && target.HasModifier("modifier_item_blade_mail_reflect"))) {
		MyHero.MoveTo(Utils.CursorWorldVec)
		return false
	}
	let ItemsInit = new InitItems(MyHero),
		Abilities = new InitAbility(MyHero),
		ItemsTarget = new InitItems(target)

	if (ItemsInit.RodofAtosDelay) {
		Sleep.Sleep(ItemsInit.RodofAtosDelay as number, "RodofAtosDelay")
	}
	if (ItemsInit.EtherealDelay) {
		Sleep.Sleep(ItemsInit.EtherealDelay as number, "EtherealDelay")
	}

	if (ItemsInit.Blink !== undefined
		&& Items.IsEnabled(ItemsInit.Blink.Name)
		&& Base.CancelAbilityRealm(target)
		&& !target.IsInRange(MyHero, 600)
		&& !Sleep.Sleeping(`${target.Index + ItemsInit.Blink.Index}`)
		&& ItemsInit.Blink.CanBeCasted()) {
		// blink c+v :roflanpominki:
		let castRange = ItemsInit.Blink.GetSpecialValue("blink_range") + MyHero.CastRangeBonus
		let distance = target.NetworkPosition.Subtract(MyHero.NetworkPosition)
		let disToTarget = MyHero.Distance(target)

		distance.SetZ(0)
		distance.Normalize()

		if (disToTarget > castRange) {
			let di = disToTarget - castRange, minus = 0
			if (di < BlinkRadius.value) {
				minus = BlinkRadius.value - di
			}
			distance.ScaleTo(castRange - 1 - minus)
		} else {
			distance.ScaleTo(disToTarget - BlinkRadius.value - 1)
		}
		ItemsInit.Blink.UseAbility(MyHero.NetworkPosition.Add(distance))
		Sleep.Sleep(ItemsInit.Tick, `${target.Index + ItemsInit.Blink.Index}`)
		return true
	}

	if (Base.Cancel(target) && Base.StartCombo(target)) {

		if (Base.IsLinkensProtected(target)) {
			BreakInit()
			return false
		}

		var comboBreaker = Base.AeonDisc(target),
			//stunDebuff = target.Modifiers.FirstOrDefault(x => x.IsStunDebuff),
			hexDebuff = target.GetBuffByName("modifier_sheepstick_debuff")

		// Hex
		if (ItemsInit.Sheeps !== undefined
			&& !Base.CancelAbilityRealm(target)
			&& Items.IsEnabled(ItemsInit.Sheeps.Name)
			&& !Sleep.Sleeping(`${target.Index + ItemsInit.Sheeps.Index}`)
			&& ItemsInit.Sheeps.CanBeCasted()
			&& MyHero.Distance2D(target) <= ItemsInit.Sheeps.CastRange
			&& !comboBreaker
			&& !target.IsStunned
			&& (hexDebuff === undefined || !hexDebuff.IsValid || hexDebuff.RemainingTime <= 0.3))
		{
			ItemsInit.Sheeps.UseAbility(target)
			Sleep.Sleep(ItemsInit.Tick, `${target.Index + ItemsInit.Sheeps.Index}`)
			return true
		}

		// Orchid
		if (ItemsInit.Orchid !== undefined
			&& !Base.CancelAbilityRealm(target)
			&& Items.IsEnabled(ItemsInit.Orchid.Name)
			&& !Sleep.Sleeping(`${target.Index + ItemsInit.Orchid.Index}`)
			&& ItemsInit.Orchid.CanBeCasted()
			&& MyHero.Distance2D(target) <= ItemsInit.Orchid.CastRange
			&& !comboBreaker)
		{
			ItemsInit.Orchid.UseAbility(target)
			Sleep.Sleep(ItemsInit.Tick, `${target.Index + ItemsInit.Orchid.Index}`)
			return true
		}

		// Bloodthorn
		if (ItemsInit.Bloodthorn !== undefined
			&& !Base.CancelAbilityRealm(target)
			&& Items.IsEnabled(ItemsInit.Bloodthorn.Name)
			&& !Sleep.Sleeping(`${target.Index + ItemsInit.Bloodthorn.Index}`)
			&& ItemsInit.Bloodthorn.CanBeCasted()
			&& MyHero.Distance2D(target) <= ItemsInit.Bloodthorn.CastRange
			&& !comboBreaker)
		{
			ItemsInit.Bloodthorn.UseAbility(target)
			Sleep.Sleep(ItemsInit.Tick, `${target.Index + ItemsInit.Bloodthorn.Index}`)
			return true
		}

		// AncientSeal
		if (Abilities.AncientSeal !== undefined
			&& !Base.CancelAbilityRealm(target)
			&& !Abilities.AncientSeal.IsInAbilityPhase
			&& !Sleep.Sleeping(`${target.Index + Abilities.AncientSeal.Index}`)
			&& Ability.IsEnabled(Abilities.AncientSeal.Name)
			&& Abilities.AncientSeal.CanBeCasted()
			&& MyHero.Distance2D(target) <= Abilities.AncientSeal.CastRange
			&& !comboBreaker) {
			Abilities.AncientSeal.UseAbility(target)
			Sleep.Sleep(Abilities.CastDelay(Abilities.AncientSeal), `${target.Index + Abilities.AncientSeal.Index}`)
			return true
		}

		// RodofAtos
		let atosDebuff = target.Buffs.some(x => x.IsValid && x.Name === "modifier_rod_of_atos_debuff" && x.RemainingTime > 0.5)
		if (ItemsInit.RodofAtos !== undefined
			&& !Base.CancelAbilityRealm(target)
			&& Items.IsEnabled(ItemsInit.RodofAtos.Name)
			&& !Sleep.Sleeping(`${target.Index + ItemsInit.RodofAtos.Index}`)
			&& ItemsInit.RodofAtos.CanBeCasted()
			&& MyHero.Distance2D(target) <= ItemsInit.RodofAtos.CastRange
			&& !atosDebuff) {
			ItemsInit.RodofAtos.UseAbility(target)
			Sleep.Sleep(ItemsInit.Tick, `${target.Index + ItemsInit.RodofAtos.Index}`)
			return true
		}

		// MysticFlare
		if (Abilities.MysticFlare !== undefined
			&& !Abilities.MysticFlare.IsInAbilityPhase
			&& !Sleep.Sleeping(`${target.Index + Abilities.MysticFlare.Index}`)
			&& Ability.IsEnabled(Abilities.MysticFlare.Name)
			&& MinHealthToUltItem.value <= target.HPPercent
			&& Abilities.MysticFlare.CanBeCasted()
			&& MyHero.Distance2D(target) <= Abilities.MysticFlare.CastRange
			&& !comboBreaker
			&& (Base.BadUlt(target) || Base.Active(target)))
		{

			if (ItemsInit.RodofAtos === undefined) {
				Abilities.UseMysticFlare(target)
				Sleep.Sleep(Abilities.CastDelay(Abilities.MysticFlare), `${target.Index + Abilities.MysticFlare.Index}`)
				return true
			} else if (ItemsInit.RodofAtos !== undefined && Sleep.Sleeping("RodofAtosDelay")) {
				Abilities.UseMysticFlare(target)
				Sleep.Sleep(Abilities.CastDelay(Abilities.MysticFlare), `${target.Index + Abilities.MysticFlare.Index}`)
				return true
			} else if (ItemsInit.RodofAtos.Cooldown <= (ItemsInit.RodofAtos.CooldownLength - 1) && !ItemsInit.RodofAtosDelay) {
				Abilities.UseMysticFlare(target)
				Sleep.Sleep(Abilities.CastDelay(Abilities.MysticFlare), `${target.Index + Abilities.MysticFlare.Index}`)
				return true
			}
		}

		// Nullifier
		if (ItemsInit.Nullifier !== undefined
			&& !Base.CancelAbilityRealm(target)
			&& Items.IsEnabled(ItemsInit.Nullifier.Name)
			&& !Sleep.Sleeping(`${target.Index + ItemsInit.Nullifier.Index}`)
			&& ItemsInit.Nullifier.CanBeCasted()
			&& MyHero.Distance2D(target) <= ItemsInit.Nullifier.CastRange
			&& !comboBreaker)
		{
			if (ItemsTarget.AeonDisk === undefined) {
				ItemsInit.Nullifier.UseAbility(target)
				Sleep.Sleep(ItemsInit.Tick, `${target.Index + ItemsInit.Nullifier.Index}`)
				return true
			} else if (ItemsTarget.AeonDisk !== undefined && target.HPPercent <= 70) {
				ItemsInit.Nullifier.UseAbility(target)
				Sleep.Sleep(ItemsInit.Tick, `${target.Index + ItemsInit.Nullifier.Index}`)
				return true
			} else if (ItemsTarget.AeonDisk !== undefined && !ItemsTarget.AeonDisk.CanBeCasted()) {
				Abilities.UseMysticFlare(target)
				Sleep.Sleep(ItemsInit.Tick, `${target.Index + ItemsInit.Nullifier.Index}`)
				return true
			}
		}

		// Veil
		if (ItemsInit.Discord !== undefined
			&& !Base.CancelAbilityRealm(target)
			&& Items.IsEnabled(ItemsInit.Discord.Name)
			&& !Sleep.Sleeping(`${target.Index + ItemsInit.Discord.Index}`)
			&& ItemsInit.Discord.CanBeCasted()
			&& MyHero.Distance2D(target) <= ItemsInit.Discord.CastRange) {
			ItemsInit.Discord.UseAbility(target.Position)
			Sleep.Sleep(ItemsInit.Tick, `${target.Index + ItemsInit.Discord.Index}`)
			return true
		}

		// Ethereal
		if (ItemsInit.Ethereal !== undefined
			&& !Base.CancelAbilityRealm(target)
			&& Items.IsEnabled(ItemsInit.Ethereal.Name)
			&& !Sleep.Sleeping("ethereal")
			&& ItemsInit.Ethereal.CanBeCasted()
			&& MyHero.Distance2D(target) <= ItemsInit.Ethereal.CastRange
			&& !comboBreaker)
		{
			ItemsInit.Ethereal.UseAbility(target)
			Sleep.Sleep(ItemsInit.Tick, "ethereal")
			return true
		}

		// Shivas
		if (ItemsInit.Shivas !== undefined
			&& Items.IsEnabled(ItemsInit.Shivas.Name)
			&& !Sleep.Sleeping(`${target.Index + ItemsInit.Shivas.Index}`)
			&& ItemsInit.Shivas.CanBeCasted()
			&& MyHero.Distance2D(target) <= ItemsInit.Shivas.CastRange) {
			ItemsInit.Shivas.UseAbility()
			Sleep.Sleep(ItemsInit.Tick, `${target.Index + ItemsInit.Shivas.Index}`)
			return true
		}

		if ((ItemsInit.EtherealDelay || ItemsInit.Ethereal === undefined) || target.IsEthereal) {
			// ConcussiveShot
			if (Abilities.ConcussiveShot !== undefined
				&& !Abilities.ConcussiveShot.IsInAbilityPhase
				&& !Sleep.Sleeping(`${target.Index + Abilities.ConcussiveShot.Index}`)
				&& Ability.IsEnabled(Abilities.ConcussiveShot.Name)
				//&& Base.ConcussiveShotTarget(target, Abilities.ConcussiveShot.TargetHit)
				&& Abilities.ConcussiveShot.CanBeCasted()
				&& MyHero.Distance2D(target) <= Abilities.ConcussiveShot.CastRange) {
				Abilities.ConcussiveShot.UseAbility(target)
				Sleep.Sleep(Abilities.CastDelay(Abilities.ConcussiveShot), `${target.Index + Abilities.ConcussiveShot.Index}`)
				return true
			}
			// ArcaneBolt
			if (Abilities.ArcaneBolt !== undefined
				&& !Base.CancelAbilityRealm(target)
				&& !Abilities.ArcaneBolt.IsInAbilityPhase
				&& !Sleep.Sleeping(`${target.Index + Abilities.ArcaneBolt.Index}`)
				&& Ability.IsEnabled(Abilities.ArcaneBolt.Name)
				&& Abilities.ArcaneBolt.CanBeCasted()
				&& MyHero.Distance2D(target) <= Abilities.ArcaneBolt.CastRange)
			{
				Abilities.ArcaneBolt.UseAbility(target)
				Sleep.Sleep(Abilities.CastDelay(Abilities.ArcaneBolt), `${target.Index + Abilities.ArcaneBolt.Index}`)
				return true
			}

			// Dagon
			if (ItemsInit.Dagon !== undefined
				&& !Base.CancelAbilityRealm(target)
				&& Items.IsEnabled(ItemsInit.Dagon.Name)
				&& !Sleep.Sleeping(`${target.Index + ItemsInit.Dagon.Index}`)
				&& ItemsInit.Dagon.CanBeCasted()
				&& MyHero.Distance2D(target) <= ItemsInit.Dagon.CastRange
				&& !comboBreaker)
			{
				ItemsInit.Dagon.UseAbility(target)
				Sleep.Sleep(ItemsInit.Tick, `${target.Index + ItemsInit.Dagon.Index}`)
				return true
			}
		}

		// UrnOfShadows
		if (ItemsInit.UrnOfShadows !== undefined
			&& !Base.CancelAbilityRealm(target)
			&& Items.IsEnabled(ItemsInit.UrnOfShadows.Name)
			&& !Sleep.Sleeping(`${target.Index + ItemsInit.UrnOfShadows.Index}`)
			&& ItemsInit.UrnOfShadows.CanBeCasted()
			&& MyHero.Distance2D(target) <= ItemsInit.UrnOfShadows.CastRange
			&& !comboBreaker)
		{
			ItemsInit.UrnOfShadows.UseAbility(target)
			Sleep.Sleep(ItemsInit.Tick, `${target.Index + ItemsInit.UrnOfShadows.Index}`)
			return true
		}

		// SpiritVessel
		if (ItemsInit.SpiritVesel !== undefined
			&& !Base.CancelAbilityRealm(target)
			&& Items.IsEnabled(ItemsInit.SpiritVesel.Name)
			&& !Sleep.Sleeping(`${target.Index + ItemsInit.SpiritVesel.Index}`)
			&& ItemsInit.SpiritVesel.CanBeCasted()
			&& MyHero.Distance2D(target) <= ItemsInit.SpiritVesel.CastRange
			&& !comboBreaker)
		{
			ItemsInit.SpiritVesel.UseAbility(target)
			Sleep.Sleep(ItemsInit.Tick, `${target.Index + ItemsInit.SpiritVesel.Index}`)
			return true
		}
		if (AutoAttackTarget.value && MyHero.CanAttack(target)
			&& !Sleep.Sleeping("Attack")
			&& !Base.CancelAbilityRealm(target)) {
			MyHero.AttackTarget(target)
			Sleep.Sleep(MyHero.AttacksPerSecond * 1000, "Attack")
			return true
		}
	}
	return false
}