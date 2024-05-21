function subsetXORSum(nums: number[]): number {
    let result = 0

    function backtracking(subset: number[], index: number) {
        result += subset.reduce((acc, curr) => acc ^ curr, 0)

        for (let i = index; i < nums.length; i++) {
            subset.push(nums[i])
            backtracking(subset, i + 1)
            subset.pop()
        }
    }
    backtracking([], 0)

    return result
};