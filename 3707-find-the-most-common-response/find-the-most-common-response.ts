function findCommonResponse(responses: string[][]): string {
    // Iterate each response in responses
    // Iterate item in each response, if it's not added yet, add it to hashmap
    // Iterate hashmap, return the smallest

    // Time: O(n) * O(m)
    // Space: O(n)

    const map = {}
    let max = 0

    for (const response of responses) {
        const set = new Set()
        for (const item of response) {
            if (!set.has(item)) {
                map[item] ? map[item]++ : map[item] = 1
                max = Math.max(map[item], max)
                set.add(item)
            }
        }
    }

    let result = ""
    let count = 0
    for (const key in map) {
        if (map[key] === max) {
            if (result === "" || (key < result && map[key] >= count)) {
                result = key
                count = map[key]
            }
        }
    }
    return result
};