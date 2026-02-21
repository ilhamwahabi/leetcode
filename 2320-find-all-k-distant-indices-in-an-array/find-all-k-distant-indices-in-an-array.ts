function findKDistantIndices(nums: number[], key: number, k: number): number[] {
    const keyIndexes = []
    nums.forEach((num, index) => {
        if (num === key) keyIndexes.push(index)
    })

    let currentKeyIndexesIndex = 0
    const result = []
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        const idx = keyIndexes[currentKeyIndexesIndex]

        if (Math.abs(i - idx) <= k) {
            result.push(i)
            if (i - idx === k) currentKeyIndexesIndex++
        }
    }
    
    return result
};