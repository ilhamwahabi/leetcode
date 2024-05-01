function kClosest(points: number[][], k: number): number[][] {
    // 1. Iterate points, check euclidean distance to 0,0
    // 2. Sort the result array
    // 3. Return slice(0, k)

    const distance: [[number,number],number][] = points.map(([x,y]) => {
        return [[x,y], Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))]
    })

    distance.sort((a,b) => a[1]-b[1])

    return distance.slice(0, k).map(res => res[0])
};