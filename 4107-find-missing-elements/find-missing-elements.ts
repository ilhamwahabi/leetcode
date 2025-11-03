function findMissingElements(nums: number[]): number[] {
    // Find min and max, store the occurance
    // Iterate from min and max, check the missing number

    const set = new Set()
    let min = Infinity
    let max = -Infinity
    for (const num of nums) {
        set.add(num)
        min = Math.min(min, num)
        max = Math.max(max, num)
    }

    const result = []
    for (let i = min + 1; i < max; i++) {
        if (!set.has(i)) result.push(i)
    }
    return result
};