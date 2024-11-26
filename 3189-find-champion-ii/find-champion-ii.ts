function findChampion(n: number, edges: number[][]): number {
    const result = Array.from({ length: n }, () => 0)

    edges.forEach(edge => { result[edge[1]]++ })

    let minIndex = 0
    let minCount = 1
    for (let i = 1; i < result.length; i++) {
        const num = result[i]
        if (num < result[minIndex]) {
            minIndex = i
            minCount = 1
        } else if (num === result[minIndex]) {
            minCount++
        }
    }

    return minCount === 1 ? minIndex : -1
};