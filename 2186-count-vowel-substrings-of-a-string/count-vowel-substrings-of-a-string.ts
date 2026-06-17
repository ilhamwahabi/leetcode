function countVowelSubstrings(word: string): number {
    let count = 0

    for (let i = 0; i < word.length; i++) {
        const char = word[i]
        
        if (isVowel(char)) {
            const set = new Set([char])

            for (let j = i + 1; j < word.length; j++) {
                if (isVowel(word[j])) {
                    set.add(word[j])

                    if (set.size === 5) count++
                } else {
                    break
                }
            }                        
        }
    }

    return count
};

function isVowel(char: string) {
    return (
        char === "a" || char === "i" || char === "u" ||
        char === "e" || char === "o"
    )
}