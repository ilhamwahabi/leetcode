function shiftGrid(grid: number[][], k: number): number[][] {
    // Create 1D array, append grid[i][j]
    // Shift 1D array
    // Push shift array to new 1D array

    const a = []
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            a.push(grid[i][j])
        }
    }

    const result = []
    let row = []
    for (let i = 0; i < a.length; i++) {
        row.push(a[(a.length - (k % a.length) + i) % (a.length)])

        if (row.length === grid[0].length) {
            result.push(row)
            row = []
        }
    }
    return result
};