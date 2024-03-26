function firstMissingPositive(nums: number[]): number {
    const map = {}
    let max = 0
    nums.forEach(num => {
        if (num > 0) {
            map[num] = true
            if (num > max) max = num
        }
    })

    for (let i = 1; i <= max; i++) { if (!map[i]) return i }
    return max + 1
};