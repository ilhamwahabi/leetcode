function findPermutationDifference(s: string, t: string): number {
    // Iterate s, store the index in map
    // Iterate t, count the differ

    const map = {}
    for (let i = 0; i < s.length; i++) {
        map[s[i]] = i
    }

    let diff = 0
    for (let i = 0; i < t.length; i++) {
        diff += Math.abs(i - map[t[i]])
    }
    return diff
};