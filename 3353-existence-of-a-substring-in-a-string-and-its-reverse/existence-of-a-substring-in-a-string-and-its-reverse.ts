function isSubstringPresent(s: string): boolean {
    for (let i = 0; i < s.length - 1; i++) {
        for (let j = 0; j < s.length - 1; j++) {
            if (s[i] === s[s.length - j - 1] && s[i+1] === s[s.length - j - 2]) return true
        }
    }

    return false
};