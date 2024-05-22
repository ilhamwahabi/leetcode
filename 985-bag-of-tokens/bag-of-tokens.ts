function bagOfTokensScore(tokens: number[], power: number): number {
    // Sort tokens ascending
    // Put 2 pointer in front and end of tokens
    // If power > token[front], power - token[front], front++
    // If power < token[front], power + token[end], end--

    tokens.sort((a,b) => a-b)
    let p = power
    let score = 0
    let max = 0

    let i = 0
    let j = tokens.length - 1
    while (i <= j) {
        if (p >= tokens[i]) {
            p -= tokens[i]
            i++
            score++
        } else {
            if (score > 0) {
                p += tokens[j]
                j--
                score--
            } else {
                break
            }
        }
        max = Math.max(max, score)
    }
    
    return max
};