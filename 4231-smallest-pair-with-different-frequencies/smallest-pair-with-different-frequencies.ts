function minDistinctFreqPair(nums: number[]): number[] {
    const map = new Map()
    for (const num of nums) {
        map.set(num, (map.get(num) ?? 0) + 1)
    }

    let minVal = Infinity
    for (const [val] of map) {
        minVal = Math.min(minVal, val)
    }

    let nextMinVal = Infinity
    for (const [val, freq] of map) {
        if (val !== minVal && freq !== map.get(minVal)) {
            nextMinVal = Math.min(nextMinVal, val)
        }
    }

    if (nextMinVal === Infinity) return [-1, -1]
    return [minVal, nextMinVal]
};