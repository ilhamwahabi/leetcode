function pivotArray(nums: number[], pivot: number): number[] {
    const less = []
    const same = []
    const bigger = []

    nums.forEach(num => {
        if (num < pivot) less.push(num)
        else if (num === pivot) same.push(num)
        else bigger.push(num)
    })

    return less.concat(same, bigger)
};