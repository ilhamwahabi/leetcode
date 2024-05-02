function coloredCells(n: number): number {
    // 1=1  +4  . 1^2 + 0^2
    // 2=5  +8  . 2^2 + 1^2
    // 3=13 +12 . 3^2 + 2^2
    // 4=25 +16 . 4^2 + 3^2
    // 5=41     . 5^2 + 4^2

    return Math.pow(n, 2) + Math.pow(n - 1, 2)
};