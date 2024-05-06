function checkValid(matrix: number[][]): boolean {
    // Create map to track occurances in column
    // Iterate matrix, create map to track occurances in column

    const cols = {}
    for (let i = 0; i < matrix.length; i++) {
        const row = {}
        for (let j = 0; j < matrix[i].length; j++) {
            const cell = matrix[i][j]

            if (row[cell]) return false 
            else row[cell] = true
            
            if (cols[j]?.[cell]) return false
            else cols[j] ? cols[j][cell] = true : cols[j] = { [cell]: true }
        }
    }

    return true
};