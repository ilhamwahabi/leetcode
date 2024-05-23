function minDeletions(s: string): number {
    // Count occurances of each character, store in map
    // Create another map, the key is the occurances
    // If exist same value, store it in array
    // For each value in remaining array, check if exist element -- it, count the diff

    const occur = {}
    for (const char of s) {
        occur[char] ? occur[char]++ : occur[char] = 1
    }

    const map = {}
    const remain = []
    for (const key in occur) {
        if (!map[occur[key]]) map[occur[key]] = true
        else remain.push(occur[key])
    }

    let total = 0
    for (const num of remain) {
        for (let i = 1; i <= num; i++) {
            if (!map[num - i]) {
                if (num - i > 0) map[num - i] = true
                total += i
                break
            }
        }
    }
    return total
};