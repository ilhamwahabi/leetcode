function minimumRightShifts(nums: number[]): number {
    // Count the decrement, if its > 1 then return -1 (can't be sorted incrementally)
    // Return nums.length - decrementIndex

    const decs = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < nums[i === 0 ? nums.length-1 : i-1]) decs.push(i)
    }

    if (decs.length > 1) return -1
    if (decs[0] === 0 || decs.length === 0) return 0
    return nums.length - decs[0]
};