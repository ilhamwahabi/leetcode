function minCostToMoveChips(position: number[]): number {
    // Count total coin in even
    // Count total coin in odd
    // Return min of between them

    let even = 0
    let odd = 0
    for (const num of position) {
        if (num % 2 === 0) even++
        else odd++
    }
    return Math.min(even, odd)
};