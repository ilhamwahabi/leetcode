function earliestTime(tasks: number[][]): number {
    let min = Infinity

    tasks.forEach(task => {
        const [start, spend] = task

        min = Math.min(start + spend, min)
    })

    return min
};