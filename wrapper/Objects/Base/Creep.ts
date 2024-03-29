import { WrapperClass } from "../../Decorators"
import { MapArea } from "../../Enums/MapArea"
import { GetMapArea } from "../../Helpers/DotaMap"
import { EntityManager } from "../../Managers/EntityManager"
import { EventsSDK } from "../../Managers/EventsSDK"
import { Unit } from "./Unit"

@WrapperClass("CDOTA_BaseNPC_Creep")
export class Creep extends Unit {
	public PredictedIsWaitingToSpawn = true
	public Lane = MapArea.Unknown

	public get IsLaneCreep(): boolean {
		return (
			this.ClassName === "CDOTA_BaseNPC_Creep_Lane" ||
			this.ClassName === "CDOTA_BaseNPC_Creep_Siege"
		)
	}
	public get IsDeniable(): boolean {
		return this.HPPercent <= 50 || super.IsDeniable
	}
	public get RingRadius(): number {
		return 60
	}
	public TryAssignLane(): void {
		if (
			this.IsNeutral ||
			this.Owner !== undefined ||
			this.Lane !== MapArea.Unknown
		)
			return
		const area = GetMapArea(this.Position, true)
		switch (area[0]) {
			case MapArea.Top:
			case MapArea.Bottom:
			case MapArea.Middle:
				this.Lane = area[0]
				break
			default:
				break
		}
	}
}
export const Creeps = EntityManager.GetEntitiesByClass(Creep)

EventsSDK.on("PreEntityCreated", ent => {
	if (ent instanceof Creep) ent.TryAssignLane()
})
