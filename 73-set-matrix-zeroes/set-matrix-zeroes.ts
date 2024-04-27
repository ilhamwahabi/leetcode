/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
    // 1. Iterate through matrix
    // 2. If matrix[i][j] === 0, store it
    // 3. Iterate all zeros, change the row and col of it

    const zeros = []

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                zeros.push([i, j])
            }
        }
    }

    zeros.forEach(([i, j]) => {
        // update row
        for (let k = 0; k < matrix[i].length; k++) {
            matrix[i][k] = 0
        }

        // update cols
        for (let l = 0; l < matrix.length; l++) {
            matrix[l][j] = 0
        }
    })
};