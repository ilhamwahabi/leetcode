function printVertically(s: string): string[] {
    // Split s by space
    // Find word with longest char
    // Iterate splitted s, iterate s, add it to result array

    const split = s.split(" ")
    
    let longest = 0
    split.forEach(word => {
        if (word.length > longest) longest = word.length
    })

    const result = Array(longest).fill("")
    split.forEach((word, index) => {
        for (let i = 0; i < word.length; i++) {
            result[i] += word[i]
        }
        for (let i = word.length; i < longest; i++) {
            result[i] += " "
        }
    })
    return result.map(r => r.trimEnd())
};