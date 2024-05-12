function largestLocal(grid: number[][]): number[][] {
    const result = []
    
    for (let a = 0; a < grid.length - 2; a++) {
        const row = []

        for (let b = 0; b < grid.length - 2; b++) {
            let max = 0

            for (let i = a; i < a + 3; i++) {
                for (let j = b; j < b + 3; j++) {
                    if (grid[i][j] > max) max = grid[i][j]
                }
            }

            row.push(max)
        }

        result.push(row)
    }

    return result
};