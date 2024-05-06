function checkString(s: string): boolean {
    // Save latest a and b position

    let a = -1
    let b = -1

    let i = 0
    while (i < s.length) {
        if (s[i] === "a") a = i
        else b = i

        if (a !== -1 && b !== -1 && a > b) return false
        i++
    }

    return true
};