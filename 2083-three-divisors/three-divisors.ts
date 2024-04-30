function isThree(n: number): boolean {
    let divisor = Math.min(n, 2)

    let i = 2
    while (divisor < 4 && i <= n / 2) {
        if (n % i === 0) divisor++
        i++
    }

    return divisor === 3
};