class RecentCounter {
    request = []

    ping(t: number): number {
        this.request.push(t)

        while (this.request[0] < t - 3000) {
            this.request.shift()
        }

        return this.request.length
    }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */