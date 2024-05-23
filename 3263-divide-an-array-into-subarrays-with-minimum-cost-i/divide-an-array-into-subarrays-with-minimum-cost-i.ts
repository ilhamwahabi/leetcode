function minimumCost(nums: number[]): number {
    // Only sort except the first element
    const slice = nums.slice(1).sort((a,b) => a-b)
    return nums[0] + slice[0] + slice[1]
};