function smallestAbsent(nums: number[]): number {
    // Store the num in  set
    // Count the average
    // Iterate from average until found number

    // Space: O(n)
    // Time: O(n + m)

    const set = new Set()
    let sum = 0

    for (const num of nums) {
        sum += num
        set.add(num)
    }

    const avg = Math.floor(sum / nums.length)

    for (let i = Math.max(1, avg + 1); i < Infinity; i++) {
        if (!set.has(i)) return i
    }

    return -1
};