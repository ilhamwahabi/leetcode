function evenOddBit(n: number): number[] {
    // 17 = 10001
    // 8 = 1000

    // 40 = 101000
    // 20 = 10100
    // 10 = 1010
    // 5 = 101

    let even = 0
    let odd = 0

    let a = n
    let l = 0
    while (a > 0) {
        if (a % 2 === 1) {
            if (l % 2 === 0) even++
            else odd++
        }

        a = Math.floor(a / 2)
        l++
    }

    return [even, odd]
};