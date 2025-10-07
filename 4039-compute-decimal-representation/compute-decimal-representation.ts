function decimalRepresentation(n: number): number[] {
    const result = []

    let curr = n
    let i = 1
    while (curr > 0) {
        const mod = curr % 10
        curr = Math.floor(curr / 10)

        if (mod !== 0) result.push(mod * i)
        i *= 10
    }

    return result.reverse()
};