function occurrencesOfElement(nums: number[], queries: number[], x: number): number[] {
    const dict = {}
    let count = 1
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === x) {
            dict[count] = i
            count++
        }
    }

    const result = []
    for (const query of queries) {
        if (dict[query] !== undefined) result.push(dict[query])
        else result.push(-1)
    }
    return result
};