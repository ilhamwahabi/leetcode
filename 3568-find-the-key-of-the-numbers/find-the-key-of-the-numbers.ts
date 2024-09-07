function generateKey(num1: number, num2: number, num3: number): number {
    let a = num1
    let b = num2
    let c = num3
    let result = ''

    for (let i = 0; i < 4; i++) {
        const [aRemain, aMod] = [Math.floor(a / 10), a % 10]
        const [bRemain, bMod] = [Math.floor(b / 10), b % 10]
        const [cRemain, cMod] = [Math.floor(c / 10), c % 10]

        a = aRemain
        b = bRemain
        c = cRemain

        result = Math.min(aMod, bMod, cMod) + result
    }

    return +result
};