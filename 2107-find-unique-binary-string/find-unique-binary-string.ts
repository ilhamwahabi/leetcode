function findDifferentBinaryString(nums: string[]): string {
    // n = 1, 0 1
    // 2 = 2, 0 1 2 3
    // n = 3, 0 1 2 3 4 5 6 7

    // Time: O(n + n), linear
    // Space: O(n), linear

    const set = new Set()
    nums.forEach(num => {
        set.add(parseInt(num, 2))
    })

    for (let i = 0; i < Math.pow(2, nums.length); i++) {
        if (!set.has(i)) {
            const binary = i.toString(2)
            return "0".repeat(nums.length - binary.length) + binary
        }
    }

    return ""
};