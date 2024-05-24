function removeDigit(number: string, digit: string): string {
    // Find where the digit occur
    // Remove the digit, find max

    let max = ""

    for (let i = 0; i < number.length; i++) {
        if (number[i] === digit) {
            const removed = number.slice(0, i) + number.slice(i + 1)
            if (removed > max) max = removed
        }
    }

    return max
};