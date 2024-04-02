function isMonotonic(nums: number[]): boolean {
    let isIncrease = false
    let isDecrease = false

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) isIncrease = true
        else if (nums[i] < nums[i - 1]) isDecrease = true

        if (isIncrease && isDecrease) return false
    }

    return true
};