function firstUniqueFreq(nums: number[]): number {
    const numMap = new Map()
    for (const num of nums) {
        numMap.set(num, (numMap.get(num) ?? 0) + 1)
    }

    const freqMap = new Map()
    for (const [, value] of numMap) {
        freqMap.set(value, (freqMap.get(value) ?? 0) + 1)
    }

    let firstUnique = null
    for (const [key, value] of freqMap) {
        if (value === 1) {
            firstUnique = key
            break
        }
    }

    for (const [key, value] of numMap) {
        if (value === firstUnique) return key
    }
    return -1
};