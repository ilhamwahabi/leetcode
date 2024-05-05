function findKOr(nums: number[], k: number): number {
    // Iterate nums, store in array for each index of bit
    // Iterate bits array, if its >= k then append 1 to result
    // Return parseInt(result, 2)

    const bits = []
    nums.forEach(num => {
        const bit = num.toString(2)

        for (let i = 0; i < bit.length; i++) {
            if (bits[i] === undefined) bits[i] = parseInt(bit[bit.length - 1 - i])
            else bits[i] += parseInt(bit[bit.length - 1 - i])
        }
    })
        
    let res = ""
    for (const bit in bits) {
        if (bits[bit] >= k) res = '1' + res
        else res = '0' + res
    }
    return parseInt(res, 2)
};