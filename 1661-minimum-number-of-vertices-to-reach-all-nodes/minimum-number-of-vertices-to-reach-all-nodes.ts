function findSmallestSetOfVertices(n: number, edges: number[][]): number[] {
    // Find set of vertices where all nodes reachable
    // => Find the vertice that don't have incoming,
    // because to reach them only by themselves, so they must be included
    // and from them we can reach anywhere else
    // if not? that mean they don't have incoming, back to above

    // Time: O(n + n + n) ~ O(n), linear
    // Space: O(n + n) ~ O(n), linear

    const vertices = Array.from({ length: n }, () => 0)

    edges.forEach(edge => {
        const [_, to] = edge
        vertices[to]++
    })

    const result = []
    vertices.forEach((vertice, index) => {
        if (vertice === 0) result.push(index)
    })
    return result
};