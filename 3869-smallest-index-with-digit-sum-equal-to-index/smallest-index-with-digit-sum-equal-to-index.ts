function smallestIndex(nums: number[]): number {
    // Iterate num in nums
    // For each num calculate the total digit, if total === i, return it
    // else return -1

    // Time: O(n) * O(m)
    // Space: O(1)

    for (let i = 0; i < nums.length; i++) {
        let total = 0
        
        let curr = nums[i]
        while (curr > 0) {
            total += curr % 10
            curr = Math.floor(curr / 10)
        }

        if (total === i) return i
    }

    return -1
};