function findMaxAverage(nums: number[], k: number): number {
    let max = 0
    for (let i = 0; i < k; i++) {
        max += nums[i]
    }

    let curr = max
    for (let i = k; i < nums.length; i++) {
        curr += nums[i] - nums[i - k]
        if (curr > max) max = curr
    }

    return max / k
};