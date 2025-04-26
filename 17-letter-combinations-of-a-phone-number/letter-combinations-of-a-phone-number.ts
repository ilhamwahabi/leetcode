function letterCombinations(digits: string): string[] {
    // Backtracking

    const button = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz",
    }

    const result = []
    function backtracking(index = 0, s = "") {
        if (s.length === digits.length) {
            if (s) result.push(s)
        } else {
            for (const char of button[digits[index]]) {
                backtracking(index + 1, s + char)
            }
        }
    }
    backtracking()

    return result
};