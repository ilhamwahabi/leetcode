function minimumChairs(s: string): number {
    // Create value to track num of chair
    // Track max value that ever occurred, return it

    let value = 0
    let max = 0

    for (const char of s) {
        if (char === "L") value--
        else if (char === "E") {
            value++
            if (value > max) max = value
        }
    }

    return max
};