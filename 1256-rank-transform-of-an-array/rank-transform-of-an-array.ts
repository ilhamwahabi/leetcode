function arrayRankTransform(arr: number[]): number[] {
    const temp = [...arr]
    temp.sort((a,b) => a-b)

    const rank = {}
    let curr = 1
    temp.forEach((t, i) => {
        if (!rank[t]) {
            rank[t] = curr
            curr++
        }
    })

    return arr.map(a => rank[a])
};