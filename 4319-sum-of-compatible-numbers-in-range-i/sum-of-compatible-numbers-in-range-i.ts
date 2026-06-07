function sumOfGoodIntegers(n: number, k: number): number {
    let sum = 0

    for (let x = Math.max(n - k, 1); x <= n + k; x++) {
        const cond1 = Math.abs(n - x) <= k
        const cond2 = (n & x) == 0

        if (cond1 && cond2) sum += x
    }

    return sum
};