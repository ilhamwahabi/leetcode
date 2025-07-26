function checkDivisibility(n: number): boolean {
    // Iterate digit on n, get product and sum all of them

    // Time: O(n), depends of n that we input
    // Space: O(1), constant, we dont store incrementing-size value

    let sum = 0
    let product = 1

    let curr = n
    while (curr > 0) {
        const digit = curr % 10

        sum += digit
        product *= digit

        curr = Math.floor(curr / 10)
    }

    return n % (sum + product) === 0
};