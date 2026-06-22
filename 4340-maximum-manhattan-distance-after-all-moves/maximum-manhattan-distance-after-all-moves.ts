function maxDistance(moves: string): number {
    let x = 0
    let y = 0

    let us = 0
    for (let i = 0; i < moves.length; i++) {
        const move = moves[i]

        if (move === "L") y--
        if (move === "R") y++
        if (move === "U") x++
        if (move === "D") x--
        if (move === "_") us++
    }

    return Math.max(
        Math.abs(x + us) + Math.abs(y),
        Math.abs(x - us) + Math.abs(y),
        Math.abs(x) + Math.abs(y + us),
        Math.abs(x) + Math.abs(y - us),
    )
};