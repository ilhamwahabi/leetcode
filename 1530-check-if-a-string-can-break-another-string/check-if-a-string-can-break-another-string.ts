function checkIfCanBreak(s1: string, s2: string): boolean {
    // Sort s1 and s2
    // Iterate them, check if its breaking with track using two variable

    const a = s1.split("").sort()
    const b = s2.split("").sort()

    let x = true
    let y = true
    for (let i = 0; i < a.length; i++) {
        x = x && (a[i] >= b[i])
        y = y && (a[i] <= b[i])

        if (!x && !y) return false
    }
    return true
};