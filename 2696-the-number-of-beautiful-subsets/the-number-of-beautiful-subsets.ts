function beautifulSubsets(nums: number[], k: number): number {
    nums.sort((a,b) => a - b)

    let count = 0

    function backtrack(map = {}, index = 0) {
        if (index > 0) count++

        for (let i = index; i < nums.length; i++) {
            const num = nums[i]

            if (map[num - k] === undefined && map[num + k] === undefined) {
                backtrack({ ...map, [num]: true }, i + 1)
            }
        }
    }
    backtrack()

    return count
};