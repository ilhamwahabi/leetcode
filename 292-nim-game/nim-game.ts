function canWinNim(n: number): boolean {
    if (n <= 3) return true
    else if (n % 4 === 0) return false
    else return true
};