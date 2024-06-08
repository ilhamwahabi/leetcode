function lastStoneWeight(stones: number[]): number {
    // Sort stones ascending
    // Iterate while stones.length > 1
    // If last and last-1 same: pop those two, if last > last-1, pop those two, push diff

    stones.sort((a,b) => a-b)

    while (stones.length > 1) {
        const a = stones.pop()
        const b = stones.pop()

        if (a - b > 0) {
            stones.push(a - b)
            stones.sort((a,b) => a-b)
        }
    }

    return stones[0] || 0
};