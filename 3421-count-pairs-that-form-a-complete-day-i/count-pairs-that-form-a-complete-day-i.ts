function countCompleteDayPairs(hours: number[]): number {
    let total = 0

    const map = {}
    for (const hour of hours) {
        const mod = hour % 24

        if (map[24 - mod]) total += map[24 - mod]
        if (mod === 0 && map[0]) total += map[0]
        map[mod] ? map[mod]++ : map[mod] = 1
    }

    return total
};