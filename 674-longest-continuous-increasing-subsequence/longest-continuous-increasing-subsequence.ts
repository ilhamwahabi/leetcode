function findLengthOfLCIS(nums: number[]): number {
    let max = 1
    let length = 1

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i-1]) {
            length++
            if (length > max) max = length
        } else {
            length = 1
        }
    }

    return max
};