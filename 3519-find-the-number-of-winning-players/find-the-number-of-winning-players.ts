function winningPlayerCount(n: number, pick: number[][]): number {
    // Time: O(n), linear
    // Space: O(n + m) ~ O(n), linear

    const map = {}
    const set = new Set()

    for (const item of pick) {
        const [player, color] = item

        if (!map[player]) map[player] = {}
        map[player][color] ? map[player][color]++ : map[player][color] = 1

        if (map[player][color] > player) set.add(player)
    }

    return set.size
};