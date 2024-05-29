function decodeMessage(key: string, message: string): string {
    // Map each char in key to absolute order of the alphabet
    // Iterate message, get the result

    const map = { " ": " " } // 't': 'a'
    let order = 1
    for (const char of key) {
        if (!map[char]) {
            map[char] = String.fromCharCode(96 + order)
            order++
        }
    }

    let result = ""
    for (const char of message) {
        result += map[char]
    }
    return result
};