function digitSum(s: string, k: number): string {
    // Loop until s.length <= k
    // Nested loop with i += k, count the total, replace s

    let a = s
    while (a.length > k) {
        let b = ""
        
        let c = 0
        for (let i = 0; i < a.length; i++) {
            if (i % k === k - 1 || i === a.length - 1) {
                c += +a[i]
                b += c
                c = 0
            } else {
                c += +a[i]
            }
        }

        a = b
    }
    return a
};