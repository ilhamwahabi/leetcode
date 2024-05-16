function minBitFlips(start: number, goal: number): number {
    // Get binary reps of each number
    // Loop from back to front, compare each bit, count the difference
    // Treat bit as 0 if undefined

    const a = start.toString(2)
    const b = goal.toString(2)

    let diff = 0
    let i = 0
    while (i < Math.max(a.length, b.length)) {
        if ((a[a.length - 1 - i] || "0") !== (b[b.length - 1 - i] || "0")) diff++
        i++
    }
    return diff
};