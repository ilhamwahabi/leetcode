function concatHex36(n: number): string {
    return toBase(Math.pow(n, 2), 16) + toBase(Math.pow(n, 3), 36)
};

function toBase(num: number, base: number) {
    // Get each digit of n, start from the end
    // For each digit, decide the number or alphabet for it
    // Continue until all digit been found

    // Time: O(n), iterate based on how big n is
    // Space: O(1), we only store string and number

    let result = ""

    let curr = num
    while (curr > 0) {
        let digit: string | number = curr % base
        if (digit >= 10) {
            digit = String.fromCharCode(65 + digit - 10)
        }

        result = digit + result
        curr = Math.floor(curr / base)
    }

    return result
}