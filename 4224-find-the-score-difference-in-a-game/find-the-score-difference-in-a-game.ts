function scoreDifference(nums: number[]): number {
    let diff = 0
    let status = 1

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        
        if (num % 2 === 1) status *= -1
        if ((i + 1) % 6 === 0) status *= -1

        diff += num * status
    }

    return diff
};