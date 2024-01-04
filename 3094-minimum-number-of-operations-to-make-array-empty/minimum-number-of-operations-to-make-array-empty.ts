function minOperations(nums: number[]): number {
    const map = {}
    nums.forEach(num => {
        map[num] ? map[num]++ : map[num] = 1
    })

    let ops = 0
    for (const key in map) {
        if (map[key] === 1) return -1
        ops += Math.ceil(map[key] / 3)
    }

    return ops
};