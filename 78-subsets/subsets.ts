function subsets(nums: number[]): number[][] {
    const result = []

    function backtracking(subset: number[], index: number) {
        result.push([...subset])

        for (let i = index; i < nums.length; i++) {
            subset.push(nums[i])
            backtracking(subset, i + 1)
            subset.pop()
        }
    }
    backtracking([], 0)

    return result
};