function countAndSay(n: number): string {
    let rle = "1"

    for (let i = 1; i < n; i++) {
        let count = 0
        let char = rle[0]

        let result = ""
        for (let j = 0; j < rle.length + 1; j++) {
            const digit = rle[j]

            if (digit === char) {
                count++
            } else {
                result += `${count}${char}`
                
                count = 1
                char = digit
            }
        }
        rle = result
    }

    return rle
};