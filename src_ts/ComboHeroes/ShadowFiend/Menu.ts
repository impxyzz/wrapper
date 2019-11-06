import { Menu as MenuSDK } from "wrapper/Imports"

import InitAbility from "./Extends/Abilities"
import InitItems from "./Extends/Items"

let Items = new InitItems(),
	Abilities = new InitAbility()

let Menu = MenuSDK.AddEntry(["Heroes", "Shadow Fiend"]),
	State = Menu.AddToggle("Enable")

let array_ability: string[] = [
	// Abilities.Shadowraze1.toString(),
	// Abilities.Shadowraze2.toString(),
	// Abilities.Shadowraze3.toString(),
	Abilities.Requiem.toString(),
]

let array_items: string[] = [
	Items.Cyclone.toString(),
	Items.Sheeps.toString(),
	Items.Blink.toString(),
	Items.Orchid.toString(),
	Items.Discord.toString(),
	Items.Ethereal.toString(),
	Items.Dagon.toString(),
	Items.Shivas.toString(),
	Items.BlackKingBar.toString(),
	Items.Bloodthorn.toString(),
]
// let array_ability_steal: string[] = [
// 	Abilities.Shadowraze1.toString(),
// 	Abilities.Shadowraze2.toString(),
// 	Abilities.Shadowraze3.toString(),
// ]

let
	// AutoStealTree = Menu.AddNode("Auto Steal"),
	// AutoStealState = AutoStealTree.AddToggle("Enable", true),
	// AutoStealAbility = AutoStealTree.AddImageSelector("Ability", array_ability_steal, new Map(array_ability_steal.map(name => [name, true]))),

	Combo = Menu.AddNode("Combo"),
	// HarassModeCombo = Combo.AddSwitcher("Orb Walker", ["Off", "Move to cursor", "Move to target"]),
	ComboKeyItem = Combo.AddKeybind("Combo Key"),
	NearMouse = Combo.AddSlider("Near Mouse (Range)", 800, 100, 1000),
	СomboItems = Combo.AddImageSelector("Items", array_items, new Map(array_items.map(name => [name, true]))),
	СomboAbility = Combo.AddImageSelector("Ability", array_ability, new Map(array_ability.map(name => [name, true]))),
	Drawing = Menu.AddNode("Drawing"),
	DrawingStatus = Drawing.AddToggle("Draw target", true)
// DrawingStatusKillSteal = Drawing.AddToggle("Draw Kill Steal", true)

let BladeMail = Menu.AddNode("Blade Mail"),
	BladeMailCancel = BladeMail.AddToggle("Cancel Combo and Auto Steal", true)

export {
	DrawingStatus,
	// AutoStealState,
	// AutoStealAbility,
	// DrawingStatusKillSteal
}

export {
	State,
	NearMouse,
	СomboItems,
	ComboKeyItem,
	СomboAbility,
	BladeMailCancel,
	// HarassModeCombo
}
