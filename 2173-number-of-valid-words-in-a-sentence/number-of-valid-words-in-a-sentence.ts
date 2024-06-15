function countValidWords(sentence: string): number {
    const words = []
    let token = ""
    for (let i = 0; i < sentence.length + 1; i++) {
        const char = sentence[i]
        
        if (char === " " || char === undefined) {
            if (token) {
                words.push(token)
                token = ""
            }
        } else {
            token += char
        }
    }

    return words.filter(word => {
        let hyphen = 0
        let punc = 0
        for (let i = 0; i < word.length; i++) {
            const char = word[i]
            
            if (!/[a-z!.,\\-]/.test(char)) return false

            if (/[!.,]/.test(char)) {
                if (i !== word.length - 1) return false
                
                if (punc === 1) return false
                else punc++
            }

            if (char === "-") {
                if (!/[a-z]/.test(word[i-1] || "") || !/[a-z]/.test(word[i+1] || "")) return false
                
                if (hyphen === 1) return false
                else hyphen++
            }
        }

        console.log(word)

        return true
    }).length
};