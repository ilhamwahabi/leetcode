function zigzagTraversal(grid: number[][]): number[] {
    const result = []

    let col = 0
    let dir = "right"
    for (let i = 0; i < grid.length; i++) {
        if (dir === "right") {
            for (let j = 0; j < grid[i].length; j += 2) {
                result.push(grid[i][j])
            }
            dir = "left"
        } else {
            const add = grid[i].length % 2 === 1 ? 1 : 0

            for (let j = grid[i].length - 1 - add; j >= 0; j -= 2) {
                result.push(grid[i][j])
            }
            dir = "right"
        }

    }

    return result
};