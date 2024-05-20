function reductionOperations(nums: number[]): number {
    // Sort nums ascending [1,3,5], set min value to nums[0], acc = 0, result = 0
    // If num is change, acc + 1, result += acc

    nums.sort((a,b) => a - b)

    let result = 0
    let curr = nums[0]
    let acc = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== curr) {
            acc++
            curr = nums[i]
        }
        result += acc
    }
    return result
};