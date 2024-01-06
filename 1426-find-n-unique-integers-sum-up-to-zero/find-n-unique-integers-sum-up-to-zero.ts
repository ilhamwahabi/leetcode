function sumZero(n: number): number[] {
    const arr = n % 2 === 1 ? [0] : []

    for (let i = 0; i < Math.floor(n / 2); i++) {
        arr.push(0+(i+1), 0-(i+1))
    }

    return arr
};