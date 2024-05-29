function freqAlphabets(s: string): string {
    // Loop from back, if s[i] === # then result is s[i-2] + s[i-1]
    // if not then result is s[i]

    let result = ""

    let i = s.length - 1
    while (i >= 0) {
        if (s[i] === "#") {
            result = String.fromCharCode(+`${s[i-2]}${s[i-1]}` + 96) + result
            i -= 3
        } else {
            result = String.fromCharCode(+s[i] + 96) + result
            i --
        }
    }

    return result
};