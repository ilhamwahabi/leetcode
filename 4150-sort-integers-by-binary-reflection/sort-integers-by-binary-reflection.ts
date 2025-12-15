function sortByReflection(nums: number[]): number[] {
    return nums.sort((a, b) => {
        const x = getReverseBinary(a)
        const y = getReverseBinary(b)

        if (x === y) return a - b
        return x - y
    })
};

function getReverseBinary(num: number): number {
    const bin = num.toString(2)

    let rev = ""
    for (const char of bin) {
        rev = char + rev
    }

    return parseInt(rev, 2)
}