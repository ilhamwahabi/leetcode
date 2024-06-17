function judgeSquareSum(c: number): boolean {
    for (let i = 0; i <= Math.sqrt(c); i++) {
        const a = i * i
        const b = Math.sqrt(c - a)
        
        if (Math.floor(b) === b) return true
    }

    return false
};