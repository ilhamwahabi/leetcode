function countDominantElements(nums: number[]): number {
    // Iterate nums
    // For each num check if it's >= than (nums[i-1] + nums[i+1]) / 2
    // handle for the first element and last element, treat prev and next element is zero

    let result = 0
    for (let i = 0; i < nums.length; i++) {
        const isFirst = i === 0
        const isLast = i === nums.length - 1

        const div = []
        if (!isFirst) div.push(nums[i - 1])
        if (!isLast) div.push(nums[i + 1])
        const avg = div.length ? div.reduce((acc, curr) => acc + curr, 0) / div.length : 0

        if (nums[i] >= avg) result++
    }

    return result
};