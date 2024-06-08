function minMaxGame(nums: number[]): number {
    // Iterate while nums.length > 1
    // If (i / 2) % 2 === 0 : min, (i / 2) % 2 === 1 : max

    while (nums.length > 1) {
        const newNums = []
        
        for (let i = 0; i < nums.length; i += 2) {
            if ((i / 2) % 2 === 0) newNums.push(Math.min(nums[i], nums[i + 1]))
            else newNums.push(Math.max(nums[i], nums[i + 1]))
        }

        nums = newNums
    }

    return nums[0]
};