function minCuttingCost(n: number, m: number, k: number): number {
    return findCost(n, k) + findCost(m, k)
};

const findCost = (x: number, k: number) => {
    if (x > k) {
        let min = Infinity
        
        for (let i = 1; i < x; i++) {
            const len1 = i
            const len2 = x - i
            
            if (len1 <= k && len2 <= k) {
                min = Math.min(len1 * len2, min)
            }
        }

        return min
    }

    return 0
}