function isPrefixOfWord(sentence: string, searchWord: string): number {
    const split = sentence.split(" ")

    for (let i = 0; i < split.length; i++) {
        let valid = true
        let j = 0
        while (j < searchWord.length && valid) {
            if (split[i][j] !== searchWord[j]) valid = false
            else j++
        }

        if (valid) return i + 1
    }

    return -1
};