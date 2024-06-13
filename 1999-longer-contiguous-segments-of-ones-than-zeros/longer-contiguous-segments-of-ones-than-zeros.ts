function checkZeroOnes(s: string): boolean {
    let one = s[0] === "1" ? 1 : 0
    let zero = s[0] === "0" ? 1 : 0

    let currOne = s[0] === "1" ? 1 : 0
    let currZero = s[0] === "0" ? 1 : 0
    for (let i = 0; i < s.length; i++) {
        const curr = s[i]
        const next = s[i + 1]

        if (next === "0") {
            curr === next ? currZero++ : currZero = 1
            if (currZero > zero) zero = currZero
        }
        if (next === "1") {
            curr === next ? currOne++ : currOne = 1
            if (currOne > one) one = currOne
        }
    }

    return one > zero
};