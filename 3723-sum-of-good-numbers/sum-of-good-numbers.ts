function sumOfGoodNumbers(nums: number[], k: number): number {
    let sum = 0

    for (let i = 0; i < nums.length; i++) {
        const left = i - k >= 0 ? nums[i] > nums[i - k] : true
        const right = i + k <= nums.length - 1 ? nums[i] > nums[i + k] : true

        if (left && right) sum += nums[i]
    }

    return sum
};