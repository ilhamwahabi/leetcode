function smallestNumber(num: number): number {
    // 1. Check if its pos or neg
    // 2. Store all digits, sort it incrementally
    // 3. If its pos the first digit should be the smallest number
    //      - buf if the smallest is 0, then zero should be the second, ...
    //      - the rest is number incrementally
    // 4. If its neg the first digit should be the biggest number, and decrement it
    if (num === 0) return num

    const isNeg = num < 0
    const digits = []

    let d = isNeg ? num * -1 : num
    while (d > 0) {
        digits.push(d % 10)
        d = Math.floor(d / 10)
    }

    digits.sort((a,b) => a-b)

    if (isNeg) {
        let result = ""
        
        for (let i = 0; i < digits.length; i++) {
            result += digits[digits.length - 1 - i]
        } 

        return parseInt(result) * -1
    } else if (!isNeg) {
        let result = ""

        if (digits[0] === 0) {
            let firstNotZero = -1
            
            let i = 1
            while (i < digits.length && firstNotZero === -1) {
                if (digits[i] !== 0) firstNotZero = i
                else i++
            }

            result += digits[firstNotZero]
            digits.splice(firstNotZero, 1)
        }

        for (let i = 0; i < digits.length; i++) {
            result += digits[i]
        }

        return parseInt(result)
    }
};