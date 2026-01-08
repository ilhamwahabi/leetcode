function combinationSum(candidates: number[], target: number): number[][] {
    const result = []

    function backtrack(set = [], sum = 0, index = 0) {
        if (sum === target) {
            result.push(set)
        } else if (sum < target) {
            for (let i = index; i < candidates.length; i++) {
                const c = candidates[i]
                
                backtrack(set.concat(c), sum + c, i)
            }
        }
    }
    backtrack()

    return result
};