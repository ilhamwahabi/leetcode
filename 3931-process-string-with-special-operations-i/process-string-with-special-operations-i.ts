function processStr(s: string): string {
    // Time: O(n ^ n)
    // Space: O(n)

    let result = ""
    let reverse = ""

    for (const char of s) {
        if (char === "*") {
            result = result.slice(0, result.length - 1)
            reverse = reverse.slice(1)
        } else if (char === "#") {
            result += result
            reverse += reverse
        } else if (char === "%") {
            const temp = result

            result = reverse
            reverse = temp
        } else {
            result = result + char
            reverse = char + reverse
        }
    }

    return result
};