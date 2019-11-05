import { Menu, Game } from "wrapper/Imports"
import { Owner, Heroes } from "../Listeners"

class ShadowFiendHelper {
	
	public get DeadInSide(): boolean {
		return Heroes.length === 0
			|| Owner === undefined
			|| !Heroes.some(x => x.IsEnemy() && x.IsAlive)
			|| !Owner.IsAlive
	}
	
	public IsRestrictions(State: Menu.Toggle) {
		return State.value && !Game.IsPaused && Game.IsInGame && Owner !== undefined && Owner.IsAlive
	}
	
	
}
export let Base = new ShadowFiendHelper()