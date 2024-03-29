import { Color } from "../Base/Color"
import { Rectangle } from "../Base/Rectangle"
import { Vector2 } from "../Base/Vector2"
import { Vector3 } from "../Base/Vector3"
import { GUIInfo } from "../GUI/GUIInfo"
import { EventsSDK } from "../Managers/EventsSDK"
import { PARTICLE_RENDER_NAME } from "../Managers/ParticleManager"
import { RendererSDK } from "../Native/RendererSDK"
import { Base, IMenu } from "./Base"
import { Button } from "./Button"
import { ColorPicker } from "./ColorPicker"
import { Dropdown } from "./Dropdown"
import { DynamicImageSelector } from "./DynamicImageSelector"
import { ImageSelector } from "./ImageSelector"
import { IMenuParticlePicker } from "./ITypes"
import { KeyBind } from "./KeyBind"
import { Slider } from "./Slider"
import { Toggle } from "./Toggle"

export class Node extends Base {
	public static OnWindowSizeChanged(): void {
		Node.arrowSize.x = GUIInfo.ScaleWidth(Node.origArrowSize.x)
		Node.arrowSize.y = GUIInfo.ScaleHeight(Node.origArrowSize.y)
		Node.arrowOffset.x = GUIInfo.ScaleWidth(8)
		Node.arrowOffset.y = GUIInfo.ScaleHeight(8)
		Node.arrowTextGap = GUIInfo.ScaleWidth(10)
		Node.iconSize.x = GUIInfo.ScaleWidth(24)
		Node.iconSize.y = GUIInfo.ScaleHeight(24)
		Node.iconOffset.x = GUIInfo.ScaleWidth(12)
		Node.iconOffset.y = GUIInfo.ScaleHeight(8)
		Node.textOffsetNode.x = GUIInfo.ScaleWidth(15)
		Node.textOffsetNode.y = GUIInfo.ScaleHeight(13)
		Node.textOffsetWithIcon.x = GUIInfo.ScaleWidth(48)
		Node.textOffsetWithIcon.y = Node.textOffsetNode.y
		Node.scrollbarWidth = GUIInfo.ScaleWidth(3)
		Node.scrollbarOffset.x = GUIInfo.ScaleWidth(2)
		Node.scrollbarOffset.y = GUIInfo.ScaleHeight(2)
	}

	private static readonly arrowActivePath = "menu/arrow_active.svg"
	private static readonly arrowInactivePath = "menu/arrow_inactive.svg"
	private static readonly scrollbarPath = "menu/scrollbar.svg"
	private static scrollbarWidth = 0
	private static readonly scrollbarOffset = new Vector2()
	private static readonly origArrowSize = RendererSDK.GetImageSize(
		Node.arrowInactivePath
	)
	private static readonly arrowSize = new Vector2()
	private static readonly arrowOffset = new Vector2()
	private static arrowTextGap = 0
	private static readonly iconSize = new Vector2()
	private static readonly iconOffset = new Vector2()
	private static readonly textOffsetNode = new Vector2(15, 14)
	private static readonly textOffsetWithIcon = new Vector2()

	public entries: Base[] = []
	public SaveUnusedConfigs = false
	public SortNodes = true
	public EntriesSizeX = 0
	public EntriesSizeY = 0
	protected configStorage = Object.create(null)
	protected activeElement?: Base
	protected IsOpen_ = false
	protected readonly textOffset = Node.textOffsetNode
	private ScrollPosition = 0
	private IsAtScrollEnd = true
	private VisibleEntries = 0

	constructor(
		parent: IMenu,
		name: string,
		private iconPath_ = "",
		tooltip = "",
		private iconRound_ = -1
	) {
		super(parent, name, tooltip)
	}

	public get IsOpen(): boolean {
		return this.parent.IsOpen && this.IsVisible && this.IsOpen_
	}
	public set IsOpen(val: boolean) {
		if (this.IsOpen_ === val) return
		if (!val) this.OnMouseLeftUp(true)
		this.IsOpen_ = val
		this.isActive = val
	}
	public get IconPath(): string {
		return this.iconPath_
	}
	public set IconPath(val: string) {
		this.iconPath_ = val
		this.Update()
	}

