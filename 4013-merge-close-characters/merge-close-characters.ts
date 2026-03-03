function mergeCharacters(s: string, k: number): string {
    let result = ""
    const pos = {}

    for (const char of s) {
        const charIndex = result.length

        if (pos[char] === undefined || charIndex - pos[char] > k) {
            result += char
            pos[char] = charIndex
        }
    }

    return result
};