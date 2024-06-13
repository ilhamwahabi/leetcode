function largeGroupPositions(s: string): number[][] {
    // Iterate s in one go, if the length of same char >= 3 then store in group
    const group = []

    let curr = []
    for (let i = 0; i <= s.length; i++) {
        if (s[curr[curr.length - 1]] !== s[i]) {
            if (curr.length >= 3) group.push([curr[0], curr[curr.length - 1]])
            curr = [i]
        } else {
            curr.push(i)
        }
    }
 
    return group
};