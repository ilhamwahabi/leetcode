function maxBottlesDrunk(numBottles: number, numExchange: number): number {
    // 1. Track current full, empty, and exchange
    // 2. Also accumulate drink from full to empty
    // 3. Iterate while full > 0 || empty >= exchange

    let full = numBottles
    let empty = 0
    let exchange = numExchange
    let drink = 0

    while (full > 0 || empty >= exchange) {
        if (full > 0) {
            drink += full
            empty += full
            full = 0
        }

        if (empty >= exchange) {
            empty -= exchange
            exchange++
            full++
        }
    }

    return drink
};