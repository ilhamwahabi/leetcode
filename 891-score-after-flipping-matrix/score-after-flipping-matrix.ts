function matrixScore(grid: number[][]): number {
    // Make biggest row
    for (let i = 0; i < grid.length; i++) {
        if (grid[i][0] === 0) {
            // Invert row
            for (let j = 0; j < grid[i].length; j++) {
                if (grid[i][j] === 0) grid[i][j] = 1;
                else grid[i][j] = 0;
            }
        }
    }

    // Make biggest col
    for (let i = 0; i < grid[0].length; i++) {
        let zero = 0
        
        for (let j = 0; j < grid.length; j++) {
            if (grid[j][i] === 0) zero++
        }

        if (zero > Math.floor(grid.length / 2)) {
            // Inver col
            for (let j = 0; j < grid.length; j++) {
                if (grid[j][i] === 0) grid[j][i] = 1
                else grid[j][i] = 0
            }
        }
    }

    // Get result
    let result = 0
    for (let i = 0; i < grid.length; i++) result += parseInt(grid[i].join(""), 2)
    return result
};