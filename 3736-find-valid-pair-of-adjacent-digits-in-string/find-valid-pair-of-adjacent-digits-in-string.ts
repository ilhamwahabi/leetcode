function findValidPair(s: string): string {
    const map = {}
    for (const char of s) {
        map[char] ? map[char]++ : map[char] = 1
    }

    for (let i = 1; i < s.length; i++) {
        const first = s[i-1]
        const second = s[i]

        if (
            first !== second
            && map[first] === +first
            && map[second] === +second
        ) {
            return first + second
        }
    }

    return ""
};