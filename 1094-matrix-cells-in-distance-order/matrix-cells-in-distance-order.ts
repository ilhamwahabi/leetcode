function allCellsDistOrder(rows: number, cols: number, rCenter: number, cCenter: number): number[][] {
    // 1. Create dictionary to store which cell have distance with value key
    // 2. Iterate matrix, add it to dic
    // 3. Return result ordered from distance

    const dist = {}
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const distance = Math.abs(i - rCenter) + Math.abs(j - cCenter)
            dist[distance] ? dist[distance].push([i,j]) : dist[distance] = [[i,j]]
        }
    }

    const result = []
    for (const key in dist) {
        result.push(...dist[key])
    }
    return result
};