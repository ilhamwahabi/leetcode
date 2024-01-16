class RandomizedSet {
    set: { [key: number]: boolean } = {}
    count: number = 0

    constructor() {}

    insert(val: number): boolean {
        if (this.set[val]) return false

        this.set[val] = true
        this.count++
        return true
    }

    remove(val: number): boolean {
        if (!this.set[val]) return false

        delete this.set[val]
        this.count--
        return true
    }

    getRandom(): number {
        return parseInt(Object.keys(this.set)[Math.floor(Math.random() * this.count)])
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */