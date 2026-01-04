function productExceptSelf(nums: number[]): number[] {
    // [1,2,3,4]
    // 24 = () * (2 * 3 * 4)
    // 12 = (1) * (3 * 4)
    // 8  = (1 * 2) * (4)
    // 6  = (1 * 2 * 3) * ()
    // prod(n) = prefixProd(n) * suffixProd(n)

    const prefixProd = [1]
    for (let i = 0; i < nums.length - 1; i++) {
        const num = nums[i]

        prefixProd.push(num * prefixProd.at(-1))
    }

    const suffixProd = [1]
    for (let i = nums.length - 1; i > 0; i--) {
        const num = nums[i]

        suffixProd.push(num * suffixProd.at(-1))
    }

    return nums.map((_, index) => prefixProd[index] * suffixProd[nums.length - 1 - index])
};