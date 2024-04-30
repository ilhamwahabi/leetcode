function isPerfectSquare(num: number): boolean {
    for (let i = 1; i <= Math.ceil(num / 2); i++) {
        if (i * i === num) return true
        else if (i * i > num) return false
    }

    return false
};