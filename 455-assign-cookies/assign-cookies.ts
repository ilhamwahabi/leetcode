function findContentChildren(g: number[], s: number[]): number {
    let content = 0

    g.sort((a,b) => a - b)
    s.sort((a,b) => a - b)

    let i = 0
    let j = 0
    while (i < g.length && j < s.length) {
        if (g[i] <= s[j]) {
            content += 1
            i += 1
            j += 1
        } else {
            j += 1
        }
    }

    return content
};