	public get IconRound(): number {
		return this.iconRound_
	}
	public set IconRound(val: number) {
		this.iconRound_ = val
		this.Update()
	}

	public get ConfigValue() {
		if (!this.SaveUnusedConfigs && this.entries.length === 0) return undefined
		if (!this.SaveUnusedConfigs) this.configStorage = Object.create(null)
		this.entries.forEach(entry => {
			if (entry.SaveConfig)
				this.configStorage[entry.InternalName] = entry.ConfigValue
		})
		return this.configStorage
	}
	public set ConfigValue(obj) {
		if (obj === undefined || typeof obj !== "object" || Array.isArray(obj))
			return
		if (this.SaveUnusedConfigs) this.configStorage = obj
		this.entries.forEach(entry => {
			if (entry.SaveConfig) entry.ConfigValue = obj[entry.InternalName]
		})
	}
	public get ClassPriority(): number {
		return 7
	}
	public get ScrollVisible() {
		let remaining = -this.VisibleEntries
		for (const entry of this.entries) if (entry.IsVisible) remaining++
		return remaining > 0
	}
	private get EntriesSizeX_(): number {
		let width = 0
		for (const entry of this.entries)
			if (entry.IsVisible) width = Math.max(width, entry.Size.x)
		return width
	}
	private get EntriesSizeY_(): number {
		const visibleEntries = this.VisibleEntries
		let height = 0,
			cnt = 0,
			skip = this.ScrollPosition
		for (const entry of this.entries) {
			if (!entry.IsVisible || skip-- > 0) continue
			height += entry.Size.y
			if (++cnt >= visibleEntries) break
		}
		return height
	}
	private get EntriesRect() {
		const pos = this.Position.Clone().AddScalarX(this.parent.EntriesSizeX),
			height = this.EntriesSizeY
		pos.y = Math.min(pos.y, RendererSDK.WindowSize.y - height)
		return new Rectangle(
			pos,
			pos.Clone().AddScalarX(this.EntriesSizeX).AddScalarY(height)
		)
	}
	public OnConfigLoaded() {
		this.entries.forEach(entry => {
			if (entry.SaveConfig) entry.OnConfigLoaded()
		})
	}
	public Update(recursive = false): boolean {
		if (!super.Update(recursive)) return false
		this.Size.x =
			this.nameSize.x +
			Node.arrowSize.x +
			Node.arrowOffset.x +
			Node.arrowTextGap
		if (this.IconPath !== "") this.Size.AddScalarX(Node.textOffsetWithIcon.x)
		else this.Size.AddScalarX(this.textOffset.x)
		if (recursive) for (const entry of this.entries) entry.Update(true)
		this.SortEntries()
		this.UpdateScrollbar()
		this.EntriesSizeX = this.EntriesSizeX_
		this.EntriesSizeY = this.EntriesSizeY_
		return true
	}

