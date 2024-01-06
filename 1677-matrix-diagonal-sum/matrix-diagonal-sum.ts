function diagonalSum(mat: number[][]): number {
    let sum = 0

    let col = 0
    for (const row of mat) {
        if (col === row.length - 1 - col) {
            sum += row[col]
        } else {
            sum += row[col] + row[row.length - 1 - col]
        }
        col++
    }

    return sum
};