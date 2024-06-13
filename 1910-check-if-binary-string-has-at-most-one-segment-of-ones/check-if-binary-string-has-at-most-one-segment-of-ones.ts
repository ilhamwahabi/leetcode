function checkOnesSegment(s: string): boolean {
    for (let i = 1; i < s.length - 1; i++) {
        if (s[i] === "0" && s[i+1] === "1") return false
    }
    return true
};