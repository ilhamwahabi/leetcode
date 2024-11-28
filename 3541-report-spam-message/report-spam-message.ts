function reportSpam(message: string[], bannedWords: string[]): boolean {
    const set = new Set(bannedWords)
    let count = 0

    for (const str of message) {
        if (set.has(str)) {
            count++
            if (count === 2) return true
        }
    }

    return false
};