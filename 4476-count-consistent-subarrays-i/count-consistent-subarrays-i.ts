function countConsistent(nums: number[]): number {
    let result = 0
    
    for (let i = 0; i < nums.length; i++) {
        let min = nums[i]
        let curr = nums[i]

        if (min === curr) result++

        for (let j = i + 1; j < nums.length; j++) {
            min = Math.min(min, nums[j])
            curr = curr & nums[j]

            if (min === curr) result++
        }
    }

    return result
};