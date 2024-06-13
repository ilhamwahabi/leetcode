function circularGameLosers(n: number, k: number): number[] {
    // Fill n length array with 0
    // Iterate until certain element is 2, track turn
    // Return filtered array with i = 0

    const score = Array(n).fill(0)

    let turn = 1
    let curr = 0
    while (true) {
        score[curr]++
        if (score[curr] === 2) break

        curr = (curr + (turn * k)) % n
        turn++
    }
    
    const result = []
    for (let i = 0; i < score.length; i++) {
        if (score[i] === 0) result.push(i + 1)
    }
    return result
};