function generateTag(caption: string): string {
    const words = caption.split(" ")

    let result = "#"
    for (let i = 0; i < words.length; i++) {
        const word = words[i]
        const firstChar = word.slice(0, 1)
        
        if (i === 0 || result === "#") result += firstChar.toLowerCase()
        else result += firstChar.toUpperCase()

        result += word.slice(1).toLowerCase()
    }

    return result.slice(0, 100)
};