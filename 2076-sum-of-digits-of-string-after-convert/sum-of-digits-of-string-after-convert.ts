function getLucky(s: string, k: number): number {
    // Iterate each char in s, append it to result with charCodeAt(0) - 96
    // While k > 0, calculate all digit

    let tr = ""
    for (const char of s) tr += char.charCodeAt(0) - 96
    
    let a = k
    while (a > 0 && tr.length > 1) {
        let res = 0
        for (const num of tr) res += parseInt(num)

        tr = `${res}`
        a--
    }
    return parseInt(tr)
};