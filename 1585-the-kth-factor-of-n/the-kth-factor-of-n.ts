function kthFactor(n: number, k: number): number {
    // 1. Loop from 1 to n/2
    // 2. If result.length === k, return it
    // 3. Else false

    const result = [1]

    for (let i = 2; i <= n / 2; i++) {
        if (n % i === 0) {
            result.push(i)

            if (result.length === k) return i
        }
    }

    result.push(n)
    return result[k - 1] || -1
};