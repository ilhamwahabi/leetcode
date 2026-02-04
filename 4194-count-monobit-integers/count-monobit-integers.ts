function countMonobit(n: number): number {
    // 0 1 10 11 100 101 110 111 1000
    // 0 1 2  [3] 4   5   6  [7]   8

    let count = 1

    let curr = 2
    for (let i = 1; i <= n; i++) {
        if (i === curr - 1) {
            count++
            curr *= 2
        }
    }

    return count
};