function findKthPositive(arr: number[], k: number): number {
    let remain = k
    let kth = null
    let i = 1
    while (remain > 0) {
        if (!arr.includes(i)) {
            remain -= 1
            kth = i
        }
        i++
    }
    return kth
};