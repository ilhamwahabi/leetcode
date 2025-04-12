function canThreePartsEqualSum(arr: number[]): boolean {
    // Time: O(n + n) ~ O(n), linear
    // Space: O(1), constant

    const total = arr.reduce((acc, curr) => acc + curr, 0)

    if (total % 3 === 0) {
        let sum = 0
        let part = 0

        for (const num of arr) {
            sum += num

            if (sum === total / 3) {
                sum = 0
                part++
            }
        }

        return part >= 3
    }

    return false
};