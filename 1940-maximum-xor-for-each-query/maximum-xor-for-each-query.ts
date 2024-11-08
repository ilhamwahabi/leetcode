function getMaximumXor(nums: number[], maximumBit: number): number[] {
    const max = Math.pow(2, maximumBit) - 1
    const result = []

    let xor = 0
    for (let i = 0; i < nums.length; i++) {
        xor ^= nums[i]
        result.push(xor ^ max)
    }

    return result.reverse()
};