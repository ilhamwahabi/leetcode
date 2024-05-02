function rotatedDigits(n: number): number {
    // 1. Create dict to store what the result of rotating each digit
    // 2. Loop from 1 to n
    // 3. Get all i digits, check if its not rotate anything then false

    const map = { '0': 0, '1': 1, '2': 5, '5': 2, '6': 9, '8': 8, '9': 6 }

    let total = 0
    for (let i = 1; i <= n; i++) {
        const parsed = String(i)
        let result = ''
        let j = 0
        let isAnyRotated = true

        while (j < parsed.length && isAnyRotated) {
            if (map[parsed[j]] === undefined) {
                isAnyRotated = false
            } else {
                result += map[parsed[j]]
                j++
            }
        }

        if (isAnyRotated && result !== parsed) total++
    }
    return total
};