class Solution {
    state = {}

    constructor(nums: number[]) {
        nums.forEach((num, i) => {
            this.state[num] ? this.state[num].push(i) : this.state[num] = [i]
        })
    }

    pick(target: number): number {
        const result = this.state[target]

        return result[Math.floor(Math.random() * result.length)]
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */