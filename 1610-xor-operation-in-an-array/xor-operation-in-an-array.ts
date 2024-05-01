function xorOperation(n: number, start: number): number {
    // 1. Iterate from 1 to n
    // 2. Store to XOR result between result and current

    let result = start

    for (let i = 1; i < n; i++) {
        result ^= start + 2 * i
    }

    return result
};