function countSymmetricIntegers(low: number, high: number): number {
    // 11 22
    // 1111 2222 ... 1001 2002 ... 1212 2121

    // 1. Iterate using while loop, if String(i).length % 2 === 1, times i * 10 to pass odd digits
    // 2. Pass each half of side to digitSum function
    // 3. Count them

    let counter = 0

    let i = low
    while (i <= high) {
        const stringified = String(i)

        if (stringified.length % 2 === 0) {
            const left = digitSum(parseInt(stringified.slice(0, stringified.length / 2)))
            const right = digitSum(parseInt(stringified.slice(stringified.length / 2)))

            if (left === right) counter++
        }
    
        i++
    }

    return counter
};

function digitSum(num: number) {
    if (num < 10) return num
    return digitSum(Math.floor(num / 10)) + num % 10
}