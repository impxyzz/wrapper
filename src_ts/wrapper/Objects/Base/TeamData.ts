import Entity from "./Entity"
import EntityManager, { EntityPropertyType } from "../../Managers/EntityManager"
import TreeModelReplacement from "../../Base/TreeModelReplacement"
import DataTeamPlayer from "../../Base/DataTeamPlayer"
import Vector2 from "../../Base/Vector2"
import { WrapperClass, NetworkedBasicField } from "../../Decorators"

@WrapperClass("C_DOTA_DataNonSpectator")
export default class TeamData extends Entity {
	public DataTeam: DataTeamPlayer[] = []
	public WorldTreeModelReplacements: TreeModelReplacement[] = []
	@NetworkedBasicField("m_vDesiredWardPlacement")
	public DesiredWardPlacement: Vector2[] = []
	@NetworkedBasicField("m_nEnemyStartingPosition")
	public EnemyStartingPosition: number[] = []
	@NetworkedBasicField("m_nCaptainInspectedHeroID")
	public CaptainInspectedHeroID = 0
	@NetworkedBasicField("m_flSuggestedWardWeights")
	public SuggestedWardWeights: number[] = []
	@NetworkedBasicField("m_nSuggestedWardIndexes")
	public SuggestedWardIndexes: number[] = []
	@NetworkedBasicField("m_iSuggestedLanes")
	public SuggestedLanes: number[] = []
	@NetworkedBasicField("m_iSuggestedLaneWeights")
	public SuggestedLaneWeights: number[] = []
	@NetworkedBasicField("m_bSuggestedLaneRoam")
	public SuggestedLaneRoam: boolean[] = []
	@NetworkedBasicField("m_bSuggestedLaneJungle")
	public SuggestedLaneJungle: boolean[] = []
	@NetworkedBasicField("m_vecNeutralItemsEarned")
	public NeutralItemsEarned: number[] = []
	@NetworkedBasicField("m_vecNeutralItemsConsumed")
	public NeutralItemsConsumed: number[] = []

	public toJSON() {
		return {
			Team: this.Team,
			DataTeam: this.DataTeam,
			WorldTreeModelReplacements: this.WorldTreeModelReplacements,
			DesiredWardPlacement: this.DesiredWardPlacement,
			EnemyStartingPosition: this.EnemyStartingPosition,
			CaptainInspectedHeroID: this.CaptainInspectedHeroID,
			SuggestedWardWeights: this.SuggestedWardWeights,
			SuggestedWardIndexes: this.SuggestedWardIndexes,
			SuggestedLanes: this.SuggestedLanes,
			SuggestedLaneWeights: this.SuggestedLaneWeights,
			SuggestedLaneRoam: this.SuggestedLaneRoam,
			SuggestedLaneJungle: this.SuggestedLaneJungle,
			NeutralItemsEarned: this.NeutralItemsEarned,
			NeutralItemsConsumed: this.NeutralItemsConsumed,
		}
	}
}

import { RegisterFieldHandler } from "wrapper/Objects/NativeToSDK"
RegisterFieldHandler(TeamData, "m_vecDataTeam", (data, new_val) => {
	data.DataTeam = (new_val as Map<string, EntityPropertyType>[]).map(map => new DataTeamPlayer(map))
})
RegisterFieldHandler(TeamData, "m_vecWorldTreeModelReplacements", (data, new_val) => {
	data.WorldTreeModelReplacements = (new_val as Map<string, EntityPropertyType>[]).map(map => new TreeModelReplacement(map))
})
RegisterFieldHandler(TeamData, "m_bWorldTreeState", (_, new_value) => EntityManager.SetWorldTreeState(new_value as bigint[]))
