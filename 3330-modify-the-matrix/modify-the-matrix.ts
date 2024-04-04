function modifiedMatrix(matrix: number[][]): number[][] {
    const result = []

    for (let i = 0; i < matrix.length; i++) {
        const row = []
        
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] !== -1) {
                row.push(matrix[i][j])
            } else {
                let max = -1

                for (let k = 0; k < matrix.length; k++) {
                    if (matrix[k][j] > max) max = matrix[k][j]
                }
 
                row.push(max)
            }
        }

        result.push(row)
    }

    return result
};