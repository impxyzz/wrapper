import { Team } from "../Enums/Team"
import { EntityPropertiesNode } from "../Managers/EntityManager"
import AbilityData from "../Objects/DataBook/AbilityData"

export default class StockInfo {
	constructor(public readonly properties: EntityPropertiesNode) { }

	public get AbilityData(): AbilityData {
		return AbilityData.global_storage.get(this.AbilityName) ?? AbilityData.empty
	}
	public get AbilityName(): string {
		return AbilityData.GetAbilityNameByID(this.AbilityID)
	}
	public get AbilityID(): number {
		return this.properties.get("nItemAbilityID") as number
	}
	public get InitStockDuration(): number {
		return this.properties.get("fInitialStockDuration") as number
	}
	public get StockDuration(): number {
		return this.properties.get("fStockDuration") as number
	}
	public get StockTime(): number {
		return this.properties.get("fStockTime") as number
	}
	public get MaxCount(): number {
		return this.properties.get("iMaxCount") as number
	}
	public get Team(): Team {
		return this.properties.get("iTeamNumber") as Team
	}
	public get IsAvalible(): boolean {
		return this.StockCount > 0
	}
	public get StockCount(): number {
		return this.properties.get("iStockCount") as number
	}
	public get PlayerNumber(): number {
		return this.properties.get("iPlayerNumber") as number
	}
	public get BonusDelayedStockCount(): number {
		return this.properties.get("iBonusDelayedStockCount") as number
	}
	public toJSON(): any {
		return {
			AbilityName: this.AbilityName,
			AbilityID: this.AbilityID,
			InitStockDuration: this.InitStockDuration,
			StockDuration: this.StockDuration,
			StockTime: this.StockTime,
			MaxCount: this.MaxCount,
			Team: this.Team,
			IsAvalible: this.IsAvalible,
			StockCount: this.StockCount,
			PlayerNumber: this.PlayerNumber,
			BonusDelayedStockCount: this.BonusDelayedStockCount,
		}
	}
}
