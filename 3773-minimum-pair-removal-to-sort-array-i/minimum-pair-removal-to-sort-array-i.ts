function minimumPairRemoval(nums: number[]): number {
    let ops = 0
    
    let isSortedGlobal = false

    while (!isSortedGlobal) {
        let isSortedLocal = true
        let a = 0
        let b = 1

        for (let i = 1; i < nums.length; i++) {
            const prev = nums[i - 1]
            const curr = nums[i]

            const sum = prev + curr
            if (sum < nums[a] + (nums[b] ?? 0)) {
                a = i - 1
                b = i
            }

            if (prev > curr) isSortedLocal = false
        }

        if (!isSortedLocal) {
            nums.splice(a, 2, nums[a] + nums[b])
            ops++
        }
        isSortedGlobal = isSortedLocal
    }

    return ops
};