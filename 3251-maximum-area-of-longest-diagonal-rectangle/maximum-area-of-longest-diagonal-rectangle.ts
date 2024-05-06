function areaOfMaxDiagonal(dimensions: number[][]): number {
    // Iterate dimensions, find max diagonal and max area

    let d = 0
    let a = 0

    dimensions.forEach(([length, width]) => {
        const diagonal = Math.sqrt(length * length + width * width)
        const area = length * width

        if (diagonal > d) {
            d = diagonal
            a = area
        } else if (diagonal === d && area > a) {
            a = area
        }
    })

    return a
};