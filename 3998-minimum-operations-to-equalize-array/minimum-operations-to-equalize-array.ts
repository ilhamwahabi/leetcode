function minOperations(nums: number[]): number {
    let isAllEqual = true
    for (const num of nums) {
        if (num !== nums[0]) isAllEqual = false
    }

    return isAllEqual ? 0 : 1
};