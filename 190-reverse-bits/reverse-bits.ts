function reverseBits(n: number): number {
    const binary = n.toString(2)

    let reverse = ""
    for (const bit of binary) {
        reverse = bit + reverse
    }

    return parseInt(reverse.padEnd(32, "0"), 2)
};