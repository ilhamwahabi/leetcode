function countPrimeSetBits(left: number, right: number): number {
    // 1. Iterate from lefto to right
    // 2. Convert to binary, count the one, if primer increase counter

    let count = 0
    for (let i = left; i <= right; i++) {
        let one = 0

        let j = i
        while (j > 0) {
            one++
            j = j & (j - 1)
        }

        if (isPrime(one)) count++
    }
    return count
};

function isPrime(n: number) {
    if (n <= 1) return false
    if (n === 2 || n === 3) return true
    if (n % 2 === 0 || n % 3 === 0) return false

    for (let i = 5; i <= Math.sqrt(n); i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false
    }

    return true
}