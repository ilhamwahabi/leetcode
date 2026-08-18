function largestInteger(n: number, s: number): number {
    let curr = s
    let digits = 0
    for (let i = 1; i <= n; i++) {
        const digit = Math.min(9, curr)

        digits = (digits * 10) + digit
        curr -= digit
    }

    return curr === 0 ? digits : -1
};