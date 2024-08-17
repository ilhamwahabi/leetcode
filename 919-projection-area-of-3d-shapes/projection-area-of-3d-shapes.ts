function projectionArea(grid: number[][]): number {
    let xy = 0
    let xz = 0

    const maxCol = {}
    for (let i = 0; i < grid.length; i++) {
        let maxRow = grid[i][0]
        
        for (let j = 0; j < grid.length; j++) {
            if (grid[i][j] > 0) xy++
            maxRow = Math.max(maxRow, grid[i][j])
            maxCol[j] = Math.max(maxCol[j] || 0, grid[i][j])
        }

        xz += maxRow
    }

    let yz = 0
    for (const key in maxCol) yz += maxCol[key]

    return xy + xz + yz
};