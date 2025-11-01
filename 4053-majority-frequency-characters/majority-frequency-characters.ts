function majorityFrequencyGroup(s: string): string {
    const map = {}
    for (const char of s) {
        map[char] ? map[char]++ : map[char] = 1
    }

    const freqs = {}
    for (const key in map) {
        const freq = map[key]
        freqs[freq] ? freqs[freq]++ : freqs[freq] = 1
    }

    let maxIdx = 0
    let max = -Infinity
    for (const key in freqs) {
        const freq = freqs[key]

        if (freq > max) {
            max = freq
            maxIdx = +key
        } else if (freq === max) {
            maxIdx = Math.max(maxIdx, +key)
        }
    }

    let result = ""
    for (const key in map) {
        const freq = map[key]

        if (freq === maxIdx) result += key
    }

    return result
};