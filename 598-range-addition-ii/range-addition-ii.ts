function maxCount(m: number, n: number, ops: number[][]): number {
    let minA = m
    let minB = n

    ops.forEach(([a, b]) => {
        if (a < minA) minA = a
        if (b < minB) minB = b
    })

    return minA * minB
};