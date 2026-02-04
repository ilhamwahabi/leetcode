function reverseByType(s: string): string {
    const chars = s.split("")

    let a = 0;
    let z = s.length - 1
    while (a < z) {
        if (!chars[a].match(/[a-z]/)) {
            a++
        } else if (!chars[z].match(/[a-z]/)) {
            z--
        } else {
            const temp = chars[a]
            chars[a] = chars[z]
            chars[z] = temp

            a++
            z--
        }
    }

    a = 0;
    z = s.length - 1
    while (a < z) {
        if (chars[a].match(/[a-z]/)) {
            a++
        } else if (chars[z].match(/[a-z]/)) {
            z--
        } else {
            const temp = chars[a]
            chars[a] = chars[z]
            chars[z] = temp

            a++
            z--
        }
    }

    return chars.join("")
};