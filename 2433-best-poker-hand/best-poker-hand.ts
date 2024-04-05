function bestHand(ranks: number[], suits: string[]): string {
    if (new Set(suits).size === 1) return "Flush"
    
    const rank = {}
    for (let i = 0; i < ranks.length; i++) {
        rank[ranks[i]] ? rank[ranks[i]]++ : rank[ranks[i]] = 1

        if (rank[ranks[i]] === 3) return "Three of a Kind"
    }

    if (Object.keys(rank).length < 5) return "Pair"
    
    return "High Card"
};