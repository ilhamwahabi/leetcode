function digitFrequencyScore(n: number): number {
    let sum = 0

    let curr = n
    while (curr > 0) {
        sum += curr % 10
        curr = Math.floor(curr / 10)
    }

    return sum
};