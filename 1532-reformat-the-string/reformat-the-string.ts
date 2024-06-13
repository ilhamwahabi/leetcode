function reformat(s: string): string {
    // Store each value to letters and digits
    // Construct result string, witht the first letter is the longest one
    // Thus, if different >1 then return ""

    const letters = []
    const digits = []
    for (const char of s) {
        if (/[0-9]/.test(char)) digits.push(char)
        else letters.push(char)
    }

    if (Math.abs(letters.length - digits.length) > 1) return ""

    let result = ""
    let i = 0
    let j = 0
    if (letters.length > digits.length) { result = letters[0]; i = 1 }
    else if (digits.length > letters.length) { result = digits[0]; j = 1 }

    while (i < letters.length && j < digits.length) {
        if (letters.length > digits.length) result += digits[j] + letters[i]
        else result += letters[i] + digits[j]

        i++
        j++
    }

    return result
};