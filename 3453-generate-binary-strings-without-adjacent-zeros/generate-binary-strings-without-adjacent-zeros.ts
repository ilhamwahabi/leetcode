function validStrings(n: number): string[] {
    // Backtracking
    // If last element is 0: append 1
    // If last element is 1: append 0 and 1
    // If s.length === n, add to result

    const result = []

    function backtracking(s = "", zero = 0, one = 0) {
        if (s.length === n) {
            result.push(s)
        } else {
            if (s.at(-1) === "0") {
                backtracking(s + "1", zero, one + 1)
            }
            if (s === "" || s.at(-1) === "1") {
                backtracking(s + "0", zero + 1, one)
                backtracking(s + "1", zero, one + 1)
            }
        }
    }
    backtracking()

    return result
};