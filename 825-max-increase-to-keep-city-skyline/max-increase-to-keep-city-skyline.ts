function maxIncreaseKeepingSkyline(grid: number[][]): number {
    // Loop, Find max number in each row and col
    // Loop, result += Math.min(maxCol, maxRow) - cell

    const col = {}
    const row = {}
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            row[i] = Math.max(row[i] || 0, grid[i][j])
            col[j] = Math.max(col[j] || 0, grid[i][j])
        }
    }

    let inc = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            inc += Math.min(row[i], col[j]) - grid[i][j]
        }
    }
    return inc
};