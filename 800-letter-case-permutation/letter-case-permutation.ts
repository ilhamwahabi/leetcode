function letterCasePermutation(s: string): string[] {
    // Backtracking
    // Iterate char from index 0 to string.length - 1
    // Terminate: length is same

    const set = new Set<string>()

    function backtracking(str = "", i = 0) {
        if (str.length === s.length) {
            set.add(str)
        } else {
            backtracking(str + s[i].toLowerCase(), i + 1)
            backtracking(str + s[i].toUpperCase(), i + 1)
        }
    }
    backtracking()

    return [...set]
};