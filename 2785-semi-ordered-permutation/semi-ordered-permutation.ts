function semiOrderedPermutation(nums: number[]): number {
    // Otherwise: find index of 1, if not zero, save it
    // find index of n, if not in nums.length - 1, save it
    // swap = (index of 1) + (nums.length - 1 - index of n)
    // if index of n < index of 1: +1

    let firstIndex = -1
    let lastIndex = -1
    let i = 0
    while (i < nums.length && (firstIndex === -1 || lastIndex === -1)) {
        if (nums[i] === 1) firstIndex = i
        if (nums[i] === nums.length) lastIndex = i
        i++
    }

    const isLastFoundFirst = lastIndex < firstIndex
    return (firstIndex) + (nums.length - 1 - lastIndex) + (isLastFoundFirst ? -1 : 0)
};