function arrayChange(nums: number[], operations: number[][]): number[] {
    // Iterate nums, create map with key is num and value is the index
    // Iterate operations, replace the one that has same value with operation[0]

    const map = {}
    nums.forEach((num, index) => {
        map[num] = index
    })

    operations.forEach(([target, replacement]) => {
        const index = map[target]
        delete map[target]

        nums[index] = replacement
        map[replacement] = index
    })

    return nums
};