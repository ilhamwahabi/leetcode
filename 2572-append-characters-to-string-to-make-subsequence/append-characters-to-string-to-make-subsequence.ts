function appendCharacters(s: string, t: string): number {
    let a = 0
    let b = 0

    while (a < s.length && b < t.length) {
        const aChar = s[a]
        const bChar = t[b]

        if (aChar === bChar) b++
        a++
    }

    return t.length - b
};