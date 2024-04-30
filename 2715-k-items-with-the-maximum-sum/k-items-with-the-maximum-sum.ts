function kItemsWithMaximumSum(numOnes: number, numZeros: number, numNegOnes: number, k: number): number {
    // 1. Iterate until k times
    // 2. As long as pos is not zero, increase sum and decrease pos
    // 3. As long as zero is not zero, increase sum and decrease zero
    // 4. As long as neg is not zero, increase sum and decrease neg
    
    let sum = 0
    let i = 0

    if (i < k) {
        const total = Math.min(k, numOnes)
        sum += total
        i += total
    }
    if (i < k) {
        const total = Math.min(k - i, numZeros)
        i += total
    }
    if (i < k) {
        const total = Math.min(k - i, numNegOnes)
        sum -= total
        i += total
    }

    return sum
};