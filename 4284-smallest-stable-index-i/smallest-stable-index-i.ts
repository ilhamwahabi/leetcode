function firstStableIndex(nums: number[], k: number): number {
    const maxPrefix = []
    for (let i = 0; i < nums.length; i++) {
        maxPrefix[i] = Math.max(nums[i], maxPrefix[i - 1] ?? -Infinity)
    }

    const minSuffix = []
    for (let i = nums.length - 1; i >= 0; i--) {
        minSuffix[i] = Math.min(nums[i], minSuffix[i + 1] ?? Infinity)
    }

    for (let i = 0; i < nums.length; i++) {
        const score = maxPrefix[i] - minSuffix[i]
        if (score <= k) return i
    }

    return -1
};