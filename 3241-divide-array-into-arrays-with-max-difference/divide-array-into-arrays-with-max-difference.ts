function divideArray(nums: number[], k: number): number[][] {
    // Sort nums
    // Iterate nums, i += 3, check if nums[2] - nums[0] <= k, if not return []

    nums.sort((a,b) => a-b)

    const result = []
    for (let i = 0; i < nums.length; i += 3) {
        if (nums[i + 2] - nums[i] > k) return []
        result.push(nums.slice(i, i + 3))
    }
    return result
};