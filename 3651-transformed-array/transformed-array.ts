function constructTransformedArray(nums: number[]): number[] {
    return nums.map((num, index) => {
        return nums.at((num + index) % nums.length)
    })
};