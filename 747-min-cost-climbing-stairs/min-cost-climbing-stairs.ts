function minCostClimbingStairs(cost: number[]): number {
    //     10       |    15
    //  15,  20     |  20, top
    // 20 top, top  |  top, -

    return recursive(cost.length, cost.concat(0), {})
};

function recursive(dest: number, cost: number[], memo: Object) {
    if (memo[dest] !== undefined) return memo[dest]

    if (dest <= 1) {
        memo[dest] = cost[dest]
    } else {
        memo[dest] = cost[dest] + Math.min(
            recursive(dest - 2, cost, memo),
            recursive(dest - 1, cost, memo)
        )
    }

    return memo[dest]
}