function closestDivisors(num: number): number[] {
    // 8 -> 9 (3 3) & 10 (2 5)
    // 14 (2 7) 15 (3 5)

    // 1. Find the min abs divisor by iterate from sqrt(num+1) and sqrt(num+1) that found first

    let first = []
    let second = []

    for (let i = Math.floor(Math.sqrt(num + 1)); i >= 1; i--) {
        if ((num + 1) % i === 0) {first = [i, (num + 1) / i]; break }
    }

    for (let i = Math.floor(Math.sqrt(num + 2)); i >= 1; i--) {
        if ((num + 2) % i === 0) {second = [i, (num + 2) / i]; break }
    }

    if (Math.abs(first[1] - first[0]) > Math.abs(second[1] - second[0])) {
        return second
    } else {
        return first
    }
};