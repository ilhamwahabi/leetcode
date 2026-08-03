function maxDigitRange(nums: number[]): number {
    // Iterate nums
    // Iterate each digit of num, find the difference between max and min digit
    // Store it in array with 9 member, which represent the sum of num with that digit range
    // Also store the max range that we found
    // Return member of range with index of max range

    // Time: O(m) * (n)
    // Space: O(1)

    const range = [0,0,0,0,0,0,0,0,0,0]
    let maxRange = 0

    for (const num of nums) {
        let min = Infinity
        let max = -Infinity

        let curr = num
        while (curr > 0) {
            const mod = curr % 10
            curr = Math.floor(curr / 10)

            min = Math.min(min, mod)
            max = Math.max(max, mod)
        }

        const diff = max - min
        maxRange = Math.max(diff, maxRange)
        range[diff] += num
    }

    return range[maxRange]
};