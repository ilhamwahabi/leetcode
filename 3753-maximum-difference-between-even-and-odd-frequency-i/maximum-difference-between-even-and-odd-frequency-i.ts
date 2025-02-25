function maxDifference(s: string): number {
    // Space: O(n), linear
    // Time: O(1), constant

    const map = {}
    for (const char of s) {
        map[char] ? map[char]++ : map[char] = 1
    }

    let minOdd = Infinity
    let maxOdd = -Infinity
    let minEven = Infinity
    let maxEven = -Infinity

    for (const key in map) {
        if (map[key] % 2 === 0) {
            minEven = Math.min(minEven, map[key])
            maxEven = Math.max(maxEven, map[key])
        } else {
            minOdd = Math.min(minOdd, map[key])
            maxOdd = Math.max(maxOdd, map[key])
        }
    }

    return Math.max(minOdd - maxEven, maxOdd - minEven)
};