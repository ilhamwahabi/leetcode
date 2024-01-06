function deleteGreatestValue(grid: number[][]): number {
    let sum = 0

    while (grid[0].length > 0) {
        let max = 0

        for (let i = 0; i < grid.length; i++) {
            let maxIdx = 0
            
            for (let j = 1; j < grid[i].length; j++) {
                if (grid[i][j] > grid[i][maxIdx]) {
                    maxIdx = j
                }
            }

            if (grid[i][maxIdx] > max) max = grid[i][maxIdx]
            grid[i].splice(maxIdx, 1)
        }

        sum += max
    }

    return sum
};