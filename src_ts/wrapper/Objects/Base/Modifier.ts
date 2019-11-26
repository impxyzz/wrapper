import { default as EntityManager, Game } from "../../Managers/EntityManager"
import Ability from "./Ability"
import Entity from "./Entity"
import Unit from "./Unit"

// AllowIllusionDuplicate
// CanParentBeAutoAttacked
// IsDebuff
// IsHidden
// IsPurgeException
// IsStunDebuff
// IsValid
// TextureName

export const TRUESIGHT_MODIFIERS = [
	"modifier_truesight",
	"modifier_item_dustofappearance",
	"modifier_bloodseeker_thirst_vision",
	"modifier_bounty_hunter_track",
]

export const SCEPTER_MODIFIERS = [
	"modifier_item_ultimate_scepter",
	"modifier_item_ultimate_scepter_consumed",
	"modifier_wisp_tether_scepter",
]

export const BLOCKING_DAMAGE_MODIFIERS = [
	"modifier_nyx_assassin_spiked_carapace",
	"modifier_item_combo_breaker_buff",
	"modifier_templar_assassin_refraction_absorb",
]

export const REFLECTING_DAMAGE_MODIFIERS = [
	"modifier_nyx_assassin_spiked_carapace",
	"modifier_item_blade_mail_reflect",
]

const ScepterRegExp = /modifier_item_ultimate_scepter|modifier_wisp_tether_scepter/

export default class Modifier {
	/* ================== Static ================== */

	public static HasTrueSightBuff(buffs: Modifier[]): boolean {
		return buffs.some(buff => TRUESIGHT_MODIFIERS.some(nameBuff => nameBuff === buff.Name))
	}

	public static HasScepterBuff(buffs: Modifier[]): boolean {
		return buffs.some(buff => ScepterRegExp.test(buff.Name))
	}

	/* =================== Fields =================== */
	public readonly Index: number
	public IsValid: boolean = true

	public readonly Name: string
	public readonly Class: string
	public readonly ModifierAura: string

	public readonly Ability: Ability
	public readonly Caster: Entity
	public readonly Parent: Entity
	public readonly Team: number
	public readonly IsPurgable: boolean
	public readonly IsAura: boolean
	public readonly AuraRadius: number
	public readonly AuraSearchFlags: number
	public readonly AuraSearchTeam: number
	public readonly AuraSearchType: number
	public readonly CreationTime: number

	constructor(public readonly m_pBuff: CDOTA_Buff, public readonly Owner: Unit) {
		this.Index = this.m_pBuff.m_iIndex

		this.Name = this.m_pBuff.m_name || ""
		this.Class = this.m_pBuff.m_class || ""
		this.ModifierAura = this.m_pBuff.m_szModifierAura || ""

		this.Ability = EntityManager.GetEntityByNative(this.m_pBuff.m_hAbility) as Ability
		this.Caster = EntityManager.GetEntityByNative(this.m_pBuff.m_hCaster)
		this.Parent = EntityManager.GetEntityByNative(this.m_pBuff.m_hParent)
		this.Team = this.m_pBuff.m_iTeam
		this.IsPurgable = this.m_pBuff.m_bPurgedDestroy
		this.IsAura = this.m_pBuff.m_bIsAura
		this.AuraRadius = this.m_pBuff.m_iAuraRadius
		this.AuraSearchFlags = this.m_pBuff.m_iAuraSearchFlags
		this.AuraSearchTeam = this.m_pBuff.m_iAuraSearchTeam
		this.AuraSearchType = this.m_pBuff.m_iAuraSearchType
		this.CreationTime = this.m_pBuff.m_flCreationTime
	}

	get Attributes(): DOTAModifierAttribute_t {
		return this.m_pBuff.m_iAttributes
	}
	get DieTime(): number {
		return this.m_pBuff.m_flDieTime
	}
	get Duration(): number {
		return this.m_pBuff.m_flDuration
	}
	get ElapsedTime(): number {
		return Math.max(this.CreationTime - Game.RawGameTime, 0)
	}
	get LastAppliedTime(): number {
		return this.m_pBuff.m_flLastAppliedTime
	}

	/*get Particles() {
		return this.m_pBuff.m_iParticles
	}*/

	get RemainingTime(): number {
		return Math.max(this.DieTime - Game.RawGameTime, 0)
	}
	get StackCount(): number {
		return this.m_pBuff.m_iStackCount
	}

	public toString(): string {
		return this.Name
	}
}
