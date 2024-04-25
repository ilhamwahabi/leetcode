function pivotIndex(nums: number[]): number {
    const sum = nums.reduce((prev, curr) => prev + curr, 0)

    for (let i = 0; i < nums.length; i++) {
        const left = nums.slice(0, i).reduce((prev, curr) => prev + curr, 0)
        const right = sum - left - nums[i]
        
        if (left === right) return i
    }

    return -1
};