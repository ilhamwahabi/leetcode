function partitionString(s: string): number {
    let count = 0

    const curr = new Set()
    for (let i = 0; i <= s.length + 1; i++) {
        const char = s[i]

        if (curr.has(char)) {
            count++
            curr.clear()
        }

        curr.add(char)
    }

    return count
};