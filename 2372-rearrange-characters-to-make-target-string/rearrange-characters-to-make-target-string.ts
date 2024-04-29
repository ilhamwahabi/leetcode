function rearrangeCharacters(s: string, target: string): number {
    // 1. Create map to store the occurrances of all chars in target
    // 2. Create map to store the occurrances of all chars in s that needed to build target
    // 3. Create variable result to count the possible target
    // 4. Iterate all characters in s map, return the result of min from all divided char count

    const x = {}
    const y = {}

    for (const char of target) {
        x[char] ? x[char]++ : x[char] = 1
    }

    for (const char of s) {
        if (x[char]) {
            y[char] ? y[char]++ : y[char] = 1
        }
    }

    let min = Infinity

    for (const key in x) {
        if (!y[key]) return 0

        const count = Math.floor(y[key] / x[key])
        if (count < min) min = count
    }

    return min
};