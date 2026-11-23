function minRange(a: number, b: number, c: number): number {
    // 2,5,9
    // 7,14,11

    // Find the min val between a,b,c
    // Find the min val between sum of two above
    // Return it

    const [min1, mid1, max1] = [a,b,c].toSorted((a,b) => a - b)
    const min3 = Math.min(a + b, b + c, c + a)

    return Math.min(Math.abs(min1 - max1), Math.abs(min1 - min3))
};