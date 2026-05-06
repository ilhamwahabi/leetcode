function sumOfPrimesInRange(n: number): number {
    let r = 0
    let curr = n
    while (curr > 0) {
        const mod = curr % 10
        r = (r * 10) + mod
        curr = Math.floor(curr / 10)
    }

    let result = 0
    for (let i = Math.min(n,r); i <= Math.max(n,r); i++) {
        if (isPrime(i)) result += i
    }
    return result
};

function isPrime(num: number): boolean {
    if (num <= 1) return false
    if (num === 2 || num === 3) return true
    if (num % 2 === 0 || num % 3 === 0) return false
    for (let i = 5; i <= Math.sqrt(num); i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false
    }
    return true
}