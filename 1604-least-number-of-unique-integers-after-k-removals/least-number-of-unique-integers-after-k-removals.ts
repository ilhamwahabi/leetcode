function findLeastNumOfUniqueInts(arr: number[], k: number): number {
    // Create map to store occurances of each character
    // Sort ascending based on occurances
    // Remove that kind element
    const map: { [key: number]: number } = {}
    for (const num of arr) {
        map[num] ? map[num]++ : map[num] = 1
    }

    const sorted = Object.entries(map).sort((a,b) => a[1] - b[1])

    let a = k
    let length = sorted.length
    for (const [key, value] of sorted) {
        if (value <= a) {
            a -= value
            length--

            if (a === 0) break
        }
    }

    return length
};