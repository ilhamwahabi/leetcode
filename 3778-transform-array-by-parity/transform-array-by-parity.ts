function transformArray(nums: number[]): number[] {
    let even = 0
    let odd = 0
    nums.forEach(num => {
        if (num % 2 === 0) even++
        else odd++
    })

    return Array.from({ length: even }, () => 0)
        .concat(Array.from({ length: odd }, () => 1))
};