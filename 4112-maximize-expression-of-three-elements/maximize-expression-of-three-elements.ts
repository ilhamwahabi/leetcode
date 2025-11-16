function maximizeExpressionOfThree(nums: number[]): number {
    let max1 = -Infinity
    let max2 = -Infinity
    let min = Infinity

    for (const num of nums) {
        if (num >= max1) {
            max2 = max1
            max1 = num
        } else if (num > max2) {
            max2 = num
        }
        
        if (num < min) {
            min = num
        }
    }

    console.log(max1, max2, min)

    return max1 + max2 - min
};