function getMaximumGold(grid: number[][]): number {
    // Backtracking
    // Start from each position that not 0, nested loop
    // From each position, move to u d l r, if 0 or undefined, terminate
    // Store the max

    let max = -Infinity

    function backtracking(i, j, total, set = new Set()) {
        const point = `${i}-${j}`

        // out of bound (undefined) OR 0 OR has been visited
        if (!grid[i]?.[j] || set.has(point)) {
            max = Math.max(total, max)
        } else {
            const copy = new Set(set)
            copy.add(point)

            backtracking(i + 1, j, total + grid[i][j], copy)
            backtracking(i - 1, j, total + grid[i][j], copy)
            backtracking(i, j + 1, total + grid[i][j], copy)
            backtracking(i, j - 1, total + grid[i][j], copy)
        }
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            backtracking(i, j, 0)
        }
    }

    return max
};