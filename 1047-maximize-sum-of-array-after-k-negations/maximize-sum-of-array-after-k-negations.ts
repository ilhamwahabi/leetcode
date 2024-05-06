function largestSumAfterKNegations(nums: number[], k: number): number {
    // if k is 1, select smallest number
    // if k is 2, select two number that is <0

    // Always make negative to positive
    // Prioritize smallest number -> sort
    // If no more negative and k >= 1, times it with smallest positive as you can

    nums.sort((a, b) => Math.abs(b)-Math.abs(a))

    let x = k

    let sum = 0
    nums.forEach(num => {
        if (x > 0) {
            if (num < 0) {
                sum += num * -1
                x--
            } else {
                sum += num
            }
        } else {
            sum += num
        }
    })
    if (x % 2 === 1) {
        const last = nums[nums.length - 1]
        if (last < 0) sum -= last * 2 * -1
        else sum += last * 2 * -1
    }

    return sum
};