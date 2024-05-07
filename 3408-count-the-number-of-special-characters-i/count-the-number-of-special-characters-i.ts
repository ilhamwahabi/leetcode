function numberOfSpecialChars(word: string): number {
    // Iterate character in word
    // Store it in two different map
    // Iterate one of the map, check if its others exist, +1

    const lc = {}
    const uc = {}
    for (const char of word) {
        if (char === char.toLowerCase()) lc[char] = true
        if (char === char.toUpperCase()) uc[char] = true
    }

    let count = 0
    for (const char in lc) {
        if (uc[char.toUpperCase()]) count++
    }
    return count
};