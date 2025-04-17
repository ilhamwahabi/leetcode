function stringHash(s: string, k: number): string {
    // Time: O(n), linear
    // Space: O(1), constant

    let result = ""

    let hashValue = 0
    for (let i = 1; i < s.length + 1; i++) {
        hashValue += s[i - 1].charCodeAt(0) - 97

        if (i % k === 0) {
            result += String.fromCharCode(hashValue % 26 + 97)
            hashValue = 0
        }
    }

    return result
};