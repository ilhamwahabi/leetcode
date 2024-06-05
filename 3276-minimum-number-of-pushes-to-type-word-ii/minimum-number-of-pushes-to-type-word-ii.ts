function minimumPushes(word: string): number {
    // Count occurances of each character
    // Sort descending based on occurances, for each basis 8, the push + 1

    const map: { [key: string]: number } = {}
    for (const char of word) {
        map[char] ? map[char]++ : map[char] = 1
    }

    const sorted = Object.values(map).sort((a,b) => b - a)

    let result = 0
    sorted.forEach((occur, index) => {
        result += (occur * (Math.floor(index / 8) + 1))
    })
    return result
};