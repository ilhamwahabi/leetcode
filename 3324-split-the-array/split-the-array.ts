function isPossibleToSplit(nums: number[]): boolean {
    const map = {}

    for (const num of nums) {
        if (!map[num]) map[num] = 1
        else if (map[num] === 2) return false
        else map[num]++
    }

    return true
};