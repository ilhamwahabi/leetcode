function minOperations(grid: number[][], x: number): number {
    // 1. Iterate and store all element in the matrix, get average
    // 2. Loop again until we found element that is <= avg
    // 3. Loop again to determine how many step from i to center is needed
    
    const arr = []
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            arr.push(grid[i][j])
        }
    }

    arr.sort((a,b) => a-b)
    const center = arr[Math.floor(arr.length / 2)]

    let step = 0
    for (const el of arr) {
        if (Math.abs(el - center) % x === 0) {
            step += Math.abs(el - center) / x
        } else {
            return -1
        }
    }
    return step
};