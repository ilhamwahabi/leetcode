function countIslands(grid: number[][], k: number): number {
    const visited = new Set()
    let total = 0

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            const cell = grid[i][j]

            const sum = dfs(grid, i, j, visited)
            if (sum !== 0 && sum % k === 0) {
                total++
            }
        }
    }

    return total
};

function dfs(grid: number[][], i: number, j: number, visited): number {
    if (!grid?.[i]?.[j]) return 0
    if (visited.has(`${i}-${j}`)) return 0

    visited.add(`${i}-${j}`)

    return grid?.[i]?.[j]
        + dfs(grid, i + 1, j, visited)
        + dfs(grid, i, j + 1, visited)
        + dfs(grid, i - 1, j, visited)
        + dfs(grid, i, j - 1, visited)
}