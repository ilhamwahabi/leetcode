function minElement(nums: number[]): number {
    return nums.reduce(
        (min, num) => Math.min(
            min,
            String(num).split("").reduce((prev, curr) => prev + +curr, 0),
        ),
        Infinity,
    )
};