	public Render(): void {
		let updatedEntries = false
		for (const entry of this.entries) {
			if (entry.QueuedUpdate) {
				entry.QueuedUpdate = false
				entry.Update(entry.QueuedUpdateRecursive)
			}
			updatedEntries = updatedEntries || entry.NeedsRootUpdate
			entry.NeedsRootUpdate = false
		}
		if (updatedEntries) {
			this.Update()
			updatedEntries = false
		}
		if (this.IsOpen) {
			this.UpdateScrollbar()
			const position = this.Position.Clone().AddScalarX(
				this.parent.EntriesSizeX
			)
			position.y = Math.min(position.y, this.WindowSize.y - this.EntriesSizeY)
			let skip = this.ScrollPosition,
				visibleEntries = this.VisibleEntries
			for (const entry of this.entries) {
				if (!entry.IsVisible || skip-- > 0) continue
				position.CopyTo(entry.Position)
				if (entry.QueuedUpdate) {
					entry.QueuedUpdate = false
					entry.Update(entry.QueuedUpdateRecursive)
				}
				updatedEntries = updatedEntries || entry.NeedsRootUpdate
				entry.Render()
				position.AddScalarY(entry.Size.y)
				if (--visibleEntries <= 0) break
			}
			if (updatedEntries) this.Update()
		}

		super.Render(this.parent instanceof Node) // only draw bars on non-root nodes

		const textPos = this.Position.Clone()
		if (this.IconPath !== "") {
			textPos.AddForThis(Node.textOffsetWithIcon)
			RendererSDK.Image(
				this.IconPath,
				this.Position.Add(Node.iconOffset),
				this.IconRound,
				Node.iconSize
			)
		} else textPos.AddForThis(this.textOffset)

		this.RenderTextDefault(this.Name, textPos)
		const arrowPos = this.Position.Clone()
			.AddScalarX(this.parent.EntriesSizeX)
			.AddScalarY(this.Size.y)
			.SubtractForThis(Node.arrowOffset)
			.SubtractForThis(Node.arrowSize)
		if (this.IsOpen)
			RendererSDK.Image(Node.arrowActivePath, arrowPos, -1, Node.arrowSize)
		else RendererSDK.Image(Node.arrowInactivePath, arrowPos, -1, Node.arrowSize)
	}
	public PostRender(): void {
		if (!this.IsOpen) return
		for (const entry of this.entries) if (entry.IsVisible) entry.PostRender()
		if (this.ScrollVisible) {
			const rect = this.GetScrollbarRect(
				this.GetScrollbarPositionsRect(this.EntriesRect)
			)
			RendererSDK.Image(Node.scrollbarPath, rect.pos1, -1, rect.Size)
		}
	}

	public OnParentNotVisible(ignoreOpen = false): void {
		if (ignoreOpen || this.IsOpen)
			this.entries.forEach(entry => entry.OnParentNotVisible())
	}

	public OnMouseLeftDown(): boolean {
		if (this.activeElement !== undefined || this.IsHovered) return false
		if (!this.IsOpen) return true
		for (const entry of this.entries)
			if (entry.IsVisible && !entry.OnPreMouseLeftDown()) {
				this.activeElement = entry
				return false
			}
		for (const entry of this.entries)
			if (entry.IsVisible && !entry.OnMouseLeftDown()) {
				this.activeElement = entry
				return false
			}
		return true
	}
	public OnMouseLeftUp(ignoreMyself = false): boolean {
		if (!ignoreMyself && this.IsHovered) {
			this.IsOpen = !this.IsOpen
			if (this.IsOpen)
				this.parent.entries.forEach(entry => {
					if (entry instanceof Node && entry !== this) entry.IsOpen = false
				})
			else this.OnParentNotVisible(true)
			return false
		}
		if (this.activeElement === undefined) return true
		const ret = this.activeElement.OnMouseLeftUp()
		this.activeElement = undefined
		Base.SaveConfigASAP = true
		return ret
	}
	public OnMouseWheel(up: boolean): boolean {
		if (!this.IsOpen) return false
		if (this.ScrollVisible) {
			const rect = this.EntriesRect
			if (rect.Contains(this.MousePosition)) {
				if (up) {
					if (this.ScrollPosition > 0) {
						this.ScrollPosition--
						this.UpdateScrollbar()
					}
				} else if (!this.IsAtScrollEnd) {
					this.ScrollPosition++
					this.UpdateScrollbar()
				}
				return true
			}
		}
		return this.entries.some(entry =>
			entry instanceof Node ? entry.OnMouseWheel(up) : false
		)
	}
	public AddToggle(
		name: string,
		defaultValue: boolean = false,
		tooltip = "",
		priority = 0
	): Toggle {
		return this.AddEntry(
			new Toggle(this, name, defaultValue, tooltip),
			priority
		)
	}
	public AddSlider(
		name: string,
		defaultValue = 0,
		min = 0,
		max = 100,
		precision = 0,
		tooltip = "",
		priority = 0
	): Slider {
		return this.AddEntry(
			new Slider(this, name, defaultValue, min, max, precision, tooltip),
			priority
		)
	}
	public AddNode(
		name: string,
		iconPath = "",
		tooltip = "",
		iconRound = -1,
		priority = 0
	): Node {
		const node = this.entries.find(
			entry => entry instanceof Node && entry.InternalName === name
		) as Node
		if (node !== undefined) {
			if (node.IconPath === "") node.IconPath = iconPath
			// TODO: should we do the same for tooltips?
			return node
		}
		return this.AddEntry(
			new Node(this, name, iconPath, tooltip, iconRound),
			priority
		)
	}
	public AddDropdown(
		name: string,
		values: string[],
		defaultValue = 0,
		tooltip = "",
		priority = 0
	): Dropdown {
		return this.AddEntry(
			new Dropdown(this, name, values, defaultValue, tooltip),
			priority
		)
	}
	public AddKeybind(name: string, defaultKey = "", tooltip = "", priority = 0) {
		return this.AddEntry(new KeyBind(this, name, defaultKey, tooltip), priority)
	}
	public AddImageSelector(
		name: string,
		values: string[],
		defaultValues = new Map<string, boolean>(),
		tooltip = "",
		createdDefaultState = false,
		priority = 0
	) {
		return this.AddEntry(
			new ImageSelector(
				this,
				name,
				values,
				defaultValues,
				tooltip,
				createdDefaultState
			),
			priority
		)
	}
	public AddDynamicImageSelector(
		name: string,
		values: string[],
		defaultValues = new Map<
			string,
			[
				boolean,
				/** default state */ boolean,
				/** default show */ boolean,
				/** show */ number /** priority */
			]
		>(),
		allDefaultState = false,
		tooltip = "",
		priority = 0
	) {
		return this.AddEntry(
			new DynamicImageSelector(
				this,
				name,
				values,
				defaultValues,
				allDefaultState,
				tooltip
			),
			priority
		)
	}
	public AddButton(name: string, tooltip = "", priority = 0): Button {
		return this.AddEntry(new Button(this, name, tooltip), priority)
	}

