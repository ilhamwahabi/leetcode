function maximumPopulation(logs: number[][]): number {
    const map = {}

    let max = Infinity
    let maxTotal = -Infinity

    logs.forEach(log => {
        for (let i = log[0]; i < log[1]; i++) {
            map[i] ? map[i]++ : map[i] = 1

            if ((map[i] > maxTotal) || (map[i] === maxTotal && i < max)) {
                maxTotal = map[i]
                max = i
            }
        }
    })
    
    return max
};