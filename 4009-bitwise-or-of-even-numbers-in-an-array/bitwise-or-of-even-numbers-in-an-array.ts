function evenNumberBitwiseORs(nums: number[]): number {
    let bw = 0

    nums.forEach(num => {
        if (num % 2 === 0) {
            bw = bw | num
        }
    })

    return bw
};