function maxSatisfied(customers: number[], grumpy: number[], minutes: number): number {
    let sum = 0
    for (let i = 0; i < grumpy.length; i++) {
        if (grumpy[i] === 0) sum += customers[i]
    }

    let max = sum
    for (let i = 0; i < minutes; i++) {
        if (grumpy[i] === 1) max += customers[i]
    }

    let current = max
    for (let i = minutes; i < grumpy.length; i++) {
        if (grumpy[i] === 1) current += customers[i]
        if (grumpy[i - minutes] === 1) current -= customers[i - minutes]

        if (current > max) max = current
    }

    return max
};