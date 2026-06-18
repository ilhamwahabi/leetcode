function minChanges(n: number, k: number): number {
    const binN = n.toString(2)
    const binK = k.toString(2)

    let count = 0
    for (let i = 0; i < Math.max(binN.length, binK.length); i++) {
        const bitN = binN[binN.length - 1 - i]
        const bitK = binK[binK.length - 1 - i]

        if (bitN === "1" && (bitK === "0" || bitK === undefined)) {
            count++
        } else if ((bitN === "0" || bitN === undefined) && bitK === "1") {
            return -1
        }
    }

    return count
};