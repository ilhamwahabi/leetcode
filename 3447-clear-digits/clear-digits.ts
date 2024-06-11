function clearDigits(s: string): string {
    const stack = []

    for (const char of s) {
        if (/[0-9]/.test(char)) {
            stack.pop()
        } else {
            stack.push(char)
        }
    }

    return stack.join("")
};