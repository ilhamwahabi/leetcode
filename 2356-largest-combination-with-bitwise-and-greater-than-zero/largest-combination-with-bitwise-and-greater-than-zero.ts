function largestCombination(candidates: number[]): number {
    const map = Array.from({ length: 24 }, () => 0)

    for (const candidate of candidates) {
        const binary = candidate.toString(2)

        for (let i = 0; i < binary.length; i++) {
            if (binary[i] === '1') {
                map[binary.length - 1 - i]++
            }
        }
    }

    let max = 0
    for (let i = 0; i < map.length; i++) {
        if (map[i] > max) max = map[i]
    }
    return max
};