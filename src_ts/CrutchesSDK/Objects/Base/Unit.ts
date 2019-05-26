import Color from "../../Base/Color";
import Vector3 from "../../Base/Vector3";
import { MaskToArrayBigInt, HasBit } from "../../Utils/Utils"

import EntityManager from "../../Managers/EntityManager";

import Entity from "./Entity"
import Player from "./Player";

import Ability from "./Ability";
import Item from "./Item";
import Inventory from "../DataBook/Inventory";
import AbilitiesBook from "../DataBook/AbilitiesBook";

import ModifiersBook from "../DataBook/ModifiersBook";
import Modifier from "./Modifier";

import PhysicalItem from "./PhysicalItem";
import Tree from "./Tree";
import Rune from "./Rune";


const TrueSightBuffs = [
	"modifier_truesight",
	"modifier_item_dustofappearance",
	"modifier_bloodseeker_thirst_vision",
	"modifier_bounty_hunter_track",
]

const ScepterBuffs = [
	"modifier_item_ultimate_scepter",
	"modifier_item_ultimate_scepter_consumed",
	"modifier_wisp_tether_scepter",
]

const ScepterRegExp = /modifier_item_ultimate_scepter|modifier_wisp_tether_scepter/

export default class Unit extends Entity {

	m_pBaseEntity: C_DOTA_BaseNPC
	private m_Inventory: Inventory
	private m_AbilitiesBook: AbilitiesBook
	private m_ModifiersBook: ModifiersBook
	
	/* ============ BASE  ============ */
	
	get IsHero(): boolean {
		return HasBit(this.UnitType, 1);
	}
	get IsTower(): boolean {
		return HasBit(this.UnitType, 2)
	}
	get IsConsideredHero(): boolean {
		return HasBit(this.UnitType, 3)
	}
	get IsBuilding(): boolean {
		return HasBit(this.UnitType, 4)
	}
	get IsFort(): boolean {
		return HasBit(this.UnitType, 5);
	}
	get IsBarracks(): boolean {
		return HasBit(this.UnitType, 6)
	}
	get IsCreep(): boolean {
		return HasBit(this.UnitType, 7)
	}
	get IsCourier(): boolean {
		return HasBit(this.UnitType, 8)
	}
	get IsShop(): boolean {
		return HasBit(this.UnitType, 9)
	}
	get IsLaneCreep(): boolean {
		return HasBit(this.UnitType, 10)
	}
	get IsShrine(): boolean {
		return HasBit(this.UnitType, 12)
	}
	get IsWard(): boolean {
		return HasBit(this.UnitType, 17)
	}

	get IsRooted(): boolean {
		return this.IsUnitStateFlagSet(modifierstate.MODIFIER_STATE_ROOTED)
	}
	get IsDisarmed(): boolean {
		return this.IsUnitStateFlagSet(modifierstate.MODIFIER_STATE_DISARMED)
	}
	get IsAttackImmune(): boolean {
		return this.m_pBaseEntity.m_bIsAttackImmune
		// return this.IsUnitStateFlagSet(modifierstate.MODIFIER_STATE_ATTACK_IMMUNE);
	}
	get IsSilenced(): boolean {
		return this.IsUnitStateFlagSet(modifierstate.MODIFIER_STATE_SILENCED)
	}
	get IsMuted(): boolean {
		return this.IsUnitStateFlagSet(modifierstate.MODIFIER_STATE_MUTED)
	}
	get IsStunned(): boolean {
		return this.IsUnitStateFlagSet(modifierstate.MODIFIER_STATE_STUNNED)
	}
	get IsHexed(): boolean {
		return this.IsUnitStateFlagSet(modifierstate.MODIFIER_STATE_HEXED)
	}
	get IsInvisible(): boolean {
		return this.IsUnitStateFlagSet(modifierstate.MODIFIER_STATE_INVISIBLE)
	}
	get IsInvulnerable(): boolean {
		return this.IsUnitStateFlagSet(modifierstate.MODIFIER_STATE_INVULNERABLE)
	}
	get IsMagicImmune(): boolean {
		return this.m_pBaseEntity.m_bIsMagicImmune
		// return this.IsUnitStateFlagSet(modifierstate.MODIFIER_STATE_MAGIC_IMMUNE);
	}
	//
	get IsNoHealthBar(): boolean {
		return this.IsUnitStateFlagSet(modifierstate.MODIFIER_STATE_NO_HEALTH_BAR)
	}
	//
	get IsBlind(): boolean {
		return this.IsUnitStateFlagSet(modifierstate.MODIFIER_STATE_BLIND)
	}
	//
	get IsRealUnit(): boolean {
		return this.UnitType !== 0 && !this.IsUnitStateFlagSet(modifierstate.MODIFIER_STATE_FAKE_ALLY)
	}
	//
	get IsTrueSightImmune(): boolean {
		return this.IsUnitStateFlagSet(modifierstate.MODIFIER_STATE_TRUESIGHT_IMMUNE)
	}

