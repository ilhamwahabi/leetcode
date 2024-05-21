function arrangeWords(text: string): string {
    const split = text.split(" ")
    split[0] = split[0][0].toLowerCase() + split[0].slice(1)

    split.sort((a,b) => a.length - b.length)
    split[0] = split[0][0].toUpperCase() + split[0].slice(1)

    return split.join(" ")
};