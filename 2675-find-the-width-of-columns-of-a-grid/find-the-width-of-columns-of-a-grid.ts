function findColumnWidth(grid: number[][]): number[] {
    // 1. Loop the cols
    // 2. Find its max abs number
    // 3. If its neg, add +1 to the result

    const result = []

    let row = 0
    let col = 0

    let max = 0
    while (row < grid.length && col < grid[row].length) {
        const length = String(grid[row][col]).length
        if (length > max) max = length

        if (row < grid.length - 1) {
            row++
        } else {
            row = 0
            col++

            result.push(max)
            max = 0
        }
    }

    return result
};