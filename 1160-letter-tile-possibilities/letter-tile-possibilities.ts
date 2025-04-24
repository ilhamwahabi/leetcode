function numTilePossibilities(tiles: string): number {
    // Backtracking
    // Store each char in title into map
    // Pass current str, remaining char map
    // Terminate: remaining char map is zero

    const lookup = new Map()
    for (const char of tiles) {
        if (lookup.has(char)) {
            lookup.set(char, lookup.get(char) + 1)
        } else {
            lookup.set(char, 1)
        }
    }

    const result = new Set()

    function backtracking(s = "", map = lookup) {
        if (s && !result.has(s)) result.add(s)
        if (map.size === 0) return

        for (const [key, value] of map) {
            const copy = new Map(map)

            copy.set(key, value - 1)            
            if (copy.get(key) === 0) copy.delete(key)
            
            backtracking(s + key, copy)
        }
    }
    backtracking()

    return result.size
};