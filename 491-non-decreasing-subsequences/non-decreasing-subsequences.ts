function findSubsequences(nums: number[]): number[][] {
    const result = []
    const set = new Set()

    function backtrack(arr = [], index = 0, key = "") {
        if (arr.length >= 2 && !set.has(key)) {
            set.add(key)
            result.push(arr)
        }

        for (let i = index; i < nums.length; i++) {
            if (arr.length === 0 || nums[i] >= arr.at(-1)) {
                backtrack(arr.concat(nums[i]), i + 1, `${key}.${nums[i]}`)
            }
        }
    }
    backtrack()

    return result
};