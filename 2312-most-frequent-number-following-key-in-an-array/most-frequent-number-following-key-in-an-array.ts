function mostFrequent(nums: number[], key: number): number {
    // 1. Create map to store the number that follow the key, and freq to track the max
    // 2. Iterate nums, if nums[i] === key, add nums[i + 1] to to map

    const map = {}
    let max = 0
    let maxCount = 0

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === key) {
            const following = nums[i+1]
            map[following] ? map[following]++ : map[following] = 1

            if (map[following] > maxCount) {
                maxCount = map[following]
                max = following
            }
        }
    }

    return max
};