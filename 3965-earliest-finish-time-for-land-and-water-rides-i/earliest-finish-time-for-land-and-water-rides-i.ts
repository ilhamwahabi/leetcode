function earliestFinishTime(landStartTime: number[], landDuration: number[], waterStartTime: number[], waterDuration: number[]): number {
    // Problem: we should find the time which combined total land + total water is minimum
    // We can iterate for each land x water, if it's not overalap, save the value
    // Return the min

    // Time: O(n ^ n), cross the array
    // Space: O(1), constant

    let min = Infinity;

    for (let i = 0; i < landStartTime.length; i++) {
        const landEndTime = landStartTime[i] + landDuration[i]

        for (let j = 0; j < waterStartTime.length; j++) {
            const waterEndTime = waterStartTime[j] + waterDuration[j]

            if (waterStartTime[j] >= landEndTime) {
                min = Math.min(min, waterEndTime)
            }
            if (landStartTime[i] >= waterEndTime) {
                min = Math.min(min, landEndTime)
            }
            if (waterStartTime[j] < landEndTime) {
                min = Math.min(min, landEndTime + waterDuration[j])
            }
            if (landStartTime[i] < waterEndTime) {
                min = Math.min(min, waterEndTime + landDuration[i])
            }
        }
    }

    return min
};