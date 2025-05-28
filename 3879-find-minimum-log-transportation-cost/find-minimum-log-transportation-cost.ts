function minCuttingCost(n: number, m: number, k: number): number {
    let cost = 0
    
    if (n > k) {
        let min = Infinity
        
        for (let i = 1; i < n; i++) {
            const len1 = i
            const len2 = n - i

            if (len1 <= k && len2 <= k) {
                min = Math.min(len1 * len2, min)
            }
        }

        cost += min
    }

    if (m > k) {
        let min = Infinity
        
        for (let i = 1; i < m; i++) {
            const len1 = i
            const len2 = m - i
            
            if (len1 <= k && len2 <= k) {
                min = Math.min(len1 * len2, min)
            }
        }

        cost += min
    }

    return cost
};