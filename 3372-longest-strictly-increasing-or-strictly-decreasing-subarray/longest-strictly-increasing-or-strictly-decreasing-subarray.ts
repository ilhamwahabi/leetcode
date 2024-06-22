function longestMonotonicSubarray(nums: number[]): number {
    let longest = 1

    let inc = 1
    for (let i = 1; i < nums.length; i++) {
        const curr = nums[i]
        const prev = nums[i - 1]

        if (curr > prev) {
            inc++
            if (inc > longest) longest = inc
        } else {
            inc = 1
        }
    }

    let dec = 1
    for (let i = 1; i < nums.length; i++) {
        const curr = nums[i]
        const prev = nums[i - 1]

        if (curr < prev) {
            dec++
            if (dec > longest) longest = dec
        } else {
            dec = 1
        }
    }

    return longest
};