function triangularSum(nums: number[]): number {
    // 1. Copy nums to n
    // 2. Iterate while n.length > 1
    // 3. Inside while loop, create for loop to get the addition
    // 4. Return n[0]

    let n = [...nums]
    while (n.length > 1) {
        const arr = []

        for (let i = 1; i < n.length; i++) {
            arr.push((n[i] + n[i-1]) % 10)
        }

        n = arr
    }
    return n[0]
};