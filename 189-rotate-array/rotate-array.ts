/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    const copy = [...nums]

    let count = 0
    let i = nums.length - (k % nums.length)
    while (count < nums.length) {
        if (i === nums.length) { i = 0 }
        nums[count] = copy[i]
        count++
        i++
    }
};