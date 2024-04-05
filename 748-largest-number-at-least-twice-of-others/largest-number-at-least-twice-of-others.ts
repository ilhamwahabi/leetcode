function dominantIndex(nums: number[]): number {
    let firstLrg = -Infinity
    let firstLrgIdx = -1
    let secondLrg = -Infinity

    nums.forEach((num, i) => {
        if (num >= firstLrg) {
            secondLrg = firstLrg
            firstLrg = num
            firstLrgIdx = i
        } else if (num > secondLrg) {
            secondLrg = num
        }
    })

    return firstLrg >= secondLrg * 2 ? firstLrgIdx : -1
};