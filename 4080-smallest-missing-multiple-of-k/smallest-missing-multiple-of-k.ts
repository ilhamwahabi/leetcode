function missingMultiple(nums: number[], k: number): number {
    // Time: O(n log(n)) + O(n)
    // Space: O(1)

    nums.sort((a,b) => a - b)

    let curr = k
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === curr) {
            curr += k
        }
    }
    return curr
};