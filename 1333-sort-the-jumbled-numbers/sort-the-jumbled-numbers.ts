function sortJumbled(mapping: number[], nums: number[]): number[] {
    // Get the mapping for each num in nums
    // Sort the mapping ascending, if same compare their origin
    const map = nums.map(num => {
        let result = ""
        for (const digit of String(num)) result += mapping[digit]
        return [parseInt(result), num]
    })

    map.sort((a,b) => {
        if (a[0] === b[0]) return 1
        else return a[0] - b[0]
    })

    return map.map(item => item[1])
};