	get IsInFadeTime(): boolean {
		return this.m_pBaseEntity.m_flInvisibilityLevel > 0
	}

	get IsVisibleForEnemies(): boolean {
		const valid_teams = ~(1 | (1 << DOTATeam_t.DOTA_TEAM_SPECTATOR)
			| (1 << DOTATeam_t.DOTA_TEAM_NEUTRALS)
			| (1 << DOTATeam_t.DOTA_TEAM_NOTEAM)) // don't check not existing team (0), spectators (1), neutrals (4) and noteam (5)

		let local_team = this.m_pBaseEntity.m_iTeamNum,
			flags = this.m_pBaseEntity.m_iTaggedAsVisibleByTeam & valid_teams

		for (let i = 14; i--; )
			if (i !== local_team && ((flags >> i) & 1))
				return true
		return false
	}
	get IsTrueSightedForEnemies(): boolean {
		return this.Buffs.some(buff => TrueSightBuffs.some(nameBuff => nameBuff === buff.Name))
	}
	get IsControllableByAnyPlayer(): boolean {
		return this.m_pBaseEntity.m_iIsControllableByPlayer64 !== 0n
	}
	get IsRangeAttacker(): boolean {
		return this.HasAttackCapability(DOTAUnitAttackCapability_t.DOTA_UNIT_CAP_RANGED_ATTACK)
	}
	get HasScepter(): boolean {
		if (this.HasStolenScepter)
			return true

		return this.Buffs.some(buff => ScepterRegExp.test(buff.Name))
	}

	/**
	 * @param flag if not exists => is Melee or Range attack
	 */
	HasAttackCapability(flag?: DOTAUnitAttackCapability_t): boolean {
		let attackCap = this.m_pBaseEntity.m_iAttackCapabilities

		if (flag !== undefined)
			return (attackCap & flag) === flag

		return (attackCap & (
				DOTAUnitAttackCapability_t.DOTA_UNIT_CAP_MELEE_ATTACK |
				DOTAUnitAttackCapability_t.DOTA_UNIT_CAP_RANGED_ATTACK)
			) === flag
	}
	/**
	 * @param flag if not exists => isn't move NONE
	 */
	HasMoveCapabilit(flag: DOTAUnitMoveCapability_t): boolean {
		let moveCap = this.m_pBaseEntity.m_iMoveCapabilities

		if (flag !== undefined)
			return (moveCap & flag) === flag

		return flag !== DOTAUnitMoveCapability_t.DOTA_UNIT_CAP_MOVE_NONE
	}
	
	IsUnitStateFlagSet(flag: modifierstate): boolean {
		return (((this.m_pBaseEntity.m_nUnitState64 | this.m_pBaseEntity.m_nUnitDebuffState) >> BigInt(flag)) & 1n) === 1n
	}

