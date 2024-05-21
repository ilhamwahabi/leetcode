function matchPlayersAndTrainers(players: number[], trainers: number[]): number {
    // Sort players and trainers, ascending
    // Iterate players and put pointer on players, if player <= trainer: increase pointer

    players.sort((a,b) => a-b)
    trainers.sort((a,b) => a-b)

    let i = 0
    let j = 0
    while (i < players.length && j < trainers.length) {
        if (players[i] <= trainers[j]) {
            i++
            j++
        } else {
            j++
        }
    }
    
    return i
};