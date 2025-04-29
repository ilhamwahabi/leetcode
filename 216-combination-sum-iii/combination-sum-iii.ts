function combinationSum3(k: number, n: number): number[][] {
    const result = []
    
    function backtracking(arr = [], sum = 0, index = 1) {
        if (arr.length === k) {
            if (sum === n) result.push(arr)
        } else {
            for (let i = index; i <= 9; i++) {
                if (
                    arr.at(-1) === undefined
                    || (arr.at(-1) && i > arr.at(-1))
                ) {
                    backtracking([...arr, i], sum + i, index + 1)
                }
            }
        }
    }
    backtracking()

    return result
};