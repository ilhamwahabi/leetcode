function check(nums: number[]): boolean {
    // Check if decrement max 1
    let dec = 0

    let i = 0
    while (i < nums.length && dec <= 1) {
        if (nums[i] > nums[(i+1) % nums.length]) dec++
        i++
    }

    return dec <= 1
};