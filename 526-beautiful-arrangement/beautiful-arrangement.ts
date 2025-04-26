function countArrangement(n: number): number {
    // Backtracking

    const init = Array.from({ length: n }, (_, i) => i + 1)    
    let count = 0

    function backtracking(arr = [], set = new Set(init)) {
        if (arr.length === n) {
            count++
        } else {
            for (const value of set) {
                const cond1 = value % (arr.length + 1) === 0
                const cond2 = (arr.length + 1) % value === 0

                if (cond1 || cond2) {
                    const copy = new Set(set)
                    copy.delete(value)

                    backtracking([...arr, value], copy)
                }   
            }
        }
    }
    backtracking()

    return count
};