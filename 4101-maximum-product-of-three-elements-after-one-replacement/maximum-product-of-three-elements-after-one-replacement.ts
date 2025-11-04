function maxProduct(nums: number[]): number {
    // Find two greatest number (absolute)
    // Return product between those two (absolute) * 10^5

    nums.sort((a,b) => Math.abs(b) - Math.abs(a))
    return Math.abs(nums[0] * nums[1]) * Math.pow(10, 5)
};