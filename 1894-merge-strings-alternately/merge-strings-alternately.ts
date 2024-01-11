function mergeAlternately(word1: string, word2: string): string {
    let output = ""

    let i = 0
    let j = 0
    while (i < word1.length || j < word2.length) {
        if (i < word1.length && j < word2.length) {
            output += word1[i] + word2[j]
            i++
            j++
        } else if (i < word1.length) {
            output += word1.slice(i)
            i = word1.length
        } else if (j < word2.length) {
            output += word2.slice(j)
            j = word2.length
        }
     }

    return output
};