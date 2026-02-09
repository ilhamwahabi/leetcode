function dominantIndices(nums: number[]): number {
    // Iterate from back, sum the number, divide by total number, store the avg
    // Iterate from back, check if nums[i] > avg[i]

    const avgs = []
    let total = 0
    for (let i = nums.length - 1; i > 0; i--) {
        const num = nums[i]
        const count = nums.length - i

        total += num
        avgs.push(total / count)
    }

    let dom = 0
    for (let i = nums.length - 2; i >= 0; i--) {
        const num = nums[i]
        const avg = avgs[nums.length - 2 - i]

        if (num > avg) dom++
    }
    return dom
};