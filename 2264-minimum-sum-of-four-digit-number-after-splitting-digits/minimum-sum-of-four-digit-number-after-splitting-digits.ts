function minimumSum(num: number): number {
    // Example: 1234 -> 13 + 24 or 14 + 23 = 27
    // 1. Iterate all digit of sum
    // 2. find 2 smallest between them
    // 3. add the rest behind them

    const digits = []
    let min1 = Infinity
    let min2 = Infinity
    for (const digit of String(num)) {
        digits.push(digit)
    }
    digits.sort((a,b) => a-b)

    return parseInt(digits[0] + digits[2]) + parseInt(digits[1] + digits[3])
};