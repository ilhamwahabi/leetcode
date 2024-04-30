function tribonacci(n: number): number {
    // Tn = Tn-1 + Tn-2 + Tn-3
    // 1. Do the fibonaccy until n, store in results
    // 2. Return the last 3 element

    const result = []

    while (result.length <= n) {
        if (result.length === 0) result.push(0)
        else if (result.length === 1) result.push(1)
        else if (result.length === 2) result.push(1)
        else {
            result.push(result[result.length - 1] + result[result.length - 2] + result[result.length - 3])
        }
    }

    return result[result.length - 1]
};