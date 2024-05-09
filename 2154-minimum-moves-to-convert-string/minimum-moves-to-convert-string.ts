function minimumMoves(s: string): number {
    let step = 0

    let i = 0
    let str = s
    while (i < str.length) {
        if (str[i] === "X") {
            step++
            i = i + 3
        } else {
            i++
        }
    }

    return step
};