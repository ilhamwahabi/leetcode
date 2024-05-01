function reversePrefix(word: string, ch: string): string {
    let reversed = ""
    let foundIndex = -1

    for (let i = 0; i < word.length; i++) {
        if (foundIndex === -1) {
            if (word[i] === ch) foundIndex = i
            reversed = word[i] + reversed
        } else {
            reversed = reversed + word[i]
        }
    }

    return foundIndex === -1 ? word : reversed
};