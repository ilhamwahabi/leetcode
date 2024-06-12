function findLHS(nums: number[]): number {
    const map: { [key: number]: number } = {}
    nums.forEach(num => { map[num] ? map[num]++ : map[num] = 1 })

    const keys = Object.keys(map).sort((a,b) => +a - +b)
    let max = 0
    for (let i = 0; i < keys.length - 1; i++) {
        if (+keys[i] === +keys[i+1] - 1) {
            max = Math.max(map[keys[i]] + map[keys[i+1]], max)
        }
    }
    return max
};