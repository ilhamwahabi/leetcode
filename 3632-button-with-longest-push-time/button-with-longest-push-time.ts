function buttonWithLongestTime(events: number[][]): number {
    // Time: O(n), linear
    // Space: O(1), constant

    let longestIndex = undefined
    let longestTime = -Infinity
    
    let prev = 0
    for (const event of events) {
        const [index, time] = event

        const diff = time - prev
        if (diff > longestTime) {
            longestIndex = index
            longestTime = diff
        } else if (diff === longestTime) {
            longestIndex = Math.min(index, longestIndex)
        }

        prev = time
    }

    return longestIndex
};