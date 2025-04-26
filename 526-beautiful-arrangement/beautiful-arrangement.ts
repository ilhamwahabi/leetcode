function countArrangement(n: number): number {
    // Backtracking
    
    let count = 0

    function backtracking(arr = [], set = new Set()) {
        if (arr.length === n) {
            count++
        } else {
            for (let i = 1; i <= n; i++) {
                const cond1 = i % (arr.length + 1) === 0
                const cond2 = (arr.length + 1) % i === 0

                if (!set.has(i) && (cond1 || cond2)) {
                    const copy = new Set(set)
                    copy.add(i)

                    backtracking([...arr, i], copy)
                }
            }
        }
    }
    backtracking()

    return count
};