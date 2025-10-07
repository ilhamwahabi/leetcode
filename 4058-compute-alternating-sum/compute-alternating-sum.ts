function alternatingSum(nums: number[]): number {
    return nums.reduce((acc, curr, index) => {
        if (index % 2 === 0) return acc + curr
        return acc - curr
    }, 0)
};