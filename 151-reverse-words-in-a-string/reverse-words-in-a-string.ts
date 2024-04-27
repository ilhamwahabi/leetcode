function reverseWords(s: string): string {
    // 1. Create variable result
    // 2. Iterate through s
    // 3. Identify the word => start with non space && end with space or end of the string
    // 4. Add each word to the start of the result
    // 5. Return result

    let result = []

    let word = ''
    for (const char of s) {
        if (char !== " ") {
            word += char
        } else {
            if (word) {
                result.unshift(word)
                word = ''
            }
        }
    }
    if (word) result.unshift(word)

    return result.join(" ")
};