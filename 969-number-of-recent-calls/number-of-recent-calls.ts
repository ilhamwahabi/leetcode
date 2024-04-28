class RecentCounter {
    request = []
    mark = 0

    constructor() {
        
    }

    ping(t: number): number {
        this.request.push(t)
        for (let i = 0; i < this.request.length; i++) {
            if (this.request[i] >= t - 3000) {
                this.mark = i
                break
            }
        }

        return this.request.length - this.mark
    }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */