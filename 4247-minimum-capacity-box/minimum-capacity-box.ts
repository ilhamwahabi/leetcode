function minimumIndex(capacity: number[], itemSize: number): number {
    let boxIndex = -1

    let i = 0
    while (i < capacity.length) {
        if (
            (capacity[i] >= itemSize) &&
            (boxIndex === -1 || (boxIndex !== -1 && capacity[i] < capacity[boxIndex]))
        ) {
            boxIndex = i
        }
        i++
    }

    return boxIndex
};