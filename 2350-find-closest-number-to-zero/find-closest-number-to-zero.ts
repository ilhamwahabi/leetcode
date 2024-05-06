function findClosestNumber(nums: number[]): number {
    // Iterate nums
    // Check if its absolute value is smaller than minMaxVal and its normal value is bigger
    
    let minMaxVal = nums[0]

    for (let i = 1; i < nums.length; i++) {
        const num = nums[i]
        
        if (Math.abs(num) < Math.abs(minMaxVal)) minMaxVal = num
        else if (Math.abs(num) === Math.abs(minMaxVal)) minMaxVal = Math.max(minMaxVal, num)
    }

    return minMaxVal
};