function hasTrailingZeros(nums: number[]): boolean {
    // Iterate nums
    // Check if its even then increase the count, since no trailing zero mean the value is even

    let i = 0
    let count = 0

    while (i < nums.length && count < 2) {
        if (nums[i] % 2 === 0) count++
        i++
    }

    return count === 2
};