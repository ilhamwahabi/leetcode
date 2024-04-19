function isSubstringPresent(s: string): boolean {
    const r = s.split("").reverse().join("")

    for (let i = 0; i < s.length - 1; i++) {
        for (let j = 0; j < r.length - 1; j++) {
            if (s[i] === r[j] && s[i+1] === r[j+1]) return true
        }
    }

    return false
};