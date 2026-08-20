function nearestDrone(drones: number[][], target: number[]): number {
    // Iterate drones, get manhattan distance to target
    // If distance <= range, then store the value and index
    // Later If any found that smaller than replace it

    // Time: O(n)
    // Space: O(1)

    let smVal = Infinity
    let smIdx = -1

    for (let i = 0; i < drones.length; i++) {
        const [x, y, range] = drones[i]
        const distance = Math.abs(target[0] - x) + Math.abs(target[1] - y)

        if (distance <= range && distance < smVal) {
            smVal = distance
            smIdx = i
        }
    }

    return smIdx
};