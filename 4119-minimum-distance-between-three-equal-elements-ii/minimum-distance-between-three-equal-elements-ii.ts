function minimumDistance(nums: number[]): number {
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