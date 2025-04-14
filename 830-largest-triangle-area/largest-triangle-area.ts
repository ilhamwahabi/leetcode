function largestTriangleArea(points: number[][]): number {
    // Time: O(n^3)
    // Space: O(1), constant

    let max = -Infinity

    for (let i = 0; i < points.length - 2; i++) {
        const [x1, y1] = points[i]

        for (let j = i + 1; j < points.length - 1; j++) {
            const [x2, y2] = points[j]

            for (let k = j + 1; k < points.length; k++) {
                const [x3, y3] = points[k]

                max = Math.max(
                    max,
                    0.5 * Math.abs(
                        x1 * (y2 - y3) +
                        x2 * (y3 - y1) +
                        x3 * (y1 - y2)
                    )
                )
            }
        }
    }

    return max
};