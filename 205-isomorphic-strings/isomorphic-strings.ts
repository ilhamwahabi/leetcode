function isIsomorphic(s: string, t: string): boolean {
    const mapS = {}
    let countS = 0
    const mapT = {}
    let countT = 0
    for (let i = 0; i < s.length; i++) {
        if (!mapS[s[i]]) { countS++; mapS[s[i]] = countS } 
        if (!mapT[t[i]]) { countT++; mapT[t[i]] = countT }

        if (countS !== countT || mapS[s[i]] !== mapT[t[i]]) return false
    }
    
    return true
};