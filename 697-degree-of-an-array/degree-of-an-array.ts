function findShortestSubArray(nums: number[]): number {
    // Find all index occurances for each num, find max
    // Iterate map, check if its length === max, then length is value[last] - value first
    // Check all to find min

    const map = {}
    let max = 0
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]

        map[num] ? map[num].push(i) : map[num] = [i]
        if (map[num].length > max) max = map[num].length
    }

    let min = Infinity
    for (const key in map) {
        const value = map[key]
        const length = value[value.length - 1] - value[0] + 1

        if (value.length === max && length < min) min = length
    }
    return min
};