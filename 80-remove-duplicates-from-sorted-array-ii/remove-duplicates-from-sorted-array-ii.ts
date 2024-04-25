function removeDuplicates(nums: number[]): number {
    let curr = 0
    let count = 0
    let exceed = 0
    let i = 0
    while (i < nums.length) {
        if (nums[curr] === nums[i]) {
            if (count < 2) {
                count++
                i++
            } else {
                nums.splice(i, 1)
                exceed++
            }
        } else {
            curr = i
            count = 1
            i++
        }
    }

    for (let i = 0; i < exceed; i++) nums.push(-1)

    return nums.length - exceed
};