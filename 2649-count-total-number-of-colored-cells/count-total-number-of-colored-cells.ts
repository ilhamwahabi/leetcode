function coloredCells(n: number): number {
    // 1=1 +4
    // 2=5 +8
    // 3=13 +12
    // 4=25 +16
    // 5=41

    // 1. Iterate from 1 to n
    // 2. Add it by 4 and accumulate that 4 again

    let total = 1
    let acc = 4

    for (let i = 2; i <= n; i++) {
        total += acc
        acc += 4
    }

    return total
};