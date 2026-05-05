function sortVowels(s: string): string {
    // Iterate s, store all vowel, also count occurance for each in map to retain order
    // Iterate s, replace all vowel based on result

    const map = new Map<string, string[]>()
    for (const char of s) {
        if (isVowel(char)) {
            if (map.get(char)) {
                map.get(char).push(char)
            } else {
                map.set(char, [char])
            }
        }
    }

    const vowels = []
    for (const [key, value] of map) {
        vowels.push(value)
    }
    vowels.sort((a,b) => {
        if (a.length !== b.length) return b.length - a.length
        return 0
    })

    const result = s.split("")

    let idx = 0
    let curr = 0
    for (let i = 0; i < result.length; i++) {
        const char = result[i]

        if (isVowel(char)) {
            result[i] = vowels[idx][curr]

            if (curr === vowels[idx].length - 1) {
                idx++
                curr = 0
            } else {
                curr++
            }
        }
    }

    return result.join("")
};

const isVowel = (char: string): boolean => {
    return char === "a" || char === "i"
        || char === "u" || char === "e" || char === "o"
}