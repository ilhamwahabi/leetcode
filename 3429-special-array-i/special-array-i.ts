function isArraySpecial(nums: number[]): boolean {
    // Loop from 1 to nums.length
    // Check if nums[i-1] + nums[i] is odd, else false

    let i = 1
    let special = true

    while (i < nums.length && special) {
        if ((nums[i-1] + nums[i]) % 2 === 0) special = false
        else i++
    }

    return special
};