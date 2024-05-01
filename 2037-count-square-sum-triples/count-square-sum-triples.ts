function countTriples(n: number): number {
    // 1. Create three nested loops
    // 2. Check if math.pow between i and j === math.pow k, if so add +2 ([i,j,k] and [j,i,k])

    let counter = 0

    for (let i = 1; i <= n - 2; i++) {
        for (let j = i + 1; j <= n - 1; j++) {
            for (let k = j + 1; k <= n; k++) {
                if (Math.pow(i, 2) + Math.pow(j, 2) === Math.pow(k, 2)) counter += 2
            }
        }
    }

    return counter
};