import { GameSleeper, Hero, Utils } from "wrapper/Imports"
import { Base } from "../Extends/Helper"
import { Heroes, MyHero } from "../Listeners"
import {  spamKey,marshKey, active, soulTresh, comboKey, marshBlink, spamBlink,marshItems,spamItems } from "../MenuManager"
import InitItems from "../Extends/Items"
import InitAbility from "../Extends/Abilities"
import { TinkerStatus } from "./status"
let Sleep = new GameSleeper
export function Spam(){
	if (!Base.IsRestrictions(active))
		return false
	if (comboKey.is_pressed)
		return false
	let _h:Hero = Heroes.find(hero => (hero!==MyHero && hero.IsEnemy() && hero.Distance(MyHero) <= 2500+MyHero.CastRangeBonus&&hero.IsVisible&&!hero.IsMagicImmune))
	if (marshKey.is_pressed||spamKey.is_pressed&&_h !==undefined)
	{
	
	let ItemsInit = new InitItems(MyHero),
		Abilities = new InitAbility(MyHero)
	
	//console.log(_h)
		if (!Abilities.r.IsChanneling 
			&& !Sleep.Sleeping("mspam")){
			TinkerStatus(1)
			if (ItemsInit.Blink !== undefined//blink
				&&!Sleep.Sleeping(`${ItemsInit.Blink.Index}`)
				&& (marshBlink.value&&marshKey.is_pressed||spamBlink.value&&spamKey.is_pressed)
				&& ItemsInit.Blink.CanBeCasted()
				&& !Utils.CursorWorldVec.IsInRange(MyHero.NetworkPosition, 150)
				) {
					let castRange = ItemsInit.Blink.GetSpecialValue("blink_range") + MyHero.CastRangeBonus
					if (Utils.CursorWorldVec.IsInRange(MyHero.NetworkPosition,castRange))
					{
						ItemsInit.Blink.UseAbility(Utils.CursorWorldVec)
						Sleep.Sleep(ItemsInit.Tick, `${ItemsInit.Blink.Index}`)
						return true
					}
					else
					{    
						ItemsInit.Blink.UseAbility(MyHero.NetworkPosition.Extend(Utils.CursorWorldVec,castRange-1))
						Sleep.Sleep(ItemsInit.Tick, `${ItemsInit.Blink.Index}`)
						return true
					}
			}
			if (((marshBlink.value && ItemsInit.Blink == undefined)
				||spamBlink.value && ItemsInit.Blink == undefined)
				 && !Sleep.Sleeping("msmove"))
			{
					MyHero.MoveTo(Utils.CursorWorldVec)
					Sleep.Sleep(50, "msmove")
					return true
			}
			if (ItemsInit.Soulring !== undefined
				&&!Sleep.Sleeping(`${ItemsInit.Soulring.Index}`)
				&& ItemsInit.Soulring.CanBeCasted() 
				&& (MyHero.HP / MyHero.MaxHP * 100 > soulTresh.value)
				) {
					ItemsInit.Soulring.UseAbility()
					Sleep.Sleep(ItemsInit.Tick, `${ItemsInit.Soulring.Index}`)
					return true
			}
			if (marshKey.is_pressed
				&&Abilities.e !== undefined//MARSH
				&&!Sleep.Sleeping(`${Abilities.e.Index}`)
				&&!Abilities.e.IsInAbilityPhase
				&&Abilities.e.CanBeCasted()
				) {
					Abilities.e.UseAbility(MyHero.NetworkPosition.Extend(Utils.CursorWorldVec,Abilities.e.CastRange))
					Sleep.Sleep(Abilities.Tick+Abilities.e.CastPoint*1000+1, `${Abilities.e.Index}`)
					return true
			}
			if (spamKey.is_pressed
				&&_h!==undefined
				&&Abilities.w !== undefined//ROCKET
				&&!Sleep.Sleeping(`${Abilities.w.Index}`)
				&&!Abilities.w.IsInAbilityPhase
				&&Abilities.w.CanBeCasted()
				){
					Abilities.w.UseAbility()
					Sleep.Sleep(Abilities.Tick+Abilities.w.CastPoint*1000, `${Abilities.w.Index}`)
					return true
			}
			if (ItemsInit.Greaves !== undefined //GREAVES
				&& ItemsInit.Greaves.CanBeCasted()
				&& ((marshItems.IsEnabled("item_guardian_greaves")&&marshKey.is_pressed||spamItems.IsEnabled("item_guardian_greaves")&&spamKey.is_pressed))
				&&!Sleep.Sleeping(`${ItemsInit.Greaves.Index}`)
			) {
					ItemsInit.Greaves.UseAbility()
					Sleep.Sleep(ItemsInit.Tick, `${ItemsInit.Greaves.Index}`)
					return true
			}
			if (ItemsInit.Ghost !== undefined //GHOST
				&& ItemsInit.Ghost.CanBeCasted()
				&& ((marshItems.IsEnabled("item_ghost")&&marshKey.is_pressed||spamItems.IsEnabled("item_ghost")&&spamKey.is_pressed))
				&&!Sleep.Sleeping(`${ItemsInit.Ghost.Index}`)
				&&!MyHero.IsEthereal
			) {
					ItemsInit.Ghost.UseAbility()
					Sleep.Sleep(ItemsInit.Tick, `${ItemsInit.Ghost.Index}`)
					return true
			}
			if (ItemsInit.Bottle !== undefined //BOTTLE
				&&ItemsInit.Bottle.CurrentCharges>0
				&&!MyHero.HasModifier("modifier_bottle_regeneration")
				&&(MyHero.HPPercent<80||MyHero.ManaPercent<80)
				&& ((marshItems.IsEnabled("item_bottle")&&marshKey.is_pressed)||spamItems.IsEnabled("item_bottle")&&spamKey.is_pressed)
				&&!Sleep.Sleeping(`${ItemsInit.Bottle.Index}`)
			) {
					ItemsInit.Bottle.UseAbility(MyHero)
					Sleep.Sleep(ItemsInit.Tick, `${ItemsInit.Bottle.Index}`)
					return true
			}
			if (ItemsInit.Glimmer !== undefined //GLIMMER
				&& ItemsInit.Glimmer.CanBeCasted()
				&& ((marshItems.IsEnabled("item_glimmer_cape")&&marshKey.is_pressed)||(spamItems.IsEnabled("item_glimmer_cape")&&spamKey.is_pressed))
				&&!Sleep.Sleeping(`${ItemsInit.Glimmer.Index}`)
				&&!MyHero.IsInFadeTime
			) {
					ItemsInit.Glimmer.UseAbility(MyHero)
					Sleep.Sleep(ItemsInit.Tick, `${ItemsInit.Glimmer.Index}`)
					return true
			}
			if (Abilities.r !== undefined
				&&Abilities.r.CanBeCasted() 
				&&!Sleep.Sleeping("mspam")
				&&(!Abilities.e.IsInAbilityPhase||!Abilities.w.IsInAbilityPhase)
				&&(!Abilities.e.IsReady&&marshKey.is_pressed||!Abilities.w.IsReady&&spamKey.is_pressed)
				) {
					Abilities.r.UseAbility()
					Sleep.Sleep(Abilities.r.GetSpecialValue("channel_tooltip") * 1000+Abilities.r.CastPoint*1000+40, "mspam");
					return true

			}
		}
	}
	else
	{
		TinkerStatus(3)
	}
}