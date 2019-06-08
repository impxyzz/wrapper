import { arrayRemoveCallBack, arrayRemove } from "./ArrayExtensions";

export function addArrayInMap<K, V>(map: Map<K, V[]>, key: K, value: V): void {
	const values = map.get(key);

	if (values !== undefined) {
		values.push(value)
		map.set(key, values);
	}
	else map.set(key, [value]);
}

export function findArrayInMap<K, V>(map: Map<K, V[]>, key: K, find: V | ((value: V) => boolean)): V {
	const values = map.get(key);

	if (values === undefined)
		return;

	return find instanceof Function
		? values.find(find) 
		: values.find(value => value === value);
}

export function removeArrayInMap<K, V>(map: Map<K, V[]>, key: K, find: V | ((value: V) => boolean)): boolean {
	const values = map.get(key);

	if (values === undefined)
		return false;

	if (find instanceof Function ? !arrayRemoveCallBack(values, find) : arrayRemove(values, find))
		return false;

	values.length === 0 ? map.delete(key) : map.set(key, values);
	return true;
}