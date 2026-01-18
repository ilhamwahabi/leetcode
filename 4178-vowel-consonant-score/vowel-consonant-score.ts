function vowelConsonantScore(s: string): number {
    let v = 0
    let c = 0

    for (const char of s) {
        if (char.match(/[aiueo]/)) v++
        else if (char.match(/[a-z]/)) c++
    }

    if (c === 0) return 0
    return Math.floor(v / c)
};