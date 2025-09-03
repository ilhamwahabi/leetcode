function minPathSum(grid: number[][]): number {
    // https://www.youtube.com/watch?v=pGMsrvt0fpk
    // 7 6 3
    // 7 6 2
    // 7 3 1

    // Start from bottom right to top left, find minimum value for each spot

    const rows = grid.length
    const cols = grid[0].length

    const min = []
    for (let i = 0; i < rows + 1; i++) {
        const row = []
        for (let j = 0; j < cols + 1; j++) {
            row.push(Infinity)
        }
        min.push(row)
    }
    min[rows][cols - 1] = 0

    for (let i = rows - 1; i >= 0; i--) {
        for (let j = cols - 1; j >= 0; j--) {
            min[i][j] = grid[i][j] + Math.min(min[i+1][j], min[i][j+1])
        }
    }

    return min[0][0]
};