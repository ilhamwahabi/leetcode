function findTargetSumWays(nums: number[], target: number): number {
    let count = 0

    function backtrack(sum = 0, index = 0) {
        if (index === nums.length) {
            if (sum === target) count++
        } else {
            const num = nums[index]

            backtrack(sum + num, index + 1)
            backtrack(sum - num, index + 1)
        }
    }
    backtrack()

    return count
};