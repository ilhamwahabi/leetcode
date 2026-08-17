function rearrangeString(s: string, x: string, y: string): string {
    // Iterate s, check each character
    // if it's x then append to the front

    // Time: O(n)
    // Space: O(1)

    let result = ""

    for (const char of s) {
        if (char === y) {
            result = char + result
        } else {
            result += char
        }
    }

    return result
};