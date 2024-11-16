function resultsArray(nums: number[], k: number): number[] {
    const result = []
    
    for (let i = 0 ; i < nums.length - k + 1; i++) {
        let isValid = true
        
        for (let j = i; j < i + k - 1; j++) {
            if (
                (nums[j] >= nums[j + 1]) ||
                (nums[j] + 1 !== nums[j + 1])
            ) {
                isValid = false
                break
            }
        }

        result.push(isValid ? nums[i + k - 1] : -1)
    }

    return result
};