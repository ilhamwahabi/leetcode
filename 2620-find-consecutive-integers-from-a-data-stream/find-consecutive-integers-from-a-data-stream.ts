class DataStream {
    value = 0
    k = 0
    stream = []
    lastDifferIndex = -1

    constructor(value: number, k: number) {
        this.value = value
        this.k = k
    }

    consec(num: number): boolean {
        this.stream.push(num)
        if (this.stream.length > this.k) {
            this.stream.shift()
            if (this.lastDifferIndex !== -1) this.lastDifferIndex--
        }
        if (num !== this.value) this.lastDifferIndex = this.stream.length - 1

        return (this.stream.length === this.k && this.lastDifferIndex === -1)
    }
}

/**
 * Your DataStream object will be instantiated and called as such:
 * var obj = new DataStream(value, k)
 * var param_1 = obj.consec(num)
 */