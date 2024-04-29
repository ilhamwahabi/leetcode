function splitNum(num: number): number {
    // 1. Iterate and store all the digits in array
    // 2. Sort the array incrementally
    // 3. Iterate the digits array, append to num1 and num2 one by one
    // 4. Return sum of the num1 and num2

    const digits = []
    
    let n = num
    while (n > 0) {
        const digit = n % 10
        digits.push(digit)
        n = Math.floor(n / 10)
    }

    digits.sort((a,b) => a-b)

    let num1 = ''
    let num2 = ''
    
    for (let i = 0; i < digits.length; i++) {
        if (i % 2 === 0) num1 += digits[i]
        else num2 += digits[i]
    }

    return parseInt(num1) + parseInt(num2)
};