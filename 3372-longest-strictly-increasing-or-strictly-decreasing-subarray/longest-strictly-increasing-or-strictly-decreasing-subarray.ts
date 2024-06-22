function longestMonotonicSubarray(nums: number[]): number {
    let longest = 1

    let inc = 1
    let dec = 1
    for (let i = 1; i < nums.length; i++) {
        const curr = nums[i]
        const prev = nums[i - 1]

        if (curr > prev) {
            inc++
            dec = 1
            if (inc > longest) longest = inc
        } else if (curr < prev) {
            dec++
            inc = 1
            if (dec > longest) longest = dec
        } else {
            inc = 1
            dec = 1
        }
    }

    return longest
};