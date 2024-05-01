function kthFactor(n: number, k: number): number {
    let j = k

    for (let i = 1; i < Math.sqrt(n); i++) {
        if (n % i === 0) {
            j--
            if (j === 0) return i
        }
    }

    for (let i = Math.floor(Math.sqrt(n)); i >= 1; i--) {
        if (n % Math.floor(n / i) === 0) {
            j--
            if (j === 0) return n / i
        }
    }

    return -1
};