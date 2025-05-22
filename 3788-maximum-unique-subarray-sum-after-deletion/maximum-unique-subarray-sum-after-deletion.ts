function maxSum(nums: number[]): number {
    // Iterate nums
    // Store each number that >=1 and unique, also if it's <1 save the max value
    // If no number that is >= 1 then return that prev max

    // Time: O(n)
    // Space: O(n)

    const set = new Set()
    let pos = 0
    let max = -Infinity

    for (const num of nums) {
        if (num >= 1 && !set.has(num)) {
            pos += num
            set.add(num)
        } else if (num < 1) {
            max = Math.max(max, num)
        }
    }

    return pos > 0 ? pos : max
};