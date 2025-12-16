function reverseWords(s: string): string {
    const vowels = new Set(["a", "e", "i", "o", "u"])
    let firstVowelCount = 0

    let sentence = ""
    
    let word = ""
    let rev = ""
    let vowelCount = 0
    for (let i = 0; i < s.length + 1; i++) {
        const char = s[i]
        if (char === " " || char === undefined) {
            if (sentence === "" || vowelCount !== firstVowelCount) {
                if (sentence === "") firstVowelCount = vowelCount
                sentence += word
            } else {
                sentence += rev
            }
            if (char === " ") sentence += " "

            word = ""
            rev = ""
            vowelCount = 0
        } else {
            word += char
            rev = char + rev
            if (vowels.has(char)) vowelCount++
        }
    }

    return sentence
};