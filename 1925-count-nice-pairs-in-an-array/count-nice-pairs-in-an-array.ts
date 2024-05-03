function countNicePairs(nums: number[]): number {
    const map = {}
    let total = 0

    const diff = nums.map(num => {
        const result = num - parseInt(String(num).split("").reverse().join(""))

        if (map[result]) {
            total += map[result]
            map[result]++
        } else {
            map[result] = 1
        }

        return result
    })

    return total % (Math.pow(10, 9) + 7)
};