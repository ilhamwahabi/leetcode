function hardestWorker(n: number, logs: number[][]): number {
    let longest = logs[0][1]
    let id = logs[0][0]

    for (let i = 1; i < logs.length; i++) {
        if (
            (logs[i][1] - logs[i-1][1] > longest) ||
            (logs[i][1] - logs[i-1][1] === longest && logs[i][0] < id)
        ) {
            longest = logs[i][1] - logs[i-1][1]
            id = logs[i][0]
        }
    }

    return id
};