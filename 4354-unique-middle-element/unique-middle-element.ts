function isMiddleElementUnique(nums: number[]): boolean {
    const middle = nums[Math.floor(nums.length / 2)]

    let count = 0
    for (const num of nums) {
        if (num === middle) count++
    }

    return count === 1
};