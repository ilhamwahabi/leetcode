function minOperations(nums: number[]): number {
    // Count occurances of each element
    // Iterate dupl, remove the elements that already unique
    // Iterate nums by 3 item, substract the number in dupl
    // Check if substract already empty

    const dupl = new Map()

    for (const num of nums) {
        if (dupl.get(num)) dupl.set(num, dupl.get(num) + 1)
        else dupl.set(num, 1)
    }

    for (const [key, value] of dupl) {
        if (value === 1) dupl.delete(key)
    }
    if (dupl.size === 0) return 0

    for (let i = 0; i < nums.length; i += 3) {
        removeNum(nums[i], dupl)
        removeNum(nums[i + 1], dupl)
        removeNum(nums[i + 2], dupl)

        if (dupl.size === 0) return (i + 3) / 3
    }

    return -1
};

function removeNum(num: number | undefined, map: Map<number, number>) {
    if (num) {
        if (map.get(num) >= 3) {
            map.set(num, map.get(num) - 1)
        } else {
            map.delete(num)
        }
    }
}