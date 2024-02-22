function findJudge(n: number, trust: number[][]): number {
    const map = {}
    trust.forEach(([a,b]) => {
        map[a] ? map[a].add(b) : map[a] = new Set([b])
    })

    for (let i = 1; i <= n; i++) {
        if (!map[i]) {
            let others = 0
            for (const key in map) {
                if (map[key].has(i)) others++
                else break
            }
            if (n - 1 === others) return i
        }
    }
    return -1
};