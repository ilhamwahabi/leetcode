function isGood(nums: number[]): boolean {
    // Sort nums
    // Iterate each element if its same with base

    nums.sort((a,b) => a-b)

    let i = 0
    let valid = true
    while (i < nums.length - 1 && valid) {
        if (nums[i] !== i + 1) valid = false
        else i++
    }
    if (nums[nums.length - 1] !== nums[nums.length - 2]) valid = false
    return valid
};