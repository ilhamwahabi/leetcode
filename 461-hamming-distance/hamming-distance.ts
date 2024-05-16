function hammingDistance(x: number, y: number): number {
    let count = 0

    for (const char of (x ^ y).toString(2)) {
        if (char === "1") count++
    }

    return count
};