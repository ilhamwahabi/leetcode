function findMaxK(nums: number[]): number {
    nums.sort((a,b) => Math.abs(b) - Math.abs(a))

    for (let i = 0; i < nums.length - 1; i++) {
        if (
            (nums[i] === Math.abs(nums[i+1]) || Math.abs(nums[i]) === nums[i+1]) &&
            ((nums[i] < 0 && nums[i+1] > 0) || (nums[i] > 0 && nums[i+1] < 0))
        ) return Math.abs(nums[i])
    }

    return -1
};