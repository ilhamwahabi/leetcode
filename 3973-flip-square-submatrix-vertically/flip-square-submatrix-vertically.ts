function reverseSubmatrix(grid: number[][], x: number, y: number, k: number): number[][] {
    // Start from row x and column y, iterate y until k, then x until <= Math.floor((grid.length - 1 - x) / 2)
    // Swap each element in x and (grid.length - 1) - currRow - x

    // Time: O(n ^ n), iterate row and cell in matrix
    // Space: O(1), only store constant

    const matrixHeight = grid.length - 1

    for (let i = x; i < x + Math.floor(k / 2); i++) {
        for (let j = y; j < y + k; j++) {
            const currCell = grid[i][j]

            const swapRow = (x + k - 1) - (i - x) 
            const swapCell = grid[swapRow][j]

            grid[i][j] = swapCell
            grid[swapRow][j] = currCell
        }
    }

    return grid
};