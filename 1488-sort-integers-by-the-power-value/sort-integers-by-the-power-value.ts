function getKth(lo: number, hi: number, k: number): number {
    // Iterate from lo to hi
    // Traverse each number, use dp
    // Sort based on step, take [k-1]

    const dp = {}
    const res = []
    for (let i = lo; i <= hi; i++) {
        const step = traverse(i, dp)
        res.push([i, step])
    }

    res.sort((a,b) => a[1] - b[1])
    return res[k-1][0]
};

function traverse(num: number, dp: Object) {
    if (dp[num]) return dp[num]

    if (num === 1) return 0
    if (num % 2 === 0) {
        dp[num] = 1 + traverse(num / 2, dp)
        return dp[num]
    } else {
        dp[num] = 1 + traverse(3 * num + 1, dp)
        return dp[num]
    }
}