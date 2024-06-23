function countBinarySubstrings(s: string): number {
    // Create array of group, [2,2,2,2]
    // Iterate array of group, determine min between two item
    const group = []
    let curr = null
    for (const char of s) {
        if (char === curr) {
            group[group.length - 1]++
        } else {
            curr = char
            group.push(1)
        }
    }

    let result = 0
    for (let i = 0; i < group.length - 1; i++) {
        result += Math.min(group[i], group[i + 1])
    }
    return result
};