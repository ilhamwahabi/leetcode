function generateParenthesis(n: number): string[] {
    // Backtracking: only add ( if open < n
    // only add ) if close < open
    // add to result if open === close === n

    const result = []

    function backtracking(s = "", open = 0, close = 0) {
        if (open === n && close === n) {
            result.push(s)
        } else {
            if (open < n) {
                backtracking(s + "(", open + 1, close)
            }
            if (close < open) {
                backtracking(s + ")", open, close + 1)
            }
        }
    }
    backtracking()

    return result
};