function maximumScore(nums: number[]): number {
    // Build prefix sum array
    // Build suffix min array
    // Iterate from 0 to n - 1, track the max of prefixSum(i) - suffixMin(i)

    const prefixSum = []
    const suffixMin = []
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        prefixSum.push(num + (prefixSum.at(-1) ?? 0))

        const min = nums[nums.length - 1 - i]
        if (suffixMin.length === 0) suffixMin.push(min)
        else suffixMin.push(Math.min(min, suffixMin.at(-1)))
    }
    suffixMin.reverse()

    let max = -Infinity
    for (let i = 0; i < nums.length - 1; i++) {
        const result = prefixSum[i] - suffixMin[i + 1]
        max = Math.max(max, result)
    }
    return max
};