function numOfStrings(patterns: string[], word: string): number {
    return patterns.reduce((prev, curr) => {
        if (word.includes(curr)) return prev + 1
        return prev
    }, 0)
};