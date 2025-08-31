function getLeastFrequentDigit(n: number): number {
    // Iterate each digit in n, store it's occurrance in hashmap
    // Iterate each item in hashmap, find with the least occurance and smallest digit

    // Time: O(n), iterating n
    // Space: O(n), create hashmap

    const map = {}
    for (const digit of String(n)) {
        map[digit] ? map[digit]++ : map[digit] = 1
    }

    let digit = Infinity
    let occurance = Infinity
    for (const d in map) {
        const o = map[d]

        if (o < occurance || (o <= occurance && +d < digit)) {
            digit = +d; occurance = o
        }
    }

    return digit
};