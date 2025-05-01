function canVisitAllRooms(rooms: number[][]): boolean {
    // From first room, iterate it's key & recursively visit all room from there
    // Save it in graph
    // If all room visited that mean graph size === total rooms

    const graph = new Map()
    
    function recursion(i = 0) {
        graph.set(i, rooms[i])
        for (const room of rooms[i]) {
            if (!graph.has(room)) recursion(room)
        }
    }
    recursion()

    return graph.size === rooms.length
};