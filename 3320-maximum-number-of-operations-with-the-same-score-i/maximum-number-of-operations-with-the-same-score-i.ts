function maxOperations(nums: number[]): number {
    // Iterate from 2 to nums, increment +2
    // Compare current sum, if wrong return false

    const sum = nums[0] + nums[1]
    let step = 1

    for (let i = 2; i < nums.length; i += 2) {
        if (nums[i] + nums[i+1] !== sum) break
        else step++
    }

    return step
};