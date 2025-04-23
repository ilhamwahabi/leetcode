function getHappyString(n: number, k: number): string {
    // Backtracking
    // Only append char that is not same with current last char
    // Terminate: s.length === n
    // Sort result, return it's k-index

    const result = []

    function backtracking(s = "") {
        if (s.length === n) {
            result.push(s)
        } else {
            if (s.at(-1) !== "a") backtracking(s + "a")
            if (s.at(-1) !== "b") backtracking(s + "b")
            if (s.at(-1) !== "c") backtracking(s + "c")
        }
    }
    backtracking()

    result.sort()
    return result.at(k - 1) ?? ""
};