	IsControllableByPlayer(playerID: number): boolean {
		return ((this.m_pBaseEntity.m_iIsControllableByPlayer64 >> BigInt(playerID)) & 1n) === 1n
	}
	// new

	get Armor(): number {
		return this.m_pBaseEntity.m_flPhysicalArmorValue
	}
	get ArmorType(): ArmorType {
		return this.m_pBaseEntity.m_iCombatClassDefend
	}
	get AttackCapability(): DOTAUnitAttackCapability_t {
		return this.m_pBaseEntity.m_iAttackCapabilities
	}
	get AttackDamageType(): AttackDamageType {
		return this.m_pBaseEntity.m_iCombatClassAttack
	}
	get AttackRange(): number {
		return this.m_pBaseEntity.m_fAttackRange
	}
	get AttacksPerSecond(): number {
		return 1 / this.m_pBaseEntity.m_fAttacksPerSecond
	}
	get AvailableShops(): DOTA_SHOP_TYPE /*Enums.ShopFlags*/ {
		return this.m_pBaseEntity.m_iNearShopMask
	}
	// BaseArmor
	get BaseAttackTime(): number {
		return this.m_pBaseEntity.m_flBaseAttackTime
	}
	// BaseHealthRegeneration
	// BaseManaRegeneration
	get BaseMoveSpeed(): number {
		return this.m_pBaseEntity.m_iMoveSpeed
	}
	get BKBChargesUsed(): number {
		return this.m_pBaseEntity.m_iBKBChargesUsed
	}
	get DamageBonus(): number {
		return this.m_pBaseEntity.m_iDamageBonus
	}
	get CollisionPadding(): number {
		return this.m_pBaseEntity.m_flCollisionPadding
	}
	get DayVision(): number {
		return this.m_pBaseEntity.m_iDayTimeVisionRange
	}
	get DeathTime(): number {
		return this.m_pBaseEntity.m_flDeathTime
	}
	get DebuffState(): bigint {
		return this.m_pBaseEntity.m_nUnitDebuffState
	}
	// check
	get HasArcana(): boolean {
		return this.m_pBaseEntity.m_nArcanaLevel > 0
	}
	get BaseStatsChanged(): boolean {
		return this.m_pBaseEntity.m_bBaseStatsChanged
	}
	get HasInventory(): boolean {
		return this.m_pBaseEntity.m_bHasInventory
	}
	get HasSharedAbilities(): boolean {
		return this.m_pBaseEntity.m_bHasSharedAbilities
	}
	get HasStolenScepter(): boolean {
		return this.m_pBaseEntity.m_bStolenScepter;
	}
	get HasUpgradeableAbilities(): boolean {
		return this.m_pBaseEntity.m_bHasUpgradeableAbilities
	}
	get HealthBarOffset(): number {
		return this.m_pBaseEntity.m_iHealthBarOffset
	}
	get HealthBarHighlightColor(): Color {
		return Color.fromIOBuffer(this.m_pBaseEntity.m_iHealthBarHighlightColor);
	}
	get HPRegen(): number {
		return this.m_pBaseEntity.m_flHealthThinkRegen
	}
	get HullRadius(): number {
		return this.m_pBaseEntity.m_flHullRadius
	}
	get IncreasedAttackSpeed(): number {
		return this.m_pBaseEntity.m_fIncreasedAttackSpeed
	}
	
