function minimumSumSubarray(nums: number[], l: number, r: number): number {
    let min = Infinity

    for (let a = l; a <= r; a++) {
        let sum = 0

        for (let i = 0; i < nums.length; i++) {
            sum += nums[i]
            sum -= (nums[i - a] ?? 0)

            if (sum > 0 && (i + 1) >= a) {
                min = Math.min(min, sum)
            }
        }
    }

    return min === Infinity ? -1 : min
};