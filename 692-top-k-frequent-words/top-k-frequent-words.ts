function topKFrequent(words: string[], k: number): string[] {
    // Count occur of each word
    // Sort Object.entries(occur) based on occur and then lex
    // Return sorted.slice(0, k)

    const occur: { [key: string]: number } = {}
    words.forEach(word => {
        occur[word] ? occur[word]++ : occur[word] = 1
    })

    const sorted = Object.entries(occur).sort((a,b) => {
        if (a[1] !== b[1]) return b[1] - a[1]
        return a[0].localeCompare(b[0])
    })

    return sorted.slice(0, k).map(el => el[0])
};