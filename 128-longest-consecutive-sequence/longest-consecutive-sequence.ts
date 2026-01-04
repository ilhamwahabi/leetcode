function longestConsecutive(nums: number[]): number {
    const set = new Set(nums)

    let result = 0
    for (const num of set) {
        const isStartOfSeq = !set.has(num - 1)

        if (isStartOfSeq) {
            let curr = num
            while (set.has(curr)) {
                curr++
            }
            result = Math.max(result, curr - num)
        }
    }
    return result
};