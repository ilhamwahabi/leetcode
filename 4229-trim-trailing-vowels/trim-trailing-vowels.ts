function trimTrailingVowels(s: string): string {
    let result = ""

    let isChecking = true
    for (let i = s.length - 1; i >= 0; i--) {
        const char = s[i]

        if (
            isChecking &&
            !(char == "a" || char == "i" || char == "u" || char == "e" || char == "o")
        ) {
            isChecking = false
        }

        if (!isChecking) result = char + result
    }

    return result
};