function findMatrix(nums: number[]): number[][] {
    const arr = []

    const map = {}
    for (let num of nums) {
        if (map[num] === undefined) { map[num] = 0 }
        else { map[num] += 1 }

        if (arr[map[num]] === undefined) { arr.push([num]) }
        else { arr[map[num]].push(num) }
    }

    return arr
};