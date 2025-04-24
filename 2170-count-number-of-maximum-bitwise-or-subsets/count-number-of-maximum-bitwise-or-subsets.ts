function countMaxOrSubsets(nums: number[]): number {
    // Backtracking
    // Check if current result === 3: count++
    // Terminate: i === nums.length

    const max = nums.reduce((acc, curr) => acc | curr, 0)

    let count = 0

    function backtracking(result = 0, i = 0) {
        if (result === max) count++

        if (i < nums.length) {
            for (let j = i; j < nums.length; j++) {
                backtracking(result | nums[j], j + 1)
            }
        }
    }
    backtracking()

    return count
};