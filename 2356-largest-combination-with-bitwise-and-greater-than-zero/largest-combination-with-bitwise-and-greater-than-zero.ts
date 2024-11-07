function largestCombination(candidates: number[]): number {
    const map = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

    let max = 0
    for (const candidate of candidates) {
        const binary = candidate.toString(2)

        for (let i = 0; i < binary.length; i++) {
            if (binary[i] === '1') {
                map[binary.length - 1 - i]++
                max = Math.max(map[binary.length - 1 - i], max)
            }
        }
    }
    return max
};