	public AddVector2(
		name: string,
		vector: Vector2,
		minVector?: Vector2 | number,
		maxVector?: Vector2 | number
	) {
		const node = this.AddNode(name)

		if (typeof minVector === "number")
			minVector = new Vector2(minVector, minVector)

		if (!(minVector instanceof Vector2)) minVector = new Vector2(0, 0)

		if (typeof maxVector === "number")
			maxVector = new Vector2(maxVector, maxVector)

		if (!(maxVector instanceof Vector2)) maxVector = new Vector2(95, 95)

		const xSlider = node.AddSlider(
			"Position: X",
			vector.x,
			minVector.x,
			maxVector.x
		)
		const ySlider = node.AddSlider(
			"Position: Y",
			vector.y,
			minVector.y,
			maxVector.y
		)

		return {
			node,
			X: xSlider,
			Y: ySlider,
			get Vector() {
				return new Vector2(xSlider.value, ySlider.value)
			},
			set Vector({ x, y }: Vector2) {
				xSlider.value = x
				ySlider.value = y
			},
		}
	}
	public AddVector3(
		name: string,
		vector: Vector3,
		minVector?: Vector3 | number,
		maxVector?: Vector3 | number
	) {
		const node = this.AddNode(name)

		if (typeof minVector === "number")
			minVector = new Vector3(minVector, minVector, minVector)

		if (!(minVector instanceof Vector3)) minVector = new Vector3(0, 0)

		if (typeof maxVector === "number")
			maxVector = new Vector3(maxVector, maxVector, maxVector)

		if (!(maxVector instanceof Vector3)) maxVector = new Vector3(95, 95)

		const xSlider = node.AddSlider(
			"Position: X",
			vector.x,
			minVector.x,
			maxVector.x
		)
		const ySlider = node.AddSlider(
			"Position: Y",
			vector.y,
			minVector.y,
			maxVector.y
		)
		const zSlider = node.AddSlider(
			"Position: Z",
			vector.z,
			minVector.z,
			maxVector.z
		)

		return {
			node,
			X: xSlider,
			Y: ySlider,
			Z: zSlider,
			get Vector() {
				return new Vector3(xSlider.value, ySlider.value, zSlider.value)
			},
			set Vector({ x, y, z }: Vector3) {
				xSlider.value = x
				ySlider.value = y
				zSlider.value = z
			},
		}
	}
	public AddColorPicker(
		name: string,
		defaultColor: Color = new Color(0, 255, 0),
		tooltip = "",
		priority = 0
	): ColorPicker {
		return this.AddEntry(
			new ColorPicker(this, name, defaultColor, tooltip),
			priority
		)
	}

