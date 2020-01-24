import { MoveCourier } from "./index"
import { Courier, Creep, Hero, Unit, Vector3, GameRules, GameState } from "wrapper/Imports"
import { CourierHelper } from "../Helper"
import { XAIOBestPosState } from "../Menu"
import { Units } from "XAIO/bootstrap"

function CourierLogicBestPosition(unit: Unit, courier: Courier, Position: Vector3) {
	if (!unit.IsAlive)
		return false

	if (CourierHelper.IsRangeCourier(courier, Position))
		CourierHelper.DELIVER_DISABLE = CourierHelper.IsRangeCourier(unit, Position)

	if (CourierHelper.IsRangeCourier(unit, Position)) {
		if (courier.State === CourierHelper.ATBASE || courier.State === CourierHelper.TOBASE)
			return false

		MoveCourier(courier, true)
		return true

	} else if (!CourierHelper.IsRangeCourier(courier, Position, 50) && courier.StateHero === undefined) {

		if (courier.State === CourierHelper.TOBASE)
			return false

		MoveCourier(courier, false)
		return true
	}
}

function BestPosition(unit: Unit, courier: Courier) {

	if (unit.IsAlive && unit.IsVisible && CourierHelper.IsRangeCourier(unit)) {
		MoveCourier(courier, true)
		CourierHelper.DELIVER_DISABLE = true
		return true
	}

	return CourierLogicBestPosition(unit, courier, CourierHelper.Position())
}

export function BPosition(courier: Courier) {
	if (!XAIOBestPosState.value || CourierHelper.IsTurbo || !CourierHelper.AllowMap.some(x => x.includes(GameState.MapName)))
		return

	if (CourierHelper.IsPreGame && Math.abs(Math.round(GameRules?.GameTime!)) === 85)
		MoveCourier(courier, false)

	if (Units.some(unit =>
		(unit instanceof Creep || unit instanceof Hero)
		&& unit.IsEnemy()
		&& BestPosition(unit, courier)))
		return
}