	get InvisibleLevel(): number {
		return this.m_pBaseEntity.m_flInvisibilityLevel
	}
	get IsAncient(): boolean {
		return this.m_pBaseEntity.m_bIsAncient
	}
	/**
	 * IsControllable by LocalPlayer
	 */
	get IsControllable(): boolean {
		let lp = EntityManager.LocalPlayer;
		return lp !== undefined && this.IsControllableByPlayer(lp.ID)
	}
	get IsDominatable(): boolean {
		return this.m_pBaseEntity.m_bCanBeDominated
	}
	get IsIllusion(): boolean {
		return this.m_pBaseEntity.m_bIsIllusion;
	}
	get IsMelee(): boolean {
		return this.AttackCapability === DOTAUnitAttackCapability_t.DOTA_UNIT_CAP_MELEE_ATTACK
	}
	get IsMoving(): boolean {
		return this.m_pBaseEntity.m_bIsMoving
	}
	get IsNeutral(): boolean {
		return this.m_pBaseEntity.m_bIsNeutralUnitType
	}
	get IsPhantom(): boolean {
		return this.m_pBaseEntity.m_bIsPhantom
	}
	get IsRanged(): boolean {
		return this.AttackCapability === DOTAUnitAttackCapability_t.DOTA_UNIT_CAP_RANGED_ATTACK
	}
	get IsSpawned(): boolean {
		return !this.IsWaitingToSpawn
	}
	get IsSummoned(): boolean {
		return this.m_pBaseEntity.m_bIsSummoned
	}
	set IsVisibleForTeamMask(value: number) {
		this.m_pBaseEntity.m_iTaggedAsVisibleByTeam = value;
	}
	get IsVisibleForTeamMask(): number {
		return this.m_pBaseEntity.m_iTaggedAsVisibleByTeam
	}
	get IsWaitingToSpawn(): boolean {
		return this.m_pBaseEntity.m_bIsWaitingToSpawn
	}
	get Level(): number {
		return this.m_pBaseEntity.m_iCurrentLevel
	}
	get Mana(): number {
		return this.m_pBaseEntity.m_flMana
	}
	get ManaRegen(): number {
	 	return this.m_pBaseEntity.m_flManaRegen;
	}
	get MaxDamage(): number {
		return this.m_pBaseEntity.m_iDamageMax
	}
	get MaxMana(): number {
		return this.m_pBaseEntity.m_flMaxMana
	}
	get MinimapIcon(): string {
		return this.m_pBaseEntity.m_iszMinimapIcon
	}
	get MinimapIconSize(): number {
		return this.m_pBaseEntity.m_flMinimapIconSize
	}
	get MinDamage(): number {
		return this.m_pBaseEntity.m_iDamageMin
	}
	get MoveCapability(): DOTAUnitMoveCapability_t {
		return this.m_pBaseEntity.m_iMoveCapabilities
	}
	get IdealSpeed(): number {
		return this.m_pBaseEntity.m_fIdealSpeed
	}
	get Name(): string {
		return this.m_pBaseEntity.m_iszUnitName || ""
	}
	get NetworkActivity(): GameActivity_t {
		return this.m_pBaseEntity.m_NetworkActivity
	}
	get NightVision(): number {
		return this.m_pBaseEntity.m_iNightTimeVisionRange
	}
	get ProjectileCollisionSize(): number {
		return this.m_pBaseEntity.m_flProjectileCollisionSize
	}
	get RingRadius(): number {
		return this.m_pBaseEntity.m_flRingRadius
	}
	get RotationDifference(): number {
		return this.m_pBaseEntity.m_anglediff
	}
	get SecondsPerAttack(): number {
		return this.m_pBaseEntity.m_fAttacksPerSecond
	}
	get TauntCooldown(): number {
		return this.m_pBaseEntity.m_flTauntCooldown
	}
	get TotalDamageTaken(): bigint {
		return this.m_pBaseEntity.m_nTotalDamageTaken
	}
	get UnitState(): modifierstate[] {
		return MaskToArrayBigInt(this.m_pBaseEntity.m_nUnitState64)
	}
	get UnitType(): number {
		return this.m_pBaseEntity.m_iUnitType
	}

