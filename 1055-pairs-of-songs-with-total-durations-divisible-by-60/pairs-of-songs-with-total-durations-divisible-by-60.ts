function numPairsDivisibleBy60(time: number[]): number {
    let count = 0

    const map = {}
    time.forEach(item => {
        const mod = item % 60
        if (map[mod === 0 ? 0 : 60 - mod]) count += map[mod === 0 ? 0 : 60 - mod]

        map[mod] ? map[mod]++ : map[mod] = 1
    })

    return count
};