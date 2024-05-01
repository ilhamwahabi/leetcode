function oddCells(m: number, n: number, indices: number[][]): number {
    // row = [0,0]   [1,0]   [1,1]
    // col = [0,0,0] [0,1,0] [0,2,0]
    // 1. Create array to store row and cols increment
    // 2. Iterate indices, increment row and col
    // 3. Nested for loop with row[i] + col[j], check if odd

    const rows = Array.from({ length: m }, () => 0)
    const cols = Array.from({ length: n }, () => 0)
    
    indices.forEach(([row, col]) => {
        rows[row]++
        cols[col]++
    })

    let odds = 0
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if ((rows[i] + cols[j]) % 2 === 1) odds++
        }
    }
    return odds
};