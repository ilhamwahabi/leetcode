function duplicateNumbersXOR(nums: number[]): number {
    // Store occurances in map
    // Iterate map, check the element that appear twice, get XOR

    let result = 0

    const map = {}
    nums.forEach(num => {
        map[num] ? map[num]++ : map[num] = 1
        if (map[num] === 2) result ^= num
    })

    return result
};