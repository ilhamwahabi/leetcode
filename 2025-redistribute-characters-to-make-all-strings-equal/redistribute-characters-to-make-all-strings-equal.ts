function makeEqual(words: string[]): boolean {
    const map = {}

    for (const word of words) {
        word.split("").forEach(char => {
            map[char] ? map[char]++ : map[char] = 1
        })
    }

    for (const key in map) {
        if (map[key] % words.length !== 0) return false
    }

    return true
};