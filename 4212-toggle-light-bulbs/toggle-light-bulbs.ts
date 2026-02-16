function toggleLightBulbs(bulbs: number[]): number[] {
    const arr = Array(100)

    for (const bulb of bulbs) {
        if (arr[bulb - 1]) arr[bulb - 1] = undefined
        else arr[bulb - 1] = bulb
    }

    return arr.filter(item => Boolean(item))
};