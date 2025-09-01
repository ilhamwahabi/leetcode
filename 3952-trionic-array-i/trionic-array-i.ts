function isTrionic(nums: number[]): boolean {
    // We track the change of increasing / decreasing in nums
    // In the end we check if the pattern is: inc -> dec -> inc

    // Time: O(n), iterate each item of nums
    // Space: O(1), only save constant

    let result = ""

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            if (result.at(-1) !== "I") result += "I"
        } else if (nums[i] < nums[i - 1]) {
            if (result.at(-1) !== "D") result += "D"
        } else {
            if (result.at(-1) !== "S") result += "S"
        }
    }

    return result === "IDI"
};