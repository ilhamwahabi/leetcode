function minProcessingTime(processorTime: number[], tasks: number[]): number {
    // sort time and tasks
    // find min between Math.max(pros + tasks[i]), pros++ and tasks += 4

    processorTime.sort((a,b) => a-b)
    tasks.sort((a,b) => a-b)

    let min = 0
    for (let i = 0; i < processorTime.length; i++) {
        const max = processorTime[i] + tasks[tasks.length - 1 - (i * 4)]
        if (max > min) min = max
    }
    return min
};