function toHex(num: number): string {
    // 1 1
    // 9 9
    // 10 a
    // 11 b 
    // 12 c
    // 13 d
    // 14 e
    // 15 f
    // 16 10
    // 17 11
    // 26 1a -> 16 + 10 -> 10 + a

    if (num < 0) return toHex(parseInt("ffffffff", 16) + 1 + num)
    if (num === 0) return "0"

    let result = ""
    let curr = num

    while (curr > 0) {
        const div = Math.floor(curr / 16)
        const mod = curr % 16

        result = (mod >= 10 ? getChar(mod) : mod) + result
        curr = div
    }

    return result
};

function getChar(num: number) {
    return {
        "10": "a",
        "11": "b",
        "12": "c",
        "13": "d",
        "14": "e",
        "15": "f",
    }[num]
}