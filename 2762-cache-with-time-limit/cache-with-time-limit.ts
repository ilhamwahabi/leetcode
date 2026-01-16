class TimeLimitedCache {
    map = new Map()
    
    constructor() {
        this.map = new Map()
    }
    
    set(key: number, value: number, duration: number): boolean {
        const entry = this.map.get(key)
        
        if (entry) clearTimeout(entry.id)

        const id = setTimeout(() => {
            this.map.delete(key)
        }, duration)

        this.map.set(key, { id, value })

        return entry !== undefined
    }
    
    get(key: number): number {
        return this.map.get(key)?.value ?? -1
    }
    
    count(): number {
        return this.map.size
    }
}

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */