/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    // Use two pointer, track which color we currently want to swap (0,1,2)
    // First compare i=0 with j=1
    // if i=0 is not zero but j=1 is 0, swap it, i++ j++

    let i = 0
    let j = 1
    let curr = 0 // 0 | 1 | 2

    while (i < nums.length) {
        if (nums[i] === curr) {
            i++
        } else if (nums[i] !== curr && nums[j] === curr && nums[j] < nums[i]) {
            [nums[i], nums[j]] = [nums[j], nums[i]]
            i++
        }
        j++

        if (j >= nums.length) {
            if (curr === 2) break
            j = i + 1
            curr++
        }
    }
};