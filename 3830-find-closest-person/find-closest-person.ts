function findClosest(x: number, y: number, z: number): number {
    const oneDist = Math.abs(x - z)
    const twoDist = Math.abs(y - z)

    if (oneDist < twoDist) return 1
    if (oneDist > twoDist) return 2
    return 0
};