function getSneakyNumbers(nums: number[]): number[] {
    // Sort: O(nlog(n) + n), O(1)
    // Map: O(n), O(n)

    nums.sort((a,b) => a - b)
    
    const res = []
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            res.push(nums[i])
            if (res.length === 2) return res
        }
    }
    return res
};