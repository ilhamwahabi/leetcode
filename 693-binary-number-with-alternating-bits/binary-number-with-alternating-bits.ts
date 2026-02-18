function hasAlternatingBits(n: number): boolean {
    const str = n.toString(2)
    for (let i = 1; i < str.length; i++) {
        if (str[i] === str[i - 1]) return false
    }
    
    return true
};