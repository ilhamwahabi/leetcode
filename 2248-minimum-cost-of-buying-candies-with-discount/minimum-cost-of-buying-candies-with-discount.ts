function minimumCost(cost: number[]): number {
    // [2,2,5,6,7,9]
    // Sort cost
    // Iterate until cost.length = 0
    // Remove last three element, if its below three just pop ALL!!!

    cost.sort((a,b) => a-b)

    let total = 0
    while (cost.length > 0) {
        const x = cost.pop()
        const y = cost.pop() || 0
        cost.pop()

        total += x + y
    }

    return total
};