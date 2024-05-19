function frequencySort(nums: number[]): number[] {
    // Count the occurrances of each num using map, store the element, not just length
    // Sort Object.keys based on their occurrances

    const map = {}
    nums.forEach(num => {
        map[num] ? map[num].push(num) : map[num] = [num]
    })

    const keys = Object.keys(map)
    keys.sort((a,b) => {
        if (map[a].length === map[b].length) {
            if (parseInt(a) < parseInt(b)) return 1
            else return -1
        } else {
            return map[a].length - map[b].length
        }
    })

    const result = []
    for (const key of keys) result.push(...map[key])
    return result
};