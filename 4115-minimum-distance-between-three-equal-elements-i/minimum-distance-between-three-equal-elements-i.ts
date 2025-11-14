function minimumDistance(nums: number[]): number {
    // [1,1,2,3,2,1,2]
    // 0 1 5
    // 2 4 6

    // Iterate nums, store occurrance in [key: number]: number[]
    // If it already reach at least 3 item,
    // try calculate its item[2] - item[0], store the min
    // Return the same calc * 2

    let min = Infinity

    const map = {}
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]

        if (map[num]) {
            map[num].push(i)

            if (map[num].length >= 3) {
                const dist = map[num].at(-1) - map[num].at(-3)
                if (dist < min) min = dist
            }
        } else {
            map[num] = [i]
        }
    }

    return min === Infinity ? -1 : min * 2
};