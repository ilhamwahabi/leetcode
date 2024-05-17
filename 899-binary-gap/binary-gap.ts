function binaryGap(n: number): number {
    let a = n
    let max = 0
    let temp = null
    let b = 0

    while (a > 0) {
        if (a % 2 === 1) {
            if (temp !== null) max = Math.max(max, b - temp)
            temp = b
        }

        a = Math.floor(a / 2)
        b++
    }

    return max
};