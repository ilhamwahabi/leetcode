function merge(intervals: number[][]): number[][] {
    // 1. Sort intervals
    // 2. Create result array
    // 3. Iterate intervals, if empty -> append, if not conflict -> append, if conflict -> merge
    // 4. Return result

    intervals.sort((a, b) => a[0] - b[0])

    const result = [intervals[0]]

    for (let i = 1; i < intervals.length; i++) {
        if (
            intervals[i][0] >= result[result.length - 1][0]&&
            intervals[i][0] <= result[result.length - 1][1]
        ) {
            if (intervals[i][1] > result[result.length - 1][1]) {
                result[result.length - 1][1] = intervals[i][1]
            }
        } else {
            result.push(intervals[i])
        }
    }

    return result
};