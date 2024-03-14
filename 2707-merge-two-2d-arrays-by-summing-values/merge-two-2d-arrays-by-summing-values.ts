function mergeArrays(nums1: number[][], nums2: number[][]): number[][] {
    const map: {[key: number]: number} = {}
    nums1.forEach(([id, num]) => { map[id] = num })

    nums2.forEach(([id, num]) => {
        map[id] ? map[id] += num : map[id] = num
    })

    const result = []
    for (const key in map) {
        result.push([parseInt(key), map[key]])
    }

    return result
};