function findXSum(nums: number[], k: number, x: number): number[] {
    const result = []
    const map = {}

    for (let i = 0; i < k; i++) {
        map[nums[i]] ? map[nums[i]]++ : map[nums[i]] = 1
    }
    const sum = countSum(map, x)
    result.push(sum)

    for (let i = 1; i <= nums.length - k; i++) {
        map[nums[i-1]]--        
        map[nums[i+k-1]] ? map[nums[i+k-1]]++ : map[nums[i+k-1]] = 1

        const sum = countSum(map, x)
        result.push(sum)
    }

    return result
};

function countSum(map, x) {
    return Object.keys(map)
        // @ts-ignore
        .toSorted((a,b) => {
            if (map[a] === map[b]) return +b - +a
            return map[b] - map[a]
        })
        .slice(0, x)
        .reduce((acc, curr) => acc + curr * map[curr], 0)
}