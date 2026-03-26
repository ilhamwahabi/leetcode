function uniformArray(nums1: number[]): boolean {
    let evens = 0
    let odds = 0
    let min = Infinity

    for (let i = 0; i < nums1.length; i++) {
        const num = nums1[i]

        if (num % 2 === 0) evens++
        if (num % 2 === 1) odds++

        min = Math.min(min, num)
    }

    if (evens === nums1.length || odds === nums1.length) return true
    if (min % 2 === 0) return false
    return true
};