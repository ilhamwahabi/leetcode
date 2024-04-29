function sumOfTheDigitsOfHarshadNumber(x: number): number {
    const sum = digitSum(x)

    if (x % sum === 0) return sum
    return -1
};

function digitSum(x: number) {
    if (x < 10) return x
    return digitSum(Math.floor(x / 10)) + (x % 10)
}