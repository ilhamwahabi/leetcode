function distanceBetweenBusStops(distance: number[], start: number, destination: number): number {
    // Count distance forward and backward
    // Forward: loop from start to destination
    // Backward: loop from destination to start

    let forward = 0
    let i = start
    while (i !== destination) {
        forward += distance[i]

        if (i < distance.length - 1) i++
        else i = 0
    }

    let backward = 0
    let j = destination
    while (j !== start) {
        backward += distance[j]

        if (j < distance.length - 1) j++
        else j = 0
    }

    return Math.min(forward, backward)
};