function modifyString(s: string): string {
    // Iterate s, append to result
    // If char is ?, then loop from 1 to 26, the first that not equal with prev and next
    let result = ""

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== "?") result += s[i]
        else {
            for (let j = 1; j <= 26; j++) {
                const char = String.fromCharCode(j + 96)
                if (char !== result[i - 1] && char !== s[i + 1]) {
                    result += char
                    break
                }
            }
        }
    }

    return result
};