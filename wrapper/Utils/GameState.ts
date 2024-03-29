import { DOTAGameUIState } from "../Enums/DOTAGameUIState"
import { Flow } from "../Enums/Flow"
import { Team } from "../Enums/Team"

export const GameState = new (class CGameState {
	public CurrentServerTick = -1
	public IsInputCaptured = false
	public UIState = DOTAGameUIState.DOTA_GAME_UI_STATE_DASHBOARD
	public MapName = "<empty>"
	public AddonName = ""
	public IsInDraw = false
	/**
	 * Equals GameRules?.RawGameTime ?? 0
	 *
	 * Purpose: that's much faster than GameRules?.RawGameTime ?? 0,
	 * and removes indirect dependency on EntityManager
	 */
	public RawGameTime = 0
	public LocalTeam = Team.Observer
	private OBSBypassEnabled_ = false

	public get Ping() {
		return (GetLatency(Flow.IN) + GetLatency(Flow.OUT)) * 1000
	}
	public get AvgPing() {
		return (GetAvgLatency(Flow.IN) + GetAvgLatency(Flow.OUT)) * 1000
	}
	public get IsConnected(): boolean {
		return this.MapName !== "<empty>"
	}
	public get OBSBypassEnabled(): boolean {
		return this.OBSBypassEnabled_
	}
	public set OBSBypassEnabled(val: boolean) {
		ToggleOBSBypass(val)
		this.OBSBypassEnabled_ = val
	}
	public GetLatency(flow: Flow = Flow.IN) {
		return GetLatency(flow)
	}
	public GetAvgLatency(flow: Flow = Flow.IN) {
		return GetAvgLatency(flow)
	}
	public ExecuteCommand(command: string) {
		return SendToConsole(command)
	}
})()
