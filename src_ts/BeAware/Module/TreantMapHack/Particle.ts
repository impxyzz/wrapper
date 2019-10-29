import { ArrayExtensions, Entity, LocalPlayer, ParticlesSDK, Unit, Vector3 } from "wrapper/Imports"
import { State } from "./Menu"

var treant_eyes: Unit[] = [], pars = new Map<Entity, number>()
export function Destroy(ent: Entity, id: number) {
	if (ArrayExtensions.arrayRemove(treant_eyes, ent))
		pars.delete(ent)
}
export function Create(ent: Entity, id: number) {
	if (ent instanceof Unit && ent.m_pBaseEntity instanceof C_DOTA_NPC_Treant_EyesInTheForest) {
		treant_eyes.push(ent)
		if (!State.value)
			return
		var par = ParticlesSDK.Create("particles/ui_mouseactions/range_display.vpcf", ParticleAttachment_t.PATTACH_ABSORIGIN_FOLLOW, ent)
		ParticlesSDK.SetControlPoint(par, 1, new Vector3(100, 0, 0))
		pars.set(ent, par)
	}
}
export function Tick() {
	if (!State.value)
		return
	var local_team_flag = 1 << LocalPlayer.Team
	// loop-optimizer: KEEP
	treant_eyes.forEach((ent, i) => {
		if (ent.IsAlive) {
			ent.IsVisibleForTeamMask |= local_team_flag
			ent.m_pBaseEntity.m_iTaggedAsVisibleByTeam |= local_team_flag
			// |= 1 << 2 is EF_IN_STAGING_LIST
			// |= 1 << 4 is EF_DELETE_IN_PROGRESS
			// 1 << 5 is EF_NODRAW
			// &= ~(1 << 7) is trigger
			// 1 << 9 is EF_NODRAW???
			ent.Flags &= ~(1 << 7)
			ent.Flags |= 1 << 3
			return true
		} else {
			ent.Flags |= 1 << 7
			ent.Flags &= ~(1 << 3)
			treant_eyes.splice(i, 1)
			ParticlesSDK.Destroy(pars.get(ent), true)
			pars.delete(ent)
			return true
		}
	})
	return false
}
export function Init() {
	treant_eyes = []
	// loop-optimizer: POSSIBLE_UNDEFINED
	pars.forEach(par => ParticlesSDK.Destroy(par, true))
	pars.clear()
}
