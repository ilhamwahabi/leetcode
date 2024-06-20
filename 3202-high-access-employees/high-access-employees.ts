function findHighAccessEmployees(access_times: string[][]): string[] {
    // Iterate access_times, store the second value, use map
    // Iterate map, iterate item with length >= 3
    // Sort the seconds
    // If we found item[2] - item[0] < 60 return the key
    const map = {}
    access_times.forEach(([name, time]) => {
        const second = parseInt(time[0] + time[1]) * 60 + parseInt(time[2] + time[3])
        map[name] ? map[name].push(second) : map[name] = [second]
    })

    const result = []
    for (const key in map) {
        if (map[key].length >= 3) {
            map[key].sort((a,b) => b-a)
            for (let i = 0; i < map[key].length - 2; i++) {
                if (map[key][i] - map[key][i + 2] < 60) {
                    result.push(key)
                    break
                }
            }
        }
    }
    return result
};