function isAdjacentDiffAtMostTwo(s: string): boolean {
    for (let i = 0; i < s.length - 1; i++) {
        const curr = +s[i]
        const next = +s[i + 1]

        if (Math.abs(curr - next) > 2) return false
    }

    return true
};