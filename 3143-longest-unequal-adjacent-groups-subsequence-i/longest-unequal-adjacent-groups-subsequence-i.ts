function getLongestSubsequence(words: string[], groups: number[]): string[] {
    // Iterate groups
    // Store current binary, add to result
    // Store another word, if its differenct from previous binary

    const result = [words[0]]

    let current = groups[0]
    for (let i = 1; i < groups.length; i++) {
        if (groups[i] !== current) {
            result.push(words[i])
            current = groups[i]
        }
    }

    return result
};