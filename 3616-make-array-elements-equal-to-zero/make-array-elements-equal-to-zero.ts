function countValidSelections(nums: number[]): number {
    const sum = nums.reduce((acc, curr) => acc + curr, 0)

    let result = 0

    let left = 0
    nums.forEach(num => {
        left += num

        if (num === 0) {
            const right = sum - left
            
            if (left === right) result += 2
            if (Math.abs(left - right) === 1) result++
        }
    })

    return result
};