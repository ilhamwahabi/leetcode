function canSortArray(nums: number[]): boolean {
    nums.sort((a, b) => {
        if (getSetOne(a) === getSetOne(b)) return a - b
        return 0
    })

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1]) return false
    }
    return true
};

function getSetOne(num: number) {
    const binary = num.toString(2)
    return binary.split('1').length - 1
}