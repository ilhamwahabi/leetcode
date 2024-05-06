function mostVisited(n: number, rounds: number[]): number[] {
    // 4 [1,3,1,2] 123 -> 41 -> 2, 1=2 2=2 3=1 4=1
    // starting >= starting + 1 >= ... >= starting - 1
    // only check first and last

    const start = rounds[0]
    const last = rounds[rounds.length - 1]

    if (last >= start) {
        return Array.from({ length: last - start + 1 }, (_, i) => start + i)
    } else {
        const result = []

        let i = 1
        while (i <= last) {
            result.push(i)
            i++
        }
        result.push(...Array.from({ length: n - start + 1 }, (_, i) => start + i))

        return result
    }
};