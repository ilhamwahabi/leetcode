function minCosts(cost: number[]): number[] {
    const result = []

    let min = Infinity
    for (const num of cost) {
        if (num < min) min = num
        result.push(min)
    }

    return result
};