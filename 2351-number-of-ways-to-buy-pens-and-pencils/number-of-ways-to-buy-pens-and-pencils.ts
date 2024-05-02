function waysToBuyPensPencils(total: number, cost1: number, cost2: number): number {
    // 1. Count max pen that we can buy Math.floor(total / cost1)
    // 2. Count max pencil that we can buy
    // 3. Loop from 0 to <= maxPen, increase for each pencil that we can buy

    const maxPen = Math.floor(total / cost1)

    let sum = 0
    for (let i = 0; i <= maxPen; i++) {
        const maxPencil = Math.floor((total - (cost1 * i)) / cost2)
        sum += maxPencil + 1
    }
    return sum
};