function maxAlternatingSum(nums: number[]): number {
    // Sort nums, descending
    // Set two pointer, at start and end
    // Sum the start^2 - end^2, from start, until pointer 1 meet pointer 2

    // Time: O(n log(n)), we are sorting nums
    // Space: O(1), only save pointer and sum

    nums.sort((a,b) => Math.abs(b) - Math.abs(a))

    let x = 0
    let y = nums.length - 1

    let sum = 0
    while (x <= y) {
        sum += Math.pow(nums[x], 2)
        x++

        if (x <= y) {
            sum -= Math.pow(nums[y], 2)
            y--
        }
    }
    return sum
};