function matrixReshape(mat: number[][], r: number, c: number): number[][] {
    if (mat.length * mat[0].length !== r * c) return mat

    const result = []
    let row = []
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            row.push(mat[i][j])
            if (row.length === c) {
                result.push(row)
                row = []
            }
        }
    }
    return result
};