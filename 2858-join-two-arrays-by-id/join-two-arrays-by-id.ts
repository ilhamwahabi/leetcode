type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type ArrayType = { "id": number } & Record<string, JSONValue>;

function join(arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] {
    // Store arr1 in Map, with the id as a key
    // Iterate arr2, check if it's id exist in arr1 hashmap, if not add it, if exist merge
    // Convert arr1 Map into array

    const map = new Map()

    for (const item of arr1) {
        const id = item.id
        map.set(id, item)
    }

    for (const item of arr2) {
        const id = item.id
        if (map.get(id)) {
            const value = { ...map.get(id), ...item }
            map.set(id, value)
        } else {
            map.set(id, item)
        }
    }

    const result = []
    for (const [key, value] of map) {
        result.push(value)
    }
    result.sort((a, b) => a.id - b.id)
    return result
};