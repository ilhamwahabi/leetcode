function absDifference(nums: number[], k: number): number {
    // Sort nums, ascending
    // Iterate, use two pointer, store mins and maxs value

    nums.sort((a,b) => a - b)

    let mins = 0
    let maxs = 0
    for (let i = 0; i < Math.min(k, nums.length); i++) {
        mins += nums[i]
        maxs += nums[nums.length - 1 - i]
    }

    return Math.abs(maxs - mins)
};