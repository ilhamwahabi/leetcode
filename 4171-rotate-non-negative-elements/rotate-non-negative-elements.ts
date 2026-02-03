function rotateElements(nums: number[], k: number): number[] {
    const nonNeg = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= 0) nonNeg.push(nums[i])
    }

    const shift = k % nonNeg.length
    let shiftArr = []
    for (let i = 0; i < nonNeg.length; i++) {
        shiftArr.push(nonNeg[(i + shift) % nonNeg.length])
    }

    let i = 0
    let j = 0
    while (i < nonNeg.length) {
        if (nums[j] >= 0) {
            nums[j] = shiftArr[i]
            i++
        }
        j++
    }

    return nums
};