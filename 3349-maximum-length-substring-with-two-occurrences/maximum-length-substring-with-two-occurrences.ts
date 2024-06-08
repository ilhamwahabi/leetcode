function maximumLengthSubstring(s: string): number {
    // Iterate from 0 to n-1
    // Iterate until we found the third s[i], update max

    let max = 0

    for (let i = 0; i < s.length; i++) {
        const map = {}
        let j = i

        while (j < s.length) {
            const char = s[j]

            if (map[char]) {
                if (map[char] < 2) map[char]++
                else break
            } else {
                map[char] = 1
            }

            j++
        }

        if (j - i > max) max = j - i
    }

    return max
};