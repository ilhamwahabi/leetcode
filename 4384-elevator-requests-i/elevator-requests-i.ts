function elevatorRequests(n: number, requests: number[]): number {
    // Iterate requests, track the total seconds by count requests[i] - previous

    // Time: O(n)
    // Space: O(1)

    let times = 0
    let curr = 0
    for (const r of requests) {
        times += Math.abs(r - curr)
        curr = r
    } 
    return times
};