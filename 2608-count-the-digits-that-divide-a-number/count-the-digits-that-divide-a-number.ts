function countDigits(num: number): number {
    // 1. Store the result to count
    // 2. Iteratively get digit of num, and if it divide num increase the counter

    let count = 0

    let n = num
    while (n > 0) {
        const digit = n % 10
        if (num % digit === 0) count++

        n = Math.floor(n / 10)
    }

    return count
};