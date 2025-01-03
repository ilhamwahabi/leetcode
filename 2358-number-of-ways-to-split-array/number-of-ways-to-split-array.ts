function waysToSplitArray(nums: number[]): number {
    const prefixSum = []
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        prefixSum.push(sum)
    }

    let result = 0
    let acc = 0
    for (let i = nums.length - 1; i >= 1; i--) {
        acc += nums[i]
        if (prefixSum[i - 1] >= acc) result++
    }
    return result
};