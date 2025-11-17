function minLengthAfterRemovals(s: string): number {
    let a = 0;
    let b = 0;

    for (const char of s) {
        if (char === "a") a++
        if (char === "b") b++
    }

    return Math.abs(a - b)
};