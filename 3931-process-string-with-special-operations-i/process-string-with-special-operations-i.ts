function processStr(s: string): string {
    // Time: O(n ^ n)
    // Space: O(n)

    let result = []

    for (const char of s) {
        if (char === "*") {
            result.pop()
        } else if (char === "#") {
            result.push(...result)
        } else if (char === "%") {
            result.reverse()
        } else {
            result.push(char)
        }
    }

    console.log(result)

    return result.join("")
};