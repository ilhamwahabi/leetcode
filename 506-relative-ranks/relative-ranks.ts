function findRelativeRanks(score: number[]): string[] {
    // Sort score ascending
    // Map score to their rank
    // Iterate score, replace with their rank

    const sorted = score.slice().sort((a,b) => b-a)

    const rank = {}
    sorted.forEach((sc, i) => {
        if (i === 0) rank[sc] = "Gold Medal"
        else if (i === 1) rank[sc] = "Silver Medal"
        else if (i === 2) rank[sc] = "Bronze Medal"
        else rank[sc] = `${i + 1}`
    })

    return score.map(sc => rank[sc])
};