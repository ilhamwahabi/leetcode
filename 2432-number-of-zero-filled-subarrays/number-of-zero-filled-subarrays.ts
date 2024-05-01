function zeroFilledSubarray(nums: number[]): number {
    // 1=1 +1
    // 2=3 +2
    // 3=6 +3
    // 4=10 +4

    // 1. Count occurances for each 0 subarray, store in array
    // 2. For each sub, loop to get the total

    const sub = []
    let zero = 0
    for (let i = 0; i <= nums.length; i++) {
        if (nums[i] === 0 && nums[i-1] !== 0) {
            zero = 1
        } else if (nums[i] === 0 && nums[i-1] === 0) {
            zero++
        } else if (nums[i] !== 0 && nums[i-1] === 0) {
            sub.push(zero)
            zero = 0
        }
    }

    let total = 0
    sub.forEach(s => {
        for (let i = 1; i <= s; i++) total += i
    })
    return total
};