function winnerOfGame(colors: string): boolean {
    // Iterate until colors.length - 1
    // Count how many step can each player do, for each consecutive 3 color
    // return a > b (that mean Alice win)

    let counter = 0
    
    for (let i = 1; i < colors.length - 1; i++) {
        const prev = colors[i-1]
        const curr = colors[i]
        const next = colors[i+1]
        
        if (prev === curr && curr === next) {
            if (curr === "A") counter++
            else counter--
        }
    }

    return counter > 0
};