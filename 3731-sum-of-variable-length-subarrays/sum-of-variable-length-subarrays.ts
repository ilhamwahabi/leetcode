function subarraySum(nums: number[]): number {
    return nums.reduce((acc, curr, index) => {
        const start = Math.max(0, index - curr)

        let result = 0
        for (let i = start; i <= index; i++) {
            result += nums[i]
        }

        return acc + result
    }, 0)
};