function divisorGame(n: number): boolean {
    // 1 ->  -> false
    // 2 -> 1 -> true
    // 3 -> 1 1 -> false
    // 4 -> 1 1 . 1 -> true
    // 5 -> 1 1 . 1 1 -> false

    return n % 2 === 0
};