function constructRectangle(area: number): number[] {
    // 1. Loop until sqrt of area
    // 2. Return the latest W and L that we found

    let L = area
    let W = 1

    for (let i = 2; i <= Math.sqrt(area); i++) {
        if (Math.floor(area / i) === area / i) {
            L = area / i
            W = i
        }
    }

    return [L, W]
};