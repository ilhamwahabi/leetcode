function consecutiveSetBits(n: number): boolean {
    const str = n.toString(2)

    let ones = 0
    for (let i = 0; i < str.length - 1; i++) {
        if (str[i] === "1" && str[i + 1] === "1") ones++
    }

    return ones === 1
};