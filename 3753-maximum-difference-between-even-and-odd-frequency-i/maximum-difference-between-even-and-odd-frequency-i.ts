function maxDifference(s: string): number {
    // Space: O(n), linear
    // Time: O(1), constant

    const map = {}
    for (const char of s) {
        map[char] ? map[char]++ : map[char] = 1
    }

    let maxOdd = -Infinity
    let minEven = Infinity

    for (const key in map) {
        if (map[key] % 2 === 0) {
            minEven = Math.min(minEven, map[key])
        } else {
            maxOdd = Math.max(maxOdd, map[key])
        }
    }

    return maxOdd - minEven
};