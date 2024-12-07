function smallestNumber(n: number): number {
    return parseInt("1".repeat(n.toString(2).length), 2)
};