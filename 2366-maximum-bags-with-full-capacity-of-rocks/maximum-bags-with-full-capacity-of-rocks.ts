function maximumBags(capacity: number[], rocks: number[], additionalRocks: number): number {
    // Create array to count the remaining capacity
    // Sort the remain array ascending
    // Iterate remain and decrease additional until it 0 or we meet end

    let full = 0

    const remain = []
    for (let i = 0; i < capacity.length; i++) {
        const left = capacity[i] - rocks[i]
        if (left > 0) remain.push(left)
        else full++
    }

    remain.sort((a,b) => a-b)

    let a = additionalRocks
    let i = 0
    while (i < remain.length && a > 0) {
        a -= remain[i]
        i++
        if (a >= 0) full++
    }

    return full
};