function minimumIndex(nums: number[]): number {
    // Find occurances of dominating value
    // Iterate nums, count how many dominating value we found check, freq(x) > 2 on both side
    // If until end we cant found then return -1

    let map = {}
    let val = 0
    let occur = 0
    for (const num of nums) {
        map[num] ? map[num]++ : map[num] = 1
        if (map[num] > occur) {
            val = num
            occur = map[num]
        }
    }

    let curr = 0
    for (let i = 0; i < nums.length; i++) {
        if (val === nums[i]) curr++
        if (curr * 2 > i + 1 && (occur - curr) * 2 > nums.length - i - 1) return i
    }
    return -1
};