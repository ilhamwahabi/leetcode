function minSteps(s: string, t: string): number {
    // Find the difference between two string
    // Create map
    // Iterate s, add char count
    // Iterate t, min char count
    // Iterate map, count abs of each count

    const map = {}

    for (const char of s) {
        map[char] ? map[char]++ : map[char] = 1
    }

    for (const char of t) {
        if (map[char] !== undefined) map[char]--
        else map[char] = -1
    }

    let diff = 0
    for (const key in map) diff += Math.abs(map[key])
    return diff
};