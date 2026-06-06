function limitOccurrences(nums: number[], k: number): number[] {
    const result = []

    let i = 0
    let j = 0
    let curr = nums[j]
    while (j < nums.length) {
        if (nums[j] !== curr) {
            curr = nums[j]
            i = 0
        }

        if (i < k) {
            result.push(nums[j])
            i++
        }

        j++
    }

    return result
};