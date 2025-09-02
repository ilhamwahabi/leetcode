function maximumMedianSum(nums: number[]): number {
    // [1,1,2,2,3,3]

    // Sort nums descending
    // Iterate from beginning, sum the second from back element

    // Time: O(nlog(n) + n)
    // Space: O(1)

    nums.sort((a,b) => b - a)

    let sum = 0

    for (let i = 1; i < nums.length * 2 / 3; i += 2) {
        sum += nums[i]
    }

    return sum
};