function minPartitions(n: string): number {
    // Find max digit

    let max = "0"
    for (const num of n) {
        if (num > max) max = num
    }
    return parseInt(max)
};