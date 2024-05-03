function nextBeautifulNumber(n: number): number {
    // 1. Create while loop start from n
    // 2. Count every digit they have in map
    // 3. If each of key have same with value, return it

    let found = false
    let x = n + 1
    while (!found) {
        const digit = {}

        let y = x
        while (y > 0) {
            const d = y % 10
            digit[d] ? digit[d]++ : digit[d] = 1
            y = Math.floor(y / 10)
        }

        let valid = true
        for (const key in digit) {
            if (parseInt(key) !== digit[key]) {
                valid = false
                break
            }
        }
        if (valid) return x
        else x++
    }
};