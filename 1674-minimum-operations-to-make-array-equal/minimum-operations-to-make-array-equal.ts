function minOperations(n: number): number {
    // n=1 [1] 0 (+1)
    // n=2 [1,3] 1 (+1)
    // n[3] [1,3,5] 2 (+2)
    // n[4] [1,3,5,7] 4 (+2)
    // n[5] [1,3,5,7,9] 6 (+3)
    // n[6] [1,3,5,7,9,11] 9 (+3)
    // n[7] [1,3,5,7,9,11,13] 12 (+4)

    // 1. Get first element, get last element, get middle element
    // 2. Iterate from 1 to middle element, increase by last element - first element + (2 * i)
    const first = 1
    const last = 2 * (n - 1) + 1
    const middle = 2 * (Math.ceil(n / 2) - 1) + 1

    let ops = 0
    for (let i = first; i <= middle; i += 2) {
        ops += (last - first) / 2 - (i - first)
    }
    return ops
};