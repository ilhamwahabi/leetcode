function gcdOfOddEvenSums(n: number): number {
    // 16 = 1 2 4 8 16
    // 20 = 1 2 4 5 10 20

    // Time: O(n), iterate number and fact
    // Space: O(1), storing const only

    const odd = n * (n + 0)
    const even = n * (n + 1)

    for (let i = Math.floor(odd / 2); i > 0; i--) {
        if (odd % i === 0 && even % i === 0) return i
    }

    return odd
};