function isValid(word: string): boolean {
    if (word.length < 3) return false
    if (!/^[a-zA-Z0-9]+$/i.test(word)) return false

    let vowel = false
    let consonant = false
    
    let i = 0
    while (i < word.length && (!vowel || !consonant)) {
        if (/^[a-zA-Z]$/.test(word[i])) {
            if (/^[aiueoAIUEO]$/.test(word[i])) vowel = true
            else consonant = true
        }
        i++
    }

    return vowel && consonant
};