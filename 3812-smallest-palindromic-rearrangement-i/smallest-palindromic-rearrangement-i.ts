function smallestPalindrome(s: string): string {
    // Get substring until Math.floor(s / 2)
    // Split and sort it, ascending for the front, descending for the back

    // Time: O(n log(n)), sorting
    // Space: O(n)

    const half = s.slice(0, Math.floor(s.length / 2)).split("")
    half.sort()

    let result = half.join("")
    if (s.length % 2 === 1) result += s[Math.floor(s.length / 2)]
    return result + half.reverse().join("")
};