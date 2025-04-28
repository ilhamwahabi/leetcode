function numsSameConsecDiff(n: number, k: number): number[] {
    // Backtracking

    const result = []

    function backtracking(curr = []) {
        if (curr.length === n) {
            result.push(+curr.join(""))
        } else {
            for (let i = 0; i <= 9; i++) {
                const last = curr.at(-1)
                
                if (
                    (last === undefined && i !== 0) || 
                    (last !== undefined && Math.abs(last - i) === k)
                ) {
                    backtracking([...curr, i])
                }
            }
        }
    }
    backtracking()

    return result
};