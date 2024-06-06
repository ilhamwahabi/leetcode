function isNStraightHand(hand: number[], groupSize: number): boolean {
    // Iterate, check if next is element is +1 from previous
    // If not, continue iterating until you found it, if you can't found it: false
    // If yes, continue from next marking iterating index
    
    if (hand.length % groupSize !== 0) return false

    hand.sort((a,b) => a-b)
    console.log(hand)

    const map: { [key: number]: boolean } = {}
    let i = 0
    while (i < hand.length) {
        let j = i
        let k = Infinity
        let group = [hand[j]]
        map[j] = true
        while (j < hand.length && group.length < groupSize) {
            if (group[group.length - 1] + 1 === hand[j + 1] && !map[j + 1]) {
                group.push(hand[j + 1])
                map[j + 1] = true
            } else {
                if (!map[j + 1]) k = Math.min(k, j + 1)
            }
            j++
        }
        if (group.length < groupSize) return false
        i = Math.min(k, j + 1)
    }
    return true
};