function nearestValidPoint(x: number, y: number, points: number[][]): number {
    let nearest = -1
    let distance = Infinity

    points.forEach((point, index) => {
        if (point[0] === x || point[1] === y) {
            const manhattan = Math.abs(x - point[0]) + Math.abs(y - point[1])
            if (manhattan < distance) {
                nearest = index
                distance = manhattan
            }
        }
    })

    return nearest
};