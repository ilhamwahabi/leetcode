function findWinners(matches: number[][]): number[][] {
    const losses = {}

    matches.forEach(([winner, loser]) => {
        losses[loser] ? losses[loser]++ : losses[loser] = 1
        if (!losses[winner]) losses[winner] = 0
    })

    const result = [[], []]
    for (const key in losses) {
        if (losses[key] === 0) result[0].push(key)
        else if (losses[key] === 1) result[1].push(key)
    }

    return result
 };