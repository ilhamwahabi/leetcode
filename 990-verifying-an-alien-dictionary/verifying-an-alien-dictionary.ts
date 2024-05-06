function isAlienSorted(words: string[], order: string): boolean {
    // Store each character in 'order' with their order in string
    // Loop from 0 to words.length - 1, compare current word with next work
    // If words[i][j] === continue word[i+1][j] , if > return false, if < i++

    const map = {}
    for (let i = 0; i < order.length; i++) {
        const char = order[i]
        map[char] = i
    }

    for (let i = 0; i < words.length - 1; i++) {
        const curr = words[i]
        const next = words[i+1]

        for (let j = 0; j < curr.length; j++) {
            if (map[curr[j]] > map[next[j]] || next[j] === undefined) return false
            if (map[curr[j]] < map[next[j]]) break
        }
    }

    return true
};