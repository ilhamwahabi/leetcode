function maxIceCream(costs: number[], coins: number): number {
    // Sort costs
    // Iterate until no coins <= costs[i]

    costs.sort((a,b) => a-b)

    let c = coins
    let i = 0
    while (c > 0) {
        if (c >= costs[i]) {
            c -= costs[i]
            i++
        } else {
            c -= costs[i]
        }
    }

    return i
};