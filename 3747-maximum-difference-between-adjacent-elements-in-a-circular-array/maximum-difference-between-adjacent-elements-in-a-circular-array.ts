function maxAdjacentDistance(nums: number[]): number {
    let max = -Infinity

    const items = [...nums, nums[0]]
    for (let i = 1; i < items.length; i++) {
        max = Math.max(max, Math.abs(items[i] - items[i-1]))
    }

    return max
};