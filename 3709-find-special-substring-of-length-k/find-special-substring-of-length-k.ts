function hasSpecialSubstring(s: string, k: number): boolean {
    // Time: O(n), linear
    // Space: O(n), linear

    let curr = s[0]
    let count = 1

    for (let i = 1; i <= s.length; i++) {
        const char = s[i]

        if (char === curr) {
            count++
        }
        else {
            if (count === k) return true

            count = 1
            curr = char
        }
    }

    return false
};