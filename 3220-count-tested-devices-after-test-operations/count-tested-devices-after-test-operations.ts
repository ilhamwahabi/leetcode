function countTestedDevices(batteryPercentages: number[]): number {
    let count = 0

    batteryPercentages.forEach(percentage => {
        Math.max(0, percentage - count) > 0 && count++
    })

    return count
};