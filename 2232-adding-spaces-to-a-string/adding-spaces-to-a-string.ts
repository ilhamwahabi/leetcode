function addSpaces(s: string, spaces: number[]): string {
    // Iterate spaces from back
    // Update the string with adding space

    // let res = s

    // for (let i = spaces.length - 1; i >= 0; i--) {
    //     const sub = res.slice(spaces[i])
    //     res = res.slice(0, spaces[i]) + " " + sub
    // }

    // return res

    let res = ""
    let i = 0

    for (let j = 0; j < s.length; j++) {
        if (j === spaces[i]) {
            res += " "
            i++
        }
        res += s[j]
    }

    return res
};