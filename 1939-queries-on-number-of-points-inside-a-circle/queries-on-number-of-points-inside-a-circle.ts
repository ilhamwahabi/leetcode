function countPoints(points: number[][], queries: number[][]): number[] {
    return queries.map(query => {
        const [x, y, r] = query

        return points.reduce((total, point) => {
            const [a, b] = point
            const distance = Math.sqrt(Math.pow(a - x, 2) + Math.pow(b - y, 2))
            
            if (distance <= r) return total + 1
            return total
        }, 0)
    })
};