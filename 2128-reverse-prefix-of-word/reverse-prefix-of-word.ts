function reversePrefix(word: string, ch: string): string {
    let reversed = ""
    let foundIndex = -1

    let i = 0
    while (i < word.length && foundIndex === -1) {
        if (foundIndex === -1) {
            if (word[i] === ch) {
                foundIndex = i
                reversed = word[i] + reversed + word.slice(i + 1)
            } else {
                reversed = word[i] + reversed
            }
        } else {
            reversed = reversed + word[i]
        }
        i++
    }

    return foundIndex === -1 ? word : reversed
};