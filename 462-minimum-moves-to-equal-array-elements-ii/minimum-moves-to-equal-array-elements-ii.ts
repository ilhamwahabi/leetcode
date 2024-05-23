function minMoves2(nums: number[]): number {
    // [1,2,9,10]
    // 4 3 4 5
    // 5 4 3 4
    // 2 = 1 0 7 8
    // 9 = 8 7 0 1

    // [0,0,1,6,8] 4
    // 4 = 4 4 3 2 4
    // 1 = 1 1 0 5 7

    // Sort asceding
    // Find Math.ceil(first, last)

    nums.sort((a,b) => a-b)
    const median = nums[Math.floor(nums.length / 2)]
    
    let step = 0
    for (const num of nums) {
        step += Math.abs(num - median)
    }
    return step
};