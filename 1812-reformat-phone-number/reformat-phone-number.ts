function reformatNumber(number: string): string {
    const nums = []
    for (const char of number) {
        if (char !== " " && char !== "-") nums.push(char)
    }

    const result = []
    const mod = nums.length % 3
    const map = { 0: 0, 1: 4, 2: 2 }
    for (let i = 0; i < nums.length - map[mod]; i += 3) {
        result.push(nums[i] + nums[i + 1] + nums[i + 2])
    }
    if (mod === 2) result.push(nums.at(-2) + nums.at(-1))
    if (mod === 1) result.push(nums.at(-4) + nums.at(-3), nums.at(-2) + nums.at(-1))

    return result.join("-")
};