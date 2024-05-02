class Solution {
    ori = []
    nums = []

    constructor(nums: number[]) {
        this.ori = nums
        this.nums = nums
    }

    reset(): number[] {
        this.nums = this.ori

        return this.nums
    }

    shuffle(): number[] {
        // 1. Iterate nums
        // 2. Get random from 0 to n (array length) and push it to array

        const map = {}
        const result = []
        const remain = this.nums.length

        while (result.length < remain) {
            const i = Math.floor(Math.random() * remain)
            if (map[i] === undefined) {
                map[i] = true
                result.push(this.nums[i])
            }
        }

        this.nums = result
        return this.nums
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */