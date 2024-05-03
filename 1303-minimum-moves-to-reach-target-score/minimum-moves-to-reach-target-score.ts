function minMoves(target: number, maxDoubles: number): number {
    // We start from target to 1
    // If target is odd, decrement it by 1, then if any doubles left, divise it
    // If target is even, then if any dobules left, divise it, otherwise subtract

    let t = target
    let d = maxDoubles
    let step = 0

    while (t > 1) {
        if (t % 2 === 1) {
            t--
            step++
        } else {
            if (d > 0) {
                t /= 2
                d--
                step++
            } else {
                step += t - 1
                t = 1
            }
        }
    }

    return step
};