function countBits(n: number): number[] {
    const result = []

    for (let i = 0; i <= n; i++) {
        const binary = i.toString(2)

        let one = 0
        for (const char of binary) {
            if (char === "1") one++
        }
        result.push(one)
    }

    return result
};