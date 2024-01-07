function distinctDifferenceArray(nums: number[]): number[] {
    const arr = []

    for (let i = 0; i < nums.length; i++) {
        const prefix = {}
        let distinctPrefix = 0
        for (let j = 0; j <= i; j++) {
            if (!prefix[nums[j]]) {
                prefix[nums[j]] = true
                distinctPrefix++
            }
        }

        const suffix = {}
        let distinctSuffix = 0
        for (let j = i + 1; j < nums.length; j++) {
            if (!suffix[nums[j]]) {
                suffix[nums[j]] = true
                distinctSuffix++
            }
        }

        arr.push(distinctPrefix - distinctSuffix)
    }

    return arr
};