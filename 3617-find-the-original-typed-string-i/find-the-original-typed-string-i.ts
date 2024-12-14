function possibleStringCount(word: string): number {
    let total = 1

    let prev = undefined
    let count = 0
    for (const char of word) {
        if (char !== prev) {
            prev = char
            total += count
        } else {
            total++
        }
    }

    return total
};