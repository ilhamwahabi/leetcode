function findPoisonedDuration(timeSeries: number[], duration: number): number {
    // Iterate timeSeries
    // for each timeSeries[i], track endTimes, that mean timeSeries[i] + 2
    // next endTimes will be Math.max(endTimes, timeSeries[i] + 2)
    // add total with endTimes - timeSeries[i]

    let total = 0
    let finish = timeSeries[0]

    timeSeries.forEach(time => {
        const end = time + duration

        total += end - Math.max(finish, time)
        finish = end
    })

    return total
};