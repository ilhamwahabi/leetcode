function isCircularSentence(sentence: string): boolean {
    // Split sentence into array of word
    // Iterate splitted sentence, check last char of current word === first char of next word
    // Use i+1 % words.length

    const words = sentence.split(" ")

    let i = 0
    let valid = true
    while (i < words.length && valid) {
        const lastCharCurrWord = words[i][words[i].length - 1]
        const firstCharNextWord = words[(i+1) % words.length][0]

        if (lastCharCurrWord !== firstCharNextWord) valid = false
        else i++
    }

    return valid
};