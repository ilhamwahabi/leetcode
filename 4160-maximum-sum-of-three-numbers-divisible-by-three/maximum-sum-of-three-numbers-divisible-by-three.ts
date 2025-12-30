function maximumSum(nums: number[]): number {
    // 4321

    // 1: 4,1
    // 2: 2
    // 0: 3

    // 0 0 0
    // 0 1 2
    // 2 2 2
    // 1 1 1

    // Find 3 biggest mod 0
    // Find biggest mod 0 + biggest mod 1 + biggest mod 2

    const zeros = []
    const ones = []
    const twos = []

    for (const num of nums) {
        if (num % 3 === 0) zeros.push(num)
        if (num % 3 === 1) ones.push(num)
        if (num % 3 === 2) twos.push(num)
    }
    zeros.sort((a, b) => b - a)
    ones.sort((a, b) => b - a)
    twos.sort((a, b) => b - a)

    let result = 0
    if (zeros[0] > 0 && ones[0] > 0 && twos[0] > 0) result = Math.max(result, zeros[0] + ones[0] + twos[0])
    if (zeros.length >= 3) result = Math.max(result, zeros[0] + zeros[1] + zeros[2])
    if (twos.length >= 3) result = Math.max(result, twos[0] + twos[1] + twos[2])
    if (ones.length >= 3) result = Math.max(result, ones[0] + ones[1] + ones[2])

    return result
};