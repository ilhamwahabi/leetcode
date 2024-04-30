function checkPerfectNumber(num: number): boolean {
    // 1. Find it's divisor, by looping from 1 to num / 2
    // 2. Check if total === num

    let div = 0

    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) div += i
    }

    return div === num
};