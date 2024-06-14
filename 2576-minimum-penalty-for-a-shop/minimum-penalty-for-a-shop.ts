function bestClosingTime(customers: string): number {
    // Iterate, count Y and N
    // Iterate again, if we close at 0: count (Y * 1 + N * -1) + (rY * -1 + rN * 1), store max

    let prevY = 0
    let prevN = 0
    let nextY = 0
    let nextN = 0
    for (const customer of customers) {
        if (customer === "Y") nextY++
        else nextN++
    }

    let max = -1
    let idx = -1
    for (let i = 0; i <= customers.length; i++) {
        const prev = prevY * 1 + prevN * -1
        const next = nextY * -1 + nextN * 1

        console.log(i, prev + next)

        if (prev + next > max) {
            max = prev + next
            idx = i
        }

        const customer = customers[i]
        if (customer === "Y") {
            prevY++
            nextY--
        } else {
            prevN++
            nextN--
        }
    }
    return idx
};