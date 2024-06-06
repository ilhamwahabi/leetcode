function findLonely(nums: number[]): number[] {
    // Iterate nums, count the occurances
    // Iterate occurances, check if the value is 1 and key-1 and key+1 is not exist

    const map: { [key: number]: number } = {}
    nums.forEach(num => {
        map[num] ? map[num]++ : map[num] = 1
    })

    const result: number[] = []
    for (const n in map) {
        const num = parseInt(n)
        if (map[num] === 1 && !map[num-1] && !map[num+1]) result.push(num)
    }
    return result
};