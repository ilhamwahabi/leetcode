function spiralOrder(matrix: number[][]): number[] {
    // 1. Create variable result
    // 2. Iterate matrix until result.length === matrix.length * matrix[0].length
    // 3. Create variable i and j to track of row and col of the current coordinate
    // 4. Track which row and col that already iterated so no need go through them again
    // 5. Create variable orientation to track are we loop through row or column, and where
    // 6. Push each item to result
    // 7. Return the result

    const result = []
    let i = 0
    let j = 0
    const iteratedRows = {}
    const iteratedCols = {}
    let orientation = "row" // row | col
    let direction = "right" // right | left | top | bottom
    while (result.length < matrix.length * matrix[0].length) {
        result.push(matrix[i][j])

        if (orientation === "row" && direction === "right") {
            if (j < matrix[0].length - 1 && !iteratedCols[j + 1]) {
                j++
            } else {
                iteratedRows[i] = true
                orientation = "col"
                direction = "bottom"
                i++
            }
        } else if (orientation === "col" && direction === "bottom") {
            if (i < matrix.length - 1 && !iteratedRows[i + 1]) {
                i++
            } else {
                iteratedCols[j] = true
                orientation = "row"
                direction = "left"
                j--
            }
        } else if (orientation === "row" && direction === "left") {
            if (j > 0 && !iteratedCols[j - 1]) {
                j--
            } else {
                iteratedRows[i] = true
                orientation = "col"
                direction = "top"
                i--
            }
        } else if (orientation === "col" && direction === "top") {
            if (i > 0 && !iteratedRows[i - 1]) {
                i--
            } else {
                iteratedCols[j] = true
                orientation = "row"
                direction = "right"
                j++
            }
        }
    }

    return result
};