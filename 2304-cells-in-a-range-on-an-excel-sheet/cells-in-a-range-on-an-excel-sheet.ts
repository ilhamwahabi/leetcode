function cellsInRange(s: string): string[] {
    // Row: loop from s[0] to s[3], convert to num, then convert to str again
    // Col: loop from s[1] to s[4]

    const result = []

    for (let i = s[0].charCodeAt(0); i <= s[3].charCodeAt(0); i++) {
        for (let j = parseInt(s[1]); j <= parseInt(s[4]); j++) {
            result.push(`${String.fromCharCode(i)}${j}`)
        }
    }

    return result
};