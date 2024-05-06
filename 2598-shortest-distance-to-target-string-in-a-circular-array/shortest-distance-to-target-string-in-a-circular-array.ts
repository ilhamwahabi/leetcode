function closetTarget(words: string[], target: string, startIndex: number): number {
    // Find index of target, if none return -1
    // Return Math.min(forward, backward) for each found index

    const idxs = []
    words.forEach((word, i) => {
        if (word === target) idxs.push(i)
    })
    if (idxs.length === 0) return -1

    let min = Infinity
    idxs.forEach(idx => {
        const a = Math.max(idx, startIndex) - Math.min(idx, startIndex)
        const b = words.length - Math.max(idx, startIndex) + Math.min(idx, startIndex)

        min = Math.min(a, b, min)
    })
    return min
};