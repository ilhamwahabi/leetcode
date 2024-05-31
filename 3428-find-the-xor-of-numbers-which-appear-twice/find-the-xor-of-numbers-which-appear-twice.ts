function duplicateNumbersXOR(nums: number[]): number {
    // Store occurances in map
    // Iterate map, check the element that appear twice, get XOR

    const map = {}
    nums.forEach(num => {
        map[num] ? map[num]++ : map[num] = 1
    })

    let result = 0
    for (const key in map) {
        if (map[key] === 2) result = result ^ +key
    }
    return result
};