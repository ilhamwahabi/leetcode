function islandPerimeter(grid: number[][]): number {
    // For each island * 4 (maximum), substract with how many neighbor

    let total = 0
    let neighbour = 0

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                total++

                if (grid[i+1]?.[j] === 1) neighbour++
                if (grid[i-1]?.[j] === 1) neighbour++
                if (grid[i]?.[j+1] === 1) neighbour++
                if (grid[i]?.[j-1] === 1) neighbour++
            }
        }
    }

    return (total * 4) - neighbour
};