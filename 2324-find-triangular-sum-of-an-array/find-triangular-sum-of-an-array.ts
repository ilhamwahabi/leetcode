function triangularSum(nums: number[]): number {
    // 1. Copy nums to n
    // 2. Iterate while n.length > 1
    // 3. Inside while loop, create for loop to get the addition
    // 4. Return n[0]

    let n = [...nums]
    let arr = []
    while (n.length > 1) {
        for (let i = 1; i < n.length; i++) {
            arr.push((n[i] + n[i-1]) % 10)
        }

        n = [...arr]
        arr = []
    }
    return n[0]
};