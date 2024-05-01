function isStrictlyPalindromic(n: number): boolean {
    // 1. Iterate from 2 to n-2
    // 2. Convert number using .toString() to another base
    // 3. Parse to string, check if its palindrome

    for (let i = 2; i <= n - 2; i++) {
        const base = n.toString(i)

        for (let i = 0; i < base.length / 2; i++) {
            if (base[i] !== base[base.length - 1 - i]) return false
        }
    }

    return true
};