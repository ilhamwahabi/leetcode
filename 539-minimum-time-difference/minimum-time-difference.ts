function findMinDifference(timePoints: string[]): number {
    // 1. Sorted timePoints
    // 2. Iterated sorted, compare the time, if its minimum store it

    timePoints.sort((a,b) => {
        let minA = parseInt(a.slice(0, 2)) * 60 + parseInt(a.slice(3, 5))
        let minB = parseInt(b.slice(0, 2)) * 60 + parseInt(b.slice(3, 5))

        return minA - minB
    })

    let min = Infinity

    for (let i = 0; i < timePoints.length; i++) {
        if (i === timePoints.length - 1) {
            const difference = timeDifference(timePoints[i], timePoints[0])
            if (difference < min) min = difference
        } else {
            const difference = timeDifference(timePoints[i], timePoints[i+1])
            if (difference < min) min = difference
        }
    }

    return min
};

function timeDifference(a: string, b: string): number {
    let minA = parseInt(a.slice(0, 2)) * 60 + parseInt(a.slice(3, 5))
    let minB = parseInt(b.slice(0, 2)) * 60 + parseInt(b.slice(3, 5))

    let biggest = Math.max(minA, minB)
    let smallest = Math.min(minA, minB)

    const full = 24 * 60
    return Math.min(biggest - smallest, full - biggest + smallest)
}