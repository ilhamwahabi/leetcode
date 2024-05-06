function findingUsersActiveMinutes(logs: number[][], k: number): number[] {
    // Iterate logs
    // Count active minute for each id, use set to identify if its already counted
    // Generate result array, fill with 0
    // Map object of userid with active minute, increase result at that position - 1

    const min = {}
    logs.forEach(([id, time]) => {
        min[id] ? min[id].add(time) : min[id] = new Set([time])
    })

    const result = Array(k).fill(0)
    for (const key in min) {
        const uam = min[key].size
        result[uam - 1]++
    }
    return result
};