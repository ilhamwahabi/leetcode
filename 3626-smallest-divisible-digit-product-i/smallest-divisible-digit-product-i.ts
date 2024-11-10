function smallestNumber(n: number, t: number): number {
    for (let i = n;; i++) {
        let res = 1
        for (const num of String(i)) res *= +num

        if (res % t === 0) return i
    }
};