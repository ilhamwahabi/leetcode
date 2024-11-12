function hasIncreasingSubarrays(nums: number[], k: number): boolean {
    // Find the range of item that strictly increase
    // Check if in certain range it's length >= k * 2

    // Time: O(n) + O(n) ~ O(n), linear
    // Space: O(n), linear

    const ranges = []

    let start = 0
    let end = 0
    for (let i = 0; i < nums.length + 1; i++) {
        if (nums[i] > nums[i-1]) {
            end++
        } else {
            if (end - start >= k-1) ranges.push([start, end])
            start = i
            end = i
        }
    }

    for (let i = 0; i < ranges.length; i++) {
        const [start, end] = ranges[i]

        if ((end - start + 1 >= k * 2) || (end === ranges[i+1]?.[0] - 1)) return true
    }
    return false
};