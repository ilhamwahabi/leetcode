function checkRecord(s: string): boolean {
    // Iterate s
    // Check if there are 3 consecutive L: false
    // Count A, if >2: false

    let absent = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "A") {
            absent++
            if (absent >= 2) return false
        } else if (s[i] === "L" && s[i] === s[i-1] && s[i] === s[i+1]) {
            return false
        }
    }

    return true
};