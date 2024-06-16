function repeatedSubstringPattern(s: string): boolean {
    let pre = ""
    for (let i = 0; i < Math.floor(s.length / 2); i++) {
        pre += s[i]

        if (pre.repeat(s.length / (i + 1)) === s) return true
    }

    return false
};