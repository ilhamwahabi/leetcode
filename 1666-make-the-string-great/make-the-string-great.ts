function makeGood(s: string): string {
    const str = s.split("")

    let i = 1
    while (i < str.length) {
        if (
            (str[i-1] !== str[i]) &&
            (str[i-1] === str[i].toLowerCase() || str[i-1].toLowerCase() === str[i])
        ) {
            str.splice(i-1, 2)
            i = 1
        } else {
            i++
        }
    }

    return str.join("")
};