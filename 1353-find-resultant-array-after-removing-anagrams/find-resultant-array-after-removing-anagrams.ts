function removeAnagrams(words: string[]): string[] {
    // Iterate words
    // Sort the word, save it in map
    // Later, compare it, if it exist dont add it to map

    const result = []

    let i = 0
    const stack = []
    words.forEach(word => {
        const sorted = word.split("").sort().join("")

        if (stack[stack.length - 1] !== sorted) {
            stack.push(sorted)
            result.push(word)
        }
    })

    return result
};