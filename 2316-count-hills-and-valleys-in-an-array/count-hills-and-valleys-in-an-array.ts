function countHillValley(nums: number[]): number {
    let count = 0

    let i = 0
    while (i < nums.length - 1) {
        if (nums[i] === nums[i+1]) {
            nums.splice(i+1, 1)
        } else {
            if (
                (nums[i] > nums[i-1] && nums[i] > nums[i+1]) ||
                (nums[i] < nums[i-1] && nums[i] < nums[i+1])
            ) {
                count++
            }
            i++
        }
    }

    return count
};