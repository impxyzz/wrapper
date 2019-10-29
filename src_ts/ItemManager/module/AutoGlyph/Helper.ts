import { Hero, Team, Game, GameSleeper, Entity, ArrayExtensions, Building, LocalPlayer, Player } from "wrapper/Imports"
import { StateBase } from "../../abstract/MenuBase"
import { State, TowerHP, TowerSwitcher } from "./Menu"

let Towers: Building[] = [],
	Sleep: GameSleeper = new GameSleeper()
	
function GlyphCooldown(): number {
	switch (0) {
		case Team.Radiant:
			return Game.GlyphCooldownRediant
		case Team.Dire:
			return Game.GlyphCooldownDire
		default:
			return 0
	}
}

function GetDelayCast() {
	return (((Game.Ping / 2) + 30) + 250)
}

export function Tick() {
	if (
		!StateBase.value
		|| !State.value
		|| Sleep.Sleeping("Glyph")
		|| !LocalPlayer.IsSpectator
		|| GlyphCooldown() > 0
	)
		return false
	let include_name = "tower1"
	switch (TowerSwitcher.selected_id) {
		case 0: include_name = "tower1"; break;
		case 1: include_name = "tower2"; break;
		case 2: include_name = "tower3"; break;
		case 3: include_name = "tower4"; break;
		case 4: include_name = "tower"; break;
		case 5: include_name = "npc_dota_"; break;
	}
	if (!Towers.some(x => x !== undefined && !x.IsEnemy() && x.IsAlive && x.HP <= TowerHP.value && x.Name.includes(include_name))) {
		return false
	}
	Player.Glyph()
	Sleep.Sleep(GetDelayCast(), "Glyph")
	return true
}

export function EntityCreate(x: Entity) {
	if (x instanceof Building && !x.IsShop && !x.IsShrine)
		Towers.push(x)
}

export function EntityDestroy(x: Entity) {
	if (Towers !== undefined || Towers.length > 0)
		ArrayExtensions.arrayRemove(Towers, x)
}

export function Init() {
	Towers = []
	Sleep.FullReset()
}