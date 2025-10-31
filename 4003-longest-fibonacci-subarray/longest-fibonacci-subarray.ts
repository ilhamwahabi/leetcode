function longestSubarray(nums: number[]): number {
    // Time: O(n)
    // Space: (1)

    let max = 2
    
    let count = 2
    for (let i = 0; i < nums.length - 1; i++) {
        const x = nums[i]
        const y = nums[i + 1]
        const z = nums[i + 2]

        if (x + y === z) {
            count++
        } else {
            max = Math.max(count, max)
            count = 2
        }
    }

    return max
};