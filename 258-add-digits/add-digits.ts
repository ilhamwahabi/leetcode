function addDigits(num: number): number {
    // 1. Check if String(num).length === 1, if so return
    // 2. Else do digitSum

    if (String(num).length === 1) return num
    return addDigits(digitSum(num))
};

function digitSum(num: number): number {
    if (num < 10) return num
    return digitSum(Math.floor(num / 10)) + num % 10
}