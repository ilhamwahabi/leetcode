function minimumBoxes(apple: number[], capacity: number[]): number {
    capacity.sort((a,b) => b-a)
    let total = apple.reduce((prev, curr) => prev + curr, 0)

    let boxes = 0
    while (total > 0 && boxes < capacity.length) {
        total -= capacity[boxes]
        boxes++
    }
    return boxes
};