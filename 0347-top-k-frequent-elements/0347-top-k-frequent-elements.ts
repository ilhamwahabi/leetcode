function topKFrequent(nums: number[], k: number): number[] {
    const map: { [key: number]: number } = {}
    nums.forEach(num => {
        if (map[num]) map[num]++
        else map[num] = 1
    })

    return Object.entries(map).sort((a, b) => b[1] - a[1])
        .slice(0, k).map(item => Number(item[0]));
};