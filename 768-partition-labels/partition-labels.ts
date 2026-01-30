function partitionLabels(s: string): number[] {
    const result = []

    let a = 0
    let z = 0

    let curr = a
    while (curr < s.length) {
        const char = s[curr]

        for (let i = s.length - 1; i > curr; i--) {
            if (s[i] === char) {
                z = Math.max(z, i)
                break
            }
        }

        if (curr === z) {
            result.push(z - a + 1)
            a = curr + 1
            z = curr + 1
        }
        
        curr++
    }

    return result
};