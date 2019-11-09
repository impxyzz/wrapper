import { EventsSDK } from "wrapper/Imports"
import { Base } from "./Extends/Helper"
import { InitStaker } from "./Module/AutoStacker"
import { InitCombo } from "./Module/Combo"
import { OnExecuteOrder } from "./Module/WithoutFail"
import { Draw } from "./Renderer"

EventsSDK.on("Draw", Draw)
EventsSDK.on("GameEnded", GameEnded)
EventsSDK.on("GameStarted", GameStarted)
EventsSDK.on("EntityCreated", EntityCreated)
EventsSDK.on("EntityDestroyed", EntityDestroyed)
EventsSDK.on("PrepareUnitOrders", OnExecuteOrder)

EventsSDK.on("Tick", () => {
	Tick()
	InitMouse()
	if (!Base.DeadInSide)
		InitCombo()
	InitStaker()
})

import {
	Tick,
	EntityCreated,
	EntityDestroyed,
	GameEnded, GameStarted,
	InitMouse
} from "./Listeners"
