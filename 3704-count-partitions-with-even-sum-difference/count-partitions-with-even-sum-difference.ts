function countPartitions(nums: number[]): number {
    let sum = nums.reduce((acc, curr) => acc + curr, 0)

    let total = 0
    let acc = 0
    for (let i = 0; i < nums.length - 1; i++) {
        acc += nums[i]
        if ((acc - (sum - acc)) % 2 === 0) total++
    }
    return total
};