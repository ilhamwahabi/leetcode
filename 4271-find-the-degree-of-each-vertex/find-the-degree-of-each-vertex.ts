function findDegrees(matrix: number[][]): number[] {
    const degree = []

    for (const vertex of matrix) {
        let connected = 0
        
        for (const edge of vertex) {
            connected += edge
        }

        degree.push(connected)
    }

    return degree
};