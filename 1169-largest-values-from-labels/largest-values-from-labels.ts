function largestValsFromLabels(values: number[], labels: number[], numWanted: number, useLimit: number): number {
    // Merge values and labels
    // Sort it based on value
    // Iterate it, as long as map[label] <= useLimit, use it

    const merged = values.map((value, i) => ([value, labels[i]]))
    merged.sort((a,b) => b[0]-a[0])

    let result = 0
    let nums = 0
    const map = {}
    let i = 0
    while (i < merged.length && nums < numWanted) {
        const [value, label] = merged[i]
        if (!map[label] || map[label] < useLimit) {
            map[label] ? map[label]++ : map[label] = 1
            result += value
            nums++
        }
        i++
    }
    return result
};