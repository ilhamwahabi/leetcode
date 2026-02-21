function numberOfChild(n: number, k: number): number {
    const div = Math.floor(k / (n - 1))
    const mod = k % (n - 1)

    if (div % 2 === 0) {
        return mod
    } else {
        return n - 1 - mod
    }
};