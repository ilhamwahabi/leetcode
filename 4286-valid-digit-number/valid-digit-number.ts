function validDigit(n: number, x: number): boolean {
    let isFound = false
    let isStart = false

    let prev = null
    let curr = n
    while (curr > 0) {
        const digit = curr % 10
        if (digit === x) isFound = true

        prev = curr
        curr = Math.floor(curr / 10)
        if (curr === 0 && prev === x) isStart = true
    }

    return isFound && !isStart
};