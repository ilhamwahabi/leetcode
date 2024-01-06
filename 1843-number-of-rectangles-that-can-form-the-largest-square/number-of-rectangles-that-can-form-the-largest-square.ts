function countGoodRectangles(rectangles: number[][]): number {
    let total = 0

    let largest = 0
    rectangles.forEach(rect => {
        const square = Math.min(rect[0], rect[1])

        if (square > largest) {
            largest = square
            total = 1
        } else if (square === largest) {
            total++
        }
    })

    return total
};