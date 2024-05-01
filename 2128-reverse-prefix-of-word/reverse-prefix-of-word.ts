function reversePrefix(word: string, ch: string): string {
    let reversed = ""
    let foundIndex = -1

    let i = 0
    while (i < word.length && foundIndex === -1) {
        if (word[i] === ch) foundIndex = i
        reversed = word[i] + reversed
        i++
    }

    return foundIndex === -1 ? word : reversed + word.slice(i)
};