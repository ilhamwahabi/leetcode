function numberOfBeams(bank: string[]): number {
    let beams = 0

    let prevTotal = 0
    for (const row of bank) {
        let total = 0
        for (const col of row) if (col === "1") total += 1

        if (total > 0) {
            if (prevTotal > 0) beams += (prevTotal * total)
            prevTotal = total
        }
    }

    return beams
};