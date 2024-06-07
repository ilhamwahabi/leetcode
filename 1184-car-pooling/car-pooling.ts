function carPooling(trips: number[][], capacity: number): boolean {
    // Sort trips
    // Create maps for each from and to point, calculate the resultan
    // Iterate point, check if its not > capacity: false; else: true

    trips.sort((a,b) => a[1]-b[1])

    const map = {}
    trips.forEach(([cap, from, to]) => {
        map[from] ? map[from] += cap : map[from] = cap
        map[to] ? map[to] -= cap : map[to] = -cap
    })

    let cap = 0
    for (const point in map) {
        cap += map[point]
        if (cap > capacity) return false
    }
    return true
};