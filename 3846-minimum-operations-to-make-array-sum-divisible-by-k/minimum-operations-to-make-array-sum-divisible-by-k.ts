function minOperations(nums: number[], k: number): number {
    // Get total sum, return mod
    
    return nums.reduce((acc, curr) => acc + curr, 0) % k
};