	public AddParticlePicker(
		name: string,
		color: Color | number = new Color(0, 255, 0),
		render: PARTICLE_RENDER_NAME[],
		addStateToTree?: boolean[]
	): IMenuParticlePicker {
		const node = this.AddNode(name)

		let state: Nullable<Toggle>
		if (addStateToTree !== undefined && addStateToTree[0])
			state = node.AddToggle("State", addStateToTree[1])

		if (typeof color === "number") color = new Color(color, color, color)

		return {
			Node: node,
			State: state,
			Color: node.AddColorPicker("Color", color),
			Width: node.AddSlider("Width", 15, 1, 150),
			Style: node.AddDropdown("Style", render),
		}
	}
	private GetScrollbarPositionsRect(elementsRect: Rectangle): Rectangle {
		const additionalOffset = this.parent instanceof Node ? Base.barWidth : 0
		return new Rectangle(
			new Vector2(
				elementsRect.pos1.x + Node.scrollbarOffset.x + additionalOffset,
				elementsRect.pos1.y + Node.scrollbarOffset.y
			),
			new Vector2(
				elementsRect.pos1.x +
					Node.scrollbarOffset.x +
					additionalOffset +
					Node.scrollbarWidth,
				elementsRect.pos2.y - Node.scrollbarOffset.y
			)
		)
	}
	private GetScrollbarRect(scrollbarPositionsRect: Rectangle): Rectangle {
		const positionsSize = scrollbarPositionsRect.Size
		const scrollbarSize = new Vector2(
			Node.scrollbarWidth,
			(positionsSize.y * this.VisibleEntries) / this.entries.length
		)
		const scrollbarPos = scrollbarPositionsRect.pos1
			.Clone()
			.AddScalarY((positionsSize.y * this.ScrollPosition) / this.entries.length)
		return new Rectangle(scrollbarPos, scrollbarPos.Add(scrollbarSize))
	}
	private UpdateVisibleEntries() {
		this.VisibleEntries = 0
		this.IsAtScrollEnd = true
		const maxHeight = this.WindowSize.y
		let height = 0,
			skip = this.ScrollPosition
		for (let i = 0; i < this.entries.length; i++) {
			const entry = this.entries[i]
			if (!entry.IsVisible || skip-- > 0) continue
			height += entry.Size.y
			this.VisibleEntries++
			if (height >= maxHeight) {
				if (i < this.entries.length - 1) this.IsAtScrollEnd = false
				break
			}
		}
	}
	private UpdateScrollbar() {
		this.ScrollPosition = Math.max(
			Math.min(this.ScrollPosition, this.entries.length - 1),
			0
		)
		this.UpdateVisibleEntries()
		while (this.ScrollPosition > 0) {
			this.ScrollPosition--
			const prevVisibleEntries = this.VisibleEntries
			this.UpdateVisibleEntries()
			if (this.VisibleEntries <= prevVisibleEntries) {
				this.ScrollPosition++
				this.UpdateVisibleEntries()
				break
			}
		}
	}

	private AddEntry<T extends Base>(entry: T, priority = entry.Priority): T {
		entry.Priority = priority
		this.entries.push(entry)
		this.SortEntries()
		this.UpdateScrollbar()
		Base.ForwardConfigASAP = true
		return entry
	}

	private SortEntries(): void {
		if (!this.SortNodes) return
		this.entries = this.entries
			.sort((a, b) => a.Name.localeCompare(b.Name))
			.sort((a, b) => a.ClassPriority - b.ClassPriority)
			.sort((a, b) => a.Priority - b.Priority)
			.sort((a, b) => {
				if (a.InternalName === "State") return -1
				if (b.InternalName === "State") return 1
				return 0
			})
	}
}

EventsSDK.on("WindowSizeChanged", () => Node.OnWindowSizeChanged())
