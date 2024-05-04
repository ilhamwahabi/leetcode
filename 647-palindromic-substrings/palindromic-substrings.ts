function countSubstrings(s: string): number {
    // Store computation in map
    // Loop from small length first

    const map = {}
    let total = 0

    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            const sub = s.slice(i, j + 1)

            if (map[sub] === undefined) map[sub] = isPalindrome(sub)
            if (map[sub]) total++               
        }
    }

    return total
};

function isPalindrome(s: string) {
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== s[s.length - 1 - i]) return false
    }

    return true
}