function sumOfThree(num: number): number[] {
    // 1. If num is below 5: []
    // 2. If num is divisable by three: [num/3 - 1,num/3, num/3 + 1]

    if (num % 3 === 0) return [num / 3 - 1, num / 3, num / 3 + 1]
    return []
};