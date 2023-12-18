function maxProductDifference(nums: number[]): number {
    var max1 = Number.MIN_SAFE_INTEGER
    var max2 = Number.MIN_SAFE_INTEGER

    var min1 = Number.MAX_SAFE_INTEGER
    var min2 = Number.MAX_SAFE_INTEGER

    nums.forEach(num => {
        if (num >= max1) { max2 = max1; max1 = num }
        else if (num > max2) { max2 = num }

        if (num <= min1) { min2 = min1; min1 = num }
        else if (num < min2) { min2 = num }
    })

    return max1 * max2 - min1 * min2
};