function minOperations(nums: number[]): number {
    const map = { 0: 1, 1: 0 }
    let ops = 0
    
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] === 0) {
            ops++
            nums[i] = map[nums[i]]
            nums[i + 1] = map[nums[i + 1]]
            nums[i + 2] = map[nums[i + 2]]
        }
    }

    if (nums.at(-1) === 0 || nums.at(-2) === 0) return -1
    return ops
};