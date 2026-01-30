function partitionLabels(s: string): number[] {
    const last = {}
    for (let i = 0; i < s.length; i++) {
        const char = s[i]
        last[char] = i
    }

    const result = []

    let a = 0
    let z = 0

    let curr = a
    while (curr < s.length) {
        const char = s[curr]
        z = Math.max(z, last[char])

        if (curr === z) {
            result.push(z - a + 1)
            a = curr + 1
            z = curr + 1
        }
        
        curr++
    }

    return result
};