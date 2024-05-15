class FrontMiddleBackQueue {
    queue = []

    pushFront(val: number): void {
        this.queue.unshift(val)
    }

    pushMiddle(val: number): void {
        this.queue.splice(Math.floor(this.queue.length / 2), 0, val)
    }

    pushBack(val: number): void {
        this.queue.push(val)
    }

    popFront(): number {
        return this.queue.shift() || -1
    }

    popMiddle(): number {
        const val = this.queue[Math.floor((this.queue.length - 1) / 2)] || -1
        this.queue.splice(Math.floor((this.queue.length - 1) / 2), 1)

        return val
    }

    popBack(): number {
        return this.queue.pop() || -1
    }
}

/**
 * Your FrontMiddleBackQueue object will be instantiated and called as such:
 * var obj = new FrontMiddleBackQueue()
 * obj.pushFront(val)
 * obj.pushMiddle(val)
 * obj.pushBack(val)
 * var param_4 = obj.popFront()
 * var param_5 = obj.popMiddle()
 * var param_6 = obj.popBack()
 */