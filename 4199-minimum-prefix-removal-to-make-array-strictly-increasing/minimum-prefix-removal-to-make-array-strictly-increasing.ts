function minimumPrefixLength(nums: number[]): number {
    let inc = 1
    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] >= nums[i + 1]) {
            break
        }
        inc++
    }

    return nums.length - inc
};