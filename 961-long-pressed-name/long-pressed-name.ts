function isLongPressedName(name: string, typed: string): boolean {
    // Use two pointer, first pointer to keep start of char
    // The second one to count the lenght of char
    // If next char is different or length is not enough the false
    // Else true

    let a = 0
    let b = 0

    while (b < typed.length) {
        if (name[a] === typed[b]) {
            a++
            b++
        } else {
            if (typed[b - 1] !== typed[b]) return false
            else b++
        }
    }

    return a === name.length
};