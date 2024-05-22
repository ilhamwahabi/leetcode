function matrixSum(nums: number[][]): number {
    // Sort rows, descending
    // Iterate column, find max, add it to result

    nums.forEach(num => {
        num.sort((a,b) => b-a)
    })

    let result = 0
    for (let i = 0; i < nums[0].length; i++) {
        let max = 0
        for (let j = 0; j < nums.length; j++) {
            if (nums[j][i] > max) max = nums[j][i]
        }
        result += max
    }
    return result
};