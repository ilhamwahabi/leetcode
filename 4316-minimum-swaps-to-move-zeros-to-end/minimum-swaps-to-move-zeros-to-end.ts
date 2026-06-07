function minimumSwaps(nums: number[]): number {
    // Count total of 0's as total
    // Count how many 0's already in bottom from total
    // Return it's result

    let total = 0
    for (const num of nums) {
        if (num === 0) total++
    }

    let totalInBottom = 0
    for (let i = nums.length - 1; i > nums.length - 1 - total; i--) {
        const num = nums[i]
        if (num === 0) totalInBottom++
    }

    return total - totalInBottom
};