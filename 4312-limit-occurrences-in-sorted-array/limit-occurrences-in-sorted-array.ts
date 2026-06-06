function limitOccurrences(nums: number[], k: number): number[] {
    const map = {}

    const result = []
    for (const num of nums) {
        if (!map[num] || map[num] < k) {
            result.push(num)
            map[num] ? map[num]++ : map[num] = 1
        }
    }
    return result
};