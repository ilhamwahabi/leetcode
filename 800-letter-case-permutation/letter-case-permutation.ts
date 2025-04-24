function letterCasePermutation(s: string): string[] {
    // Backtracking
    // Iterate char from index 0 to string.length - 1
    // Terminate: length is same

    const result = []

    function backtracking(str = "", i = 0) {
        if (str.length === s.length) {
            result.push(str)
        } else {
            if (s[i].match(/[\d]/)) {
                backtracking(str + s[i], i + 1)
            } else {
                backtracking(str + s[i].toLowerCase(), i + 1)
                backtracking(str + s[i].toUpperCase(), i + 1)
            }
        }
    }
    backtracking()

    return result
};