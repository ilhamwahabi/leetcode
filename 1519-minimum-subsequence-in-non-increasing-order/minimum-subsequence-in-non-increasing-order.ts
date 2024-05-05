function minSubsequence(nums: number[]): number[] {
    // Get the sum
    // Sort the array
    // Start from array of front, if consequence of it >= sum then return

    const sum = nums.reduce((acc, curr) => acc + curr, 0)

    nums.sort((a,b) => b-a)

    const res = []
    let temp = 0
    for (const num of nums) {
        temp += num
        res.push(num)
        if (temp > sum / 2) return res
    }
    return res
};