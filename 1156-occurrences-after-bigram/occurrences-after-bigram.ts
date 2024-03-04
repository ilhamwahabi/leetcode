function findOcurrences(text: string, first: string, second: string): string[] {
    const result = []

    const words = text.split(" ")
    for (let i = 2; i < words.length; i++) {
        if (words[i-2] === first && words[i-1] === second) {
            result.push(words[i])
        }
    }

    return result
};