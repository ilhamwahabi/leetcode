function shortestToChar(s: string, c: string): number[] {
    // Get all position of c, store in array
    // Create two pointer, start from 0 to first c, push it
    // Check if left pointer already bypass last c pointer, keep compare the distance with next c

    const cs = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === c) cs.push(i)
    }

    const res = []
    let i = 0
    for (let j = 0; j < s.length; j++) {
        if (Math.abs(j - cs[i+1]) < Math.abs(j - cs[i])) i++

        const distance = Math.abs(j - cs[i])
        res.push(distance)
    }

    return res
};