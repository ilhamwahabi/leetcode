class MyHashSet {
    hashset = []

    add(key: number): void {
        this.hashset[key] = key
    }

    remove(key: number): void {
        if (this.contains(key)) {
            this.hashset[key] = undefined
        }
    }

    contains(key: number): boolean {
        return this.hashset[key] !== undefined
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */