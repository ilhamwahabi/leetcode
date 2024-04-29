function alternateDigitSum(n: number): number {
    // 1. Recursively add the digits
    // 2. If the length of the value that is divided is odd, times remainder result by -1

    if (n < 10) return n
    
    const division = Math.floor(n / 10)
    const remainder = n % 10
    
    return alternateDigitSum(division)
        + remainder * (String(division).length % 2 === 1 ? -1: 1)
};