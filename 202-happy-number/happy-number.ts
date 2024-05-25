function isHappy(n: number): boolean {
    const map = {}
    let result = getDigitsSumSquare(n)
    while (result !== 1 && map[result] === undefined) {
        map[result] = true
        result = getDigitsSumSquare(result)
    }
    return result === 1
};

function getDigitsSumSquare(n: number): number {
    let num = n
    let digit = 0

    while (num > 0) {
        digit += Math.pow(num % 10, 2)
        num = Math.floor(num / 10)
    }

    return digit
}