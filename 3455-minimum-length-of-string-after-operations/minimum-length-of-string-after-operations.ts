function minimumLength(s: string): number {
    // Iterate s, store all occurances of each char
    // Iterate the occurances, count the length with max(2, map[char])

    // Time: O(n + n) ~ O(n), linear
    // Space: O(n), linear

    const map = {}
    for (const char of s) {
        map[char] ? map[char]++ : map[char] = 1
    }

    let result = 0
    for (const key in map) {
        if (map[key] > 2) {
            if (map[key] % 2 === 1) result++
            if (map[key] % 2 === 0) result += 2
        } else {
            result += map[key]
        }
    }
    return result
};