function simplifiedFractions(n: number): string[] {
    // 1. Loop from 2 to <= n
    // 2. Loop again to i - 1
    // 3. Check if GCD === 1, then add it

    const result = []

    for (let i = 2; i <= n; i++) {
        for (let j = 1; j < i; j++) {
            if (findGCD(j, i) === 1) result.push(`${j}/${i}`)
        }
    }

    return result
};

function findGCD(a: number, b: number): number {
    if (a % b === 0) return b
    return findGCD(b % a, a)
}