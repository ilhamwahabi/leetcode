function getFinalState(nums: number[], k: number, multiplier: number): number[] {
    // while k > 0
    // Iterate nums, find index of smallest number
    // Change it to nums[i] * multiplier, k--

    // Time: O(m * n) ~ O(n^2), quadratic
    // Space: O(1), constant

    let ops = k
    while (ops > 0) {
        let minIndex = 0
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] < nums[minIndex]) minIndex = i
        }
        nums[minIndex] *= multiplier
        ops--
    }

    return nums
};