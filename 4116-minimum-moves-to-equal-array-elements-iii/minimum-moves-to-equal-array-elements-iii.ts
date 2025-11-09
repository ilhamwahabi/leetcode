function minMoves(nums: number[]): number {
    // Iterate nums, find max num
    // Iterate nums again, count diff between current num with max nums

    let max = -Infinity
    for (const num of nums) {
        max = Math.max(max, num)
    }

    let result = 0
    for (const num of nums) {
        result += max - num
    }
    return result
};