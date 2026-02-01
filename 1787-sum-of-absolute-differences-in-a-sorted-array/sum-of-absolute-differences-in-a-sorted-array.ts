function getSumAbsoluteDifferences(nums: number[]): number[] {
    // 2 8 = 4
    // 3 7 = 3
    // 5 5 = 5

    // 4 - 8
    // 6 - 7
    // 10 - 5

    const result = []

    let totalSum = nums.reduce((acc, curr) => acc + curr, 0)
    let currSum = totalSum
    for (let i = 0; i < nums.length; i++) {
        currSum -= nums[i]

        const leftSum = totalSum - currSum - nums[i]
        const rightSum = totalSum - leftSum - nums[i]

        const totalLeft = Math.abs(i * nums[i] - leftSum)
        const totalRight = Math.abs((nums.length - 1 - i) * nums[i] - rightSum)

        result.push(totalLeft + totalRight)
    }

    return result
};