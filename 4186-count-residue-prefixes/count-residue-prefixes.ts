function residuePrefixes(s: string): number {
    const set = new Set()

    let count = 0
    for (let i = 0; i < s.length; i++) {
        const char = s[i]
        const len = i + 1

        set.add(char)
        if (len % 3 === set.size) count++
    }
    return count
};