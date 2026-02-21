function findKDistantIndices(nums: number[], key: number, k: number): number[] {
    // Iterate nums, search all key location
    // Store all index in range [keyIndex - i ... i - keyIndex]

    const result = new Set<number>()

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === key) {
            for (let j = Math.max(i - k, 0); j < i; j++) {
                result.add(j)
            }
            result.add(i)
            for (let j = i + 1; j <= Math.min(i + k, nums.length - 1); j++) {
                result.add(j)
            }
        }
    }

    return Array.from(result)
};