	get AbilitiesBook(): AbilitiesBook {
		return this.m_AbilitiesBook
			|| (this.m_AbilitiesBook = new AbilitiesBook(this));
	}
	get Spells(): Ability[] {
		return this.AbilitiesBook.Spells;
	}
	get Inventory(): Inventory {
		return this.m_Inventory || (this.m_Inventory = new Inventory(this));
	}
	get Items(): Item[] {
		return this.Inventory.Items;
	}
	get ModifiersBook(): ModifiersBook {
		return this.m_ModifiersBook
			|| (this.m_ModifiersBook = new ModifiersBook(this));
	}
	get Buffs(): Modifier[] {
		return this.ModifiersBook.Buffs;
	}
	
	/* ============ EXTENSIONS ============ */
	
	/**
	 * @param fromCenterToCenter include HullRadiuses
	 */
	Distance(vec: Vector3 | Entity | Unit, fromCenterToCenter: boolean = false): number {
		if (vec instanceof Vector3)
			return super.Distance(vec)

		return super.Distance(vec) - (fromCenterToCenter ? 0 : this.HullRadius + (vec instanceof Unit ? vec.HullRadius : 0))
	}
	/**
	 * @param fromCenterToCenter include HullRadiuses
	 */
	Distance2D(vec: Vector3 | Entity | Unit, fromCenterToCenter: boolean = false): number {
		if (vec instanceof Vector3)
			return super.Distance2D(vec)

		return super.Distance2D(vec) - (fromCenterToCenter ? 0 : this.HullRadius + (vec instanceof Unit ? vec.HullRadius : 0))
	}
	/**
	 * @param fromCenterToCenter include HullRadiuses
	 */
	DistanceSquared(vec: Vector3 | Entity | Unit, fromCenterToCenter: boolean = false): number {
		if (vec instanceof Vector3)
			return super.DistanceSquared(vec)

		return super.DistanceSquared(vec) - (fromCenterToCenter ? 0 : this.HullRadius + (vec instanceof Unit ? vec.HullRadius : 0))
	}
	
	get CastRangeBonus(): number {
		let castrange = 0;
		
		let lens = this.Inventory.GetItemByName("item_aether_lens");
		if (lens !== undefined)
			castrange += lens.GetSpecialValue("cast_range_bonus");
			
		this.Spells.forEach(spell => {
			if (spell.Level > 0 && /special_bonus_cast_range_/.test(spell.Name))
				castrange += spell.GetSpecialValue("value");
		});
		return castrange
	}
	get SpellAmplification(): number {
		let spellAmp = 0;

		this.Items.forEach(item => spellAmp += item.GetSpecialValue("spell_amp") / 100);

		this.Spells.forEach(spell => {
			if (spell.Level > 0 && spell.Name.startsWith("special_bonus_spell_amplify"))
				spellAmp += spell.GetSpecialValue("value") / 100
		});

		return spellAmp
	}
	
