type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function compactObject(obj: Obj): Obj {    
    if (Array.isArray(obj)) {
        const arr = []

        for (const item of obj) {
            if (Boolean(item)) {
                if (Array.isArray(item) || typeof item === "object") {
                    arr.push(compactObject(item))
                } else {
                    arr.push(item)
                }
            }
        }

        return arr
    } else {
        const map = {}

        for (const key in obj) {
            const item = obj[key]
            
            if (Boolean(item)) {
                if (Array.isArray(item) || typeof item === "object") {
                    map[key] = compactObject(item)
                } else {
                    map[key] = item
                }
            }
        }

        return map
    }
};