function checkGoodInteger(n: number): boolean {
    let digit = 0
    let square = 0

    for (const char of String(n)) {
        const num = +char
        digit += num
        square += num * num
    }

    return square - digit >= 50
};