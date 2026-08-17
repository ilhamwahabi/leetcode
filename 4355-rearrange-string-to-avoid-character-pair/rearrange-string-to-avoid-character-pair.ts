function rearrangeString(s: string, x: string, y: string): string {
    // Iterate s, check each character
    // if it's y then append to the ys

    // Time: O(n)
    // Space: O(1)

    let ys = ""
    let elses = ""

    for (const char of s) {
        if (char === y) {
            ys += char
        } else {
            elses += char
        }
    }

    return ys + elses
};