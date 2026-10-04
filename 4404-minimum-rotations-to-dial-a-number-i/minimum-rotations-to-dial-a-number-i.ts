function minRotations(s: string): number {
    let total = 0

    let from = 0
    for (let i = 0; i < s.length; i++) {
        const to = +s[i]
        const rot = Math.min(Math.abs(to - from), 10 - to + from, 10 - from + to)
        total += rot

        from = to
    }

    return total
};