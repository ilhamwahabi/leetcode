function minOperations(nums: number[], k: number): number {
    let min = Infinity
    const set = new Set()

    nums.forEach(num => {
        set.add(num)
        min = Math.min(min, num)
    })

    if (min < k) return -1
    if (k < min) return set.size
    return set.size - 1
};