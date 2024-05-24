function minPartitions(n: string): number {
    // Find max digit

    let i = 0
    let nine = false
    let max = "0"

    while (i < n.length && !nine) {
        if (n[i] > max) max = n[i]
        if (n[i] === "9") nine = true
        i++
    }
    
    return nine ? 9 : parseInt(max)
};