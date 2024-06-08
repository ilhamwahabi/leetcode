function numSmallerByFrequency(queries: string[], words: string[]): number[] {
    const q = queries.map(query => freqSmall(query))
    const w = words.map(word => freqSmall(word))
    
    return q.map(query => {
        return w.reduce((acc, word) => {
            if (query < word) return acc + 1
            return acc
        }, 0)
    })
};

function freqSmall(word: string): number {
    const map = {}
    let char = word[0]

    for (const c of word) {
        map[c] ? map[c]++ : map[c] = 1
        if (c < char) char = c
    }

    return map[char]
}