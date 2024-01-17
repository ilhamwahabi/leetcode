function uniqueOccurrences(arr: number[]): boolean {
    const map = {}
    arr.forEach(num => {
        map[num] ? map[num]++ : map[num] = 1
    })

    const set = new Set()
    for (const key in map) {
        if (set.has(map[key])) return false       
        set.add(map[key])
    }
    return true
};