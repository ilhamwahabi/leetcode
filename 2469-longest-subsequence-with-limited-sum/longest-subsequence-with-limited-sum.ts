function answerQueries(nums: number[], queries: number[]): number[] {
    // Sort nums
    // Iterate queries, loop sorted nums, find until what element which sum <= queries

    nums.sort((a,b) => a-b)

    return queries.map(q => {
        let total = 0

        let i = 0
        while (total <= q && i < nums.length) {
            total += nums[i]
            i++
        }

        if (total > q) return i - 1
        else return i
    })
};