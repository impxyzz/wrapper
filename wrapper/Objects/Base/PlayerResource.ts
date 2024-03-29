import { EntityPropertiesNode } from "../../Base/EntityProperties"
import { PlayerData } from "../../Base/PlayerData"
import { PlayerTeamData } from "../../Base/PlayerTeamData"
import { Vector3 } from "../../Base/Vector3"
import { WrapperClass } from "../../Decorators"
import { Team } from "../../Enums/Team"
import { EventsSDK } from "../../Managers/EventsSDK"
import { RegisterFieldHandler } from "../../Objects/NativeToSDK"
import { Entity } from "../Base/Entity"
import { PlayerSpawners } from "./InfoPlayerStartDota"

@WrapperClass("CDOTA_PlayerResource")
export class CPlayerResource extends Entity {
	public PlayerTeamData: Nullable<PlayerTeamData>[] = []
	public PlayerData: Nullable<PlayerData>[] = []
	public RespawnPositions: Nullable<Vector3>[] = []

	public GetPlayerTeamDataByPlayerID(
		playerID: number
	): Nullable<PlayerTeamData> {
		return this.PlayerTeamData[playerID]
	}
	public GetPlayerDataByPlayerID(playerID: number): Nullable<PlayerData> {
		return this.PlayerData[playerID]
	}
}

RegisterFieldHandler(
	CPlayerResource,
	"m_vecPlayerTeamData",
	(playerResource, newVal) => {
		playerResource.PlayerTeamData = (newVal as EntityPropertiesNode[]).map(
			map => new PlayerTeamData(map)
		)
		UpdateRespawnPositions(playerResource)
		EventsSDK.emit("PlayerResourceUpdated", false, playerResource)
	}
)
RegisterFieldHandler(
	CPlayerResource,
	"m_vecPlayerData",
	(playerResource, newVal) => {
		playerResource.PlayerData = (newVal as EntityPropertiesNode[]).map(
			map => new PlayerData(map)
		)
		UpdateRespawnPositions(playerResource)
	}
)

export let PlayerResource: Nullable<CPlayerResource>
EventsSDK.on("PreEntityCreated", ent => {
	if (ent instanceof CPlayerResource) PlayerResource = ent
})
EventsSDK.on("EntityDestroyed", ent => {
	if (ent instanceof CPlayerResource) PlayerResource = undefined
})

function GetTeamDeaths(playerResource: CPlayerResource, team: Team) {
	let deaths = 0
	for (let i = 0; i < playerResource.PlayerData.length; i++) {
		const teamData = playerResource.PlayerTeamData[i]
		const playerData = playerResource.PlayerData[i]
		if (
			teamData !== undefined &&
			playerData !== undefined &&
			playerData.Team === team
		)
			deaths += teamData.Deaths
	}
	return deaths
}

function GetNextSpawn(playerResource: CPlayerResource, team: Team) {
	let res = GetTeamDeaths(playerResource, team) + 4
	for (const data of playerResource.PlayerData) if (data?.Team === team) res++
	return res
}

function UpdateRespawnPositions(playerResource: CPlayerResource) {
	for (const [team, positions] of [
		...new Set(PlayerSpawners.map(x => x.SpawnerTeam)),
	].map(
		team_ =>
			[
				team_,
				PlayerSpawners.filter(x => x.SpawnerTeam === team_).map(
					x => x.Position
				),
			] as [Team, Vector3[]]
	)) {
		const ar: [number, number][] = []
		const nextSpawn = GetNextSpawn(playerResource, team)

		for (let i = 0; i < playerResource.PlayerTeamData.length; i++) {
			const teamData = playerResource.PlayerTeamData[i]
			const playerData = playerResource.PlayerData[i]
			if (playerData === undefined || teamData === undefined) {
				playerResource.RespawnPositions[i] = undefined
				continue
			}
			if (playerData.Team !== team) continue
			const respawnTime = teamData.RespawnSeconds
			if (respawnTime < 0) {
				playerResource.RespawnPositions[i] = undefined
				continue
			}
			ar.push([respawnTime, i])
		}
		const sorted = ar.sort(([a], [b]) => a - b)
		for (let i = 0; i < sorted.length; i++) {
			const playerID = sorted[i][1]
			playerResource.RespawnPositions[playerID] =
				positions.length !== 0
					? positions[(nextSpawn - (ar.length - i - 1)) % positions.length]
					: undefined
		}
	}
}
