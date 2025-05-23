function numOfUnplacedFruits(fruits: number[], baskets: number[]): number {
    const set = new Set()
    
    for (const fruit of fruits) {
        for (let i = 0; i < baskets.length; i++) {
            const basket = baskets[i]
            if (fruit <= basket && !set.has(i)) {
                set.add(i)
                break
            }
        }
    }

    return fruits.length - set.size
};