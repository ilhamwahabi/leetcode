function brokenCalc(startValue: number, target: number): number {
    // Start from target to startValue
    // If target is odd, plus it, if even divide it

    let t = target
    let step = 0

    while (t !== startValue) {
        if (t % 2 === 1 || t < startValue) {
            t++
            step++
        } else {
            t /= 2
            step++
        }
    }

    return step
};