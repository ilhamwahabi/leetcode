function numOfPairs(nums: string[], target: string): number {
    let pairs = 0

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] + nums[j] === target && i !== j) pairs++
        }
    }

    return pairs
};