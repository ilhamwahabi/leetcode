function largestInteger(n: number, s: number): number {
    // Start from biggest possible number to 0
    // Check if it's digit === s then return it

    const max = Math.pow(10, n) - 1
    for (let i = max; i >= 0; i--) {
        let digit = 0

        let curr = i
        while (curr > 0) {
            digit += curr % 10
            curr = Math.floor(curr / 10)
        }

        if (digit === s) return i
    }

    return -1
};