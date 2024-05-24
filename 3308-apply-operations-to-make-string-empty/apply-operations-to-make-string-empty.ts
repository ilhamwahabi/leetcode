function lastNonEmptyString(s: string): string {
    // Count occurances of each char
    // Find the chars with highest occurances

    const occur: { [key: string]: number } = {}
    let max = 0
    let maxChars = ""

    for (let i = 0; i < s.length; i++) {
        const char = s[i]

        occur[char] ? occur[char]++ : occur[char] = 1
        if (occur[char] > max) {
            max = occur[char]
            maxChars = char
        } else if (occur[char] === max) {
            maxChars += char
        }
    }

    return maxChars
};