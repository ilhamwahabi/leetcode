function convertTime(current: string, correct: string): number {
    const [currH, currM] = current.split(":")
    const [corrH, corrM] = correct.split(":")

    const currTot = parseInt(currH) * 60 + parseInt(currM)
    const corrTot = parseInt(corrH) * 60 + parseInt(corrM)

    let diff = Math.min(corrTot - currTot)
    let total = 0

    total += Math.floor(diff / 60)
    diff = diff % 60
    total += Math.floor(diff / 15)
    diff = diff % 15
    total += Math.floor(diff / 5)
    diff = diff % 5
    total += Math.floor(diff / 1)
    diff = diff % 1

    return total
};