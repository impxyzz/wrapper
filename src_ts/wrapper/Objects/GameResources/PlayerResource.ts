import EntityManager from "../../Managers/EntityManager"
import Courier from "../Base/Courier"
import Player from "../Base/Player"

class PlayerResource {
	public m_pBaseEntity: C_DOTA_PlayerResource

	public get Names(): string[] {
		if (this.m_pBaseEntity === undefined)
			return []
		return this.m_pBaseEntity.m_iszName
	}
	public get AllPlayers(): Player[] {
		if (this.m_pBaseEntity === undefined)
			return []
		return EntityManager.GetEntitiesByNative(this.m_pBaseEntity.m_playerIDToPlayer) as Player[]
	}
	public get PlayerTeamData(): PlayerResourcePlayerTeamData_t[] {
		if (this.m_pBaseEntity === undefined)
			return []
		return this.m_pBaseEntity.m_vecPlayerTeamData
	}
	public get PlayerData(): PlayerResourcePlayerData_t[] {
		if (this.m_pBaseEntity === undefined)
			return []
		return this.m_pBaseEntity.m_vecPlayerData
	}
	public get TeamCouriers(): Courier[] {
		if (this.m_pBaseEntity === undefined)
			return []
		return EntityManager.GetEntitiesByNative(this.m_pBaseEntity.m_hTeamCouriers) as Courier[]
	}
	public get PlayerCouriers(): Courier[] {
		if (this.m_pBaseEntity === undefined)
			return []
		return EntityManager.GetEntitiesByNative(this.m_pBaseEntity.m_hPlayerCouriers) as Courier[]
	}
	public get PlayerNames(): string[] {
		if (this.m_pBaseEntity === undefined)
			return []
		return this.m_pBaseEntity.m_iszName
	}

	public GetNameByPlayerID(playerID: number): string {
		if (this.m_pBaseEntity === undefined)
			return ""
		return this.m_pBaseEntity.m_iszName[playerID]
	}
	public GetPlayerByPlayerID(playerID: number): Player {
		if (this.m_pBaseEntity === undefined)
			return undefined
		return EntityManager.GetEntityByFilter(ent => ent instanceof Player && ent.PlayerID === playerID, true) as Player
	}
	public GetPlayerCouriersByPlayerID(playerID: number): Courier {
		if (this.m_pBaseEntity === undefined)
			return undefined
		return EntityManager.GetEntityByNative(this.m_pBaseEntity.m_hPlayerCouriers[playerID]) as Courier
	}

	public GetPlayerTeamDataByPlayerID(playerID: number): PlayerResourcePlayerTeamData_t {
		return this.PlayerTeamData[playerID]
	}
	public GetPlayerDataByPlayerID(playerID: number): PlayerResourcePlayerData_t {
		return this.PlayerData[playerID]
	}
	public GetPlayerNameByPlayerID(playerID: number): string {
		return this.PlayerNames[playerID]
	}
}

export default global.PlayerResource = new PlayerResource()
