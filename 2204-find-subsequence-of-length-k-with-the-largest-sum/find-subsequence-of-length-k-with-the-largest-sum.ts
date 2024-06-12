function maxSubsequence(nums: number[], k: number): number[] {
    // Sort decrementally
    // Return first k element

    const temp = [...nums].sort((a,b) => b-a)
    const map = {}
    for (let i = 0; i < k; i++) {
        const num = temp[i]
        map[num] ? map[num]++ : map[num] = 1
    }

    const result = []
    let i = 0
    while (i < nums.length && result.length < k) {
        const num = nums[i]
        if (map[num]) {
            result.push(num)

            map[num]--
            if (map[num] === 0) delete map[num]
        }
        i++
    }
    return result
};