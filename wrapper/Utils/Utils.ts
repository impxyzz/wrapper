import { dotaunitorder_t } from "../Enums/dotaunitorder_t"
import { ParseResourceLayout } from "../Resources/ParseResource"
import { FileBinaryStream } from "./FileBinaryStream"
import { readFile } from "./readFile"

export const OrdersWithoutSideEffects = [
	dotaunitorder_t.DOTA_UNIT_ORDER_TRAIN_ABILITY,
	dotaunitorder_t.DOTA_UNIT_ORDER_CAST_TOGGLE,
	dotaunitorder_t.DOTA_UNIT_ORDER_CAST_TOGGLE_AUTO,
	dotaunitorder_t.DOTA_UNIT_ORDER_PURCHASE_ITEM,
	dotaunitorder_t.DOTA_UNIT_ORDER_DISASSEMBLE_ITEM,
	dotaunitorder_t.DOTA_UNIT_ORDER_SET_ITEM_COMBINE_LOCK,
	dotaunitorder_t.DOTA_UNIT_ORDER_SELL_ITEM,
	dotaunitorder_t.DOTA_UNIT_ORDER_MOVE_ITEM,
	dotaunitorder_t.DOTA_UNIT_ORDER_EJECT_ITEM_FROM_STASH,
	dotaunitorder_t.DOTA_UNIT_ORDER_CONTINUE, // Announce?
	dotaunitorder_t.DOTA_UNIT_ORDER_GLYPH,
	dotaunitorder_t.DOTA_UNIT_ORDER_RADAR,
]

export function parseEnumString(
	enumObject: any /* { [key: string]: number } */,
	str: string
): number {
	const regex = /(\w+)\s?(\||\&|\+|\-)?/g // it's in variable to preserve RegExp#exec steps
	let lastTok = "",
		res = 0
	while (true) {
		const regexRes = regex.exec(str)
		if (regexRes === null) return res
		const parsedName = (enumObject[regexRes[1]] as number | undefined) ?? 0
		switch (lastTok) {
			case "&":
				res &= parsedName
				break
			case "|":
				res |= parsedName
				break
			case "+":
				res += parsedName
				break
			case "-":
				res -= parsedName
				break
			default:
				res = parsedName
				break
		}
		lastTok = regexRes[2] || ""
	}
}

function FixArray(ar: any[]): any {
	return ar.map(v =>
		v instanceof Map ? MapToObject(v) : Array.isArray(v) ? FixArray(v) : v
	)
}

export function MapToObject(map: Map<any, any>): any {
	const obj: any = {}
	map.forEach(
		(v, k) =>
			(obj[k] =
				v instanceof Map ? MapToObject(v) : Array.isArray(v) ? FixArray(v) : v)
	)
	return obj
}

function ParseExternalReferencesInternal(
	stream: ReadableBinaryStream,
	recursive: boolean,
	map: Map<bigint, string>
): void {
	const layout = ParseResourceLayout(stream)
	if (layout === undefined) return

	const rerl = layout[0].get("RERL")
	if (rerl === undefined) return

	const dataOffset = rerl.ReadUint32(),
		size = rerl.ReadUint32()
	if (size === 0) return

	rerl.pos += dataOffset - 8 // offset from offset
	for (let i = 0; i < size; i++) {
		const id = rerl.ReadUint64()
		const offset = Number(rerl.ReadUint64()),
			prev = rerl.pos
		rerl.pos += offset - 8
		const path = `${rerl.ReadNullTerminatedUtf8String()}_c`
		if (fexists(path)) {
			map.set(id, path)
			if (recursive) {
				const read = fopen(path)
				if (read !== undefined)
					try {
						ParseExternalReferencesInternal(
							new FileBinaryStream(read),
							true,
							map
						)
					} finally {
						read.close()
					}
			}
		}
		rerl.pos = prev
	}
}

export function ParseExternalReferences(
	stream: ReadableBinaryStream,
	recursive = false
): Map<bigint, string> {
	const map = new Map<bigint, string>()
	ParseExternalReferencesInternal(stream, recursive, map)
	return map
}

export function ParseMapName(path: string): Nullable<string> {
	const res = /maps(\/|\\)(.+)\.vpk$/.exec(path)
	if (res === null) return undefined

	const mapName = res[2]
	if (mapName.startsWith("scenes") || mapName.startsWith("prefabs"))
		// that must not be loaded as main map, so we must ignore it
		return undefined
	return mapName
}

export function readJSON(path: string): any {
	const buf = readFile(path, 1)
	if (buf === undefined) throw `Failed to read JSON file at path ${path}`
	const stream = new FileBinaryStream(buf)
	try {
		return JSON.parse(stream.ReadUtf8String(stream.Remaining))
	} catch {
		throw `invalid JSON at path ${path}`
	} finally {
		buf.close()
	}
}

type CompareFunc<T> = (a: T, b: T) => number
function partition<T>(
	items: T[],
	cmpFunc: CompareFunc<T>,
	left: number,
	right: number
) {
	const pivot = items[Math.floor((right + left) / 2)]
	let i = left,
		j = right
	while (i <= j) {
		while (cmpFunc(items[i], pivot) < 0) i++
		while (cmpFunc(items[j], pivot) > 0) j--
		if (i > j) break

		const temp = items[i]
		items[i] = items[j]
		items[j] = temp

		i++
		j--
	}
	return i
}

export function qsort<T>(
	items: T[],
	cmpFunc: CompareFunc<T>,
	left = 0,
	right = items.length - 1
) {
	if (items.length > 1) {
		const index = partition(items, cmpFunc, left, right)
		if (left < index - 1) qsort(items, cmpFunc, left, index - 1)
		if (index < right) qsort(items, cmpFunc, index, right)
	}
	return items
}

function insertMapElement<K, V>(map: Map<K, V>, k: K, v: V): void {
	if (map.has(k) && v instanceof Map) {
		const prevVal = map.get(k)
		if (prevVal instanceof Map) {
			v.forEach((v2, k2) => insertMapElement(prevVal, k2, v2))
		} else map.set(k, v)
	} else map.set(k, v)
}

export function createMapFromMergedIterators<K, V>(
	...iters: IterableIterator<[K, V]>[]
): Map<K, V> {
	const map = new Map<K, V>()
	for (const iter of iters)
		for (const [k, v] of iter) insertMapElement(map, k, v)
	return map
}
