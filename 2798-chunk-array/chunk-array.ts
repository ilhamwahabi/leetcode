type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function chunk(arr: Obj[], size: number): Obj[][] {
    const result = []

    for (const item of arr) {
        const last = result[result.length - 1]
        if (!last || last.length === size) result.push([])

        result[result.length - 1].push(item)
    }

    return result
};
