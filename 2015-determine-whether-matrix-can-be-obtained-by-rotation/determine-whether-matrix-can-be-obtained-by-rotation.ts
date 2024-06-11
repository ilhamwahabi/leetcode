function findRotation(mat: number[][], target: number[][]): boolean {
    let deg90 = true
    let deg180 = true
    let deg270 = true
    let deg360 = true

    const n = mat.length - 1
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            // 90 deg
            // 0,0 0,2
            // 0,1 1,2
            // 0,2 2,2
            if (target[i][j] !== mat[j][n - i]) deg90 = false

            // 180 deg
            // 0,0 2,2
            // 0,1 2,1
            if (target[i][j] !== mat[n - i][n - j]) deg180 = false

            // 270 deg
            // 0,0 2,0
            // 0,1 1,0
            // 0,2 0,0
            if (target[i][j] !== mat[n - j][i]) deg270 = false

            // 360 deg
            if (target[i][j] !== mat[i][j]) deg360 = false

            // Early return
            if (!deg90 && !deg180 && !deg270 && !deg360) return false
        }
    }

    return deg90 || deg180 || deg270 || deg360
};