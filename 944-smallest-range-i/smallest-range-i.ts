function smallestRangeI(nums: number[], k: number): number {
    // 1. Iterate nums, find max and min
    // 2. Return, if min - max <= k * 2 return 0 else (max - k) - (min + k)

    let min = Infinity
    let max = -Infinity

    nums.forEach(num => {
        if (num < min) min = num
        if (num > max) max = num
    })

    if (max - min <= k * 2) return 0
    return (max - k) - (min + k)
};