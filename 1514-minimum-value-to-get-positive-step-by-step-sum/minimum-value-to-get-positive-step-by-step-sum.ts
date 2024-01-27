function minStartValue(nums: number[]): number {
    let startValue = 1

    let i = 0
    let acc = startValue
    while (i < nums.length) {
        const res = acc + nums[i]

        if (res >= 1) {
            acc = res
            i++
        } else {
            startValue = startValue + 1 - res
            acc = startValue
            i = 0
        }
    }

    return startValue
};