function sortVowels(s: string): string {
    // Iterate s, store all vowel
    // sort all the vowel ascended
    // Iterate s, add consonant to result, add vowel based on sorted

    const vowel = {
        'a': 'a'.charCodeAt(0),
        'i': 'i'.charCodeAt(0),
        'u': 'u'.charCodeAt(0),
        'e': 'e'.charCodeAt(0),
        'o': 'o'.charCodeAt(0),
        'A': 'A'.charCodeAt(0),
        'I': 'I'.charCodeAt(0),
        'U': 'U'.charCodeAt(0),
        'E': 'E'.charCodeAt(0),
        'O': 'O'.charCodeAt(0),
    }
    const vowels = []
    for (const char of s) {
        if (vowel[char]) vowels.push(char)
    }

    vowels.sort((a,b) => vowel[a] - vowel[b])
    
    let result = ""
    let i = 0
    for (const char of s) {
        if (vowel[char]) {
            result += vowels[i]
            i++
        } else {
            result += char
        }
    }
    return result
};