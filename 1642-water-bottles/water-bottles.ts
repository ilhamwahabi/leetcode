function numWaterBottles(numBottles: number, numExchange: number): number {
    // 1. Create drinked to counter how many we already drink
    // 2. Mark full with 1, mark empty with -1
    // 3. Iterate until we got empty < numExchange

    let drinked = 0
    let full = numBottles
    let empty = 0

    while (full > 0 || empty / numExchange >= 1) {
        if (full > 0) {
            drinked += full
            empty += full
            full = 0
        } else {
            const exchanged = Math.floor(empty / numExchange)
            empty = empty % numExchange
            full += exchanged
        }
    }

    return drinked
};