	MoveTo(position: Vector3, queue?: boolean, showEffects?: boolean) {
		return Player.PrepareOrder({ orderType: dotaunitorder_t.DOTA_UNIT_ORDER_MOVE_TO_POSITION, unit: this, position, queue, showEffects});
	}
	MoveToTarget(target: Entity | number, queue?: boolean, showEffects?: boolean) {
		return Player.PrepareOrder({ orderType: dotaunitorder_t.DOTA_UNIT_ORDER_MOVE_TO_POSITION, unit: this, target, queue, showEffects });
	}
	AttackMove(position: Vector3, queue?: boolean, showEffects?: boolean) {
		return Player.PrepareOrder({ orderType: dotaunitorder_t.DOTA_UNIT_ORDER_ATTACK_MOVE, unit: this, position, queue, showEffects });
	}
	AttackTarget(target: Entity | number, queue?: boolean, showEffects?: boolean) {
		return Player.PrepareOrder({ orderType: dotaunitorder_t.DOTA_UNIT_ORDER_ATTACK_TARGET, unit: this, target, queue, showEffects });
	}
	CastPosition(ability: Ability, position: Vector3, queue?: boolean, showEffects?: boolean) {
		return Player.PrepareOrder({ orderType: dotaunitorder_t.DOTA_UNIT_ORDER_CAST_POSITION, unit: this, ability, position, queue, showEffects });
	}
	CastTarget(ability: Ability, target: Entity | number, queue?: boolean, showEffects?: boolean) {
		return Player.PrepareOrder({ orderType: dotaunitorder_t.DOTA_UNIT_ORDER_CAST_TARGET, unit: this, target, ability, queue, showEffects });
	}
	CastTargetTree(ability: Ability, tree: Tree | number, queue?: boolean, showEffects?: boolean) {
		return Player.PrepareOrder({ orderType: dotaunitorder_t.DOTA_UNIT_ORDER_CAST_TARGET_TREE, unit: this, target: tree, ability, queue, showEffects });
	}
	CastNoTarget(ability: Ability, queue?: boolean, showEffects?: boolean) {
		return Player.PrepareOrder({ orderType: dotaunitorder_t.DOTA_UNIT_ORDER_CAST_NO_TARGET, unit: this, ability, queue, showEffects });
	}
	CastToggle(ability: Ability, queue?: boolean, showEffects?: boolean) {
		return Player.PrepareOrder({ orderType: dotaunitorder_t.DOTA_UNIT_ORDER_CAST_TOGGLE, unit: this, ability, queue, showEffects });
	}
	HoldPosition(position: Vector3, queue?: boolean, showEffects?: boolean) {
		return Player.PrepareOrder({ orderType: dotaunitorder_t.DOTA_UNIT_ORDER_HOLD_POSITION, unit: this, position, queue, showEffects });
	}
	TrainAbility(ability: Ability) {
		return Player.PrepareOrder({ orderType: dotaunitorder_t.DOTA_UNIT_ORDER_TRAIN_ABILITY, unit: this, ability });
	}
	DropItem(item: Item, position: Vector3, queue?: boolean, showEffects?: boolean) {
		return Player.PrepareOrder({ orderType: dotaunitorder_t.DOTA_UNIT_ORDER_DROP_ITEM, unit: this, ability: item, position, queue, showEffects });
	}
	GiveItem(item: Item, target: Entity | number, queue?: boolean, showEffects?: boolean) {
		return Player.PrepareOrder({ orderType: dotaunitorder_t.DOTA_UNIT_ORDER_GIVE_ITEM, unit: this, target, ability: item, queue, showEffects });
	}
	PickupItem(physicalItem: PhysicalItem | number, queue?: boolean, showEffects?: boolean) {
		return Player.PrepareOrder({ orderType: dotaunitorder_t.DOTA_UNIT_ORDER_PICKUP_ITEM, unit: this, target: physicalItem, queue, showEffects });
	}
	PickupRune(rune: Rune | number, queue?: boolean, showEffects?: boolean) {
		return Player.PrepareOrder({ orderType: dotaunitorder_t.DOTA_UNIT_ORDER_PICKUP_RUNE, unit: this, target: rune, queue, showEffects });
	}
	// check
	PurchaseItem(itemID: number, queue?: boolean, showEffects?: boolean) {
		return Player.PrepareOrder({ orderType: dotaunitorder_t.DOTA_UNIT_ORDER_PURCHASE_ITEM, unit: this, target: itemID, queue, showEffects });
	}
	SellItem(item: Item) {
		return Player.PrepareOrder({ orderType: dotaunitorder_t.DOTA_UNIT_ORDER_SELL_ITEM, unit: this, ability: item });
	}
	// check
	DisassembleItem(item: Item, queue?: boolean) {
		return Player.PrepareOrder({ orderType: dotaunitorder_t.DOTA_UNIT_ORDER_DISASSEMBLE_ITEM, unit: this, ability: item, queue });
	}
	MoveItem(item: Item, slot: DOTAScriptInventorySlot_t) {
		return Player.PrepareOrder({ orderType: dotaunitorder_t.DOTA_UNIT_ORDER_MOVE_ITEM, unit: this, target: slot, ability: item });
	}
	CastToggleAuto(item: Item, queue?: boolean, showEffects?: boolean) {
		return Player.PrepareOrder({ orderType: dotaunitorder_t.DOTA_UNIT_ORDER_CAST_TOGGLE_AUTO, unit: this, ability: item, queue, showEffects });
	}
	UnitStop(queue?: boolean, showEffects?: boolean) {
		return Player.PrepareOrder({ orderType: dotaunitorder_t.DOTA_UNIT_ORDER_STOP, unit: this, queue, showEffects });
	}
	UnitTaunt(queue?: boolean, showEffects?: boolean) {
		return Player.PrepareOrder({ orderType: dotaunitorder_t.DOTA_UNIT_ORDER_TAUNT, unit: this, queue, showEffects });
	}
	ItemFromStash(item: Item) {
		return Player.PrepareOrder({ orderType: dotaunitorder_t.DOTA_UNIT_ORDER_EJECT_ITEM_FROM_STASH, unit: this, ability: item });
	}
	CastRune(runeItem: Item | number, queue?: boolean, showEffects?: boolean) {
		return Player.PrepareOrder({ orderType: dotaunitorder_t.DOTA_UNIT_ORDER_CAST_RUNE, unit: this, target: runeItem, queue, showEffects });
	}
	PingAbility(ability: Ability) {
		return Player.PrepareOrder({ orderType: dotaunitorder_t.DOTA_UNIT_ORDER_PING_ABILITY, unit: this, ability });
	}
	MoveToDirection(position: Vector3, queue?: boolean, showEffects?: boolean) {
		return Player.PrepareOrder({ orderType: dotaunitorder_t.DOTA_UNIT_ORDER_MOVE_TO_DIRECTION, unit: this, position, queue, showEffects });
	}
	Patrol(position: Vector3, queue?: boolean, showEffects?: boolean) {
		return Player.PrepareOrder({ orderType: dotaunitorder_t.DOTA_UNIT_ORDER_PATROL, unit: this, position, queue, showEffects });
	}
	VectorTargetPosition(ability: Ability, Direction: Vector3, queue?: boolean, showEffects?: boolean) {
		return Player.PrepareOrder({ orderType: dotaunitorder_t.DOTA_UNIT_ORDER_VECTOR_TARGET_POSITION, unit: this, ability, position: Direction, queue, showEffects });
	}
	CastVectorTargetPosition(ability: Ability, position: Vector3 | Unit, Direction: Vector3, queue?: boolean, showEffects?: boolean) {

		if (position instanceof Unit)
			position = position.Position;

		this.VectorTargetPosition(ability, Direction, queue, showEffects);
		this.CastPosition(ability, position, queue, showEffects);
	}
	ItemLock(item: Item, state: boolean = true) {
		return Player.PrepareOrder({ orderType: dotaunitorder_t.DOTA_UNIT_ORDER_SET_ITEM_COMBINE_LOCK, unit: this, ability: item, target: state === false ? 0 : undefined });
	}
	OrderContinue(item: Item, queue?: boolean, showEffects?: boolean) {
		return Player.PrepareOrder({ orderType: dotaunitorder_t.DOTA_UNIT_ORDER_CONTINUE, unit: this, ability: item, queue, showEffects });
	}
	VectorTargetCanceled(position: Vector3, queue?: boolean, showEffects?: boolean) {
		return Player.PrepareOrder({ orderType: dotaunitorder_t.DOTA_UNIT_ORDER_VECTOR_TARGET_CANCELED, unit: this, position, queue, showEffects });
	}
	
	/**
	 * 
	 * @param fromCenterToCenter include HullRadiuses
	 */
	IsInRange(ent: Vector3 | Entity, range: number, fromCenterToCenter: boolean = false): boolean {
		if (fromCenterToCenter === false) {
			range += this.HullRadius;
			
			if (ent instanceof Unit)
				range += ent.HullRadius;
		}
		return super.IsInRange(ent, range);
	}
}
//global.Unit = Unit;