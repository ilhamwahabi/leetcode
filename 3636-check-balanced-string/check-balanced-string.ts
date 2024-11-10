function isBalanced(num: string): boolean {
    let sum = 0

    for (let i = 0; i < num.length; i++) {
        if (i % 2 === 0) sum += +num[i]
        else sum -= +num[i]
    }

    return sum === 0
};