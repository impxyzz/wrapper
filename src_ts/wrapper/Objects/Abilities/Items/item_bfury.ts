import Item from "../../Base/Item"

export default class item_bfury extends Item {
	readonly m_pBaseEntity: CDOTA_Item_Battlefury

	get CastRangeOnWard(): number {
		return this.GetSpecialValue("cast_range_ward")
	}
}