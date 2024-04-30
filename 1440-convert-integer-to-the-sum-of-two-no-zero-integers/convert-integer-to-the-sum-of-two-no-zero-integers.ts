function getNoZeroIntegers(n: number): number[] {
    // 1. Iterate until a >= b
    // 2. Start from a=1 and b=n-a, if a or b contain zero increase a and decrease b
    // 3. Return the value that not contain zero

    let a = 1
    let b = n - 1
    let found = false

    while (!found && a < b) {
        if (containZero(a) || containZero(b)) {
            a++
            b--
        } else {
            found = true
        }
    }

    return [a,b]
};

function containZero(num: number) {
    const parsed = String(num)
    let isContainZero = false

    let i = 0
    while (!isContainZero && i < parsed.length) {
        if (parsed[i] === "0") isContainZero = true
        else i++
    }

    return isContainZero
}