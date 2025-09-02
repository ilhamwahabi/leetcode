function countIslands(grid: number[][], k: number): number {
    let total = 0

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            const cell = grid[i][j]

            const sum = dfs(grid, i, j)
            if (sum !== 0 && sum % k === 0) {
                total++
            }
        }
    }

    return total
};

function dfs(grid: number[][], i: number, j: number): number {
    if (!grid?.[i]?.[j]) return 0

    const value = grid[i][j]
    grid[i][j] = 0

    return value
        + dfs(grid, i + 1, j)
        + dfs(grid, i, j + 1)
        + dfs(grid, i - 1, j)
        + dfs(grid, i, j - 1)
}