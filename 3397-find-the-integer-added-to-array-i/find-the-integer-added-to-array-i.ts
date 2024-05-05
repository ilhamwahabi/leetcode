function addedInteger(nums1: number[], nums2: number[]): number {
    // Find min (or max) of each nums
    // Return the difference

    let min1 = Infinity
    let min2 = Infinity

    for (let i = 0; i < nums1.length; i++) {
        if (nums1[i] < min1) min1 = nums1[i]
        if (nums2[i] < min2) min2 = nums2[i]
    }

    return min2 - min1
};