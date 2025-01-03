function vowelStrings(words: string[], queries: number[][]): number[] {
    const prefixSum = []

    let sum = 0
    const vowel = new Set(['a', 'i', 'u', 'e', 'o'])
    words.forEach(word => {
        if (vowel.has(word.at(0)) && vowel.has(word.at(-1))) sum++
        prefixSum.push(sum)
    })

    return queries.map(query => {
        const [l, r] = query

        return (prefixSum[r] ?? 0) - (prefixSum[l - 1] ?? 0)
    })
};