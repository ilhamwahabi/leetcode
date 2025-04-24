function combine(n: number, k: number): number[][] {
    // Backtracking
    // Iterate from 1 to n, add current index to s
    // Terminate: s.length === k

    const result = []

    function backtracking(s = [], i = 1) {
        if (s.length === k) {
            result.push(s)
        } else {
            for (let j = i; j < n + 1; j++) {
                backtracking([...s, j], j + 1)
            }
        }
    }
    backtracking()

    return result
};