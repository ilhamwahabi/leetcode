function stoneGameVI(aliceValues: number[], bobValues: number[]): number {
    // 1. Generate new array with member of each value added, also add their origin
    // 2. Sort the array
    // 3. Add each origin to the result

    let a = 0
    let b = 0

    const values = []
    for (let i = 0; i < aliceValues.length; i++) {
        values.push([aliceValues[i] + bobValues[i], [aliceValues[i], bobValues[i]]])
    }

    values.sort((a,b) => b[0] - a[0])

    for (let i = 0; i < values.length; i++) {
        if (i % 2 === 0) a += values[i][1][0]
        else b += values[i][1][1]
    }

    if (a > b) return 1
    else if (a < b) return -1
    return 0
};