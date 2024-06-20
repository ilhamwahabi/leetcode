function advantageCount(nums1: number[], nums2: number[]): number[] {
    // Store nums2 with the index and value
    // Sort nums2 by value, ascending
    // Sort nums1 ascending
    // Iterate nums1, if nums[1] > nums[2].value then add to result, at the end add remaining
    const comp = nums2.map((num, i) => ([num, i])).sort((a,b) => a[0] - b[0])
    nums1.sort((a,b) => a - b)

    const result = Array(nums1.length)
    const remain = []
    let j = 0
    for (let i = 0; i < nums1.length; i++) {
        if (nums1[i] > comp[j][0]) {
            result[comp[j][1]] = nums1[i]
            j++
        } else {
            remain.push(nums1[i])
        }
    }

    for (let i = 0; i < result.length; i++) {
        if (result[i] === undefined) result[i] = remain.pop()
    }

    return result
};