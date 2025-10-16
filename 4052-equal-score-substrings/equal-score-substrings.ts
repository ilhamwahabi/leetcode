function scoreBalance(s: string): boolean {
    // Iterate s, sum total score
    // Iterate s again, check if curr sum === sum - curr sum

    let sum = 0
    for (const char of s) {
        sum += char.charCodeAt(0) - 96
    }

    let curr = 0
    for (const char of s) {
        curr += char.charCodeAt(0) - 96
        if (curr === sum - curr) return true
    }
    return false
};