function surfaceArea(grid: number[][]): number {
    // 1 -> 1 * 4 + 2 = 6 - (1 * 1 + 1 * 1) = 4
    // 2 -> 2 * 4 + 2 = 10 - (2 * 1 + 1 * 1) = 7
    // 3 -> 3 * 4 + 2 = 14 - (1 * 1 + 3 * 1) = 10
    // 4 -> 4 * 4 + 2 = 18 - (2 * 1 + 3 * 1) = 13

    let result = 0

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            const init = grid[i][j] > 0 ? (grid[i][j] * 4) + 2 : 0

            let sub = 0
            if (grid[i+1]?.[j]) sub += Math.min(grid[i][j], grid[i+1][j])
            if (grid[i-1]?.[j]) sub += Math.min(grid[i][j], grid[i-1][j])
            if (grid[i]?.[j+1]) sub += Math.min(grid[i][j], grid[i][j+1])
            if (grid[i]?.[j-1]) sub += Math.min(grid[i][j], grid[i][j-1])

            result += init - sub
        }
    }

    return result
};