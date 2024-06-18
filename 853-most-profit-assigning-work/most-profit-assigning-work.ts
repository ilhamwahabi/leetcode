function maxProfitAssignment(difficulty: number[], profit: number[], worker: number[]): number {
    // Create tuple of [difficulty, profit], sort based on profit
    // Sort worker descending
    // Iterate worker to tuples
    const tuples = []
    for (let i = 0; i < difficulty.length; i++) {
        tuples.push([difficulty[i], profit[i]])
    }
    tuples.sort((a,b) => b[1] - a[1])
    worker.sort((a,b) => b - a)

    let i = 0
    let j = 0
    let result = 0
    while (i < worker.length && j < tuples.length) {
        if (worker[i] >= tuples[j][0]) {
            result += tuples[j][1]
            i++
        } else {
            j++
        }
    }
    return result
};