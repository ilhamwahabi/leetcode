function maxSum(grid: number[][]): number {
    let max = 0
    
    for (let i = 0; i < grid.length - 2; i++) {
        for (let j = 0; j < grid[i].length - 2; j++) {
            let sum = 0
            
            sum += grid[i][j] + grid[i][j+1] + grid[i][j+2]
            sum += grid[i+1][j+1]
            sum += grid[i+2][j] + grid[i+2][j+1] + grid[i+2][j+2]

            if (sum > max) max = sum
        }
    }

    return max
};