function findIntersectionValues(nums1: number[], nums2: number[]): number[] {
    const map1 = {}
    nums1.forEach(num => { map1[num] = true })

    const map2 = {}
    let sum2 = 0
    nums2.forEach(num => {
        if (!map2[num]) map2[num] = true
        if (map1[num]) sum2++
    })

    let sum1 = 0
    nums1.forEach(num => { if (map2[num]) sum1++ })

    return [sum1, sum2]
};