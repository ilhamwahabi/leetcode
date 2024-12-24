function minimumOperations(nums: number[]): number {
    const map = {}
    nums.forEach(num => {
        map[num] ? map[num]++ : map[num] = 1
    })

    if (Object.keys(map).length === nums.length) return 0

    let step = 1
    for (let i = 0; i < nums.length; i += 3) {
        typeof nums[i] === "number" && map[nums[i]]--
        typeof nums[i+1] === "number" && map[nums[i+1]]--
        typeof nums[i+2] === "number" && map[nums[i+2]]--

        if (map[nums[i]] === 0) delete map[nums[i]]
        if (map[nums[i+1]] === 0) delete map[nums[i+1]]
        if (map[nums[i+2]] === 0) delete map[nums[i+2]]

        if (Object.keys(map).length === Math.max(0, nums.length - i - 3)) break
        step++
    }

    return step
};