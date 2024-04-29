class MyHashSet {
    hashset = {}

    constructor() {
        
    }

    add(key: number): void {
        this.hashset[key] = true
    }

    remove(key: number): void {
        if (this.hashset[key]) {
            delete this.hashset[key]
        }
    }

    contains(key: number): boolean {
        return this.hashset[key] || false
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */