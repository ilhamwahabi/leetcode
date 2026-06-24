function isOneBitCharacter(bits: number[]): boolean {
    let i = 0
    while (i < bits.length) {
        if (bits[i] === 0) {
            if (i === bits.length - 1) {
                return true
            }
            i++
        } else {
            if (bits[i + 1] === 1 || bits[i + 1] === 0) {
                i += 2
            } else {
                return true
            }
        }
    }

    return false
};