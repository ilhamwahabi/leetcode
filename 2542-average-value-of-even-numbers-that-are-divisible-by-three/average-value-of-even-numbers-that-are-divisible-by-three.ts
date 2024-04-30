function averageValue(nums: number[]): number {
    // 1. Create variable to count the sum and total
    // 2. Iterate nums, check if num[i] % 3 === 0 then add it to sum and increase total
    // 3. Return rounded down sum / total

    let sum = 0
    let total = 0

    nums.forEach(num => {
        if (num % 6 === 0) {
            sum += num
            total++
        }
    })

    return Math.floor(sum / total) || 0
};