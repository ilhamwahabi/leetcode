function gcdOfOddEvenSums(n: number): number {
    // 16 = 1 2 4 8 16
    // 20 = 1 2 4 5 10 20

    // Sum the first n odd number, start from 1
    // Sum the first n even number, start from 1
    // Find the factorial for each of them, start from 1 to x/2, save in set
    // Iterate from odd x from the largest, return

    // Time: O(n), iterate number and fact
    // Space: O(n), storing facts

    let odd = 0
    let even = 0

    for (let i = 1; i < 2 * n; i += 2) odd += i
    for (let i = 2; i < 2 * n + 1; i += 2) even += i

    const oddFact = new Set([odd])
    for (let i = Math.floor(odd / 2); i > 0; i--) {
        if (odd % i === 0) oddFact.add(i)
    }

    const evenFact = new Set([even])
    for (let i = even / 2; i > 0; i--) {
        if (even % i === 0) evenFact.add(i)
    }

    for (const fact of oddFact) {
        if (evenFact.has(fact)) return fact
    }

    return -1
};