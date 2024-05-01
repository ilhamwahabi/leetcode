function countPrimes(n: number): number {
    // 2 3 . 5 7 . 11 13 . 17 19 . 23 . 29 31 . 37 . ...

    let total = 0
    for (let i = 2; i < n; i++) {
        if (checkPrime(i)) total++
    }
    return total
};

function checkPrime(n: number) {
    if (n <= 1) return false
    if (n === 2 || n === 3) return true
    if (n % 2 === 0 || n % 3 === 0) return false

    for (let i = 5; i <= Math.sqrt(n); i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false
    }

    return true
}