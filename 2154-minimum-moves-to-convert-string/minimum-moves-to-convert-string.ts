function minimumMoves(s: string): number {
    let step = 0

    let i = 0
    while (i < s.length) {
        if (s[i] === "X") {
            step++
            i = i + 3
        } else {
            i++
        }
    }

    return step
};