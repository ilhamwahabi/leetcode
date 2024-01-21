function findMissingAndRepeatedValues(grid: number[][]): number[] {
    let twice = null
    let missing = null

    const map = {}
    grid.forEach(row => {
        row.forEach(cell => {
            if (map[cell]) twice = cell
            else map[cell] = true
        })
    })

    let i = 1
    while (i <= grid.length * grid.length && !missing) {
        if (!map[i]) missing = i
        else i++
    }

    return [twice, missing]
};