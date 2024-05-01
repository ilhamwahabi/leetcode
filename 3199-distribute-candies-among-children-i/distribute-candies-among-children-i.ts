function distributeCandies(n: number, limit: number): number {
    // 1. Store variable first, second, and third
    // 2. Create three nested loops until limit, the deepest loop append the remain
    // 3. Return counter

    let counter = 0

    for (let i = 0; i <= limit; i++) {
        for (let j = 0; j <= limit; j++) {
            for (let k = 0; k <= limit; k++) {
                if (i + j + k === n) counter++
            }
        }
    }

    return counter
};