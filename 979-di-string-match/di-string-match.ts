function diStringMatch(s: string): number[] {    
    const arr = []
    
    let min = 0
    let max = s.length
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "I") {
            arr.push(min)
            min++
        } else if (s[i] === "D") {
            arr.push(max)
            max--
        }
    }

    return arr.concat(max)
};